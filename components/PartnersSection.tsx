import React from "react";

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners">
      <div className="container mx-auto text-center p-5 lg:pb-20">
        <div className="flex justify-center mx-4 md:mx-6 lg:mx-8 mb-8">
          <h1 className="token text-5xl lg:text-7xl font-extrabold text-white">
            VISION🔍
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center align-middle mb-5 md:mb-10 lg:mb-20 mt-5 lg:mt-20">
          <a href="https://www.pinksale.finance/">
            <div className="token1 w-64 h-64 flex items-center lg:w-1/3 mx-4 md:mx-6 lg:mx-8 mb-8">
              <div className="flex flex-col justify-center items-center border-4 rounded-lg m-4 lg:m-10 p-10 transform hover:scale-110 transition duration-200">
                <img
                  className="w-32 lg:w-64"
                  src="images/partners/pink.png"
                  alt=""
                />
                <p className="text-3xl lg:text-7xl text-white">PinkSale</p>
              </div>
            </div>
          </a>
          <a href="https://www.dexview.com/">
            <div className="token1 w-64 h-64 flex items-center lg:w-1/3 mx-4 md:mx-6 lg:mx-8 mb-8">
              <div className="flex flex-col justify-center items-center border-4 rounded-lg m-4 lg:m-10 p-10 transform hover:scale-110 transition duration-200">
                <img
                  className="w-32 lg:w-64"
                  src="images/partners/dex.png"
                  alt=""
                />
                <p className="text-3xl lg:text-7xl text-white">DEXView</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
