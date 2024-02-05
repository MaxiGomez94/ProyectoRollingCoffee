import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Menu from "./components/common/menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
const App = () => {
  return (
    <>
      <Menu></Menu>
      <main>
        <Inicio></Inicio>
        <Error404></Error404>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
