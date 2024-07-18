import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import Employee from "./pages/Employee";
import Team from "./pages/Team";
import Tracking from "./pages/Tracking";
import Project from "./pages/Project";
import Setting from "./pages/Setting";
import ExportCV from "./pages/ExportCV";
import Notification from "./pages/Notification";
import TestPage from "./pages/Test";

// configs
import { PATH } from "./configs/path";

// routes
import AuthRoutes from "./routes/auth-routes";
import GuestRoutes from "./routes/guest-routes";

// component
const Dashboard = React.lazy(() =>
  import("./pages/Dashboard/index").then((module) => ({
    default: module.default,
  }))
);
const Login = React.lazy(() =>
  import("./pages/Login/index").then((module) => ({ default: module.default }))
);
const Table = React.lazy(() =>
  import("./pages/Table/index").then((module) => ({ default: module.default }))
);
const Test = React.lazy(() =>
  import("./pages/Test/index").then((module) => ({ default: module.default }))
);

const routesConfig = [
  {
    path: PATH.ROOT,
    element: Dashboard,
    guard: AuthRoutes,
    // layout: MainLayout,
  },
  {
    path: PATH.LOGIN,
    element: Login,
    guard: GuestRoutes,
  },
  {
    path: PATH.TABLE,
    element: Table,
    guard: GuestRoutes,
  },
  {
    path: PATH.TEST,
    element: Test,
    guard: GuestRoutes,
  },
];

const AppLayout: React.FC = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <SideBar />
      <React.Suspense fallback={<div>loading ...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/test" />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/project" element={<Project />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/exportcv" element={<ExportCV />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/test" element={<TestPage />} />

          <Route path="/" element={<Navigate to="/login" />} />
          {routesConfig.map((route) => {
            const Guard = route.guard || React.Fragment;
            // const Layout = route.layout || React.Fragment;
            const Component = route.element;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Guard>
                    {/* <Layout> */}
                    <Component />
                    {/* </Layout> */}
                  </Guard>
                }
              />
            );
          })}
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </React.Suspense>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  );
}

export default App;
