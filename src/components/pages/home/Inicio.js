import React, { useEffect } from "react";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import Card from "../../layout/Card";
import LineChart from '../../layout/LineChart';
import PieChart from '../../layout/PieChart';
import { getDataBox } from "../../../redux/actions/layoutAction";
import { useDispatch, useSelector } from "react-redux";

const Inicio = () => {
  const dispatch = useDispatch();

  const dataBox = useSelector((state) => state.layout.databox);
  console.log(dataBox);
  useEffect(() => {
    dispatch(getDataBox());

    // eslint-disable-next-line
  }, []);

  

  return (
    <div className="contenedor">
      <Navbar />
      <Sidebar />
      <main>
        <div className="main__container">
          <div className="main__cards">
            {dataBox.map((data) => (
              <Card
                key={data.header}
                content={data.content}
                footer={data.footer}
                header={data.header}
              />
            ))}
          </div>

          <div className="grafic__chart">
            <LineChart />
            <PieChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
