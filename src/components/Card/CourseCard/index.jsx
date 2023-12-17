"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const CourseCard = ({ title, description, points = [], price, locations = [], enrollmentMessage, image, link = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-80px 0px", // Start the animation slightly before the element is in view
  });
  return (
    <div className={`relative md:max-w-md xl:max-w-lg px-4 mx-auto xl:px-8 ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <div className="overflow-hidden rounded-lg shadow-lg pricing-box mb-10">
        <div className="px-6 py-8 bg-quackred-50 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">{title}</h3>
          <p className="mt-6 text-base leading-6 text-gray-700 ">{description}</p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-quackred-800 uppercase">What&#x27;s covered</h4>
              <div className="flex-1 border-t-2 border-quackred-700"></div>
            </div>
            <ul className="mt-6 ms-6">
              {points.map(({ title, description }, index) => (
                <li className="text-quackred-800 font-bold list-disc" key={index}>
                  {title}: <span className="text-black font-normal">{description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-quackred-800 uppercase">Locations</h4>
              <div className="flex-1 border-t-2 border-quackred-700"></div>
            </div>
            <ul className="mt-6 ms-6">
              {locations.map((location, index) => (
                <li className="text-quackred-800 font-bold list-disc" key={index}>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 py-8 text-center bg-gray-50 lg:p-12 bg-quackred-200">
          <p className=" mb-6">
            <span className="text-base font-medium leading-6 text-gray-700">Starting from </span>
            <span className="text-lg font-semibold leading-none text-gray-900">{price}</span>
          </p>
          <p className="text-md font-semibold leading-6 text-gray-900">{enrollmentMessage}</p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <Link
                prefetch={false}
                href={link}
                className="py-2 px-4 block bg-quackred-800 hover:bg-quackred-600 focus:ring-quackred-400 focus:ring-offset-quackred-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
