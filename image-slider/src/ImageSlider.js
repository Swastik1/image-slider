import React, { useState } from "react";

const data = [
  "https://static.vecteezy.com/system/resources/previews/032/242/170/non_2x/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg",
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
  "https://t3.ftcdn.net/jpg/05/62/54/02/360_F_562540214_unXDmpcHlTdImYhQE7dPBXZEWfFyAeeH.jpg",
  "https://images.alphacoders.com/134/1342799.png",
  "https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(!activeIndex ? data.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % data.length);
  };

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
