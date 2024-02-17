import React from "react";
import DefaultLayout from "@/layout/default-layout";
import Banner from "@/assets/banner.webp";
import BaseBanner from "@/components/BaseBanner";

export default function Home() {
  const pageContents = {
    image: Banner,
    title: "Echo Chamber",
    subTitle: "Stake your data for rewards.",
    accentTitle: "~APR%",
    symbol: "$SNT",
    hasButtons: true,
    buttons: [
      {
        text: "Stake",
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
