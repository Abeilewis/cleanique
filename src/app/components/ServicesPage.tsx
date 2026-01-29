import { Services } from "./Services";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
}
