import React from "react";
import { signInWithGoogle } from "../../firebase"; // Ensure correct import

const GoogleLoginButton = () => {
  return (
    <button
      className="bg-blue-500 py-10 text-white p-3 rounded"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
