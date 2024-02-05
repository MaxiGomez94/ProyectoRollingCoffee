
import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png';
const Error404 = () => {
    return (
        <erro404 >
            <div className='error404-container'>
                <img src={error} alt="Error 404" className='img-fluid' />
                <Button className='btn'> Volver A Inicio </Button>

            </div>
        </erro404>
    );
};

export default Error404;