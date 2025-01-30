import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setRole(userSnap.data().role);
        }
      }
    };
    fetchUserRole();
  }, []);


  return (
    <div>
      <h1>Dashboard</h1>
      {role === "teacher" && <div>Teacher Dashboard</div>}
      {role === "student" && <div>Student Dashboard</div>}
    </div>
  );
};

export default Dashboard;