import DefaultLayout from "@/layout/default-layout";
import Banner from "@/assets/banner4.webp";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-x-8 w-full">
        <Image
          src={Banner}
          alt="Banner"
          className="rounded-2xl shadow-2xl my-8 md:mx-auto md:max-w-xl md:w-auto"
        />
        <div className="my-8 lg:my-0">
          <h1 className="text-5xl lg:text-6xl w-full sm:text-center lg:text-start font-semibold">
            Introducing Sentiment
          </h1>
          <div className="mt-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light opacity-75">
            Data. Privacy.
          </div>
          <div className="mb-4 text-3xl lg:text-4xl w-full sm:text-center lg:text-start font-light">
            Earn <span className="text-sentiment-purple">$SNT</span>.
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
