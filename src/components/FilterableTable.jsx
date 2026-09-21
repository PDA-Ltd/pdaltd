import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const reports = [
  // 2026 Publications
  {
    date: "May 2026",
    title: "Global Plastic Action Partnership (GPAP) Evaluation - Final Report",
    type: "PDA Report / Concept Note",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Global-Plastic-Action-Partnership-Evaluation-Final-Report-May-2026.pdf",
    fileName: "Global-Plastic-Action-Partnership-Evaluation-Final-Report-May-2026.pdf",
  },
  // 2025 Publications
  {
    date: "January 2025",
    title: "Ghana Education Service (GES) Lively Minds Programme: Community Dynamics, Drivers of Success and Challenges",
    type: "PDA Publication",
    topic: "Education",
    downloadUrl: "/assets/documents/Ghana-Education-Service-GES-Lively-Minds-Programme-Community-dynamics-drivers-of-success-and-challenges.pdf",
    fileName: "Ghana-Education-Service-GES-Lively-Minds-Programme-Community-dynamics-drivers-of-success-and-challenges.pdf",
  },
  {
    date: "January 2025",
    title: "Ghana Education Service (GES) Lively Minds Programme: Community Engagement, Success and Challenges",
    type: "PDA Publication",
    topic: "Education",
    downloadUrl: "/assets/documents/Ghana-Education-Service-GES-Lively-Minds-Programme-Community-engagement-success-and-challenges.pdf",
    fileName: "Ghana-Education-Service-GES-Lively-Minds-Programme-Community-engagement-success-and-challenges.pdf",
  },
  {
    date: "January 2025",
    title: "Summary: DEval-VENRO Workshop 2024 - Partner Orientation and Decolonisation in Evaluation",
    type: "PDA Report / Concept Note",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Protokoll_Summary-DEval-VENRO-Workshop-2024-Partner-orientation-and-decolonisation-in-evaluation.pdf",
    fileName: "Protokoll_Summary-DEval-VENRO-Workshop-2024-Partner-orientation-and-decolonisation-in-evaluation.pdf",
  },
  // 2024 Publications
  {
    date: "October 2024",
    title: "YouthFutures 2024 Youth Manifesto Dialogues",
    type: "PDA Report / Concept Note",
    topic: "Youth Development",
    downloadUrl: "/assets/documents/YouthFutures-2024-Youth-Manifesto-Dialogues.pdf",
    fileName: "YouthFutures-2024-Youth-Manifesto-Dialogues.pdf",
  },
  {
    date: "March 2024",
    title: "Business Formalization in Ghana's Construction Industry",
    type: "PDA Publication",
    topic: "Construction",
    downloadUrl: "/assets/documents/Business-Formalization-in-Ghanas-Construction-Sector.pdf",
    fileName: "Business-Formalization-in-Ghanas-Construction-Sector.pdf",
  },
  {
    date: "June 2024",
    title: "Unpacking locally led research and evaluation through the lens of collaborative autoethnography",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Unpacking-locally-led-research-and-evaluation-through-the-lens-of-collaborative-autoethnography.pdf",
    fileName: "Unpacking-locally-led-research-and-evaluation-through-the-lens-of-collaborative-autoethnography.pdf",
  },
  {
    date: "June 2024",
    title: "Voices and Evidence from End-Users of the GLTV and GLRRP Remote Learning Programme in Ghana",
    type: "PDA Publication",
    topic: "Education",
    downloadUrl: "/assets/documents/Voices-and-Evidence-from-End-Users-of-the-GLTV-and-GLRRP.pdf",
    fileName: "Voices-and-Evidence-from-End-Users-of-the-GLTV-and-GLRRP.pdf",
  },
  {
    date: "July 2024",
    title: "Evaluating How Root Capital's Client Businesses Impact Smallholder Livelihoods: Oil Palm in Ghana",
    type: "Policy Brief",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/Root-Capital_PDA-Oil-Palm-Ghana-Impact-Study_FINAL.pdf",
    fileName: "Root-Capital_PDA-Oil-Palm-Ghana-Impact-Study_FINAL.pdf",
  },
  {
    date: "July 2024",
    title: "Transitions From Primary To Lower Secondary School: A Focus On Equity",
    type: "Policy Brief",
    topic: "Education",
    downloadUrl: "/assets/documents/Transitions-from-Primary-to-Lower-Secondary-School-A-Focus-on-Equity_1564579291.pdf",
    fileName: "Transitions-from-Primary-to-Lower-Secondary-School-A-Focus-on-Equity_1564579291.pdf",
  },
  // 2023 Publications
  {
    date: "January 2024",
    title: "2023 In Review: Our Impact",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/2023-in-review.pdf",
    fileName: "2023-in-review.pdf",
  },
  {
    date: "2023",
    title: "What Decolonize Evaluation Could Look Like in Practice",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/What-decolonize-evaluation-could-look-like-in-practice.pdf",
    fileName: "What-decolonize-evaluation-could-look-like-in-practice.pdf",
  },
  {
    date: "2023",
    title: "Unpacking African-led Evaluation through the Lens of Collaborative Auto-Ethnography",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Unpacking-African-led-evaluation-through-the-Lens-of-collaborative-Auto-Ethnography.pdf",
    fileName: "Unpacking-African-led-evaluation-through-the-Lens-of-collaborative-Auto-Ethnography.pdf",
  },
  // 2022 Publications
  {
    date: "November 2022",
    title: "Understanding Vulnerability and Exclusion in Ghana",
    type: "PDA Publication",
    topic: "Social Development",
    downloadUrl: "/assets/documents/Understanding_Vulnerability_and_Exclusion_in_Ghana_November_2022.pdf",
    fileName: "Understanding_Vulnerability_and_Exclusion_in_Ghana_November_2022.pdf",
  },
  {
    date: "2022",
    title: "Report for 2022 PDA Annual Staff Retreat",
    type: "PDA Report / Concept Note",
    topic: "General",
    downloadUrl: "/assets/documents/Report for 2022 PDA Annual Staff Retreat.pdf",
    fileName: "Report for 2022 PDA Annual Staff Retreat.pdf",
  },
  {
    date: "2022",
    title: "7th Annual Knowledge-sharing Workshop Concept Note",
    type: "PDA Report / Concept Note",
    topic: "General",
    downloadUrl: "/assets/documents/7th-Annual-Knowledge-sharing-Workshop_Concept-Note.pdf",
    fileName: "7th-Annual-Knowledge-sharing-Workshop_Concept-Note.pdf",
  },
  // 2021 Publications
  {
    date: "2021",
    title: "Female-Led MSMEs Main Report",
    type: "PDA Publication",
    topic: "Business Development",
    downloadUrl: "/assets/documents/Female-Led-MSMEs-Main-report_1631529362.pdf",
    fileName: "Female-Led-MSMEs-Main-report_1631529362.pdf",
  },
  {
    date: "2021",
    title: "Female-Led MSMEs Policy Brief 1",
    type: "Policy Brief",
    topic: "Business Development",
    downloadUrl: "/assets/documents/Female-Led-MSMEs-PolicyBrief-1_1631782149.pdf",
    fileName: "Female-Led-MSMEs-PolicyBrief-1_1631782149.pdf",
  },
  {
    date: "2021",
    title: "Female-Led MSMEs Policy Brief 2",
    type: "Policy Brief",
    topic: "Business Development",
    downloadUrl: "/assets/documents/Female-Led-MSMEs-PolicyBrief-2_1631782097 (1).pdf",
    fileName: "Female-Led-MSMEs-PolicyBrief-2_1631782097 (1).pdf",
  },
  // 2020 Publications
  {
    date: "September 2020",
    title: "FTS-PDA Endline Report",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/FTS-PDA-Endline-Report-FINAL-200924.pdf",
    fileName: "FTS-PDA-Endline-Report-FINAL-200924.pdf",
  },
  {
    date: "2020",
    title: "Ghana Youth Business Performance and Sustainability Index Report",
    type: "PDA Publication",
    topic: "Youth Development",
    downloadUrl: "/assets/documents/Ghana_Youth_Business_Performance_and_Sustainability_Index_report.pdf",
    fileName: "Ghana_Youth_Business_Performance_and_Sustainability_Index_report.pdf",
  },
  {
    date: "2020",
    title: "Future of Work Report",
    type: "PDA Publication",
    topic: "Youth Development",
    downloadUrl: "/assets/documents/Future of Work report .pdf",
    fileName: "Future of Work report .pdf",
  },
  // 2019 Publications
  {
    date: "2019",
    title: "The State of Youth Health in Ghana's Construction Industry",
    type: "PDA Publication",
    topic: "Health",
    downloadUrl: "/assets/documents/The state of youth health in Ghana's construction industry.pdf",
    fileName: "The state of youth health in Ghana's construction industry.pdf",
  },
  {
    date: "2019",
    title: "A Story of Change in the Cocoa Sector",
    type: "PDA Publication",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/A-story-of-change-in-the-cocoa-sector.pdf",
    fileName: "A-story-of-change-in-the-cocoa-sector.pdf",
  },
  // 2018 Publications
  {
    date: "November 2018",
    title: "Report on Child Protection",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/Report_on_child_protection_Nov_2018.pdf",
    fileName: "Report_on_child_protection_Nov_2018.pdf",
  },
  {
    date: "September 2018",
    title: "VSLA and GALS Update",
    type: "PDA Report / Concept Note",
    topic: "Financial Inclusion",
    downloadUrl: "/assets/documents/vsla_and_gals_update_sept_2018.pdf",
    fileName: "vsla_and_gals_update_sept_2018.pdf",
  },
  {
    date: "April 2018",
    title: "Trafficking's Footprint in Ghana",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/Traffickings-Footprint-in-Ghana-April-2018 (1).pdf",
    fileName: "Traffickings-Footprint-in-Ghana-April-2018 (1).pdf",
  },
  {
    date: "2018",
    title: "Addressing Child Labour in Ghana",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/addressing_child_labour_in_ghana2018.pdf",
    fileName: "addressing_child_labour_in_ghana2018.pdf",
  },
  {
    date: "2018",
    title: "VSLA-GALS Economic Empowerment",
    type: "PDA Publication",
    topic: "Financial Inclusion",
    downloadUrl: "/assets/documents/VSLA-GALS-ECONOMIC-EMPOWERMENT.pdf",
    fileName: "VSLA-GALS-ECONOMIC-EMPOWERMENT.pdf",
  },
  {
    date: "2018",
    title: "The State of Child Protection in Ghana",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/The_state_of_Child_Protection_in_Ghana.pdf",
    fileName: "The_state_of_Child_Protection_in_Ghana.pdf",
  },
  {
    date: "2018",
    title: "Ghana Youth Business Performance Final Report",
    type: "PDA Publication",
    topic: "Youth Development",
    downloadUrl: "/assets/documents/GHANA_YOUTH_BUSINESS_PERFORMANCE_Final_Final.pdf",
    fileName: "GHANA_YOUTH_BUSINESS_PERFORMANCE_Final_Final.pdf",
  },
  {
    date: "2018",
    title: "Criminalizing Cocoa Farm Destruction",
    type: "PDA Publication",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/Criminalizing-Cocoa-Farm-Destruction-new.pdf",
    fileName: "Criminalizing-Cocoa-Farm-Destruction-new.pdf",
  },
  {
    date: "2018",
    title: "Building on the Successes of the Recent Crack Down on Galamsey: Robust Local Governance as the Solution",
    type: "PDA Publication",
    topic: "Governance",
    downloadUrl: "/assets/documents/Building_on_the_Successes_of_the_Recent_Crack_Down_on_Galamsey_Robust_Local_Governance_as_the_Solution.pdf",
    fileName: "Building_on_the_Successes_of_the_Recent_Crack_Down_on_Galamsey_Robust_Local_Governance_as_the_Solution.pdf",
  },
  {
    date: "2018",
    title: "Galamsey and Illegal Mining in Ghana",
    type: "PDA Publication",
    topic: "Governance",
    downloadUrl: "/assets/documents/Galamsey_and_Illegal_mining_in_Ghana.pdf",
    fileName: "Galamsey_and_Illegal_mining_in_Ghana.pdf",
  },
  {
    date: "2018",
    title: "Participatory Development Associates Pilots Phonics-by-Phone Literacy Programme in Edify Schools",
    type: "PDA Report / Concept Note",
    topic: "Education",
    downloadUrl: "/assets/documents/PARTICIPATORY_DEVELOPMENT_ASSOCIATES_PILOTS_PHONICS-BY-PHONE_LITERACY_PROGRAMME_IN_EDIFY_SCHOOLS_IN_THE_ASHANTI_AND_EASTERN_REGIONS.pdf",
    fileName: "PARTICIPATORY_DEVELOPMENT_ASSOCIATES_PILOTS_PHONICS-BY-PHONE_LITERACY_PROGRAMME_IN_EDIFY_SCHOOLS_IN_THE_ASHANTI_AND_EASTERN_REGIONS.pdf",
  },
  {
    date: "2018",
    title: "Participatory Poverty and Vulnerability Assessment",
    type: "PDA Publication",
    topic: "Social Development",
    downloadUrl: "/assets/documents/Participatory Poverty and Vulnerability Assessment.pdf",
    fileName: "Participatory Poverty and Vulnerability Assessment.pdf",
  },
  {
    date: "2018",
    title: "PDA Report on Knowledge Sharing Workshop on Child Protection",
    type: "PDA Report / Concept Note",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/PDA_Report_on_Knowledge_Sharing_Workshop_on_Child_Protection.pdf",
    fileName: "PDA_Report_on_Knowledge_Sharing_Workshop_on_Child_Protection.pdf",
  },
  {
    date: "2018",
    title: "Communique: Protecting the Ghanaian School Child - Improving Effective Partnerships between State and Non-state Actors",
    type: "PDA Report / Concept Note",
    topic: "Education",
    downloadUrl: "/assets/documents/Communique_Protecting_the_Ghanaian_School_Child_Improving_Effective_Partnerships_between_State_and_Non-state_Actors.pdf",
    fileName: "Communique_Protecting_the_Ghanaian_School_Child_Improving_Effective_Partnerships_between_State_and_Non-state_Actors.pdf",
  },
  {
    date: "2018",
    title: "Concept Note of 3rd Annual Knowledge Sharing on Child Protection",
    type: "PDA Report / Concept Note",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/Concept_note_of_3rd_Annual_knowledge_sharing__on_child_protection.pdf",
    fileName: "Concept_note_of_3rd_Annual_knowledge_sharing__on_child_protection.pdf",
  },
  {
    date: "2018",
    title: "Child Protection Report Concept Note",
    type: "PDA Report / Concept Note",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/child_protection_report_concept_note.pdf",
    fileName: "child_protection_report_concept_note.pdf",
  },
  {
    date: "2018",
    title: "Executive Summary",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/executive-summary.pdf",
    fileName: "executive-summary.pdf",
  },
  {
    date: "2018",
    title: "Overview of PDA Child Abuse Tracker",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/Overview of PDA Child Abuse Tracker.pdf",
    fileName: "Overview of PDA Child Abuse Tracker.pdf",
  },
  {
    date: "2018",
    title: "Research Brief - Mental Health",
    type: "PDA Publication",
    topic: "Health",
    downloadUrl: "/assets/documents/Research_Brief_-_Mental_Health.pdf",
    fileName: "Research_Brief_-_Mental_Health.pdf",
  },
  {
    date: "2018",
    title: "Research Brief - Physical Health",
    type: "PDA Publication",
    topic: "Health",
    downloadUrl: "/assets/documents/Research_Brief_-_Physical_Health.pdf",
    fileName: "Research_Brief_-_Physical_Health.pdf",
  },
  {
    date: "2018",
    title: "Research Brief - Stakeholders",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/Research_Brief_-_Stakeholders.pdf",
    fileName: "Research_Brief_-_Stakeholders.pdf",
  },
  {
    date: "2018",
    title: "2nd National Level Multi-Sectoral Stakeholders Dialogue",
    type: "PDA Report / Concept Note",
    topic: "Governance",
    downloadUrl: "/assets/documents/2_ND_NATIONAL_LEVEL_MULTI_SECTORAL_STAKEHOLDERS_DIALOGUE.pdf",
    fileName: "2_ND_NATIONAL_LEVEL_MULTI_SECTORAL_STAKEHOLDERS_DIALOGUE.pdf",
  },
  {
    date: "2018",
    title: "Communique 5KWS",
    type: "PDA Report / Concept Note",
    topic: "General",
    downloadUrl: "/assets/documents/Communique_5KWS.pdf",
    fileName: "Communique_5KWS.pdf",
  },
  {
    date: "2018",
    title: "Concept Note 6KSW",
    type: "PDA Report / Concept Note",
    topic: "General",
    downloadUrl: "/assets/documents/Concept note_6KSW.pdf",
    fileName: "Concept note_6KSW.pdf",
  },
  {
    date: "2018",
    title: "Addressing Wage Disparities in Ghana's Public Sector",
    type: "PDA Publication",
    topic: "Social Development",
    downloadUrl: "/assets/documents/Wage-Inequalities.pdf",
    fileName: "Wage-Inequalities.pdf",
  },
  {
    date: "2018",
    title: "Capacity Building for Research and Evidence-Based Policy Influence, Advocacy and Communications in Africa",
    type: "PDA Publication",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Capacity_Building_for_Research_and_Evidence-Based_Policy_Influence_Advocacy_and_Communications_in_Africa.pdf",
    fileName: "Capacity_Building_for_Research_and_Evidence-Based_Policy_Influence_Advocacy_and_Communications_in_Africa.pdf",
  },
  {
    date: "2018",
    title: "Changing the Norm: Making Agriculture 'Cool' for Young People",
    type: "PDA Publication",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/CHANGING_THE_NORM_MAKING_AGRICULTURE__COOL__FOR_YOUNG_PEOPLE.pdf",
    fileName: "CHANGING_THE_NORM_MAKING_AGRICULTURE__COOL__FOR_YOUNG_PEOPLE.pdf",
  },
  {
    date: "2018",
    title: "Confronting Political Vigilantism in Ghana",
    type: "PDA Publication",
    topic: "Governance",
    downloadUrl: "/assets/documents/CONFRONTING_POLITICAL_VIGILANTISM_IN_GHANA.pdf",
    fileName: "CONFRONTING_POLITICAL_VIGILANTISM_IN_GHANA.pdf",
  },
  {
    date: "2018",
    title: "Symposium on the State of Freedom and Justice in Ghana",
    type: "PDA Report / Concept Note",
    topic: "Governance",
    downloadUrl: "/assets/documents/SYMPOSIUM_ON_THE_STATE_OF_FREEDOM_AND__JUSTICE_IN_GHANA.pdf",
    fileName: "SYMPOSIUM_ON_THE_STATE_OF_FREEDOM_AND__JUSTICE_IN_GHANA.pdf",
  },
  {
    date: "2018",
    title: "Why Ghanaians Should Vote No on 17th December",
    type: "Opinion Paper",
    topic: "Governance",
    downloadUrl: "/assets/documents/WHY_GHANAIANS_SHOULD_VOTE_NO_ON_17TH_DECEMBER.pdf",
    fileName: "WHY_GHANAIANS_SHOULD_VOTE_NO_ON_17TH_DECEMBER.pdf",
  },
  {
    date: "2018",
    title: "Gender in National History Narratives in Social Studies Textbooks for Ghana",
    type: "PDA Publication",
    topic: "Education",
    downloadUrl: "/assets/documents/Gender_in_national_history_narratives_in_social_studies_textbooks_for_Ghana.pdf",
    fileName: "Gender_in_national_history_narratives_in_social_studies_textbooks_for_Ghana.pdf",
  },
  {
    date: "2018",
    title: "Indigenous Knowledge Systems in Evaluation Practice",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Indigenouse-Knowledge-systems-in-Evaluation-Practice.pdf",
    fileName: "Indigenouse-Knowledge-systems-in-Evaluation-Practice.pdf",
  },
  {
    date: "2018",
    title: "Final RTIMP Impact Evaluation Report - Annexes Only",
    type: "PDA Publication",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/Final_RTIMP_Impact_Evaluation_Report_-_Annexes_only-final_draft_12_Oct.pdf",
    fileName: "Final_RTIMP_Impact_Evaluation_Report_-_Annexes_only-final_draft_12_Oct.pdf",
  },
  {
    date: "2018",
    title: "Impact Evaluation of the SADA Millennium Villages Project in Northern Ghana",
    type: "PDA Publication",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/IMPACT EVALUATION OF THE SADA MILLENNIUM VILLAGES PROJECT IN NORTHERN GHANA.pdf",
    fileName: "IMPACT EVALUATION OF THE SADA MILLENNIUM VILLAGES PROJECT IN NORTHERN GHANA.pdf",
  },
  {
    date: "2018",
    title: "IMPACT Project",
    type: "PDA Publication",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/IMPACT_Project.pdf",
    fileName: "IMPACT_Project.pdf",
  },
  // 2017 and Earlier Publications (Archive) - Scroll anchor for archive section
  {
    date: "2017",
    title: "ERC Guidelines for Applicants",
    type: "PDA Report / Concept Note",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/ERC-Guidelines-for-Applicants.pdf",
    fileName: "ERC-Guidelines-for-Applicants.pdf",
  },
  {
    date: "February 2017",
    title: "ERC Guidelines for Applicants",
    type: "PDA Report / Concept Note",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/ERC_guidelines_for_applicants_09Feb17.pdf",
    fileName: "ERC_guidelines_for_applicants_09Feb17.pdf",
  },
  {
    date: "2015",
    title: "PDA Working Paper Series 2015: Child Rights",
    type: "PDA Publication",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/PDA_Working_Paper_Series_2015_Child_Rights_Final.pdf",
    fileName: "PDA_Working_Paper_Series_2015_Child_Rights_Final.pdf",
  },
  {
    date: "October 2015",
    title: "Cassava Update",
    type: "PDA Publication",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/cassava_oct_2015_upd.pdf",
    fileName: "cassava_oct_2015_upd.pdf",
  },
  {
    date: "November 2015",
    title: "Interviews and Expert Opinion 2015",
    type: "PDA Publication",
    topic: "Research & Evaluation",
    downloadUrl: "/assets/documents/interviews_and_expert_opinion_2015_publish_30nov2015.pdf",
    fileName: "interviews_and_expert_opinion_2015_publish_30nov2015.pdf",
  },
  {
    date: "2015",
    title: "Opinion Series: Plastic Bags",
    type: "Opinion Paper",
    topic: "Governance",
    downloadUrl: "/assets/documents/opinion_series_plastic bags_final (2).pdf",
    fileName: "opinion_series_plastic bags_final (2).pdf",
  },
  {
    date: "2010",
    title: "World Bank Social Dimension Adaptation Ghana",
    type: "PDA Publication",
    topic: "Social Development",
    downloadUrl: "/assets/documents/world_bank_social_dim_adapt_ghana_20101.pdf",
    fileName: "world_bank_social_dim_adapt_ghana_20101.pdf",
  },
  {
    date: "December 2020",
    title: "Why Ghanaians Should Vote No on 17th December",
    type: "Opinion Paper",
    topic: "Governance",
    downloadUrl: "/assets/documents/1619434093wpdm_WHY_GHANAIANS_SHOULD_VOTE_NO_ON_17TH_DECEMBER.pdf",
    fileName: "1619434093wpdm_WHY_GHANAIANS_SHOULD_VOTE_NO_ON_17TH_DECEMBER.pdf",
  },
  {
    date: "2020",
    title: "Mental Health",
    type: "PDA Publication",
    topic: "Health",
    downloadUrl: "/assets/documents/1620048044wpdm_Mental Health.pdf",
    fileName: "1620048044wpdm_Mental Health.pdf",
  },
  {
    date: "2020",
    title: "Physical Health",
    type: "PDA Publication",
    topic: "Health",
    downloadUrl: "/assets/documents/1620048366wpdm_Physical Health.pdf",
    fileName: "1620048366wpdm_Physical Health.pdf",
  },
  {
    date: "2020",
    title: "Stakeholders",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/1620048768wpdm_Stakeholders.pdf",
    fileName: "1620048768wpdm_Stakeholders.pdf",
  },
  {
    date: "2022",
    title: "Participatory Poverty and Vulnerability Assessment - Final Report",
    type: "PDA Publication",
    topic: "Social Development",
    downloadUrl: "/assets/documents/1642531860wpdm_FINAL_PPVA_LO_RES_FOR_web_1.pdf",
    fileName: "1642531860wpdm_FINAL_PPVA_LO_RES_FOR_web_1.pdf",
  },
  {
    date: "2022",
    title: "Child Protection Report Concept Note",
    type: "PDA Report / Concept Note",
    topic: "Child Protection",
    downloadUrl: "/assets/documents/1642541398wpdm_child_protection_report_concept_note.pdf",
    fileName: "1642541398wpdm_child_protection_report_concept_note.pdf",
  },
  {
    date: "2022",
    title: "Executive Summary",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/1642543085wpdm_executive-summary.pdf",
    fileName: "1642543085wpdm_executive-summary.pdf",
  },
  {
    date: "2022",
    title: "Communique",
    type: "PDA Report / Concept Note",
    topic: "General",
    downloadUrl: "/assets/documents/communique.pdf",
    fileName: "communique.pdf",
  },
  {
    date: "2022",
    title: "Photo Essay",
    type: "PDA Publication",
    topic: "General",
    downloadUrl: "/assets/documents/photo_essay.pdf",
    fileName: "photo_essay.pdf",
  },
  {
    date: "2022",
    title: "Info-graphics on Young People in Mining",
    type: "PDA Publication",
    topic: "Youth Development",
    downloadUrl: "/assets/documents/Info-graphics on young p-min.pdf",
    fileName: "Info-graphics on young p-min.pdf",
  },
  {
    date: "2022",
    title: "COVID-19: A Threat To Food Security In Ghana",
    type: "PDA Publication",
    topic: "Agriculture",
    downloadUrl: "/assets/documents/COVID-19 A Threat To Food Security In Ghana.pdf",
    fileName: "COVID-19 A Threat To Food Security In Ghana.pdf",
  },
];

