import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(params) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();

  let handleLogin=async (e)=>{
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:8000/api/token/", {
        username: username,
        password: password,
      });

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      navigate("/dashboard");
    } catch (error) {
      setError('Invalid credentials.the ticket booth rejected you.');
    }
  };



  return(
    <>
    {/* <h1>Login Page</h1>

    <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button type="submit">Log In</button>

    </form> */}

        <div>
             <h2>Nigthclub Entrance</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}
                />
                <br />
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <button type='submit'>Get Wristband</button>
            </form>
        </div>


    </>
  )
}