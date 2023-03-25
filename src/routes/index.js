import { Route, Routes, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import Home from "../pages/Home";
import GatewayList from "../pages/Gateways";
import DeviceList from "../pages/Devices";

const PageRoutes = () => {
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
        path="/gateways"
        element={
          <RequireAuth>
            <GatewayList />
          </RequireAuth>
        }
      />

      <Route
        path="/devices"
        element={
          <RequireAuth>
            <DeviceList />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
