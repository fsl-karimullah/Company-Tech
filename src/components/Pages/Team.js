import React from "react";
import Cards from "../Layout/Cards";
import AhnafImg from "../../assets/Image/ahnaf-img.jpg";
import FaisalImg from "../../assets/Image/faisal-img.png";
import HendraImg from "../../assets/Image/hendra-img.png";
import TeamsImg from "../../assets/Image/teams.svg";
import WhatsappImg from "../../assets/Logo/whatsapp.png";
import { Link } from "react-router-dom";
const Team = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="">
      <h1 className="text-center text-4xl mt-5 font-bold">
        About Six Eyes Tech
      </h1>
      <p className="text-center py-10 font-semibold text-lg px-10">
        keberadaan kami disini untuk memajukan dunia IT di Indonesia. SIX Eyes
        berarti Kuat, Teliti, Cerdas dan Cepat.
      </p>

      <div className="justify-center flex">
        <img src={TeamsImg} alt="Teams" />
      </div>
      {/* <div className='flex  justify-center my-10'>
        <h1 className='mx-5 font-semibold text-base sm:text-4xl'>Hubungi Kami Dengan Klik Icon</h1>
      <Link onClick={() => openInNewTab('https://wa.me/6287826563459')}>
        <img src={WhatsappImg} alt="" className='w-16 ' />
      </Link>
      </div> */}
      <h1 className="text-4xl text-center mt-10 font-bold">Our Team</h1>
      <h3 className="text-center m-8 text-lg">
        "Find a group of people who challenge and inspire you, spend a lot of
        time with them, and it will change your life." – Amy Poehler
      </h3>
      <div className="flex flex-col sm:flex-row justify-center ">
        <Cards
          img={FaisalImg}
          name="Amir Faisal Karimullah"
          desc="Ceo - Founder - Web Design"
          active="Aktif"
        />
        <Cards
          img={AhnafImg}
          name="Ahnaf Maulana"
          desc="Graphic Design - Creative Team"
          active="Non Aktif "
        />
        <Cards
          img={HendraImg}
          name="Hendrawan"
          desc="Fullstack Developer - CO Founder"
          active="Aktif"
        />
      </div>
    </div>
  );
};

export default Team;
