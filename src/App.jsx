import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./pages/MovieList/MovieList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movieDetail/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
