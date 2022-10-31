import './App.css';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
