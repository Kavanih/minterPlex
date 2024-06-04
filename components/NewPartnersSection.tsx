import React from "react";
import pinkLogo from "../images/GATE.png"; // Assuming it's a .png file
import test from "../images/test.png"; // Assuming it's a .png file
import CR from "../images/CR.png"; // Assuming it's a .png file
import mexc from "../images/mexc.png"; // Assuming it's a .png file
import okx from "../images/OKX.png"; // Assuming it's a .png file
import ss from "../images/SS.png"; // Assuming it's a .png file

export const NewPartnersSection: React.FC = () => {
  return (
    <section id="new-partners" className="py-16">
      <div className="container mx-auto text-center">
        <h1
          className="text-5xl font-extrabold text-white mb-8"
          style={{
            textShadow:
              "0 0 10px #00ffae, 0 0 20px #00ffae, 0 0 30px #00ffae, 0 0 40px #00ffae, 0 0 50px #00ffae, 0 0 60px #00ffae, 0 0 70px #00ffae",
          }}
        >
          PARTNERS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center">
          <div className="partner-logo">
            <img
              src={pinkLogo.src}
              alt="Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
          <div className="partner-logo">
            <img
              src={test.src}
              alt="Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
          <div className="partner-logo">
            <img
              src={CR.src}
              alt="Third Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
          <div className="partner-logo">
            <img
              src={mexc.src}
              alt="Fourth Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
          <div className="partner-logo">
            <img
              src={okx.src}
              alt="Fifth Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
          <div className="partner-logo">
            <img
              src={ss.src}
              alt="New Partner Logo"
              style={{ height: "160px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
