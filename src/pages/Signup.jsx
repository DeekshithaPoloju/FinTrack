import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up button clicked");

    setError("");
    setSuccess("");

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all the fields.");
      return;
    }

    // Name validation
    if (name.length < 3) {
      setError("Name should contain at least 3 characters.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if email already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {
      setError("Email already registered.");
      return;
    }

    // Save user
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Account created successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>FinTrack</h1>
        <h3>Create Your Account</h3>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          {success && <p className="success">{success}</p>}

          <button type="submit">
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/" className="link">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;