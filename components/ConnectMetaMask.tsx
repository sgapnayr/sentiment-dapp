"use client";

import Link from "next/link";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";

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

  return (
    <div className="">
      <div>
        Wallet: {connected && account?.slice(0, 5) + "..." + account?.slice(-5)}
      </div>
      <div>ChainID: {chainId}</div>
      <button onClick={connect}>Connect </button>
      <button
        onClick={disconnect}
        className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
      >
        Disconnect
      </button>
    </div>
  );
}
