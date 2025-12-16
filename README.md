# 🎬 Movie Ticket — Ứng Dụng Đặt Vé Xem Phim
Movie Ticket là một dự án web ứng dụng đặt vé xem phim trực tuyến được xây dựng với kiến trúc frontend + backend giúp người dùng xem lịch phim, chọn suất chiếu, chọn ghế và đặt vé một cách dễ dàng.


## 💡 Mục tiêu

Dự án này nhằm mục đích tạo ra một hệ thống đặt vé xem phim đầy đủ tính năng, hỗ trợ:

- Xem danh sách phim và chi tiết suất chiếu.

- Chọn ghế trong rạp theo sơ đồ chỗ ngồi.

- Đăng ký / đăng nhập người dùng.

- Đặt vé và thanh toán (mô phỏng).

- Quản lý đặt vé của người dùng.

## 📦 Cấu trúc dự án

movie-titket/
├── backend/                # Server API (ví dụ: Node.js / Express.js)
├── frontend/               # Giao diện người dùng (React)
├── .gitignore
├── README.md
└── ...
### frontend chứa phần giao diện web và logic UX/UI.
### backend chứa API cung cấp dữ liệu phim, showtime, xử lý đặt vé và quản lý người dùng.

## 🚀 Tính năng chính

### ⭐ Người dùng

#### 📽️ Xem danh sách phim đang chiếu

#### 📅 Chọn lịch chiếu theo ngày & giờ

#### 🪑 Chọn ghế trên sơ đồ chỗ ngồi

#### 🎟️ Đặt vé & xem thông tin vé

#### 🔐 Đăng ký / Đăng nhập

### 🛠️ Quản trị (tùy triển khai)

#### 🎬 Thêm / sửa / xóa phim

#### 🗓️ Quản lý lịch chiếu

#### 📊 Xem thống kê đặt vé

## 🛠️ Công nghệ sử dụng

| Phần     | Công nghệ                |
| -------- | -------------------------|
| Frontend | React                    |
| Backend  | Node.js                  |
| Database | MySQL                    |
| DevOps   | Vercel / Railway / Render|

## 📌 Cách cài đặt & chạy dự án

#### 1. Clone repository

git clone https://github.com/duythai04/movie-titket.git
cd movie-titket

#### 2. Backend

cd backend
##### Cài dependencies
npm install         # hoặc composer install
##### Tạo file .env
cp .env.example .env
##### Cấu hình DB + SECRET trong .env
##### Chạy server
npm run dev        

#### 3. Frontend

cd frontend
npm install
npm run dev


## 📌 Cấu hình môi trường

Bạn cần tạo một file .env (hoặc .env.local) ở cả backend và frontend chứa các biến môi trường như:

##### Backend
PORT=5000
DATABASE_URL=mysql://...
JWT_SECRET=...

##### Frontend
VITE_API_BASE_URL=http://localhost:5000/api

## 📊 API Endpoints

| Method | Endpoint         | Mô tả              |
| ------ | ---------------- | ------------------ |
| GET    | `/movies`        | Lấy danh sách phim |
| GET    | `/movies/:id`    | Lấy chi tiết phim  |
| POST   | `/auth/signup`   | Đăng ký            |
| POST   | `/auth/login`    | Đăng nhập          |
| POST   | `/bookings`      | Đặt vé             |
| GET    | `/bookings/user` | Lấy lịch sử đặt vé |


## 🎨 Giao diện demo

###### Link: https://cinemabooking-peach.vercel.app/



