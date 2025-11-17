// src/data/DataMovie.js
const DataMovie = [
  {
    movie_id: "1",
    title_vi: "TRUY TÌM LONG DIÊN HƯƠNG (T16)",
    title_en: "The Lost Dragon Incense",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Ftruy-tien-long-dien-huong-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=fO6X58qWA_s",
    synopsis:
      "Ngay trước thềm lễ hội lớn, bảo vật Long Diên Hương bị đánh cắp, kéo theo hai anh em Tâm - Tuấn cùng nhóm bạn vào hành trình nghẹt thở nhưng cũng đầy hài hước.",
    duration_mins: 103,
    release_date: "2025-11-10",
    genres: ["Hài", "Hành động", "Phiêu lưu"],
    age_rating: "T16",
    language: "Tiếng Việt",
    subtitles: ["Việt", "Anh"],
    director: "Lâm Hạo Dân",
    status: "now",
    cast: [
      { actor_name: "Quang Tuấn", role: "Tâm" },
      { actor_name: "Ma Ran Đô", role: "Tuấn" },
      { actor_name: "Hoàng Tóc Dài", role: "Bạn Tâm" },
      { actor_name: "Nguyên Thảo", role: "Bạn gái Tuấn" }
    ],
    rating: 8.1,
    format: ["2D", "2D Phụ đề"],
    price: 90000,
    tags: ["Hot", "Việt Nam", "Hài"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_1",
    cinemas: [
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["09:30", "11:45", "14:00", "16:20", "18:40", "21:00"]
        }
      },
      {
        cinema_id: "cns_tayson",
        cinema_name: "Cinestar Hai Bà Trưng",
        showtimes: {
          "2025-11-17": ["10:15", "12:30", "15:00", "17:30", "20:00", "22:20"]
        }
      },
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["09:00", "13:15", "17:45", "20:30"]
        }
      }
    ]
  },
  {
    movie_id: "2",
    title_vi: "NÚI TẾ VONG (T16)",
    title_en: "The Mourning Mountain",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Fnui-te-vong.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=th24BWV__n8",
    synopsis: "Ở Đài Loan có một câu nói truyền miệng nổi tiếng về khu rừng dưới Núi Ngọc Sơn…",
    duration_mins: 89,
    release_date: "2025-11-14",
    genres: ["Kinh dị", "Tâm lý"],
    age_rating: "T16",
    language: "Tiếng Trung (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Trương Tử Hào",
    status: "now",
    cast: [
      { actor_name: "Tào Hữu Ninh", role: "Nhân vật chính" },
      { actor_name: "Lưu Dĩ Hào", role: "Bạn thân" },
      { actor_name: "Viên Lễ Lâm", role: "Cô gái bí ẩn" }
    ],
    rating: 7.4,
    format: ["2D"],
    price: 85000,
    tags: ["Kinh dị", "Đang hot"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_2",
    cinemas: [
      {
        cinema_id: "cns_thanhxuan",
        cinema_name: "Cinestar Quốc Gia",
        showtimes: {
          "2025-11-17": ["10:30", "14:45", "19:00", "21:30"]
        }
      },
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["11:00", "15:20", "18:50", "22:10"]
        }
      }
    ]
  },
  {
    movie_id: "3",
    title_vi: "KHÔNG BÔNG TUYẾT NÀO TRONG SẠCH (T16)",
    title_en: "No Snow Is Innocent",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Fkhong-bong-tuyet-nao-trong-sach-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=cd2hUUP-PzY",
    synopsis: "Ai rồi cũng nói dối… Một câu chuyện tâm lý đầy bất ngờ về sự thật bị che giấu.",
    duration_mins: 108,
    release_date: "2025-11-14",
    genres: ["Hồi hộp", "Tâm lý", "Tội phạm"],
    age_rating: "T16",
    language: "Tiếng Hàn (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Kim Sung-hoon",
    status: "now",
    cast: [
      { actor_name: "Jung Ryeo-won", role: "Nữ chính" },
      { actor_name: "Lee Jung-eun", role: "Mẹ" },
      { actor_name: "Jang Jin-hee", role: "Bạn thân" }
    ],
    rating: 8.5,
    format: ["2D"],
    price: 95000,
    tags: ["Tâm lý", "Hàn Quốc"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_3",
    cinemas: [
      {
        cinema_id: "cns_giaiphong",
        cinema_name: "Cinestar Giải Phóng",
        showtimes: {
          "2025-11-17": ["09:45", "13:30", "17:15", "20:45"]
        }
      },
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["11:20", "15:00", "19:30"]
        }
      }
    ]
  },
  {
    movie_id: "4",
    title_vi: "TÌNH NGƯỜI DUYÊN MA 2025 (T18)",
    title_en: "Pee Mak 2025",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Ftinh-nguoi-duyen-ma-2025.png&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=KDvKu6rf31s",
    synopsis: "Lấy cảm hứng từ truyền thuyết dân gian Thái Lan về hồn ma Mae Nak Phra Khanong.",
    duration_mins: 104,
    release_date: "2025-11-07",
    genres: ["Kinh dị", "Hài", "Lãng mạn"],
    age_rating: "T18",
    language: "Tiếng Thái (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Banjong Pisanthanakun",
    status: "now",
    cast: [
      { actor_name: "Mario Maurer", role: "Mak" },
      { actor_name: "Davika Hoorne", role: "Nak" }
    ],
    rating: 8.8,
    format: ["2D"],
    price: 100000,
    tags: ["Thái Lan", "Kinh dị hài", "T18"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_4",
    cinemas: [
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["12:00", "16:30", "21:00", "23:15"]
        }
      },
      {
        cinema_id: "cns_tayson",
        cinema_name: "Cinestar Hai Bà Trưng",
        showtimes: {
          "2025-11-17": ["14:10", "19:20", "22:40"]
        }
      }
    ]
  },
  {
    movie_id: "5",
    title_vi: "PHÁ ĐÁM SINH NHẬT MẸ (T16)",
    title_en: "Mom's Fake Funeral",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F10-2025%2Fpha-dam-sinh-nhat-me-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=KZQ-oT-l328",
    synopsis:
      "Bị giang hồ đe dọa, một người con trai đã làm đám ma giả để lừa tiền bảo hiểm… và mọi chuyện bắt đầu hỗn loạn!",
    duration_mins: 104,
    release_date: "2025-10-31",
    genres: ["Hài", "Gia đình", "Tình cảm"],
    age_rating: "T16",
    language: "Tiếng Việt",
    subtitles: ["Việt", "Anh"],
    director: "Nguyễn Thanh Bình",
    status: "now",
    cast: [
      { actor_name: "Ái Như", role: "Mẹ" },
      { actor_name: "Thành Lộc", role: "Bố" },
      { actor_name: "Hồng Ánh", role: "Chị gái" }
    ],
    rating: 7.9,
    format: ["2D"],
    price: 85000,
    tags: ["Việt Nam", "Hài cảm động"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_5",
    cinemas: [
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["10:00", "14:30", "18:00", "20:45"]
        }
      }
    ]
  },
  {
    movie_id: "6",
    title_vi: "TRUY TÌM LONG DIÊN HƯƠNG (T16)",
    title_en: "The Lost Dragon Incense",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Ftruy-tien-long-dien-huong-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=fO6X58qWA_s",
    synopsis:
      "Ngay trước thềm lễ hội lớn, bảo vật Long Diên Hương bị đánh cắp, kéo theo hai anh em Tâm - Tuấn cùng nhóm bạn vào hành trình nghẹt thở nhưng cũng đầy hài hước.",
    duration_mins: 103,
    release_date: "2025-11-10",
    genres: ["Hài", "Hành động", "Phiêu lưu"],
    age_rating: "T16",
    language: "Tiếng Việt",
    subtitles: ["Việt", "Anh"],
    director: "Lâm Hạo Dân",
    status: "coming",
    cast: [
      { actor_name: "Quang Tuấn", role: "Tâm" },
      { actor_name: "Ma Ran Đô", role: "Tuấn" },
      { actor_name: "Hoàng Tóc Dài", role: "Bạn Tâm" },
      { actor_name: "Nguyên Thảo", role: "Bạn gái Tuấn" }
    ],
    rating: 8.1,
    format: ["2D", "2D Phụ đề"],
    price: 90000,
    tags: ["Hot", "Việt Nam", "Hài"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_1",
    cinemas: [
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["09:30", "11:45", "14:00", "16:20", "18:40", "21:00"]
        }
      },
      {
        cinema_id: "cns_tayson",
        cinema_name: "Cinestar Hai Bà Trưng",
        showtimes: {
          "2025-11-17": ["10:15", "12:30", "15:00", "17:30", "20:00", "22:20"]
        }
      },
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["09:00", "13:15", "17:45", "20:30"]
        }
      }
    ]
  },
  {
    movie_id: "7",
    title_vi: "TRUY TÌM LONG DIÊN HƯƠNG (T16)",
    title_en: "The Lost Dragon Incense",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Ftruy-tien-long-dien-huong-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=fO6X58qWA_s",
    synopsis:
      "Ngay trước thềm lễ hội lớn, bảo vật Long Diên Hương bị đánh cắp, kéo theo hai anh em Tâm - Tuấn cùng nhóm bạn vào hành trình nghẹt thở nhưng cũng đầy hài hước.",
    duration_mins: 103,
    release_date: "2025-11-10",
    genres: ["Hài", "Hành động", "Phiêu lưu"],
    age_rating: "T16",
    language: "Tiếng Việt",
    subtitles: ["Việt", "Anh"],
    director: "Lâm Hạo Dân",
    status: "coming",
    cast: [
      { actor_name: "Quang Tuấn", role: "Tâm" },
      { actor_name: "Ma Ran Đô", role: "Tuấn" },
      { actor_name: "Hoàng Tóc Dài", role: "Bạn Tâm" },
      { actor_name: "Nguyên Thảo", role: "Bạn gái Tuấn" }
    ],
    rating: 8.1,
    format: ["2D", "2D Phụ đề"],
    price: 90000,
    tags: ["Hot", "Việt Nam", "Hài"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_1",
    cinemas: [
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["09:30", "11:45", "14:00", "16:20", "18:40", "21:00"]
        }
      },
      {
        cinema_id: "cns_tayson",
        cinema_name: "Cinestar Hai Bà Trưng",
        showtimes: {
          "2025-11-17": ["10:15", "12:30", "15:00", "17:30", "20:00", "22:20"]
        }
      },
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["09:00", "13:15", "17:45", "20:30"]
        }
      }
    ]
  },
  {
    movie_id: "8",
    title_vi: "NÚI TẾ VONG (T16)",
    title_en: "The Mourning Mountain",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Fnui-te-vong.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=th24BWV__n8",
    synopsis: "Ở Đài Loan có một câu nói truyền miệng nổi tiếng về khu rừng dưới Núi Ngọc Sơn…",
    duration_mins: 89,
    release_date: "2025-11-14",
    genres: ["Kinh dị", "Tâm lý"],
    age_rating: "T16",
    language: "Tiếng Trung (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Trương Tử Hào",
    status: "coming",
    cast: [
      { actor_name: "Tào Hữu Ninh", role: "Nhân vật chính" },
      { actor_name: "Lưu Dĩ Hào", role: "Bạn thân" },
      { actor_name: "Viên Lễ Lâm", role: "Cô gái bí ẩn" }
    ],
    rating: 7.4,
    format: ["2D"],
    price: 85000,
    tags: ["Kinh dị", "Đang hot"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_2",
    cinemas: [
      {
        cinema_id: "cns_thanhxuan",
        cinema_name: "Cinestar Quốc Gia",
        showtimes: {
          "2025-11-17": ["10:30", "14:45", "19:00", "21:30"]
        }
      },
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["11:00", "15:20", "18:50", "22:10"]
        }
      }
    ]
  },
  {
    movie_id: "9",
    title_vi: "KHÔNG BÔNG TUYẾT NÀO TRONG SẠCH (T16)",
    title_en: "No Snow Is Innocent",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Fkhong-bong-tuyet-nao-trong-sach-poster.jpg&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=cd2hUUP-PzY",
    synopsis: "Ai rồi cũng nói dối… Một câu chuyện tâm lý đầy bất ngờ về sự thật bị che giấu.",
    duration_mins: 108,
    release_date: "2025-11-14",
    genres: ["Hồi hộp", "Tâm lý", "Tội phạm"],
    age_rating: "T16",
    language: "Tiếng Hàn (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Kim Sung-hoon",
    status: "coming",
    cast: [
      { actor_name: "Jung Ryeo-won", role: "Nữ chính" },
      { actor_name: "Lee Jung-eun", role: "Mẹ" },
      { actor_name: "Jang Jin-hee", role: "Bạn thân" }
    ],
    rating: 8.5,
    format: ["2D"],
    price: 95000,
    tags: ["Tâm lý", "Hàn Quốc"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_3",
    cinemas: [
      {
        cinema_id: "cns_giaiphong",
        cinema_name: "Cinestar Giải Phóng",
        showtimes: {
          "2025-11-17": ["09:45", "13:30", "17:15", "20:45"]
        }
      },
      {
        cinema_id: "cns_xuanthuy",
        cinema_name: "Cinestar Xuân Thủy",
        showtimes: {
          "2025-11-17": ["11:20", "15:00", "19:30"]
        }
      }
    ]
  },

  {
    movie_id: "4",
    title_vi: "TÌNH NGƯỜI DUYÊN MA 2025 (T18)",
    title_en: "Pee Mak 2025",
    poster_url:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2025%2Ftinh-nguoi-duyen-ma-2025.png&w=1080&q=75",
    trailer_url: "https://www.youtube.com/watch?v=KDvKu6rf31s",
    synopsis: "Lấy cảm hứng từ truyền thuyết dân gian Thái Lan về hồn ma Mae Nak Phra Khanong.",
    duration_mins: 104,
    release_date: "2025-11-07",
    genres: ["Kinh dị", "Hài", "Lãng mạn"],
    age_rating: "T18",
    language: "Tiếng Thái (Phụ đề Việt)",
    subtitles: ["Việt", "Anh"],
    director: "Banjong Pisanthanakun",
    status: "coming",
    cast: [
      { actor_name: "Mario Maurer", role: "Mak" },
      { actor_name: "Davika Hoorne", role: "Nak" }
    ],
    rating: 8.8,
    format: ["2D"],
    price: 100000,
    tags: ["Thái Lan", "Kinh dị hài", "T18"],
    is_showing: true,
    is_coming_soon: false,
    seat_map_id: "seats_4",
    cinemas: [
      {
        cinema_id: "cns_mydinh",
        cinema_name: "Cinestar Mỹ Đình",
        showtimes: {
          "2025-11-17": ["12:00", "16:30", "21:00", "23:15"]
        }
      },
      {
        cinema_id: "cns_tayson",
        cinema_name: "Cinestar Hai Bà Trưng",
        showtimes: {
          "2025-11-17": ["14:10", "19:20", "22:40"]
        }
      }
    ]
  },
];

export default DataMovie;