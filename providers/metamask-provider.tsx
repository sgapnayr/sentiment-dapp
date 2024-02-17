"use client";

import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";

export default function MetaMaskWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host,
    },
  };
  return (
    <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
      {children}
    </MetaMaskProvider>
  );
}
