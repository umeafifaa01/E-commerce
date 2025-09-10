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

// ✅ Wrap logic in a component
function AppLayout() {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const hideNavbarPaths = ["/signup", "/login"];

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
