import "./App.css";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MoviePage } from "./pages/MoviePage";
import { Cast } from "./components/Cast";
import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Reviews } from "./components/Reviews";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
