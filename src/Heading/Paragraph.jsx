import React from "react";

function Paragraph({ subdescriptions }) {
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sub-heading">
                <p>{subdescriptions}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Paragraph;
