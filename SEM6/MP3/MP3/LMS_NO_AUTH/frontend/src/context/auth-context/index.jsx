import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useEffect, useState } from "react";

// Define a normal demo user
const demoUser = {
  userEmail: "demo@demo.com",
  name: "Demo User",
  role: "user", // Role property to differentiate user types
  // Include any other user properties as needed
};

// Define a demo admin user
const demoAdminUser = {
  userEmail: "admin@demo.com",
  name: "Demo Admin",
  role: "admin", // This indicates administrative privileges
  // Additional fields as needed
};

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  
  // By default, we set the auth state with the normal demo user.
  // You can choose to switch this based on any criteria.
  const [auth, setAuth] = useState({
    authenticate: true,
    user: demoUser,
  });
  const [loading, setLoading] = useState(false);

  async function handleRegisterUser(event) {
    event.preventDefault();
    // For demo purposes, you can bypass the actual registration logic.
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    
    // Here, we decide which demo user to log in as based on the email from the sign-in form.
    // For example, if the email is "admin@demo.com", set the admin demo user; otherwise, set the normal demo user.
    const { email } = signInFormData;
    let userToSet = demoAdminUser;
    if (email && email.toLowerCase() === "admin@demo.com") {
      userToSet = demoAdminUser;
    }

    console.log("Login attempted (bypassed in demo mode)");
    sessionStorage.setItem("accessToken", "demo-token");
    setAuth({
      authenticate: true,
      user: userToSet,
    });
  }

  // For demo purposes, we skip a real auth check and directly set the demo user.
  async function checkAuthUser() {
    setAuth({
      authenticate: true,
      user: demoUser, // You could also switch this here to demoAdminUser if you want to default to admin.
    });
    setLoading(false);
  }

  function resetCredentials() {
    setAuth({
      authenticate: false,
      user: null,
    });
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  console.log(auth, "gf");

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
