import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const email = localStorage.getItem("resetEmail");

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    if (user.email === email) {
      user.password = newPassword;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.removeItem("otp");
      localStorage.removeItem("resetEmail");

      alert("Password Reset Successfully!");

      navigate("/");
    }
  };

  return (
    <div className="reset-container">

      <div className="reset-box">

        <h1>Reset Password</h1>

        <p>Create your new password.</p>

        <form onSubmit={handleReset}>

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResetPassword;