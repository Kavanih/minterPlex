import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { FC, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getMinimumBalanceForRentExemptMint,
  createInitializeMintInstruction,
} from "@solana/spl-token";
import { Keypair, SystemProgram } from "@solana/web3.js";

export const CreateMintForm: FC = () => {
  const [txSig, setTxSig] = useState("");
  const [mint, setMint] = useState("");

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const createMint = async (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }

    // BUILD AND SEND CREATE MINT TRANSACTION HERE

    const mint = new Keypair();
    const decimal = 3;

    const lamports = await getMinimumBalanceForRentExemptMint(connection);
    const ix = SystemProgram.createAccount({
      fromPubkey: publicKey,
      lamports,
      newAccountPubkey: mint.publicKey,
      programId: TOKEN_PROGRAM_ID,
      space: MINT_SIZE,
    });

    const ixCreateMint = createInitializeMintInstruction(
      mint.publicKey,
      decimal,
      publicKey,
      null
    );
    const tx = new web3.Transaction();
    tx.add(ix);
    tx.add(ixCreateMint);

    const sigx = await sendTransaction(tx, connection, {
      signers: [mint],
    });
    setTxSig(sigx);
  };

  return (
    <div>
      {publicKey ? (
        <form onSubmit={createMint} className={styles.form}>
          <button type="submit" className={styles.formButton}>
            Create Mint
          </button>
        </form>
      ) : (
        <span>Connect Your Wallet</span>
      )}
      {txSig ? (
        <div>
          <p>Token Mint Address: {mint}</p>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  );
};
