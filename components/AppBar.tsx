import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import troisImage from "../images/trois.png"; // Assuming it's a .png file

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src={troisImage} height={70} width={150} />
      <span>Home</span>
      <span>About</span>

      <span>Tokenomics</span>

      <span className="text-2xl">Partners</span>
      <span>Socials</span>

      <WalletMultiButton />
    </div>
  );
};
