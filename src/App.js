import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
