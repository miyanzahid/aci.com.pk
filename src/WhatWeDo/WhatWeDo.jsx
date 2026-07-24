import React from "react";
import Paragraph from "../Heading/Paragraph";
import CompanyCard from "./CompanyCard";
import { CompanyData } from "./CompanyData";

function WhatWeDo() {
  const heading =
    "Akbari Group is a family owned business based in Lahore, Pakistan. We have a diversified approach towards business. We manufacture, import, indent, stock and retail industrial chemicals. We also deal in imported offset printing paper and board items.";

  const dataRender = CompanyData.map((items) => {
    return (
      <>
        <div className="col-md-6">
          <CompanyCard
            key={items.id}
            image={items.image}
            logotext={items.logotext}
            text={items.text}
            link={items.link}
            button={items.buttonTitle}
          />
        </div>
      </>
    );
  });
  return (
    <>
      <div className="contain">
        <div className="row">
          <div className="col-md-12">
            <div className="main-para">
              <Paragraph subdescriptions={heading} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6"> */}
          {/* <CompanyCard  text ={data.text} link = {data.link} button = {data.buttonTitle}/> */}
          {dataRender}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
