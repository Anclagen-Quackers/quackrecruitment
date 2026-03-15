"use client";

import PageLink from "@/components/PageLink";
import { useInView } from "react-intersection-observer";

const MultiLinkCTASection = ({
  titleBlack,
  titlePurple,
  text,
  links = [],
  image,
  alt = "CTA image",
  reverse = false,
  highlights = [],
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`flex relative transition-all duration-1000 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 lg:text-left ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">{titleBlack}</span>
          <span className="block text-quackred-900">{titlePurple}</span>
        </h2>

        <p className="mt-4 text-gray-700 text-lg leading-7 max-w-2xl mx-auto lg:mx-0">{text}</p>

        {highlights.length > 0 && (
          <ul className="mt-6 space-y-2 text-left max-w-2xl mx-auto lg:mx-0">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-base leading-7 text-gray-800">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-quackred-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
            {links.map((link) => (
              <PageLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        )}
      </div>

      <div
        className={`lg:w-1/2 flex items-center justify-center ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <img
          src={image}
          className="hidden lg:block mx-auto my-auto max-h-[320px] w-auto rounded-3xl shadow-lg shadow-gray-500 p-5 bg-white"
          alt={alt}
        />
      </div>
    </div>
  );
};

export default MultiLinkCTASection;
