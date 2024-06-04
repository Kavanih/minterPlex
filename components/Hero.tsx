import Image from "next/image";
import troisImage from "../images/trois.png"; // Assuming it's a .png file
import { SendSol } from "../components/send";

const changeCopyText = () => {
  const targetElement = document.getElementById(
    "hs-clipboard-input"
  ) as HTMLInputElement;
  const targetValue = targetElement?.value;

  if (targetValue) {
    navigator.clipboard
      .writeText(targetValue)
      .then(() => {
        console.log("Text copied successfully!");
        const copyButton = document.querySelector(".copy-text");
        if (copyButton) {
          copyButton.textContent = "Copied!";
          setTimeout(() => {
            copyButton.textContent = "Copy";
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  } else {
    console.error("Target value not found for copying.");
  }
};

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center items-center relative text-white text-center py-10 bg-cover bg-center">
      <div className="container min-w-fit hero relative z-10 lg:h-screen flex justify-center flex-col-reverse md:flex-row lg:flex-row items-center mx-5 lg:mx-10">
        <div className="main-head text-white w-full m-0 md:m-10 lg:m-0 md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl text-center lg:text-5xl font-extrabold break-words lg:px-4 mt-6 lg:mt-0">
            Welcome to <br />
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
                <div className="mt-5">Connect to pay</div>
              </div>
            </div>
            <SendSol />
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
              onClick={changeCopyText}
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
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
              <svg
                className="js-clipboard-success hidden w-4 h-4 text-blue-600"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="copy-text">copy</span>
            </button>
          </div>
          <a href="https://app.analytixaudit.com/baby-trump">
            <p className="text-xl lg:text-2xl text-white underline">
              AUDITED BY
            </p>
          </a>
        </div>
        <div className="main-logo w-80 md:96 lg:w-1/2">
          <Image
            src={troisImage}
            alt="Animated etf logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
