const createRetrofitCourse = ({
  id,
  slug,
  link,
  authority,
  banner,
  regionalIntro,
  eligibility = [],
  schedule,
  deliveryModes = [],
  deliveryNote,
  cohorts = [],
  careerOpportunities = [],
  careerNote,
  progressionItems = [],
  progressionIntro,
  progressionOutro,
  testimonials = [],
  apply,
  handbook,
  brandingLogos = [],
  finalCta,
}) => {
  const { programme } = retrofitProgramme;

  return {
    id,
    slug,
    link,

    category: retrofitProgramme.category,
    title: retrofitProgramme.title,
    cardDescription: retrofitProgramme.cardDescription,
    cardHighlights: retrofitProgramme.cardHighlights,

    authority,

    banner: {
      imgSrc: "/images/banners/retrofit-banner.jpg",
      imgAlt: "Colourful houses on a street",
      position: "center",
      ...banner,
    },

    brandingLogos,

    hero: {
      eyebrow: "Skills Bootcamp",
      heading: banner.title,
      intro: [regionalIntro, ...programme.overview],
    },

    overview: {
      course: retrofitProgramme.title,
      sector: "Construction / Retrofit / Green Skills",
      duration: programme.duration,
      guidedLearningHours: programme.guidedLearningHours,
      schedule,
      deliveryModes,
      deliveryNote,
      eligibility,
    },
    programmeStructure: retrofitProgramme.programmeStructure,
    learningTitle: "Programme Content",
    learningIntro: programme.learningIntro,
    learningPoints: programme.learningPoints,
    learningOutro: programme.learningOutro,

    skillsTitle: "Skills and Knowledge Developed",
    skillsDeveloped: programme.skillsDeveloped,

    qualifications: programme.qualifications,

    learnerSupportTitle: "Learner Support and SEND",
    learnerSupportIntro:
      programme.learnerSupportIntro || retrofitProgramme.programme.learnerSupportIntro,
    intro: [regionalIntro, ...programme.overview],
    learnerSupport: programme.learnerSupport || retrofitProgramme.programme.learnerSupport,

    learnerExpectations: programme.learnerExpectations,

    jobSupportTitle: "Employment and Progression Support",
    jobSupportIntro: programme.jobSupportIntro,
    jobSupport: programme.jobSupport,

    employerSection: programme.employerSection,

    whyChoose: programme.programmeFeatures,

    careerTitle: "Progression Opportunities",
    careerOpportunities,
    careerNote,

    progressionTitle: "Progression and Employment",
    progressionIntro,
    progressionItems,
    progressionOutro,

    testimonials,

    cohorts,

    handbook,

    policies: [
      ...(handbook
        ? [
            {
              name: handbook.title,
              description: handbook.description,
              link: handbook.href,
            },
          ]
        : []),
      ...sharedPolicies,
    ],

    apply,
    finalCta,
  };
};

