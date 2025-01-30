import { auth, db } from "../config/firebaseConfig.js";

export const updateRole = async (req, res) => {
  console.log("Request Body:", req.body); // Log the request body

  const { uid, role } = req.body; // Destructure uid and role from request body

  console.log("UID:", uid); // Log the UID
  console.log("Role:", role); // Log the role

  try {
    // Update custom claims (for role-based access control)
    await auth.setCustomUserClaims(uid, { role });

    // Update Firestore with the role
    const userRef = db.collection("users").doc(uid);
    await userRef.update({ role });

    console.log("Role updated successfully for UID:", uid); // Log success
    res.status(200).json({ message: "Role updated successfully" });
  } catch (error) {
    console.error("Error updating role:", error); // Log the error
    res.status(400).json({ error: error.message });
  }
};