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

MOVIE-APP/
├── .vscode/                 # Cấu hình riêng cho VS Code
└── movie-titket/            # Thư mục chính của ứng dụng
    ├── backend/             # Mã nguồn phía Server
    │   ├── database/        # Cấu hình và kết nối cơ sở dữ liệu
    │   ├── node_modules/    # Các thư viện backend đã cài đặt
    │   ├── restfull-api/    # Định nghĩa các routes và controllers API
    │   ├── package-lock.json
    │   └── package.json     # Các dependency của backend
    └── frontend/            # Mã nguồn phía Client (React + Vite)
        ├── node_modules/    # Các thư viện frontend đã cài đặt
        ├── public/          # Các tài nguyên tĩnh công khai
        ├── src/             # Thư mục mã nguồn chính
        │   ├── admin/       # Các trang/hợp phần quản trị
        │   ├── api/         # Cấu hình gọi API (Axios/Fetch)
        │   ├── assets/      # Hình ảnh, font chữ, icons
        │   ├── components/  # Các component dùng chung (Button, Card,...)
        │   ├── contexts/    # Quản lý trạng thái (React Context API)
        │   ├── pages/       # Các trang chính của ứng dụng
        │   ├── styles/      # Các file CSS/SCSS toàn cục
        │   ├── App.css
        │   ├── App.jsx      # Component gốc của ứng dụng
        │   ├── index.css
        │   └── main.jsx     # Điểm nhập (entry point) của React
        ├── .env             # Biến môi trường (API Key, Base URL)
        ├── .gitignore       # Các file bỏ qua khi dùng Git
        ├── .prettierrc      # Cấu hình định dạng code
        ├── eslint.config.js # Cấu hình kiểm lỗi code
        ├── index.html       # File HTML chính
        ├── package-lock.json
        ├── package.json     # Các dependency của frontend
        ├── vercel.json      # Cấu hình để deploy lên Vercel
        └── vite.config.js   # Cấu hình công cụ build Vite
├── image.png
└── README.md                # Tài liệu hướng dẫn dự án

- frontend chứa phần giao diện web và logic UX/UI.
- backend chứa API cung cấp dữ liệu phim, showtime, xử lý đặt vé và quản lý người dùng.

## 🚀 Tính năng chính

* ⭐ Người dùng

- 📽️ Xem danh sách phim đang chiếu

- 📅 Chọn lịch chiếu theo ngày & giờ

- 🪑 Chọn ghế trên sơ đồ chỗ ngồi

- 🎟️ Đặt vé & xem thông tin vé

- 🔐 Đăng ký / Đăng nhập

* 🛠️ Quản trị (tùy triển khai)

- 🎬 Thêm / sửa / xóa phim

- 🗓️ Quản lý lịch chiếu

- 📊 Xem thống kê đặt vé

## 🛠️ Công nghệ sử dụng

| Phần     | Công nghệ                |
| -------- | -------------------------|
| Frontend | React                    |
| Backend  | Node.js                  |
| Database | MySQL                    |
| DevOps   | Vercel / Railway         |

## 📌 Cách cài đặt & chạy dự án

#### 1. Clone repository

git clone https://github.com/duythai04/movie-titket.git \\
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

###### Link: https://cinema-one-brown.vercel.app/



