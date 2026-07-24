import React from "react";

function PageHeader({title}) {
  return (
    <>
      <header className="P-header" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 pd-heading">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default PageHeader;
