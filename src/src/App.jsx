export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>OFM Chat OS</h1>
      <p>Live Agency Chat Intelligence Platform</p>

      <div style={{ marginTop: "30px" }}>
        <button style={btn}>Agency Owner</button>
        <button style={btn}>Manager</button>
        <button style={btn}>Chatter</button>
      </div>

      <p style={{ marginTop: "40px", opacity: 0.6 }}>
        System status: Online
      </p>
    </div>
  );
}

const btn = {
  padding: "12px 20px",
  marginRight: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  cursor: "pointer"
};
