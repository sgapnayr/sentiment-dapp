import BaseBanner from "@/components/BaseBanner";
import BaseGrowingEcosystem from "@/components/BaseGrowingEcosystem";
import DefaultLayout from "@/layout/default-layout";
import Banner from "@/assets/banner4.webp";

export default function Home() {
  const pageContents = {
    image: Banner,
    title: "Introducing Sentiment",
    subTitle: "Data. Privacy.",
    accentTitle: "Earn",
    symbol: "$SNT",
    hasButtons: true,
    buttons: [
      {
        text: "Buy",
        className: "bg-sentiment-purple text-white",
      },
      {
        text: "Stake",
        className:
          "border-2 border-sentiment-purple text-sentiment-purple text-sentiment-purple",
      },
    ],
  };

  return (
    <DefaultLayout>
      <BaseBanner pageContents={pageContents} />
      <BaseGrowingEcosystem />
    </DefaultLayout>
  );
}
