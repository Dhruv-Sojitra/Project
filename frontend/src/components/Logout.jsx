import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <>
      <button
        className="px-3 py-2 bg-red-500 border rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
