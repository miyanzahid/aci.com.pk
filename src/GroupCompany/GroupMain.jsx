import React from "react";
import PageHeader from "../Heading/PageHeader";
import ParagraphHeading from "../Heading/ParagraphHeading";
import  Paragraph  from "../Heading/Paragraph";
import { useParams } from "react-router";
import { CompanyGroupData } from "./CompanyGroupData";

function GroupMain() {

    const {id} = useParams();

    const dataRender  =  CompanyGroupData.filter((data)=> data.id === parseInt(id))


    const items = dataRender[0]



  return (
    <>
      <PageHeader title={items.title} />
      <div className="container ">
        <div className="row">
          <div className="col-md-12 CP-Heading">
            <ParagraphHeading title={items.subTitle} />
            <Paragraph subdescriptions={items.passageFirst}/>
            {!items.passageTwo ? null :
             <Paragraph subdescriptions= {items.passageTwo}/>}
          </div>
        </div>
      </div>

    </>
  );
}

export default GroupMain;
