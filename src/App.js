import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/_resets.scss";
import UsuariosSave from './components/UsuariosSave';
import Usuarios from "./components/Usuarios";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuariosave" element={<UsuariosSave/>} ></Route>
        <Route path="/usuarios" element={<Usuarios/>} ></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
