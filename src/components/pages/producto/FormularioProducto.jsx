import { Form,Button, Container } from "react-bootstrap";


const FormularioProducto = () => {

    return (

        <Container className="bg-formularioProducto">
            <h1 className="text-center display-4 fw-bold "> Nuevo Producto</h1>
            <hr></hr>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Producto Nuevo</Form.Label>
          <Form.Control type="text"  placeholder="Ingrese su producto" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Precio</Form.Label>
          <Form.Control type="number"  placeholder="Ingrese el Precio Del Producto Ej; $100,00" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="fw-bold">Imagen URL*</Form.Label>
          <Form.Control
            className=""
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="fw-bold">Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="fw-bold">Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="fw-bold">Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
          />
        </Form.Group>
      </Form>
      <Button className="btn mb-4" type="submit">Guardar</Button>
        </Container>
    );
};

export default FormularioProducto;