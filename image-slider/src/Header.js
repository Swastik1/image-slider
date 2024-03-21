import { useState } from "react";

const Header = ({ country }) => {
  const [name, setName] = useState("Swastik");

  return (
    <div>
      <h1>
        Hello {name} from {country}
      </h1>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
};

export default Header;
