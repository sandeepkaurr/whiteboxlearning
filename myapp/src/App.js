import "./App.css";
// import Footer from "./Footer";

import Home from "./Home";
import Faq from "./Faq";
import Contact from "./Contact";
import Schdule from "./Schdule";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Faq" element={<Faq></Faq>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Schdule" element={<Schdule></Schdule>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
