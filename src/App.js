import './App.scss';
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGraduationCap,
  faPlay,
  faPhone,
  faEnvelope,
  faChevronCircleLeft,
  faWindowRestore, faCode, faObjectUngroup, faEye, faChevronCircleRight, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Project from './Pages/Project/Project';
import Login from "./Pages/Login/Login";
function App() {

  library.add(faGraduationCap, faPlay, faChevronCircleLeft, faWindowRestore, faCode, faObjectUngroup, faEye, faChevronRight);
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Home/>
    },
    {
      path: "/projects/:id",
      element: <Project/>
    },
    {
      path: "/a-login",
      element: <Login/>
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App;
