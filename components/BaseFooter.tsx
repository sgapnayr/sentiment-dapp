import Image from "next/image";
import React from "react";
import SentimentLogo from "@/assets/sentiment-logo.png";
import BaseToggle from "./BaseToggle";
import Link from "next/link";

export default function BaseFooter() {
  const routes = [
    { text: "Home", href: "/" },
    { text: "Stake", href: "/stake" },
    { text: "Swap", href: "/swap" },
    { text: "Mint", href: "/mint" },
  ];

  return (
    <footer className="p-16">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="w-full flex justify-center items-center">
          <Link href={"/"} className="flex items-center gap-x-2">
            <Image
              src={SentimentLogo}
              alt="Logo"
              className="w-8 rounded-full shadow-xl"
            />
            <span className="font-light text-xl">Sentiment</span>
          </Link>
        </div>
        <p className="my-6 opacity-50">
          Data privacy is more important than ever. Ensure your users data is
          securely managed in full compliance with regulations.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {routes.map((route, index) => (
            <Link
              className="opacity-50 active:opacity-25 hover:opacity-100 mr-4 hover:underline md:mr-6"
              key={index}
              href={route.href}
            >
              {route.text}
            </Link>
          ))}
        </ul>
        <span className="text-sm opacity-50">
          © Sentiment™ All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
