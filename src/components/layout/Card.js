import React from "react";
import AnimatedNumber from "animated-number-react";
import "./card.css";

const Card = () => {
  const cantidad = 578;

  const formatValue = (cantidad) => cantidad.toFixed(0);

  return (
      <div className="Card">
        <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true" />
        <div className="Card_inner">
          <p className="text-primary-p">Number of Subscribers</p>
          <span className="font-bold text-title">
            <AnimatedNumber value={cantidad} formatValue={formatValue} />
          </span>
        </div>
      </div>
  );
};

export default Card;
