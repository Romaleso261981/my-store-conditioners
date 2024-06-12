import { useEffect, useState } from "react";
import s from "./BackToTop.module.css";

import { FaArrowUp } from "react-icons/fa";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={s.BackToTopWrapper}>
      <button
        onClick={scrollToTop}
        className={s.scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        Top
      </button>
      <FaArrowUp />
    </div>
  );
};
