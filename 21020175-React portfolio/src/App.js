import "./App.css";
import ContactMe from "./screens/ContactMe";
import Edu from "./screens/Edu";
import HeroSec from "./screens/HeroSec";
import MyServ from "./screens/MyServ";
import NavBar from "./screens/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <Edu />
      <MyServ />
      <ContactMe />
    </>
  );
}

export default App;
