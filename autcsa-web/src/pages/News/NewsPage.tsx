import React from "react";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import NewsList from "./Components/NewsList";
import FocusedNews from "./Components/FocusedNews";

const NewsPage: React.FC = () => {
  return (
    <div className="font-home" id="news_page">
      <div className="news_header">
        <GlobalHeader currentPage="news" />
      </div>

      <div className="news_body">
        <FocusedNews />
        <NewsList />
      </div>
      <div className="news_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default NewsPage;
