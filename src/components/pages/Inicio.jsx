import banner from '../../assets/banner4.jpg';
const Inicio = () => {
  return (
    <>
      <div className="banner-container">
      <img src={banner} alt="banner de pagina" className="img-fluid"/>
      </div>
      <div>
        <h1> Aquí van otras etiquetas </h1>
      </div>
    </>
  );
};

export default Inicio;
