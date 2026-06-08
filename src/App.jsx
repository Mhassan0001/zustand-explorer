import { Outlet } from "react-router-dom";
import useAuthStore from "./stores/useAuthStore";
import { useEffect } from "react";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
