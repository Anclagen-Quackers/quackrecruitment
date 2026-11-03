"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoGallery from "../LogoLoop/LogoGallery";

const constructionProgrammes = [
  {
    authority: "Hampshire County Council",
    title: "Construction & Utilities Skills Bootcamp",
    path: "/skills-bootcamps/construction-utilities/hcc",
    image: "/images/banners/contruction-utilities-banner.jpg",
  },
];

const leadershipProgrammes = [
  {
    authority: "South Yorkshire Mayoral Combined Authority",
    title: "Recruitment Leadership Skills Bootcamp",
    path: "/skills-bootcamps/recruitment-leadership/symca",
    image: "/images/banners/leadership-banner.jpg",
  },
];

const retrofitProgrammes = [
  {
    authority: "West Midlands Combined Authority",
    title: "Retrofit Skills Bootcamp",
    path: "/skills-bootcamps/retrofit/wmca",
    image: "/images/banners/green-schemes-banner.jpg",
  },
  {
    authority: "Enterprise Cheshire & Warrington",
    title: "Retrofit Skills Bootcamp",
    path: "/skills-bootcamps/retrofit/enterprise-cheshire-warrington",
    image: "/images/banners/green-schemes-banner.jpg",
  },
  {
    authority: "Surrey County Council",
    title: "Retrofit Skills Bootcamp",
    path: "/skills-bootcamps/retrofit/surrey",
    image: "/images/banners/green-schemes-banner.jpg",
  },
];

const supportLinks = [
  {
    title: "Learner Support, SEND & Inclusion",
    description:
      "Find out about reasonable adjustments, SEND support and other help available to learners.",
    path: "/learner-support",
    icon: "groups",
  },
  {
    title: "Safeguarding",
    description: "Find out how we help keep learners safe and how to report a concern.",
    path: "/report-a-safeguarding-concern",
    icon: "shield",
  },
  {
    title: "Accessibility",
    description: "Request an alternative format or tell us about an accessibility barrier.",
    path: "/accessibility",
    icon: "accessibility_new",
  },
  {
    title: "Policies",
    description: "View our principal public-facing policies.",
    path: "/legal/policies",
    icon: "description",
  },
];

const footerNavigation = {
  General: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/ofsted", label: "Ofsted" },
    { path: "/contact", label: "Contact" },
  ],

  Recruitment: [
    { path: "/recruitment/listings", label: "Listings" },
    {
      path: "/recruitment/permanent",
      label: "Permanent Recruitment",
    },
    {
      path: "/recruitment/temporary",
      label: "Temporary Recruitment",
    },
    {
      path: "/recruitment/on-site-managed",
      label: "On-Site Managed Services",
    },
  ],

  Legal: [
    { path: "/legal", label: "Legal" },
    {
      path: "/legal/privacy-policy",
      label: "Privacy & Data Protection",
    },
  ],
};

const logins = [
  {
    path: "https://quackrecruitment.picsweb.co.uk/Authenticate/Account/Login?ReturnUrl=%2FWorkspace%2FHome",
    label: "Staff Login",
  },
  {
    path: "https://quackrecruitment.picsweb.co.uk/Authenticate/Account/Login",
    label: "Learner Login",
  },
];

function ProgrammeCard({ authority, title, path, image }) {
  return (
    <Link
      href={path}
      prefetch={false}
      className="
        group relative block min-h-[150px] overflow-hidden
        rounded-xl border border-zinc-700
        bg-zinc-100 text-zinc-950
        transition
        hover:border-quackred-500
        hover:shadow-md
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-quackred-500
      "
    >
      <img
        src={image}
        alt=""
        className="
          absolute inset-y-0 right-0
          h-full w-[58%]
          object-cover object-center
          transition-transform duration-300
          group-hover:scale-[1.02]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgb(244,244,245)_0%,rgb(244,244,245)_44%,rgba(244,244,245,0.98)_54%,rgba(244,244,245,0.72)_66%,rgba(244,244,245,0)_88%)]
        "
      />

      <div className="relative z-10 max-w-[68%] p-5">
        <p className="font-semibold leading-snug text-zinc-950">{authority}</p>

        <p className="mt-1 text-sm leading-5 text-zinc-600">{title}</p>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-quackred-800">
          View programme
          <span
            className="
              material-symbols-outlined text-lg
              transition-transform
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  );
}

function ProgrammeGroup({ title, icon, programmes }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-quackred-500" aria-hidden="true">
          {icon}
        </span>

        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.path} {...programme} />
        ))}
      </div>
    </div>
  );
}

