import PageLink from "../PageLink";

const imagePositions = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

const Banner = ({
  eyebrow,
  title,
  description,
  imgSrc,
  imgAlt = "",
  imagePosition = "center",
  links = [],
  size = "default",
}) => {
  const heights = {
    compact: "min-h-[320px] md:min-h-[380px]",
    default: "min-h-[400px] md:min-h-[460px]",
    large: "min-h-[480px] md:min-h-[560px]",
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white shadow-md shadow-quackred-200 mt-16">
      <div
        className={["relative mx-auto max-w-screen-xl overflow-hidden", heights[size]].join(" ")}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className={[
            "absolute inset-0 h-full w-full object-cover",
            "object-center md:object-right",
          ].join(" ")}
        />

        {/* Desktop: image weighted right, fading into white */}
        <div
          className="
    absolute inset-0
    bg-[linear-gradient(to_right,white_0%,white_42%,rgba(255,255,255,0.95)_52%,rgba(255,255,255,0.55)_68%,rgba(255,255,255,0)_92%,white_100%)]
  "
        />

        {/* Mobile: extra wash so text stays readable over image */}
        <div
          className="
    absolute inset-0
    bg-[linear-gradient(to_right,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_55%,rgba(255,255,255,0.72)_100%)]
    md:bg-[linear-gradient(to_right,white_0%,white_42%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.15)_68%,rgba(255,255,255,0)_92%,white_100%)]
  "
        />

        <div className="relative mx-auto flex h-full max-w-screen-2xl items-center px-5 py-10 md:px-12">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-quackred-800">
                {eyebrow}
              </p>
            )}

            <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
              {title}
            </h1>

            {description && (
              <div className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
                {description}
              </div>
            )}

            {links.length > 0 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {links.map((link) => (
                  <PageLink key={link.path} href={link.path} label={link.label} arrow />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
