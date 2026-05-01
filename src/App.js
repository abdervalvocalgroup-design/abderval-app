import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Links from "./pages/Links";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;
