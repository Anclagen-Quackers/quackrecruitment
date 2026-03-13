"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

const BootcampCourseCard = ({ course }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-80px 0px",
  });

  if (!course) return null;

  return (
    <article
      ref={ref}
      className={`mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="p-6">
        {course.authority?.logo && (
          <div className="mb-5 flex justify-center rounded-xl bg-gray-50 p-4">
            <img
              src={course.authority.logo}
              alt={course.authority.logoAlt || course.authority.name}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        )}

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-quackred-700">
          Skills Bootcamp
        </p>

        <h3 className="mb-2 text-2xl font-bold text-gray-900">{course.title}</h3>

        {course.authority?.name && (
          <p className="mb-4 text-base font-semibold text-gray-700">{course.authority.name}</p>
        )}

        {course.cardDescription && (
          <p className="mb-5 text-base leading-7 text-gray-700">{course.cardDescription}</p>
        )}

        <div className="space-y-2 rounded-xl bg-quackred-50 p-4 text-sm text-gray-900">
          {course.overview?.duration && (
            <p>
              <span className="font-semibold">Duration:</span> {course.overview.duration}
            </p>
          )}

          {course.overview?.guidedLearningHours && (
            <p>
              <span className="font-semibold">Guided Learning Hours:</span>{" "}
              {course.overview.guidedLearningHours}
            </p>
          )}

          {course.overview?.schedule && (
            <p>
              <span className="font-semibold">Schedule:</span> {course.overview.schedule}
            </p>
          )}

          {course.overview?.deliveryModes?.length > 0 && (
            <p>
              <span className="font-semibold">Delivery:</span>{" "}
              {course.overview.deliveryModes.join(" / ")}
            </p>
          )}
        </div>

        {course.cardHighlights?.length > 0 && (
          <ul className="mt-5 ms-5 list-disc space-y-2 text-base text-gray-800">
            {course.cardHighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <Link
            prefetch={false}
            href={course.link}
            className="block w-full rounded-lg bg-quackred-800 px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-quackred-600"
          >
            View Bootcamp
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BootcampCourseCard;
