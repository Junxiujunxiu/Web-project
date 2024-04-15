import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNews } from "../../apis/news.api";

type news = {
  news_name: string;
  news_sub?: string;
  news_detail?: string;
  news_time: string;
  news_img_url: string;
  news_location: string;
  on_going: boolean;
};

const processTime = (time: string) => {
  return time.split("T")[0] + " " + time.split("T")[1];
};

const NewsDetailPage: React.FC = () => {
  const [news, setNews] = useState<news>({
    news_name: "",
    news_sub: "",
    news_detail: "",
    news_time: "",
    news_img_url: "",
    news_location: "",
    on_going: true,
  });
  const [newsBriefList, setnewsBriefList] = useState<news[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("newsName");

  useEffect(() => {
    const get = async () => {
      const newsRes = await getNews({ newsName: name }, 0, 10);
      if (newsRes.data.data.length > 0) {
        setNews(newsRes.data.data[0]);
      }
      const newsBriefRes = await getNews({}, 0, 5);
      setnewsBriefList(newsBriefRes.data.data);
    };
    get().catch(console.error);
  }, []);

  return (
    <div className="font-home" id="newsDetail_page">
      <div className="newsDetail_header">
        <GlobalHeader currentPage="newsDetail" />
      </div>

      <div className="newsDetail_body bg-gray-100">
        <div
          className="w-full px-12 py-6 bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/news/news_detail_visual_top.png)]
         bg-bottom box-border relative bg-cover h-[323px]"
        >
          <h1 className=" font-black text-6xl text-center pt-16">资讯 News</h1>
        </div>
        <div className="w-[1200px] mx-auto mt-20 px-10  bg-white shadow-md -translate-y-[200px] relative">
          <div className="border-r border-gray-300 w-[860px] py-6">
            <div className="title_area border-b border-subRed w-[800px] ">
              <span className="font-semibold text-gray-100 align-middle h-7 px-4 py-1 box-border bg-subRed">
                News
              </span>
              <span className="font-semibold text-gray-700 pl-2">
                {processTime(news.news_time)}
              </span>
              <p className="font-black text-3xl pt-2">{news.news_name}</p>
            </div>
            <div className="news_content_area w-[800px]">
              <div className="flex w-full justify-center my-4">
                <img src="https://s1.pearlcdn.com/NAEU/Upload/News/c9f465a180020230315055245854.jpg"></img>
              </div>
              <div>
                <p className="font-semibold">{news.news_detail}</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[calc(100%-300px)] top-0 w-[300px]">
            <h3 className="font-semibold px-5 h-12 items-center flex border-b border-gray-300">
              近期资讯
            </h3>
            <ul>
              {newsBriefList.map((item, index) => {
                return (
                  <li className="border-b border-gray-300 hover:bg-gray-200 transition ease-in-out duration-300">
                    <a
                      href={
                        "http://localhost:3000/newsPage/detail?newsName=" +
                        item.news_name
                      }
                    >
                      <div className="p-5">
                        <p className="font-semibold">{item.news_name}</p>
                        <p className="font-semibold text-gray-400">
                          {processTime(item.news_time)}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="newsDetail_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default NewsDetailPage;
