import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#00bcd4",
          padding: "12px 40px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          color: "white",
          fontSize: "18px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Accueil
        </Link>
        <span>|</span>
        <Link to="/quiz" style={{ textDecoration: "none", color: "white" }}>
          Quiz
        </Link>
        <span>|</span>
        <Link to="/result" style={{ textDecoration: "none", color: "white" }}>
          Résultat
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}
