import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TestimonialsPage from "./components/TestimonialsPage";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
