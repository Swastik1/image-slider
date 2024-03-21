import React from "react";

const data = [
  "https://static.vecteezy.com/system/resources/previews/032/242/170/non_2x/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg",
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
  "https://t3.ftcdn.net/jpg/05/62/54/02/360_F_562540214_unXDmpcHlTdImYhQE7dPBXZEWfFyAeeH.jpg",
  "https://images.alphacoders.com/134/1342799.png",
  "https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg",
];

const ImageSlider = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={data[0]}
        alt="wallpaper images"
        style={{
          width: "500px",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
};

export default ImageSlider;
