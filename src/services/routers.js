import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";


const routers = createBrowserRouter([
    {
        path: "/",
        element: (
            <App></App>
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