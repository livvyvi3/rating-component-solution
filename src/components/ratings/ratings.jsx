import React from "react";
import "./ratings.css";
import Star from "../../images/icon-star.svg";
import { useNavigate } from "react-router-dom";

const Rating = (props) => {
  /*using array destructuring to pass the rate
  and setRate props to this Card component.*/
  const { rate, setRate } = props;
  console.log(rate, "here");

  const ratesArray = [1, 2, 3, 4, 5];

  //initializing the navigate component
  const navigate = useNavigate();

  //function to handle submit on clicking the submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rate !== null) {
      navigate("/thankyou");
    }
  };


  return (
    <div className="card">
      <div className="star-div">
        <img src={Star} alt="star" />
      </div>

      <div className="question-div">
        <h4>How did we do?</h4>
        <p>Please let us know how we did with your support</p>
        <p>request. All feedback is appreciated to help us</p>
        <p>improve our offering!</p>
      </div>

      <div className="ratings-div">
        {/*  */}
        {ratesArray.map((userRate) => (
          <div
            onClick={() => setRate(userRate)}
            className={`rating ${userRate === rate && "active"}`}
          >
            {userRate}
          </div>
        ))}
      </div>

      <div className="submit-btn">
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Rating;