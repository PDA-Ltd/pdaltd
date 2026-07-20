/**
 * Impact Stories — bilingual content (English + French).
 *
 * How to add a new story:
 * 1. Copy one full `{ ... },` block below.
 * 2. Set a new `id`, `slug`, `imageKey`, `dateIso`, and optional `videoUrl`.
 * 3. Use `galleryImageKeys` for additional images; each key must match an export
 *    from `src/assets/images/index.js`.
 * 4. Fill the `en` object. French fields can be added over time; missing French
 *    values fall back to English.
 */

export const impactStoriesRaw = [
  {
    id: 4,
    slug: "mathew-vsla-success-story",
    imageKey: "mathewVslaSuccessStory",
    imagePosition: "center 18%",
    galleryImageKeys: [],
    videoUrl: "",
    dateIso: "2026-07-17",
    en: {
      date: "July 17, 2026",
      title: "Mathew's Inspiring VSLA Success Story",
      description:
        "Through the Unity VSLA Group, Mathew invested in a tricycle that strengthened his farming work and created an additional transport business.",
      category: "Financial Inclusion",
      location: "Kawotrihwe",
      person: "Mathew",
      project: "Unity VSLA Group",
      fullContent: [
        "In the vibrant community of Kawotrihwe, a hardworking farmer named Mathew belonged to the Unity VSLA Group. Like many rural farmers, Mathew faced challenges in transporting farm produce and accessing reliable means of income. However, through the support of his Village Savings and Loans Association (VSLA), he saw an opportunity to change his situation.",
        "After consistently saving with the Unity Group and demonstrating commitment to the association, Mathew qualified for a loan. Rather than spending the money on short-term needs, he made a wise investment by purchasing a tricycle.",
        "The tricycle quickly became a valuable asset. On his farm, it helped him transport fertilizers, seedlings, harvested crops, and other farming inputs with ease. Tasks that once required a lot of time, effort, and money became much more manageable. As a result, his farming activities became more productive and efficient.",
        "Beyond farming, Mathew saw another opportunity. When the tricycle was not being used on the farm, he operated it as a transportation business within Kawotrihwe and neighboring communities. The additional income from the transport service helped him support his family, repay his VSLA loan on time, and increase his savings.",
        "Today, Mathew's story is a shining example of how VSLA programs empower individuals to transform their lives. Through discipline, wise financial decisions, and the support of the Unity VSLA Group, he turned a simple loan into a sustainable source of livelihood. His journey demonstrates that when people have access to financial services and use them effectively, they can build stronger businesses, improve their families' well-being, and contribute positively to their communities.",
      ],
      keyOutcomes: [
        "Purchased a tricycle through a VSLA loan",
        "Improved transport of farm inputs and harvested crops",
        "Created an additional transport business",
        "Repaid the loan on time and increased savings",
      ],
    },
    fr: {},
  },
  {
    id: 3,
    slug: "comfort",
    imageKey: "comfortKwakyeVsla",
    imagePosition: "center 18%",
    galleryImageKeys: [],
    videoUrl: "",
    dateIso: "2026-07-16",
    en: {
      date: "July 16, 2026",
      title: "Comfort Kwakye Builds Confidence and Income Through VSLA",
      description:
        "Comfort Kwakye used VSLA training and loans to start and grow small businesses while learning to make informed financial decisions.",
      category: "Financial Inclusion",
      location: "Kwame Ntow",
      person: "Comfort Kwakye",
      project: "PEACE VSLA",
      fullContent: [
        "My name is Comfort Kwakye, and I live in Kwame Ntow. I am a member of the PEACE VSLA, and our response is ASOMDWOE (\"peace\"). It has been three years since I joined this group, and I am very grateful for the impact it has had on my life.",
        "Seeing Possibilities Differently: Even though we live in a village, we were ignorant of the fact that we could grow vegetables and sell them for additional income. Before the trainings, we used to buy items such as meat, tomatoes, and pepper. I learned that I could grow pepper and garden eggs, even in small quantities, to earn some extra income. This has helped me a lot.",
        "Taking Calculated Risks: When we started the VSLA, I took a small loan and used it to start a bread business. The business performed well, and I repaid the loan in full. I later applied for another loan, which I used to buy a small deep freezer for selling ice cream, yogurt, and other items. I am currently repaying this second loan and am confident about meeting my timeline. I strongly believe that I will complete the repayment before the three-month loan period ends. Even before the share-out, I plan to take another loan to further invest in the ice cream business so that I can achieve my set goals.",
        "Learning to Track What Matters: Initially, when I ordered bread from my suppliers, I never kept records. I did not record transportation costs, trekking, or even food expenses. After the training, I realized that all these costs should be recorded and deducted from my sales so that I can know my true profit. The lessons opened my eyes to the importance of proper records and helped me avoid impulse purchases.",
        "It has helped me immensely. I would like to sincerely thank all the partners. Today, I am not only earning additional income; I am making informed business decisions, planning ahead, and steadily expanding my activities. My story demonstrates how practical knowledge, combined with personal determination, can translate into sustained economic progress within rural communities.",
      ],
      keyOutcomes: [
        "Started and repaid a small loan for a bread business",
        "Invested in a deep freezer to expand into ice cream and yogurt sales",
        "Improved record keeping and profit tracking",
        "Identified vegetable growing as an additional income opportunity",
      ],
    },
    fr: {},
  },
  {
    id: 1,
    slug: "vsla-women-build-household-resilience",
    imageKey: "sucdenvsla",
    galleryImageKeys: ["vsla", "vslagals", "fivsla"],
    videoUrl: "",
    dateIso: "2026-02-15",
    en: {
      date: "February 15, 2026",
      title: "Women Build Household Resilience Through VSLA",
      description:
        "A community savings group helped women strengthen household income, confidence, and decision-making power.",
      category: "Financial Inclusion",
      location: "Ghana",
      person: "VSLA participants",
      project: "Financial Inclusion and VSLA",
      fullContent: [
        "For many women in cocoa-growing communities, access to reliable savings and small loans can be the difference between coping and planning ahead.",
        "Through PDA's VSLA facilitation, participants built regular saving habits, accessed small loans for petty trading and farming activities, and strengthened their confidence in household financial decisions.",
        "The group model also created a trusted space for women to discuss business ideas, family priorities, and community challenges. Members supported one another with practical advice and accountability.",
        "The story shows how a simple community-led savings structure can become a platform for wider social and economic change.",
      ],
      keyOutcomes: [
        "Improved access to savings and small loans",
        "Increased confidence in household financial decisions",
        "Stronger peer support among women",
      ],
    },
    fr: {
      date: "15 février 2026",
      title: "Des femmes renforcent la résilience des ménages grâce aux AVEC",
      description:
        "Un groupe communautaire d'épargne a aidé des femmes à renforcer leurs revenus, leur confiance et leur pouvoir de décision.",
      category: "Inclusion financière",
      location: "Ghana",
      person: "Participantes AVEC",
      project: "Inclusion financière et AVEC",
      fullContent: [
        "Pour de nombreuses femmes dans les communautés cacaoyères, l'accès à l'épargne fiable et aux petits prêts peut transformer la manière de gérer les besoins du ménage.",
        "Grâce à la facilitation des AVEC par PDA, les participantes ont développé des habitudes d'épargne, obtenu de petits prêts pour le commerce et les activités agricoles, et renforcé leur confiance dans les décisions financières du ménage.",
        "Le modèle de groupe a aussi créé un espace de confiance où les femmes discutent d'idées commerciales, de priorités familiales et de défis communautaires.",
        "Cette histoire montre comment une structure d'épargne communautaire peut devenir une plateforme de changement social et économique.",
      ],
      keyOutcomes: [
        "Meilleur accès à l'épargne et aux petits prêts",
        "Confiance accrue dans les décisions financières du ménage",
        "Soutien renforcé entre femmes",
      ],
    },
  },
  {
    id: 2,
    slug: "children-discover-reading-through-community-libraries",
    imageKey: "childhoodliteracy",
    galleryImageKeys: ["reading", "library", "cclp"],
    videoUrl: "",
    dateIso: "2026-01-20",
    en: {
      date: "January 20, 2026",
      title: "Children Discover Reading Through Community Libraries",
      description:
        "Community libraries are helping children build literacy, curiosity, and a stronger culture of reading.",
      category: "Education",
      location: "Ashanti Region, Ghana",
      person: "Children and library patrons",
      project: "Cocoa Communities' Library Project",
      fullContent: [
        "In communities where children have limited access to age-appropriate books, a library can open a new path to learning.",
        "The Cocoa Communities' Library Project supports reading spaces, local patrons, teachers, parents, and children to make reading a shared community practice.",
        "Children who once had few books to choose from now spend time reading stories, asking questions, and participating in activities that build confidence and comprehension.",
        "The impact is visible not only in reading practice, but also in the pride communities take in supporting children's learning.",
      ],
      keyOutcomes: [
        "Improved access to child-friendly reading materials",
        "Stronger community support for literacy",
        "Greater confidence among young readers",
      ],
    },
    fr: {
      date: "20 janvier 2026",
      title: "Des enfants découvrent la lecture grâce aux bibliothèques communautaires",
      description:
        "Les bibliothèques communautaires aident les enfants à développer la lecture, la curiosité et une culture de l'apprentissage.",
      category: "Éducation",
      location: "Région Ashanti, Ghana",
      person: "Enfants et animateurs de bibliothèque",
      project: "Projet de bibliothèques des communautés cacaoyères",
      fullContent: [
        "Dans les communautés où les enfants ont peu accès à des livres adaptés à leur âge, une bibliothèque peut ouvrir une nouvelle voie d'apprentissage.",
        "Le projet accompagne les espaces de lecture, les animateurs locaux, les enseignants, les parents et les enfants afin de faire de la lecture une pratique communautaire.",
        "Des enfants qui avaient peu de livres lisent maintenant des histoires, posent des questions et participent à des activités qui renforcent la confiance et la compréhension.",
        "L'impact se voit dans la pratique de la lecture, mais aussi dans la fierté des communautés à soutenir l'apprentissage des enfants.",
      ],
      keyOutcomes: [
        "Meilleur accès aux livres adaptés aux enfants",
        "Soutien communautaire renforcé pour la lecture",
        "Confiance accrue chez les jeunes lecteurs",
      ],
    },
  },
];
