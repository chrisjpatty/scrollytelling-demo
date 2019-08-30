import React from "react";
import useScrollContext from "./useScrollContext";
import usePageProgress from './usePageProgress'
import clamp from 'lodash/clamp'
import shortid from "shortid";

const remap = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export default (height, offsetTop) => {
  const scrollTop = useScrollContext();
  const pageProgress = usePageProgress();
  const layerId = React.useRef(shortid.generate()).current;

  const windowHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  const isInViewport =
    (scrollTop >= offsetTop && scrollTop <= offsetTop + height) ||
    (scrollTop <= offsetTop && offsetTop <= scrollTop + windowHeight);
  let progress = clamp(((scrollTop + windowHeight - offsetTop) / (height + windowHeight)) * 100, 0, 100)
  // let progress = remap(pageProgress, scrollTop - offsetTop, scrollTop - offsetTop + windowHeight + height, 0, 100)

  return { isInViewport, layerId, progress };
};
