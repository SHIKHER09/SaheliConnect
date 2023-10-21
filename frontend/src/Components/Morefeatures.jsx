import React, { useState } from 'react';

export default function MoreFeatures() {
  const featureData1 = ['Calendar', 'Reminders', 'Diary'];
  const featureData2 = ['History', 'Share', 'Career Guidance'];

  const [tiltStates, setTiltStates] = useState(
    Array(featureData1.length + featureData2.length).fill({ tiltX: 0, tiltY: 0 })
  );

  const handleMouseEnter = (index, e) => {
    updateTilt(index, e);
  };

  const handleMouseMove = (index, e) => {
    updateTilt(index, e);
  };

  const handleMouseLeave = (index) => {
    setTiltStates((prevTiltStates) => {
      const newTiltStates = [...prevTiltStates];
      newTiltStates[index] = { tiltX: 0, tiltY: 0 };
      return newTiltStates;
    });
  };

  const updateTilt = (index, e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();
    const newTiltX = ((clientX - left) / width - 0.2) * 30;
    const newTiltY = ((clientY - top) / height - 0.2) * 30;

    setTiltStates((prevTiltStates) => {
      const newTiltStates = [...prevTiltStates];
      newTiltStates[index] = { tiltX: newTiltX, tiltY: newTiltY };
      return newTiltStates;
    });
  };

  const renderTiltBox = (feature, index) => {
    const boxStyle = {
      transform: `rotateX(${tiltStates[index].tiltY}deg) rotateY(${tiltStates[index].tiltX}deg)`,
      width: "15vw",
      height: "20vh",
      background: `linear-gradient(${"#ffccff"}, ${"#afb9c0"})`,
      borderRadius: '20px',
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "-0.1px -0.4px 3px rgba(0, 255, 255, 0.455), 5px 5px 10px rgba(0, 0, 0, 0.3)",
    };

    return (
      <div
        key={index}
        className="tilt-box"
        onMouseEnter={(e) => handleMouseEnter(index, e)}
        onMouseMove={(e) => handleMouseMove(index, e)}
        onMouseLeave={() => handleMouseLeave(index)}
        style={boxStyle}
      >
        <p>{feature}</p>
      </div>
    );
  };

  return (
    <div style={{ height: "70vh",paddingTop:"4vh",backgroundColor:"white" }}>
      <h2 style={{ paddingLeft: "5vw",color:"black" ,fontSize:"26px"}}>More Features</h2>
      
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8vw", padding: '5vmin',fontSize:"24px" }}>
        {featureData1.map((feature, index) => renderTiltBox(feature, index))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8vw", padding: '5vmin',fontSize:"24px" }}>
        {featureData2.map((feature, index) => renderTiltBox(feature, featureData1.length + index))}
      </div>
    </div>
  );
}
