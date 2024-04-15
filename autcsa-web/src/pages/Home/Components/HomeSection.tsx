import React, { useEffect } from "react";
import csaLogo from "../../../assets/csaLogo.png";
import { ScrollandLoad } from "../../../hooks/ScrollandLoad";
import event from "../../../assets/home_event.png";
import news from "../../../assets/home_news.png";
import staff from "../../../assets/home_staff.png";
import member from "../../../assets/home_member.png";

const HomePageSection: React.FC<{ sectionId: String }> = ({ sectionId }) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const scrollableImgs = document.getElementsByClassName("animatedScroll");

  useEffect(() => {
    var windowHeight = window.innerHeight;
    const animateScroll = (event: any) => {
      for (var scrollableImg of scrollableImgs) {
        var scrollableImgTop = scrollableImg.getBoundingClientRect().top;
        if (scrollableImgTop < windowHeight) {
          (scrollableImg as HTMLElement).style.transform =
            "translateY(-" +
            (scrollableImg.clientHeight - scrollableImgTop) / 86 +
            "%)";
        }
      }
    };
    window.addEventListener("scroll", animateScroll);

    return () => {
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);

  const targets = document.getElementsByClassName("animatedSection");
  ScrollandLoad(options, targets);

  function renderSection() {
    switch (sectionId) {
      case "visual_wrap":
        return (
          <section
            id="visual_wrap"
            className="bg-[url(https://s1.pearlcdn.com/NAEU/Upload/BANNER/MAIN/bannerImage_20221122075836.jpg)] h-[900px] w-full box-border relative bg-center bg-no-repeat bg-cover"
          >
            <div
              id="video_wrap"
              className="h-full w-full absolute z-5 top-0 left-0"
            >
              <video
                className="min-w-full min-h-full absolute z-5 object-cover"
                muted
                preload="none"
                loop
                autoPlay
              >
                <source
                  type="video/webm"
                  src="https://s1.pearlcdn.com/global_static/video/bdo_maeguwoosa_looping.webm"
                  onError={() => {
                    document.getElementById("video_wrap")!.style.display =
                      "none";
                  }}
                />
                <source
                  type="video/mp4"
                  src="https://s1.pearlcdn.com/global_static/video/bdo_maeguwoosa_looping.mp4"
                  onError={() => {
                    document.getElementById("video_wrap")!.style.display =
                      "none";
                  }}
                />
              </video>
            </div>
            <div
              id="text_main_visual"
              className="flex absolute justify-center items-end flex-wrap w-full z-10 bottom-8"
            >
              <div
                id="text_inner"
                className="border-box text-center flex flex-col titleShadow"
              >
                <h2 className="text-8xl font-black text-white">
                  Auckland University of Technology
                </h2>
                <h2 className="text-8xl font-black text-mainRed">
                  Chinese Student Association
                </h2>
              </div>
            </div>
          </section>
        );
      case "home_intro":
        return (
          <section
            id="home_intro"
            className="flex min-[1401px]:mx-36 min-[1236px]:mx-20 max-[1235px]:mx-12 my-12 justify-center items-center h-[450px] relative"
          >
            <div className="flex absolute top-1/2 animatedSection fadeInAni">
              <img src={csaLogo} alt="" className=" h-96" />
              <div className="flex flex-col ml-24 mr-12 justify-center">
                <h2 className="font-black min-[1419px]:text-4xl max-[1418px]:text-3xl">
                  奥克兰理工大学华人学生会
                </h2>
                <h2 className="font-black min-[1419px]:text-4xl max-[1418px]:text-3xl">
                  AUT Chinese Student Association
                </h2>
                <br></br>
                <br></br>
                <p className="font-bold text-lg line-clamp-5">
                  简称AUTCSA，成立于2003年，目前是AUT学生总会（AUTSA）最大且最有发展潜力的非盈利学生俱乐部。
                  作为一个年轻、充满活力的团队，我们每年都会举办10余次覆盖了从娱乐生活，到学术职业的各项活动，致力于为同学们创造各种休闲、社交及社会实践的机会，帮助大家度过愉快充实的业余生活。
                </p>
                {/* <br></br>
                <p className="font-bold min-[1320px]:text-lg min-[1236px]:text-base">
                  作为一个年轻、充满活力的团队，我们每年都会举办10余次覆盖了从娱乐生活，到学术职业的各项活动，致力于为同学们创造各种休闲、社交及社会实践的机会，帮助大家度过愉快充实的业余生活。
                </p> */}
              </div>
            </div>
          </section>
        );
      case "home_quick_nav":
        return (
          <section
            id="home_quick_nav"
            className="flex ml-auto mr-auto my-12 px-12 justify-center items-center h-[450px] relative"
          >
            <div className="w-full flex justify-center items-center py-4 mb-4 flex-wrap absolute top-1/2 animatedSection fadeInAni">
              <div className=" justify-center items-center mx-6 p-6">
                <a
                  className=" bg-gray-300 w-52 h-52 flex justify-center items-center rounded-full mx-2"
                  href=""
                >
                  <img className="w-32 h-32" src={event} alt="" />
                </a>
                <button className="text-center font-black text-4xl border-none w-full py-4">
                  我们的活动
                </button>
              </div>
              <div className="justify-center items-center mx-6 p-6">
                <a
                  className=" bg-gray-300 w-52 h-52 flex justify-center items-center rounded-full mx-2"
                  href=""
                >
                  <img className="w-32 h-32" src={news} alt="" />
                </a>
                <button className="text-center font-black text-4xl border-none w-full py-4">
                  最新资讯
                </button>
              </div>
              <div className="justify-center items-center mx-12 p-6">
                <a
                  className=" bg-gray-300 w-52 h-52 flex justify-center items-center rounded-full mx-2"
                  href=""
                >
                  <img className="w-32 h-32" src={staff} alt="" />
                </a>
                <button className="text-center font-black text-4xl border-none w-full py-4">
                  理事构成
                </button>
              </div>
              <div className="relative justify-center items-center mx-12 p-6">
                <a
                  className=" bg-gray-300 w-52 h-52 flex justify-center items-center rounded-full mx-2"
                  href=""
                >
                  <img className="w-32 h-32" src={member} alt="" />
                </a>
                <button className="text-center font-black text-4xl border-none w-full py-4">
                  会&nbsp;&nbsp;员
                </button>
              </div>
            </div>
          </section>
        );
      case "home_on_going_event":
        return (
          <section
            id="home_on_going_event"
            className="h-[760px] w-full box-border relative overflow-hidden cursor-pointer"
            onMouseEnter={() => {
              document
                .getElementById("text_on_going_event")!
                .classList.add("titleShadow");
              document
                .getElementById("text_on_going_event")!
                .classList.add("text-mainRed");
            }}
            onMouseLeave={() => {
              document
                .getElementById("text_on_going_event")!
                .classList.remove("titleShadow");
              document
                .getElementById("text_on_going_event")!
                .classList.remove("text-mainRed");
            }}
          >
            <div className="animatedScroll bg-[url(https://s1.pearlcdn.com/NAEU/Upload/BANNER/MAIN/bannerImage_20221122075836.jpg)] bg-center bg-no-repeat bg-cover absolute z-10 w-full h-[130%]"></div>
            <h2
              id="text_on_going_event"
              className="text-4xl font-black absolute z-10 left-8 bottom-8"
            >
              正在进行：这是什么？失忆喷雾？喷一下！这是什么？
            </h2>
          </section>
        );
      case "home_main_events":
        return (
          <section
            id="home_main_events"
            className="flex py-36 justify-center items-center bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_feature_bg.jpg)] bg-top bg-no-repeat bg-cover relative overflow-hidden"
          >
            <div className="mx-auto px-[30px] max-w-[1400px] box-border main_events_wrap">
              <div className="pb-[250px] animatedSection floatUpAni">
                <h2 className="text-5xl font-black top-6 tracking-widest text-center pb-10 ">
                  参加并探索我们的主要活动
                </h2>
                <h3
                  className="text-xl font-bold top-6 text-center"
                  style={{ animationDelay: "0.15s" }}
                >
                  我语文不好，但是我数学不好。 我数学不好，但是我英语不好。
                  <br></br>
                  我英语不好，但是我物理不好。 我物理不好，但是我化学不好。
                  <br></br>
                  我化学不好，但是我历史不好。 我历史不好，但是我政治不好。
                  <br></br>
                  我政治不好，但是我地理不好。 我地理不好，但是我生物不好。
                  <br></br>
                </h3>
              </div>
              <div className="main_events_timeline text-gray-50">
                <section className="main_event1 flex relative justify-between items-center py-24">
                  <div className="w-[calc(50%-40px)] animatedSection floatLeftAni">
                    <h3 className="text-5xl font-black text-left tracking-wide">
                      万圣节
                    </h3>
                    <h4 className="text-xl font-bold text-left">
                    在那个万圣节之夜，我们迎来了一场难忘的狂欢派对！当时，万圣节的魔法弥漫在空气中，将我们带入了一个神秘又充满欢乐的世界。当时的场景如梦似幻，炫目的灯光照亮了整个晚会场地。幽灵、巫婆、各种奇幻生物们身着精心打扮的服装，聚集在一起，带来了欢声笑语和无尽的惊喜。无论是勇敢的探险家、狡猾的小恶魔，还是可爱的小精灵，当时的万圣节活动带给我们无尽的欢乐和惊喜。我们一起投入那个神秘之夜，创造了属于我们的难忘回忆。当午夜的钟声敲响时，我们感受到了传说中的魔法降临在我们身上。那个已经过去的万圣节之夜成为了我们心中一段珍贵的回忆。让我们怀念那个充满魔力的节日，感慨万圣节的狂欢吧！
                    </h4>
                  </div>
                  <div className="absolute left-[calc(50%-6px)] bg-mainRed w-3 h-3 rounded-full"></div>
                  <div className="w-[calc(50%-40px)] animatedSection floatRightAni">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1pxbIm5WTrChkmg0pi2SOPBMAaCFcVEFN"
                      alt=""
                      className="rounded-md"
                    ></img>
                  </div>
                </section>
                <section className="main_event2 flex relative justify-between items-center py-24">
                  <div className="w-[calc(50%-40px)] animatedSection floatLeftAni">
                    <img
                      src="https://drive.google.com/uc?export=view&id=18tJTC2mncVTLwaHdtYBKJyxZ3fG2bacv"
                      alt=""
                      className="rounded-md"
                    ></img>
                  </div>
                  <div className="absolute left-[calc(50%-6px)] bg-mainRed w-3 h-3 rounded-full"></div>
                  <div className="w-[calc(50%-40px)] animatedSection floatRightAni">
                    <h3 className="text-5xl font-black text-left tracking-wide">
                      桌游之夜
                    </h3>
                    <h4 className="text-xl font-bold text-left">
                    在过去的桌游之夜，我们聚集在一起度过了一次充满欢乐和竞争的游戏盛宴。那个晚上，桌子上摆满了各种精心设计的游戏板和卡牌，以及色彩斑斓的骰子和游戏道具。我们挑战了各种策略游戏，投入到充满智慧和决策的战斗中。从古老的棋盘游戏到复杂的角色扮演游戏，每个人都发挥出最佳的游戏技巧，争夺胜利的荣耀。桌游之夜充满了欢声笑语和友谊的交流。我们互相配合，共同解决难题，也互相竞争，试图在游戏中取得胜利。每个人都充满了激情和热情，为了胜利而全力以赴。这个特殊的夜晚也成为了我们之间的纽带。我们分享了游戏策略，互相帮助解决难题，还有时不时的小插曲和笑料，使整个晚上更加欢乐和难忘。
                    </h4>
                  </div>
                </section>
                <section className="main_event3 flex relative justify-between items-center py-24">
                  <div className="w-[calc(50%-40px)] animatedSection floatLeftAni">
                    <h3 className="text-5xl font-black text-left tracking-wide">
                      烧烤
                    </h3>
                    <h4 className="text-xl font-bold text-left">
                    在那个过去的烧烤日，我们迎来了一次美食和欢乐的盛宴。当天阳光明媚，我们聚集在户外，烤炉里燃起了欢快的火焰。烧烤架上摆满了各种美味的食材。肉类、蔬菜和海鲜在炙热的炭火上发出诱人的香气，让我们的味蕾充满期待。我们一起参与了烹饪的过程，翻转着牛排、烤制着香肠，还有把蔬菜串成彩虹色的烤串。大家忙碌而兴奋地烹饪，分享着烧烤的技巧和秘诀。当食物逐渐熟透，我们围坐在一起，分享着美食和笑声。啤酒和果汁在杯子里流淌，轻快的音乐为整个氛围增添了一抹欢乐。我们品尝了各种口味的烧烤美食，从嫩滑多汁的烤肉到烤香的蔬菜，每一口都带来了满足和享受。这个特别的烧烤日也是我们聚集在一起的时刻。我们分享着故事和笑话，享受着友谊和团结的氛围。这是一次放松和放纵的时刻，让我们远离日常的烦恼和压力。当夜幕降临时，烧烤火焰渐渐熄灭，我们回顾着那个美好的烧烤日，留下了难忘的回忆。我们的胃已经满足，心中也充满了温暖和满足。
                    </h4>
                  </div>
                  <div className="absolute left-[calc(50%-6px)] bg-mainRed w-3 h-3 rounded-full"></div>
                  <div className="w-[calc(50%-40px)] animatedSection floatRightAni">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1mN6eAuWnoid11wIvePjcvxLBukmtHMJF"
                      alt=""
                      className="rounded-md"
                    ></img>
                  </div>
                </section>
              </div>
            </div>
          </section>
        );
    }
  }

  return <div>{renderSection()}</div>;
};

export default HomePageSection;
