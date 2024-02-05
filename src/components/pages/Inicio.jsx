import banner from "../../assets/banner.png";
const Inicio = () => {
  return (
    <inicio>
      <div className="banner-container">
      <img src={banner} alt="banner de pagina" className="img-fluid"/>
      </div>
      <div>
        <h1> Aquí van otras etiquetas </h1>
      </div>
    </inicio>
  );
};

export default Inicio;
