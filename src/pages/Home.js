import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        backgroundColor: "#ffffffff",
      }}
    >
      {}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/logo.png" // ← هادي الصورة خاصها تكون داخل مجلد public باسم logo.png
          alt="Quiz Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </div>

      {/* العنوان الرئيسي */}
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>React Quiz App</h1>

      {/* النص التوضيحي */}
      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          margin: 0,
          color: "#555",
          lineHeight: 1.5,
        }}
      >
        Testez vos connaissances en React avec ce quiz interactif. Répondez à
        une série de questions et découvrez votre score à la fin.
      </p>

      {/* الزر */}
      <Link to="/quiz">
        <button
          style={{
            marginTop: "25px",
            padding: "12px 26px",
            fontSize: "16px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Commencer le quiz →
        </button>
      </Link>

      {/* المربعات لتحت */}
<div
  style={{
    display: "flex",
    gap: "80px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "150px",
      height: "100px",
      borderRadius: "16px",
      backgroundColor: "#1d4ed8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    10<br />Questions
  </div>

  <div
    style={{
      width: "150px",
      height: "100px",
      borderRadius: "16px",
      backgroundColor: "#1d4ed8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    ~5 min<br />Durée estimée
  </div>

  <div
    style={{
      width: "150px",
      height: "100px",
      borderRadius: "16px",
      backgroundColor: "#1d4ed8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    QCM<br />Format
  </div>
</div>
    </main>
  );
}
