import React from "react";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import Card from "../../layout/Card";

const Inicio = () => {
  return (
    <div className="contenedor">
      <Navbar />
      <Sidebar />

      <main>
        <div className="main__container">
          <div className="main__cards">
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
