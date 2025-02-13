import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Retrofit | Quack Recruitment & Training",
  description:
    "Transform your future with free retrofit training! Learn about the Pathways to Retrofit Excellence programme and how it can help you build a rewarding career in the growing retrofit industry.",
  keywords: ["Quack Group", "Quack Recruitment", "Multiply Training Courses"],
  authors: [{ name: "Alexander Barrett", url: "https://github.com/Anclagen" }],
};

function Retrofit() {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <main className="flex flex-col">
        <BannerHalf title="Retrofit" slogan="Transform Your Future with Free Retrofit Training!" imgSrc="/images/banners/retrofit-banner.jpg" imgAlt="Colourful houses on a street" position="center" />
        <Section bgColor="bg-gray-50">
          <h2 className="text-3xl  lg:text-4xl text-center mb-10 font-semibold">What is Retrofit?</h2>
          <p className="text-gray-800  text-lg max-w-3xl mx-auto mb-8">
            Retrofit refers to upgrading existing buildings to improve their energy efficiency, reduce carbon footprints, and ensure sustainability. This is essential for reducing energy consumption,
            lowering costs, and meeting climate goals like net-zero emissions.{" "}
          </p>
          <h3 className="text-xl text-center mb-10 font-semibold">Start Your Career in Construction or Retrofit </h3>
          <p className="text-gray-800  text-lg max-w-3xl mx-auto mb-8">
            Our <b className="text-gray-900">fully funded Skills Bootcamp</b>, in partnership with <b className="text-gray-900 ">West Midlands Combined Authority (WMCA)</b>, provides you with the
            qualifications, skills, and job opportunities to secure a high-paying role in the retrofit and construction industry.
          </p>
          <p className="text-gray-800  text-lg max-w-3xl mx-auto mb-8">
            We were recently featured in the <b className="text-gray-900">Express & Star</b> for securing a £1.5 million contract to upskill local workers and support the growing demand for skilled
            professionals in construction and retrofit. Read more here:{" "}
            <a
              href="https://www.expressandstar.com/your-world/2025/02/05/quack-recruitment-and-training-secures-15m-contract-to-upskill-west-midlands-workforce/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quackred-900 font-semibold hover:text-quackred-800"
            >
              👉 Express & Star
            </a>
          </p>

          <div className="flex flex-wrap justify-center">
            <img src="/footer/West_Midlands_Combined_Authority_logo.svg.png" alt="WMCA logo" className="w-1/3 md:w-1/4 lg:w-1/5 transform hover:scale-105 transition-transform duration-200" />
          </div>
        </Section>
        <Section bgColor="bg-white">
          <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:px-8 lg:w-1/2">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h2 className="mb-8 text-3xl font-semibold lg:text-4xl font-heading">Why Join Our Skills Bootcamp?</h2>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✅ <b className="text-gray-900 ">Completely FREE training</b> - no cost to you!
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✅ Gain two <b className="text-gray-900 ">industry-recognised qualifications:</b>
                  </p>
                  <ul className="list-disc pl-8 mb-3 font-semibold text-gray-800 ">
                    <li className="pt-1 leading-loose">Level 2 Award in Retrofit Principles</li>
                    <li className="pt-1 leading-loose">Level 3 Award in Assessing Competence in the Work Environment</li>
                  </ul>

                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✅ Develop hands-on <b className="text-gray-900 ">practical skills</b> in <b className="text-gray-900 ">insulation, PAS 2035, energy efficiency & more</b>
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✅ Access <b className="text-gray-900 ">exclusive job opportunities</b> with top employers
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✅ Fast-track your career in a <b className="text-gray-900 ">high-demand industry</b>
                  </p>
                </div>
              </div>
              {/* */}
              <div className="w-full lg:px-8 lg:w-1/2">
                <h2 className="mb-8 text-3xl font-semibold lg:text-4xl font-heading">What You Will Learn</h2>
                <p className="mb-2 leading-loose text-gray-800 ">Our 3-week intensive programme includes:</p>
                <ul className=" mb-3 text-gray-800 ">
                  <li className="pt-1 leading-loose">
                    🏗 <b className="text-gray-900 ">Introduction to Retrofit & Construction:</b> Energy efficiency, sustainability & net-zero goals
                  </li>
                  <li className="pt-1 leading-loose">
                    🔍 <b className="text-gray-900 ">Building Assessments & Materials:</b> Understanding defects, insulation, and U-values
                  </li>
                  <li className="pt-1 leading-loose">
                    ⚡ <b className="text-gray-900 ">Health & Safety in Construction:</b> Risk assessments, PPE, and manual handling
                  </li>
                  <li className="pt-1 leading-loose">
                    📜 <b className="text-gray-900 ">PAS 2035 & Industry Standards:</b> Compliance & best practices
                  </li>
                  <li className="pt-1 leading-loose">
                    🔨 <b className="text-gray-900 ">Practical Retrofit & Installation:</b> Hands-on experience with real materials
                  </li>
                </ul>
                <p className="mb-6 leading-loose text-gray-800 ">
                  📌<b className="text-gray-900 ">PLUS:</b> Training to become a <b className="text-gray-900 ">Retrofit Assessor, Coordinator, or Installer</b> - with{" "}
                  <b className="text-gray-900 ">job interviews available upon completion!</b>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-6">
              <a
                href="https://qrt.magn8.co.uk/online/online-contact-details.php?ls=3"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 bg-quackred-900 hover:bg-quackred-600 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Apply Now
              </a>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <div className="container p-4 mx-auto max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">Career Opportunities After the Course</h2>
            <div className="flex flex-wrap">
              <div className="w-full lg:px-8 lg:w-1/2">
                <p className="mb-2 leading-loose text-gray-800 ">
                  🛠 <b className="text-gray-900 ">Blue-Collar Roles:</b>
                </p>
                <ul className="list-disc pl-8 mb-3 font-semibold text-gray-800 ">
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Retrofit Installer</b> (Insulation, ventilation, glazing, and heating upgrades){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Construction Labourer</b> (Assisting with site work and installations){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Bricklayer</b> (Building and repairing structures in retrofit projects){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Electrician (Retrofit Focused)</b> (Upgrading energy-efficient systems){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Plumber</b> (Installing and maintaining water-efficient systems){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Roofing Specialist</b> (Working on energy-efficient roofing solutions){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Window & Door Fitter</b> (Installing energy-efficient glazing){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Cavity Wall & Loft Insulation Installer</b>{" "}
                  </li>
                </ul>
              </div>
              <div className="w-full lg:px-8 lg:w-1/2">
                <p className="mb-2 leading-loose text-gray-800 ">
                  🏗 <b className="text-gray-900 ">Technical & Specialist Roles:</b>
                </p>
                <ul className="list-disc pl-6 mb-3 font-semibold text-gray-800 ">
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Retrofit Assessor</b> (Surveying buildings and recommending energy-efficient improvements){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Retrofit Coordinator</b> (Managing retrofit projects and ensuring compliance){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Building Fabric Specialist</b> (Focusing on structural energy efficiency){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Site Supervisor</b> (Overseeing construction and retrofit projects){" "}
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-900 ">Energy Efficiency Advisor</b> (Providing consultation on sustainability improvements){" "}
                  </li>
                </ul>

                <p className="mb-2 leading-loose text-gray-800 ">
                  🚀 <b className="text-gray-900 ">Progression Opportunities:</b>
                </p>
                <ul className="list-disc pl-6 mb-3 font-semibold text-gray-800 ">
                  <li className="pt-1 leading-loose">
                    Further qualifications to become a <b className="text-gray-900 ">Retrofit Designer, Energy Consultant, or PAS 2035 Specialist</b>{" "}
                  </li>
                  <li className="pt-1 leading-loose">Advanced roles in sustainable construction and net-zero development </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-white">
          <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:px-8 lg:w-1/2">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h2 className="text-3xl text-center mb-10 font-semibold">Who Can Apply?</h2>

                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✔ <b className="text-gray-900 ">Aged 19+</b>
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✔ <b className="text-gray-900 ">Live in the West Midlands area</b>
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✔ <b className="text-gray-900 ">Looking to enter or progress in construction, retrofit, or sustainability</b>
                  </p>

                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✔ <b className="text-gray-900 ">Ready to start a new career in a high-growth sector</b>
                  </p>
                  <p className="mb-2 leading-loose text-gray-800 ">
                    ✔ <b className="text-gray-900 ">HAVE NOT completed a Skills Bootcamp in the last academic year</b>
                  </p>
                </div>
              </div>
              <div className="w-full lg:px-8 lg:w-1/2">
                <h2 className="text-3xl text-center mb-10 font-semibold">What Happens After the Course?</h2>

                <p className="mb-2 leading-loose text-gray-800 ">
                  🎯 <b className="text-gray-900 ">Guaranteed interviews with top employers</b>
                </p>
                <p className="mb-2 leading-loose text-gray-800 ">
                  📢 <b className="text-gray-900 ">Access to job vacancies in construction & retrofit</b>
                </p>

                <p className="mb-2 leading-loose text-gray-800 ">
                  📈 <b className="text-gray-900 ">Progression routes to higher qualifications & career advancement</b>
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <div className="container p-4 mx-auto bg-gray-50 max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">Apply Now – Limited Spaces Available!</h2>
            <p className="text-gray-800 text-center text-lg max-w-3xl mx-auto mb-8">
              📩 <b className="text-gray-900 ">Secure your place today </b> and take the first step towards a high-paying career in retrofit & construction!
            </p>
            <div className="flex flex-wrap justify-center">
              <a
                href="https://qrt.magn8.co.uk/online/online-contact-details.php?ls=3"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 bg-quackred-900 hover:bg-quackred-600 focus:ring-quackred-500 focus:ring-offset-quackred-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Apply Now
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default Retrofit;
