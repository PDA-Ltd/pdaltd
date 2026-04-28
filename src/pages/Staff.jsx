import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  annabelle,
  alex,
  ampah,
  edem,
  kamil,
  raymond,
  asuanew,
  asuaold,
  allstaff,
  clement,
  araba,
  prince,
  arnold,
  ignatius,
  selorm,
  gabriel,
  dzato,
  aseda,
  andrew,
  patrick,
  david,
  stella,
  breh,
  charles,
  patricia,
  ken,
  louis,
  abdallah,
  joshua,
  guide,
  bashiru,
  eunice,
  gaddiel,
  seth,
  osei,
  lucy,
  abu,
  derek,
  emelia,
  eugene,
  yaro,
  harrison,
  incoom,
  josephine,
  kalevor,
  philip,
  racheal,
  ruth,
  sanni,
  tietaar,
  ernest,
} from "../assets/images";
import { FaUser, FaBriefcase, FaGraduationCap, FaTimes } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Staff = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedStaff, setSelectedStaff] = useState(null);
  const scrollPositionRef = useRef(0);

  // Handle hash-based scrolling when page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Delay to ensure page is rendered
    }
  }, [location.hash]);

  useEffect(() => {
    if (!selectedStaff) return undefined;

    // Preserve current position and lock background scroll while modal is open.
    scrollPositionRef.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";

    return () => {
      // Restore body styles and return user to exact previous position on close.
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      const restoreY = top
        ? Math.abs(parseInt(top, 10)) || scrollPositionRef.current
        : scrollPositionRef.current;
      window.scrollTo({ top: restoreY, behavior: "auto" });
    };
  }, [selectedStaff]);

  // Staff organized by department
  const staffByDepartment = {
    leadership: [
      {
        name: "EDEM AGBE",
        position: "Managing Director",
        image: edem,
        bio: "Edem Agbe is the Managing Director of PDA. With almost 2 decades in the development sector, Edem leverages a wealth of experience and in-depth knowledge of research, evaluation, project management, organizational development, and training to lead and engage a wide range of global development issues. He has led the ideation of several novel development-focused initiatives in areas such as rural financial inclusion, community-driven development, youth development, tech and digitization in development, entrepreneurship, women economic empowerment, among others. He is an ardent advocate for the use of indigenous knowledge for development. Edem has an MA in Development Studies from the University of Ghana, and a BA in Economics from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "/edem-profile",
      },
      {
        name: "ANNABELLE YEBOAH OSEI",
        position: "Director of Operations",
        image: annabelle,
        bio: "Annabelle is the Director of Operations for PDA. She brings on board her strong knowledge of operations and organizational management, project management, conflict management, and policy formulation and execution – all these developed in her 13 years of career experience. Annabelle is also adept at developing innovative solutions within organizational settings. She is a graduate of the Australian Institute of Business (MBA), the University of Ghana (BSc Agriculture Economics), and the Project Management Institute (Project Management Professional). She combines her many years of working experience and strong academic foundation to drive higher organizational performance.",
        profileLink: "#",
      },
      {
        name: "CLEMENT SEFA-NYARKO",
        position: "Principal Consultant and Technical Advisor",
        image: clement,
        bio: "Before joining the PDA team as Research Manager in August 2015, Clement has been involved in a number of security-related research activities. As consultant for the African Leadership Centre he provided research and advisory services in an IDRC-funded assessment of Kenya's post-election violence and potential prospects for sustainable peace. He presented papers in a number of international conferences, the latest of which was the European Conference for African Studies (ECAS), in Paris in July 2015. He also presented a paper on the creation of collective memory in post-conflict societies at the international Summer School at the George Eckert Institute of international Textbook Research in Germany. Clement worked as a visiting scholar at the Centre of Criminology, University of Cape Town, where he was involved in archival search to appraise security sector reforms in post-apartheid South Africa. He has won a number of fellowships and scholarships. Prior to his engagement in conflict and security discourses, he assisted in other research activities, including anthropological and gender-based research at the Institute of Cross-Cultural Studies (TICSS) in Tamale. He completed a second Master of Arts at the Regional Institute for Population Studies (RIPS), University of Ghana whilst his first Master of Arts was in Conflict, Security and Development, obtained at King's College London, University of London. He is located in the Accra office.",
        profileLink: "#",
      },
      {
        name: "ALEXANDER AFRAM",
        position: "Research, Evaluation & Learning Manager",
        image: alex,
        bio: "Alexander Afram leads PDA Research Evaluation and Learning as the Manager. With an excellent academic foundation and over a decade working in development settings, Alex is highly skilled in policy analysis and providing technical support for program design and implementation. Alex is also experienced in training and capacity building, and design and implementation of quantitative and qualitative research. He has pioneered several research and evaluation projects and led the development of both quantitative and qualitative methodologies. Alex holds an MSc in Development Management, and a BA in Geography and Rural Development from London School of Economics and Political Science – UK, and Kwame Nkrumah University of Science and Technology – Ghana.",
        profileLink: "#",
      },
      {
        name: "OSEI YEBOAH ASUAMAH",
        position: "Finance Manager",
        image: osei,
        bio: "Mr. Osei Yeboah Asuamah is a Chartered Accountant and a proud member of the Institute of Chartered Accountants Ghana (ICAG), with over 11 years of experience in finance and accounting. He holds an MSc in Accounting and Finance from KNUST, as well as a Bachelor of Technology in Accounting with Computing and a Higher National Diploma (HND) in Accounting both from Kumasi Technical University (KSTU). Professionally, he has served in key roles such as Director of Finance at Christian Service University, where his leadership drove transformative achievements. With a reputation as a trusted advisor and innovative leader, Mr. Asuamah is dedicated to fostering growth and sustainability in every organization he serves.",
        profileLink: "#",
      },
    ],
    rel: [
      {
        name: "CHINEBOABA ARABA AFFUL",
        position: "Senior Research Officer",
        image: araba,
        bio: "Araba serves a senior research officer with the PDA Research Evaluation and Learning department. Drawing on her background in Economics, Araba has engaged in collaborative research and has taken on both leadership and co-leadership roles in research projects. Over the years, she has developed expertise in survey planning and management, proposal writing, methodology development, data analysis, communicating findings, and monitoring and evaluating project indicators. She holds a Ph.D. in Economics and Climate Change from the Université Cheikh Anta Diop de Dakar, an M.Phil. in Economics, and a B.A. in Economics from the Kwame Nkrumah University of Science and Technology. She envisions making a meaningful contribution to the world through research, a path she is now actively pursuing.",
        profileLink: "#",
      },
      {
        name: "PRINCE AMOAKO",
        position: "Research and Data Analyst",
        image: prince,
        bio: "Prince Amoako is an eminent economist with many years of professional and practical experience in research and data analysis. Prince Amoako is well known for his impactful contributions to data-driven decision-making and policy formulations in Ghana. With expertise in quantitative and qualitative data analyses, and a deep understanding of socio-cultural and economic context of Ghana, Prince Amoako has built reputation for influencing economic, and health policies in Ghana. Prince Amoako has worked with many local and international institutions such as Ghana Statistical Service, Ghana Enterprise Authority, and Ferrelly and Michell, contributing to areas such as research, data monitoring, financial literacy and monitoring and evaluation. Prince Amoako holds a master’s degree in economics and is currently awaiting his PhD Viva in Economics at Kwame Nkrumah University of Science and Technology (KNUST). Prince Amoako is also a Chartered Financial Economist. His PhD research focused on Mobile Phone Renewal Option and Enrolment in and Renewal of NHIS membership, as well as Delayed Desired Job Employment of Trained Nurses and Job Satisfaction. His academic works have been presented in both local and international conferences and contributed to the development of National Health Insurance Scheme’s (NHIS) mobile app for registration of NHIS membership in Ghana. His specialization includes quantitative data analysis and health economics. Prince Amoako uses relevant software tools to translate complex data into actionable policies. Prince Amoako is also an educator with many years of teaching experience at all levels of education (basic, secondary and tertiary). Prince Amoako is an advocate for emotional intelligence and passionate about social development and youth empowerment. His quality leadership style, professionalism and commitment to excellence continue to position him as a respected personality in Ghana’s research and policy landscape.",
        profileLink: "#",
      },
      {
        name: "ARNOLD KWESI BEDIAKO",
        position: "Assistant Programmes Coordinator",
        image: arnold,
        bio: "Arnold is an Assistant Coordinator with the PDA Research Evaluation and Learning department. He is an experienced researcher with strong expertise in organization development, monitoring and evaluation, WASH program design and implementation, program design and implementation, and training and facilitation. He has over 8 years of working experience. Arnold graduated from the University of Cape Coast with a BSc in Psychology, and an MPhil in Development Studies. He also has a certificate in monitoring evaluation accountability and learning for development professionals (MEAL D. Pro).",
        profileLink: "#",
      },
      {
        name: "IGNATIUS BOADI",
        position: "Senior Project Officer",
        image: ignatius,
        bio: "Ignatius is a Senior Project Officer with the PDA Research Evaluation and Learning department. Throughout his 5 years of experience, Ignatius uses his programming skills to develop innovative solutions for development management. With his postgraduate degree in Mathematical Sciences from the African Institute for Mathematical Sciences and the University of Cape Coast, Ignatius is particularly skilled in machine learning, data analysis, database management, GUI development, and Python programming.",
        profileLink: "#",
      },
      {
        name: "ERNEST ADU OWUSU",
        position: "Senior Project Officer",
        image: ernest,
        bio: "As a Senior Project Officer with the PDA Research Evaluation and Learning department, Ernest has developed competencies in data management analysis and visualization, questionnaire design and scripting, proposal and methodology development, monitoring and evaluation, and project management and coordination. With 7 years of working experience, Ernest has successfully led several field activities, training and reporting. He holds an MPhil in Economics and a BA in Economics (Major) with Information Studies from the University of Ghana.",
        profileLink: "#",
      },
      {
        name: "CHARLES SELORM DEKU",
        position: "Project Officer",
        image: selorm,
        bio: "Charles is a Project Officer with PDA Research Evaluation and Learning department. He holds a BA in Sociology and Social Work and an MPhil in Sociology from the Kwame Nkrumah University of Science and Technology. Over his 8 years of combined working experience, Charles has become adept at quantitative and qualitative analysis, proposal development, project planning and management, training and facilitation, and report writing. He has been instrumental in coordinating field activities.",
        profileLink: "#",
      },
      {
        name: "GABRIEL OPOKU-ANTWI",
        position: "Project Officer",
        image: gabriel,
        bio: "Gabriel Opoku-Antwi is a Project Officer and a member of the Research, Evaluation, and Learning (REL) Unit at Participatory Development Associates (PDA) Ghana. He is a young and self-motivated researcher and development planner who aims to assist any organization to achieve its targeted goals in the capacity he finds himself in. His research interest encompasses several areas such as education, health, empowerment, sustainability, poverty reduction, and urban and rural development. During his period at the Department of Planning of KNUST (Ghana) as a Graduate Assistant, he supported research and teaching and was also equipped with the planning tools that are used in designing, implementing, and managing research projects. As a Research Assistant, he has for the past 5 years worked with the Bureau of Integrated Rural Development (BIRD), KNUST-Kumasi on several research projects of monitoring, evaluation, assessment, and baseline surveys for international and local organizations. He has the skills to use modern software like ODK KoboCollect to design instruments for data collection and the capacity to lead a team to collect and analyze both quantitative and qualitative data. Gabriel holds an MSc in Development Planning and Management and a BA in Geography and Rural Development both from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "LUCY OFORI-DAVIS",
        position: "Senior Project Officer",
        image: lucy,
        bio: "Lucy serves as a Senior Project Officer with the PDA Research Evaluation and Learning department. With her background in Economics, Lucy is adept at adapting economic models for development programming. Over her 6+ years of working in development contexts, she has developed a great deal of expertise in data analysis, report writing, monitoring and evaluation, training and facilitation, and catering. She has an MSc and a BA in Economics from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "DEBORAH EYRAM AMA KALEVOR",
        position: "Project Officer",
        image: kalevor,
        bio: "Deborah Eyram Ama Kalevor is a recent graduate with a Bachelor of Science in Business Administration (Business Information Technology) and a Master of Science in Business and Data Analytics. She is passionate about leveraging her analytical and data science skills to contribute to a dynamic team as a Data Analyst. Deborah is committed to using emerging technology for innovative solutions and learning from experienced professionals. She has participated in the Ghana Statistical Service Hackathon 2023 and has proficiency in Python, R, SQL, and data visualization tools. With strong interpersonal and communication skills, she excels as a collaborative team player.",
        profileLink: "#",
      },
    ],
    finance: [
      {
        name: "VICTORIA AMPAH",
        position: "Senior Finance Officer",
        image: ampah,
        bio: "Victoria is an HND holder (accounting option) from Cape Coast Polytechnic and is currently pursuing a degree programme in Commerce at the University of Cape Coast (UCC). She is presently the Senior Finance Officer at PDA, after having joined the organisation in August 2008 as National Service personnel. She is mainly responsible for maintaining accurate financial data and reporting on PDA and all project activities. She also maintains accurate and up-to-date financial filing and book keeping of all accounting records. She is based in the Kumasi Office.",
        profileLink: "#",
      },
      {
        name: "GODSWAY DZATO",
        position: "Senior Finance Officer",
        image: dzato,
        bio: "Godsway serves as the Snr Finance Officer for PDA Africa. Throughout his five years of experience in finance roles, he has developed rich expertise in financial reporting and analysis. Godsway holds a BSc Administration (Accounting) from the University of Ghana Business School.",
        profileLink: "#",
      },
      {
        name: "STELLA TAKYI",
        position: "Secretarial Support Personnel",
        image: stella,
        bio: "Stella joined PDA in November 2000 as a part time worker. She holds an NVTI certificate in Secretarialship. Prior to joining PDA, She worked at Catholic Graduate for Action (CAGA) as professional secretarial personnel. She is currently works at PDA's Secretarial Support Unit as a full time secretarial support personnel and oversees the daily up keep of the PSS office in Kumasi, Tech- Junction.",
        profileLink: "#",
      },
      {
        name: "BREH JIMAH",
        position: "Administrative and Logistics Officer",
        image: breh,
        bio: "Jimah worked with PDA for about six years as an Administrative and Logistics officer from June, 2007 to 2012 before taking a leave. He re-joined the team again on June 1st 2015. He currently provides logistical support for administrative and programmes staff. He also sees to the records of movement, maintenance and road-worthiness of the vehicles in the Kumasi office.",
        profileLink: "#",
      },
      {
        name: "CHARLES KWADWO ANOKYE",
        position: "Administrative and Logistics Officer",
        image: charles,
        bio: "Charles has over 2 decades of experience as a logistics person and a professional driver. Here at PDA, Charles plays key roles in the Finance and Administration department as a Logistics and Administration Officer. He is skilled in driving, performing inventory roles, administration, and community mobilisation. He is also experienced in using Microsoft Office Word and Excel to prepare financial retirement and take inventories. He is a Junior High School graduate.",
        profileLink: "#",
      },
      {
        name: "ZINGLE BELAUNE PATRICIA",
        position: "HR and Administrative Officer",
        image: patricia,
        bio: "Patricia brings on board her 13 years of experience to lead PDA's administrative wing as the HR and Administrative Officer. She is an astute member of the Chartered Institute of Human Resources Management (CIHRM), and also holds a bachelor’s degree in Management Studies from the University of Cape Coast. Patricia is competent in facilitating training sessions, data collection, general administrative and logistics, and customer relation management.",
        profileLink: "#",
      },
      {
        name: "KENNEDY ANKOMAH BOADU",
        position: "Assistant Logistics Officer",
        image: ken,
        bio: "Ken joined PDA in 2018 as an Assistant Logistics Officer. He manages program logistics and provides general administrative and programmatic support to PDA staff primarily in Accra. With several years of experience as a driver, he also assists in community entry during PDA field research and plays an important role in providing any necessary background support.",
        profileLink: "#",
      },
      {
        name: "RUTH MENSAH",
        position: "Admin and Accounts Officer",
        image: ruth,
        bio: "Ruth is an Administrative and Accounts Officer in PDA's Accra office. She holds a Bachelor of Commerce (Accounting) from University of Cape Coast. With approximately six years of professional experience across educational institutions and consultancy firms, Ruth has served in a broad range of roles that have strengthened her administrative, financial, and organizational competencies. A proactive leader recognized for her confidence, collaborative working style, and professionalism, she brings on board strong skills in team coordination and nurturing partner relationships. At PDA, she coordinates and oversees administrative and logistical functions while providing accounting support for daily operations at the Accra office. Her work ensures that internal systems run smoothly, enabling organizational productivity and operational effectiveness.",
        profileLink: "#",
      },
    ],
    communications: [
      {
        name: "ASEDA MENSAH",
        position: "Programmes Coordinator, Advocacy and Communications",
        image: aseda,
        bio: "Aseda is the Coordinator for the PDA Communications and Advocacy Department. Aseda is an experienced communicator, digital media manager, editor, event moderator, and training facilitator. She has over 6 years of experience using various tools to design, implement and lead communication- and advocacy-centred initiatives to promote meaningful social change. Aseda is a graduate of the University of Ghana with an MPhil in Marketing and a BSc in E-Commerce and Customer Management.",
        profileLink: "#",
      },
      {
        name: "GADDIEL MENSAH YAMOAH",
        position: "Senior Project Officer, Advocacy and Communications",
        image: gaddiel,
        bio: "Gaddiel is a seasoned multimedia expert who combines his in-depth knowledge and experience to produce highly valued content for women empowerment, child protection, and financial inclusion. His main areas of expertise are in graphic design, video production and multimedia. With his 8+ years of experience, Gaddiel works as a Senior Project Officer with the PDA Communications and Advocacy department. He is a graduate of the Kwame Nkrumah University of Science and Technology with a BA in Communication Design.",
        profileLink: "#",
      },
      {
        name: "SETH KWADWO OPPONG",
        position: "Senior Project Officer, Advocacy and Communications",
        image: seth,
        bio: "Seth is a Senior Project Officer with the PDA Communications and Advocacy department. Seth has a decade of experience working as a multimedia expert. He is highly skilled in graphic engineering, photography and videography, website management, 3D modelling, and motion graphics. He has designed several communication and promotional materials on financial inclusion and child protection. Seth graduated from the Kwame Nkrumah University of Science and Technology with a BA in Communication Design.",
        profileLink: "#",
      },
      // {
      //   name: "JOSEPHINE ESI KPODO",
      //   position: "Project Officer",
      //   image: josephine,
      //   bio: "Josephine Esi Kpodo is passionate about using technology to drive improvements in various fields. Spurred on by this passion, she pursued software engineering and has gained proficiency in programming languages such as HTML, CSS, JavaScript, TypeScript and React. As the graduate intern for website programming and management at Participatory Development Associates, Josephine utilizes her technical skills to create and manage websites that align with the organization's strategic themes. Her strong analytical and creative abilities enable her to develop innovative solutions that enhance user experiences and support the organization's initiatives, positioning her to excel in her role.",
      //   profileLink: "#",
      // },
      {
        name: "DEREK AMPOFO NKANSAH",
        position: "Project Officer",
        image: derek,
        bio: "Derek Ampofo Nkansah is a graduate with a Diploma in Information Technology, passionate about technology development, creative graphics design, and multimedia. He also work part-time as a music studio manager, skilled in various Digital Audio Workstations (DAWs) audio recording setups and also Graphics design. With strong interpersonal and collaborative skills, He excels in team environments and is dedicated to building and supporting his community. His goal is to leverage his skills to create innovative solutions and foster positive change.",
        profileLink: "#",
      },
    ],
    pdaAfrica: [
       {
        name: "DAVID ESHUN",
        position: "Project Coordinator, PDA Africa",
        image: david,
        bio: "David serves as an Assistant Project Coordinator for PDA Africa. David has 14 years of experience leading the implementation of several community-level initiatives in Ghana and Cote d'Ivoire. He leverages his many years of experience and skills in project design and coordination, facilitation of gender action and learning systems training, data analysis, design of training manuals, and monitoring and evaluation to deliver excellent project implementation. David is an economist with an MSc in Economics and a BSc in Natural Resources Management from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "KAMIL ABDUL SALAM",
        position: "Project Coordinator, PDA Africa",
        image: kamil,
        bio: "Kamil is a Project Coordinator with PDA Africa, leading the Child Labor Remediation project. As an experienced development professional with expertise in designing and implementing community development interventions, Kamil has led numerous projects in Community Action Planning (CAP), Community Health and Wellbeing, Sustainable Development Projects, Social Mobilization and Organisation and Partnership Development with Community and State Institutions. He loves to share his opinions and experiences on social and economic development blogs on human and social development. He holds a Master of Science in Development Policy Planning and a Bachelor of Science in Planning from the Kwame Nkrumah University of Science and Technology.",
        profileLink: "#",
      },
      {
        name: "ANDREWS ANIAH ADUNMOLEGA",
        position: "Assistant Project Officer, PDA Africa",
        image: andrew,
        bio: "Andrew has over 14 years of experience in community development and leading initiatives that seek to economically empower women and young people. He is stationed with PDA Africa as an Assistant Project Officer. Throughout his career, Andrew has developed expertise in training facilitation, field supervision, monitoring, and community mobilization. He holds a BSc in Organizational Development from the College for Community and Organisational Development, Sunyani.",
        profileLink: "#",
      },
      {
        name: "PATRICK ASIHENE DWAMENA",
        position: "Senior Project Officer, PDA Africa",
        image: patrick,
        bio: "Patrick is a Senior Project Officer with PDA Africa team and brings over 16 years of experience leading community-based development initiatives. He supervises projects in Ghana, Cameroon, and Côte d'Ivoire. He has played a key role in shaping PDA's financial inclusion initiatives at the community level. His professional strengths include training, facilitation, report writing, icebreaking, and data analysis. Patrick holds a Higher National Diploma (HND) in Journalism and Communication from the Institute of Business Management and Journalism, Kumasi.",
        profileLink: "#",
      },
      {
        name: "Louis Nyar Tietaar",
        position: "Project Officer, PDA Africa",
        image: tietaar,
        bio: "Louis is a data analyst with a strong foundation in Excel and a growing expertise in machine learning and data analytics. He holds a Bachelor’s degree in Accounting from Kwame Nkrumah University of Science and Technology and a Data Analytics certification from Azubi Africa. Louis is passionate about using data to generate insights, support decision-making, and build practical, data-driven solutions while continuously developing his skills in analytics and AI technologies.",
        profileLink: "#",
      },
    ],
    fieldOfficers: [
      { name: "LOUIS AHOIN MENSAH", position: "Field Officer", image: louis },
      { name: "ABDALLAH YAKUBU", position: "Field Officer", image: abdallah },
      { name: "JOSHUA ARKOH", position: "Field Officer", image: joshua },
      { name: "GUIDE GADRI ELEFO", position: "Field Officer", image: guide },
      { name: "BASHIRU SEIDU", position: "Field Officer", image: bashiru },
      {
        name: "EUNICE WEBASWEA AVERITIGA",
        position: "Field Officer",
        image: eunice,
      },
      { name: "PHILIP QUAICOE", position: "Field Officer", image: philip },
      { name: "EUNICE YARO", position: "Field Officer", image: yaro },
      { name: "HARRISSON ADU", position: "Field Officer", image: harrison },
      { name: "EUGENE ASAMOAH BOAKYE", position: "Field Officer", image: eugene },
      { name: "RACHEL KANJAMBUDIA BLESSING", position: "Field Officer", image: racheal },
      { name: "EMELIA ANAWINE", position: "Field Officer", image: emelia },
      { name: "ABU MUSAH", position: "Field Officer", image: abu },
      { name: "ISSIFU SANI", position: "Field Officer", image: sanni },
      { name: "SAMUEL INCOOM JUNIOR", position: "Field Officer", image: incoom },
    ],
  };

  const StaffCard = ({ staff, index }) => {
    const hasImage = staff.image !== null;

    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-gray-300 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {hasImage ? (
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-orange/30 shadow-lg group-hover:border-orange transition-colors duration-300">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="h-32 w-32 rounded-full bg-gradient-to-br from-orange/20 to-orange/10 flex items-center justify-center flex-shrink-0 border-4 border-orange/30 group-hover:border-orange transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-orange text-5xl font-bold">
                  {staff.name.charAt(0)}
                </span>
              </motion.div>
            )}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-ash mb-2 group-hover:text-orange transition-colors duration-300">
                {staff.name}
              </h3>
              <p className="font-poppins text-base md:text-lg text-orange font-semibold mb-4 text-center lg:text-left">
                {staff.position}
              </p>
              {staff.bio && (
                <>
                  <p className="font-poppins text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {staff.bio}
                  </p>
                  {staff.bio.length > 150 && (
                    <motion.button
                      type="button"
                      onClick={() => setSelectedStaff(staff)}
                      className="mt-4 flex items-center gap-2 text-orange font-semibold text-sm hover:underline transition-all duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{t("common.readMore")}</span>
                    </motion.button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const DepartmentSection = ({ title, staff, departmentKey, icon: Icon }) => (
    <motion.div
      id={departmentKey}
      className="mb-10 scroll-mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-5 pb-3 border-b-4 border-orange">
        {Icon && (
          <motion.div
            className="bg-orange rounded-full p-3"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="text-white text-2xl" />
          </motion.div>
        )}
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {staff.map((member, index) => (
          <StaffCard
            key={index}
            staff={member}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="staff"
      className="max-container max-w-full w-full min-h-screen font-poppins bg-gradient-to-b from-white to-gray-50"
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={allstaff}
          className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
          alt="PDA Staff"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("staff.title")}
        </motion.h1>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-poppins text-lg md:text-xl text-gray-600 leading-relaxed">
          Meet our dedicated team of professionals working across various
          departments to drive development and positive change in communities
          across Sub-Saharan Africa.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Leadership */}
        <DepartmentSection
          title={t("staff.leadership")}
          staff={staffByDepartment.leadership}
          departmentKey="leadership"
          icon={FaUser}
        />

        {/* Research, Evaluation & Learning */}
        <DepartmentSection
          title={t("staff.rel")}
          staff={staffByDepartment.rel}
          departmentKey="rel"
          icon={FaGraduationCap}
        />

        {/* Communications & Advocacy */}
        <DepartmentSection
          title={t("staff.communications")}
          staff={staffByDepartment.communications}
          departmentKey="communications"
          icon={FaUser}
        />

        {/* Finance & Administration */}
        <DepartmentSection
          title={t("staff.finance")}
          staff={staffByDepartment.finance}
          departmentKey="finance"
          icon={FaBriefcase}
        />

        {/* PDA Africa */}
        <DepartmentSection
          title={t("staff.pdaAfrica")}
          staff={staffByDepartment.pdaAfrica}
          departmentKey="pdaAfrica"
          icon={FaUser}
        />

        {/* Field Officers */}
        <motion.div
          id="fieldOfficers"
          className="mb-10 scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-5 pb-3 border-b-4 border-orange">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ash">
              {t("staff.fieldOfficers")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffByDepartment.fieldOfficers.map((officer, index) => {
              const hasImage = officer.image !== null;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border-l-4 border-gray-300 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {hasImage ? (
                    <motion.div
                      className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-orange/30 group-hover:border-orange transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img
                        src={officer.image}
                        alt={officer.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="h-24 w-24 rounded-full bg-gradient-to-br from-orange/20 to-orange/10 flex items-center justify-center mx-auto mb-4 border-4 border-orange/30 group-hover:border-orange transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-orange text-3xl font-bold">
                        {officer.name.charAt(0)}
                      </span>
                    </motion.div>
                  )}
                  <h3 className="font-poppins font-bold text-lg text-ash mb-2 group-hover:text-orange transition-colors duration-300">
                    {officer.name}
                  </h3>
                  <p className="font-poppins text-sm md:text-base text-orange font-semibold">
                    {officer.position}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStaff && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStaff(null)}
          >
            <motion.div
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {selectedStaff.image ? (
                    <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-orange/30 flex-shrink-0">
                      <img
                        src={selectedStaff.image}
                        alt={selectedStaff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange/20 to-orange/10 flex items-center justify-center border-4 border-orange/30 flex-shrink-0">
                      <span className="text-orange text-2xl font-bold">
                        {selectedStaff.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                  <h3 className="font-poppins font-bold text-2xl text-ash">{selectedStaff.name}</h3>
                  <p className="font-poppins text-orange font-semibold">{selectedStaff.position}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStaff(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close bio popup"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <p className="font-poppins text-gray-700 leading-relaxed">{selectedStaff.bio}</p>
              {selectedStaff.profileLink && selectedStaff.profileLink !== "#" && (
                <button
                  type="button"
                  onClick={() => {
                    const link = selectedStaff.profileLink;
                    setSelectedStaff(null);
                    navigate(link);
                  }}
                  className="mt-6 text-orange font-semibold hover:underline"
                >
                  View full profile
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Staff;
