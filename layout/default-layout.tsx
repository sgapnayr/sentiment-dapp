import BaseNavbar from "@/components/BaseNavbar";
import React from "react";
import ConnectMetaMask from "@/components/ConnectMetaMask";
import BaseWrapper from "@/components/BaseWrapper";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-dark-background">
      <ConnectMetaMask />
      <BaseNavbar />
      <BaseWrapper>{children}</BaseWrapper>
    </div>
  );
}
