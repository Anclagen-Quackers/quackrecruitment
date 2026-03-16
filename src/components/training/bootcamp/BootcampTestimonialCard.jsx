const BootcampTestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <article className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border-t-4 border-quackred-700 hover:-translate-y-1 hover:shadow-md   transition">
      <h4 className="text-xl font-bold mb-2">
        {testimonial.name}
        {testimonial.role ? ` – ${testimonial.role}` : ""}
      </h4>
      <div className="relative"></div>

      <p className="text-lg leading-7 text-gray-900">
        <span className="text-3xl text-quackred-400 font-bold">“</span>
        {testimonial.quote}
        <span className="relative">
          <span className="absolute -top-2 text-3xl text-quackred-400 font-bold">”</span>
        </span>
      </p>
    </article>
  );
};

export default BootcampTestimonialCard;
