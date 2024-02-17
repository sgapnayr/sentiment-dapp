import Image from "next/image";
import React from "react";
import SentimentLogo from "@/assets/sentiment-logo.png";
import BaseToggle from "./BaseToggle";
import BaseWrapper from "./BaseWrapper";

export default function BaseNavbar() {
  return (
    <BaseWrapper>
      <div className="w-full flex items-center justify-between">
        <Image
          src={SentimentLogo}
          alt="Logo"
          className="w-12 rounded-full shadow-xl"
        />
        <BaseToggle />
      </div>
    </BaseWrapper>
  );
}