const FilterableTable = () => {
  const { t } = useTranslation();
  const INITIAL_VISIBLE_COUNT = 12;
  const LOAD_MORE_STEP = 12;
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    topic: "",
  });
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Helper function to translate report types
  const translateType = (type) => {
    const reportTypes = t("publications.reportTypes");
    if (reportTypes && typeof reportTypes === "object" && reportTypes[type]) {
      return reportTypes[type];
    }
    return type;
  };

  // Helper function to translate topics
  const translateTopic = (topic) => {
    const topics = t("publications.topics");
    if (topics && typeof topics === "object" && topics[topic]) {
      return topics[topic];
    }
    return topic;
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const clearFilters = () => {
    setFilters({ type: "", date: "", topic: "" });
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const filteredReports = reports.filter(
    (report) =>
      (filters.type === "" || report.type === filters.type) &&
      (filters.date === "" || report.date === filters.date) &&
      (filters.topic === "" || report.topic === filters.topic)
  );
  const visibleReports = filteredReports.slice(0, visibleCount);
  const hasMoreReports = visibleCount < filteredReports.length;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="border border-gray-300 px-3 sm:px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange text-sm sm:text-base flex-1 min-w-[140px] sm:min-w-[160px]"
        >
          <option value="">{t("publications.filterReportType")}</option>
          {[...new Set(reports.map((r) => r.type))].map((type) => (
            <option key={type} value={type}>
              {translateType(type)}
            </option>
          ))}
        </select>

        <select
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="border border-gray-300 px-3 sm:px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange text-sm sm:text-base flex-1 min-w-[140px] sm:min-w-[160px]"
        >
          <option value="">{t("publications.filterDate")}</option>
          {[...new Set(reports.map((r) => r.date))].map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <select
          name="topic"
          value={filters.topic}
          onChange={handleFilterChange}
          className="border border-gray-300 px-3 sm:px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange text-sm sm:text-base flex-1 min-w-[140px] sm:min-w-[160px]"
        >
          <option value="">{t("publications.filterTopic")}</option>
          {[...new Set(reports.map((r) => r.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {translateTopic(topic)}
            </option>
          ))}
        </select>

        <motion.button
          onClick={clearFilters}
          className="bg-orange text-white px-3 sm:px-4 py-2 rounded-md hover:bg-orange/90 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("publications.clearFilters")}
        </motion.button>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {filteredReports.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p>{t("publications.noReportsFound")}</p>
          </div>
        ) : (
          visibleReports.map((report, index) => (
            <motion.div
              key={index}
              className={`p-4 border-b border-gray-200 last:border-b-0 ${
                index % 2 ? "bg-gray-50" : "bg-white"
              } hover:bg-orange/5 transition-colors duration-300 cursor-pointer group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5, backgroundColor: "rgba(248, 154, 35, 0.1)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">{report.date}</p>
                  <p className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-orange transition-colors duration-300 break-words">
                    {report.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                    <p className="text-gray-600 text-xs sm:text-sm">{translateType(report.type)}</p>
                    {report.fileSize && (
                      <span className="text-xs text-gray-400">({report.fileSize})</span>
                    )}
                  </div>
                </div>
                {report.downloadUrl && (
                  <motion.a
                    href={report.downloadUrl}
                    download={report.fileName || report.downloadUrl.split('/').pop()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-orange text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-orange/90 transition-colors duration-300 whitespace-nowrap w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaDownload className="text-xs" />
                    <span>{t("publications.downloadPDF")}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {hasMoreReports && (
        <div className="mt-6 text-center">
          <motion.button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
            className="px-6 py-3 bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default FilterableTable;
