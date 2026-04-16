import {
  facebook,
  youtube,
  twitter,
  linkedin,
  whiteYoutube,
  whiteFacebook,
  whiteLinkedin,
  whiteTwitter,
  givelove,
  volunteer,
  negotiation,
  call,
  email,
  location,
} from "../assets/icons";

import {
  beyond,
  british,
  callund,
  cdd,
  cocoa,
  coram,
  edtech,
  euro,
  slaves,
  gain,
  initial,
  institute,
  ipsos,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  tonys,
  tzedek,
  unicef,
  university,
  cclp,
  vsla,
  ncrp,
  customer1,
  customer2,
  customer3,
  customer4,
  Image1,
  Image3,
  Image2,
  Image4,
  Image5,
  launch,
  clpproject,
  vslagals,
  child,
  vslaintro,
  female,
  abiba,
  salomey,
  // crp,
  // vsp,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ethical-review-committee", label: "Ethical Review Committee" },
  { href: "/child-abuse-tracker", label: "Child Abuse Tracker" },
  { href: "/covid-19", label: "COVID 19" },
  { href: "/#partners", label: "Partners" },
  // Restore with Events page (see Events.jsx EVENTS_PAGE_BLURRED)
  // { href: "/events", label: "Events" },
];

export const navigation = [
  {
    title: "Who we are",
    link: "/who-we-are",
    links: [
      { name: "Vision", link: "/who-we-are#vision" },
      { name: "Mission", link: "/who-we-are#mission" },
      { name: "Teams", link: "/teams" },
      { name: "Board", link: "/board" },
      { name: "Staff", link: "/staff" },
    ],
  },

  {
    title: "What we do",
    link: "/what-we-do",
    links: [
      { name: "Strategic Objectives", link: "/what-we-do#strategic-objectives" },
      { name: "Our Projects", link: "/our-projects" },
      { name: "Expertise", link: "/what-we-do#expertise" },
    ],
  },

  {
    title: "Resources",
    link: "/publications",
    links: [
      { name: "Publications", link: "/publications" },
      { name: "News & Activities", link: "/news-and-activities" },
      { name: "Podcast and Vodcasts", link: "/podcast-and-vodcast" },
      { name: "Videos", link: "/videos" },
      { name: "Photos", link: "/photos" },
    ],
  },

  // Restore with Our Impact route (see OurImpact.jsx header comment)
  // {
  //   title: "Impact",
  //   link: "/our-impact",
  //   links: [
  //     { name: "Policy Change", link: "/our-impact#policies" },
  //     { name: "Practice Change", link: "/our-impact#practices" },
  //     { name: "System Change", link: "/our-impact#systems" },
  //   ],
  // },
];

export const socialMedia = [
  {
    src: youtube,
    alt: "youtube logo",
    link: "https://www.youtube.com/@pdatv3656",
  },
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/p/PDA-GHANA-100063665496444/",
  },
  {
    src: linkedin,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/company/pdaghana/",
  },
  { src: twitter, alt: "twitter logo", link: "https://x.com/pdaghofficial" },
];

export const whiteMedia = [
  {
    src: whiteYoutube,
    alt: "youtube logo",
    link: "https://www.youtube.com/@pdatv3656",
  },
  {
    src: whiteFacebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/p/PDA-GHANA-100063665496444/",
  },
  {
    src: whiteLinkedin,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/company/pdaghana/",
  },
  {
    src: whiteTwitter,
    alt: "twitter logo",
    link: "https://x.com/pdaghofficial",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
      { name: "+233 (0)208129622", link: "tel:+233208129622" },
      {
        name: "+233 (0)302 252998 / 2970177",
        link: "tel:+233302252998, tel:+2333022970177",
      },
      { name: "Email:", link: "mailto:info@pdaghana.com" },
      { name: "info@pdaghana.com", link: "mailto:info@pdaghana.com" },
    ],
  },

  {
    title: "Quick Links",
    links: [
      { name: "Ethical Review Committee", link: "/" },
      { name: "Child Abuse Tracker", link: "/" },
      { name: "COVID 19", link: "/" },
      { name: "Partners", link: "/" },
      { name: "Events", link: "/" },
    ],
  },

  {
    title: "What we do",
    links: [
      { name: "Strategic Themes", link: "/" },
      { name: "Our Projects", link: "/" },
      { name: "Expertise", link: "/" },
    ],
  },

  {
    title: "Resources",
    links: [
      { name: "Publications", link: "/publications" },
      { name: "News & Activities", link: "/news-and-activities" },
      { name: "Podcast and Vodcasts", link: "/podcast-and-vodcast" },
      { name: "Videos", link: "/videos" },
      { name: "Photos", link: "/photos" },
    ],
  },

  // Restore with Our Impact route (see OurImpact.jsx header comment)
  // {
  //   title: "Impact",
  //   links: [
  //     { name: "Policy Change", link: "/our-impact#policies" },
  //     { name: "Practice Change", link: "/our-impact#practices" },
  //     { name: "System Change", link: "/our-impact#systems" },
  //   ],
  // },
];

