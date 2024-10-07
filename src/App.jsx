import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DiscoverPage from "./Pages/DiscoverPage";
import ArticlePage from "./Pages/ArticlePage";
import LibraryPage from "./Pages/LibraryPage";
import SignInPage from "./Pages/SignInPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/discover" Component={DiscoverPage} />
        <Route exact path="/article" Component={ArticlePage} />
        <Route exact path="/library" Component={LibraryPage} />
        <Route exact path="/sign-in" Component={SignInPage} />
      </Routes>
    </Router>
  );
};

export default App;
