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

CREATE TABLE showtimes (
    showtime_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id VARCHAR(10),
    auditorium_id INT,
    show_date DATE,
    show_time TIME,
    price INT,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id)
);

CREATE TABLE seats (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    auditorium_id INT,
    seat_row VARCHAR(5),
    seat_number INT,
    seat_type ENUM('standard','vip') DEFAULT 'standard',
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id)
);

CREATE TABLE tickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    showtime_id INT,
    seat_id INT,
    user_name VARCHAR(255),
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (showtime_id) REFERENCES showtimes(showtime_id),
    FOREIGN KEY (seat_id) REFERENCES seats(seat_id)
);

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
