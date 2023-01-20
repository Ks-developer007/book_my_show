import "./App.css"
//pages

import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playpage from "./pages/Play.page";

//Routes
import { Routes,Route } from "react-router-dom";

//react-slick-caroussel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/movie/:id" element={<Moviepage/>}/>
    <Route path="/plays" element={<Playpage/>}/>
  </Routes>

}

export default App;
