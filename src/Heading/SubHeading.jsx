import React from "react";

function SubHeading({ subtitle, subdescriptions }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="psh-heading-title">{subtitle}</h2>
            <div className="psh-heading-hr" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="sub-heading">
                <p>{subdescriptions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeading;
