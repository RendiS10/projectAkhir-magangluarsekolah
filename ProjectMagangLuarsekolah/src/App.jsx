import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 