const retrofitProgramme = {
  category: "retrofit",
  title: "Pathway to Retrofit Excellence",

  cardDescription:
    "A funded retrofit Skills Bootcamp focused on energy efficiency, practical construction knowledge and employability support.",

  cardHighlights: [
    "15 structured sessions",
    "82 guided learning hours",
    "Employer engagement and progression support",
  ],

  programmeStructure: [
    { label: "Structured Sessions", value: "15" },
    { label: "Total Programme Hours", value: "97.5" },
    { label: "Guided Learning Hours", value: "82 GLH" },
    { label: "Employability Activity", value: "15.5 hours" },
  ],

  programme: {
    overview: [
      "The Pathway to Retrofit Excellence Skills Bootcamp prepares learners for careers in retrofit, construction and green skills.",
      "The programme develops knowledge of energy efficiency, retrofit principles, construction practices and the standards and behaviours expected within the sector.",
      "Learners also receive employability and progression support to help them move into relevant employment.",
    ],

    duration: "15 structured sessions",
    guidedLearningHours: "82 GLH",

    learningIntro:
      "The programme provides a strong foundation in retrofit and sustainable construction.",

    learningPoints: [
      "Introduction to energy efficiency and retrofit",
      "Understanding the UK’s Net Zero targets",
      "PAS 2035 retrofit standards",
      "Health and safety within construction environments",
      "Retrofit materials and insulation systems",
      "Installation processes for energy efficiency measures",
      "Retrofit compliance and documentation",
      "Assessment and quality assurance processes",
    ],

    learningOutro:
      "The programme also introduces learners to assessment and compliance roles within retrofit projects.",

    skillsDeveloped: [
      "Knowledge of retrofit and energy efficiency principles",
      "Understanding of health and safety expectations",
      "Awareness of site procedures and employer expectations",
      "Employability skills for interviews and progression",
      "Confidence to progress into retrofit, construction and related roles",
    ],

    /*
     * No confirmed shared Retrofit qualifications were supplied
     * in the content currently available.
     */
    qualifications: [
      "Highfield Level 2 Award in Retrofit Principles (RQF)",
      "Highfield Level 3 Award in Understanding the Principles and Practices of Assessment (RQF)",
    ],

    /*
     * SEND has been specifically requested as part of the common page
     * structure, but detailed shared Retrofit SEND/support wording still
     * needs confirmation.
     */
    learnerSupport: [
      "Initial assessment and identification of support needs",
      "BKSB English and maths support where required",
      "Skills scan and starting point review",
      "Formal SEND Support Plans where required",
      "Reasonable adjustments, including extra exam time where approved",
      "Modified learning materials where required",
      "One-to-one support where appropriate",
      "Weekly review of support and progress through the ILP",
    ],

    learnerSupportIntro:
      "Learner safety, wellbeing and support are important throughout the programme. Learners receive information about safeguarding, Prevent, support routes and how to report concerns during onboarding and induction.",

    learnerExpectations: [
      "Attend all scheduled sessions",
      "Arrive on time",
      "Participate fully",
      "Complete all required learning activities and assessments",
      "Engage with employability support",
      "Apply for suitable roles",
      "Attend interviews where arranged",
      "Follow learner behaviour, safeguarding and conduct expectations",
    ],

    jobSupportIntro:
      "Our Skills Bootcamps are designed to support learners into employment or career progression.",

    jobSupport: [
      {
        title: "Career Guidance",
        description:
          "Learners receive guidance to identify suitable career pathways within retrofit and construction.",
      },
      {
        title: "CV Development",
        description: "Learners receive support developing professional CVs tailored to the sector.",
      },
      {
        title: "Interview Preparation",
        description: "Learners receive interview coaching and guidance on employer expectations.",
      },
      {
        title: "Job Application Support",
        description:
          "Our team helps learners identify suitable vacancies and complete job applications.",
      },
      {
        title: "Post-Course Progression Support",
        description:
          "Support continues after training as learners work towards employment and progression opportunities.",
      },
    ],

    employerSection: {
      title: "Employer Engagement and Progression Support",
      description:
        "We work with employers to support learners through industry engagement, insight and progression opportunities.",
      details: [
        "Industry insight sessions and guest talks",
        "Information about vacancies and career pathways",
        "Employer engagement",
        "Interview preparation",
        "Recruitment and progression opportunities",
      ],
    },

    programmeFeatures: [
      {
        title: "Retrofit-Focused Curriculum",
        description:
          "Training focuses on the knowledge and practical understanding required within retrofit and green construction.",
      },
      {
        title: "Employer Engagement",
        description:
          "Learners are introduced to employer expectations and relevant progression opportunities.",
      },
      {
        title: "Employability Support",
        description: "The programme includes CV, interview and job application support.",
      },
      {
        title: "Career-Focused Training",
        description:
          "Training is designed to help learners develop skills relevant to employment and progression.",
      },
    ],

    faqs: [],
  },
};

export const sharedPolicies = [
  {
    name: "Safeguarding Learner Onboarding",
    description: "Safeguarding learners at Quack Recruitment & Training",
    link: "/docs/Quack_safeguarding_learner_onboarding.pdf",
    type: "safety",
  },
  {
    name: "Prevent Risk Assessment v1.0 2026",
    description: "Quack Prevent Risk Assessment",
    link: "/docs/Quack_Prevent_Risk_Assessment_June_2026.pdf",
    type: "safety",
  },
  {
    name: "Learner Support Policy v2.0 2026",
    description: "Safeguarding learners at Quack Recruitment & Training",
    link: "/docs/Quack_Learner_Support_Policy_June_2026.pdf",
    type: "safety",
  },
  {
    name: "Complaints Policy v2.0 2026",
    description: "Quack Recruitment and Training Complaints Policy",
    link: "/docs/Quack_Complaints_Policy_and_Procedure_June_2026.pdf",
    type: "training",
  },
  {
    name: "Health and Safety Policy v3.0 2026",
    description: "Quack Recruitment and Training Health and Safety Policy",
    link: "/docs/Quack_Health_and_Safety_Policy_v3_June_2026.pdf",
    type: "safety",
  },
];

