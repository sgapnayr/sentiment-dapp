import BaseNavbar from "@/components/BaseNavbar";
import React from "react";
import ConnectMetaMask from "@/components/ConnectMetaMask";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <ConnectMetaMask />
      <BaseNavbar />
      <div>{children}</div>
    </div>
  );
}
