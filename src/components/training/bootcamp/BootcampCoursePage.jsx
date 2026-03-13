import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import BootcampOverviewCard from "./BootcampOverviewCard";
import BootcampSection from "./BootcampSection";
import BootcampBulletList from "./BootcampBulletList";
import BootcampTestimonials from "./BootcampTestimonials";
import BootcampFeatureList from "./BootcampFeatureList";
import BootcampApplyCard from "./BootcampApplyCard";

const BootcampCoursePage = ({ course }) => {
  if (!course) return null;

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

      <Section bgColor="max-w-screen-2xl mx-auto">
        <div className="container p-4 mx-auto max-w-7xl sm:p-6 lg:p-8">
          <div className="lg:flex gap-10">
            <div className="lg:w-2/3">
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
                <BootcampSection title="Career Opportunities">
                  <BootcampBulletList items={course.careerOpportunities} />
                  {course.careerNote && (
                    <p className="mt-4 text-lg leading-8 text-gray-900">{course.careerNote}</p>
                  )}
                </BootcampSection>
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
                  <BootcampFeatureList items={course.jobSupport} />
                </BootcampSection>
              )}

              {course.whyChoose?.length > 0 && (
                <BootcampSection title="Why Choose Quack Recruitment & Training?">
                  <BootcampFeatureList items={course.whyChoose} />
                </BootcampSection>
              )}

              {course.progressionItems?.length > 0 && (
                <BootcampSection title={course.progressionTitle || "Where Our Learners Now Work"}>
                  {course.progressionIntro && (
                    <p className="mb-4 text-lg leading-8 text-gray-900">
                      {course.progressionIntro}
                    </p>
                  )}
                  <BootcampBulletList items={course.progressionItems} />
                  {course.progressionOutro && (
                    <p className="mt-4 text-lg leading-8 text-gray-900">
                      {course.progressionOutro}
                    </p>
                  )}
                </BootcampSection>
              )}
            </div>

            <aside className="lg:w-1/3 mt-10 lg:mt-0 space-y-6">
              <BootcampOverviewCard overview={course.overview} authority={course.authority} />
              <BootcampApplyCard apply={course.apply} />
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default BootcampCoursePage;
