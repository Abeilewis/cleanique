import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TestimonialsPage from "./components/TestimonialsPage";
import ServicesPage from "./components/ServicesPage";
import Signup from "./components/Signup";
import MainPage from "./components/MainPage";
import RecentBookingsPage from "./components/RecentBookingsPage";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/recent-bookings" element={<RecentBookingsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
