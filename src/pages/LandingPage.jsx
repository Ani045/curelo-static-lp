import React from 'react';
import { useParams } from 'react-router-dom';
import { getPageConfig } from '../config/pageConfigs';
import HeroSection from '../components/HeroSection';
import TestDetails from '../components/TestDetails';
import MostBookedPackages from '../components/MostBookedPackages';
import WhyBookWithUs from '../components/WhyBookWithUs';
import CantFindSection from '../components/CantFindSection';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import StickyFooter from '../components/StickyFooter';

const LandingPage = () => {
    // Get page slug from URL params, default to 'comprehensive-body-checkup'
    const { pageSlug } = useParams();
    const config = getPageConfig(pageSlug || 'comprehensive-body-checkup');

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <HeroSection heroData={config.hero} />
            <TestDetails testDetailsData={config.testDetails} />
            <MostBookedPackages packagesData={config.packages} />

            {/* Why Book With Us (Includes Blue CTA Banner) */}
            <WhyBookWithUs />

            {/* Reviews Section */}
            <TestimonialsSection />

            {/* Can't Find / Help Section */}
            <CantFindSection />

            {/* FAQ Section - Dynamic per page */}
            <FAQSection faqsData={config.faqs} />

            {/* Footer */}
            <Footer />
            <StickyFooter />
        </div>
    );
};

export default LandingPage;
