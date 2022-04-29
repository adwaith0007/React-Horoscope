import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./HoroscopeSummary.module.css";

const HoroscopeSummary = (props) => {
  const url = `http://sandipbgt.com/theastrologer/api/horoscope/${props.horoscopeSign}/${props.timeFrame}`;

  const [horoscopeData, setHoroscopeData] = useState(
    "A horoscope is an astrological chart or diagram representing the positions of the Sun, Moon, planets, astrological aspects and sensitive angles at the time of an event, such as the moment of a person's birth."
  );

  useEffect(() => {
    axios
      .get(url)

      .then((res) => {
        setHoroscopeData(res.data.horoscope);
      });
      console.log('sign', props.horoscopeSign);
      console.log('timeFrame', props.timeFrame);
      


  }, [props.horoscopeSign,props.timeFrame]);

  return (
    <section className={classes.summary}>
      <h2>Horoscopes</h2>
      <div>
        <h3>{horoscopeData}</h3>
      </div>

     
      {/* <p>Please enter your name, email, choose your zodiac sign & timeframe.</p> */}
    </section>
  );
};

export default HoroscopeSummary;
