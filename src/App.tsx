import "./App.css";
import { Home } from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/moveis">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
