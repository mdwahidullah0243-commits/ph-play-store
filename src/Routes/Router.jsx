import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/home/Home";
import Apps from "../Pages/apps/Apps";
import Installation from "../Pages/installation/Installation";
import AppDetails from "../Pages/appDetails/AppDetails";
import Dashboard from "../Pages/dashboard/Dashboard";
import ErrorPage from "../Pages/error/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: '/apps', Component: Apps },
            { path: '/installation', Component: Installation },
            { path: '/apps/:appId', Component: AppDetails },
            { path: '/dashboard', Component: Dashboard }
        ],
        errorElement: <ErrorPage />
    }
]);

export default router;