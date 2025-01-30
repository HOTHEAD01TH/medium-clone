import { useState } from "react";

export const Signup = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     
     const signup = async () => {
     setLoading(true);
     try {
          const response = await fetch("/api/v1/user/signup", {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          });
          if (response.status === 201) {
          window.location.href = "/signin";
          } else {
          setError("Failed to sign up");
          }
     } catch (error) {
          setError("Failed to sign up");
     }
     setLoading(false);
     };
     
     return (
     <div>
          <h1>Signup</h1>
          <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signup} disabled={loading}>
          {loading ? "Loading..." : "Signup"}
          </button>
          <p>{error}</p>
     </div>
     );
     }