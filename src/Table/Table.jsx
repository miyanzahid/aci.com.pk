import React from "react";
import './table.css';

function Table({ ProdList, header }) {
  const renderHeader = header.map((items) => {
    return (
        <>
        <th scope="col ">{items.label}</th>
        </>
    );
  });

  const productListItems = ProdList.map((item) =>{
    return(
        <>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.score}</td>
                </tr>
                
        </>
    )
  })

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr className="text-center tableheading">
                  {renderHeader}
                </tr>
              </thead>
              
          <tbody className="text-center">
            {productListItems}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
