import React from "react";
import useLayerProgress from "./useLayerProgress";

export default layerWrapper => {
  const [layerHeight, setLayerHeight] = React.useState(0);
  const [offsetTop, setLayerRect] = React.useState(0);
  const { isInViewport, progress } = useLayerProgress(layerHeight, offsetTop);

  React.useEffect(
    () => {
      const handleResize = () => {
        setLayerHeight(layerWrapper.current.offsetHeight);
        setLayerRect(layerWrapper.current.offsetTop);
      };
      handleResize();
      window.addEventListener("scroll", handleResize);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", handleResize);
        window.removeEventListener("resize", handleResize);
      };
    },
    [layerWrapper]
  );

  return { progress, isInViewport };
};
