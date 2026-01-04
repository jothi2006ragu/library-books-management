import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
 return (
 <div style={styles.sidebar}>
 <h2>Library</h2>
 <Link style={styles.link} to="/">Dashboard</Link>
 <Link style={styles.link} to="/books">Books</Link>
 <Link style={styles.link} to="/add-book">Add Book</Link>
 <Link style={styles.link} to="/settings">Settings</Link>
 </div>
 );
}
const styles = {
 sidebar: {
 width: "200px",
 height: "100vh",
 background: "#1e293b",
 color: "white",
 padding: "20px"
 },
 link: {
 display: "block",
 color: "white",
 margin: "15px 0",
 textDecoration: "none"
 }
};
export default Sidebar;
