import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";
import BootcampCourseCard from "@/components/training/bootcamp/BootcampCourseCard";
import { bootcampCourseGroups } from "@/components/data/training/bootcampCourses";

const retrofitHighlights = [
  "Fully funded Skills Bootcamps",
  "Face-to-face or live remote delivery",
  "Employer-led progression support",
];

const retrofitOutcomes = [
  "Retrofit Installer",
  "Loft Insulation Installer",
  "Cavity Wall Installer",
  "Construction Operative",
  "Energy efficiency support roles",
  "Progression into wider green construction pathways",
];

export const metadata = {
  title: "Retrofit Training | Quack Recruitment & Training",
  description:
    "Explore Quack Recruitment & Training retrofit Skills Bootcamps and start your journey into retrofit, insulation, and green construction.",
};

function RetrofitPage() {
  const retrofitCourses = bootcampCourseGroups.retrofit;

  return (
    <main className="flex flex-col">
      <BannerHalf
        title="Retrofit Training"
        slogan="Build practical skills for a growing green construction sector."
        imgSrc="/images/banners/retrofit-banner.jpg"
        imgAlt="Colourful houses on a street"
        position="center"
      />

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.7fr] lg:items-center">
            <div>
              <h2 className="mb-8 text-3xl font-semibold lg:text-5xl">
                Start your journey into retrofit and green construction
              </h2>
              <p className="max-w-4xl text-lg leading-8 text-gray-800">
                Quack Recruitment & Training offers funded Retrofit Skills Bootcamps designed to
                help learners build practical knowledge, understand energy efficiency, and progress
                into real roles within a growing sector.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-xl lg:mt-10 max-w-xl mx-auto">
              <h3 className="mb-4 text-2xl font-bold">At a glance</h3>
              <ul className="space-y-3">
                {retrofitHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-gray-800"
                  >
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-quackred-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>{" "}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href="#retrofit-bootcamps"
                  className="rounded-lg bg-quackred-800 px-6 py-3 text-base font-semibold text-white transition hover:bg-quackred-600"
                >
                  Explore Bootcamps
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </Section>

      <Section bgColor="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-6 text-3xl font-semibold lg:text-4xl">What is Retrofit?</h2>
              <p className="mb-5 text-lg leading-8 text-gray-800">
                Retrofit is the process of improving existing homes and buildings so they are more
                energy efficient, sustainable, and fit for the future.
              </p>
              <p className="mb-5 text-lg leading-8 text-gray-800">
                As the UK continues working toward Net Zero targets, demand for skilled retrofit
                workers continues to grow across insulation, installation, compliance, and wider
                energy-efficiency work.
              </p>
              <p className="text-lg leading-8 text-gray-800">
                Our funded Skills Bootcamps are designed to help learners build industry-relevant
                knowledge, practical understanding, and clear routes into employment.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 ">
              <h3 className="mb-5 text-2xl font-bold text-quackred-800">Why retrofit now?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Net Zero targets</h4>
                  <p className="mt-1 text-base leading-7 text-gray-800">
                    Existing homes and buildings need upgrades to improve energy efficiency and
                    reduce emissions.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Growing demand</h4>
                  <p className="mt-1 text-base leading-7 text-gray-800">
                    Retrofit work continues to grow as more housing stock is improved across the UK.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Practical opportunities</h4>
                  <p className="mt-1 text-base leading-7 text-gray-800">
                    Training can lead into hands-on construction, insulation, and wider
                    energy-efficiency roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-semibold lg:text-4xl">
            Why train with Quack?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-quackred-100 bg-quackred-50 p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold">Flexible delivery</h3>
              <p className="text-base leading-7 text-gray-800">
                Training can be delivered face-to-face or remotely through live tutor-led sessions.
              </p>{" "}
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-quackred-100 text-quackred-800">
                ✓
              </div>
            </div>

            <div className="rounded-2xl border border-quackred-100 bg-quackred-50 p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold">Career-focused support</h3>
              <p className="text-base leading-7 text-gray-800">
                Learners receive CV support, interview preparation, and guidance on progressing into
                relevant roles.
              </p>
            </div>

            <div className="rounded-2xl border border-quackred-100 bg-quackred-50 p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold">Employer engagement</h3>
              <p className="text-base leading-7 text-gray-800">
                We work with employer partners who support learner progression through insight
                sessions and recruitment opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-quackred-100 bg-quackred-50 p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold">Funded training</h3>
              <p className="text-base leading-7 text-gray-800">
                Skills Bootcamps are designed to help learners access focused, career-relevant
                training with clear progression routes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold lg:text-4xl">
            Where could this lead?
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-gray-800">
            Retrofit training can open the door to practical site-based roles and wider
            opportunities across sustainable construction and energy efficiency work.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retrofitOutcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-200 border-t-4 border-quackred-700 hover:-translate-y-1 hover:shadow-md
transition"
              >
                <p className="text-base font-semibold leading-7 text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div id="retrofit-bootcamps" className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-semibold lg:text-4xl">
            Available Retrofit Skills Bootcamps
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-gray-800">
            Explore the current funded retrofit programmes available through our partner
            authorities.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {retrofitCourses.map((course) => (
              <BootcampCourseCard key={course?.slug} course={course} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

export default RetrofitPage;
