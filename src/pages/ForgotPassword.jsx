import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSendOTP = (e) => {
    e.preventDefault();

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    if (email !== user.email) {
      alert("Email not found.");
      return;
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    );

    localStorage.setItem("otp", otp);
    localStorage.setItem("resetEmail", email);

    alert(
      "Demo OTP: " + otp + "\n\n(In a real application this would be sent to your email.)"
    );

    navigate("/verify-otp");
  };

  return (
    <div className="forgot-container">

      <div className="forgot-box">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email address.
        </p>

        <form onSubmit={handleSendOTP}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button type="submit">
            Send OTP
          </button>

        </form>

      </div>

    </div>
  );
}

export default ForgotPassword;