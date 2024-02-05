import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Menu from "./components/common/menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
const App = () => {
  return (
    <>
      <Menu></Menu>
      <main>
        <Inicio></Inicio>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
