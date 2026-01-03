import React, { useState } from 'react';
import { PAGE_CONFIGS } from '../config/pageConfigs';
import HeroSection from '../components/HeroSection';
import TestDetails from '../components/TestDetails';
import MostBookedPackages from '../components/MostBookedPackages';
import WhyBookWithUs from '../components/WhyBookWithUs';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CantFindSection from '../components/CantFindSection';
import Footer from '../components/Footer';
import StickyFooter from '../components/StickyFooter';

const EssentialPage = () => {
    const config = PAGE_CONFIGS['essential-body-checkup'];
    const [selectedPackage, setSelectedPackage] = useState('');

    const handlePackageSelect = (packageTitle) => {
        setSelectedPackage(packageTitle);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <HeroSection heroData={config.hero} pageType="essential" selectedPackage={selectedPackage} />
            <TestDetails testDetailsData={config.testDetails} />
            <MostBookedPackages packagesData={config.packages} onPackageSelect={handlePackageSelect} />

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

export default EssentialPage;