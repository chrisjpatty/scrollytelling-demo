import React from "react";

export default () => {
  const [pageHeight, setPageHeight] = React.useState(
    document.body.scrollHeight
  );

  React.useEffect(() => {
    const setHeight = () =>
      setPageHeight(document.body.scrollHeight);
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return pageHeight;
};
