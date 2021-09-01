import React from "react";

const Cards = (props) => {
  return (
    <div>
   
      <div className="flex flex-col m-10 w-72 sm:w-96 md:w-80 ">
        <div className="flex flex-col  ">
          <img className="rounded-lg" src={props.img} alt="img" />
          <p className="text-base font-semibold sm:text-lg md:text-xl mt-3">
            {props.name}
          </p>
          <p className="text-base font-semibold text-blue-600 sm:text-sm md:text-lg mt-2">
            {props.desc}
          </p>
          <p className="font-bold text-sm sm:text-sm md:text-sm mt-2" >
            {props.active}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
