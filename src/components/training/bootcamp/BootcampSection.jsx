import Section from "@/components/Sections/Section";

const BootcampSection = ({ title, bannerTitle, children }) => {
  if (!children) return null;

  return (
    <section className="mb-6 mt-10 lg:px-10">
      {bannerTitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-quackred-700">
          {bannerTitle}
        </p>
      )}

      <h3 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h3>
      {children}
    </section>
  );
};

export default BootcampSection;
