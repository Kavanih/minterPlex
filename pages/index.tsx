import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
// frontend stuffs
import { AppBar } from "../components/AppBar";
import { HeroSection } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { TokenomicsSection } from "../components/TokenomicsSection";
import { PartnersSection } from "../components/PartnersSection";
import { SocialSection } from "../components/SocialSection";
import { NewPartnersSection } from "../components/NewPartnersSection";
import { MyFooter } from "../components/MyFooter";

import { SendSol } from "../components/send";

import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Token Presale</title>
        <meta name="description" content="Token Presale" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <HeroSection />
          <AboutSection />
          <TokenomicsSection />
          <PartnersSection />
          <SocialSection />
          <NewPartnersSection />
          <MyFooter />

          {/* <SendSol /> */}
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
