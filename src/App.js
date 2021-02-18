//import logo from './logo.svg';
import "./App.css";
import About from "./components/aboutComponent/About";
import Contact from "./components/contactComponent/Contact";
import Course from "./components/courseComponent/Course";
import Membership from "./components/membershipComponent/Membership";
import NavigationBar from "./components/navBarComponent/NavBar";
import Schedule from "./components/scheduleComponent/Schedule";
import Welcome from "./components/welcomeComponent/Welcome";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Welcome></Welcome>
      <Membership></Membership>
      <Schedule></Schedule>
      <Course></Course>
      <Contact></Contact>
      <About></About>
    </div>
  );
}

export default App;
