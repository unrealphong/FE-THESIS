import {
  faCheck,
  faCog,
  faHome,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap"

import TableProduct from "./components/TableProduct"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import ModalAdd from "./components/ModalAdd"

const Products = () => {
  const [showAdd, setShowAdd] = useState(false)
  const handleCloseAdd = () => setShowAdd(false)

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Gentleman's-close</Breadcrumb.Item>
            <Breadcrumb.Item active>Quản lý sản phẩm</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Quản lý sản phẩm</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button
            variant="primary"
            size="sm"
            className="mx-3"
            onClick={() => setShowAdd(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="mx-2" />
            New Product
          </Button>
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">
              Share
            </Button>
            <Button variant="outline-primary" size="sm">
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 p-0"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <TableProduct />
      <ModalAdd show={showAdd} handleClose={handleCloseAdd} />
    </>
  )
}
export default Products
