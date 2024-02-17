"use client";

import { useSDK } from "@metamask/sdk-react";
import { useCallback } from "react";

export default function ConnectMetaMask() {
  const { sdk, connected, connecting, account, chainId } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  const copyAddressToClipboard = useCallback(async () => {
    if (account) {
      try {
        await navigator.clipboard.writeText(account);
        alert("Address copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy address: ", err);
      }
    }
  }, [account]);

  return (
    <div className="flex w-full justify-between px-4 bg-sentiment-purple shadow-xl py-1">
      <div className="w-full text-white">
        Wallet:
        {connected && (
          <span
            className="cursor-pointer ml-2 text-white"
            onClick={copyAddressToClipboard}
            title="Click to copy address"
          >
            {account?.slice(0, 5) + "..." + account?.slice(-5)}
          </span>
        )}
      </div>
      <div className="w-full text-white">ChainID: {chainId}</div>
      <div>
        {connected ? (
          <button
            onClick={disconnect}
            className="block w-full text-left text-[#F05252]"
          >
            Disconnect
          </button>
        ) : (
          <button onClick={connect}>Connect </button>
        )}
      </div>
    </div>
  );
}
