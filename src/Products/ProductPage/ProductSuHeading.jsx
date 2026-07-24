import React from "react";

function ProductSubHeading({ subtitle, subdescriptions }) {

const rendered = subtitle ?  <div className="col-md-12">
<h2 className="psh-heading-title">{subtitle}</h2>
<div className="psh-heading-hr" />
</div>:null;
  return (
    <>
      <div className="container">
        <div className="row">
          {rendered}
          <div className="row">
          <div className="col-md-12">
            <div className="sub-heading">

            <p className="mt-2">
                {subdescriptions}
            </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductSubHeading;
