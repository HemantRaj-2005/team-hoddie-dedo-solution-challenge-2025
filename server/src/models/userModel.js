export const UserModel = (user) => ({
    uid: user.uid || "",
    email: user.email || "",
    name: user.name || "",
    role: user.role || null,  // Default role null
    photoURL: user.photoURL || "",
    createdAt: user.createdAt || new Date(),
    updatedAt: new Date(),
    profileCompleted: user.profileCompleted || false, // False until profile setup is done
  });
  