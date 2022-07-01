import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type props = {
  quote: string;
  author: string;
  buttonSpan: string;
  nextRoute: string;
  BannerBg: string;
};
const RescuePageBottomBanner: React.FC<props> = ({
  quote,
  author,
  buttonSpan,
  BannerBg,
  nextRoute
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[45rem] md:h-[50rem] lg:h-[40rem] p-0"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <blockquote className="w-4/5 font-light text-center text-gray-100 text-[2rem] lg:text-6xl">
        {quote}
      </blockquote>
      <span className="text-3xl text-center text-white mt-9 mt-font-light">
        {author}
      </span>
      <button className="p-6 transition-all bg-[#9C3E00] rounded-2xl duration:400 hover:bg-[#00939C] flex justify-center items-center my-8 max-w-[15rem] lg:max-w-[25rem]">
        <Link href={nextRoute}>
          <a className="text-2xl text-gray-100">{buttonSpan}</a>
        </Link>
      </button>
    </div>
  );
};

export default RescuePageBottomBanner;
