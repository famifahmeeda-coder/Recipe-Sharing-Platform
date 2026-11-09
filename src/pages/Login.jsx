
import { useState } from "react"
import API from "../api/axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/users/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token)

            setMessage("Login successful!")

        } catch (error) {
            setMessage(
                error.response?.data?.message || "Login failed. Please try again."
            )
        }
    }

    return (
        <div>
            <h2>Login to Yumoria</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    )
}

export default Login
