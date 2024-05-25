import { Button, Col, Form, Modal } from "@themesberg/react-bootstrap"

const ModalEdit = (props) => {
  const { showEdit, handleCloseEdit } = props
  return (
    <Modal show={showEdit} onHide={handleCloseEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Polo</option>
              <option>T-shirt</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Size</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Status</Form.Label>
            <Form.Select defaultValue="Còn hàng">
              <option>Còn hàng</option>
              <option>Hết hàng</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEdit}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseEdit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalEdit
