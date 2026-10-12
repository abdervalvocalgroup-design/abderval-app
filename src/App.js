import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album.jsx';
import Links from "./pages/Links";
import Donate from "./pages/Donate";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;