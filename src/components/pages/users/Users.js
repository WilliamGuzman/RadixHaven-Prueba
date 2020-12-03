import React from "react";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import Table from "../../layout/Table";

const Users = () => {
  return (
    <div className="contenedor">
      <Navbar />
      <Sidebar />

      <main>
        <div className="main__container">
          <Table />
        </div>
      </main>
    </div>
  );
};

export default Users;
