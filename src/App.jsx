import { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//layouts
import Main, { mainLoader } from "./layouts/Main";

//library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Actions
import { logoutAction } from "./actions/logout";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error/>
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]

  }
  
]);

function App() {
 return  <div
  className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
     
  
}

export default App;
