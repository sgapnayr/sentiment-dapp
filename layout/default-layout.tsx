import BaseNavbar from "@/components/BaseNavbar";
import React from "react";
import ConnectMetaMask from "@/components/ConnectMetaMask";
import BaseWrapper from "@/components/BaseWrapper";
import BaseFooter from "@/components/BaseFooter";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen flex flex-col relative ">
      <ConnectMetaMask />
      <BaseNavbar />
      <BaseWrapper>{children}</BaseWrapper>
      <BaseFooter />
    </div>
  );
}
