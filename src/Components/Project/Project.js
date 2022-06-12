import React from "react";
import saw1 from '../../Img/slide1.png';
import saw2 from '../../Img/saw2.jpg';
import saw3 from '../../Img/saw3.jpg';
import saw4 from '../../Img/saw4.jpg';
import saw5 from '../../Img/saw5.jpg';
import saw6 from '../../Img/saw6.jpg';
import ainjibi1 from '../../Img/Ainjibi1.jpg';
import ainjibi2 from '../../Img/Ainjibi2.jpg';
import nature1 from '../../Img/nature1.jpg';
import nature2 from '../../Img/nature2.jpg';
import nature3 from '../../Img/nature3.jpg';

const Project = () => {
  return (
    <div className="bg-transparent lg:px-12 px-6" id="project">
      <h1 className="font-bold text-secondary my-10 text-4xl text-center">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 border border-sky-500 rounded-xl overflow-hidden my-7">
        <div class=" w-full bg-transparent ">
          <div class="carousel w-full lg:h-full h-64">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                src={saw1}
                class="w-full" alt="hii"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img
                src={saw2}
                class="w-full" alt="hi3"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img
                src={saw3}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img
                src={saw4}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide5" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5" class="carousel-item relative w-full">
              <img
                src={saw5}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide6" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6" class="carousel-item relative w-full">
              <img
                src={saw6}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-transparent ">
          <div class="card-body">
            <h2 class="card-title text-white text-2xl font-bold">Saw-Center</h2>
            <p className="text-base text-white">This is a website for saw manufacturer. Where an user can buy product in bulk. Admin Panel Has implemented. An admin can perform CRUD operation</p>
            <h2 className="text-secondary font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
                <div className="py-1 px-2  rounded-lg cursor-pointer text-white bg-blue-500">
                # React Js
                </div>
                <div className="py-1 px-2 bg-orange-500 rounded-lg cursor-pointer text-white">
                # Tailwind Css
                </div>
                <div className="py-1 px-2 bg-red-500 rounded-lg cursor-pointer text-white">
                # Firebase
                </div>
                <div className="py-1 px-2 bg-amber-500 rounded-lg cursor-pointer text-white">
                # Node Js
                </div>
                <div className="py-1 px-2 bg-yellow-500 rounded-lg cursor-pointer text-white">
                # MongoDB
                </div>
                <div className="py-1 px-2 bg-lime-500 rounded-lg cursor-pointer text-white">
                # Express Js
                </div>
                <div className="py-1 px-2 bg-green-500 rounded-lg cursor-pointer text-white">
                # JWT & Stripe
                </div>
            </div>
            <div class="card-actions justify-start mt-8">
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://manufacturer-website-93e69.web.app/",
              "_blank"
            )
          }>Live</button>
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://github.com/redwan10110/saw-center",
              "_blank"
            )
          }>Github Client</button>
              <button class="btn btn-outline btn-info text-white"
              onClick={() =>
                window.open(
                  "https://github.com/redwan10110/saw-center-server",
                  "_blank"
                )
              }>Github Server</button>
              <button class="btn btn-secondary text-black">See Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 border border-sky-500 rounded-xl overflow-hidden my-7">
      <div class="w-full bg-transparent ">
          <div class="card-body">
            <h2 class="card-title text-white text-2xl font-bold">Ainjibi</h2>
            <p className="text-base text-white">This is a website for an advocate who provides various kinds of law services to his client.</p>
            <h2 className="text-secondary font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
                <div className="py-1 px-2  rounded-lg cursor-pointer text-white bg-blue-500">
                # React Js
                </div>
                <div className="py-1 px-2 bg-orange-500 rounded-lg cursor-pointer text-white">
                # React Router
                </div>
                <div className="py-1 px-2 bg-red-500 rounded-lg cursor-pointer text-white">
                # Firebase
                </div>
                <div className="py-1 px-2 bg-amber-500 rounded-lg cursor-pointer text-white">
                # React Bootstrap
                </div>
                {/* <div className="py-1 px-2 bg-yellow-500 rounded-lg cursor-pointer text-white">
                # MongoDB
                </div>
                <div className="py-1 px-2 bg-lime-500 rounded-lg cursor-pointer text-white">
                # Express Js
                </div>
                <div className="py-1 px-2 bg-green-500 rounded-lg cursor-pointer text-white">
                # JWT & Stripe
                </div> */}
            </div>
            <div class="card-actions justify-start mt-8">
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://lawyer-43f05.web.app/",
              "_blank"
            )
          }>Live</button>
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://github.com/redwan10110/Ainjibi",
              "_blank"
            )
          }>Github Client</button>
              {/* <button class="btn btn-outline btn-info text-white"
              onClick={() =>
                window.open(
                  "https://github.com/redwan10110/saw-center-server",
                  "_blank"
                )
              }>Github Server</button> */}
              <button class="btn btn-secondary text-black">See Details</button>
            </div>
          </div>
        </div>
        <div class=" w-full bg-transparent ">
          <div class="carousel w-full lg:h-full h-64">
            <div id="slide11" class="carousel-item relative w-full">
              <img
                src={ainjibi1}
                class="w-full" alt="hii"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide13" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide12" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide12" class="carousel-item relative w-full">
              <img
                src={ainjibi2}
                class="w-full" alt="hi3"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide11" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide13" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide13" class="carousel-item relative w-full">
              <img
                src={nature1}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide12" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide11" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 border border-sky-500 rounded-xl overflow-hidden my-7">
        <div class=" w-full bg-transparent ">
          <div class="carousel w-full lg:h-full h-64">
            <div id="slide31" class="carousel-item relative w-full">
              <img
                src={nature1}
                class="w-full" alt="hii"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide33" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide32" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide32" class="carousel-item relative w-full">
              <img
                src={nature2}
                class="w-full" alt="hi3"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide31" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide33" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide33" class="carousel-item relative w-full">
              <img
                src={nature3}
                class="w-full" alt="hi2"
              />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide32" class="btn btn-circle btn-outline">
                  ❮
                </a>
                <a href="#slide31" class="btn btn-circle btn-outline">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-transparent ">
          <div class="card-body">
            <h2 class="card-title text-white text-2xl font-bold">Natours-Project Live</h2>
            <p className="text-base text-white">This is a travel website where users can book an event. This website has made based on Sass and BEM Methodology.</p>
            <h2 className="text-secondary font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
                <div className="py-1 px-2  rounded-lg cursor-pointer text-white bg-blue-500">
                # HTML5
                </div>
                <div className="py-1 px-2 bg-orange-500 rounded-lg cursor-pointer text-white">
                # CSS3
                </div>
                <div className="py-1 px-2 bg-red-500 rounded-lg cursor-pointer text-white">
                # Grid
                </div>
                <div className="py-1 px-2 bg-amber-500 rounded-lg cursor-pointer text-white">
                # Flexbox
                </div>
                <div className="py-1 px-2 bg-yellow-500 rounded-lg cursor-pointer text-white">
                # SASS
                </div>
                {/* <div className="py-1 px-2 bg-lime-500 rounded-lg cursor-pointer text-white">
                # Express Js
                </div>
                <div className="py-1 px-2 bg-green-500 rounded-lg cursor-pointer text-white">
                # JWT & Stripe
                </div> */}
            </div>
            <div class="card-actions justify-start mt-8">
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://redwan10110.github.io/natours-project/",
              "_blank"
            )
          }>Live</button>
              <button class="btn btn-outline btn-info text-white" onClick={() =>
            window.open(
              "https://github.com/redwan10110/natours-project",
              "_blank"
            )
          }>Github Client</button>
              {/* <button class="btn btn-outline btn-info text-white"
              onClick={() =>
                window.open(
                  "https://github.com/redwan10110/saw-center-server",
                  "_blank"
                )
              }>Github Server</button> */}
              <button class="btn btn-secondary text-black">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
