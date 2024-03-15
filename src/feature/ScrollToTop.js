import { useEffect } from "react";
import { useLocation } from "react-router-dom";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
