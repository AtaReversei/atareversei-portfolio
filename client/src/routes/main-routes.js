import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Not-Found/NotFound";

export const router = createBrowserRouter(
    [
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    }
])