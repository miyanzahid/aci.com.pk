import React from "react";
import ParagraphHeading from "../Heading/ParagraphHeading";
import Paragraph from "../Heading/Paragraph";
import ContactPortion from "./ContactPortion";
import ContactInputFrom from "./ContactInputFrom";

function ContactForm() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="mt-5">
                <ParagraphHeading title={"Get in touch"} />
                <Paragraph subdescriptions = {"If you have any questions about the services we provide simply use the form below."}/>
              </div>
              <div className="row no-gutters">
                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-center">
                  <ContactInputFrom/>
                </div>
                <ContactPortion/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
