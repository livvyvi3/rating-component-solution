import React from "react";
import "./thank_you.css";
import ThankYou from "../../images/illustration-thank-you.svg";

const Thankyou = (props) => {
  const { rate } = props;

  console.log(rate);

  return (
    <div className="card thankyou-card">
      <div className="thankyou-img">
        <img src={ThankYou} alt="thankyou" />
      </div>

      <div className="selected-rating">
        <p>You selected {rate} out of 5</p>
      </div>

      <div className="appreciation-div">
        <h4>Thank you!</h4>
        <p>We appreciate you taking the time to give a rating.</p>
        <p>If you ever need more support, don't hesitate to</p>
        <p>get in touch!</p>
      </div>
    </div>
  );
};

export default Thankyou;