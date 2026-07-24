import React from "react";

function ProductList({ listPassage, list, notes }) {
  console.log("list",list)
  const listData = list.map((list) => {
    return (
      <>
        <li  key={list.id}>{list.listData}</li>
      </>
    );
  });
  const notesRendered = 
  
    !notes ? null : <div>
    <h4 className="font-weight-bold">Note:</h4>
    <div>
      <p className="sub-heading">
        {notes}</p>
    </div>
  </div>
  
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 sub-heading">
              <p>{listPassage}</p>
              <div>
                <ul className="list">{listData}</ul>
              </div>
             {
              notesRendered
             }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
