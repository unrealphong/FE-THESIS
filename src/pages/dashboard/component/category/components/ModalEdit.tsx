import { Button, Form, Modal } from "@themesberg/react-bootstrap"

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
