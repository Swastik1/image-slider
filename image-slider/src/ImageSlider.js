import React, { useEffect, useState } from "react";
import { data } from "./constants";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(!activeIndex ? data.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            display: "flex",
            margin: "1rem",
            padding: "1rem",
            height: "10px",
            alignItems: "center",
            fontSize: "bold",
          }}
          onClick={handlePrevClick}
        >
          Previous
        </button>
        {data.map((url, i) => (
          <img
            key={url}
            src={url}
            alt="wallpaper images"
            style={{
              width: "700px",
              height: "500px",
              objectFit: i === activeIndex ? "contain" : "hidden",
              display: i === activeIndex ? "block" : "none",
            }}
          />
        ))}
        <button
          style={{
            display: "flex",
            margin: "1rem",
            padding: "1rem",
            height: "10px",
            alignItems: "center",
            position: "relative",
          }}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
