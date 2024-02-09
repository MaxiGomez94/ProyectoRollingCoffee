import "./App.css";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Menu from "./components/common/menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Registro from "./components/pages/Registro";
import Login from "./components/pages/Login";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import CardProducto from "./components/pages/producto/CardProducto";
const App = () => {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route  path="/admin/" element={<Administrador></Administrador>}></Route>
      <Route  path="/detalle/" element={<DetalleProducto></DetalleProducto>}></Route>
      <Route  path="/admin/crear" element={<FormularioProducto></FormularioProducto>}></Route>
      <Route path="/registro" element={<Registro></Registro>} ></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
