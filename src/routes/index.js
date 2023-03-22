import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
