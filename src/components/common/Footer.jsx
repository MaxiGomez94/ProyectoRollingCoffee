
import logo from "../../assets/Coffee_Logo.png";
import { Link,NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <div className="bg-footer text-center py-3 text-light fw-bold">
     <NavLink as={Link} to='/'>
     <img as 
              src={logo}
              alt="RollingCode Logo nav"
              className="img-fluid "
              width={200}
            />
     </NavLink>
     
        <p> &copy;Todos Los Derechos Reservador RollingCode</p>
      </div>
    </div>
  );
};

export default Footer;