function SupportCard({ title, description, path, icon }) {
  return (
    <Link
      href={path}
      prefetch={false}
      className="
        group flex items-center gap-4
        rounded-xl border border-zinc-800
        bg-zinc-900/70 p-4
        transition
        hover:border-quackred-600
        hover:bg-zinc-900
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-quackred-500
      "
    >
      <span
        className="material-symbols-outlined shrink-0 text-3xl text-quackred-500"
        aria-hidden="true"
      ></span>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-white flex items-center">
          <span
            className="material-symbols-outlined text-3xl me-2 text-quackred-500"
            aria-hidden="true"
          >
            {icon}
          </span>
          {title}
        </h3>

        <p className="mt-1 text-sm leading-5 text-zinc-400">{description}</p>
      </div>

      <span
        className="
          material-symbols-outlined
          shrink-0 text-quackred-400
          transition-transform
          group-hover:translate-x-1
        "
        aria-hidden="true"
      >
        arrow_forward
      </span>
    </Link>
  );
}

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const linkClass = (path) =>
    [
      "transition-colors hover:text-white hover:underline",
      pathname === path ? "text-white underline" : "text-zinc-300",
    ].join(" ");

  return (
    <footer className="mt-auto bg-zinc-950 text-white">
      <div className="mx-auto max-w-screen-2xl px-5 py-10 md:px-10">
        {/* Partners */}
        <section>
          <h2 className="mb-5 text-center text-xl font-bold">Partners & Affiliates</h2>

          <LogoGallery />
        </section>

        {/* Main footer content */}
        <section
          className="
            mt-8 grid gap-10
            border-t border-quackred-700
            pt-8
            xl:grid-cols-[1.75fr_1fr]
          "
        >
          {/* Current Skills Bootcamps */}
          <div>
            <div className="mb-4 flex items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  <span
                    className="material-symbols-outlined text-3xl me-2 text-quackred-500"
                    aria-hidden="true"
                  >
                    school
                  </span>
                  Current Skills Bootcamps
                </h2>

                <p className="mt-1 text-zinc-400">
                  Employer-led Skills Bootcamps designed around real labour-market demand.
                </p>
              </div>
            </div>
            <div className="my-4">
              <Link
                href="/skills-bootcamps"
                prefetch={false}
                className="
                  group inline-flex items-center gap-2
                  font-semibold text-quackred-400
                  transition hover:text-quackred-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-quackred-500
                "
              >
                View all Skills Bootcamps
                <span
                  className="
                    material-symbols-outlined text-xl
                    transition-transform
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left column */}
              <div className="space-y-8">
                <ProgrammeGroup
                  title="Construction & Utilities"
                  icon="construction"
                  programmes={constructionProgrammes}
                />

                <ProgrammeGroup
                  title="Recruitment Leadership"
                  icon="groups"
                  programmes={leadershipProgrammes}
                />
              </div>

              {/* Right column */}
              <ProgrammeGroup
                title="Retrofit & Green Skills"
                icon="eco"
                programmes={retrofitProgrammes}
              />
            </div>
          </div>

          {/* Learner support */}
          <aside className="xl:border-l xl:border-zinc-700 xl:pl-8">
            <div className="mb-6 flex items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  <span
                    className="material-symbols-outlined text-3xl me-2 text-quackred-500"
                    aria-hidden="true"
                  >
                    diversity_3
                  </span>
                  Need support before applying?
                </h2>

                <p className="mt-1 text-zinc-400">
                  Information and guidance to help you take the next step.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {supportLinks.map((item) => (
                <SupportCard key={item.path} {...item} />
              ))}
            </div>
          </aside>
        </section>

        {/* Standard footer navigation */}
        <section
          className="
            mt-8 grid gap-8
            border-t border-quackred-700
            py-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {Object.entries(footerNavigation).map(([heading, routes]) => (
            <div key={heading}>
              <h2 className="mb-4 text-lg font-bold">{heading}</h2>

              <ul className="space-y-2">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link href={route.path} prefetch={false} className={linkClass(route.path)}>
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-lg font-bold">Login</h2>

            <ul className="space-y-2">
              {logins.map((route) => (
                <li key={route.path}>
                  <a
                    href={route.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-zinc-300
                      transition-colors
                      hover:text-white
                      hover:underline
                    "
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Company details */}
        <section className="border-t border-quackred-700 pt-8 text-center">
          <img
            src="/logos/temp-logo-rt.png"
            alt="Quack Recruitment & Training"
            className="mx-auto mb-5 h-16"
          />

          <div className="space-y-1 text-sm text-zinc-400">
            <p>Quack Recruitment & Training Ltd. © {year}</p>

            <p>Business & Technology Centre, Bessemer Drive, Stevenage, SG1 2DX</p>

            <p>
              Company number:{" "}
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/11066952"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-semibold text-quackred-400
                  hover:text-quackred-300
                  hover:underline
                "
              >
                11066952
              </a>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
