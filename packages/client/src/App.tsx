import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Monorepo App</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;
