import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";
import RequireAuth from "./RequireAuth";


const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <RequireAuth>
                <App></App>
            </RequireAuth>
        ),
    },
    {
        path: "/wc",
        element: (
            <WelcomePage></WelcomePage>
        ),
    },



])
export default routers;