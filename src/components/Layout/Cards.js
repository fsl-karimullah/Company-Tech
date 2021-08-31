import React from "react";

const Cards = (props) => {
  return (
    <div>
   
      <div className="flex flex-col m-10 w-72">
        <div className="flex flex-col  bg-gray-50 text-black border-1 border-black rounded-sm items-center">
          <img className="" src={props.img} alt="img" />
          <p className="text-center text-base sm:text-lg md:text-lg">
            {props.name}
          </p>
          <p className="text-center text-base sm:text-sm md:text-sm m-5">
            {props.desc}
          </p>
          <p className="font-bold text-center text-base sm:text-sm md:text-sm m-5" >
            {props.active}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
