import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import gsap from "gsap";

function App() {
  let timeline = gsap.timeline();

  return (
    <div className="App">
      <Header timeline={timeline} />
      <Landing timeline={timeline} />
    </div>
  );
}

export default App;
