import React from "react";

export const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className="text-white py-16">
      <div className="container mx-auto text-center">
        <h1
          className="text-5xl lg:text-7xl font-extrabold mb-8 text-white"
          style={{
            textShadow:
              "0 0 10px #00ffae, 0 0 20px #00ffae, 0 0 30px #00ffae, 0 0 40px #00ffae, 0 0 50px #00ffae, 0 0 60px #00ffae, 0 0 70px #00ffae",
          }}
        >
          Tokenomics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
          <div
            className="token-box p-6 border-4 border-white rounded-lg shadow-xl"
            style={{
              borderColor: "#00ffae",
              boxShadow: "0 0 10px #00ffae",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h1 className="text-3xl font-bold mb-4 text-white">Total Supply</h1>
            <p>1,500,000,000 PITGOLDAI</p>
          </div>
          <div
            className="token-box p-6 border-4 border-white rounded-lg shadow-xl"
            style={{
              borderColor: "#00ffae",
              boxShadow: "0 0 10px #00ffae",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h1 className="text-3xl font-bold mb-4 text-white">Auto Burn</h1>
            <p>🤖</p>
          </div>
          <div
            className="token-box p-6 border-4 border-white rounded-lg shadow-xl"
            style={{
              borderColor: "#00ffae",
              boxShadow: "0 0 10px #00ffae",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h1 className="text-3xl font-bold mb-4 text-white">
              Circulating Supply
            </h1>
            <p>1,100,000</p>
          </div>
          {/* Repeat the other token boxes here */}
        </div>
      </div>
    </section>
  );
};
