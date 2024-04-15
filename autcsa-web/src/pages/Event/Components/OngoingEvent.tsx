import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getEvents } from "../../../apis/events.api";
import locationpng from "../../../assets/location.png";
import timepng from "../../../assets/time.png";

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

const OngoingEvent: React.FC = () => {
  const [ongoingEvent, setOngoingEvent] = useState<Event>({
    event_name: "",
    event_sub: "",
    event_detail: "",
    event_time: "",
    event_img_url: "",
    event_location: "",
    on_going: true,
  });
  const navigate = useNavigate();
  const [ari, setAri] = useState(false);

  useEffect(() => {
    const get = async () => {
      const eventsRes = await getEvents({ onGoing: true }, 0, 10);
      if (eventsRes.data.data.length > 0) {
        setAri(true);
      }
      setOngoingEvent(eventsRes.data.data[0]);
      console.log(eventsRes.data.data);
    };
    get().catch(console.error);
    return () => {
      setOngoingEvent({
        event_name: "",
        event_sub: "",
        event_detail: "",
        event_time: "",
        event_img_url: "",
        event_location: "",
        on_going: true,
      });
      setAri(false);
    };
  }, []);

  return (
    <div
      id="ongoing_event_wrap"
      className=" w-full h-[600px] bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/news/news_visual_top.jpg)]
         bg-bottom box-border relative bg-no-repeat bg-cover"
    >
      <h1 className=" font-black text-6xl text-slate-100 text-center pt-16">
        活动 Events
      </h1>

      {ari ? (
        <div
          id="ongoing_event"
          className="w-[1000px] h-[400px] bg-slate-100 absolute left-[calc(50%-500px)] bottom-[30px] shadow-2xl
           hover:brightness-90 cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 flex"
          onClick={() => {
            const searchParams = { eventName: ongoingEvent!.event_name };
            navigate({
              pathname: "detail",
              search: `?${createSearchParams(searchParams)}`,
            });
          }}
        >
          <div className="w-[500px] h-[400px] ">
            <img
              src={ongoingEvent!.event_img_url}
              alt="Ongoing Event"
              className="object-cover w-[500px] h-[400px]"
            />
          </div>
          <div className="w-[500px] relative">
            <div className="px-6 py-6">
              <h3 className="font-black text-3xl h-[40px]">
                {ongoingEvent!.event_name}
              </h3>
              <h3 className="font-extrabold text-lg text-gray-500 pl-3 pr-6 line-clamp-6">
                {ongoingEvent!.event_sub}
              </h3>
              <div className="absolute bottom-5">
                <div className="flex ml-3 mb-6">
                  <img
                    className="w-[32px] h-[32px] mr-8"
                    src={timepng}
                    alt=""
                  ></img>
                  <span className="font-extrabold text-xl">
                    {processTime(ongoingEvent!.event_time)}
                  </span>
                </div>
                <div className="flex ml-3 mb-6">
                  <img
                    className="w-[32px] h-[32px] mr-8"
                    src={locationpng}
                    alt=""
                  ></img>
                  <span className="font-extrabold text-xl">
                    {ongoingEvent!.event_location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[1000px] h-[400px] absolute left-[calc(50%-500px)] bottom-[30px]">
          <h1 className=" font-black text-6xl text-slate-100 text-center pt-32">
            现在无事发生，一切风平浪静。
          </h1>
        </div>
      )}
    </div>
  );
};

export default OngoingEvent;
