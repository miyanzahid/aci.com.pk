import React from "react";
import "./Heading.css";

function ParagraphHeading({ title }) {
  return (
    <>
      <div className="col line-box">
        <h2 className="heading-title bottom-line ">{title}</h2>
      
      </div>
    </>
  );  
}

export default ParagraphHeading;
