import React from "react";
function Dashboard() {
 return (
 <div>
 <h1>Dashboard</h1>
 <div style={{ display: "flex", gap: "20px" }}>
 <div style={cardStyle}>
 <h3>Total Books</h3>
 <h1>50</h1>
 </div>
 <div style={{ ...cardStyle, background: "#16a34a" }}>
 <h3>Available Books</h3>
 <h1>30</h1>
 </div>
 </div>
 <h2 style={{ marginTop: "30px" }}>Recent Books</h2>
 <ul>
 <li>AI Basics – John</li>
 <li>React Guide – Jane</li>
 <li>Node Mastery – Jack</li>
 </ul>
 </div>
 );
}
const cardStyle = {
 background: "#2563eb",
 color: "white",
 padding: "20px",
 borderRadius: "8px",
 width: "200px"
};
export default Dashboard;