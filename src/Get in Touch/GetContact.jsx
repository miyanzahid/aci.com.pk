import React, { useEffect } from "react";
import Button from "../Button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
function GetContact() {
 
    useEffect(() => {
      AOS.init();
    }, [])
  return <>
  <div className="col-lg-6 col-sm-12" data-aos="fade-right"  data-aos-duration="1000">
          <div className="form-border">
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your Name:"
                  className="username w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email:"
                  className="yourEmail w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="phone"
                  id="quantity"
                  name="quantity"
                  min="11"
                  max="25"
                  placeholder="Your Phone Number:"
                  className="yourPhoneNumber w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  id="Subject"
                  name="Subject"
                  placeholder="Subject:"
                  className="yourSubject w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12  ">
                <textarea
                  name="textArea"
                  id="textArea"
                  cols="10"
                  rows="10"
                  placeholder="Your Message:"
                  className="textArea w-100  "
                ></textarea>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 d-flex justify-content-sm-center justify-content-lg-start">
              
                <Button>SUBMIT NOW</Button>
              </div>
            </div>
          </div>
        </div></>;
}

export default GetContact;
