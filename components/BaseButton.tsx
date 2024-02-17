import React from "react";

export default function BaseButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-[440px] py-4 rounded-full text-center text-2xl shadow-xl cursor-pointer hover:opacity-90 active:opacity-75 ${className}`}
    >
      {children}
    </div>
  );
}
