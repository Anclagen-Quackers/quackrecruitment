const FeatureCard = ({ title, description, icon, children }) => {
  return (
    <article className="rounded-2xl border border-quackred-100 bg-white p-6 shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-quackred-100 text-quackred-800">
          {icon ? (
            <span className="material-icons text-xl" aria-hidden="true">
              {icon}
            </span>
          ) : (
            <span className="text-sm font-bold" aria-hidden="true">
              ✓
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-950">{title}</h3>
      </div>

      {description && <p className="mt-4 text-base leading-7 text-gray-900">{description}</p>}

      {children && (
        <div className="mt-4 space-y-4 text-base leading-7 text-gray-900">{children}</div>
      )}
    </article>
  );
};

export default FeatureCard;
