// Save user data
export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.email === user.email);
  if (exists) return { success: false, message: "Email already registered" };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
};

// Login user
export const loginUser = ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return { success: false, message: "Invalid credentials" };
  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true };
};

// Check if user is logged in
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};
