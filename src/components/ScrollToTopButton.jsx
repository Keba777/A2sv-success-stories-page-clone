import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-5 py-4 rounded-full"
          onClick={scrollToTop}
        >
          <SlArrowUp className="w-3 font-extrabold" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
