import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/image7.png";

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="mb-6">
          Cleanique Clean Homes, <br />Every Time
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Professional cleaning services tailored to your needs. Reliable, thorough, and eco-friendly solutions for your home or office.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            onClick={onBookNow}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Book Now <ArrowRight className="ml-2 size-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}