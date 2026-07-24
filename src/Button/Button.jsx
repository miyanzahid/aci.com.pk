import React from "react";
import "./button.css";

function Button({link, children }) {
  return (
    <>
      <div className="buttons-container">
        <button className="contact-btn">
          <a className="text-decoration-none text-white" href={link}>{children}</a>
        </button>
      </div>
    </>
  );
}

export default Button;
