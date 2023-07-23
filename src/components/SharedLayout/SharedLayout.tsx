import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => (
  <>
    {" "}
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies/">Movies</Link>
    </nav>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);
