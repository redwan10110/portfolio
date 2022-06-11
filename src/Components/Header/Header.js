import React from "react";
import "./Header.css";
import img from "./redwan2.png";
const Header = () => {
  return (
    <div className="w-full h-screen grid place-content-center lg:px-12 px-6">
      <div className="text-center">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-secondary mb-5">
            <img src={img} alt='redwan' />
          </div>
        </div>
        <h1 className="text-5xl text-white mb-5">I am a Frontend developer</h1>
        <p className="text-base text-white mb-5">
          Obviously I'm a Web Designer. Web Developer with over 3 years of
          experience. <br /> Experienced with all stages of the development
          cycle for dynamic web projects.
        </p>

        <button
          className="btn btn-secondary text-black"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1-kNQHf1vcFtzWsbdqq6oXi_drGNPjN7v/view",
              "_blank"
            )
          }
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
