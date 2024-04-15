import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvents } from "../../apis/events.api";

type Event = {
  event_name: string;
  event_sub?: string;
  event_detail?: string;
  event_time: string;
  event_img_url: string;
  event_location: string;
  on_going: boolean;
};

const processTime = (time: string) => {
  return time.split("T")[0] + " " + time.split("T")[1];
};

const EventDetailPage: React.FC = () => {
  const [event, setEvent] = useState<Event>({
    event_name: "",
    event_sub: "",
    event_detail: "",
    event_time: "",
    event_img_url: "",
    event_location: "",
    on_going: true,
  });
  const [eventBriefList, setEventBriefList] = useState<Event[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("eventName");

  useEffect(() => {
    const get = async () => {
      const eventsRes = await getEvents({ eventName: name }, 0, 10);
      if (eventsRes.data.data.length > 0) {
        setEvent(eventsRes.data.data[0]);
      }
      const eventBriefRes = await getEvents({}, 0, 5);
      setEventBriefList(eventBriefRes.data.data);
    };
    get().catch(console.error);
  }, []);

  return (
    <div className="font-home" id="eventDetail_page">
      <div className="eventDetail_header">
        <GlobalHeader currentPage="eventDetail" />
      </div>

      <div className="eventDetail_body bg-gray-100">
        <div
          className="w-full px-12 py-6 bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/news/news_detail_visual_top.png)]
         bg-bottom box-border relative bg-cover h-[323px]"
        >
          <h1 className=" font-black text-6xl text-center pt-16">
            活动 Events
          </h1>
        </div>
        <div className="w-[1200px] mx-auto mt-20 px-10  bg-white shadow-md -translate-y-[200px] relative">
          <div className="border-r border-gray-300 w-[860px] py-6">
            <div className="title_area border-b border-subRed w-[800px] ">
              <span className="font-semibold text-gray-100 align-middle h-7 px-4 py-1 box-border bg-subRed">
                Events
              </span>
              <span className="font-semibold text-gray-700 pl-2">
                {processTime(event.event_time)}
              </span>
              <p className="font-black text-3xl pt-2">{event.event_name}</p>
            </div>
            <div className="event_content_area w-[800px]">
              <div className="flex w-full justify-center my-4">
                <img src="https://s1.pearlcdn.com/NAEU/Upload/News/c9f465a180020230315055245854.jpg"></img>
              </div>
              <div className="my-6">
                <button className="border-subRed border rounded-lg w-[390px] h-[50px] font-black mr-[10px] text-subRed text-xl hover:brightness-90 transition ease-in-out duration-300">
                  分享
                </button>
                <button className="border-white border rounded-lg w-[390px] h-[50px] font-bold ml-[10px] text-white text-xl bg-subRed hover:brightness-90 transition ease-in-out duration-300">
                  报名
                </button>
              </div>
              <div>
                <p className="font-semibold">{event.event_detail}</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[calc(100%-300px)] top-0 w-[300px]">
            <h3 className="font-semibold px-5 h-12 items-center flex border-b border-gray-300">
              近期活动
            </h3>
            <ul>
              {eventBriefList.map((item, index) => {
                return (
                  <li className="border-b border-gray-300 hover:bg-gray-200 transition ease-in-out duration-300">
                    <a
                      href={
                        "http://localhost:3000/eventsPage/detail?eventName=" +
                        item.event_name
                      }
                    >
                      <div className="p-5">
                        <p className="font-semibold">{item.event_name}</p>
                        <p className="font-semibold text-gray-400">
                          {processTime(item.event_time)}
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
      <div className="eventDetail_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default EventDetailPage;
