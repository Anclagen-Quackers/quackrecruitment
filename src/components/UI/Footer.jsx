"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoGallery from "../LogoLoop/LogoGallery";

const Footer = () => {
  const location = usePathname();

  return (
    <footer className="bg-black text-white p-10 mt-auto">
      <div className="container mx-auto max-w-screen-2xl">
        <h3 className="mb-3 text-xl font-bold text-center">Partners & Affiliates</h3>
        <div>
          <LogoGallery />
        </div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 border-t border-quackred-300 pt-6">
          {/* Logo and Description */}
          <div className="px-2 md:ps-6">
            <h3 className="mb-3 text-xl font-bold">General</h3>
            <ul>
              {[{ path: "/", label: "Home" }, { path: "/recruitment/listings", label: "Jobs" }, { path: "/about", label: "About" }, { path: "/contact", label: "Contact" }, ,].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-2 text-xl font-bold max-w-fit mt-4">Recruitment</h3>
            <ul>
              {[
                { path: "/recruitment/listings", label: "Listings" },
                { path: "/recruitment", label: "Recruitment" },
                { path: "/recruitment/permanent", label: "Permanent Recruitment" },
                { path: "/recruitment/temporary", label: "Temporary Recruitment" },
                { path: "/recruitment/on-site-managed", label: "On-Site Managed Services" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={route.path} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <h3 className="mb-2 text-xl font-bold max-w-fit">Training & Courses</h3>
            <ul>
              {[
                { path: "/training", label: "Training" },
                { path: "/training/multiply", label: "Multiply Courses" },
                { path: "/training/food-and-hygiene", label: "Food & Hygiene" },
                { path: "/training/sia", label: "Security Industry Authority (SIA)" },
                { path: "/training/customer-service-administration", label: "Admin & Customer Service" },
                { path: "/training/cscs", label: "Construction Skills (CSCS)" },
                { path: "/training/fork-lift", label: "Forklift" },
                { path: "/training/welding", label: "Welding" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-2">
            <h3 className="mb-2 text-xl font-bold">Policies & Plans</h3>
            <ul>
              {[
                { path: "/legal", label: "Legal" },
                { path: "/legal/privacy-policy", label: "Privacy Policy" },
                { path: "/legal/policies", label: "All Policies" },
              ].map((route) => (
                <li key={route.path}>
                  <Link prefetch={false} href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 mb-2 text-xl font-bold">Login</h3>
            <ul>
              {[
                { path: "https://qrt.magn8.co.uk/login.php", label: "Administrator", external: true },
                { path: "https://qrt.magn8.co.uk/portal/login.php", label: "Tutor", external: true },
              ].map((route) => (
                <li key={route.path}>
                  <a target="_blank" href={`${route.path}`} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Business Hours */}
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold">Office Hours</h3>
            <p className="my-2">Monday to Friday: 8:00am - 5.30pm</p>
            <p className="my-2">Saturday to Sunday: 9:00am - 3.00pm</p>
            <p className="my-2">24/7 Availability</p>
            <h3 className="mb-3 text-xl font-bold">Socials</h3>
            <div className="flex justify-start my-2">
              <a href="#" className=" w-10">
                <img src="/interface/Facebook_Logo_Primary.png" alt="Facebook" />
              </a>
              <a href="#" className="mx-6 w-12">
                <img src="/interface/LI-In-Bug.png" alt="Linkedin" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        {/* Quack group and affiliated */}
        <div className="border-t border-quackred-300 pt-6">
          {/* Copyright */}
          <div className="flex flex-col lg:flex-row mb-8">
            <img src="/logos/quack-group-horizonal-full-logo-white.png" alt="Quack Group Full Logo" className="mx-auto my-3 w-full h-full sm:w-80 lg:w-96 mx-auto" />
            <div className="md:flex flex-row justify-center max-w-screen-lg mx-auto gap-12 mt-5 lg:mt-0">
              <Link prefetch={false} href="/" className="my-auto flex flex-row">
                <img src="/logos/temp-logo-rt.png" alt="Logo" className="h-16" />
                <div className="flex flex-col ml-3 my-auto text-white text-2xl font-medium">
                  <span>Quack</span>
                  <span>Recruitment & Training</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-quackred-300 pt-6">
          {/* Copyright */}
          <div className="text-lg font-semibold text-center">
            <p>Quack Recruitment & Training Ltd. © 2023</p>
            <p>Quack Recruitment & Training, Business & Technology Centre, Bessemer Drive, Stevenage, SG1 2DX </p>
            <p>
              Company number:{" "}
              <a target="_blank" href="https://find-and-update.company-information.service.gov.uk/company/11066952" className="text-quackred-300">
                11066952
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