export const partners = [
  { imgURL: beyond, name: "Beyond" },
  { imgURL: british, name: "British" },
  { imgURL: callund, name: "Callund" },
  { imgURL: cdd, name: "CDD" },
  { imgURL: cocoa, name: "Cocoa" },
  { imgURL: coram, name: "Coram" },
  { imgURL: edtech, name: "EdTech" },
  { imgURL: euro, name: "Euro" },
  { imgURL: slaves, name: "Slaves" },
  { imgURL: gain, name: "gAIN" },
  { imgURL: initial, name: "Initial" },
  { imgURL: institute, name: "Institute" },
  { imgURL: ipsos, name: "IPSOS" },
  { imgURL: kokoo, name: "Kokoo" },
  { imgURL: mastercard, name: "Mastercard" },
  { imgURL: opm, name: "OPM" },
  { imgURL: pandemics, name: "Pandemics" },
  { imgURL: root, name: "Root" },
  { imgURL: sabre, name: "Sabre" },
  { imgURL: schol, name: "Schol" },
  { imgURL: star, name: "Star" },
  { imgURL: sustainable, name: "Sustainable" },
  { imgURL: tonys, name: "Tonys" },
  { imgURL: tzedek, name: "Tzedek" },
  { imgURL: unicef, name: "Unicef" },
  { imgURL: university, name: "University" },
];

export const services = [
  {
    imgURL: volunteer,
    label: "Become a Volunteer",
    subtext:
      "Volunteers are the backbone of our organisation, help us make an impact on the world today.",
    button: "Join us now",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSePqWX9ONz-h6EGOAmcy-NO1_yygaO6ETLuBlQNAf0OGGUfFA/viewform?embedded=true",
    linkType: "googleForm",
  },
  {
    imgURL: givelove,
    label: "Donate to support",
    subtext:
      "Large or small, your donation helps change the lives of people in Africa, both old and young.",
    button: "Donate now",
    // link: "/pdaafrica/donate", // Route for Paystack form
    linkType: "paystack",
  },
  {
    imgURL: negotiation,
    label: "Become a Partner",
    subtext:
      "Work closely with our team to develop mutually beneficial initiatives with undeniable impact.",
    button: "Get in touch",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSckRIpUxFJ9CwLBM7YjW3zp0WGRd1yE0TyTm1Wi-xZWKN-pXA/viewform?embedded=true",
    linkType: "googleForm",
  },
];

export const projects = [
  {
    imgURL: vsla,
    label: "Financial Inclusion and VSLAs",
    subtext:
      "Mobilizing, forming and training VSLA groups in communities for financial inclusion.",
    button: "Read More",
    // link: "https://pdaghana.com/pdas-financial-inclusion-programmes-in-sub-saharan-africa/",
    link: "/pdaafrica/financial-inclusion-and-vsla",
  },
  {
    imgURL: cclp,
    label: "Cocoa Communities’ Library Project",
    subtext:
      "Promoting literacy and reading habits among children in cocoa-growing communities.",
    button: "Read More",
    // link: "https://pdaghana.com/59840-2/",
    link: "/pdaafrica/cocoa-communities-library-project",
  },
  {
    imgURL: ncrp,
    label: "Nyonkopa Child Labour Remediation",
    subtext:
      "Remediating identified child labour cases in the supply chain of Barry Callebaut (Nyonkopa).",
    button: "Read More",
    // link: "https://pdaghana.com/nyonkopa-child-labour-remediation-vsla/",
    link: "/pdaafrica/nyonkopa-child-labour-remediation",
  },
];
export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: "4",
    position: "Volunteer",
    feedback:
      "Volunteering with PDA Africa has been the most interesting and exciting experience ever.",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: "5",
    position: "Partner",

    feedback:
      "Collaborating with PDA Africa has shown us how best we can serve the communities we find ourselves.",
  },
  {
    imgURL: customer3,
    customerName: "Jin Penge",
    rating: "4",
    position: "Staff",
    feedback:
      "PDA Africa is a great place to spend your time, you feel as though your time on earth is really worth it!",
  },

  {
    imgURL: customer4,
    customerName: "Bitras Wesrad",
    rating: "5",
    position: "Benefactor",
    feedback:
      "Their contributions and dedication to helping my community has really been life-changing",
  },
];

