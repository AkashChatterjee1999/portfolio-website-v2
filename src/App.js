import "./style.css";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyExperience from "./pages/MyExperience";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <>
      {/* <Home />
      <hr className="m-0" style={{ height: "1px", backgroundColor: "transparent", border: "2px solid" }} />
      <AboutMe />
      <hr className="m-0" style={{ height: "1px", backgroundColor: "transparent", border: "2px solid" }} />
      <MyExperience />
      <hr className="m-0" style={{ height: "1px", backgroundColor: "transparent", border: "2px solid" }} /> */}
      <MyProjects />
    </>
  );
}

export default App;
