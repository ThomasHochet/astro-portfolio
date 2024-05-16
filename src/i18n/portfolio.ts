export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const portfolio = {
  en: {
    titles: {
      studies: "Studies",
      work: "Work",
      contact: "Contact"
    },
    footer: "developped by",
    about: {
      title: "About",
      name: "Thomas Hochet",
      designation: "Developer",
      location: "Mitry-Mory, France",
      website: "thochet.fr",
      description: "Go-enthusiast, I enjoy developing practical and functional applications that meet needs. I love photography, music, and video games."
    },
    studies: [
      {
        title: "Bachelor in Computer Science",
        org: "CFA Insta",
        tags: "[C, JavaScript, PHP, Java, Android]",
        url: "https://cfa-insta.fr",
        date: "09/2020 - 08/2022",
        desc: "Training on the fundamentals of various languages and multiple job profiles"
      },
      {
        title: "Certification - Application Developer Designer",
        org: "CFA Insta",
        tags: "[NestJS, Angular, React, Symfony, Java Spring, Android]",
        url: "https://cfa-insta.fr",
        date: "09/2022 - 08/2023",
        desc: "Deepening of knowledge acquired during bachelor, exploration of new frameworks, and expansion of skills (UI/UX, projects, etc...)."
      }
    ],
    works: [
      {
        title: "Support & development",
        date: "08/2021 - 08/2023",
        url: "https://www.mysolutionconnect.com",
        location: "Ile-de-France, Paris",
        org: "MySolutionConnect",
        tags: "[Connector, API, SQL, customer support]",
        desc: "Internship within MySolutionConnect in customer support as well as connector production."
      },
      {
        title: "Developer consultant",
        date: "09/2023 - Present",
        url: "https://www.mysolutionconnect.com",
        location: "Ile-de-France, Paris",
        org: "MySolutionConnect",
        tags: "[API, SQL, React, Symfony, Firebase]",
        desc: "Connector production and development of internal solutions to enhance production."
      }
    ],
    contacts: [
      {
        title: "Email",
        icon: "carbon:email",
        url: "mailto:thochet.web@gmail.com"
      },
      {
        title: "Github",
        icon: "carbon:logo-github",
        https: "https://github.com/ThomasHochet",
      },
      {
        title: "Telegram",
        icon: "mdi:telegram",
        url: "https://t.me/thochet"
      }
    ]
  },
  fr: {
    titles: {
      studies: "Etudes",
      work: "Travail",
      contact: "Contact"
    },
    footer: "développé par",
    about: {
      title: "A propos",
      name: "Thomas Hochet",
      designation: "Développeur",
      location: "Mitry-Mory, France",
      website: "thochet.fr",
      description: "Go-enthousiaste, j'aime développer des applications pratiques, fonctionnelles et répondant aux besoins. J'aime la photographie, la musique et les jeux-vidéos."
    },
    studies: [
      {
        title: "BTS Service Informatique aux Organisations (SIO)",
        org: "CFA Insta",
        tags: "[C, JavaScript, PHP, Java, Android]",
        url: "https://cfa-insta.fr",
        date: "09/2020 - 08/2022",
        desc: "Formation sur les bases de plusieurs langages et plusieurs profils métiers"
      },
      {
        title: "Certification Concepteur Développeur d'Applications (CDA)",
        org: "CFA Insta",
        tags: "[NestJS, Angular, React, Symfony, Java Spring, Android]",
        url: "https://cfa-insta.fr",
        date: "09/2022 - 08/2023",
        desc: "Approfondissement des connaissances acquises en BTS, découverte de nouveaux frameworks et extension des compétences (UI/UX, Projets, ...)"
      }
    ],
    works: [
      {
        title: "Support & développement",
        date: "08/2021 - 08/2023",
        url: "https://www.mysolutionconnect.com",
        location: "Ile-de-France, Paris",
        org: "MySolutionConnect",
        tags: "[Connecteur, API, SQL, support client]",
        desc: "Alternance au sein de MySolutionConnect au support client ainsi qu'à la production de connecteur."
      },
      {
        title: "Consultant développeur",
        date: "09/2023 - Present",
        url: "https://www.mysolutionconnect.com",
        location: "Ile-de-France, Paris",
        org: "MySolutionConnect",
        tags: "[API, SQL, React, Symfony, Firebase]",
        desc: "Production de connecteur et développement de solution logiciel interne améliorant la production."
      }
    ],
    contacts: [
      {
        title: "Email",
        icon: "carbon:email",
        url: "mailto:thochet.web@gmail.com"
      },
      {
        title: "Github",
        icon: "carbon:logo-github",
        https: "https://github.com/ThomasHochet",
      },
      {
        title: "Telegram",
        icon: "mdi:telegram",
        url: "https://t.me/thochet"
      }
    ]
  }
} as const;
