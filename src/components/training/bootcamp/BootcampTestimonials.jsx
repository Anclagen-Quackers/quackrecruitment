import BootcampTestimonialCard from "./BootcampTestimonialCard";

const BootcampTestimonials = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="grid gap-6">
      {items.map((item, index) => (
        <BootcampTestimonialCard key={index} testimonial={item} />
      ))}
    </div>
  );
};

export default BootcampTestimonials;
