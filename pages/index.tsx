import FeaturesList from "components/homePageComponents/FeaturesList";
import Layout from "components/Layout";
import HomePageIntro from "components/homePageComponents/HomePageIntro";
import FeaturesDisplay from "components/homePageComponents/FeaturesDisplay";
import HomePageBottomBanner from "components/homePageComponents/HomePageBottomBanner";

const quote = `“Sometimes, your pet picks you.”`
const author = `-Julie Wenzel.`
const buttonSpan = `Wanna meet your future pet ?`
const nextRoute = '/rescue'
const BannerBg = '/assets/images/background-8.jpg'

const Home: React.FC = () => {

  return (
    <Layout>
      <HomePageIntro/>
      <div
        className="flex flex-col items-center justify-center w-full m-0 bg-fixed bg-center bg-no-repeat bg-cover min-h-[40rem] p-0"
        style={{ backgroundImage: `url('/assets/images/background-2.jpg')` }}
      >
        <span className="font-extrabold text-center text-gray-100 text-7xl lg:text-9xl opacity-[0.8]">
          MORE CHAPTERS
          <br />
          MORE BOOKS
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-2 m-0 bg-[#9C3E00] w-full min-h-[35rem]">
        <span className="mb-6 text-center w-4/5 text-4xl font-bold text-gray-100 opacity-[0.9]">
          Here are some of our rescue stories...
        </span>
        <FeaturesList />
      </div>
      <FeaturesDisplay/>
      <HomePageBottomBanner
        quote={quote}
        author={author}
        buttonSpan={buttonSpan}
        nextRoute={nextRoute}
        BannerBg={BannerBg}
      />
    </Layout>
  );
};

export default Home;
