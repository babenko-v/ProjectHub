import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";
import Landing from "../pages/landing/landing.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Registration from "../pages/AuthUser/Registration/Registration.jsx";
import Login from "../pages/AuthUser/Login/Login.jsx";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/landing",
                element: <Landing />,

            },

            {
                path: "/registration",
                element: <Registration />,

            },

            {
                path: "/login",
                element: <Login />,

            },

        ],
    },
]);

export default router;