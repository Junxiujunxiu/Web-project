import React from "react";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import HomePageSection from "./Components/HomeSection";

const HomePage: React.FC = () => {
  return (
    <div className="font-home" id="home_page">
      <div className="home_header">
        <GlobalHeader currentPage="home" />
      </div>

      <div className="home_body">
        <HomePageSection sectionId={"visual_wrap"} />
        <HomePageSection sectionId={"home_intro"} />
        <HomePageSection sectionId={"home_quick_nav"} />
        <HomePageSection sectionId={"home_on_going_event"} />
        <HomePageSection sectionId={"home_main_events"} />
      </div>
      <div className="home_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default HomePage;
