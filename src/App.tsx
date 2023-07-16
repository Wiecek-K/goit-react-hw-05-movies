import "./App.css";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Cast } from "./components/Cast/Cast";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { Reviews } from "./components/Reviews/Reviews";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
