import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubUserSearch from "./pages/GithubUserSearch";

function App() {
  return (
    <div className="dark font-space-mono">
      <Router>
        <Routes>
          <Route path="/" element={<GithubUserSearch />} />
          <Route path="/:username" element={<GithubUserSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
