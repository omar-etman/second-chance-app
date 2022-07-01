import { useRouter } from "next/router";

type props = {
  quote: string;
  author: string;
  buttonSpan: string;
  nextRoute: string;
  BannerBg: string;
};
const HomePageBottomBanner: React.FC<props> = ({
  quote,
  author,
  buttonSpan,
  nextRoute,
  BannerBg,
}) => {
  const router = useRouter();
  const routeToPage = () => {
    router.push(nextRoute);
  };
  return (
    <div
      className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover h-[45rem] md:h-[50rem] lg:h-[40rem] p-0"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <blockquote className="w-4/5 font-light text-center text-gray-100 text-[3rem] lg:text-9xl">
        {quote}
      </blockquote>
      <span className="text-2xl font-light text-center text-white lg:text-3xl mt-9">
        {author}
      </span>
      <button
        onClick={routeToPage}
        className="p-6 transition-all bg-[#00939C] rounded-2xl duration:400 hover:bg-[#9C3E00] flex justify-center items-center my-8 max-w-[15rem] lg:max-w-[25rem]"
      >
        <span className="text-2xl text-gray-100">{buttonSpan}</span>
      </button>
    </div>
  );
};

export default HomePageBottomBanner;
