import "../styles/globals.css";
// Import Tailwind CSS in your global styles or _app.tsx file
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
