import banner from "../../assets/banner.png";
const Inicio = () => {
  return (
    <inicio>
      <div>
      <img src={banner} alt="banner de pagina" className="img-fluid inicio" style={{maxWidth:'100%', height:'auto'}} />
      </div>
      <div>
        <h1> Aquí van otras etiquetas </h1>
      </div>
    </inicio>
  );
};

export default Inicio;
