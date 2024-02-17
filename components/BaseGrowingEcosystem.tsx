import React from "react";

export default function BaseGrowingEcosystem() {
  return (
    <div className="flex flex-col relative mt-16">
      <span className="text-md font-light opacity-75 uppercase tracking-widest mb-4 w-full text-center">
        Our Ecosystem
      </span>

      <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-32 rounded-t-2xl">
        {/* <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"> */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-dark-background to-[#776fff] opacity-20"></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-dark-background to-[#776fff] opacity-20"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Innovation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              An approach to innovation that is both disruptive and sustainable,
              aiming to create a better future for all.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-light leading-7 sm:grid-cols-2 md:flex lg:gap-x-10 opacity-50">
              <a href="#">
                Trust Token <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Harmony Bridge <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="/mint">
                Aura Forge <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 font-thin opacity-75">
                  Validator nodes
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight">
                  300+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 font-thin opacity-75">
                  Transactions per 7 seconds
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight">
                  80K+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 font-thin opacity-75">
                  Designed for the universe.
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight">
                  Layer 0
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
