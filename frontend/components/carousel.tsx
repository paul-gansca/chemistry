import { useState, useRef, useEffect } from "react";

// Data
const data = {
  resources: [
    {
      title: "First",
    },
    {
      title: "Second",
    },
  ],
};

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(data.resources.length - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex !== data.resources.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            type="button"
            onClick={movePrev}
            className="hover:bg-gray-700/10 text-black w-10 h-full text-center opacity-75 hover:opacity-100 z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            type="button"
            onClick={moveNext}
            className="hover:bg-gray-700/10 text-black w-10 h-full text-center opacity-75 hover:opacity-100 z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource) => {
            return (
              <div
                key={resource.title}
                className="carousel-item  text-center relative min-w-full h-[350px] snap-start"
              >
                <h1>{resource.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
