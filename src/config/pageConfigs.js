// Central configuration for all landing pages
// Each page has its own hero, testDetails, and packages configuration

export const PAGE_CONFIGS = {
  // Default / Full Body Checkup Page
  'full-body-checkup': {
    slug: 'full-body-checkup',
    pageTitle: 'Full Body Checkup',
    hero: {
      desktopBanner: "https://brandingpioneers.co.in/curelo-health/hero.png",
      mobileBanner: "https://brandingpioneers.co.in/curelo-health/mob.png",
      smallBanner: "https://brandingpioneers.co.in/curelo-health/small-ban.png",
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
      description: "Your body gives signals before a problem becomes serious—are you paying attention? This package helps you catch early signs of health issues so you can take action on time. It includes 68 important tests to check your liver, kidney, blood health, and more—giving you a complete health update with a single test. Curelo Health is among the most trusted pathology labs near you, offering affordable health packages and accurate diagnostics. Whether you're looking for laboratories near me or a nearby pathology center, our experts ensure quick home sample collection and accurate digital report delivery.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Get Reports in", value: "15 Hours", sub: "Get Reports in" },
        { title: "Fasting Requirement", value: "10-12 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Age Group", value: "5-99", sub: "Age Group" }
      ]
    },
    packages: {
      title: "Our Most Booked Packages",
      subtitle: "Comprehensive health checkups for your wellness",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        {
          title: "Fit India Full Body Checkup with Free HbA1c",
          includes: "90 Parameters",
          reportTime: "12 hours",
          price: "₹1249",
          originalPrice: "₹5947",
          discount: "78% OFF",
          recommended: false,
          extraTags: ["Infection", "Thyroid"]
        },
        {
          title: "Fit India Full Body with Vitamin Screening & Heart Test",
          includes: "96 Parameters",
          reportTime: "12 hours",
          price: "₹1799",
          originalPrice: "₹8566",
          discount: "78% OFF",
          recommended: true,
          extraTags: ["Kidney", "Infection"]
        },
        {
          title: "Advance Plus Full Body Checkup",
          includes: "100 Parameters",
          reportTime: "12 hours",
          price: "₹2499",
          originalPrice: "₹9955",
          discount: "74% OFF",
          recommended: false,
          extraTags: ["Kidney", "Infection"]
        }
      ]
    }
  },

  // Vitamin Checkup Page
  'vitamin-checkup': {
    slug: 'vitamin-checkup',
    pageTitle: 'Vitamin Checkup',
    hero: {
      desktopBanner: "https://brandingpioneers.co.in/curelo-health/hero.png",
      mobileBanner: "https://brandingpioneers.co.in/curelo-health/mob.png",
      smallBanner: "https://brandingpioneers.co.in/curelo-health/small-ban.png",
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
      description: "Vitamins are essential for your body's daily functions. A deficiency can lead to fatigue, weak immunity, hair loss, and more. This comprehensive vitamin screening package covers Vitamin D, B12, Iron, and other vital nutrients to help you understand your body's needs. Curelo Health ensures accurate results with NABL-certified labs and convenient home sample collection.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Get Reports in", value: "24 Hours", sub: "Get Reports in" },
        { title: "Fasting Requirement", value: "8-10 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Age Group", value: "10-99", sub: "Age Group" }
      ]
    },
    packages: {
      title: "Vitamin Screening Packages",
      subtitle: "Complete vitamin deficiency assessment",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        {
          title: "Basic Vitamin Package",
          includes: "12 Parameters",
          reportTime: "24 hours",
          price: "₹899",
          originalPrice: "₹2500",
          discount: "64% OFF",
          recommended: false,
          extraTags: ["Vitamin D", "B12"]
        },
        {
          title: "Complete Vitamin Screening Package",
          includes: "25 Parameters",
          reportTime: "24 hours",
          price: "₹1499",
          originalPrice: "₹4500",
          discount: "66% OFF",
          recommended: true,
          extraTags: ["Iron", "Folate"]
        },
        {
          title: "Advanced Vitamin & Mineral Package",
          includes: "40 Parameters",
          reportTime: "24 hours",
          price: "₹2199",
          originalPrice: "₹6500",
          discount: "66% OFF",
          recommended: false,
          extraTags: ["Calcium", "Zinc"]
        }
      ]
    }
  },

  // Diabetes Checkup Page
  'diabetes-checkup': {
    slug: 'diabetes-checkup',
    pageTitle: 'Diabetes Checkup',
    hero: {
      desktopBanner: "https://brandingpioneers.co.in/curelo-health/hero.png",
      mobileBanner: "https://brandingpioneers.co.in/curelo-health/mob.png",
      smallBanner: "https://brandingpioneers.co.in/curelo-health/small-ban.png",
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
      description: "Diabetes is a silent condition that can affect your heart, kidneys, eyes, and nerves if left unchecked. Our diabetes checkup packages include HbA1c, fasting glucose, insulin levels, and kidney function tests to give you a complete picture of your metabolic health. Early detection helps in better management and prevention of complications.",
      bannerImage: "https://brandingpioneers.co.in/curelo-health/test.png",
      cards: [
        { title: "Get Reports in", value: "12 Hours", sub: "Get Reports in" },
        { title: "Fasting Requirement", value: "10-12 Hrs fasting Required", sub: "Fasting Requirement" },
        { title: "Home Collection", value: "Available", sub: "Home Collection" },
        { title: "Age Group", value: "18-99", sub: "Age Group" }
      ]
    },
    packages: {
      title: "Diabetes Care Packages",
      subtitle: "Comprehensive diabetes screening and monitoring",
      mobileGif: "https://brandingpioneers.co.in/curelo-health/mob.gif",
      desktopGif: "https://brandingpioneers.co.in/curelo-health/img.gif",
      packages: [
        {
          title: "Basic Diabetes Screening",
          includes: "15 Parameters",
          reportTime: "12 hours",
          price: "₹599",
          originalPrice: "₹1800",
          discount: "66% OFF",
          recommended: false,
          extraTags: ["HbA1c", "FBS"]
        },
        {
          title: "Advance Diabetes Care Package",
          includes: "35 Parameters",
          reportTime: "12 hours",
          price: "₹1299",
          originalPrice: "₹4200",
          discount: "69% OFF",
          recommended: true,
          extraTags: ["Kidney", "Lipid"]
        },
        {
          title: "Complete Diabetic Health Package",
          includes: "55 Parameters",
          reportTime: "12 hours",
          price: "₹1999",
          originalPrice: "₹6500",
          discount: "69% OFF",
          recommended: false,
          extraTags: ["Heart", "Liver"]
        }
      ]
    }
  }
};

// Helper function to get config by slug (defaults to full-body-checkup)
export const getPageConfig = (slug) => {
  return PAGE_CONFIGS[slug] || PAGE_CONFIGS['full-body-checkup'];
};

// Get all available page slugs
export const getAvailableSlugs = () => {
  return Object.keys(PAGE_CONFIGS);
};
