// components/Login.js
import { useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Head from "next/head";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = async () => {
    if (!phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }
    try {
      const res = await axios.post("https://client-ra9o.onrender.com/api/send-otp", {
        phoneNumber,
      });
      if (res.data.success) {
        setOtpSent(true);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("https://client-ra9o.onrender.com/api/verify-otp", {
        phoneNumber,
        otp,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
      } else {
        console.error("Backend returned error:", res.data.message);
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      alert("Verification failed. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    try {
      const res = await axios.post("https://client-ra9o.onrender.com/api/google-auth", {
        token,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        console.log("User info:", res.data.user);
      } else {
        alert("Google authentication failed.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <GoogleOAuthProvider clientId="647699521634-cete4gujluj1cpcbhq4nkq4ebju8854u.apps.googleusercontent.com">
      {/* Metadata for SEO */}
      <Head>
        <title>Login - Secure OTP & Google Authentication</title>
        <meta
          name="description"
          content="Login securely using OTP authentication or Google Login. Simple, fast, and reliable authentication process."
        />
        <meta
          name="keywords"
          content="Login, OTP Login, Google Authentication, Secure Login, Fast Login"
        />
        <meta name="author" content="Mohit Kumar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Login - Secure OTP & Google Authentication" />
        <meta
          property="og:description"
          content="Login securely using OTP authentication or Google Login. Simple, fast, and reliable authentication process."
        />
        <meta property="og:image" content="/images/login-thumbnail.png" />
        <meta property="og:url" content="http://localhost:3000/login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login with OTP or Google
          </h1>

          {!isLoggedIn ? (
            <>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                aria-label="Enter your mobile number for OTP login"
              />
              {otpSent && (
                <>
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                    aria-label="Enter the OTP sent to your mobile number"
                  />
                </>
              )}
              <button
                onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                className="w-full bg-red-500 text-white p-2 rounded mt-4"
                aria-label={otpSent ? "Verify the OTP" : "Send OTP to your mobile number"}
              >
                {otpSent ? "Verify OTP" : "Send OTP"}
              </button>

              <div className="my-4 text-center text-gray-500">OR</div>

              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => console.error("Google Login Failed")}
                className="w-full"
                text="signin_with"
              />
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-gray-700 text-white p-2 rounded mt-4"
              aria-label="Logout from the application"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