export const contacts = [
  {
    imgURL: location,
    label: "Head Office Address:",
    links: [
      {
        name: " GA0472784 Asafoatse Oman Street",
        link: "https://www.ghanapostgps.com/map/#GA0472784",
      },
      {
        name: "AK-849-3514 Anwomaso Rd",
        link: "https://www.ghanapostgps.com/map/#AK8493514",
      },
    ],
  },
  {
    imgURL: call,
    label: "Contact Number:",
    links: [
      { name: "+233 (0)208129622", link: "tel:+233208129622" },
      {
        name: "+233 (0)302 252998 / 2970177",
        link: "tel:+233302252998, tel:+2333022970177",
      },
    ],
  },
  {
    imgURL: email,
    label: "Email Address:",
    links: [
      { name: "Website:", link: "https://pdaghana.com" },
      { name: "Email:", link: "mailto:info@pdaghana.com" },
    ],
  },
];
export const imageArray = [
  {
    src: Image1,
    alt: "Image 1",
    title: "Welcome to PDA Africa",
    description: "...everyone matters",
  },
  {
    src: Image2,
    alt: "Image 2",
    title: "",
    description:
      "A not-for-profit organisation which is responsible for the co-creation and design of community-led and community-driven development interventions with governments, the private sector and international development partners.",
  },
  {
    src: Image5,
    alt: "Image 3",
    title: "",
    description:
      "We view communities as agents of change and development partners",
  },
  {
    src: Image4,
    alt: "Image 4",
    title: "",
    description:
      "We support local governance and, for that matter, decentralization programs",
  },
  {
    src: Image3,
    alt: "Image 5",
    title: "",
    description:
      "We enhance local capacity through local level coordination, training, facilitation and technical support",
  },
];

export const africaLinks = [
  { href: "/pdaafrica#about-us", label: "About Us" },
  { href: "/pdaafrica#projects", label: "Projects" },
  { href: "/pdaafrica#gallery", label: "Gallery" },
  { href: "/pdaafrica#testimonials", label: "Testimonials" },
  { href: "/pdaafrica#get-involved", label: "Get Involved" },
  {
    href: "/pdaafrica/dataanalytics/vsla-dashboard",
    label: "Impact",
    // submenu: [
    // {
    //   href: "/pdaafrica/dataanalytics/cclp-dashboard",
    //   label: "CCLP Dashboard ",
    // },
    // {
    //   href: "/pdaafrica/dataanalytics/vsla-dashboard",
    //   label: "Summary",
    // },
    // {
    //   href: "/pdaafrica/dataanalytics/nclr-dashboard",
    //   label: "Child Abuse Tracker-Nyonkopa",
    // },
    // {
    //   href: "/pdaafrica/dataanalytics",
    //   label: "Summary",
    // },
    // ],
  },
  { href: "/pdaafrica#contact-us", label: "Contact Us" },
];

export const donateButton = [
  {
    label: "Donate now",
    link: "/pdaafrica/donate",
  },
];

export const Data = [
  {
    img: vslaintro,
    link: "https://www.youtube.com/embed/vE39_togVdE?si=HcVv6SYlF085aUew",
    title: "Introduction of the VLSA/GALS Program to Farmer 2",
    description: "",
  },
  {
    img: vslagals,
    link: "https://www.youtube.com/embed/iIA6YCYQK7s?list=PLlPBKRhN29Y_lkNipvQXeulZXczTnaBsF",
    title: "Short video on VSLA/GALS project",
    description: "",
  },
  {
    img: child,
    link: "https://www.youtube.com/embed/WP7Fqs8fNrI?si=3v7IvzEpyK9bhSRh",
    title: "Child Labour",
    description: "",
  },
  {
    img: clpproject,
    title: "An Impact Video (Cocoa Communities Library Project)",
    description: "",
  },
  {
    img: launch,
    link: "https://www.youtube.com/embed/dIA1cnLkwA0?si=CqZnLdxEAFJPfDWA",
    title: "Cocoa Communities Library Project Launch",
    description: "",
  },
  {
    img: female,
    link: "https://www.youtube.com/embed/lpoBrrvidpw?si=4mrRKsG_-UBhU1Kp",
    title: "The Experiences of Female-led Micro and Small scale enterprises",
    description: "",
  },
  {
    img: salomey,
    link: "https://www.youtube.com/embed/CIpl6mAXpts?si=WsMgNxgNfjak-heh",
    title: "The story of Salomey",
    description: "",
  },
  {
    img: abiba,
    link: "https://www.youtube.com/embed/9ZgLBUB281o?si=lSSuj59gsGFl-HuD",
    title: "The story of Abiba",
    description: "",
  },
];
