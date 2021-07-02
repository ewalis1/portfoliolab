import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
};

export default Home;
