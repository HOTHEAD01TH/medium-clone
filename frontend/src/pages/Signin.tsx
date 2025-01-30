import { useState } from 'react';
export const Signin = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     const signin = async () => {
          setLoading(true);
          try {
               const response = await fetch("/api/v1/user/signin", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
               });
               if (response.status === 200) {
                    window.location.href = "/blog";
               }
               else {
                    setError("Failed to sign in");
               }
          }
          catch (error) {
               setError("Failed to sign in");
          }
          setLoading(false);
     };
     return (<div>
       <h1>Signin</h1>
       <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
       <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
       <button onClick={signin} disabled={loading}>
          {loading ? "Loading..." : "Signin"}
       </button>
       <p>{error}</p>
     </div>);
     }