import { Calendar, Users, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Choose your service and select a convenient time slot through our easy booking system."
  },
  {
    icon: Users,
    title: "We Arrive",
    description: "Our professional cleaning team arrives on time with all necessary equipment and supplies."
  },
  {
    icon: Sparkles,
    title: "Enjoy Clean Space",
    description: "Relax and enjoy your sparkling clean home or office. Satisfaction guaranteed!"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your space cleaned is simple and hassle-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center size-20 rounded-full bg-blue-100 text-blue-600 mb-4">
                <step.icon className="size-10" />
              </div>
              <div className="mb-4">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
