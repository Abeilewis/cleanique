import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    comment: "Absolutely amazing service! My house has never looked better. The team was professional, thorough, and friendly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    comment: "We've been using their office cleaning service for 6 months now. Consistently excellent work and great communication.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Apartment Resident",
    comment: "Love their eco-friendly cleaning options. Great for the environment and my allergies. Highly recommend!",
    rating: 5
  }
];

export function Testimonials() {
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsCollection = collection(db, 'reviews');
        const reviewsSnapshot = await getDocs(reviewsCollection);
        const reviewsList = reviewsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          name: (doc.data().name && doc.data().name.trim() !== "") ? doc.data().name : "Anonymous User",
          role: doc.data().service + " Customer",
          comment: doc.data().reviewText,
          rating: doc.data().rating
        }));
        setUserReviews(reviewsList);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const allTestimonials = [...testimonials, ...userReviews];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
              <div>
                <p>{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
