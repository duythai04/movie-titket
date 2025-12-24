-- ===========================
-- 1. MOVIES & THÔNG TIN PHIM
-- ===========================

CREATE TABLE movies (
    movie_id VARCHAR(10) PRIMARY KEY,
    title_vi VARCHAR(255),
    title_en VARCHAR(255),
    poster_url TEXT,
    trailer_url TEXT,
    synopsis TEXT,
    duration_mins INT,
    release_date DATE,
    age_rating VARCHAR(10),
    language VARCHAR(50),
    director VARCHAR(255),
    status ENUM('now', 'soon') DEFAULT 'now',
    price INT,
    rating FLOAT,
    is_showing TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id VARCHAR(10),
    genre_name VARCHAR(100),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

CREATE TABLE movie_cast (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id VARCHAR(10),
    actor_name VARCHAR(255),
    role_name VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

CREATE TABLE movie_reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id VARCHAR(10),
    user_name VARCHAR(255),
    rating INT,
    review_date DATE,
    comment TEXT,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);


-- ===========================
-- 2. CINEMA / RẠP & PHÒNG CHIẾU
-- ===========================

CREATE TABLE cinemas (
    cinema_id INT AUTO_INCREMENT PRIMARY KEY,
    cinema_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(100)
);

CREATE TABLE auditoriums (
    auditorium_id INT AUTO_INCREMENT PRIMARY KEY,
    cinema_id INT,
    room_name VARCHAR(100),
    seat_map_id VARCHAR(50),
    FOREIGN KEY (cinema_id) REFERENCES cinemas(cinema_id)
);


-- ===========================
-- 3. LOẠI GHẾ & LOẠI VÉ
-- ===========================

CREATE TABLE seat_types (
    seat_type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    extra_price INT DEFAULT 0
);

CREATE TABLE ticket_types (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    extra_price INT DEFAULT 0
);


-- ===========================
-- 4. GHẾ & SƠ ĐỒ GHẾ
-- ===========================

CREATE TABLE seats (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    auditorium_id INT,
    seat_row VARCHAR(5),
    seat_number INT,
    seat_type_id INT,
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id),
    FOREIGN KEY (seat_type_id) REFERENCES seat_types(seat_type_id)
);


-- ===========================
-- 5. SUẤT CHIẾU (SHOWTIMES)
-- ===========================

CREATE TABLE showtimes (
    showtime_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id VARCHAR(10),
    auditorium_id INT,
    show_date DATE,
    show_time TIME,
    price INT,
    format ENUM('2D','3D','IMAX','4DX') DEFAULT '2D',
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id)
);
-- ===========================
-- 6. Migration: tạo bảng showtime_seats
-- ===========================
CREATE TABLE IF NOT EXISTS showtime_seats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  showtime_id INT NOT NULL,
  seat_id INT NOT NULL,
  status ENUM('AVAILABLE','HELD','BOOKED') NOT NULL DEFAULT 'AVAILABLE',
  held_by VARCHAR(255) DEFAULT NULL,    
  held_until DATETIME DEFAULT NULL,
  booking_ticket_id INT DEFAULT NULL,   
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_showtime_seat (showtime_id, seat_id),
  INDEX idx_showtime (showtime_id),
  FOREIGN KEY (showtime_id) REFERENCES showtimes(showtime_id) ON DELETE CASCADE,
  FOREIGN KEY (seat_id) REFERENCES seats(seat_id) ON DELETE CASCADE
);



-- ===========================  
-- 6. VÉ (TICKETS)
-- ===========================

CREATE TABLE tickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    showtime_id INT,
    seat_id INT,
    user_name VARCHAR(255),
    ticket_type_id INT,
    final_price INT,
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (showtime_id) REFERENCES showtimes(showtime_id),
    FOREIGN KEY (seat_id) REFERENCES seats(seat_id),
    FOREIGN KEY (ticket_type_id) REFERENCES ticket_types(type_id),
    CONSTRAINT unique_ticket UNIQUE (showtime_id, seat_id)  -- chống đặt trùng ghế
);


-- ===========================
-- 7. USERS
-- ===========================

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    avatar_url TEXT,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- ===========================
-- 8. KHUYẾN MÃI
-- ===========================

CREATE TABLE promotions (
    promo_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE,
    description TEXT,
    discount_type ENUM('percent', 'fixed'),
    discount_value INT,
    min_price INT,
    start_date DATE,
    end_date DATE,
    is_active TINYINT(1) DEFAULT 1
);


-- ===========================
-- 9. COMBO BẮP NƯỚC
-- ===========================

CREATE TABLE food_combo (
    combo_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price INT,
    description TEXT,
    image_url TEXT
);


