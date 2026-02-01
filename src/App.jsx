import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header.jsx";
import Footer from "./component/footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Recipies from "./pages/Recipies.jsx";
import Recip from "./pages/Recip.jsx";
import Contact from "./pages/Contact.jsx";
export function App() {
  return (
    <div className="wraper">
      <Router>
        <Header></Header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/category/:catname" element={<Recipies />}></Route>
            <Route path="/recip/:id" element={<Recip />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}
