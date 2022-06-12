import React from "react";

const Contact = () => {
  return (
    <div className="bg-transparent lg:px-12 px-6" id="project">
      <h1 className="font-bold text-secondary my-10 text-4xl text-center">
        Contact
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-transparent  overflow-hidden my-7">
        <div class="w-90 bg-transparent shadow-xl text-white">
          <div class="card-body text-center">
            <h2 class="card-title text-6xl justify-center my-8">
              Get In Touch
            </h2>
            <p className="text-base">
              I'm currently working in Front-End Development. Feel free to mail
              me about any relevant job updates.
            </p>
            <div class="card-actions justify-center my-8">
              <button class="btn btn-outline btn-info">GitHub</button>
              <button
                class="btn btn-outline btn-info"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/redwan10110/",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div class="card w-90 bg-transparent shadow-xl text-white">
          <div class="card-body">
            <form>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text text-white">What is your name?</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="input bg-transparent border border-white text-white w-full"
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text text-white">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="input bg-transparent border border-white text-white w-full"
                />
                
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text text-white">Your Message</span>
                </label>
                <textarea class="textarea textarea-bordered h-36 bg-transparent border border-white text-white" placeholder="Write Your Message"></textarea>
                
              </div>
              <input type="submit" value="Send" className="btn btn-secondary text-black my-8 w-2/6 font-bold" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
