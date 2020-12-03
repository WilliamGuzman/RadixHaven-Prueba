import React from "react";
import { Table, Button } from "react-bootstrap";

const TableComponent = () => {
  return (
    <Table responsive="sm">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>asd</td>
          <td>asd</td>
          <td>
            <Button variant="outline-primary">Primary</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableComponent;
