import { useState } from "react";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { HowItWorks } from "./HowItWorks";
import { Pricing } from "./Pricing";
import { Footer } from "./Footer";
import { BookingDialog } from "./BookingDialog";
import { Toaster } from "./ui/sonner";

import Navbar from "./Navbar";

export default function MainPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onBookNow={() => setBookingOpen(true)} />
      <Services />
      <HowItWorks />
      <Pricing onBookNow={() => setBookingOpen(true)} />
      <Footer />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <Toaster />
    </div>
  );
}
