import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {
  return (
    <>
      <h1>home</h1>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
};

export default Home;
