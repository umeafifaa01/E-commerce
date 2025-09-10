import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import SignUpPage from "./assets/pages/authentication/SignUp";
import HomePage from "./assets/pages/Home";
import LoginPage from "./assets/pages/authentication/Login";
import SearchResults from "./assets/pages/search";
import Terms from "./assets/pages/terms";
import ForgotPassword from "./assets/pages/authentication/Forgot";
import InspirationPage from "./assets/pages/navlinks/Inspiration";
import FindJobs from "./assets/pages/navlinks/FindJob";
import LearnDesign from "./assets/pages/navlinks/learn";
import GoPro from "./assets/pages/navlinks/GoPro";
import HireDesigners from "./assets/pages/navlinks/Hire";
import LearnMore from "./assets/pages/LearnMore";
import BrowseMoreInspiration from "./assets/pages/Browse";

// ✅ Wrap logic in a component
function AppLayout() {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const hideNavbarPaths = ["/signup", "/login", "/forgot"];

  return (
    <>
      {/* Show Navbar only if current path is NOT in hideNavbarPaths */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/insp" element={<InspirationPage />} />
        <Route path="/find" element={<FindJobs />} />
        <Route path="/learn" element={<LearnDesign />} />
        <Route path="/go" element={<GoPro />} />
        <Route path="/hire" element={<HireDesigners />} />
        <Route path="/learns" element={<LearnMore />} />
        <Route path="/bro" element={<BrowseMoreInspiration />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
