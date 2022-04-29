import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Form from "./components/Horoscope/Form";

import HoroscopeSummary from "./components/Horoscope/HoroscopeSummary";

function App() {
  const SaveHoroscopeDataHandilbar = (enteredHoroscopeData) => {
    const HoroscopeData = {
      ...enteredHoroscopeData,
      id: Math.random().toString(),
    };
    // console.log(HoroscopeData);
    setHoroscopeData(HoroscopeData);
   
  };
  
  //const initialValues ={username:"",email:"",horoscopeSign:"",timeFrame:""};
  const [horoscopeData, setHoroscopeData] = useState([]);
  
   console.log('sign',horoscopeData.horoscopeSign)
   console.log('timeFrame',horoscopeData.timeFrame)

  




  
  return (
    <div>
      <Header />
      <Form onSaveHoroscopeData={SaveHoroscopeDataHandilbar}  />
      <HoroscopeSummary
        Name={horoscopeData.name}
        horoscopeSign={horoscopeData.horoscopeSign}
        timeFrame={horoscopeData.timeFrame}
      />
    </div>
  );
}

export default App;
