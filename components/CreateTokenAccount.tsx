import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";
import { FC, useState } from "react";
import styles from "../styles/Home.module.css";

import {
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  getMinimumBalanceForRentExemptAccount,
  ACCOUNT_SIZE,
  createInitializeAccountInstruction,
} from "@solana/spl-token";
import { log } from "console";

export const CreateTokenAccountForm: FC = () => {
  const [txSig, setTxSig] = useState("");
  const [tokenAccount, setTokenAccount] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const createTokenAccount = async (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }

    // BUILD AND SEND CREATE TOKEN ACCOUNT TRANSACTION HERE

    const mint = new web3.PublicKey(event.target[0].value);
    const owner = new web3.PublicKey(event.target[1].value);

    const ata = await getAssociatedTokenAddress(mint, owner);

    // const lamports = await getMinimumBalanceForRentExemptAccount(connection);
    // const ix = SystemProgram.createAccount({
    //   fromPubkey: publicKey,
    //   lamports,
    //   newAccountPubkey: ata,
    //   programId: TOKEN_PROGRAM_ID,
    //   space: ACCOUNT_SIZE,
    // });

    const ixCreateaccount = createAssociatedTokenAccountInstruction(
      publicKey,
      ata,
      owner,
      mint
    );

    const tx = new web3.Transaction();
    // tx.add(ix)
    tx.add(ixCreateaccount);

    const sigx = await sendTransaction(tx, connection);
    setTxSig(sigx);
  };

  return (
    <div>
      <br />
      {publicKey ? (
        <form onSubmit={createTokenAccount} className={styles.form}>
          <label htmlFor="owner">Token Mint:</label>
          <input
            id="mint"
            type="text"
            className={styles.formField}
            placeholder="Enter Token Mint"
            required
          />
          <label htmlFor="owner">Token Account Owner:</label>
          <input
            id="owner"
            type="text"
            className={styles.formField}
            placeholder="Enter Token Account Owner PublicKey"
            required
          />
          <button type="submit" className={styles.formButton}>
            Create Token Account
          </button>
        </form>
      ) : (
        <span></span>
      )}
      {txSig ? (
        <div>
          <p>Token Account Address: {tokenAccount}</p>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  );
};
