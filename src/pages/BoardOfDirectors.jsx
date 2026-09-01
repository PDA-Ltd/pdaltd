import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { tony, eleanor, akosua, edem, annabelle, alex, clement, osei, celia, flexcorp, nana, boardHero } from "../assets/images";
import { FaCrown, FaUserTie, FaBuilding, FaCoins, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const BoardOfDirectors = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedBio, setExpandedBio] = useState(null);

  const boardDirectors = [
    {
      name: "Tony Dogbe",
      image: tony,
      position: "Board Chairperson",
      shortBio: "Co-founder of PDA with over 27 years of experience in social development.",
      fullBio: "Tony Dogbe is a co-founder of Participatory Development Associates (PDA) Ltd, where he served as Managing Director from 2008 to 2012 and Co-Director from 2001 to 2008. With over 27 years of experience in social development, Tony has completed more than 65 consultancy assignments, specializing in gender assessments, program analysis, and staff training for various organizations. His expertise spans community development, social entrepreneurship, and organizational management, and he has worked with government, non-government, and private sector institutions. Tony was the Executive Director of the Centre for the Development of People (CEDEP) for nearly nine years and continued to serve on its Board from 2000 to 2009. He also worked for VSO as a Programme Officer and served on its Board of Trustees in the UK from 2000 to 2004. He holds an MSc in Community Organisation for Rural Development from the University of Manchester (1991) and a BA (Hons) in Political Science and Sociology from the University of Ghana (1982). With his wealth of experience and deep understanding of development work at both grassroots and policy levels, Tony continues to make significant contributions to PDA's projects and initiatives. Tony is currently the Executive Director of Sabre Education in Ghana.",
      icon: FaCrown,
      color: "from-orange to-orange/85",
    },
    {
      name: "Celia Marshall",
      image: celia, 
      position: "Vice Chairperson",
      shortBio: "Co-founder of PDA with broad development experience spanning over 25 years in Ghana.",
      fullBio: "Celia is a co-founder of PDA and worked as a staff member for over twelve years – seven as a Co-Director and five as Senior Consultant. She is now a free-lance social development consultant, but continues to contribute to PDA as a board member. Celia brings broad development experience to the PDA Board, having lived and worked in Ghana for over 25 years, taking up roles of facilitator, consultant, manager, trainer, researcher and OD practitioner. She has also worked with a wide range of both civil society and government organisations, and in the fields of education, community development, governance, fund-management, human rights, communication, health, roads, HIV/AIDS, disability. She is passionate about finding ways of realising equality and justice and especially enjoys facilitating learning processes and undertaking qualitative research using participatory approaches. Celia holds an MSc in Community Organisation for Rural Development (Manchester UK, 1989), a Post-Graduate Certificate in Education, (Bath UK, 1984) and a BA (Hons) in Cultural Studies (Portsmouth UK 1983).",
      icon: FaUserTie,
      color: "from-orange/80 to-orange",
    },
    {
      name: "Flexcorp Consult Ltd",
      image: flexcorp, 
      position: "Company Secretary",
      shortBio: "Private limited liability company providing corporate services.",
      fullBio: "Flexcorp Consult Limited is a private limited liability company incorporated under the Ghana Companies Act, 2019 (Act 992). The company provides a range of corporate services, including company formation, pathfinder services, company secretarial services, corporate compliance and regulatory services, professional instruction and training, corporate governance advisory, and immigration solutions. Flexcorp serves both local and multinational entities across various sectors, including banking, insurance, oil & gas, mining, manufacturing, telecommunications, energy and utilities, and NGOs. The company delivers services designed to meet the specific requirements of each sector, ensuring compliance and regulatory adherence.",
      icon: FaBuilding,
      color: "from-orange to-orange/85",
    },
    {
      name: "Nana Kwasi Agyepong",
      image: nana, 
      position: "Company Treasurer",
      shortBio: "Experienced financial administrator with over 30 years of expertise in microfinance.",
      fullBio: "Nana Kwasi Agyepong is an experienced financial administrator, trainer, and governance professional with over 30 years of expertise in microfinance and co-operative development, particularly within financial co-operatives. He is an International Credit Union Development Educator (ICUDE) 2017, recognized in Madison, USA. Nana is the Board Treasurer of Participatory Development Associates (PDA) and PDA Agri Business and Social Enterprise (PASE) Ltd, Board Chair of Beneficial Microfinance Company Ltd, and Director of MFS Consulting. Nana's career in the cooperative sector began in 1991 with the Ghana Cooperative Credit Unions Association (CUA), where he held several positions, including Zonal Manager for the Ashanti and Brong Ahafo regions, and Technical Services Manager for the African Credit Unions Revitalisation Program with the World Council of Credit Unions. He was also the former General Manager and Group CEO of CUA and served as Technical Advisor for African Credit Unions (ACCOSCA) from 2016 to 2019. In addition to his work with PDA and microfinance institutions, Nana has been a lecturer at various institutions, including ICSA Study School, the Institute of Professional Studies, and Jeff Wooller College, London. He also has experience as a Sage Accounts trainer and reseller in Ghana. From 2002 to 2007, he worked as the Finance and Administration Manager at the London Borough of Lewisham, overseeing the Surestart project. He has been the Principal Management Consultant and Executive Director of Microfinance Solutions Consulting since 2007, providing consultancy services to credit unions and microfinance institutions. Nana is also a founding Director of Co-operative Governance Africa and a member of the Co-operative Credit Union Supervisory Agency under the Co-operative Credit Unions Legislative Instrument (L.I. 2225). His vast experience in financial administration, governance, and cooperative development continues to influence the sector positively.",
      icon: FaCoins,
      color: "from-orange/80 to-orange",
    },
  ];

  const boardMembers = [
    {
      name: "Edem Agbe",
      image: edem,
      role: "Managing Director",
    },
    {
      name: "Annabelle Y. Osei",
      image: annabelle,
      role: "Director of Operations",
    },
    {
      name: "Clement Sefa Nyarko (PhD)",
      image: clement,
      role: "Technical Consultant",
    },
    {
      name: "Alexander Afram",
      image: alex,
      role: "Research, Evaluation, and Learning Manager",
    },
    {
      name: "Osei Y. Asuamah",
      image: osei,
      role: "Finance Manager",
    },
  ];

  const toggleBio = (index) => {
    setExpandedBio(expandedBio === index ? null : index);
  };

  return (
    <section
      id="board-of-directors"
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
          src={boardHero}
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
          alt="Board of Directors"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <motion.h1
          className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center absolute bottom-8 sm:bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("boardOfDirectors.title").toUpperCase()}
        </motion.h1>
      </motion.div>

      {/* Board Directors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-orange text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("boardOfDirectors.boardLeadership")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {boardDirectors.map((director, index) => {
            const Icon = director.icon;
            const isExpanded = expandedBio === index;

            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${director.color} rounded-2xl p-6 md:p-8 shadow-xl text-white relative overflow-hidden group cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Icon Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-2xl" />
                </motion.div>

                {/* Image */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="flex-1 pt-4">
                    <h3 className="font-bold text-xl md:text-2xl mb-2">{director.name}</h3>
                    <p className="text-white/90 text-sm md:text-base font-semibold">{director.position}</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {isExpanded ? director.fullBio : director.shortBio}
                  </p>

                  {director.fullBio.length > director.shortBio.length && (
                    <motion.button
                      onClick={() => toggleBio(index)}
                      className="flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          <span>{t("boardOfDirectors.readLess")}</span>
                          <FaChevronUp />
                        </>
                      ) : (
                        <>
                          <span>{t("boardOfDirectors.readMore")}</span>
                          <FaChevronDown />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Board Members Section */}
      <section className="w-full bg-gradient-to-br from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-ash text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("boardOfDirectors.boardMembers").toUpperCase()}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-orange/30 shadow-lg group-hover:border-orange transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                    <FaUserTie className="text-white text-sm" />
                  </div>
                </motion.div>

                <h3 className="font-poppins font-bold text-lg md:text-xl text-ash mb-2 group-hover:text-orange transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="font-poppins text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <div className="mt-20 mb-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          onClick={() => navigate("/teams")}
          className="bg-gray-200 hover:bg-gray-300 text-ash px-8 py-4 rounded-lg font-poppins font-semibold transition-colors"
        >
          Our Teams
        </button>
        <button
          onClick={() => navigate("/staff")}
          className="bg-orange hover:bg-orange text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-colors"
        >
          View All Staff
        </button>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
