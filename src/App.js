import './App.scss';
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faGraduationCap, faPlay, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Project from './Pages/Project/Project';
function App() {

  library.add(faGraduationCap, faPlay);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/projects",
      element: <Project/>
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App;
