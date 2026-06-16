import { Outlet } from "react-router-dom";
import useAuthStore from "./stores/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "sonner";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    console.log("CHECK AUTH RUN");
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <main>
        <Outlet />
      </main>

      <Toaster position="top-right" richColors theme="dark" />
    </>
  );
};

export default App;