export const retrofitWmca = createRetrofitCourse({
  id: "retrofitWmca",
  slug: "wmca",
  link: "/skills-bootcamps/retrofit/wmca",

  authority: {
    name: "West Midlands Combined Authority (WMCA)",
    shortName: "WMCA",
    strapline: "Delivered in Partnership with the West Midlands Combined Authority",
    logo: "/footer/West_Midlands_Combined_Authority_logo.svg.png",
    logoAlt: "West Midlands Combined Authority logo",
  },

  banner: {
    title: "Pathway to Retrofit Excellence (WMCA)",
    slogan: "Start a career in retrofit and green construction.",
  },

  regionalIntro:
    "Quack Recruitment & Training delivers the Pathway to Retrofit Excellence Skills Bootcamp in partnership with the West Midlands Combined Authority (WMCA).",

  eligibility: [
    "Aged 19+",
    "Resident in the relevant Combined Authority area",
    "Have the right to work in the UK",
    "Interested in starting or progressing in the sector",
  ],

  schedule: "Monday – Friday | 9:00am – 3:30pm",

  deliveryModes: ["Face-to-face", "Remotely through live tutor-led sessions"],

  careerOpportunities: [
    "Retrofit Installer",
    "Loft Insulation Installer",
    "Cavity Wall Installer",
    "Construction Operative",
  ],

  testimonials: [
    {
      name: "Cameron K",
      role: "Retrofit Installer",
      quote:
        "Before joining the Skills Bootcamp I had never worked in construction. The tutors explained the retrofit industry clearly and helped me prepare my CV and interviews. Through the employer connections arranged during the course I secured an interview with a local insulation company and started work as a Retrofit Installer shortly after completing the Skills Bootcamp.",
    },
    {
      name: "Lee M",
      role: "Internal Wall Installer",
      quote:
        "I wanted to move into the green sector but didn’t know where to start. The Skills Bootcamp gave me a great understanding of energy efficiency and retrofit projects. The team helped me prepare for interviews and introduced me to employers working in the sector. After finishing the programme I secured a role supporting energy efficiency assessments.",
    },
    {
      name: "Shiloh C",
      role: "Construction Operative",
      quote:
        "The course was really informative and gave me a strong understanding of retrofit installations and construction processes. The careers support helped me apply for roles in the sector and within a few weeks of finishing the Bootcamp I secured work with a company delivering insulation and retrofit projects.",
    },
  ],

  handbook: {
    title: "Learner Handbook WMCA",
    description: "Pathway to Retrofit Excellence WMCA Learner Handbook v2.0",
    href: "/docs/Quack_Recruitment_Learner_Handbook_WMCA_v.2.pdf",
    buttonText: "Download Learner Handbook",
  },

  apply: {
    heading: "Apply for the Skills Bootcamp",
    text: "Start your journey into retrofit and green construction.",
    href: "https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9",
  },
});

