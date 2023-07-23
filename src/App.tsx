import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";
import { NotFound } from "./pages/NotFound/NotFound";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Movies = React.lazy(() => import("./pages/Movies/Movies"));
const MoviePage = React.lazy(() => import("./pages/MoviePage/MoviePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
