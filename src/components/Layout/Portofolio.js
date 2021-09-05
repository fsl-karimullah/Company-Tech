import React from "react";

const Portofolio = (props) => {
  return (
    <div className="">
      <div className="transform duration-150   ">
        <img className="w-80 h-80 m-5" src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};

export default Portofolio;
