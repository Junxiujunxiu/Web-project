import { useEffect, useState } from "react";
import { getEvents } from "../../../apis/events.api";
import { useNavigate, createSearchParams } from "react-router-dom";

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

const EventList: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      const eventsRes = await getEvents({}, 0, 10);
      setEventList(eventsRes.data.data);
      console.log(eventsRes.data.data);
    };
    get().catch(console.error);
    return () => setEventList([]);
  }, []);

  return (
    <div id="event_list_wrap" className="w-full px-12 py-6">
      <h1 className=" font-black text-3xl text-subRed text-center py-6">
        往期活动
      </h1>
      <div
        id="event_list_inner_wrap"
        className="w-[1200px] mx-auto grid grid-flow-row auto-rows-max border-b border-subRed"
      >
        {eventList.map((item, index) => {
          return (
            <div
              className="w-full h-[175px] border-t border-subRed flex items-center hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300"
              onClick={() => {
                const searchParams = { eventName: item.event_name };
                navigate({
                  pathname: "detail",
                  search: `?${createSearchParams(searchParams)}`,
                });
              }}
            >
              <div className="w-[200px] h-[150px] my-auto mx-6">
                <img
                  src={item.event_img_url}
                  alt=""
                  className="w-[200px] h-[150px] object-cover"
                />
              </div>
              <div className="relative w-[calc(100%-200px)] pr-[200px]">
                <h2 className="font-black text-2xl">{item.event_name}</h2>
                <h3 className="font-bold text-base text-gray-600 line-clamp-1 mt-2">
                  {item.event_sub}
                </h3>
                <span className="absolute top-[calc(50%-12px)] right-2 font-black text-xl text-gray-400">
                  {processTime(item.event_time)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
