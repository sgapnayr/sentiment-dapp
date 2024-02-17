import React from "react";
import Banner from "@/assets/banner4.webp";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";

function BaseBanner() {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-x-16 w-full">
      <Image
        src={Banner}
        alt="Banner"
        className="rounded-2xl shadow-xl my-8 mt-20 lg:mt-16 md:mx-auto md:max-w-xl md:w-auto"
      />
      <div className="my-8 lg:mt-16">
        <h1 className="text-5xl lg:text-6xl w-full sm:text-center lg:text-start font-semibold">
          Introducing Sentiment
        </h1>
        <div className="mt-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light opacity-75">
          Data. Privacy.
        </div>
        <div className="mb-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light">
          Earn <span className="text-sentiment-purple">$SNT</span>.
        </div>
        <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-x-4">
          <BaseButton className="mb-5 lg:mb-0 bg-sentiment-purple text-white">
            Buy
          </BaseButton>
          <BaseButton className="border-2 border-sentiment-purple text-sentiment-purple">
            Stake
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default BaseBanner;
