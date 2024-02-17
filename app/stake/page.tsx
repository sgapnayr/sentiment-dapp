import React from "react";
import DefaultLayout from "@/layout/default-layout";
import Banner from "@/assets/banner.webp";
import BaseBanner from "@/components/BaseBanner";

export default function Home() {
  const pageContents = {
    image: Banner,
    title: "The Echo Chamber",
    subTitle: "Rewards.",
    accentTitle: "~APR%",
    symbol: "$SNT",
    hasButtons: true,
    buttons: [
      {
        text: "Stake",
        className: "bg-sentiment-purple text-white",
      },
      {
        text: "Unstake",
        className:
          "border-2 border-sentiment-purple text-sentiment-purple text-sentiment-purple",
      },
    ],
  };

  return (
    <DefaultLayout>
      <BaseBanner pageContents={pageContents} />
    </DefaultLayout>
  );
}
