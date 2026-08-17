import {
  retrofitEcw,
  retrofitSurrey,
  retrofitWmca,
  sharedPolicies,
} from "./retrofitBootCampCourses";

export const bootcampCourses = {
  retrofitEcw,
  retrofitSurrey,
  retrofitWmca,
  recruitmentSymca: {
    slug: "recruitment-symca",
    category: "recruitment",
    title: "Pathway to Recruitment Leadership",
    banner: {
      title: "Pathway to Recruitment Leadership (SYMCA)",
      slogan: "Build practical recruitment and office skills with career-focused support.",
      imgSrc: "/images/interview-1.jpg",
      imgAlt: "Professional office environment",
      position: "top",
    },
    authority: {
      name: "South Yorkshire Mayoral Combined Authority (SYMCA)",
      shortName: "SYMCA",
      strapline: "Skills Bootcamp",
      logo: "/footer/SYMCA.jpg",
      logoAlt: "South Yorkshire Mayoral Combined Authority logo",
    },
    cardDescription:
      "A funded Skills Bootcamp designed to help learners build practical recruitment and office-based skills with clear progression into employment.",
    cardHighlights: [
      "4-week intensive course",
      "Remote or face-to-face delivery",
      "Employer insight and progression support",
    ],
    hero: {
      eyebrow: "Skills Bootcamp",
      heading: "Start a Career in Recruitment",
      intro: [
        "Quack Recruitment & Training delivers the Pathway to Recruitment Leadership Skills Bootcamp in partnership with the South Yorkshire Mayoral Combined Authority (SYMCA).",
        "This programme prepares learners for careers in recruitment, sales and professional office roles.",
      ],
    },
    overview: {
      course: "Pathway to Recruitment Leadership",
      duration: "4 Weeks",
      guidedLearningHours: "100 GLH",
      schedule: "Monday – Friday | 9:00am – 3:30pm",
      deliveryModes: ["Face-to-face", "Remotely through live tutor-led sessions"],
      eligibility: [
        "Aged 19+",
        "Resident in the relevant Combined Authority area",
        "Have the right to work in the UK",
        "Interested in starting or progressing in the sector",
      ],
    },
    learningIntro: "The Skills Bootcamp covers the full recruitment process including:",
    learningPoints: [
      "the recruitment lifecycle",
      "candidate sourcing and job advertising",
      "CV screening and interview techniques",
      "client relationship management",
      "recruitment compliance and right-to-work checks",
      "CRM systems and recruitment software",
      "sales and negotiation skills",
    ],
    learningOutro:
      "Learners complete practical recruitment simulations designed to reflect real industry scenarios.",
    testimonials: [
      {
        name: "Kieron H",
        role: "Recruitment Consultant",
        quote:
          "I joined the Skills Bootcamp because I wanted to move into a professional office role. The course covered the full recruitment process and included practical exercises like cold calling and interviewing. With the help of the tutors I secured an interview with a recruitment agency and started work as a Recruitment Consultant shortly after finishing the programme.",
      },
      {
        name: "David L",
        role: "Recruitment Resourcer",
        quote:
          "The training felt very practical and realistic. We practised sourcing candidates and screening CVs which helped me understand the industry. The careers support team helped me apply for roles and I secured a position as a Recruitment Resourcer within weeks of completing the Skills Bootcamp.",
      },
      {
        name: "Rosemary A",
        role: "Talent Acquisition Assistant",
        quote:
          "I was working in retail and wanted to move into an office role. The Skills Bootcamp gave me the skills and confidence needed to work in recruitment. With support from the tutors I secured an interview with a recruitment agency and was offered a role as a Talent Acquisition Assistant.",
      },
    ],
    jobSupportIntro:
      "Our Skills Bootcamps are designed with a clear objective — helping learners move into employment or progress in their careers.",
    jobSupport: [
      {
        title: "Career Guidance",
        description:
          "Learners receive guidance to identify suitable career pathways within recruitment.",
      },
      {
        title: "CV Development",
        description: "We support learners in developing professional CVs tailored to the industry.",
      },
      {
        title: "Interview Preparation",
        description:
          "Learners receive interview coaching including mock interviews and guidance on employer expectations.",
      },
      {
        title: "Job Application Support",
        description:
          "Our team helps learners identify suitable vacancies and complete job applications.",
      },
      {
        title: "Post-Course Progression Support",
        description:
          "Support continues after training as we assist learners in securing employment opportunities.",
      },
    ],
    employerSection: {
      title: "Employer Engagement",
      description:
        "We work with a network of employers who support our programmes through insight sessions, industry engagement, and recruitment opportunities for learners.",
      details: [
        "Industry insight sessions and guest talks",
        "Discussions about current vacancies and career pathways",
        "Recruitment opportunities for learners completing the programme",
      ],
    },
    whyChoose: [
      {
        title: "Industry-Relevant Training",
        description: "Our programmes are designed around real employer needs.",
      },
      {
        title: "Industry Connections",
        description:
          "Our programmes are informed by industry needs and designed to prepare learners for real workplace environments.",
      },
      {
        title: "Flexible Learning",
        description: "Training is available face-to-face or remotely.",
      },
      {
        title: "Intensive Career-Focused Training",
        description:
          "Our Skills Bootcamps are short, focused programmes designed to help learners quickly develop employable skills.",
      },
      {
        title: "Proven Outcomes",
        description:
          "Across our Skills Bootcamp programmes around 80% of learners progress into employment or career advancement.",
      },
    ],
    progressionTitle: "Where Our Learners Now Work",
    progressionIntro:
      "Learners who have completed our programmes have progressed into roles such as:",
    progressionItems: [
      "Recruitment Consultant",
      "Recruitment Resourcer",
      "Talent Acquisition Assistant",
    ],
    progressionOutro:
      "These outcomes demonstrate the progression routes available to learners who complete the programme.",
    apply: {
      heading: "Apply for the Skills Bootcamp",
      text: "Start your journey into recruitment.",
      href: "https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9",
    },
    policies: [
      // {
      //   name: "Learner Handbook WMCA",
      //   description: "Pathway to Retrofit Excellence WMCA Learner Handbook v2.0",
      //   link: "/docs/Quack_Recruitment_Learner_Handbook_WMCA_v.2.pdf",
      // },
      ...sharedPolicies,
    ],
    link: "/skills-bootcamps/recruitment-leadership/symca",
  },
  constructionUtilitiesHcc: {
    id: "constructionUtilitiesHcc",
    slug: "hampshire-construction-utilities",
    category: "construction",
    title: "Pathway to Construction Utilities",

    banner: {
      title: "Pathway to Construction Utilities (HCC)",
      slogan:
        "Gain practical construction, civils and utilities skills with industry-recognised qualifications and employer-focused support.",
      imgSrc: "/images/banners/construction-banner.jpg",
      imgAlt: "Construction worker wearing PPE on a building site",
      position: "top",
    },

    authority: {
      name: "Hampshire County Council",
      shortName: "HCC",
      strapline: "Hampshire County Council Skills Bootcamp",
      logo: "/images/hcc-logo-colour.gif",
      logoAlt: "Hampshire County Council logo",
    },

    cardDescription:
      "A funded Skills Bootcamp providing practical construction, civils and utilities training with industry-recognised qualifications and progression support.",

    cardHighlights: ["15 structured sessions", "82 guided learning hours", "Face-to-face delivery"],

    hero: {
      eyebrow: "Skills Bootcamp",
      heading: "Pathway to Construction Utilities – Hampshire County Council Skills Bootcamp",
      intro: [
        "The Pathway to Construction Utilities Skills Bootcamp is delivered by Quack Recruitment & Training in partnership with Hampshire County Council.",
        "The programme is designed to help address skills shortages across the construction, civils and utilities sectors in Hampshire while supporting learners to progress into sustained employment.",
        "Learners develop core site-readiness knowledge, health and safety awareness, practical construction skills and the employability behaviours required by employers.",
      ],
    },

    overview: {
      course: "Pathway to Construction Utilities",
      sector: "Construction / Civils / Utilities",
      duration: "15 structured sessions",
      guidedLearningHours: "82 GLH",
      schedule: "97.5 total programme hours",
      deliveryModes: ["Face-to-face"],
      deliveryNote:
        "The programme includes 82 guided learning hours and 15.5 hours of employability activity.",
      eligibility: [
        "Aged 19+",
        "Resident in Hampshire",
        "Have the right to work in the UK",
        "Interested in starting or progressing in construction, civils or utilities",
      ],
    },

    programmeStructure: [
      {
        label: "Structured Sessions",
        value: "15",
      },
      {
        label: "Total Programme Hours",
        value: "97.5",
      },
      {
        label: "Guided Learning Hours",
        value: "82 GLH",
      },
      {
        label: "Employability Hours",
        value: "15.5",
      },
    ],

    learningTitle: "Programme Content",

    learningIntro:
      "Learners develop practical site-readiness, construction and employability skills including:",

    learningPoints: [
      "Health and safety awareness",
      "COSHH and manual handling",
      "Construction site procedures",
      "Practical construction skills",
      "Safe use of tools and materials",
      "Professional workplace behaviours",
      "Communication and teamwork",
      "Reliability and punctuality",
    ],

    qualifications: [
      "Highfield Level 1 Award in Health and Safety within a Construction Environment (RQF)",
      "Highfield Level 2 Award in Safe Moving and Handling (RQF)",
      "Highfield Level 2 Award in Health and Safety within the Workplace (RQF)",
      "Highfield Level 2 Award in the Control of Substances Hazardous to Health (RQF)",
      "CITB Health, Safety and Environment Test preparation",
      "CSCS Labourer Card progression",
    ],

    cscsProgression: [
      "Prepare for the CITB Health, Safety and Environment Test.",
      "Receive support towards obtaining the CSCS Labourer Card.",
      "Develop the knowledge required for entry-level construction and site-based roles.",
    ],

    learnerSupportTitle: "Learner Support and SEND",

    learnerSupportIntro:
      "Learners receive support throughout the programme based on their individual starting point and needs.",

    learnerSupport: [
      "Initial assessment",
      "BKSB English and maths support where required",
      "Skills scan and starting point review",
      "Information, Advice and Guidance (IAG)",
      "Career planning",
      "Weekly progress reviews",
      "SEND and reasonable adjustments where required",
    ],

    learnerExpectations: [
      "Attend all sessions",
      "Arrive on time",
      "Participate fully",
      "Complete all required assessments",
      "Engage with English and maths support where required",
      "Complete employability activities",
      "Apply for suitable vacancies",
      "Attend interviews arranged through the programme",
      "Follow behaviour, conduct and health & safety expectations",
    ],

    careerTitle: "Progression Opportunities",

    careerOpportunities: [
      "Construction Labourer",
      "Civils Operative",
      "Utilities Operative",
      "Groundworker",
      "Drainage Operative",
      "Highways Operative",
      "Site Labourer",
      "Entry-level Infrastructure Support Roles",
    ],

    careerNote:
      "The programme is designed to support learners into entry-level construction, civils, utilities and infrastructure roles.",

    testimonials: [
      {
        quote:
          "I completed the course, loved the training and have since progressed into employment.",
        name: "Julie J",
        role: "HCC Skills Bootcamp Learner",
      },
      {
        quote:
          "I really enjoyed the course and found the training useful, engaging and relevant to the construction sector.",
        name: "Luke W",
        role: "HCC Skills Bootcamp Learner",
      },
      {
        quote:
          "Learners demonstrated a good understanding of health and safety, manual handling, COSHH and general site procedures. They understood the importance of PPE, following instructions and working safely around others.",
        name: "Employer Feedback",
        role: "PH Brickwork",
      },
    ],

    jobSupportTitle: "Employment and Progression Support",

    jobSupportIntro:
      "Learners receive practical employability support throughout the programme to help them prepare for relevant vacancies and progression opportunities.",

    jobSupport: [
      {
        title: "CV Support",
        description:
          "Learners receive support preparing and improving their CV for relevant construction and utilities roles.",
      },
      {
        title: "Interview Preparation",
        description: "Learners receive preparation and support for employer interviews.",
      },
      {
        title: "Employer Engagement",
        description:
          "The programme includes opportunities to engage with employers and understand current vacancies.",
      },
      {
        title: "Progression Support",
        description:
          "Learners receive support applying for suitable roles and progressing into employment.",
      },
    ],

    employerSection: {
      title: "Employer Engagement and Progression Support",
      description:
        "Employer engagement is built into the programme to help learners understand opportunities within construction, civils and utilities.",
      details: [
        "Employer insight sessions",
        "Industry engagement",
        "Recruitment opportunities",
        "Interview support",
        "Progression into employment",
      ],
    },
    brandingLogos: [
      {
        src: "/logos/QRT-logo/QRT-black-transparent.png",
        alt: "Quack Recruitment & Training logo",
        className: "max-h-20 w-auto",
      },
      {
        src: "/images/hcc-logo-colour.gif",
        alt: "Hampshire County Council logo",
        className: "max-h-20 w-auto",
      },
    ],
    whyChoose: [
      {
        title: "Industry-Recognised Qualifications",
        description:
          "The programme includes recognised health and safety qualifications relevant to construction and site-based work.",
      },
      {
        title: "Practical Construction Training",
        description:
          "Learners develop practical knowledge and site-readiness skills relevant to construction, civils and utilities.",
      },
      {
        title: "Employer Engagement",
        description:
          "Learners engage with employer expectations, vacancies and progression opportunities throughout the programme.",
      },
      {
        title: "Dedicated Employability Support",
        description:
          "CV support, interview preparation and job application support are included throughout the programme.",
      },
      {
        title: "CSCS Progression",
        description:
          "Learners receive support towards the CITB Health, Safety and Environment Test and CSCS Labourer Card progression.",
      },
    ],

    progressionTitle: "Where Learners Can Progress",

    progressionIntro: "Learners completing the programme may progress into opportunities across:",

    progressionItems: [
      "Construction",
      "Civil Engineering",
      "Utilities",
      "Infrastructure",
      "Highways",
      "Groundworks",
    ],

    progressionOutro:
      "These sectors provide a range of entry-level and progression opportunities for learners completing the programme.",

    handbook: {
      title: "Learner Handbook HCC",
      description: "Pathway to Construction Utilities HCC Learner Handbook v2.0",
      href: "/docs/Quack_Recruitment_Learner_Handbook_HCC_v.2.pdf",
      buttonText: "Download Learner Handbook",
    },

    policies: [
      {
        name: "Learner Handbook HCC",
        description: "Pathway to Construction Utilities HCC Learner Handbook v2.0",
        link: "/docs/Quack_Recruitment_Learner_Handbook_HCC_v.2.pdf",
      },
      ...sharedPolicies,
    ],

    apply: {
      heading: "Apply for the Skills Bootcamp",
      text: "Start your journey into construction, civils and utilities.",
      href: "https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9",
    },

    finalCta: {
      heading: "Interested in the Pathway to Construction Utilities Skills Bootcamp?",
      text: "Apply today and a member of the Quack Recruitment & Training team will contact you with further information.",
      buttonText: "Apply Now",
    },

    link: "/skills-bootcamps/construction-utilities/hcc",
  },
};

export const bootcampCourseList = Object.values(bootcampCourses);

export const bootcampCourseGroups = {
  retrofit: [
    bootcampCourses.retrofitWmca,
    bootcampCourses.retrofitEcw,
    bootcampCourses.retrofitSurrey,
  ],
  recruitment: [bootcampCourses.recruitmentSymca],
  constructionUtilities: [bootcampCourses.constructionUtilitiesHcc],
};
