import { useEffect, useState } from "react";

export const useScroll = (contentRef) => {
  const [xPercent, setXPercent] = useState(0);
  const [yPercent, setYPercent] = useState(0);

  const [yViewPercent, setYViewPercent] = useState(0);
  const [xViewPercent, setXViewPercent] = useState(0);

  useEffect(() => {
    contentRef.current &&
      contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      contentRef.current &&
        contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef]);

  useEffect(() => {
    const reObs = new ResizeObserver((entries) => {
      if (entries[0]) {
        calculatePercent(contentRef.current);
      }
    });

    if (contentRef.current.childElementCount === 1) {
      reObs.observe(contentRef.current.firstChild);
      reObs.observe(contentRef.current);
    }

    return () => reObs.disconnect();
  }, [contentRef]);

  const handleScroll = ($event) => {
    const target = $event.target;
    calculatePercent(target);
  };

  const calculatePercent = (target) => {
    const viewPercentY = (target.clientHeight / target.scrollHeight) * 100;
    const viewPercentX = (target.clientWidth / target.scrollWidth) * 100;

    const percentY =
      viewPercentY === 100
        ? undefined
        : (target.scrollTop / (target.scrollHeight - target.clientHeight)) *
          100;
    const percentX =
      viewPercentX === 100
        ? undefined
        : (target.scrollLeft / (target.scrollWidth - target.clientWidth)) * 100;

    setXViewPercent(viewPercentX);
    setXPercent(percentX);

    setYViewPercent(viewPercentY);
    setYPercent(percentY);
  };

  return [
    yPercent,
    xPercent,
    setYPercent,
    setXPercent,
    yViewPercent,
    xViewPercent,
    setYViewPercent,
    setXViewPercent,
  ];
};
