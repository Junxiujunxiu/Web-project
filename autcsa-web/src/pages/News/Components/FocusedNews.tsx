import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getNews } from "../../../apis/news.api";
import Carousel from "../../../components/Carousel";

type News = {
  news_name: string;
  news_sub?: string;
  news_detail?: string;
  news_time: string;
  news_img_url: string;
  on_going: boolean;
  important: boolean;
};

const processTime = (time: string) => {
  return time.split("T")[0];
};

const FocusedNews: React.FC = () => {
  const [ongoingNews, setOngoingNews] = useState<News[]>([]);
  const navigate = useNavigate();
  const [ari, setAri] = useState(false);

  useEffect(() => {
    const get = async () => {
      const newsRes = await getNews({ onGoing: true }, 0, 10);
      if (newsRes.data.data.length > 0) {
        setAri(true);
      }
      setOngoingNews(newsRes.data.data);
    };
    get()
      .then(() => {
        console.log(ongoingNews);
      })
      .catch(console.error);
    return () => {
      setOngoingNews([]);
      setAri(false);
    };
  }, []);

  return (
    <div
      id="focused_news_wrap"
      className=" w-full h-[600px] bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/news/news_visual_top.jpg)]
         bg-bottom box-border relative bg-no-repeat bg-cover"
    >
      <h1 className=" font-black text-6xl text-slate-100 text-center pt-16">
        资讯 News
      </h1>

      {ari ? (
        <div
          id="focused_news"
          className="w-[1000px] h-[400px] absolute left-[calc(50%-500px)] bottom-[30px] shadow-2xl
           hover:brightness-90 cursor-pointer transition ease-in-out duration-300 flex bg-slate-100"
        >
          <Carousel
            auto={true}
            autoSlideInterval={5000}
            carouselContent={ongoingNews}
          >
            {ongoingNews.map((news) => {
              return (
                <div
                  className="flex"
                  onClick={() => {
                    const searchParams = { newsName: news.news_name };
                    navigate({
                      pathname: "/newsPage/detail",
                      search: `?${createSearchParams(searchParams)}`,
                    });
                  }}
                >
                  <div className="w-[500px] h-[400px] ">
                    <img
                      src={news.news_img_url}
                      alt="Ongoing news"
                      className="object-cover w-[500px] h-[400px]"
                    />
                  </div>
                  <div className="w-[500px] relative">
                    <div className="px-6 py-6">
                      <h3 className="font-black text-3xl h-[40px]">
                        {news.news_name}
                      </h3>
                      <h3 className="font-extrabold text-lg text-gray-500 pl-3 pr-6 line-clamp-6">
                        {news.news_sub}
                      </h3>
                      <div className="absolute bottom-5">
                        <div className="flex ml-3 mb-6">
                          <span className="font-extrabold text-xl">
                            {processTime(news.news_time)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="w-[1000px] h-[400px] absolute left-[calc(50%-500px)] bottom-[30px]">
          <h1 className=" font-black text-6xl text-slate-100 text-center pt-32">
            有时候，没有新闻才是最好的新闻。
          </h1>
        </div>
      )}
    </div>
  );
};

export default FocusedNews;
