import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

// Client Components
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Admin (React Admin)
import AppAdmin from './admin/AppAddmin';

function App() {
  //  Role phải ở trong state để App tự re-render khi login
  const [role, setRole] = useState(localStorage.getItem('role'));

  //  Lắng nghe sự thay đổi của localStorage (login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem('role'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // 🚀 Layout Client
  const ClientLayout = () => (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* CLIENT */}
        <Route path="/*" element={<ClientLayout />} />

        {/* ADMIN → chỉ admin mới vào */}
        <Route
          path="/admin/*"
          element={role === 'admin' ? <AppAdmin /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
