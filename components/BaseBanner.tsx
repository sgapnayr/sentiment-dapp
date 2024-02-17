import React from "react";
import Image from "next/image";
import BaseButton from "@/components/BaseButton";

function BaseBanner({ pageContents }: { pageContents: any }) {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-x-16 w-full">
      <Image
        src={pageContents.image}
        alt="Banner"
        className="rounded-2xl shadow-xl my-8 mt-20 lg:mt-16 md:mx-auto md:max-w-xl md:w-auto"
      />
      <div className="my-8 lg:mt-16">
        <h1 className="text-5xl lg:text-6xl w-full sm:text-center lg:text-start font-semibold">
          {pageContents.title}
        </h1>
        <div className="mt-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light opacity-75">
          {pageContents.subTitle}
        </div>
        <div className="mb-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light">
          {pageContents.accentTitle}
          <span className="text-sentiment-purple ml-1">
            {pageContents.symbol}
          </span>
          .
        </div>

        {pageContents.hasButtons && (
          <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-4">
            {pageContents?.buttons?.map((button: any, index: number) => (
              <BaseButton key={index} className={button.className}>
                {button.text}
              </BaseButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BaseBanner;
