import {
  faEdit,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Table, Card, Nav, Pagination, Dropdown } from "@themesberg/react-bootstrap"
import { useState } from "react"
import ModalEdit from "./ModalEdit"

const TableProduct = () => {
  const [showEdit, setShowEdit] = useState(false)
  const handleCloseEdit = () => setShowEdit(false)
  const handleEditClick = () => setShowEdit(true)
  console.log(showEdit)
  return (
    <>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">#</th>
                <th className="border-bottom">Image</th>
                <th className="border-bottom">Name</th>
                <th className="border-bottom">Price</th>
                <th className="border-bottom">Color</th>
                <th className="border-bottom">Category</th>
                <th className="border-bottom">Size</th>
                <th className="border-bottom">Quantity</th>
                <th className="border-bottom">Status</th>
                <th className="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="fw-normal">1</span>
                </td>
                <td>
                  <img src="" alt="ảnh" />
                </td>
                <td>
                  <span className="fw-normal">Áo Polo nam cao cấp</span>
                </td>
                <td>
                  <span className="fw-normal">230.000đ</span>
                </td>
                <td>
                  <span className="fw-normal">Tím than</span>
                </td>
                <td>
                  <span className="fw-normal">Polo</span>
                </td>
                <td>
                  <span className="fw-normal">S</span>
                </td>
                <td>
                  <span className="fw-normal">30</span>
                </td>
                <td>
                  <span className="fw-normal">Còn hàng</span>
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      split
                      variant="link"
                      className="text-dark m-0 p-0"
                    >
                      <span className="icon icon-sm">
                        <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <FontAwesomeIcon icon={faEye} className="me-2" /> View
                        Details
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleEditClick}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="me-2"
                          onClick={handleEditClick}
                        />{" "}
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="text-danger">
                        <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Nav>
          </Card.Footer>
        </Card.Body>
      </Card>
      <ModalEdit showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
    </>
  )
}
export default TableProduct
