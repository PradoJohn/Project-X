
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import App from "./App";
import Students from "./pages/Students.jsx";
import Assignments from "./pages/Assignments.jsx";


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'students/',
        element: <Students/>
      },
      {
        path: 'assignments/',
        element: <Assignments/>
      }

    ]

  }

])


export default router;