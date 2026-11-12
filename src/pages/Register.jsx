import { useState } from "react"
import API from "../api/axios"

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setMessage("")

            const response = await API.post("/users/register", {
                name,
                email,
                password
            })

            setMessage(
                response.data.message || "Registration successful!"
            )

            setName("")
            setEmail("")
            setPassword("")

        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Create Your Yumoria Account</h2>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

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

                <button type="submit" disabled={loading}>
                    {loading ? "Creating Account..." : "Register"}
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    )
}

export default Register