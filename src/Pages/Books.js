import React, { useState } from "react";
function Books() {
 const [search, setSearch] = useState("");
 const books = [
 "AI Basics",
 "React Guide",
 "Node Mastery",
 "Python for AI"
 ];
 return (
 <div>
 <h1>Books</h1>
 <input
 placeholder="Search books..."
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 />
 <ul>
 {books
 .filter(b => b.toLowerCase().includes(search.toLowerCase()))
 .map((book, i) => (
 <li key={i}>
 {book}
 <button style={{ marginLeft: "10px" }}>Edit</button>
 </li>
 ))}
 </ul>
 </div>
 );
}
export default Books;
