import React from "react";
import { useFormik } from "formik";
import { InputDataSchema } from "./schema/Validation";

function ContactInputFrom() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: InputDataSchema,
      onSubmit: (values) => {
        // console.log(values);
      },
    });
  // console.warn("hello world",Formik);

  return (
    <>
      <form onSubmit={handleSubmit} className="contactForm">
        {/* <h3 className="mb-4">Get in touch</h3> */}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <span className="error-text">{errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.phone && errors.phone ? (
                <div className="error-text">{errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="label">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                cols="30"
                rows="4"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.message && errors.message ? (
                <div className="error-text">{errors.message}</div>
              ) : null}
            </div>
          </div>

          <div className="container">
            <div className="row pb-5 mt-3">
              <div className="col">
                <button className="contact-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactInputFrom;
