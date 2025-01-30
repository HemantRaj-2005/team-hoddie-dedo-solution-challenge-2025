import { db } from "../config/firebaseConfig.js";


export const getUser = async (req, res) => {

    const { uid } = req.params;
    console.log("Fetching user with UID:", uid); // Log the UID
  
    try {
      const userRef = db.collection("users").doc(uid);
      console.log("User Ref:", userRef); // Log the user reference
  
      const userSnap = await userRef.get();
      console.log("User Snap:", userSnap); // Log the user snapshot
  
      if (userSnap.exists) {
        res.status(200).json(userSnap.data());
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user:", error); // Log the error
      res.status(400).json({ error: error.message });
    }
  };