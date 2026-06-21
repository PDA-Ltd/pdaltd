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
