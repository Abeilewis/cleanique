import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { addReview } from "../services/firebase";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle: string;
}

export function ReviewDialog({ open, onOpenChange, serviceTitle }: ReviewDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    reviewText: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addReview({
        name: formData.name,
        service: serviceTitle,
        rating: parseInt(formData.rating),
        reviewText: formData.reviewText
      });
      toast.success(`Review for ${serviceTitle} submitted successfully!`);
      onOpenChange(false);
      setFormData({
        name: "",
        rating: "",
        reviewText: ""
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Review for {serviceTitle}</DialogTitle>
          <DialogDescription>
            Share your experience with our {serviceTitle.toLowerCase()} service.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name (optional)"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="rating">Rating</Label>
            <Select value={formData.rating} onValueChange={(value) => setFormData({ ...formData, rating: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">⭐⭐⭐⭐⭐ (5 stars)</SelectItem>
                <SelectItem value="4">⭐⭐⭐⭐ (4 stars)</SelectItem>
                <SelectItem value="3">⭐⭐⭐ (3 stars)</SelectItem>
                <SelectItem value="2">⭐⭐ (2 stars)</SelectItem>
                <SelectItem value="1">⭐ (1 star)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="reviewText">Review</Label>
            <Textarea
              id="reviewText"
              placeholder="Tell us about your experience..."
              value={formData.reviewText}
              onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
              required
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
