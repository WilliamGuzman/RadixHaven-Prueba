import React, { useEffect, useState } from "react";
import { Table, Button, Alert, Modal } from "react-bootstrap";
import Spinner from "../layout/Spinner";
import "./table.css";

//Redux
import { getUsersAction } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
const TableComponent = () => {
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const viewModal = (id) => {
    setClick(!click);
    console.log(click);
  };

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <>
      {click ? (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      ) : null}
      <div className="container__table">
        <h2>Lista de usuarios registrados</h2>

        {error ? (
          <Alert variant="danger">
            Error! No se pudo obtener la lista de usuarios
          </Alert>
        ) : null}

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
              <td colSpan="4">
                <Spinner />
              </td>
            ) : (
              allUsers.map((user) => (
                <tr key={user.id_user} onClick={() => viewModal(user.id_user)}>
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
      </div>
    </>
  );
};

export default TableComponent;
