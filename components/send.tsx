// components/SendSol.tsx
import React, { FC, useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";

export const SendSol: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClickSend = useCallback(async () => {
    if (!publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    const transaction = new web3.Transaction();
    const recipientPubkey = new web3.PublicKey(
      "FKUjiWw41T19DsZqLxaHuGF6LzsAqqM5GPFprRm2dtg2"
    );
    const instruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubkey,
      lamports: web3.LAMPORTS_PER_SOL, // 1 SOL
    });

    transaction.add(instruction);

    try {
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");
      alert(`Transaction successful: ${signature}`);
    } catch (error) {
      console.error(error);
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button
      onClick={onClickSend}
      disabled={!publicKey}
      className={`px-3 py-1 font-semibold text-white transition-colors duration-300 ${
        publicKey
          ? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          : "bg-green-400 cursor-not-allowed"
      } rounded-xl`}
    >
      Send 1 SOL
    </button>
  );
};
