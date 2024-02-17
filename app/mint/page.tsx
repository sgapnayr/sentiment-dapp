import React from "react";
import DefaultLayout from "@/layout/default-layout";
import Mint from "@/assets/mint.webp";
import BaseBanner from "@/components/BaseBanner";

export default function Home() {
  const pageContents = {
    image: Mint,
    title: "Our Aura Forge",
    subTitle: "Mint your own NFTs.",
    accentTitle: "Data",
    symbol: "Mine",
    hasButtons: false,
    buttons: [
      {
        text: "Mint",
        className: "bg-sentiment-purple text-white",
      },
    ],
  };

  return (
    <DefaultLayout>
      <BaseBanner pageContents={pageContents} />
    </DefaultLayout>
  );
}
