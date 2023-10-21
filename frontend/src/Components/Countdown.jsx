import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(-6);
  const [date, setDate] = useState(1); // Set the initial date
  let came = false;
  let curr=new Date();
  useEffect(() => {
    const timer = setInterval(() => {
      if (!came) {
        if (date !== curr) {
          setCountdown(countdown - 1);
          setDate(curr);
        }
      } else {
        came = false;
        setCountdown(23);
      }
    }, 86400000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown, date, came]);

  return (
    <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"black", fontSize:"20px" }}>
      {countdown <= 3 && countdown >= -3 ? (
        <p style={{ backgroundColor: "green",width:"8vw",height:"8vw",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center" }}> {countdown} <br /> Days left </p>
      ) : 
      countdown < -3 && countdown >= -22 ? (
        <p style={{ backgroundColor: "yellow",width:"8vw",height:"8vw",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center" ,textAlign:"center" }}> {countdown} <br /> Days left</p>
      ) : 
       countdown < -22 ? (
        <p style={{ backgroundColor: "red",width:"8vw",height:"8vw",borderRadius:"50%" ,display:"flex",alignItems:"center",justifyContent:"center" ,textAlign:"center"}}> {countdown} <br /> Days left </p>
      ) : 
      (
        <p style={{ backgroundColor: "white",width:"8vw",height:"8vw",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"  }}>{countdown} <br /> Days left </p>
      )}
    </div>
  );
}

export default Countdown;
