import React, {Component, useEffect, useState} from 'react'

const Reloj = () => {
    
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const formattedTime = () => {
      let result = "";
      result += time.getHours();
      result += ":";
      result += time.getMinutes().toString().padStart(2,0);
      result += ":";
      result += time.getSeconds().toString().padStart(2,0);
      return result;
    };
  
    return <div>{formattedTime()}</div>;
  };

  export default Reloj;