import React, { useEffect } from "react";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import Spinner  from "../../layout/Spinner";
import Card from "../../layout/Card";
import LineChart from "../../layout/LineChart";
import PieChart from "../../layout/PieChart";
import { getDataBox, userAuthenticateData } from "../../../redux/actions/layoutAction";
import { useDispatch, useSelector } from "react-redux";

const Inicio = () => {
  const dispatch = useDispatch();

  const dataBox = useSelector((state) => state.layout.databox);
  const loading = useSelector((state) => state.layout.loading);
  
  useEffect(() => {
    dispatch(getDataBox());
    dispatch(userAuthenticateData());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor">
      <Navbar />
      <Sidebar />
      <main>
        <div className="main__container">

          {loading ? <Spinner title={"Cargando Datos"}/> : null}
          <div className="main__cards">
            {loading ? (
              null
            ) : (
              <>
                <Card
                  key={dataBox[0].header}
                  content={dataBox[0].content}
                  footer={dataBox[0].footer}
                  header={dataBox[0].header}
                  image={'wave_revenue.svg'}
                />

                <Card
                  key={dataBox[1].header}
                  content={dataBox[1].content}
                  footer={dataBox[1].footer}
                  header={dataBox[1].header}
                  image={'wave_per_product.svg'}
                />

                <Card
                  key={dataBox[2].header}
                  content={dataBox[2].content}
                  footer={dataBox[2].footer}
                  header={dataBox[2].header}
                  image={'wave_revenue_per_product.svg'}
                />

                <Card
                  key={dataBox[3].header}
                  content={dataBox[3].content}
                  footer={dataBox[3].footer}
                  header={dataBox[3].header}
                  image={'wave_product_solid.svg'}
                />

                <Card
                  key={dataBox[4].header}
                  content={dataBox[4].content}
                  footer={dataBox[4].footer}
                  header={dataBox[4].header}
                  image={'wave_per_day.svg'}
                />
              </>
            )}
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
