import useAuthStore from "../stores/useAuthStore";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuthStore();

  console.log("USER:", user);
  console.log("LOADING:", isLoading);
  if (isLoading) {
    return <p className="text-red-500"> Loading.....</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
