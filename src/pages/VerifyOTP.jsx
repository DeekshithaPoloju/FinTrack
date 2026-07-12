import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VerifyOTP.css";

function VerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    const savedOTP = localStorage.getItem("otp");

    if (otp === savedOTP) {
      alert("OTP Verified Successfully");
      navigate("/reset-password");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="otp-container">

      <div className="otp-box">

        <h1>OTP Verification</h1>

        <p>
          Enter the 6-digit OTP sent to your email.
        </p>

        <form onSubmit={handleVerify}>

          <input
            type="text"
            maxLength="6"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit">
            Verify OTP
          </button>

        </form>

      </div>

    </div>
  );
}

export default VerifyOTP;