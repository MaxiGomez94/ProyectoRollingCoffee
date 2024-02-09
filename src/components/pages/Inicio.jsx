import banner from '../../assets/banner4.jpg';
import { Row } from 'react-bootstrap';
import CardProducto from './producto/CardProducto';
const Inicio = () => {
  return (
    <>
      <div className="banner-container">
      <img src={banner} alt="banner de pagina" className="img-fluid"/>
      </div>
      <section>
        <h2 className="display-3">Nuestros productos</h2>
        <hr />
        <Row className="justify-content-around">
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </section>
    </>
  );
};

export default Inicio;
