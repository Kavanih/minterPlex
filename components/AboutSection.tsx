import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="shadow-2xl py-4"
      style={{
        background: "url('images/futuristic_background.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center mx-5 lg:mx-20 gap-5">
        <p
          className="text-6xl lg:text-8xl font-extrabold text-center text-white"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            textShadow:
              "0 0 10px #00ffae, 0 0 20px #00ffae, 0 0 30px #00ffae, 0 0 40px #00ffae, 0 0 50px #00ffae, 0 0 60px #00ffae, 0 0 70px #00ffae",
          }}
        >
          Introducing PITGOLDAI ($PGAI)
        </p>
        <div
          className="hero lg:h-screen flex flex-col-reverse justify-start lg:flex-row items-center mx-5 lg:mx-10"
          style={{ marginBottom: "50px" }}
        >
          <div
            className="main-head text-white w-full lg:w-5/3 flex flex-col"
            style={{ marginTop: "-200px" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div
                className="futuristic-sign"
                style={{
                  border: "3px solid #00ffae",
                  padding: "20px",
                  background: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="text-4xl lg:text-5xl font-extrabold text-white">
                  Meme Coin Dog Unicorn Meets AI Innovation!
                </p>
                <br />
                <p className="text-lg lg:text-xl text-white">
                  -PGAI the whimsy of meme coins with the precision of
                  artificial intelligence.
                </p>
                <br />
                <p className="text-lg lg:text-xl text-white">
                  -The greatest #SOL Airdrop of all time!
                </p>
                <br />
                <p className="text-lg lg:text-xl text-white">
                  -Automated AI burns based on the transaction
                </p>
                <br />
                <p className="text-lg lg:text-xl text-white">
                  -Don't miss your chance to be part of this revolutionary
                  project.
                </p>
                <br />
                <p className="text-lg lg:text-xl text-white">
                  -Get ready for our listing on a top 15 exchange in July 2024!
                  🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
