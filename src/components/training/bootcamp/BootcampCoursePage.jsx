import BannerHalf from "@/components/Banner/BannerHalf";
import BootcampOverviewCard from "./BootcampOverviewCard";
import BootcampSection from "./BootcampSection";
import BootcampBulletList from "./BootcampBulletList";
import BootcampTestimonials from "./BootcampTestimonials";
import BootcampFeatureList from "./BootcampFeatureList";
import BootcampApplyCard from "./BootcampApplyCard";
import Link from "next/link";

const BootcampCoursePage = ({ course, allCourses = [] }) => {
  if (!course) return null;

  const otherCourses = allCourses.filter((item) => item.slug !== course.slug);
  return (
    <main className="flex flex-col bg-gray-50">
      {course.banner && (
        <BannerHalf
          title={course.banner.title}
          slogan={course.banner.slogan}
          imgSrc={course.banner.imgSrc}
          imgAlt={course.banner.imgAlt}
          position={course.banner.position || "center"}
        />
      )}
      <div className="bg-quackred-50 border-y border-quackred-200 py-4 text-center">
        <p className="text-md font-medium text-gray-900">
          Next cohort starting soon —
          <a
            href={course.apply.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-quackred-700 font-semibold hover:underline ml-1"
          >
            apply now to secure a place
          </a>
        </p>
      </div>
      <div className="max-w-screen-2xl px-4 py-24 mx-auto">
        <div className="lg:flex gap-10">
          <div className="lg:w-2/3 max-w-screen-2xl mx-auto">
            <BootcampSection title="Course Overview" bannerTitle={course.banner.title}>
              <div className="space-y-5">
                {course.hero?.intro?.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8 text-gray-900">
                    {paragraph}
                  </p>
                ))}
              </div>
            </BootcampSection>

            <BootcampSection title="What You Will Learn">
              {course.learningIntro && (
                <p className="mb-4 text-lg leading-8 text-gray-900">{course.learningIntro}</p>
              )}
              <BootcampBulletList items={course.learningPoints} />
              {course.learningOutro && (
                <p className="mt-4 text-lg leading-8 text-gray-900">{course.learningOutro}</p>
              )}
            </BootcampSection>

            {course.careerOpportunities?.length > 0 && (
              <>
                <BootcampSection title="Career Opportunities">
                  <BootcampBulletList items={course.careerOpportunities} />
                  {course.careerNote && (
                    <p className="mt-4 text-lg leading-8 text-gray-900">{course.careerNote}</p>
                  )}
                </BootcampSection>
                <div className="mt-10 lg:hidden">
                  <BootcampApplyCard apply={course.apply} />
                </div>
              </>
            )}

            {course.testimonials?.length > 0 && (
              <BootcampSection title="Learner Success Stories">
                <BootcampTestimonials items={course.testimonials} />
              </BootcampSection>
            )}

            {course.jobSupport?.length > 0 && (
              <BootcampSection title="How We Help You Get a Job">
                {course.jobSupportIntro && (
                  <p className="mb-6 text-lg leading-8 text-gray-900">{course.jobSupportIntro}</p>
                )}
                <BootcampFeatureList items={course.jobSupport} variant="grid" />
              </BootcampSection>
            )}

            {course.employerSection && (
              <BootcampSection title="Employer Engagement">
                <p className="text-lg leading-8 text-gray-900">
                  {course.employerSection.description}
                </p>
                <p className="my-4 text-lg leading-8 text-gray-900">
                  Employers may engage with the programme through:
                </p>
                <BootcampBulletList items={course.employerSection.details} />
              </BootcampSection>
            )}

            {course.whyChoose?.length > 0 && (
              <BootcampSection title="Why Choose Quack Recruitment & Training?">
                <BootcampFeatureList items={course.whyChoose} variant="grid" />
              </BootcampSection>
            )}

            {course.progressionItems?.length > 0 && (
              <BootcampSection title={course.progressionTitle || "Where Our Learners Now Work"}>
                {course.progressionIntro && (
                  <p className="mb-4 text-lg leading-8 text-gray-900">{course.progressionIntro}</p>
                )}
                <BootcampBulletList items={course.progressionItems} />
                {course.progressionOutro && (
                  <p className="mt-4 text-lg leading-8 text-gray-900">{course.progressionOutro}</p>
                )}
              </BootcampSection>
            )}
            <div className="hidden lg:block px-10">
              <BootcampApplyCard apply={course.apply} />
            </div>
            {otherCourses.length > 0 && (
              <section className="mt-16 border-t border-quackred-100 pt-12">
                <h3 className="text-3xl font-bold mb-4">Other Skills Bootcamps Available</h3>
                <p className="mb-8 max-w-3xl text-lg leading-8 text-gray-900">
                  Explore our other Skills Bootcamp programmes designed to support different career
                  pathways.
                </p>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {otherCourses.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.link}
                      className="group rounded-2xl border border-quackred-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-quackred-700">
                        Skills Bootcamp
                      </p>

                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-quackred-800">
                        {item.title}
                      </h4>

                      {item.authority?.name && (
                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {item.authority.name}
                        </p>
                      )}

                      {item.cardDescription && (
                        <p className="mt-4 text-base leading-7 text-gray-800">
                          {item.cardDescription}
                        </p>
                      )}

                      <span className="mt-5 inline-flex text-sm font-semibold text-quackred-700 group-hover:underline">
                        View Skills Bootcamp →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:w-1/3 mt-10 lg:mt-0 space-y-6">
            <BootcampOverviewCard overview={course.overview} authority={course.authority} />
            <BootcampApplyCard apply={course.apply} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default BootcampCoursePage;
