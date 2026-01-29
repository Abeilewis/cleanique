import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Cleanique</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for professional cleaning services. Making spaces shine since 2015.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Home Cleaning</li>
              <li>Office Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Eco-Friendly Options</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>hello@cleanique.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>123 Clean St, Suite 100</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>Mon-Sat: 8AM-8PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2026 Cleanique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}