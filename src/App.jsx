import { Routes, Route } from 'react-router-dom';
import './App.css';

// Client
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
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ⭐ CLIENT ROUTES */}
        <Route
          path="/*"
          element={
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
          }
        />

        {/* ⭐ ADMIN ROUTE (React Admin standalone) */}
        <Route path="/admin/*" element={<AppAdmin />} />
      </Routes>
    </>
  );
}

export default App;
