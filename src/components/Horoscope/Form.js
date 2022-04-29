import React, { useEffect, useState } from "react";
import { getSigns } from "../../assets/api";
// import * as yup from 'yup';
// import { userSchema } from "../../Validations/userValidation";

import "./Form.css";

const Form = (props) => {
  const [signs, setSigns] = useState([]);
  const [selectedSign, setselectedSign] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTimeframe, setSelectedTimeFrame] = useState("");

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

  const selectedSignHandler = (event) => {
    setselectedSign(event.target.value);
  };
  const selectedNameHandler = (event) => {
    setName(event.target.value);
  };
  const selectedEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const selectedTimeHandler = (event) => {
    setSelectedTimeFrame(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const horoscopeData = {
      username: name,
      email: email,
      horoscopeSign: selectedSign,
      timeFrame: selectedTimeframe,
    };

    props.onSaveHoroscopeData(horoscopeData);

    console.log("fulldata", horoscopeData);
    console.log("day", horoscopeData.t);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        {/* <p>Please enter your name, email, choose your zodiac sign & timeframe.</p> */}
        {/* <label>Username:</label> */}
        <input
          className="searchInput"
          type="text"
          name="username"
          placeholder="Username"
          onChange={selectedNameHandler}
        />
        {props.tex}
      </div>
      <div>
        {/* <label>Email Id:</label> */}
        <input
          className="searchInput"
          type="text"
          name="email"
          placeholder="email@gmail.com"
          onChange={selectedEmailHandler}
        />
      </div>
      <div>
        {/* <label>Horoscope sign:</label> */}
        <input
          className="searchInput2"
          list="horoscope"
          name="horoscopeSign"
          placeholder="Horoscope sign"
          onChange={selectedSignHandler}
        />

        <datalist id="horoscope">
          {signs.map((sign) => (
            <option value={sign} />
          ))}
        </datalist>
      </div>
      <div>
        {/* <label>Time frame:</label> */}
        <input
          className="searchInput2"
          list="Time frame"
          name="timeFrame"
          placeholder="Time frame"
          onChange={selectedTimeHandler}
        />

        <datalist id="Time frame">
          {["yesterday", "today", "tommarow"].map((day) => (
            <option value={day} />
          ))}
        </datalist>
      </div>
      <div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
