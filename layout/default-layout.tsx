import BaseNavbar from "@/components/BaseNavbar";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <BaseNavbar />
      <div className="p-10">{children}</div>
    </div>
  );
}
