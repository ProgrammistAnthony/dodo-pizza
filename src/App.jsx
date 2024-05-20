import "./index.css";
import s from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { Basket } from "./assets/pages/Basket/Basket.jsx";
import { Home } from "./assets/pages/Home/Home.jsx";

function App() {
  return (
    <> 
      <Routes>
        <Route element={<Basket/>} path={"/basket"}/>
        <Route element={<Home/>} path={"/dodo-pizza"}/>
      </Routes>
      
    </>
  );
}

export default App;
