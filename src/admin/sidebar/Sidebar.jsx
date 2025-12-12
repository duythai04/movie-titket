import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "220px", background: "#222", height: "100vh", color: "#fff", padding: "20px" }}>
      <h2>Admin</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/admin" style={{ color: "#fff" }}>Dashboard</Link></li>
        <li><Link to="/admin/movies" style={{ color: "#fff" }}>Quản lý phim</Link></li>
        <li><Link to="/admin/users" style={{ color: "#fff" }}>Quản lý users</Link></li>
        <li><Link to="/admin/showtimes" style={{ color: "#fff" }}>Lịch chiếu</Link></li>
      </ul>
    </div>
  );
}
