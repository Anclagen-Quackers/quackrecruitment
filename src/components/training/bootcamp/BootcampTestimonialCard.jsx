const BootcampTestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <article className="rounded-xl border-t-4 border-quackred-700 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-md lg:p-8">
      <h4 className="mb-2 text-xl font-bold">
        {testimonial.name}
        {testimonial.role ? ` - ${testimonial.role}` : ""}
      </h4>

      <p className="text-lg leading-7 text-gray-900">
        <span className="text-3xl font-bold text-quackred-400">&ldquo;</span>
        {testimonial.quote}
        <span className="text-3xl font-bold text-quackred-400">&rdquo;</span>
      </p>
    </article>
  );
};

export default BootcampTestimonialCard;
