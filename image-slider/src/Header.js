import { useState } from "react";

const Header = ({ country }) => {
  const [name, setName] = useState("Swastik");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Carousel</h1>
    </div>
  );
};

export default Header;
