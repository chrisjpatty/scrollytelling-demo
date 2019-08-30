import React from "react";

export default () => {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  React.useEffect(() => {
    const setHeight = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', setHeight)
    return () => {
      window.removeEventListener('resize', setHeight)
    }
  }, [])
  return windowHeight
};
