import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  // هنا كنستقبلو النتيجة لي جاية من Quiz
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  // هنا كنوجدو navigate باش نرجعو للصفحات الأخرى
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Résultat</h1>

      {/* عرض السكور فقط */}
      <h2 style={{ fontSize: "24px" }}>
        Votre score : {score} / {total}
      </h2>

      {/* الزرين ديال Rejouer و Accueil */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
        }}
      >
        {/* يرجّع مباشرة لصفحة Quiz */}
        <button
          onClick={() => navigate("/quiz")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #333",
            cursor: "pointer",
            background: "#00bcd4",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Recommencer le quiz
        </button>

        {/* يرجّع لصفحة Accueil */}
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #000000ff",
            cursor: "pointer",
            background: "white",
            fontWeight: "bold",
          }}
        >
          Accueil
        </button>
      </div>
    </main>
  );
}
