import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./index.css";

export const Design: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeCopyText = (element: HTMLButtonElement) => {
    element.querySelector(".copy-text")!.textContent = "Copied";
  };

  return (
    <div className="font-Montserrat bg-black">
      {/* Header Section */}
      <nav className="nav-main">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="images/trois.png"
              className="h-12 rounded-full md:h-14"
              alt="etf"
            />
            <span
              className="md:hidden lg:block text-lg md:text-3xl font-extrabold whitespace-nowrap text-blue-500"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(150, 24, 182), violet)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              PITGOLDAI
            </span>
          </a>
          <button
            type="button"
            style={{ color: "cyan" }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-sm md:hidden hover:bg-cyan-500"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <span id="menuIcon" className="menu-icon">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </span>
          </button>
          <div
            className={`w-full md:block md:w-auto ${menuOpen ? "" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="violet block py-2 px-3 text-white text-lg lg:text-xl rounded hover:text-pink-500 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0"
                  aria-current="page"
                >
                  <i className="bx bx-coin"></i> HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="violet block py-2 px-3 text-white text-lg lg:text-xl rounded hover:text-pink-500 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0"
                  aria-current="page"
                >
                  <i className="bx bx-coin"></i> ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  className="violet block py-2 px-3 text-white text-lg lg:text-xl rounded hover:text-pink-500 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0"
                  aria-current="page"
                >
                  <i className="bx bx-coin"></i> TOKENOMICS
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="violet block py-2 px-3 text-white text-lg lg:text-xl rounded hover:text-pink-500 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0"
                >
                  <i className="bx bx-map-alt"></i> PARTNERS
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="violet block py-2 px-3 text-white text-lg lg:text-xl rounded hover:text-pink-500 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0"
                >
                  <i className="bx bx-message-dots"></i> SOCIALS
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`my-2 md:block md:w-auto ${menuOpen ? "" : "hidden"}`}
            id="navbar-default-btn"
          >
            <a href="https://twitter.com/PitGoldAI" className="">
              <button
                type="button"
                className="text-white bg-black hover:bg-white hover:text-black border border-white focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Connect Wallet
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-wrap justify-center items-center relative text-white text-center py-10 bg-cover bg-center">
        <div className="container min-w-fit hero relative z-10 lg:h-screen flex justify-center flex-col-reverse md:flex-row lg:flex-row items-center mx-5 lg:mx-10">
          <div className="main-head text-white w-full m-0 md:m-10 lg:m-0 md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl text-center lg:text-5xl font-extrabold break-words lg:px-4 mt-6 lg:mt-0">
              Welcome to
              <br />
              <span
                className="text-center text-4xl lg:text-7xl text-cyan-500 glow-text"
                style={{
                  backgroundImage: "linear-gradient(to right, cyan, violet)",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                PITGOLDAI
              </span>
            </h1>
            <a className="w-full md:w-1/2 lg:w-1/2">
              <div className="text-white justify-center gap-x-2 items-center w-full bg-black border-white focus:outline-none focus:ring-4 focus:ring-white font-medium text-lg px-5 py-2.5 me-2 mb-2">
                <div className="name">PITGOLDAI PRESALE 💹</div>
                <div className="see">
                  <div className="mt-5">Buy Now with Minimum of 1sol</div>
                  <button className="hover:bg-white hover:text-black border rounded-full p-4 mt-4">
                    Buy Now!
                  </button>
                </div>
              </div>
            </a>
            <div className="flex justify-center items-center gap-x-3 mx-auto w-full">
              <p className="text-white">CA:</p>
              <div
                id="hs-clipboard-basic"
                className="text-white border border-blue-500 w-1/2 md:w-1/2"
              >
                <input
                  id="hs-clipboard-input"
                  type="text"
                  className="py-3 px-4 block rounded-lg text-sm w-full md:w-full placeholder:text-white focus:border-blue-500 focus:ring-blue-500 bg-gray-900 border-gray-700"
                  value="474x7TVoBjAmBtvAUBe8ZkGYA3pk9BZAHP41fWzuKu4L"
                  readOnly
                />
              </div>
              <button
                type="button"
                className="js-clipboard p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-500 bg-gray-500 text-white shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-clipboard-target="#hs-clipboard-basic"
                data-clipboard-action="copy"
                data-clipboard-success-text="Copied"
                onClick={(e) => changeCopyText(e.currentTarget)}
              >
                <svg
                  className="js-clipboard-default w-4 h-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 17L12 21 16 17"></path>
                  <path d="M12 12V21"></path>
                  <path d="M20 5H10"></path>
                  <path d="M4 5H4.01"></path>
                </svg>
                <span className="copy-text">Copy</span>
              </button>
            </div>
          </div>
          <div className="main-head w-full md:w-1/3 lg:w-1/2 flex justify-center items-center">
            <img
              src="images/giphy.gif"
              className="mt-6 lg:mt-0"
              width="250"
              height="250"
              alt="PITGOLDAI GIF"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black pt-5">
        <div className="container max-w-screen-xl mx-auto text-white px-5 lg:px-0 pb-5">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
            <div className="mb-8">
              <h5 className="text-xl font-bold mb-6">Company</h5>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#about" className="text-white hover:text-pink-500">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#tokenomics"
                    className="text-white hover:text-pink-500"
                  >
                    Tokenomics
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#partners"
                    className="text-white hover:text-pink-500"
                  >
                    Partners
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#social" className="text-white hover:text-pink-500">
                    Socials
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="text-xl font-bold mb-6">Support</h5>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-pink-500">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-pink-500">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="text-xl font-bold mb-6">Contact</h5>
              <ul className="list-none">
                <li className="mb-2">
                  <a
                    href="mailto:support@pitgoldai.com"
                    className="text-white hover:text-pink-500"
                  >
                    Email
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-pink-500">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="text-xl font-bold mb-6">Follow Us</h5>
              <ul className="list-none">
                <li className="mb-2">
                  <a
                    href="https://twitter.com/PitGoldAI"
                    className="text-white hover:text-pink-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:col-span-2 lg:col-span-3">
              <h5 className="text-xl font-bold mb-6">Subscribe</h5>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="mb-4 py-3 px-4 rounded bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
