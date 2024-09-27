import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
