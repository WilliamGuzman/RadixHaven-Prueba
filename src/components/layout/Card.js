import React from "react";
import AnimatedNumber from "animated-number-react";
import "./card.css";

const Card = ({ content, footer, header, image }) => {
  

  const cantidad = content;

  const formatValue = (cantidad) => cantidad.toFixed(0);


  return (
    <div className="Card">
      <p className="text-primary-p">{header}</p>
      <div className="Card_inner">
        <span className="text-title">
          <AnimatedNumber value={cantidad} formatValue={formatValue} />
        </span>
        <span>
          <p className={footer.isPositive ? "positive" : "negative"}>
            <i
              className={
                footer.isPositive ? "fas fa-caret-up" : "fas fa-caret-down"
              }
            ></i>{" "}
            {footer.content}
          </p>
        </span>
        <img  src={`/images/${image}`}  alt="wave"/>
      </div>
    </div>
  );
};

export default Card;
