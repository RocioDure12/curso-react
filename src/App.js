import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/_resets.scss";
import UsuariosSave from './components/UsuariosSave';
import Usuarios from "./components/Usuarios";
import UsandoContext from "./components/UsandoContext"
import Context from "./Context/Context";
import {useState} from "react";

//proveedor--> que informacion vamos a tener
//consumidor --> lee la informacion del proveedor


function App() {
  const [user, setUser]=useState({})
  const [theme, setTheme]=useState({})
  const [languaje, setLanguaje]=useState({})

  const context = {
    user: {
  
    },
  
    theme: {
  
    },
    languaje: {
  
    },
  }

  return (

    < BrowserRouter >
      <Context.Provider value={context}>
        <Routes>
          <Route path="/usuarios/save" element={<UsuariosSave />} ></Route>
          <Route path="/usuarios/save/:id" element={<UsuariosSave />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/UsandoContext" element={<UsandoContext />}></Route>



        </Routes>
      </Context.Provider>
    </BrowserRouter >

  );
}

export default App;
