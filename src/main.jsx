import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import Contact from "./pages/Contact.jsx";
import PDAAFRICA from "./pages/PDAAFRICA.jsx";
import DonateForm from "./components/DonateForm.jsx"; // Import the DonateForm component
import ThankYouPage from "./components/ThankYouPage.jsx"; // Import the ThankYou component
import DataAnalytics from "./pages/DataAnalytics.jsx";
import CCLP from "./pages/CCLP.jsx";
import Nyonkopa from "./pages/Nyonkopa.jsx";
import VSLA from "./pages/VSLA.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import EthicalReviewCommittee from "./pages/EthicalReviewCommittee.jsx";
import Staff from "./pages/Staff.jsx";
import Teams from "./pages/Teams.jsx";
import ChildAbuseTracker from "./pages/ChildAbuseTracker.jsx";
import Covid19 from "./pages/Covid19.jsx";
// Our Impact page code kept in ./pages/OurImpact.jsx — uncomment import + route to restore.
// import OurImpact from "./pages/OurImpact.jsx";
import Publications from "./pages/Publications.jsx";
import VidPic from "./pages/VidPic.jsx";
import PodcastAndVodcast from "./pages/PodcastAndVodcast.jsx";
import BoardOfDirectors from "./pages/BoardOfDirectors.jsx";
import CCLPDashboard from "./pages/CCLPDashboard.jsx";
import VSLADashboard from "./pages/VSLADashboard.jsx";
import NCLRDashboard from "./pages/NCLRDashboard.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";
import ErrorFallback from "./components/ErrorFallback.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import EdemProfile from "./pages/EdemProfile.jsx";
import PublicationViewer from "./pages/PublicationViewer.jsx";
import PartnersPage from "./pages/PartnersPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import ArchivesPage from "./pages/ArchivesPage.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import NewsAndActivities from "./pages/NewsAndActivities.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Photos from "./pages/Photos.jsx";
import Videos from "./pages/Videos.jsx";
import Events from "./pages/Events.jsx";


const router = createBrowserRouter([

  {
    
    path: "/",
    element: <App />,
    errorElement: <ErrorFallback />,
  
    children: [
      {
        path: "/pdaafrica/dataanalytics",
        element: <DataAnalytics />,
      },
      {
        path: "/pdaafrica/dataanalytics/cclp-dashboard",
        element: <CCLPDashboard />,
      },
      {
        path: "/pdaafrica/dataanalytics/vsla-dashboard",
        element: <VSLADashboard />,
      },
      {
        path: "/pdaafrica/dataanalytics/nclr-dashboard",
        element: <NCLRDashboard />,
      },
      {
        path: "/pdaafrica/cocoa-communities-library-project",
        element: <CCLP />,
      },
      {
        path: "/pdaafrica/nyonkopa-child-labour-remediation",
        element: <Nyonkopa />,
      },
      {
        path: "/pdaafrica/financial-inclusion-and-vsla",
        element: <VSLA />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pdaafrica",
        element: <PDAAFRICA />,
      },
      {
        path: "/pdaafrica/donate", // Add the route for the donation page
        element: <DonateForm />,
      },
      {
        path: "/pdaafrica/thank-you", // Route for the thank-you page after donation
        element: <ThankYouPage />,
      },
      {
        path: "/landing-page",
        element: <LandingPage />,
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />,
      },
      {
        path: "/our-projects",
        element: <ProjectsPage />,
      },
      // {
      //   path: "/our-impact",
      //   element: <OurImpact />,
      // },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/videos-pictures",
        element: <VidPic />,
      },
      {
        path: "/podcast-and-vodcast",
        element: <PodcastAndVodcast />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/board",
        element: <BoardOfDirectors />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/ethical-review-committee",
        element: <EthicalReviewCommittee />,
      },
      {
        path: "/child-abuse-tracker",
        element: <ChildAbuseTracker />,
      },
      {
        path: "/covid-19",
        element: <Covid19 />,
      },
      {
        path: "/edem-profile",
        element: <EdemProfile />,
      },
      {
        path: "/publication-viewer",
        element: <PublicationViewer />,
      },
      {
        path: "/partners",
        element: <PartnersPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/archives",
        element: <ArchivesPage />,
      },
      {
        path: "/archives/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "/projects/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "/news-and-activities",
        element: <NewsAndActivities />,
      },
      {
        path: "/news-and-activities/:slug",
        element: <NewsDetail />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "*", // Catch-all route for 404 errors
        element: <UnderConstruction />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
