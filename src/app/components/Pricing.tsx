import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface PricingProps {
  onBookNow: () => void;
}

const plans = [
  {
    name: "Basic",
    price: "15000FCFA",
    description: "Perfect for small apartments",
    features: [
      "Up to 2 bedrooms",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Dusting & vacuuming",
      "2 hours of service"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "25000FCFA",
    description: "Ideal for medium homes",
    features: [
      "Up to 4 bedrooms",
      "All basic features",
      "Deep kitchen cleaning",
      "Window cleaning",
      "4 hours of service"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "50000FCFA",
    description: "Complete cleaning solution",
    features: [
      "Unlimited bedrooms",
      "All standard features",
      "Eco-friendly products",
      "Carpet cleaning",
      "Full day service"
    ],
    popular: false
  }
];

export function Pricing({ onBookNow }: PricingProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our satisfaction guarantee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              
            >
              
              
              <div className="text-center mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-gray-600">/visit</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg 
                      className="size-5 text-green-600 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={onBookNow}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}