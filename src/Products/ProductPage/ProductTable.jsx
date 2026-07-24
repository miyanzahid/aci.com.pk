import React from "react";
import Table from "../../Table/Table";
import ProductHeading from "./ProductHeading";

function ProductTable({ProdList ,header,tableTitle}) {
    
 
  return (
    // <div>ProductTable</div>
    <>
    <ProductHeading title={tableTitle}/>
      <Table ProdList={ProdList} header={header} />
      
    </>
  );
}

export default ProductTable;