export const retrofitEcw = createRetrofitCourse({
  id: "retrofitEcw",
  slug: "enterprise-cheshire-warrington",
  link: "/skills-bootcamps/retrofit/enterprise-cheshire-warrington",

  authority: {
    name: "Enterprise Cheshire & Warrington",
    shortName: "Enterprise Cheshire & Warrington",
    strapline: "Retrofit and Green Construction Skills Training",
    logo: "/footer/ec+w_logo.png",
    logoAlt: "Enterprise Cheshire & Warrington logo",
  },

  banner: {
    title: "Pathway to Retrofit Excellence (ECW)",
    slogan: "Start a career in retrofit and green construction.",
  },

  regionalIntro:
    "Quack Recruitment & Training delivers the Pathway to Retrofit Excellence Skills Bootcamp in partnership with Enterprise Cheshire & Warrington.",

  eligibility: [
    "Aged 19+",
    "Resident in the relevant Combined Authority area",
    "Have the right to work in the UK",
    "Interested in starting or progressing in the sector",
  ],

  schedule: "Monday – Friday | 9:00am – 3:30pm",

  deliveryModes: ["Face-to-face", "Remotely through live tutor-led sessions"],

  careerOpportunities: [
    "Retrofit Installer",
    "Loft Insulation Installer",
    "Cavity Wall Installer",
    "Construction Operative",
  ],

  testimonials: [
    {
      name: "Stephen S",
      role: "Retrofit Technician",
      quote:
        "After being made redundant I wanted a career that had long-term prospects. The Bootcamp helped me understand retrofit and energy efficiency improvements. With the support from the training team I applied for roles and secured a job as a Retrofit Technician working on insulation projects.",
    },
    {
      name: "Gohere M",
      role: "Construction Operative",
      quote:
        "The course explained retrofit in a way that was easy to understand and really engaging. The tutors helped me prepare my CV and introduced me to employers in the sector. After completing the Bootcamp I secured work supporting retrofit installation projects.",
    },
    {
      name: "Mukesh S",
      role: "Loft Insulation Installer",
      quote:
        "The Bootcamp helped me gain the knowledge employers are looking for. Through the employer connections provided during the programme I attended interviews with local contractors and secured a role installing loft insulation shortly after finishing the course.",
    },
  ],

  handbook: {
    title: "Learner Handbook ECW",
    description: "Pathway to Retrofit Excellence ECW Learner Handbook v2.0",
    href: "/docs/Quack_Recruitment_Learner_Handbook_ECW_v.2.pdf",
    buttonText: "Download Learner Handbook",
  },

  apply: {
    heading: "Apply for the Skills Bootcamp",
    text: "Start your journey into retrofit and green construction.",
    href: "https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9",
  },
});

export const retrofitSurrey = createRetrofitCourse({
  id: "retrofitSurrey",
  slug: "surrey",
  link: "/skills-bootcamps/retrofit/surrey",

  authority: {
    name: "Surrey County Council",
    shortName: "Surrey County Council",
    strapline: "Surrey Skills Bootcamp",
    logo: "/footer/Surrey_County_Council.svg",
    logoAlt: "Surrey County Council logo",
  },

  banner: {
    title: "Pathway to Retrofit Excellence Surrey County Council",
    slogan: "Start a career in retrofit and green construction.",
  },

  brandingLogos: [
    // {
    //   src: "/footer/Surrey_County_Council.svg",
    //   alt: "Surrey County Council logo",
    // },
  ],

  regionalIntro:
    "The Pathway to Retrofit Excellence Skills Bootcamp is delivered by Quack Recruitment & Training as part of Skills Bootcamp provision for Surrey.",

  eligibility: [
    "Aged 19+",
    "Resident in the relevant Combined Authority area",
    "Have the right to work in the UK",
    "Interested in starting or progressing in the sector",
  ],
  /*
   * Delivery method/location and timetable still need Surrey-specific
   * confirmation.
   */
  schedule: "Monday – Friday | 9:00am – 3:30pm",

  deliveryModes: ["Face-to-face", "Remotely through live tutor-led sessions"],

  careerOpportunities: [
    "Retrofit Operative",
    "Retrofit Advisor",
    "Construction Labourer",
    "Insulation Installer",
    "Green Skills Operative",
    "Site Labourer",
    "Energy Efficiency Support Roles",
    "Other entry-level retrofit and construction roles",
  ],

  careerNote:
    "The programme is designed to support progression into retrofit, construction and related green skills roles.",

  /*
   * Add Surrey learner information once the supplied file exists.
   */
  handbook: undefined,

  /*
   * No confirmed Surrey application URL was supplied.
   */
  apply: {
    heading: "Interested in the Surrey Pathway to Retrofit Excellence Skills Bootcamp?",
    text: "Register your interest today and a member of the Quack Recruitment & Training team will contact you with further information.",
    href: "https://quackrecruitment.picsweb.co.uk/Guest/SignUp/Applicant/522f666796b8479c8d1ac1aac8d7f2b9",
  },

  finalCta: {
    heading: "Interested in the Surrey Pathway to Retrofit Excellence Skills Bootcamp?",
    text: "Register your interest today and a member of the Quack Recruitment & Training team will contact you with further information.",
    buttonText: "Register Your Interest",
  },
});