-- ===========================
-- 10. ORDERS
-- ===========================

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount INT,
    promo_id INT,
    payment_method ENUM('momo','zalopay','visa','cash'),
    status ENUM('pending','paid','cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (promo_id) REFERENCES promotions(promo_id)
);


-- ===========================
-- 11. ORDER ITEMS
-- ===========================

CREATE TABLE order_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    ticket_id INT,
    combo_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (ticket_id) REFERENCES tickets(ticket_id),
    FOREIGN KEY (combo_id) REFERENCES food_combo(combo_id)
);


-- ===========================
-- 12. LOG ADMIN
-- ===========================

CREATE TABLE admin_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT,
    action VARCHAR(255),
    target_table VARCHAR(255),
    target_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(user_id)
);



/* ===========================
   1. MOVIES & LIÊN QUAN
   =========================== */

-- movies
CREATE INDEX idx_movies_status ON movies(status);
CREATE INDEX idx_movies_showing ON movies(is_showing);
CREATE INDEX idx_movies_release ON movies(release_date);

-- movie_genres
CREATE INDEX idx_movie_genres_movie ON movie_genres(movie_id);
CREATE INDEX idx_movie_genres_genre ON movie_genres(genre_name);

-- movie_cast
CREATE INDEX idx_movie_cast_movie ON movie_cast(movie_id);

-- movie_reviews
CREATE INDEX idx_movie_reviews_movie ON movie_reviews(movie_id);
CREATE INDEX idx_movie_reviews_rating ON movie_reviews(rating);



/* ===========================
   2. CINEMAS & AUDITORIUMS
   =========================== */

-- cinemas
CREATE INDEX idx_cinemas_city ON cinemas(city);

-- auditoriums
CREATE INDEX idx_auditoriums_cinema ON auditoriums(cinema_id);



/* ===========================
   3. SEAT TYPES & TICKET TYPES
   =========================== */

-- seat_types
CREATE INDEX idx_seat_types_name ON seat_types(name);

-- ticket_types
CREATE INDEX idx_ticket_types_name ON ticket_types(name);



/* ===========================
   4. SEATS & SEAT MAP
   =========================== */

-- seats
CREATE INDEX idx_seats_auditorium ON seats(auditorium_id);
CREATE INDEX idx_seats_type ON seats(seat_type_id);
CREATE INDEX idx_seats_position ON seats(auditorium_id, seat_row, seat_number);



/* ===========================
   5. SHOWTIMES
   =========================== */

-- showtimes
CREATE INDEX idx_showtimes_movie ON showtimes(movie_id);
CREATE INDEX idx_showtimes_auditorium ON showtimes(auditorium_id);
CREATE INDEX idx_showtimes_date ON showtimes(show_date);
CREATE INDEX idx_showtimes_movie_date ON showtimes(movie_id, show_date);



/* ===========================
   6. SHOWTIME_SEATS (CRITICAL)
   =========================== */

-- showtime_seats
CREATE INDEX idx_showtime_seats_showtime ON showtime_seats(showtime_id);
CREATE INDEX idx_showtime_seats_status ON showtime_seats(status);
CREATE INDEX idx_showtime_seats_held_until ON showtime_seats(held_until);



/* ===========================
   7. TICKETS
   =========================== */

-- tickets
CREATE INDEX idx_tickets_showtime ON tickets(showtime_id);
CREATE INDEX idx_tickets_user ON tickets(user_name);
CREATE INDEX idx_tickets_type ON tickets(ticket_type_id);



/* ===========================
   8. USERS
   =========================== */

-- users
CREATE INDEX idx_users_role ON users(role);
/* email đã UNIQUE nên đã có index */



/* ===========================
   9. PROMOTIONS
   =========================== */

-- promotions
CREATE INDEX idx_promotions_active ON promotions(is_active);
CREATE INDEX idx_promotions_date ON promotions(start_date, end_date);



/* ===========================
   10. FOOD COMBO
   =========================== */

-- food_combo
CREATE INDEX idx_food_combo_price ON food_combo(price);



/* ===========================
   11. ORDERS & ORDER ITEMS
   =========================== */

-- orders
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at);

-- order_items
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_ticket ON order_items(ticket_id);



/* ===========================
   12. ADMIN LOGS
   =========================== */

-- admin_logs
CREATE INDEX idx_admin_logs_admin ON admin_logs(admin_id);
CREATE INDEX idx_admin_logs_table ON admin_logs(target_table);
CREATE INDEX idx_admin_logs_created ON admin_logs(created_at);



UPDATE movies
SET banner_url = 'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202509/11934_206_100001.jpg'
WHERE movie_id = '6';
