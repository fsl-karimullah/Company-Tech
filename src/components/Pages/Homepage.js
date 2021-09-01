import React from "react";
import Cards from "../Layout/Cards";
import WebDesignImg from "../../assets/Image/w-design.jpg";
import GraphDesignImg from "../../assets/Image/g-design.jpg";
import Tools from "../Layout/Tools";
import FigmaLogo from "../../assets/Logo/figma-logo.png";
import GithubLogo from "../../assets/Logo/github.svg";
import TailwindLogo from "../../assets/Logo/tailwind-css-logo.svg";
import VscodeLogo from "../../assets/Logo/vs-code.svg";
import ReactLogo from "../../assets/Logo/react-logo.png";
import BussinessImg from "../../assets/Image/bussiness.jpg";
import OnlineWork from "../../assets/Image/online-work.svg";
import ProgrammingImg from "../../assets/Image/programming.svg";
import DesignImg from "../../assets/Image/Design.svg";
import Footer from "../Layout/Footer";
import MeetingImg from "../../assets/Image/meeting.svg";
import UiUxImg from "../../assets/Image/ui-ux.svg";
import LogoCompany from "../../assets/Logo/logo1.svg";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/Logo/Brand-New-Logo.png";
import Features from "../Layout/Features";
import ServicesImg from "../../assets/Image/services.jpg";
import porto1 from "../../assets/Portofolio/Porto1.png";
import porto2 from "../../assets/Portofolio/Porto2.png";
import porto3 from "../../assets/Portofolio/Porto3.png";
import porto4 from "../../assets/Portofolio/Porto4.png";
import porto5 from "../../assets/Portofolio/Porto5.png";
import Portofolio from "../Layout/Portofolio";
const Homepage = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 sm:px-32">
          <p className="uppercase tracking-loose">Selamat Datang</p>
          <h1 className="font-bold text-3xl my-4">Di Six Eyes Tech</h1>
          <p className="leading-normal mb-4">
            Six Eyes Tech adalah suatu komunitas, yang bergerak di bidang IT.
            Komunitas ini menerima pembuatan website, web aplikasi, dan UI & UX.
          </p>
          <button
            onClick={() =>
              openInNewTab(
                "https://instagram.com/sixeyes.tech?utm_medium=copy_link"
              )
            }
            className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent"
          >
            Instagram
          </button>
        </div>

        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <svg
            className="fill-current text-gray-900 w-3/5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </div>
      </div>

      <div className="">
        <div className="text-center m-5 mt-60 font-custom text-base sm:text-lg md:text-xl items-center flex flex-col">
          <h1 className="text-lg md:text-3xl m-10 uppercase sm:text-2xl transform duration-700 hover:scale-105 ease-out">
            Kami adalah komunitas{" "}
            <span className="text-white bg-black p-3 ">baru</span>
          </h1>
          <p className="w-2/3 text-sm sm:text-lg">
            Komunitas kami adalah komunitas yang bergerak di bidang teknologi,
            yaitu pembuatan Website Portofolio (Website untuk mengenalkan produk
            anda) dan bergerak dibidang Graphic Design, layanan kami di dalam
            graphic design yaitu proses pembuatan Undangan, Logo Perusahaan atau
            Komunitas, dan Banner siap print.
          </p>
        </div>
      </div>
      <div className=" custom-bg-image bg-scroll md:bg-fixed bg-cover  ">
        <div>
          <h1 className="text-1xl pt-20 font-bold text-center sm:text-2xl font-custom mt-72 m-5 md:text-4xl uppercase">
            Layanan kami
          </h1>
          <p className="px-10 text-xs sm:text-xl sm:px-36 font-semibold text-center ">
            Kami bergerak dan memfokuskan diri di bidang Software House di
            Indonesia. Kami hadir di dunia teknologi untuk membantu memudahkan
            pebisnis baru, menengah untuk memperkenalkan produknya lebih luas.
          </p>
        </div>
        <div className="flex flex-col md:flex-row sm:flex-row py-16 justify-center mt-20 rounded-md">
          <Features
            img={ProgrammingImg}
            title="Web Design"
            desc="Bangun identitas bisnis dan usaha anda."
          />
          <Features
            img={UiUxImg}
            title="UI & UX"
            desc="Menyusun tampilan aplikasi, dan menyesuaikan dengan pengguna."
          />
          <Features
            img={DesignImg}
            title="Graphic Design"
            desc="Jasa Pembuatan Logo, Banner, Sertifikat, Undangan."
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-4xl m-10 sm:text-3xl transform duration-700 hover:scale-105 ease-out">
          Portofolio
        </h1>
        <div className="grid grid-flow-col md:grid-flow-row grid-rows-5 grid-cols-1 md:grid-cols-3 sm:grid-rows-1">
          <Portofolio src={porto1} alt="porto1" />
          <Portofolio src={porto2} alt="porto2" />
          <Portofolio src={porto3} alt="porto3" />
          <Portofolio src={porto4} alt="porto4" />
          <Portofolio src={porto5} alt="porto5" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="">
          <div className="text-center m-5 font-custom text-base sm:text-lg md:text-xl mt-72">
            <h1 className="text-lg md:text-3xl m-10 uppercase sm:text-2xl transform duration-700 hover:scale-105 ease-out">
              <span className="text-white bg-black p-3 ">Tools</span>
              Yang kami pakai
            </h1>
          </div>
          <div className="grid md:grid-flow-col md:grid-rows-1 grid-rows-3 center my-44 justify-center">
            <Tools img={ReactLogo} title="React Js" />
            <Tools img={TailwindLogo} title="Tailwind Css" />
            <Tools img={VscodeLogo} title="VS Code" />
            <Tools img={FigmaLogo} title="Figma" />
            <Tools img={GithubLogo} title="Github" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="custom-bg-image-2 bg-scroll bg-cover md:bg-fixed lg:py-12 lg:flex lg:justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div className="lg:w-1/2">
                <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
                  <img className="p-10" src={BussinessImg} alt="img-card" />
                </div>
              </div>
              <div className="py-10 md:py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 ">
                <h2 className="text-3xl text-gray-800 font-bold">
                  Bangun dan kenalkan bisnis{" "}
                  <span className="text-pink-600">Anda</span>
                </h2>
                <p className="mt-4 text-black text-lg sm:text-base font-medium">
                  Terutama bagi Anda yang menjalankan bisnis, solusi paling
                  efektif untuk memperkenalkan dan memasarkan produk/jasa Anda
                  saat ini adalah dengan memanfaatkan internet. Selain
                  menggunakan media sosial, Anda juga perlu memiliki website
                  untuk kepentingan marketing.
                </p>
                <div className="mt-8">
                  <Link
                    onClick={() => openInNewTab("https://wa.me/6287826563459")}
                    className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
