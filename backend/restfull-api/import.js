// import-to-mysql.js
import mysql from "mysql2/promise";
import DataMovie from "./movies.js";

// Cấu hình kết nối database
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "230304",
  database: "movie_booking_system",
  multipleStatements: true,
};

async function importData() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    await connection.beginTransaction();
    console.log("Bắt đầu import dữ liệu phim...");

    // 1. Đảm bảo rạp "Cinema center" tồn tại
    const [cinema] = await connection.execute(
      `INSERT IGNORE INTO cinemas (cinema_name, address, city) VALUES (?, ?, ?)`,
      ["Cinema center", "123 Đường Láng, Hà Nội", "Hà Nội"]
    );
    const [cinemaRows] = await connection.execute(
      `SELECT cinema_id FROM cinemas WHERE cinema_name = 'Cinema center'`
    );
    const cinemaId = cinemaRows[0].cinema_id;

    // 2. Tạo 10 phòng chiếu nếu chưa có (seats_1 -> seats_10)
    for (let i = 1; i <= 10; i++) {
      await connection.execute(
        `INSERT IGNORE INTO auditoriums (cinema_id, room_name, seat_map_id) VALUES (?, ?, ?)`,
        [cinemaId, `Phòng ${i}`, `seats_${i}`]
      );
    }

    const [auditoriums] = await connection.execute(
      `SELECT auditorium_id, seat_map_id FROM auditoriums WHERE cinema_id = ?`,
      [cinemaId]
    );

    const seatMapToAuditorium = {};
    auditoriums.forEach((a) => {
      seatMapToAuditorium[a.seat_map_id] = a.auditorium_id;
    });

    let count = 0;
    for (const movie of DataMovie) {
      const movieId = movie.movie_id;

      // 1. Insert phim (bỏ qua nếu đã tồn tại)
      await connection.execute(
        `
        INSERT IGNORE INTO movies (
          movie_id, title_vi, title_en, poster_url, trailer_url, synopsis, duration_mins,
          release_date, age_rating, language, director, status, price, rating, is_showing
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          movieId,
          movie.title_vi || null,
          movie.title_en || null,
          movie.poster_url || null,
          movie.trailer_url || null,
          movie.synopsis || null,
          movie.duration_mins || null,
          movie.release_date
            ? movie.release_date.split("/").reverse().join("-")
            : null,
          movie.age_rating || "T13",
          movie.language || "Tiếng Việt",
          movie.director || null,
          movie.status === "soon" || movie.status === "soon" ? "soon" : "now",
          movie.price || 90000,
          movie.rating || 0,
          movie.is_showing === false ? 0 : 1,
        ]
      );

      // 2. Insert thể loại
      if (movie.genres && Array.isArray(movie.genres)) {
        for (const genre of movie.genres) {
          await connection.execute(
            `INSERT IGNORE INTO movie_genres (movie_id, genre_name) VALUES (?, ?)`,
            [movieId, genre.trim()]
          );
        }
      }

      // 3. Insert diễn viên
      if (movie.cast && Array.isArray(movie.cast)) {
        for (const c of movie.cast) {
          await connection.execute(
            `INSERT IGNORE INTO movie_cast (movie_id, actor_name, role_name) VALUES (?, ?, ?)`,
            [movieId, c.actor_name || "", c.role || ""]
          );
        }
      }

      // 4. Insert đánh giá
      if (movie.reviews && Array.isArray(movie.reviews)) {
        for (const r of movie.reviews) {
          await connection.execute(
            `
            INSERT INTO movie_reviews (movie_id, user_name, rating, review_date, comment)
            VALUES (?, ?, ?, ?, ?)
          `,
            [
              movieId,
              r.user || "Anonymous",
              r.rating || 5,
              r.date || new Date().toISOString().split("T")[0],
              r.comment || "",
            ]
          );
        }
      }

      // 5. Insert lịch chiếu
      if (movie.cinemas && Array.isArray(movie.cinemas)) {
        for (const cinema of movie.cinemas) {
          if (!cinema.showtimes) continue;

          // Lấy auditorium theo seat_map_id (nếu có), không thì random
          let auditoriumId;
          if (movie.seat_map_id && seatMapToAuditorium[movie.seat_map_id]) {
            auditoriumId = seatMapToAuditorium[movie.seat_map_id];
          } else {
            const randomAud =
              auditoriums[Math.floor(Math.random() * auditoriums.length)];
            auditoriumId = randomAud.auditorium_id;
          }

          for (const [date, times] of Object.entries(cinema.showtimes)) {
            for (const time of times) {
              await connection.execute(
                `
                INSERT IGNORE INTO showtimes
                (movie_id, auditorium_id, show_date, show_time, price)
                VALUES (?, ?, ?, ?, ?)
              `,
                [movieId, auditoriumId, date, time, movie.price || 90000]
              );
            }
          }
        }
      }

      console.log(`Đã import: ${movie.title_vi} (ID: ${movieId})`);
      count++;
    }

    await connection.commit();
    console.log(
      "\nHOÀN TẤT! Đã import thành công",
      count,
      "bộ phim vào database."
    );
    console.log("Bạn có thể vào hệ thống đặt vé ngay bây giờ!");
  } catch (err) {
    await connection.rollback();
    console.error("Lỗi khi import:", err.message);
    console.error(err.stack);
  } finally {
    await connection.end();
  }
}

importData();
