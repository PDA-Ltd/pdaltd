/**
 * News & Activities — bilingual content (English + French).
 *
 * How to add a new item (no coding beyond this file):
 * 1) Copy any full `{ ... },` block below.
 * 2) Set a new `id`, `slug`, `type` ("news" or "activity"), `imageKey` (must match an export name in `src/assets/images/index.js`), `dateIso` (YYYY-MM-DD for sorting).
 * 3) Fill the `en` object completely (date, title, description, category, location, fullContent[], additionalInfo[]).
 * 4) Fill the `fr` object with the same keys. If French is not ready yet, you may omit a field in `fr`:
 *    it will fall back to English for that field only.
 * 5) Optional top-level: `recordingUrl`, `sourceUrl`.
 */

export const newsArticlesRaw = [
  {
    id: 1,
    slug: "farmers-voice-radio-academy",
    type: "news",
    imageKey: "fvr",
    dateIso: "2025-12-15",
    en: {
      date: "December 15, 2025",
      title:
        "Farmers' Voice Radio Academy: Empowering Ghana's Cocoa Farmers Through Participatory Local Language Radio",
      description:
        "We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices and connecting farmers with the knowledge they need to build resilient, inclusive and thriving cocoa communities through the power of participatory local-language FM radio.",
      category: "Community Development",
      location: "Ghana",
      fullContent: [
        "Our Aim: We are working to empower 100,000 smallholder cocoa farmers in Ghana by raising under-represented voices and connecting farmers with the knowledge they need to build resilient, inclusive and thriving cocoa communities through the power of participatory local-language FM radio.",
        "About the Farmers' Voice Radio (FVR) Academy for Cocoa Producers in Ghana: This innovative initiative leverages the reach and accessibility of local FM radio stations to deliver critical information, training, and support directly to cocoa farming communities.",
        "The program focuses on creating participatory content that addresses the real challenges faced by cocoa farmers, including sustainable farming practices, market access, financial literacy, and community development.",
        "Through interactive radio programs broadcast in local languages, farmers gain access to expert knowledge, share experiences with peers, and participate in discussions that shape their agricultural practices and community development initiatives.",
        "The Farmers' Voice Radio Academy represents PDA's commitment to using innovative communication channels to bridge the gap between knowledge and practice, ensuring that development solutions are accessible, relevant, and driven by the communities they serve.",
      ],
      additionalInfo: [
        "Target: 100,000 smallholder cocoa farmers",
        "Focus: Participatory local-language FM radio",
        "Goal: Build resilient, inclusive cocoa communities",
        "Approach: Community-driven content and knowledge sharing",
      ],
    },
    fr: {
      date: "15 décembre 2025",
      title:
        "Académie Radio Voix des agriculteurs : renforcer les producteurs de cacao du Ghana grâce à la radio participative en langues locales",
      description:
        "Nous œuvrons à renforcer 100 000 petits producteurs de cacao au Ghana en donnant la parole aux voix sous-représentées et en reliant les agriculteurs aux connaissances dont ils ont besoin pour bâtir des communautés cacaoyères résilientes, inclusives et prospères grâce à la radio FM participative en langues locales.",
      category: "Développement communautaire",
      location: "Ghana",
      fullContent: [
        "Notre objectif : renforcer 100 000 petits producteurs de cacao au Ghana en élevant les voix sous-représentées et en reliant les agriculteurs aux savoirs nécessaires pour des communautés cacaoyères résilientes, inclusives et florissantes, grâce à la radio FM participative en langues locales.",
        "À propos de l’Académie Radio Voix des agriculteurs (FVR) pour les producteurs de cacao au Ghana : cette initiative innovante s’appuie sur la portée et l’accessibilité des stations FM locales pour diffuser information, formation et accompagnement directement auprès des communautés cacaoyères.",
        "Le programme met l’accent sur des contenus participatifs qui répondent aux défis réels des producteurs : pratiques agricoles durables, accès aux marchés, éducation financière et développement communautaire.",
        "Par des émissions interactives en langues locales, les agriculteurs accèdent à l’expertise, partagent leurs expériences et contribuent aux débats qui façonnent leurs pratiques agricoles et le développement de leur communauté.",
        "L’Académie illustre l’engagement du PDA à utiliser des canaux de communication innovants pour rapprocher savoir et pratique, afin que les solutions de développement soient accessibles, pertinentes et portées par les communautés.",
      ],
      additionalInfo: [
        "Cible : 100 000 petits producteurs de cacao",
        "Priorité : radio FM participative en langues locales",
        "Objectif : communautés cacaoyères résilientes et inclusives",
        "Méthode : contenu communautaire et partage des savoirs",
      ],
    },
  },
  {
    id: 2,
    slug: "8th-child-protection-workshop",
    type: "news",
    imageKey: "kswa",
    dateIso: "2025-12-11",
    en: {
      date: "December 11, 2025",
      title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
      description:
        "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
      category: "Child Protection",
      location: "Accra & Bechem, Ghana",
      fullContent: [
        "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
        "The 2025 edition of the workshop brought together national and community stakeholders to address the growing threat of illegal mining galamsey to children in Ghana's cocoa-growing regions.",
        "The workshop provided a platform for dialogue, knowledge sharing, and collaborative action to strengthen child protection mechanisms and address the unique challenges facing children in mining-affected communities.",
        "Key discussions focused on the intersection of illegal mining activities and child protection, exploring how galamsey operations expose children to hazardous working conditions, disrupt education, and compromise their safety and well-being.",
        "Participants included representatives from government agencies, civil society organizations, community leaders, and child protection advocates who shared experiences, best practices, and strategies for protecting children in mining-affected areas.",
        "The workshop outcomes included the development of action plans for enhanced monitoring, community awareness programs, and strengthened collaboration between stakeholders to prevent child exploitation in mining contexts.",
      ],
      additionalInfo: [
        "8th Knowledge Sharing Workshop on Child Protection",
        "Partnership with Department of Children",
        "Focus: Galamsey's impact on children",
        "Multi-level events in Accra and Bechem",
      ],
    },
    fr: {
      date: "11 décembre 2025",
      title:
        "Le PDA organise le 8e atelier sur la protection de l’enfance et met en lumière les risques de la galamsey pour les enfants",
      description:
        "Participatory Development Associates (PDA), en partenariat avec le Département des enfants du ministère du Genre, des Enfants et de la Protection sociale, a organisé le 8e atelier de partage des connaissances sur la protection de l’enfance (KSWoCP), avec deux événements multi-niveaux à Accra et Bechem.",
      category: "Protection de l’enfance",
      location: "Accra et Bechem, Ghana",
      fullContent: [
        "Le PDA, avec le Département des enfants du ministère du Genre, des Enfants et de la Protection sociale, a tenu le 8e atelier de partage des connaissances sur la protection de l’enfance (KSWoCP) à Accra et Bechem.",
        "L’édition 2025 a réuni des acteurs nationaux et communautaires autour de la menace croissante de l’orpaillage illégal (galamsey) pour les enfants des régions cacaoyères du Ghana.",
        "L’atelier a favorisé le dialogue, le partage d’expériences et l’action concertée pour renforcer la protection des enfants dans les communautés minières.",
        "Les échanges ont porté sur les liens entre activités minières illégales et protection de l’enfance : conditions de travail dangereuses, perturbation de la scolarité et atteinte au bien-être.",
        "Y participaient des représentants de l’État, de la société civile, des leaders communautaires et des défenseurs des droits des enfants.",
        "Des plans d’action ont été esquissés pour le suivi, la sensibilisation communautaire et une meilleure coordination contre l’exploitation des enfants dans le secteur minier.",
      ],
      additionalInfo: [
        "8e atelier de partage sur la protection de l’enfance",
        "Partenariat avec le Département des enfants",
        "Thème : impact de la galamsey sur les enfants",
        "Événements à Accra et Bechem",
      ],
    },
  },
  {
    id: 3,
    slug: "data-protection-training",
    type: "activity",
    imageKey: "dpc",
    dateIso: "2025-06-21",
    en: {
      date: "June 21, 2025",
      title: "Data Protection Training",
      description:
        "On June 20, 2025, over 20 staff members from PDA and PDA Africa participated in a critical training session facilitated by representatives from Ghana's Data Protection Commission.",
      category: "Training",
      location: "Ghana",
      fullContent: [
        "On June 20, 2025, over 20 staff members from PDA and PDA Africa participated in a critical training session facilitated by representatives from Ghana's Data Protection Commission.",
        "Running from 9:00 a.m. to 4:00 p.m., the session emphasized the importance of confidentiality in safeguarding the information and stories we handle both on and off the field.",
        "This training ensures that PDA maintains the highest standards of data protection and privacy, protecting the sensitive information of communities and individuals we work with.",
        "The comprehensive training covered key areas including data collection principles, consent management, secure data storage, data sharing protocols, and the rights of data subjects under Ghana's Data Protection Act.",
        "Staff members learned about best practices for handling personal information, maintaining confidentiality in research and development work, and implementing robust data protection measures across all PDA operations.",
        "This initiative reflects PDA's commitment to ethical data management and ensuring that the trust placed in us by communities and partners is maintained through rigorous data protection standards.",
      ],
      additionalInfo: [
        "Over 20 staff members trained",
        "Facilitated by Data Protection Commission",
        "Focus: Confidentiality and data security",
        "Duration: Full-day training session",
      ],
    },
    fr: {
      date: "21 juin 2025",
      title: "Formation sur la protection des données",
      description:
        "Le 20 juin 2025, plus de 20 membres du personnel du PDA et de PDA Africa ont suivi une formation essentielle animée par la Commission ghanéenne de protection des données.",
      category: "Formation",
      location: "Ghana",
      fullContent: [
        "Le 20 juin 2025, plus de 20 membres du personnel du PDA et de PDA Africa ont participé à une session de formation animée par la Commission ghanéenne de protection des données.",
        "De 9 h à 16 h, la session a insisté sur la confidentialité pour protéger les informations et récits collectés sur le terrain et ailleurs.",
        "Cette formation renforce les standards du PDA en matière de protection des données et de respect de la vie privée des personnes et communautés.",
        "Les thèmes abordés incluaient les principes de collecte, le consentement, le stockage sécurisé, le partage des données et les droits des personnes concernées en vertu de la loi ghanéenne.",
        "Le personnel a appris les bonnes pratiques pour traiter les données personnelles et sécuriser les opérations du PDA.",
        "Cette initiative traduit l’engagement du PDA pour une gestion éthique des données et la confiance des partenaires et communautés.",
      ],
      additionalInfo: [
        "Plus de 20 membres du personnel formés",
        "Animation : Commission de protection des données",
        "Axé sur : confidentialité et sécurité des données",
        "Durée : journée complète",
      ],
    },
  },
  {
    id: 4,
    slug: "early-childhood-literacy",
    type: "activity",
    imageKey: "childhoodliteracy",
    dateIso: "2025-03-27",
    en: {
      date: "March 27, 2025",
      title: "Early childhood literacy as a foundation for child protection and empowerment",
      description:
        "Despite increasing school enrollment rates, Ghana continues to face significant challenges in foundational literacy and numeracy, particularly at the primary level.",
      category: "Education",
      location: "Ghana",
      fullContent: [
        "Despite increasing school enrollment rates, Ghana continues to face significant challenges in foundational literacy and numeracy, particularly at the primary level.",
        "Inadequate resources, untrained staff, foreign-dominated book collections, and limited infrastructure contribute to alarming statistics from the Ghana Education Service: between 54.5% and 92.5% of primary school children struggle with basic reading and numeracy skills.",
        "PDA recognizes that early childhood literacy is not just an educational issue but a critical foundation for child protection and empowerment. When children can read and understand, they are better equipped to recognize risks, seek help, and advocate for themselves.",
        "Literacy empowers children to access information about their rights, understand safety messages, and communicate effectively with adults and authorities when they need protection or support.",
        "PDA's approach to early childhood literacy focuses on creating culturally relevant, contextually appropriate learning materials that reflect the experiences and languages of Ghanaian children.",
        "Through partnerships with schools, communities, and educational institutions, PDA works to strengthen foundational literacy programs that not only improve educational outcomes but also enhance children's ability to protect themselves and participate meaningfully in their communities.",
      ],
      additionalInfo: [
        "Focus: Foundational literacy and numeracy",
        "Addressing primary level challenges",
        "Link between literacy and child protection",
        "Culturally relevant learning materials",
      ],
    },
    fr: {
      date: "27 mars 2025",
      title: "L’alphabétisation de la petite enfance : socle de la protection et de l’autonomisation des enfants",
      description:
        "Malgré la hausse des inscriptions scolaires, le Ghana peine encore sur les bases de lecture et de calcul, surtout au primaire.",
      category: "Éducation",
      location: "Ghana",
      fullContent: [
        "Malgré des taux d’inscription en hausse, le Ghana rencontre d’importants défis en matière de littératie et de numératie fondamentales au primaire.",
        "Ressources insuffisantes, personnel peu formé, manuels peu adaptés et infrastructures limitées expliquent des statistiques préoccupantes : une grande partie des élèves peine avec la lecture et le calcul de base.",
        "Le PDA considère que l’alphabétisation précoce est un pilier de la protection et de l’autonomisation : savoir lire et comprendre aide à repérer les risques, demander de l’aide et se faire entendre.",
        "La littératie permet d’accéder à l’information sur les droits, de comprendre les messages de sécurité et de communiquer avec les adultes et les autorités.",
        "Le PDA privilégie des supports d’apprentissage culturellement pertinents, ancrés dans les langues et réalités des enfants ghanéens.",
        "Avec les écoles et communautés, le PDA renforce les programmes de bases pour améliorer les résultats scolaires et la capacité des enfants à se protéger et à participer.",
      ],
      additionalInfo: [
        "Priorité : littératie et numératie fondamentales",
        "Défis au niveau primaire",
        "Lien entre littératie et protection de l’enfance",
        "Supports d’apprentissage adaptés au contexte",
      ],
    },
  },
  {
    id: 5,
    slug: "pda-mou-i-diem",
    type: "news",
    imageKey: "mou",
    dateIso: "2025-01-31",
    en: {
      date: "January 31, 2025",
      title:
        "PDA Signs Memorandum of Understanding (MOU) with the Institute for Diversity and Inclusion in Emergency Management (I-DIEM)",
      description:
        "In an effort to strengthen disaster resilience and foster inclusive community development, Participatory Development Associates (PDA) has entered into a Memorandum of Understanding (MOU) with the Institute for Diversity and Inclusion in Emergency Management (I-DIEM).",
      category: "Partnerships",
      location: "Ghana",
      fullContent: [
        "In an effort to strengthen disaster resilience and foster inclusive community development, Participatory Development Associates (PDA) has entered into a Memorandum of Understanding (MOU) with the Institute for Diversity and Inclusion in Emergency Management (I-DIEM).",
        "This partnership is dedicated to advancing climate resilience, promoting sustainability, and addressing the diverse needs of marginalized communities, particularly women, children, and vulnerable populations.",
        "The collaboration will focus on developing innovative approaches to emergency management that prioritize inclusivity, equity, and community-led solutions.",
        "Through this partnership, PDA and I-DIEM will work together to enhance disaster preparedness, response, and recovery efforts that are sensitive to the unique needs and capacities of diverse community members.",
        "The MOU establishes a framework for knowledge exchange, capacity building, and joint initiatives that integrate diversity and inclusion principles into emergency management practices.",
        "This partnership represents a significant step forward in ensuring that disaster management approaches in Ghana and beyond are truly inclusive and responsive to the needs of all community members, regardless of their background, abilities, or circumstances.",
      ],
      additionalInfo: [
        "Partnership with I-DIEM",
        "Focus: Disaster resilience and inclusive development",
        "Priority: Marginalized communities",
        "Framework for knowledge exchange and capacity building",
      ],
    },
    fr: {
      date: "31 janvier 2025",
      title:
        "Le PDA signe un protocole d’accord (MoU) avec l’Institute for Diversity and Inclusion in Emergency Management (I-DIEM)",
      description:
        "Pour renforcer la résilience face aux catastrophes et promouvoir un développement communautaire inclusif, le PDA a conclu un protocole d’accord avec l’I-DIEM.",
      category: "Partenariats",
      location: "Ghana",
      fullContent: [
        "Le PDA a signé un protocole d’accord avec l’Institute for Diversity and Inclusion in Emergency Management (I-DIEM) pour renforcer la résilience et l’inclusion communautaire.",
        "Le partenariat vise la résilience climatique, la durabilité et les besoins des communautés marginalisées, notamment femmes, enfants et groupes vulnérables.",
        "Il s’agit de développer des approches innovantes de gestion des urgences, centrées sur l’équité et les solutions portées par les communautés.",
        "Le PDA et l’I-DIEM renforceront ensemble la préparation, la réponse et le relèvement, en tenant compte des réalités diverses sur le terrain.",
        "Le MoU encadre les échanges de savoirs, le renforcement des capacités et des actions conjointes intégrant diversité et inclusion.",
        "Cette alliance marque une avancée vers des approches de gestion des catastrophes plus inclusives au Ghana et au-delà.",
      ],
      additionalInfo: [
        "Partenariat avec l’I-DIEM",
        "Axé sur : résilience et développement inclusif",
        "Priorité : communautés marginalisées",
        "Cadre d’échanges et de renforcement des capacités",
      ],
    },
  },
  {
    id: 6,
    slug: "edem-agbe-african-led-evaluation",
    type: "news",
    imageKey: "edemgroup",
    dateIso: "2024-11-12",
    en: {
      date: "November 12, 2024",
      title:
        "Edem Agbe Advocates for African-Led Evaluation at the German Institute for Development Evaluation (VENRO-DEval) Workshop 2024",
      description:
        "On October 10th and 11th, 2024, the German Institute for Development Evaluation (DEval) in partnership with VENRO convened experts and practitioners in Bonn, Germany, for a workshop that explored 'Partner Orientation and Decolonization in Evaluations.'",
      category: "Research & Evaluation",
      location: "Bonn, Germany",
      fullContent: [
        "On October 10th and 11th, 2024, the German Institute for Development Evaluation (DEval) in partnership with VENRO convened experts and practitioners in Bonn, Germany, for a workshop that explored 'Partner Orientation and Decolonization in Evaluations.'",
        "The Managing Director of PDA, Edem Agbe, gave a keynote presentation that highlighted the critical role of African-led approaches in evaluation practices.",
        "The presentation emphasized the importance of decolonizing evaluation methodologies and ensuring that evaluation processes are truly participatory, contextually relevant, and led by local expertise.",
        "Edem Agbe's presentation challenged traditional evaluation frameworks that often prioritize external perspectives and methodologies over local knowledge and context-specific approaches.",
        "The keynote addressed how African-led evaluation can better capture the nuanced realities of development work on the continent, ensuring that evaluation findings are meaningful, actionable, and respectful of local contexts and priorities.",
        "The workshop provided a platform for dialogue between evaluation practitioners from different regions, fostering understanding of how decolonization in evaluation can lead to more authentic, relevant, and impactful assessment of development interventions.",
        "This participation reflects PDA's commitment to advancing evaluation practices that are rooted in local expertise, respect diverse knowledge systems, and contribute to more equitable and effective development outcomes.",
      ],
      additionalInfo: [
        "Keynote by PDA Managing Director Edem Agbe",
        "Focus: Decolonization in evaluations",
        "Emphasis on African-led approaches",
        "International workshop on evaluation practices",
      ],
    },
    fr: {
      date: "12 novembre 2024",
      title:
        "Edem Agbe plaide pour une évaluation dirigée par l’Afrique lors de l’atelier VENRO-DEval 2024",
      description:
        "Les 10 et 11 octobre 2024, l’Institut allemand d’évaluation du développement (DEval) et VENRO ont réuni experts et praticiens à Bonn autour de l’orientation partenaires et de la décolonisation des évaluations.",
      category: "Recherche et évaluation",
      location: "Bonn, Allemagne",
      fullContent: [
        "Les 10 et 11 octobre 2024, le DEval et VENRO ont organisé à Bonn un atelier sur l’orientation partenaires et la décolonisation des évaluations.",
        "Edem Agbe, directeur général du PDA, a prononcé une conférence sur le rôle central des approches africaines dans l’évaluation.",
        "Il a souligné la nécessité de décoloniser les méthodes et d’ancrer les évaluations dans la participation, le contexte et l’expertise locale.",
        "Son intervention a questionné les cadres traditionnels qui privilégient trop souvent des perspectives externes au détriment des savoirs locaux.",
        "Une évaluation portée par l’Afrique mieux rend compte des réalités du développement sur le continent et produit des résultats pertinents et utilisables.",
        "L’atelier a favorisé le dialogue entre praticiens de plusieurs régions sur des évaluations plus authentiques et équilibrées.",
        "Cette participation confirme l’engagement du PDA pour des pratiques d’évaluation ancrées localement et respectueuses des pluralités de savoirs.",
      ],
      additionalInfo: [
        "Conférence : Edem Agbe, directeur général du PDA",
        "Thème : décolonisation des évaluations",
        "Mise en avant des approches africaines",
        "Atelier international sur l’évaluation",
      ],
    },
  },
  {
    id: 7,
    slug: "citizens-bureau-parliamentary-democracy",
    type: "activity",
    imageKey: "court",
    dateIso: "2024-04-23",
    en: {
      date: "April 23, 2024",
      title: "Citizen's Bureau: PDA Joins Stakeholder Group of CSOs to Strengthen Parliamentary Democracy",
      description:
        "Over the past three decades, Ghana's Parliament, in partnership with civil society organizations (CSOs) and development partners, has sought to bridge the gap between citizens and their elected representatives.",
      category: "Governance",
      location: "Ghana",
      fullContent: [
        "Over the past three decades, Ghana's Parliament, in partnership with civil society organizations (CSOs) and development partners, has sought to bridge the gap between citizens and their elected representatives.",
        "These efforts have been aimed at enhancing transparency, accountability, and citizen participation in parliamentary processes, as well as the institutionalization of mechanisms to promote the Open Parliament agenda.",
        "PDA's participation in the Citizen's Bureau stakeholder group represents our commitment to strengthening democratic institutions and ensuring that citizens' voices are heard in the governance process.",
        "The Citizen's Bureau initiative brings together CSOs, community groups, and parliamentary stakeholders to facilitate dialogue, information sharing, and collaborative action on issues of public interest.",
        "Through this engagement, PDA contributes expertise in participatory approaches, community engagement, and evidence-based advocacy to support more responsive and accountable parliamentary processes.",
        "The initiative focuses on creating spaces for meaningful citizen participation, improving access to parliamentary information, and strengthening mechanisms for citizen feedback and engagement with parliamentary work.",
        "PDA's involvement in the Citizen's Bureau aligns with our broader mission of empowering communities and ensuring that governance processes are inclusive, transparent, and responsive to the needs and aspirations of all citizens.",
      ],
      additionalInfo: [
        "Partnership with CSOs",
        "Focus: Parliamentary democracy",
        "Goal: Citizen participation in governance",
        "Open Parliament agenda",
      ],
    },
    fr: {
      date: "23 avril 2024",
      title:
        "Bureau du citoyen : le PDA rejoint un groupe d’OSC pour renforcer la démocratie parlementaire",
      description:
        "Depuis trois décennies, le Parlement du Ghana, avec les OSC et les partenaires au développement, cherche à rapprocher citoyens et élus.",
      category: "Gouvernance",
      location: "Ghana",
      fullContent: [
        "Depuis trois décennies, le Parlement ghanéen, avec les organisations de la société civile et les partenaires, œuvre à réduire la distance entre citoyens et représentants.",
        "L’objectif est d’accroître transparence, redevabilité et participation citoyenne, et d’institutionnaliser l’agenda du Parlement ouvert.",
        "Le PDA s’engage dans le groupe du Bureau du citoyen pour des institutions démocratiques plus solides et des voix citoyennes entendues.",
        "Le dispositif réunit OSC, communautés et acteurs parlementaires pour le dialogue et l’action sur l’intérêt public.",
        "Le PDA apporte son expertise participative et des plaidoyers fondés sur les preuves pour des processus parlementaires plus réactifs.",
        "L’initiative ouvre des espaces de participation, améliore l’accès à l’information parlementaire et les mécanismes de retour des citoyens.",
        "Cette implication prolonge la mission du PDA : gouvernance inclusive, transparente et répondant aux aspirations des citoyens.",
      ],
      additionalInfo: [
        "Partenariat avec des OSC",
        "Thème : démocratie parlementaire",
        "Objectif : participation citoyenne",
        "Agenda du Parlement ouvert",
      ],
    },
  },
  {
    id: 8,
    slug: "organizational-development-support",
    type: "activity",
    imageKey: "organizational",
    dateIso: "2024-04-23",
    en: {
      date: "April 23, 2024",
      title: "Organizational Development Support Services For CBOs And NGOs",
      description:
        "In partnership with A Rocha Ghana, PDA's Research Evaluation and Learning Unit is strengthening the capacities of nine (9) partner organizations (NGOs & CBOs) to support their quest to rally communities to combat the exploitation of natural reserves.",
      category: "Capacity Building",
      location: "Ghana",
      fullContent: [
        "In partnership with A Rocha Ghana, PDA's Research Evaluation and Learning Unit is strengthening the capacities of nine (9) partner organizations (NGOs & CBOs) to support their quest to rally communities to combat the exploitation of natural reserves.",
        "This activity forms a component of a three-year project, 'Strengthen the Roots' (StR), being implemented by A Rocha Ghana with funding from the European Union.",
        "The organizational development support includes capacity building, strategic planning, and institutional strengthening to enable these organizations to effectively engage communities in environmental protection and sustainable resource management.",
        "PDA provides tailored support to each partner organization, addressing their specific needs in areas such as organizational governance, program management, financial systems, monitoring and evaluation, and community mobilization.",
        "The support services are designed to build the long-term sustainability and effectiveness of these organizations, enabling them to play stronger roles in environmental conservation and community development.",
        "Through workshops, mentoring, and ongoing technical assistance, PDA helps partner organizations develop robust systems and practices that enhance their ability to work with communities in protecting natural resources and promoting sustainable development.",
        "This initiative reflects PDA's commitment to strengthening the broader ecosystem of development organizations, recognizing that strong, capable organizations are essential for meaningful and sustainable community development.",
      ],
      additionalInfo: [
        "Partnership with A Rocha Ghana",
        "9 partner organizations supported",
        "Three-year 'Strengthen the Roots' project",
        "EU-funded initiative",
      ],
    },
    fr: {
      date: "23 avril 2024",
      title: "Appui au développement organisationnel pour des OSC et des OBC",
      description:
        "Avec A Rocha Ghana, l’unité Recherche, Évaluation et Apprentissage du PDA renforce neuf organisations partenaires pour mobiliser les communautés contre l’exploitation des réserves naturelles.",
      category: "Renforcement des capacités",
      location: "Ghana",
      fullContent: [
        "Avec A Rocha Ghana, le PDA renforce neuf organisations (ONG et OBC) afin qu’elles mobilisent les communautés contre l’exploitation abusive des ressources naturelles.",
        "L’action s’inscrit dans le projet triennal « Strengthen the Roots », mené par A Rocha Ghana avec le soutien de l’Union européenne.",
        "L’appui couvre formation, planification stratégique et consolidation institutionnelle pour l’engagement communautaire en protection de l’environnement.",
        "Le PDA adapte son accompagnement : gouvernance, gestion de programmes, finances, suivi-évaluation et mobilisation.",
        "L’objectif est la durabilité et l’efficacité des organisations dans la conservation et le développement local.",
        "Ateliers, mentorat et assistance technique renforcent les pratiques de travail avec les communautés.",
        "Le PDA consolide ainsi l’écosystème des organisations porteuses de développement durable.",
      ],
      additionalInfo: [
        "Partenariat avec A Rocha Ghana",
        "Neuf organisations accompagnées",
        "Projet triennal « Strengthen the Roots »",
        "Financement UE",
      ],
    },
  },
  {
    id: 9,
    slug: "tonys-chocolonely-pda",
    type: "news",
    imageKey: "toony",
    dateIso: "2024-04-23",
    en: {
      date: "April 23, 2024",
      title: "Tony's Chocolonely & PDA: Advancing Ethical Cocoa Production Through Data-driven Child Labour Remediation",
      description:
        "Tony's Chocolonely (Tony's), a Dutch social enterprise, was founded in response to the distressing reality of child labor and modern slavery in cocoa plantations in West Africa.",
      category: "Child Protection",
      location: "Ghana",
      fullContent: [
        "Tony's Chocolonely (Tony's), a Dutch social enterprise, was founded in response to the distressing reality of child labor and modern slavery in cocoa plantations in West Africa.",
        "Tony's unwavering commitment is to ensure that every chocolate bar is 100% slave-free. As a wholesaler, Tony's focuses on importing, exporting, and selling chocolate products and raw materials, with a strong emphasis on ethical sourcing and supply chain transparency.",
        "PDA's partnership with Tony's Chocolonely focuses on data-driven approaches to identify, remediate, and prevent child labor in cocoa supply chains. Through comprehensive monitoring, evaluation, and community engagement, we work together to create sustainable solutions that protect children while supporting cocoa farming communities.",
        "The collaboration leverages PDA's expertise in participatory research, data collection, and community-based interventions to develop robust systems for tracking and addressing child labor in cocoa production.",
        "Through this partnership, PDA and Tony's Chocolonely work directly with cocoa farming communities to understand the root causes of child labor and develop contextually appropriate solutions that address these underlying issues.",
        "The data-driven approach enables evidence-based decision-making, allowing for targeted interventions that are responsive to the specific needs and circumstances of different communities and farming households.",
        "This partnership demonstrates how collaboration between social enterprises and development organizations can create innovative approaches to addressing complex social challenges, combining business commitment to ethical practices with development expertise in community engagement and social change.",
        "Together, PDA and Tony's Chocolonely are working towards a future where cocoa production is not only economically viable but also socially responsible, ensuring that children are protected and communities thrive.",
      ],
      additionalInfo: [
        "Partnership with Tony's Chocolonely",
        "Focus: Data-driven child labor remediation",
        "Goal: 100% slave-free cocoa supply chain",
        "Community-based interventions",
      ],
    },
    fr: {
      date: "23 avril 2024",
      title:
        "Tony’s Chocolonely et le PDA : une production cacaoyère éthique grâce à des données sur le travail des enfants",
      description:
        "Tony’s Chocolonely, entreprise sociale néerlandaise, est née face au travail des enfants et à l’esclavage moderne dans les cacaoyères d’Afrique de l’Ouest.",
      category: "Protection de l’enfance",
      location: "Ghana",
      fullContent: [
        "Tony’s Chocolonely est une entreprise sociale néerlandaise créée pour répondre au travail des enfants et à l’esclavage moderne dans le cacao en Afrique de l’Ouest.",
        "Son engagement : viser une chaîne 100 % sans esclavage, avec sourcing éthique et transparence.",
        "Avec Tony’s, le PDA combine données, suivi-évaluation et engagement communautaire pour prévenir et remédier au travail des enfants dans la filière cacao.",
        "Le partenariat s’appuie sur la recherche participative et des dispositifs de suivi solides sur le terrain.",
        "Les deux organisations travaillent avec les communautés pour comprendre les causes profondes et co-construire des réponses adaptées.",
        "L’approche fondée sur les preuves permet des interventions ciblées selon les contextes des ménages agricoles.",
        "Ce modèle illustre la complémentarité entre entreprise sociale et organisation de développement pour des défis sociaux complexes.",
        "Ensemble, le PDA et Tony’s visent un cacao viable économiquement et responsable socialement, au service des enfants et des communautés.",
      ],
      additionalInfo: [
        "Partenariat avec Tony’s Chocolonely",
        "Axé sur : remédiation fondée sur les données",
        "Objectif : chaîne cacaoyère sans travail forcé",
        "Interventions ancrées dans les communautés",
      ],
    },
  },
  {
    id: 10,
    slug: "gals-child-methodology-training-etg-uganda",
    type: "news",
    imageKey: "davidetg",
    dateIso: "2026-03-09",
    sourceUrl: "https://pdaghana.com/pda-delivers-gals-child-methodology-training-for-etg-uganda/",
    en: {
      date: "March 9, 2026",
      title: "PDA Delivers GALS + CHILD Methodology Training for ETG Uganda",
      description:
        "Participatory Development Associates (PDA) is implementing a Training of Trainers (TOT) on the Gender Action Learning System (GALS) + CHILD methodology for Export Trading Group (ETG) Uganda—supporting community-level training in Uganda's coffee supply chain to strengthen gender equity, household dialogue, and child protection.",
      category: "Capacity Building",
      location: "Uganda",
      fullContent: [
        "Participatory Development Associates (PDA) is currently implementing a Training of Trainers (TOT) programme on the Gender Action Learning System (GALS) + CHILD methodology for Export Trading Group (ETG) Uganda. The initiative supports the rollout of community-level training within Uganda's coffee supply chain, with the aim of strengthening gender equity, household dialogue, and child protection in farming communities.",
        "As part of the assignment, PDA is building the capacity of field staff who work directly with farmer groups to effectively apply the GALS + CHILD methodology. The training equips participants with practical tools that promote inclusive decision-making within households while addressing child protection concerns in agricultural communities.",
        "PDA's Programme Coordinator, David Eshun, is leading the training and field mentorship in the Greater Masaka Region. Through a participatory and hands-on approach, he is supporting ETG field teams as they begin implementing the GALS + CHILD tools with farmer groups.",
        "The programme includes a five-day in-person Training of Trainers, during which participants are introduced to core GALS tools such as Soulmate Visioning, Vision Journey, Gender Balance Tree, Gender Diamond, and Leadership Map. Participants are also trained in the use of CHILD flashcards—a practical facilitation tool used to stimulate dialogue on child protection and responsible caregiving within farming households.",
        "Following the classroom sessions, PDA provides three days of field supervision and mentorship. Trainees apply the methodology directly with farmer groups while PDA facilitators observe the sessions, provide coaching, and help strengthen facilitation skills in real time. Beyond technical training, the mentorship process focuses on ensuring that the tools are applied correctly, strengthening facilitation approaches, and identifying practical improvements that can enhance the effectiveness of community sessions.",
        "This assignment reflects PDA's continued commitment to supporting partners with practical methodologies that promote gender equality, child protection, and sustainable livelihoods in agricultural value chains. By strengthening the capacity of local field teams, the programme aims to ensure that the GALS + CHILD methodology is effectively embedded within community training processes across Uganda's coffee sector.",
      ],
      additionalInfo: [
        "Partner: Export Trading Group (ETG) Uganda",
        "Lead: David Eshun, Programme Coordinator",
        "Region: Greater Masaka",
        "Format: 5-day TOT + 3 days field supervision",
        "Tools: GALS core tools + CHILD flashcards",
      ],
    },
    fr: {
      date: "9 mars 2026",
      title: "Le PDA dispense la formation GALS + CHILD pour ETG Ouganda",
      description:
        "Le PDA met en œuvre une formation de formateurs (FdF) sur la méthodologie Gender Action Learning System (GALS) + CHILD pour ETG Ouganda, afin de renforcer l’équité de genre, le dialogue au sein des ménages et la protection de l’enfant dans la filière café.",
      category: "Renforcement des capacités",
      location: "Ouganda",
      fullContent: [
        "Le PDA met en œuvre une formation de formateurs sur la méthodologie GALS + CHILD pour Export Trading Group (ETG) Ouganda, en appui au déploiement de formations communautaires dans la filière café pour l’équité de genre, le dialogue familial et la protection de l’enfant.",
        "Le PDA renforce les équipes terrain qui accompagnent les groupes d’agriculteurs pour appliquer concrètement GALS + CHILD et des outils favorisant la décision inclusive au foyer tout en traitant les risques pour les enfants.",
        "David Eshun, coordinateur de programmes, pilote la formation et le mentorat sur le terrain dans la région du Grand Masaka, avec une approche participative et pratique aux côtés des équipes ETG.",
        "La formation présente les outils GALS (vision partagée, parcours, arbre d’équilibre de genre, diamant de genre, carte de leadership) et les fiches CHILD pour animer le dialogue sur la protection de l’enfant et les rôles parentaux responsables.",
        "Après les sessions en salle, trois jours de supervision sur le terrain permettent d’observer, coacher et renforcer les compétences de facilitation en situation réelle avec les groupes paysans.",
        "Cette mission confirme l’engagement du PDA à outiller ses partenaires pour l’égalité de genre, la protection de l’enfant et des moyens d’existence durables dans les chaînes de valeur agricoles.",
      ],
      additionalInfo: [
        "Partenaire : ETG Ouganda",
        "Responsable : David Eshun, coordinateur de programmes",
        "Région : Grand Masaka",
        "Format : 5 jours de FdF + 3 jours de supervision",
        "Outils : noyau GALS + fiches CHILD",
      ],
    },
  },
  {
    id: 11,
    slug: "africa-australia-climate-responsive-agriculture-event",
    type: "news",
    imageKey: "agri",
    dateIso: "2026-03-05",
    sourceUrl: "https://pdaghana.com/pda-participates-in-africa-australia-partnership-for-climate-responsive-agriculture-event/",
    en: {
      date: "March 5, 2026",
      title: "PDA Participates in Africa–Australia Partnership for Climate Responsive Agriculture Event",
      description:
        "Members of PDA's Research, Evaluation and Learning (REL) team represented PDA at the celebration of the Africa–Australia Partnership for Climate Responsive Agriculture in Accra—hosted by ACIAR and the Australian High Commission in Ghana.",
      category: "Agriculture & Climate",
      location: "Accra, Ghana",
      fullContent: [
        "Members of PDA's Research, Evaluation and Learning (REL) team represented Participatory Development Associates (PDA) at the recent celebration of the Africa–Australia Partnership for Climate Responsive Agriculture, held in Accra.",
        "The event was organised by the Australian Centre for International Agricultural Research (ACIAR) and the Australian High Commission in Ghana, bringing together key stakeholders from government, research institutions, and development organisations to highlight efforts aimed at strengthening climate-responsive agriculture across Africa.",
        "The Africa–Australia Partnership for Climate Responsive Agriculture is a six-year initiative valued at A$76.4 million and jointly funded by ACIAR and the Australian Department of Foreign Affairs and Trade (DFAT). Launched in 2024, the partnership seeks to strengthen the climate resilience of African farming systems and improve food security through collaborative research and capacity development between African and Australian institutions.",
        "The event was officially opened by Berenice Owen-Jones, who highlighted the importance of international collaboration in addressing climate challenges affecting agriculture. The event was attended by several high-level stakeholders, including Emmanuel Kwadwo Agyekum, Ghana's Minister for Special Initiatives, and Gussie Tandoh, Director of the 24-Hour Economy Secretariat. Representatives from the Council for Scientific and Industrial Research (Ghana) (CSIR), the African Continental Free Trade Area Secretariat (AfCFTA), and other development partners were also present.",
        "For PDA, the event provided an opportunity to engage with partners and stakeholders while reaffirming the organisation's commitment to research and learning as critical tools for designing effective development programmes. By grounding interventions in evidence and community realities, PDA continues to contribute to initiatives that strengthen livelihoods, promote sustainability, and support resilient agricultural systems.",
      ],
      additionalInfo: [
        "Hosts: ACIAR & Australian High Commission in Ghana",
        "Partnership value: A$76.4 million (six years)",
        "Funders: ACIAR & DFAT (Australia)",
        "Opened by: Berenice Owen-Jones",
      ],
    },
    fr: {
      date: "5 mars 2026",
      title:
        "Le PDA à l’événement du partenariat Afrique–Australie pour une agriculture résiliente au climat",
      description:
        "L’équipe Recherche, Évaluation et Apprentissage du PDA a représenté l’organisation à Accra lors de la célébration du partenariat Afrique–Australie pour une agriculture résiliente au climat, organisée par l’ACIAR et le Haut-Commissariat d’Australie au Ghana.",
      category: "Agriculture et climat",
      location: "Accra, Ghana",
      fullContent: [
        "L’équipe REL du PDA a participé à Accra à la célébration du partenariat Afrique–Australie pour une agriculture résiliente au climat.",
        "L’événement, co-organisé par l’ACIAR et le Haut-Commissariat d’Australie au Ghana, a réuni des acteurs clés de l’État, de la recherche et du développement autour de l’agriculture face au climat.",
        "Ce partenariat de six ans (76,4 millions AUD), cofinancé par l’ACIAR et le DFAT, vise à renforcer la résilience des systèmes agricoles africains et la sécurité alimentaire par la recherche et le renforcement des capacités.",
        "La cérémonie a été ouverte par Berenice Owen-Jones ; plusieurs personnalités ghanéennes et des représentants du CSIR, de la ZLECAf et d’autres partenaires y ont pris part.",
        "Pour le PDA, l’occasion de renforcer les alliances et d’affirmer le rôle de la recherche et de l’apprentissage pour des programmes ancrés dans les preuves et les réalités communautaires.",
      ],
      additionalInfo: [
        "Organisateurs : ACIAR et Haut-Commissariat d’Australie au Ghana",
        "Montant indicatif : 76,4 millions AUD sur six ans",
        "Financeurs : ACIAR et DFAT (Australie)",
        "Ouverture : Berenice Owen-Jones",
      ],
    },
  },
  {
    id: 12,
    slug: "protecting-people-protecting-data-webinar",
    type: "news",
    imageKey: "webinar",
    dateIso: "2026-03-26",
    recordingUrl: "https://www.youtube.com/watch?v=BTHLwBTgBII",
    sourceUrl:
      "https://pdaghana.com/protecting-people-by-protecting-data-practical-lessons-from-pdas-work-in-ethical-research-and-mel/",
    en: {
      date: "March 26, 2026",
      title:
        "Protecting People by Protecting Data: Practical Lessons from PDA's Work in Ethical Research and MEL",
      description:
        "On March 26, 2026, PDA hosted a webinar bridging technical compliance and human-centred ethics in data protection—with perspectives from Ghana's Data Protection Commission and PDA's field-tested Privacy by Design approach.",
      category: "Webinar",
      location: "Online",
      fullContent: [
        "In an era where data is frequently described as \"the new oil,\" it is easy to lose sight of a fundamental truth: behind every data point is a living, breathing person. Whether it is a mother sharing her household income or a farmer discussing his yield, the information we collect is a digital extension of their lives. On March 26, 2026, Participatory Development Associates (PDA) hosted a webinar to bridge the gap between technical compliance and human-centered ethics in data protection.",
        "Beyond the Checkbox: A Legal Necessity — The conversation opened with a vital reality check from the Data Protection Commission (DPC). In Ghana, data privacy is not merely a best practice—it is a legal mandate under the Data Protection Act 2012 (Act 843). Enock Wilson Essuman, representing the DPC, clarified that any organization handling personal information is a \"Data Controller\" and must be officially registered with the Commission. From ensuring meaningful consent to understanding the difference between those who collect data and the third-party \"processors\" who manage it, legal compliance serves as the first line of defense for participant safety.",
        "Privacy by Design: Field-Tested Strategy — While laws provide the framework, the real work happens in the field. Ernest Adu Owusu, MEL Specialist and PDA's Data Protection Supervisor, shared the organization's \"Privacy by Design\" philosophy. This approach treats data protection as a thread woven through every stage of a project, rather than an afterthought. He outlined how PDA integrates data protection into the entire project lifecycle, starting with a comprehensive consent process that ensures participants are fully informed of their rights. He detailed the use of strict Standard Operating Procedures (SOPs) for field teams, which include specialized training for enumerators on safeguarding and the secure management of mobile collection devices. By enforcing high standards for data transmission and storage, he demonstrated that ethical research relies on a proactive culture where every team member is accountable for maintaining participant confidentiality.",
        "Key to this strategy is the Principle of Least Privilege, a security model where access to sensitive information is strictly limited to those who absolutely need it. In practice, this means raw data is siloed and anonymized almost immediately, ensuring that even within a research team, the identities of vulnerable individuals remain shielded. This technical rigor is matched by human oversight: field enumerators undergo rigorous safeguarding training and follow strict protocols to secure mobile devices and report potential data breaches the moment they occur.",
        "Adapting to a Digital Future — The discussion took a forward-looking turn during the interactive Q&A, tackling the complexities of emerging technologies. As Artificial Intelligence and automated tools become more common in Monitoring, Evaluation, and Learning (MEL), the facilitators emphasized the need for Data Protection Impact Assessments (DPIAs). These assessments allow organizations to anticipate risks such as algorithmic bias or unintended data leaks, before they manifest. For smaller organizations, the advice was practical and immediate: start by encrypting shared files, refining consent forms to be more protection-centered, and fostering a culture where every staff member feels responsible for privacy.",
        "The Growing River: A Commitment to Improvement — The session concluded with a powerful reminder that data ethics is an evolving journey. Moderating the event, Aseda Mensah closed with a poignant African proverb: \"No matter how full the river is, it always wants to keep growing.\" This sentiment captures the heart of the webinar. Regardless of how robust an organization's current policies may be, there is always room to refine, improve, and grow. By treating data protection as a core value rather than a technical hurdle, we don't just secure information—we honor the trust of the people who provide it, ensuring that social development remains a safe and empowering space for all.",
      ],
      additionalInfo: [
        "Date: March 26, 2026",
        "DPC: Enock Wilson Essuman",
        "PDA: Ernest Adu Owusu (MEL / Data Protection Supervisor)",
        "Moderator: Aseda Mensah",
        "Session recording: use the link at the end of the article",
      ],
    },
    fr: {
      date: "26 mars 2026",
      title:
        "Protéger les personnes en protégeant les données : leçons pratiques du PDA en recherche éthique et S&E",
      description:
        "Le 26 mars 2026, le PDA a organisé un webinaire entre conformité technique et éthique centrée sur la personne, avec la Commission ghanéenne de protection des données et l’approche « Privacy by Design » éprouvée sur le terrain.",
      category: "Webinaire",
      location: "En ligne",
      fullContent: [
        "Lorsque l’on compare les données au « nouveau pétrole », on oublie vite qu’il y a derrière chaque donnée une personne réelle. Le 26 mars 2026, le PDA a réuni des partenaires pour relier conformité juridique et éthique de la protection des données.",
        "Au-delà de la case à cocher : au Ghana, la confidentialité des données est une obligation légale (Loi de 2012 sur la protection des données). Enock Wilson Essuman (Commission) a rappelé l’enregistrement des responsables de traitement, le consentement éclairé et le rôle des sous-traitants.",
        "Ernest Adu Owusu, spécialiste S&E et référent protection des données du PDA, a présenté la philosophie « Privacy by Design » : intégrer la protection des données à tout le cycle de projet, avec procédures strictes, formation des enquêteurs et sécurisation des appareils mobiles.",
        "Le principe du moindre privilège limite l’accès aux données sensibles ; l’anonymisation rapide et la vigilance des équipes terrain complètent les mesures techniques.",
        "Le débat a aussi porté sur l’IA et les outils automatisés en S&E, avec l’importance des analyses d’impact (DPIA) pour anticiper biais et fuites ; pour les petites structures : chiffrer les fichiers partagés, clarifier les consentements et cultiver la responsabilité de chaque collaborateur.",
        "Aseda Mensah a conclu avec le proverbe : « Quelle que soit la plénitude du fleuve, il veut toujours grandir » — invitation à améliorer sans cesse les pratiques et à honorer la confiance des personnes concernées.",
      ],
      additionalInfo: [
        "Date : 26 mars 2026",
        "Commission : Enock Wilson Essuman",
        "PDA : Ernest Adu Owusu (S&E / protection des données)",
        "Modération : Aseda Mensah",
        "Enregistrement : lien à la fin de l’article",
      ],
    },
  },
  {
    id: 13,
    slug: "international-development-day-celebration",
    type: "news",
    imageKey: "wuscevent",
    dateIso: "2026-02-05",
    sourceUrl: "https://pdaghana.com/international-development-day-celebration/",
    en: {
      date: "February 5, 2026",
      title: "International Development Day Celebration",
      description:
        'PDA participated in the International Development Day Celebration on Thursday, 5 February 2026 at the WUSC Country Office, Westlands–Accra, under the IGNI+E Project, themed "Prosperity Through Partnerships."',
      category: "Events",
      location: "Accra, Ghana",
      fullContent: [
        'PDA participated in the International Development Day Celebration which was held on Thursday, 5th February 2026 at the WUSC Country Office, Westlands–Accra, under the IGNI+E Project, themed "Prosperity Through Partnerships." The event brought together partners, volunteers, and stakeholders to share experiences and highlight the impact of collaborative initiatives supported by WUSC.',
        "The programme commenced with a welcome address and statement of purpose delivered by Ms. Appiah Wiafe-Adofo, WUSC Country Director. She highlighted the importance of partnerships in advancing sustainable development outcomes and expressed appreciation to all partners and volunteers for their continued contributions.",
        "An interactive icebreaker session followed, during which participating organisations were given sheets of paper and tasked to illustrate a story or concept that best represents their organisation, without the use of words. Before each organisation explained their drawing, participants were invited to guess what the illustration represented. This activity fostered engagement, creativity, and collaboration among participants.",
        'The main presentation session was themed "Show Us Your Story – Prosperity Through Partnerships". Participating organisations included: Farm Radio International, SE Ghana, KASA Initiative, MBC Africa, McKingtorch Africa, GCYE, PDA, AAG, GENCED, ABCDE, GTVET and CTVET. Partner–volunteer teams shared impact stories highlighting how partnerships and volunteer support have contributed to organisational success.',
        "During this session, Participatory Development Associates (PDA), in collaboration with Artisans Association of Ghana, presented a video documentary on the Young Female Businesses for Growth (YoFeB-4G) Project. The project was funded through the Partner Innovation Fund (PIF) provided by WUSC. The video showcased key project activities, outcomes, and the impact of the intervention on young female artisans in the construction sector.",
        "Other partner organisations also delivered brief presentations, each demonstrating the value of partnership-driven approaches in achieving development impact.",
        "The programme concluded with closing remarks from Mr. Awudu Zakari, Program Manager at WUSC, who thanked all participants for their active involvement. He also informed partners that the Partner Innovation Fund would soon be reopened, encouraging organisations to prepare and apply. The event ended with a group picture session, followed by lunch and networking.",
      ],
      additionalInfo: [
        "Venue: WUSC Country Office, Westlands–Accra",
        "Project: IGNI+E",
        "Theme: Prosperity Through Partnerships",
        "Featured: YoFeB-4G video (PDA & Artisans Association of Ghana)",
      ],
    },
    fr: {
      date: "5 février 2026",
      title: "Célébration de la Journée internationale du développement",
      description:
        "Le PDA a pris part à la célébration du 5 février 2026 au bureau pays du WUSC à Westlands–Accra, dans le cadre du projet IGNI+E, sous le thème « La prospérité par les partenariats ».",
      category: "Événements",
      location: "Accra, Ghana",
      fullContent: [
        "Le PDA a participé à la Journée internationale du développement le 5 février 2026 au bureau du WUSC à Westlands–Accra (projet IGNI+E, thème « La prospérité par les partenariats »), réunissant partenaires, volontaires et parties prenantes.",
        "Mme Appiah Wiafe-Adofo, directrice pays du WUSC, a ouvert la séance en soulignant l’importance des partenariats pour le développement durable.",
        "Un jeu de mise en relation a invité chaque organisation à illustrer son identité sans mots, pour créer lien et créativité.",
        "La session « Montrez-nous votre histoire » a réuni plusieurs organisations ; des binômes partenaire–volontaire ont partagé des récits d’impact.",
        "Le PDA, avec l’Association des artisans du Ghana, a présenté un documentaire sur le projet YoFeB-4G, financé par le Fonds d’innovation partenarial du WUSC, sur les jeunes artisanes du bâtiment.",
        "D’autres partenaires sont brièvement intervenus sur la valeur des approches fondées sur le partenariat.",
        "M. Awudu Zakari a clos l’événement en annonçant la réouverture prochaine du Fonds d’innovation partenarial ; photo de groupe, déjeuner et réseautage ont suivi.",
      ],
      additionalInfo: [
        "Lieu : bureau WUSC, Westlands–Accra",
        "Projet : IGNI+E",
        "Thème : La prospérité par les partenariats",
        "Mise en avant : vidéo YoFeB-4G (PDA et Association des artisans du Ghana)",
      ],
    },
  },
  {
    id: 14,
    slug: "pda-at-amsterdam-chocoa-week-2026",
    type: "news",
    imageKey: "chocoa",
    dateIso: "2026-02-20",
    sourceUrl: "https://pdaghana.com/pda-at-amsterdam-chocoa-week-2026/",
    en: {
      date: "February 20, 2026",
      title: "PDA at Amsterdam Chocoa Week 2026",
      description:
        "Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026 during Amsterdam Chocoa Week—a leading global platform on sustainable cocoa and responsible chocolate. Edem Agbe will speak in Panel Breakout Session 5.2 on gender, family well-being, and resilience.",
      category: "Cocoa & Sustainability",
      location: "Amsterdam, Netherlands",
      fullContent: [
        "Participatory Development Associates Ltd (PDA) will participate in the Chocoa Conference 2026, held as part of Amsterdam Chocoa Week, one of the leading global platforms for dialogue on sustainable cocoa and responsible chocolate production.",
        "At the conference, Edem Agbe will speak during Panel Breakout Session 5.2: Gender, Family Well-Being and Resilience, where he will share insights and lessons from PDA's work in cocoa-growing communities. The session will highlight how gender-responsive and family-centred approaches contribute to stronger household resilience and long-term sustainability within the cocoa sector.",
        "PDA's contribution will draw on practical field experience, demonstrating how inclusive community development strengthens livelihoods, supports social well-being, and aligns with global efforts toward sustainable and responsible cocoa value chains.",
        "The Chocoa Conference brings together global chocolate manufacturers, policymakers, development partners, civil society organisations, and other key stakeholders committed to shaping the future of sustainable cocoa.",
        "Conference details: Friday, 20 February 2026 — Amsterdam, Netherlands.",
      ],
      additionalInfo: [
        "Event: Chocoa Conference 2026 (Amsterdam Chocoa Week)",
        "Session: 5.2 — Gender, Family Well-Being and Resilience",
        "Speaker: Edem Agbe",
        "Date: Friday, 20 February 2026",
      ],
    },
    fr: {
      date: "20 février 2026",
      title: "Le PDA à la Chocoa Week d’Amsterdam 2026",
      description:
        "Participatory Development Associates Ltd (PDA) participera à la conférence Chocoa 2026 dans le cadre de la Chocoa Week à Amsterdam. Edem Agbe interviendra dans l’atelier 5.2 sur le genre, le bien-être familial et la résilience.",
      category: "Cacao et durabilité",
      location: "Amsterdam, Pays-Bas",
      fullContent: [
        "Le PDA participera à la conférence Chocoa 2026, au cœur de la Chocoa Week d’Amsterdam, plateforme mondiale sur le cacao durable et le chocolat responsable.",
        "Edem Agbe interviendra dans la session 5.2 : genre, bien-être familial et résilience, en s’appuyant sur l’expérience du PDA dans les communautés cacaoyères.",
        "L’intervention montrera comment des approches sensibles au genre et centrées sur la famille renforcent la résilience des ménages et la durabilité de la filière.",
        "La conférence réunit industriels, décideurs, partenaires au développement, OSC et autres acteurs clés du cacao durable.",
        "Rendez-vous : vendredi 20 février 2026 — Amsterdam, Pays-Bas.",
      ],
      additionalInfo: [
        "Événement : Chocoa 2026 (Chocoa Week, Amsterdam)",
        "Session : 5.2 — Genre, bien-être familial et résilience",
        "Intervenant : Edem Agbe",
        "Date : vendredi 20 février 2026",
      ],
    },
  },
  {
    id: 15,
    slug: "News Test Trial",
    type: "news",
    imageKey: "test_img",
    dateIso: "2026-04-23",
    en: {
      date: "April 24, 2026",
      title: "This is just a test trial for news updates",
      description:
        "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
      category: "ACU Team",
      location: "Tema Michel Camp",
      fullContent: [
        "Participatory Development Associates (PDA), in partnership with the Department of Children under the Ministry of Gender, Children and Social Protection, convened the 8th Knowledge Sharing Workshop on Child Protection (KSWoCP) with two multi-level events in Accra and Bechem.",
        "The 2025 edition of the workshop brought together national and community stakeholders to address the growing threat of illegal mining galamsey to children in Ghana's cocoa-growing regions.",
        "The workshop provided a platform for dialogue, knowledge sharing, and collaborative action to strengthen child protection mechanisms and address the unique challenges facing children in mining-affected communities.",
        "Key discussions focused on the intersection of illegal mining activities and child protection, exploring how galamsey operations expose children to hazardous working conditions, disrupt education, and compromise their safety and well-being.",
        "Participants included representatives from government agencies, civil society organizations, community leaders, and child protection advocates who shared experiences, best practices, and strategies for protecting children in mining-affected areas.",
        "The workshop outcomes included the development of action plans for enhanced monitoring, community awareness programs, and strengthened collaboration between stakeholders to prevent child exploitation in mining contexts.",
      ],
      additionalInfo: [
        "8th Knowledge Sharing Workshop on Child Protection",
        "Partnership with Department of Children",
        "Focus: Galamsey's impact on children",
        "Multi-level events in Accra and Bechem",
      ],
    },
    fr: {
      date: "11 décembre 2025",
      title:
        "Le PDA organise le 8e atelier sur la protection de l’enfance et met en lumière les risques de la galamsey pour les enfants",
      description:
        "Participatory Development Associates (PDA), en partenariat avec le Département des enfants du ministère du Genre, des Enfants et de la Protection sociale, a organisé le 8e atelier de partage des connaissances sur la protection de l’enfance (KSWoCP), avec deux événements multi-niveaux à Accra et Bechem.",
      category: "Protection de l’enfance",
      location: "Accra et Bechem, Ghana",
      fullContent: [
        "Le PDA, avec le Département des enfants du ministère du Genre, des Enfants et de la Protection sociale, a tenu le 8e atelier de partage des connaissances sur la protection de l’enfance (KSWoCP) à Accra et Bechem.",
        "L’édition 2025 a réuni des acteurs nationaux et communautaires autour de la menace croissante de l’orpaillage illégal (galamsey) pour les enfants des régions cacaoyères du Ghana.",
        "L’atelier a favorisé le dialogue, le partage d’expériences et l’action concertée pour renforcer la protection des enfants dans les communautés minières.",
        "Les échanges ont porté sur les liens entre activités minières illégales et protection de l’enfance : conditions de travail dangereuses, perturbation de la scolarité et atteinte au bien-être.",
        "Y participaient des représentants de l’État, de la société civile, des leaders communautaires et des défenseurs des droits des enfants.",
        "Des plans d’action ont été esquissés pour le suivi, la sensibilisation communautaire et une meilleure coordination contre l’exploitation des enfants dans le secteur minier.",
      ],
      additionalInfo: [
        "8e atelier de partage sur la protection de l’enfance",
        "Partenariat avec le Département des enfants",
        "Thème : impact de la galamsey sur les enfants",
        "Événements à Accra et Bechem",
      ],
    },
  },
];
