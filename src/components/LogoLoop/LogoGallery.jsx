import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const logos = [
  { src: "/footer/disability-confident-committed.jpg", alt: "Disability Committed Logo" },
  { src: "/footer/ALP.jpg", alt: "ALP member logo", link: "https://www.labourproviders.org.uk/" },
  { src: "/footer/Sedex-Logo.png", alt: "Sedex logo", link: "https://www.sedex.com/" },
  { src: "/footer/ETF_Cyan_Digital_Logo.jpg", alt: "Education & Training Foundation logo", link: "https://www.et-foundation.co.uk/" },
  { src: "/footer/Department_for_Work_and_Pensions_logo.svg.png", alt: "Department for Work & Pensions", link: "https://www.gov.uk/government/organisations/department-for-work-pensions" },
  { src: "/footer/shaw_trust.png", alt: "Shaw Trust logo", link: "https://www.shawtrust.org.uk/" },
  { src: "/footer/West_Midlands_Combined_Authority_logo.svg.png", alt: "West Midlands Combine Authority logo", link: "https://www.wmca.org.uk/" },
  { src: "/footer/Approved-Training-Organisation-Status.jpg", alt: "CITB Approved Training Organisation Status", link: "https://www.citb.co.uk/" },
  { src: "/footer/EU_Social_Fund.png", alt: "EU Social Fund" },
  { src: "/footer/Highfields_Approved_Centre.jpg", alt: "Highfields Approved Centre" },
  { src: "/footer/SYMCA.JPG", alt: "South Yorkshire Mayoral Combined Authority" },
  { src: "/footer/skills_for_life_multiple_logo.png", alt: "Skills For Life Multiply, Logo" },
  { src: "/footer/Kent-Council.jpg", alt: "Kent Council Logo" },
  { src: "/footer/Cyber-Essentials-Badge.png", alt: "Cyber Essentials Certification Badge" },
];

const LogoGallery = () => {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const logosRef = useRef(null);

  const { x } = useSpring({
    from: { x: 0 },
    x: -wrapperWidth,
    config: { duration: wrapperWidth * 15 }, // Adjust duration for speed
    reset: true,
    reverse: false,
    loop: true,
    onRest: () => {
      if (wrapperWidth !== 0) {
        x.start();
      }
    },
  });

  useEffect(() => {
    if (logosRef.current) {
      setWrapperWidth(logosRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="overflow-hidden relative logo-slider mb-5">
      <animated.div className="whitespace-nowrap" style={{ transform: x.to((x) => `translateX(${x}px)`) }} ref={logosRef}>
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-24 inline-block mx-2 bg-white p-1" />
        ))}
      </animated.div>
      <div className="fade-overlay"></div>
    </div>
  );
};

export default LogoGallery;
