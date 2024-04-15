/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel: React.FC<{
  children?: React.ReactNode;
  auto: boolean;
  autoSlideInterval: number;
  carouselContent: any;
}> = ({
  children,
  auto = true,
  autoSlideInterval = 10000,
  carouselContent,
}) => {
  const [curr, setCurr] = useState(0);
  const [carouselSize, setCarouselSize] = useState(0);
  const [autoSlide, setAutoSlide] = useState(auto);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? carouselSize - 1 : curr - 1));
  const next = () => {
    setCurr((curr) => (curr === carouselSize - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    setCarouselSize(carouselContent.length);
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [carouselContent, carouselSize, autoSlide]);
  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => {
        setAutoSlide(false);
      }}
      onMouseLeave={() => {
        setAutoSlide(true);
      }}
    >
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <button
        onClick={prev}
        className="p-1 rounded-full text-gray-800 hover:text-mainRed outline-none absolute left-2 top-[calc(50%-24px)]"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="p-1 rounded-full text-gray-800 hover:text-mainRed outline-none absolute right-2 top-[calc(50%-24px)]"
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {carouselContent.map((_: any, i: number) => (
            <div
              className={`
              transition-all w-3 h-3 bg-gray-600 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
