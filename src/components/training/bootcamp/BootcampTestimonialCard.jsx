const BootcampTestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <h4 className="text-xl font-bold mb-2">
        {testimonial.name}
        {testimonial.role ? ` – ${testimonial.role}` : ""}
      </h4>
      <p className="text-lg leading-7 text-gray-900">“{testimonial.quote}”</p>
    </article>
  );
};

export default BootcampTestimonialCard;
