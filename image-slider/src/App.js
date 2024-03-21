import Header from "./Header";
import "./App.css";
import ImageSlider from "./ImageSlider";

function App() {
  const country = "India";
  return (
    <div className="App">
      <Header country={country} />
      <ImageSlider />
    </div>
  );
}

export default App;
