import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  );
}
