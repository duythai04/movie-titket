import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import { useLoading } from './contexts/LoadingContext';
import { setLoadingHandler } from './api/axiosClient';
import GlobalLoading from './components/GlobalLoading/GlobalLoading';

// Client
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Admin
import AppAdmin from './admin/AppAddmin';

function App() {
  const { loading, setLoading } = useLoading();
  const [role, setRole] = useState(localStorage.getItem('role'));

  // 🔥 QUAN TRỌNG: kết nối axios ↔ loading
  useEffect(() => {
    setLoadingHandler(setLoading);
  }, [setLoading]);

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem('role'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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
      {loading && <GlobalLoading />}

      <ScrollToTop />

      <Routes>
        <Route path="/*" element={<ClientLayout />} />

        <Route
          path="/admin/*"
          element={role === 'admin' ? <AppAdmin /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
