"use client";

import Image from "next/image";
import React from "react";
import SentimentLogo from "@/assets/sentiment-logo.png";
import BaseToggle from "./BaseToggle";
import Link from "next/link";

export default function BaseNavbar() {
  const [hovered, setHovered] = React.useState("");

  const routes = [
    {
      text: "Token",
      subTabs: [
        { text: "Stake", href: "/stake" },
        { text: "Swap", href: "/swap" },
      ],
    },
    {
      text: "NFT",
      subTabs: [
        { text: "Mint", href: "/mint" },
        { text: "Auction", href: "/auction" },
      ],
    },
    {
      text: "Voting",
      subTabs: [{ text: "Decentralized Voting", href: "/dao" }],
    },
    {
      text: "Docs",
      subTabs: [
        { text: "About", href: "/about" },
        { text: "White Papers", href: "/white-papers" },
        { text: "Our Team", href: "/team" },
      ],
    },
  ];

  return (
    <div className="w-full flex items-center justify-between px-8 sticky top-0 z-10 py-4 bg-clip-padding backdrop-filter backdrop-blur-md shadow-md">
      <Link href={"/"} className="flex items-center gap-x-2">
        <Image
          src={SentimentLogo}
          alt="Logo"
          className="w-8 rounded-full shadow-xl"
        />
        <span className="font-light text-xl">Sentiment</span>
      </Link>
      <div onMouseLeave={() => setHovered("")} className="flex gap-16 relative">
        {routes.map((route, index) => (
          <div
            onMouseEnter={() => setHovered(route.text)}
            className="flex flex-col relative cursor-pointer hover:opacity-100 opacity-50 hover:underline md:mr-6"
            key={index}
          >
            {route.text}
            {hovered === route.text && (
              <div
                onMouseEnter={() => setHovered(route.text)}
                className="absolute rounded-md top-6 flex flex-col left-1/2 transform -translate-x-1/2 overflow-hidden w-[200px] border border-light-background/50 shadow-inner bg-sentiment-purple"
              >
                {route.subTabs?.map((subTab, jndex) => {
                  return (
                    <Link
                      className={`${
                        route.subTabs.length > 1 &&
                        jndex !== route.subTabs.length - 1 &&
                        "border-b border-light-background"
                      } opacity-50 active:opacity-25 p-4 px-8 text-center hover:opacity-100 font-semibold`}
                      key={jndex}
                      href={subTab.href}
                    >
                      {subTab.text}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <BaseToggle />
    </div>
  );
}
