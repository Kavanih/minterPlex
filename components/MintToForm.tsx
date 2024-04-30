import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  createMintToInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAccount,
} from "@solana/spl-token";
import { promises } from "dns";

export const MintToForm: FC = () => {
  const [txSig, setTxSig] = useState("");
  const [tokenAccount, setTokenAccount] = useState("");
  const [balance, setBalance] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };

  const mintTo = async (event) => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }

    // BUILD AND SEND MINT TRANSACTION HERE

    const mint = new web3.PublicKey(event.target[0].value);

    const accountInfo = await connection.getAccountInfo(mint);
    const decimals = accountInfo.data.readUInt8(44);

    console.log(`decimals ` + decimals);

    const recipient = new web3.PublicKey(event.target[1].value);
    const amount = new Number(event.target[2].value).valueOf() * 10 ** decimals;

    const ata = await getAssociatedTokenAddress(mint, recipient);

    const ix = createMintToInstruction(mint, ata, publicKey, amount);

    const tx = new web3.Transaction();
    // tx.add(ix)
    tx.add(ix);

    const sigx = await sendTransaction(tx, connection);
    setTxSig(sigx);

    // // wait for state
    // console.log("waiting");
    // await connection.confirmTransaction(sigx, "max");
    // console.log("finalised");

    await new Promise((_) => setTimeout(_, 20000));

    // get nbalance
    const ai = await connection.getAccountInfo(ata);
    const newBalance = ai.data.readBigInt64LE(64);
    setBalance(newBalance.toString());
  };

  return (
    <div>
      <br />
      {publicKey ? (
        <form onSubmit={mintTo} className={styles.form}>
          <label htmlFor="mint">Token Mint:</label>
          <input
            id="mint"
            type="text"
            className={styles.formField}
            placeholder="Enter Token Mint"
            required
          />
          <label htmlFor="recipient">Recipient:</label>
          <input
            id="recipient"
            type="text"
            className={styles.formField}
            placeholder="Enter Recipient PublicKey"
            required
          />
          <label htmlFor="amount">Amount Tokens to Mint:</label>
          <input
            id="amount"
            type="text"
            className={styles.formField}
            placeholder="e.g. 100"
            required
          />
          <button type="submit" className={styles.formButton}>
            Mint Tokens
          </button>
        </form>
      ) : (
        <span></span>
      )}
      {txSig ? (
        <div>
          <p>Token Balance: {balance} </p>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  );
};
