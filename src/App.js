import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import FormSignUp from './components/FormSignUp';
import ListaUsuarios from "./components/ListaUsuarios";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FormSignUp/>} ></Route>
        <Route path="/listausuarios" element={<ListaUsuarios/>} ></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
