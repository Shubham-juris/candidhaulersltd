export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "30px",
        boxSizing: "border-box",
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#fff",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "110px",
            lineHeight: "1",
            fontWeight: "700",
            color: "#222",
          }}
        >
          404
        </h1>

        <h2
          style={{
            margin: "25px 0 10px",
            fontSize: "28px",
            fontWeight: "600",
            color: "#222",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#666",
          }}
        >
          The requested page could not be found.
        </p>
      </div>
    </main>
  );
}
