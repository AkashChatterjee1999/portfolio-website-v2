import "./style.css";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyExperience from "./pages/MyExperience";

function App() {
  return (
    <>
      <Home />
      <hr className="m-0" style={{ height: "1px", backgroundColor: "transparent", border: "2px solid" }} />
      <AboutMe />
      <hr className="m-0" style={{ height: "1px", backgroundColor: "transparent", border: "2px solid" }} />
      <MyExperience />
    </>
  );
}

export default App;
