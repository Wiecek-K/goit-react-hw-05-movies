import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SharedLayoutProps {
  children: ReactNode;
}

export const SharedLayout = ({ children }: SharedLayoutProps) => (
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies/">Movies</Link>
    </nav>
    {children}
  </>
);
