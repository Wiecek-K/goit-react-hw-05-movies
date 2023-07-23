// import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

// const Home = React.lazy(() => import("./pages/Home/Home"));
// const Movies = React.lazy(() => import("./pages/Movies/Movies"));
// const MoviePage = React.lazy(() => import("./pages/MoviePage/MoviePage"));

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
