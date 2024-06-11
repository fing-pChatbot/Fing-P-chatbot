import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import "./css/Auth.css";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    login();
    // Set the userid cookie before redirecting
    Cookies.set('userId', '1', { path: '/' });
    navigate("/");
  };
  const clientId =
    "209716783504-15djcr9u94lugi8h3cjqi606pvp5ovc3.apps.googleusercontent.com";

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <div className="auth-form">
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
              setLoginSuccess(true);
              
            }}
            onFailure={(err) => {
              console.log(err);
            }}
          />
        </GoogleOAuthProvider>
      </div>
      <button type="submit" onClick={handleLogin}>Sign up</button>

      <div className="logo-container">
        <img src="/assets/skku-logo.png" alt="skku logo" />
      </div>
    </div>
  );
};

export default Signup;
