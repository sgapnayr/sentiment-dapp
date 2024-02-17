export default function BaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // TEMPALTE ________________________________________________ //
  return (
    <>
      <div className="flex w-full relative justify-start items-center px-6 flex-col no-scrollbars">
        <div className="w-full max-w-[1440px] overflow-scroll flex justify-start items-center flex-col no-scrollbars">
          {children}
        </div>
      </div>
    </>
  );
}
