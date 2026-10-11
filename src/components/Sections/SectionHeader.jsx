const SectionHeader = ({ title, eyebrow, subtitle, centered = false, className = "" }) => {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-quackred-800">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">{title}</h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-3xl text-lg leading-8 text-gray-800 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
