export default function CenterMonogram() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%)",
        boxShadow: "0 8px 28px rgba(30,58,138,0.3), 0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        border: "3px solid white",
      }}
    >
      <span
        style={{
          fontSize: 19,
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.04em",
          fontFamily: "'Cabinet Grotesk',sans-serif",
        }}
      >
        CEM
      </span>
    </div>
  );
}
