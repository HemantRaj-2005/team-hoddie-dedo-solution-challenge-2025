import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const ProfileSetup = () => {
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user && role) {
      try {
        // Call backend API to update role
        const response = await fetch("http://localhost:3000/update-role", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uid: user.uid, role }),
          });

        if (response.ok) {
          window.location.href = "/dashboard"; // Redirect to dashboard
        } else {
          console.error("Failed to update role");
        }
      } catch (error) {
        console.error("Error updating role:", error);
      }
    }
  };

  return (
    <div>
      <h1>Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileSetup;