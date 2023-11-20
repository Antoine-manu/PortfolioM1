import './App.scss';
import Home from "./Pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
function App() {

  library.add(faGraduationCap);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App;
