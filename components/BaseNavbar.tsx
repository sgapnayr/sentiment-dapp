import Image from "next/image";
import React from "react";
import SentimentLogo from "@/assets/sentiment-logo.png";
import BaseToggle from "./BaseToggle";
import Link from "next/link";

export default function BaseNavbar() {
  return (
    <div className="w-full flex items-center justify-between px-4">
      <Link href={"/"} className="flex items-center gap-x-2">
        <Image
          src={SentimentLogo}
          alt="Logo"
          className="w-8 rounded-full shadow-xl"
        />
        <span className="font-light text-xl">Sentiment</span>
      </Link>
      <BaseToggle />
    </div>
  );
}
