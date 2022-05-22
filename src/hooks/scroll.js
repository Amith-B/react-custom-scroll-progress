import { useEffect, useState } from "react";

export const useScroll = (contentRef) => {
  const [xPercent, setXPercent] = useState(0);
  const [yPercent, setYPercent] = useState(0);

  useEffect(() => {
    contentRef.current &&
      contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      contentRef.current &&
        contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef]);

  const handleScroll = ($event) => {
    const target = $event.target;
    const percentY =
      (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
    const percentX =
      (target.scrollLeft / (target.scrollWidth - target.clientWidth)) * 100;

    setXPercent(percentX);
    setYPercent(percentY);
  };

  return [yPercent, xPercent, setYPercent, setXPercent];
};
