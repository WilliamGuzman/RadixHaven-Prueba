import React, { useEffect, useState } from "react";
import { Table, Button, Alert, Modal, Pagination } from "react-bootstrap";
import Spinner from "../layout/Spinner";
import "./table.css";

//Redux
import {
  getUsersAction,
  getDataSilgleUserAction,
} from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";


const TableComponent = () => {
  const dispatch = useDispatch();

  //Datos del State
  const allUsers = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const userData = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);

  //Mostrar u Ocultar Modal
  const [show, setShow] = useState(false);
  const handleShow = (user) => {
    setShow(true);
    dispatch(getDataSilgleUserAction(user));
  };
  const handleClose = () => setShow(false);

  //Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 8;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = allUsers.slice(indexOfFirstData, indexOfLastData);
  const pageCount = Math.ceil(allUsers.length / dataPerPage);
  const pageNumber = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumber.push(i);
  }

  const nextPage = () =>{
    if(currentPage < pageCount){
      setCurrentPage(currentPage + 1);
    }
  } 
  const prevPage = () =>{
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  }
  
  const actualPage = page => {
    setCurrentPage(page);
  }

  useEffect(() => {
    dispatch(getUsersAction());

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {show ? (
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Datos del Usuario
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <div className="modal__container">
              <div className="user__avatar">
                <img
                  src={`https://www.gravatar.com/avatar/${userData.photo}`}
                  alt="avatar"
                />
              </div>
              <div className="name__container">
                <div className="input__text">
                  <label>First Name:</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={userData.length === 0 ? "" : userData.first_name}
                    disabled
                  />
                </div>
                <div className="input__text">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={userData.length === 0 ? "" : userData.last_name}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>Email:</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={userData.length === 0 ? "" : userData.email}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>Phone:</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={userData.length === 0 ? "" : userData.phone}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>Job:</label>
                  <input
                    type="text"
                    placeholder="Job"
                    value={userData.length === 0 ? "" : userData.job}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>City:</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={userData.length === 0 ? "" : userData.city}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>Country:</label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={userData.length === 0 ? "" : userData.country}
                    disabled
                  />
                </div>

                <div className="input__text">
                  <label>State:</label>
                  <input
                    type="text"
                    placeholder="State"
                    value={userData.length === 0 ? "" : userData.state}
                    disabled
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      <div className="container__table">
        <h2>Lista de usuarios registrados</h2>

        {error ? (
          <Alert variant="danger">
            Error! No se pudo obtener la lista de usuarios
          </Alert>
        ) : null}

        {loading ? (
          <Spinner title={"Cargando lista de usuarios"} />
        ) : (
          <div>
            <p>Dar click en la fila del usuario para obtener mas informacón </p>
            <Table responsive="sm" hover>
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th width="10">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">
                      <Spinner />
                    </td>
                  </tr>
                ) : (
                  currentData.map((user) => (
                    <tr key={user.id_user} onClick={() => handleShow(user)}>
                      <td>{user.first_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        {user.status === 10 && (
                          <Button variant="info" size="sm">
                            Created
                          </Button>
                        )}
                        {user.status === 20 && (
                          <Button variant="success" size="sm">
                            Active
                          </Button>
                        )}
                        {user.status === 30 && (
                          <Button variant="warningr" size="sm">
                            Inactive
                          </Button>
                        )}
                        {user.status === 40 && (
                          <Button variant="danger" size="sm">
                            Locked
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <Pagination>
              <Pagination.Prev onClick={prevPage} />
              
              {pageNumber.map(num => (
                  <Pagination.Item onClick={() => actualPage(num)}  key={num}>{num}</Pagination.Item>
              ))}

              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </div>
        )}
      </div>
    </>
  );
};

export default TableComponent;
