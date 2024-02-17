import React from "react";
import DefaultLayout from "@/layout/default-layout";
import Swap from "@/assets/swap.webp";
import BaseBanner from "@/components/BaseBanner";

export default function Home() {
  const pageContents = {
    image: Swap,
    title: "Harmony Bridge",
    subTitle: "Effortlessly swap your tokens.",
    accentTitle: "Quick.",
    symbol: "Secure.",
    hasButtons: true,
    buttons: [
      {
        text: "Swap",
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
