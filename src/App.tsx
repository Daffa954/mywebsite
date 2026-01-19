import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/About";
import { MyProject } from "./pages/MyProject";
import { ProjectDetail } from "./pages/detail";
function App() {
  return (
    <BrowserRouter basename="/mywebsite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprojects" element={<MyProject />} />
        <Route path="/myprojects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
