import { Button } from "react-bootstrap";
import Error from "../../assets/error404.png";

const Error404 = () => {
  return (
    <>
      <div className="button-container me-2 me-sm-3 mb-1 ">
        <Button className="btn">Volver A Inicio</Button>
      </div>
      <div className="error404-container me-4 me-sm-5 ">
        <img src={Error} alt="Error 404" className="img-fluid" />
      </div>
    </>
  );
};

export default Error404;
