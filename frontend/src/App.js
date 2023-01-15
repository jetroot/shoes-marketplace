import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./screen/Home";
import Details from "./screen/Details";
import NoPage from "./screen/NoPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
