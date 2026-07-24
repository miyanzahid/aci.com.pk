import React from "react";
import "./cards.css";
import Button from "../Button/Button";

function CompanyCard({ image, text, link, button,logotext }) {
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="card-image">
            <img src={image} width="40%" alt="" /><br/>
           
          </div>
          <p className=" text-dark fw-bold logotext2 text-center m-0">{logotext}</p>
          <p className="card-text text-center card-passage">{text}</p>
          <div className="text-center">
            <Button link={link}>{button}</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyCard;
