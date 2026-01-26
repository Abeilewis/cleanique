import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sparkles, Building, Star, Shield } from "lucide-react";
import { ReviewDialog } from "./ReviewDialog";

const services = [
  {
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Complete home cleaning including all rooms, kitchen, and bathrooms. We make your space shine.",
    image: "https://images.unsplash.com/photo-1765970101844-67efbb2de141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjczNTAwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional office cleaning services to maintain a productive and healthy work environment.",
    image: "https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc0MzM2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Star,
    title: "Deep Cleaning",
    description: "Intensive deep cleaning service for those hard-to-reach areas and stubborn dirt.",
    image: "https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjczNjM2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Shield,
    title: "Eco-Friendly Options",
    description: "Green cleaning solutions that are safe for your family, pets, and the environment.",
    image: "https://images.unsplash.com/photo-1760827797819-4361cd5cd353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzY3MzU2MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleAddReview = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setReviewOpen(true);
  };

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of cleaning services designed to meet all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <service.icon className="size-10 text-blue-600 mb-4" />
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={() => handleAddReview(service.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Add Review
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ReviewDialog
        open={reviewOpen}
        onOpenChange={setReviewOpen}
        serviceTitle={selectedService}
      />
    </section>
  );
}
