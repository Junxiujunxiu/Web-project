import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getNews } from "../../../apis/news.api";

/* eslint-disable array-callback-return */
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

const NewsList: React.FC = () => {
  const [newsList, setnewsList] = useState<News[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      const newssRes = await getNews({}, 0, 10);
      setnewsList(newssRes.data.data);
      console.log(newssRes.data.data);
    };
    get().catch(console.error);
    return () => setnewsList([]);
  }, []);

  return (
    <div id="news_list_wrap" className="w-full px-12 py-6">
      <h1 className=" font-black text-3xl text-subRed text-center py-6">
        全部资讯
      </h1>
      <div
        id="news_list_inner_wrap"
        className="w-[1200px] mx-auto grid grid-flow-row auto-rows-max border-b border-subRed"
      >
        {newsList.map((item, index) => {
          if (item.important) {
            return (
              <div
                className="w-full h-[175px] border-t border-subRed flex items-center hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300"
                onClick={() => {
                  const searchParams = { newsName: item.news_name };
                  navigate({
                    pathname: "detail",
                    search: `?${createSearchParams(searchParams)}`,
                  });
                }}
              >
                <div className="w-[200px] h-[150px] my-auto mx-6">
                  <img
                    src={item.news_img_url}
                    alt=""
                    className="w-[200px] h-[150px] object-cover"
                  />
                </div>
                <div className="relative w-[calc(100%-200px)] pr-[200px]">
                  <h2 className="font-black text-2xl">
                    <span className="font-black text-2xl text-mainRed">
                      {" [重要] "}
                    </span>
                    {item.news_name}
                  </h2>
                  <h3 className="font-bold text-base text-gray-600 line-clamp-1 mt-2">
                    {item.news_sub}
                  </h3>
                  <span className="absolute top-[calc(50%-12px)] right-2 font-black text-xl text-gray-400">
                    {processTime(item.news_time)}
                  </span>
                </div>
              </div>
            );
          }
        })}
        {newsList.map((item, index) => {
          if (!item.important) {
            return (
              <div
                className="w-full h-[175px] border-t border-subRed flex items-center hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300"
                onClick={() => {
                  const searchParams = { newsName: item.news_name };
                  navigate({
                    pathname: "detail",
                    search: `?${createSearchParams(searchParams)}`,
                  });
                }}
              >
                <div className="w-[200px] h-[150px] my-auto mx-6">
                  <img
                    src={item.news_img_url}
                    alt=""
                    className="w-[200px] h-[150px] object-cover"
                  />
                </div>
                <div className="relative w-[calc(100%-200px)] pr-[200px]">
                  <h2 className="font-black text-2xl">{item.news_name}</h2>
                  <h3 className="font-bold text-base text-gray-600 line-clamp-1 mt-2">
                    {item.news_sub}
                  </h3>
                  <span className="absolute top-[calc(50%-12px)] right-2 font-black text-xl text-gray-400">
                    {processTime(item.news_time)}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewsList;
