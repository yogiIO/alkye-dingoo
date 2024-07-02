import { lazy } from "react";
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { deferDashboard } from "../../views/Dashboard/Dashboard";
import Footer from "../../components/Layout/Footer";

const SignUp = lazy(() => import('../../views/auth/SignUp'))
const Dashboard = lazy(() => import('../../views/Dashboard'))

function ProtectedRoute() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
const routes = createRoutesFromElements(
    <>
        <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<SignUp />} key="dingoo.SignUp" />
            <Route path="dashboard" element={<Dashboard />} key="dingoo.dashboard" loader={deferDashboard} />
            <Route path="*" element={<>Page Not Found</>} />
        </Route>
    </>
);

const router = createBrowserRouter(routes);

export default router