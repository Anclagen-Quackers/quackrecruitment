import BannerHalf from "@/components/Banner/BannerHalf";
import Section from "@/components/Sections/Section";

export const metadata = {
  title: "Retrofit | Quack Recruitment & Training",
  description: "Enhance your numeracy skills with Quack Recruitment & Training's free courses, designed to improve your daily life and career prospects.",
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
          <h2 className="text-3xl text-center mb-10 font-semibold">What is Retrofit?</h2>
          <p className=" text-lg max-w-3xl mx-auto mb-8">Retrofit refers to upgrading existing buildings to improve their energy efficiency, reduce carbon footprints, and ensure sustainability. </p>
          <p className=" text-lg max-w-3xl mx-auto mb-8">
            This is essential for reducing energy consumption, lowering costs, and meeting climate goals like net-zero emissions. Our Pathways to Retrofit Excellence programme is 100% free for
            eligible learners and helps equip you with the skills to meet the growing demand for skilled professionals in retrofit roles.
          </p>
          <div className="flex flex-wrap justify-center">
            <img src="/footer/West_Midlands_Combined_Authority_logo.svg.png" alt="WMCA logo" className="w-1/3 md:w-1/4 lg:w-1/5 transform hover:scale-105 transition-transform duration-200" />
          </div>
        </Section>
        <Section bgColor="bg-white">
          <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full px-8 lg:w-1/2">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h2 className="mb-8 text-3xl font-bold lg:text-4xl font-heading">Programme Overview</h2>
                  <p className="mb-2 leading-loose text-gray-500">
                    <b className="text-gray-800">Pathways to Retrofit Excellence</b> provides two <b className="text-gray-800">nationally recognised qualifications</b> at no cost to you:
                  </p>
                  <ul className="list-disc pl-8 mb-3 font-semibold text-gray-600">
                    <li className="pt-1 leading-loose">Level 2 Award in Retrofit Principles</li>
                    <li className="pt-1 leading-loose">Level 3 Award in Assessing Competence in the Work Environment</li>
                  </ul>
                  <p className="mb-6 leading-loose text-gray-500">
                    The course covers both theoretical knowledge and <b className="text-gray-800">hands-on practical experience</b>, including retrofit techniques like insulation fitting,
                    air-tightness testing, and renewable energy integration (e.g., solar panels and heat pumps). You will also gain essential knowledge of the{" "}
                    <b className="text-gray-800">PAS 2035 compliance framework</b>, which is vital for any retrofit project.
                  </p>
                </div>
              </div>
              {/* */}
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="mb-4 text-xl font-bold lg:text-2xl font-heading">Key Benefits of Retrofit Training</h3>
                <ul className="list-disc pl-8 mb-3 text-gray-600">
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Free Training:</b> This course is fully funded for eligible learners—no fees required.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">High Demand for Retrofit Professionals:</b> As the UK strives to meet its <b className="text-gray-800">net-zero targets</b>, there is a growing need
                    for skilled Retrofit Assessors, Coordinators, and Advisors.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Career Progression and Earning Potential:</b>
                  </li>
                  <ul className="list-disc pl-8 mb-3 text-gray-600">
                    <li className="pt-1 leading-loose">
                      Entry-level <b className="text-gray-800">Retrofit Technicians</b> can earn around <b className="text-gray-800">£30,000</b> per year.
                    </li>
                    <li className="pt-1 leading-loose">
                      <b className="text-gray-800">Retrofit Assessors</b> and <b className="text-gray-800">Coordinators</b> can earn between <b className="text-gray-800">£35,000</b> to{" "}
                      <b className="text-gray-800">£45,000 </b>annually, with opportunities for higher earnings as you gain experience.
                    </li>
                    <li className="pt-1 leading-loose">
                      <b className="text-gray-800">Retrofit Project Managers</b> can earn <b className="text-gray-800">£50,000</b> or more per year, managing large-scale retrofit projects.
                    </li>
                  </ul>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Sustainable Future:</b> Contribute to a greener future by helping reduce carbon emissions and energy consumption in buildings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          <div className="container p-4 mx-auto bg-gray-50 max-w-7xl sm:p-6 lg:p-8">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full px-8 lg:w-1/2">
                <h2 className="mb-8 text-3xl font-bold lg:text-4xl font-heading">What You Will Learn</h2>
                <ul className="list-disc pl-8 mb-3 text-gray-600">
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Energy Efficiency & Environmental Sustainability:</b> Understand the principles of energy efficiency, the importance of retrofitting, and the role of
                    the retrofit sector in achieving net-zero targets.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Practical Retrofit Techniques:</b> Learn how to install insulation, test airtightness, and integrate renewable energy systems like solar panels and
                    heat pumps.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">PAS 2035 Framework:</b> Gain knowledge of the compliance standards required for domestic retrofitting, including the roles of Retrofit Coordinators,
                    Assessors, and Advisors.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Assessment & Coordination of Retrofit Projects:</b> Learn how to assess retrofit projects in real-world environments, ensuring compliance with
                    regulations and best practices.
                  </li>
                </ul>
              </div>
              <div className="w-full px-8 lg:w-1/2">
                <h3 className="mb-4 text-xl font-bold lg:text-2xl font-heading">Eligibility Criteria</h3>
                <ul className="list-disc pl-8 mb-3 text-gray-600">
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Age:</b> 19 years or older
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Location:</b> Must reside within the West Midlands Combined Authority (WMCA) region.
                  </li>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Employment Status:</b> Open to both employed and unemployed individuals.
                  </li>
                  <ul className="list-disc pl-8 mb-3 text-gray-600">
                    <li className="pt-1 leading-loose">
                      <b className="text-gray-800">Unemployed learners:</b> Guaranteed job interview for a genuine retrofit vacancy.
                    </li>
                    <li className="pt-1 leading-loose">
                      <b className="text-gray-800">Employed learners:</b> Opportunities for career changes or upskilling in retrofit roles.
                    </li>
                  </ul>
                  <li className="pt-1 leading-loose">
                    <b className="text-gray-800">Target Groups:</b> Women and ethnic minorities who are underrepresented in the retrofit sector and those currently unemployed or underemployed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-white">
          <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">Hear from Our Learners</h2>
            <div className="flex flex-wrap -mx-8">
              <div className="w-full px-8 lg:w-1/3">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h3 className="mb-8 text-2xl font-bold lg:text-3xl font-heading">Sarah Thompson – Retrofit Assessor</h3>
                  <p className="mb-6 leading-loose text-gray-500 quote">
                    Before joining the Pathways to Retrofit Excellence programme, I was working part-time in retail with little room for growth. Since completing the course, I've secured a full-time
                    role as a <b className="text-gray-800"> Retrofit Assessor</b> and my salary has increased from £20,000 to £35,000 per year. The practical skills I gained were invaluable, and best
                    of all, the course was completely free!
                  </p>
                </div>
              </div>
              <div className="w-full px-8 lg:w-1/3">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h3 className="mb-8 text-2xl font-bold lg:text-3xl font-heading">Mohammed Fayaz – Retrofit Coordinator</h3>
                  <p className="mb-6 leading-loose text-gray-500 quote">
                    I was in construction but wanted more career progression. After completing this programme, I became a <b className="text-gray-800">Retrofit Coordinator</b>, and my salary jumped
                    from £25,000 to £42,000 annually. The course gave me the knowledge and confidence to move into a leadership role in retrofit, and it didn't cost me a penny!
                  </p>
                </div>
              </div>
              <div className="w-full px-8 lg:w-1/3">
                <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                  <h3 className="mb-8 text-2xl font-bold lg:text-3xl font-heading">Emily Jones – Retrofit Advisor</h3>
                  <p className="mb-6 leading-loose text-gray-500 quote">
                    The Pathways to Retrofit Excellence programme was perfect for me as I returned to work after a career break. I'm now a <b className="text-gray-800">Retrofit Advisor</b>, earning
                    £33,000 per year, and I'm proud to be making a real difference in reducing energy consumption and improving building performance. The fact that the course was free made it even
                    more accessible!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section bgColor="bg-gray-50">
          {/* How to Apply
To apply for the Pathways to Retrofit Excellence programme, [Click Here to Apply – This to take through to a new enrolment page] or get in touch with our team for more details.

Our staff will guide you through the application process and answer any questions you have.
________________________________________
Start Your Retrofit Career Today – 100% Free!
Take the first step towards a rewarding career in the growing retrofit industry. Learn new skills, secure exciting job opportunities, and help make a positive impact on the environment—all for free. Plus, earn £35,000 - £50,000+ annually in your new role in retrofit. Apply now!
________________________________________
Contact Us
For more information, get in touch with us at 0333 577 0036 or follow us on social media for updates. */}

          <div className="container p-4 mx-auto bg-gray-50 max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">How to Apply</h2>
            <p className=" text-lg max-w-3xl mx-auto mb-8">
              To apply for the Pathways to Retrofit Excellence programme,{" "}
              <a href="#" className="text-quackred-900 font-semibold hover:text-quackred-800">
                Click Here to Apply
              </a>{" "}
              or get in touch with our team for more details.
            </p>
            <p className=" text-lg max-w-3xl mx-auto mb-8">Our staff will guide you through the application process and answer any questions you have.</p>
          </div>

          <div className="container p-4 mx-auto bg-gray-50 max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">Start Your Retrofit Career Today – 100% Free!</h2>
            <p className=" text-lg max-w-3xl mx-auto mb-8">
              Take the first step towards a rewarding career in the growing retrofit industry. Learn new skills, secure exciting job opportunities, and help make a positive impact on the
              environment—all for free. Plus, earn £35,000 - £50,000+ annually in your new role in retrofit. Apply now!
            </p>
          </div>

          <div className="container p-4 mx-auto bg-gray-50 max-w-7xl sm:p-6 lg:p-8">
            <h2 className="text-3xl text-center mb-10 font-semibold">Contact Us</h2>
            <p className=" text-lg max-w-3xl mx-auto mb-8">For more information, get in touch with us at 0333 577 0036 or follow us on social media for updates.</p>
          </div>
        </Section>
        <Section bgColor="bg-white">
          <h2 className="text-2xl font-semibold text-center my-8">Partners and Providers</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <img src="/footer/West_Midlands_Combined_Authority_logo.svg.png" alt="... Logo" className="w-1/3 md:w-1/4 lg:w-1/5 transform hover:scale-105 transition-transform duration-200" />
            <div className="text-center md:text-left max-w-xl">
              <p className="text-lg mb-4">....</p>
              <a href="#" target="_blank" rel="" className="text-quackred-900 font-semibold hover:text-quackred-800">
                TBD
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default Retrofit;
