import React from "react";

function ProductHeading({ title, descriptions }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 PH-heading">
            <h2 className="color-htc">{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="sub-heading">
              <p>{descriptions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHeading;
