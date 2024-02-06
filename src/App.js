import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Contact from "./views/Contact"
import About from "./views/About"
import Work from "./views/Work"
import Minimalism from "./views/Minimalism"


function App() {
  return (
    <>
      <Routes>
        <Route path="/0/work" element={<Work />} />
        <Route path="/0/work/minimalism" element={<Minimalism />} />
        <Route path="/0/about" element={<About />} />
        <Route path="/0/contact" element={<Contact />} />
        <Route path="*" element={<Home to="/0/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
