// Central configuration for all landing pages
// Each page has its own hero, testDetails, packages, and faqs configuration

// Shared package data for reuse across pages
const PACKAGE_DATA = {
  basic: {
    title: "Curelo Basic Health Check - 67 Parameters",
    includes: "67 Parameters",
    reportTime: "12 hours",
    price: "₹732",
    originalPrice: "₹2500",
    discount: "70% OFF",
    recommended: false,
    extraTags: ["Cholesterol", "Liver"]
  },
  essential: {
    title: "Curelo Essential Body Check - 83 Parameters",
    includes: "83 Parameters",
    reportTime: "12 hours",
    price: "₹1199",
    originalPrice: "₹4000",
    discount: "70% OFF",
    recommended: false,
    extraTags: ["Glucose Fasting", "Kidney"]
  },
  advanced: {
    title: "Curelo Advanced Full Body Check - 88 Parameters",
    includes: "88 Parameters",
    reportTime: "12 hours",
    price: "₹1639",
    originalPrice: "₹5500",
    discount: "70% OFF",
    recommended: false,
    extraTags: ["HbA1c", "Thyroid"]
  },
  comprehensive: {
    title: "Curelo Comprehensive Full Body Check - 93 Parameters",
    includes: "93 Parameters",
    reportTime: "12 hours",
    price: "₹2164",
    originalPrice: "₹7000",
    discount: "69% OFF",
    recommended: false,
    extraTags: ["Vitamin D", "Thyroid"]
  },
  completeWellness: {
    title: "Curelo Complete Wellness Profile - 94 Parameters",
    includes: "94 Parameters",
    reportTime: "12 hours",
    price: "₹3065",
    originalPrice: "₹8000",
    discount: "61% OFF",
    recommended: false,
    extraTags: ["HsCRP", "Heart"]
  },
  executiveMale: {
    title: "Curelo Executive Full Body Check - Male - 100 Parameters",
    includes: "100 Parameters",
    reportTime: "12 hours",
    price: "₹4132",
    originalPrice: "₹10000",
    discount: "58% OFF",
    recommended: false,
    extraTags: ["Cancer Marker", "RF Factor"]
  }
};

