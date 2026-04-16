import {
  Hero,
  Work,
  Updates,
  Units,
  Events,
  Publications,
  Videos,
  Partners,
  Footer,
  Aboutafrica,
  Volunteer,
  Projects,
  CustomerReviews,
  PdaafricaContact,
  AfricaGallery,
  VideoGallery,
  CurrentProjects,
  WhatWeDoSlider,
  PartnerTestimonials,
  ImpactStats,
  CTASection,
} from "./sections";
import Nav from "./components/Nav";
import PDAAFRICA from "./pages/PDAAFRICA";
import { Outlet, useLocation } from "react-router-dom";
import PDAAFRICAMenu from "./components/PDAAFRICAMenu";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import MailingListPopup from "./components/MailingListPopup";


const App = () => {
  const location = useLocation();
  const [showMailingListPopup, setShowMailingListPopup] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem("mailing-list-popup-dismissed");
    if (hasDismissed) return;

    const timer = window.setTimeout(() => {
      setShowMailingListPopup(true);
    }, 60000);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const closeMailingListPopup = () => {
    setShowMailingListPopup(false);
    sessionStorage.setItem("mailing-list-popup-dismissed", "true");
  };
  // console.log("React App Loaded");

  return (
    <main className="relative">
      <ScrollToTop />
      <header>
        {location.pathname.startsWith("/pdaafrica") ? (
          <PDAAFRICAMenu /> // Render PDAAFRICA menu
        ) : (
          <Nav /> // Render home page menu
        )}
      </header>

      <div id="main-content" tabIndex={-1}>
      {location.pathname === "/" ? (
        // Home page layout with all the sections
        <>
          <section>
            <Hero />
          </section>
          <section className="py-12 sm:py-16 md:py-24">
            <WhatWeDoSlider />
          </section>
          <section className="py-12 sm:py-16 md:py-24 bg-white">
            <Work />
          </section>
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <Updates />
          </section>
          <section className="py-12 sm:py-16 md:py-24 bg-white">
            <CurrentProjects />
          </section>
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <ImpactStats />
          </section>
          <section className="py-12 sm:py-16 md:py-24 bg-white">
            <Partners />
          </section>
          <section>
            <CTASection />
          </section>
          
          {/* OLD SECTIONS - COMMENTED OUT FOR POTENTIAL REVERT */}
          {/* <section className="padding">
            <Units />
          </section> */}
          {/* <section className="padding">
            <Events />
          </section> */}
          {/* <section className="bg-gray-200 padding">
            <Publications />
          </section> */}
          {/* <section className="padding">
            <Videos />
          </section> */}
        </>
      ) : location.pathname === "/pdaafrica" ? (
        // PDAAFRICA page layout
        <>
          <PDAAFRICA />
          {/* Add more sections here as needed */}
          <section className="padding">
            <Aboutafrica />
          </section>
          <section className="padding bg-gray-200">
            <Projects />
          </section>
          <section className="padding">
            <AfricaGallery />
          </section>
          <section className="padding">
            <VideoGallery />
          </section>
          <section className="padding">
            <CustomerReviews />
          </section>
          <section className="padding  bg-gray-200">
            <Volunteer />
          </section>
          <section className="padding">
            <PdaafricaContact />
          </section>
        </>
      ) : (
        // Outlet for other routes like Contact page
        <Outlet />
      )}
      </div>

      <section className="bg-[#525050] padding">
        <Footer />
      </section>
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      <MailingListPopup
        isOpen={showMailingListPopup}
        onClose={closeMailingListPopup}
      />
    </main>
  );
};

export default App;
