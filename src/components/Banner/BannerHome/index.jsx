"use client";

import PageLink from "../../PageLink";

const BannerHome = ({ eyebrow, title, description, imgSrc, imgAlt = "", links = [] }) => {
  return (
    <section className="relative overflow-hidden bg-white mt-5">
      <div className="mx-auto grid min-h-[620px] max-w-screen-2xl lg:grid-cols-2">
        {/* Content */}
        <div className="relative z-10 flex items-center px-6 py-16 md:px-12 lg:py-24">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                {eyebrow}
              </p>
            )}

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
                {description}
              </p>
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

        {/* Decorative image */}
        <div className="relative min-h-[360px] lg:min-h-full">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Soft blend into content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
