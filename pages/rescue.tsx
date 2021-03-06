import AnimalsList from "components/rescuePageComponents/AnimalsList";
import Layout from "components/generalAppComponents/Layout";
import Link from "next/link";
import FadeInTrans2 from "components/transitionComponents/FadeInTrans2";
import FadeInTrans1 from "components/transitionComponents/FadeInTrans1";
import FadeInTrans3 from "components/transitionComponents/FadeInTrans3";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import RescuePageBottomBanner from "components/rescuePageComponents/RescuePageBottomBanner";

const quote = `“Love the animals, God has given them the rudiments of thought and joy untroubled.”`
const author = `-Fyodor Dostoevsky.`
const buttonSpan = `Wanna ask something ?`
const nextRoute = '/help'
const BannerBg = '/assets/images/rescue-background-2.jpg'

const Rescue: React.FC = () => {
  const user = useUser();

  const noUserRender = () => {
    if (user) {
      return null;
    } else if (!user || user === null || user === undefined) {
      return (
        <p className="w-4/5 text-2xl font-light text-center text-white mt-9">
          <FadeInTrans3>
            note that you can see our currently accomodated friends but to be
            able to take action we need you to be
            <Link href="/login">
              <a className="mx-2 text-[#00939C] text-[2.2rem] hover:border-b transition-all duration-800">
                Signed in
              </a>
            </Link>
            to your account or to
            <Link href="/signup">
              <a className="mx-2 text-[2.2rem] text-[#9C3E00] hover:border-b transition-all duration-800">
                Sign up
              </a>
            </Link>
            for one, would be a pleasure to welcome you onboard.
          </FadeInTrans3>
        </p>
      );
    }
  };
  return (
    <Layout>
      <>
        <div
          className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover min-h-screen lg:min-h-[45rem] p-0"
          style={{
            backgroundImage: `url('/assets/images/rescue-background-1.jpg')`,
          }}
        >
          <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-200 opacity-[0.9] ">
            <FadeInTrans2>We are resuers for life and we love it</FadeInTrans2>
          </span>
          <p className="w-4/5 text-2xl font-light text-center text-gray-200">
            <FadeInTrans1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              consectetur at nemo saepe! Ullam reprehenderit, voluptatibus nisi
              quae voluptas quasi nihil architecto qui rem voluptates dolorum
              quas neque animi, iusto maxime iure itaque ab tempora eius quia
              nesciunt porro repellendus!
            </FadeInTrans1>
          </p>
          {noUserRender()}
        </div>
        <div className="flex flex-col items-center justify-center pt-8 m-0 bg-[#00939C] w-full min-h-[35rem]">
          <h1 className="w-4/5 mb-6 text-5xl font-light text-center text-gray-100">
            Meet the Second Chance household
          </h1>
          <AnimalsList />
        </div>
        {/* <div
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
            <Link href="/help">
              <a className="text-2xl text-gray-100">Wanna ask something ?</a>
            </Link>
          </button>
        </div> */}
        {/* <SingleRouteBottomBanner
          quote={quote}
          author={author}
          buttonSpan={buttonSpan}
          nextRoute={nextRoute}
          BannerBg={BannerBg}
        /> */}
        <RescuePageBottomBanner
          quote={quote}
          author={author}
          buttonSpan={buttonSpan}
          nextRoute={nextRoute}
          BannerBg={BannerBg}
        />
      </>
    </Layout>
  );
};

export default Rescue;
