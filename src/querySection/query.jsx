import React from "react";
import "./query.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Query = () => {
  return (
    <div className="query-bgcolor">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-12 col-sm-12 d-flex justify-content-evenly align-items-center forSmallScreen ">
            <h2 className="query-text">
              Please feel free to contact if you have any query.
            </h2>
            <Button > <Link to="/Contact-US" className="text-decoration-none text-white border-none" > Contact Us</Link></Button>
            <span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