export const PAGE_CONFIGS = {
  // Default - Comprehensive Body Checkup Page
  'comprehensive-body-checkup': {
    slug: 'comprehensive-body-checkup',
    pageTitle: 'Comprehensive Full Body Check',
    hero: {
      desktopBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376882/compreshenive_u8o1fe.png",
      mobileBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376882/compreshenive_u8o1fe.png",
      smallBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376882/compreshenive_u8o1fe.png",
      offerTitle: "Get Report Consultation & Diet Plan",
      offerSubtitle: "with your Booking!",
      offerPriceOriginal: "₹799",
      usps: [
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon1.png', title: "100% Honest Pricing" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon2.png', title: "India's Widest Home Collection Network" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon3.png', title: "100% Report Accuracy Guaranteed" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon4.png', title: "70+ Lakhs Patients Served" }
      ]
    },
    testDetails: {
      title: "Curelo Comprehensive Full Body Check - 93 Parameters + Free Vitamin D Total-25 Hydroxy Test",
      description: "Early detection and preventive care play a key role in avoiding long-term health complications and unexpected medical costs. The Curelo Comprehensive Full Body Check gives a detailed view of your health with 93 essential parameters, including blood sugar, cholesterol, liver and kidney function, thyroid profile, and complete blood count, helping identify potential risks early. It also includes a FREE Vitamin D Total-25 Hydroxy Test to assess immunity, bone health, and fatigue. Book your test today and take the first step towards a healthier, worry-free future.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Parameters", value: "93 Tests", sub: "Parameters" },
        { title: "Fasting Requirement", value: "10-12 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Free Test", value: "Vitamin D Total-25 Hydroxy", sub: "Free Test" }
      ]
    },
    packages: {
      title: "Our Most Booked Packages",
      subtitle: "Comprehensive health checkups for your wellness",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        { ...PACKAGE_DATA.essential },
        { ...PACKAGE_DATA.comprehensive, recommended: true },
        { ...PACKAGE_DATA.completeWellness }
      ]
    },
    faqs: [
      {
        question: "What tests are included in the Curelo Comprehensive Full Body Check?",
        answer: "This comprehensive full body check health package assesses 93 key health markers, including CBC, KFT, LFT, Lipid, Thyroid, Iron, Diabetes, Arthritis, ESR, Urine, and more, with a FREE Vitamin D Total-25 Hydroxy Test included."
      },
      {
        question: "Why is the Vitamin D Total-25 Hydroxy test important?",
        answer: "Early detection of Vitamin D deficiency is crucial for maintaining immunity, bone strength, and overall vitality. Low levels can lead to weak immunity, bone weakness, muscle pain, and fatigue. The Total-25 Hydroxy test is the most accurate way to assess Vitamin D levels in the body."
      },
      {
        question: "What is the cost of the Curelo Comprehensive Full Body Check in Delhi/NCR?",
        answer: "The Curelo Comprehensive Full Body Check covers 93 tests and is available at a special discounted price of ₹7,000 ₹2,164 in Delhi/NCR. The package also includes a FREE Vitamin D Total-25 Hydroxy Test, making advanced preventive health screening more affordable and complete."
      },
      {
        question: "Is home sample collection safe and hygienic?",
        answer: "All samples are collected by trained, DMLT-certified phlebotomists to ensure safety, hygiene, and proper handling."
      },
      {
        question: "Can I take this test even if I feel healthy?",
        answer: "Yes. Preventive health checkups are most effective when taken before symptoms appear, helping identify hidden health risks."
      }
    ]
  },

  // Executive Body Checkup Page
  'executive-body-checkup': {
    slug: 'executive-body-checkup',
    pageTitle: 'Executive Full Body Check - Male',
    hero: {
      desktopBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376884/executive_xnhlho.png",
      mobileBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376884/executive_xnhlho.png",
      smallBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376884/executive_xnhlho.png",
      offerTitle: "Get Report Consultation & Diet Plan",
      offerSubtitle: "with your Booking!",
      offerPriceOriginal: "₹799",
      usps: [
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon1.png', title: "100% Honest Pricing" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon2.png', title: "India's Widest Home Collection Network" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon3.png', title: "100% Report Accuracy Guaranteed" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon4.png', title: "70+ Lakhs Patients Served" }
      ]
    },
    testDetails: {
      title: "Curelo Executive Full Body Check - Male - 100 Parameters - Free Cancer Marker Test",
      description: "Men often overlook early health signals until symptoms become unavoidable. The Curelo Executive Full Body Check – Male is designed to provide a deeper, gender-specific assessment of overall health and long-term risks. This package includes 100 essential parameters covering blood sugar, lipid profile, liver and kidney function, thyroid profile, complete blood count, ESR, Rheumatoid Factor (RF) and other critical health markers relevant to men's wellness. It also comes with a FREE Cancer Marker Test, supporting early risk identification and proactive monitoring. With Curelo, booking is simple and streamlined—helping you take control of your health before problems escalate.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Parameters", value: "100 Tests", sub: "Parameters" },
        { title: "Fasting Requirement", value: "10-12 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Free Test", value: "Cancer Marker Test", sub: "Free Test" }
      ]
    },
    packages: {
      title: "Executive Health Packages",
      subtitle: "Premium health checkups for comprehensive wellness",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        { ...PACKAGE_DATA.comprehensive },
        { ...PACKAGE_DATA.executiveMale, recommended: true },
        { ...PACKAGE_DATA.completeWellness }
      ]
    },
    faqs: [
      {
        question: "What makes the Executive Full Body Check Up suitable for men?",
        answer: "This package includes an extended range of parameters tailored to assess metabolic health, organ function, and long-term risks commonly seen in men."
      },
      {
        question: "What is the Cancer Marker Test included in this package?",
        answer: "The FREE Cancer Marker Test supports early health monitoring by helping identify potential cancer-related risks at an early stage. Early insights allow timely medical consultation, better planning, and proactive care before symptoms appear."
      },
      {
        question: "How many tests are included in this package?",
        answer: "The package covers 100 health parameters, offering a comprehensive view of internal health and preventive screening."
      },
      {
        question: "What is the cost of the Curelo Executive Full Body Check – Male?",
        answer: "This Curelo Executive Full Body Check – Male is available at a special price of ₹10,000 ₹4,132 in Delhi/NCR. Prices may vary depending on location, partner lab, and ongoing offers—please check the final price at the time of booking."
      },
      {
        question: "Is home sample collection available for this package?",
        answer: "Yes, convenient home sample collection is available. Samples are collected at your preferred time by DMLT-certified phlebotomists, ensuring comfort, hygiene, and a hassle-free testing experience."
      }
    ]
  },

  // Essential Body Checkup Page
  'essential-body-checkup': {
    slug: 'essential-body-checkup',
    pageTitle: 'Essential Body Check',
    hero: {
      desktopBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376883/essential_s1ncw4.png",
      mobileBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376883/essential_s1ncw4.png",
      smallBanner: "https://res.cloudinary.com/damfndmrm/image/upload/v1767376883/essential_s1ncw4.png",
      offerTitle: "Get Report Consultation & Diet Plan",
      offerSubtitle: "with your Booking!",
      offerPriceOriginal: "₹799",
      usps: [
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon1.png', title: "100% Honest Pricing" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon2.png', title: "India's Widest Home Collection Network" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon3.png', title: "100% Report Accuracy Guaranteed" },
        { icon: 'https://brandingpioneers.co.in/curelo-health/icon4.png', title: "70+ Lakhs Patients Served" }
      ]
    },
    testDetails: {
      title: "Curelo Essential Body Check - 83 Parameters + Free Glucose Fasting Test",
      description: "Regular health checkups help identify health risks early, often before symptoms appear. They provide a clear understanding of key health markers such as blood sugar, cholesterol, blood pressure, and organ function, enabling timely action and preventive care. Curelo Essential Body Check – 83 Parameters offers a comprehensive snapshot of your overall health, helping you stay informed and proactive. As a diagnostic aggregator, Curelo simplifies the process by connecting you with trusted diagnostic partners for convenient testing and reliable insights—all through one seamless platform.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Parameters", value: "83 Tests", sub: "Parameters" },
        { title: "Fasting Requirement", value: "10-12 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Free Test", value: "Glucose Fasting Test", sub: "Free Test" }
      ]
    },
    packages: {
      title: "Essential Health Packages",
      subtitle: "Affordable health checkups for preventive care",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        { ...PACKAGE_DATA.basic },
        { ...PACKAGE_DATA.essential, recommended: true },
        { ...PACKAGE_DATA.advanced }
      ]
    },
    faqs: [
      {
        question: "What is included in the Curelo Essential Body Check – 83 Parameters?",
        answer: "The package includes a wide range of essential tests to assess overall health, covering cholesterol, liver and kidney function, thyroid profile, and other vital health markers along with a FREE Glucose Fasting Test."
      },
      {
        question: "Who should opt for this Essential full body health checkup?",
        answer: "This package is ideal for adults looking for a preventive health screening, working professionals, individuals with a sedentary lifestyle, or anyone who wants a regular health assessment."
      },
      {
        question: "Do I need to fast before the test?",
        answer: "Yes, some tests may require fasting for certain parameters. Our team will inform you in advance about any preparation needed before sample collection."
      },
      {
        question: "How is the sample collection done?",
        answer: "Samples are collected by trained phlebotomists at your preferred location, ensuring comfort and convenience."
      },
      {
        question: "What is the cost of Curelo Essential Body Check?",
        answer: "The cost of Curelo Essential Full Body Check Up in Delhi/NCR may vary based on different locations and partner labs. Currently, the package is available with Curelo starting at ₹4000 ₹1199."
      },
      {
        question: "What makes Curelo different as a health checkup aggregator?",
        answer: "Curelo partners with multiple accredited labs, giving you access to trusted diagnostics, transparent options, and seamless coordination, all through one easy platform."
      }
    ]
  }
};

// Helper function to get config by slug (defaults to comprehensive-body-checkup)
export const getPageConfig = (slug) => {
  return PAGE_CONFIGS[slug] || PAGE_CONFIGS['comprehensive-body-checkup'];
};

// Get all available page slugs
export const getAvailableSlugs = () => {
  return Object.keys(PAGE_CONFIGS);
};
