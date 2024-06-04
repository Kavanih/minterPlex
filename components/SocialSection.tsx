import React from "react";

export const SocialSection: React.FC = () => {
  return (
    <section id="social">
      <div className="flex flex-col-reverse items-center md:flex-row justify-between gap-5">
        <div className="social w-full md:w-1/2 mx-4 px-4 flex justify-center items-center">
          <img
            className="w-80 md:96 lg:w-[1000px] mx-8"
            src="images/trois.png"
            alt=""
          />
        </div>

        <div className="social w-full md:w-1/2 mx-4 px-4">
          <h1 className="text-center md:text-left text-3xl lg:text-5xl font-extrabold mb-8 text-white">
            Follow PITGOLDAI on social media
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="https://t.me/BabyTrumpGlobal">
              <img
                className="w-24 transform hover:scale-110 transition duration-200"
                src="images/social_tg.png"
                alt=""
              />
            </a>
            <a href="https://twitter.com/BabyTrumpBSC_">
              <img
                className="w-24 transform hover:scale-110 transition duration-200"
                src="images/social_x.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-24 transform hover:scale-110 transition duration-200"
                src="images/social_discord.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
