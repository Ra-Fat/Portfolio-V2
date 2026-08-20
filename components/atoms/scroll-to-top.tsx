"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={`fixed cursor-pointer right-4 z-999 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 p-3 font-bold uppercase text-white shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20 ${
        stick ? "bottom-16 visible opacity-80" : "bottom-15 invisible opacity-0"
      }`}
    >
      <ChevronUp className="m-auto h-6 w-auto text-white lg:h-7" />
    </button>
  );
};

export default ScrollToTop;
