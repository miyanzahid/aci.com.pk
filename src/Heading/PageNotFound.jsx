import React from "react";

function PageNotFound() {
    const styles = {
        pagenotfound: {
          backgroundColor: "#f1f1f1",
          width: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height:"500px"
        }
      };
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div style={styles.pagenotfound}>
              {/* <div className="display-1">404</div> */}
              <h2>Page Not Found</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
