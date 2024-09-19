import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";
import Landing from "../pages/landing/landing.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Registration from "../pages/Registration/Registration.jsx";






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
        ],
    },
]);

export default router;