export type Consideration = { wip?: boolean; text: string };
export type ProjectInfo = {
  id: string;
  title: string;
  type: string;
  wip?: boolean;
  link: string;
  problem: string;
  solution: string;
  considerations?: Consideration[];
};

export const projects: ProjectInfo[] = [
  {
    id: `registration`,
    title: "Registration UI/UX Overhaul",
    type: "issue",
    wip: true,
    link: "https://github.com/internetarchive/openlibrary/issues/7694",
    problem: `The Open Library registration form is most new users' first interaction with the site, and it is clunky, non-intuitive, and does not notify users of errors until after the form has been submitted.`,
    solution: `Add custom real-time form validation, prevent submissions with bad data, and implement a full form re-design.`,
  },
];

export const originalProjects = [
  {
    id: `triolingo`,
    title: `Triolingo`,
    img_alt: `Duolingo-esque interface with a gray cat.`,
    description: `A Duolingo look-alike to help students practice SSAT Vocabulary. Features functionality for repeating and generating new word-sets and keeping score for each round. Built with Typescript and React.`,

    wip: true,
  },
  {
    id: `open-editions`,
    title: `Open Editions`,
    img_alt: `Audiobook playlist with romantic painting in the background.`,
    description: `A minimalist and aesthetically pleasing audiobook player, which combines public domain audiobook recordings of classic novels with customized cover images . Built with Typescript, React and the Librivox API.`,
    wip: true,
  },
  {
    id: `cat-band`,
    title: `Cat Band`,
    img_alt: `Black and white interface with drawings of cats playing instruments.`,
    description: `An all-cat jazz band. Built with Typescript and React.`,
  },
  {
    id: `ask-oscar-wilde`,
    title: `Ask Oscar Wilde`,
    img_alt: `Submission and quote boxes on a William Morris print.`,
    description: `A dynamic site in which Oscar Wilde aphorisms appear in
          response to user predicaments. Built with Typescript, React and GSAP.`,
  },

  {
    id: "calmtube",
    title: "CalmTube",
    img_alt: "Simple black search interface.",
    description:
      "A minimalist YouTube re-design with a light/dark mode and no distractions. Built with Typescript, React, and the YouTube Data API.",
    wip: true,
  },

  {
    id: `pomodoro`,
    title: `Pomodoro`,
    img_alt: `Minimal timer text and controls.`,
    description: `A fully functional and customizable pomodoro study timer, with light and dark modes. Built with Typescript and React.`,
    wip: true,
  },
  {
    id: `focusify`,
    title: `Focusify`,
    img_alt: `Simple off-white home screen with the text "Begin"`,
    description: `A minimalist Spotify re-design with a light/dark mode and built-in functionality for audio visualizers and other view customizations. Further integrations to come. Built with Typescript, React, and the Spotify API.`,
    wip: true,
    offline: true,
  },

  {
    id: `deco-calculator`,
    title: `Deco Calculator`,
    img_alt: `Green and gold calculator with an art deco background`,
    description: `A stylish and fully functional calculator designed for doing basic calculations in an art deco manner. Built with Typescript and React.`,
  },
  {
    id: `tabula-rasa`,
    title: `Tabula Rasa`,
    img_alt: `Simple white text entry and preview windows.`,
    description: `A minimal and elegant responsive markdown previewer. Built with Typescript and React.`,
  },

  {
    id: `mrs-john-lennox`,
    title: `Film Press Kit`,
    img_alt: `Press site with text blocks and an image of a woman in period costume.`,
    description: `A press website for the short film `,
    description_italics: `The Portrait of Mrs. John Lennox.`,
  },
  {
    id: `portfolio`,
    title: `This Site`,
    img_alt: `Screenshot of the portfolio site you're currently on.`,
    description: `The portfolio site you're currently on. Built with React, Typescript, and HTML/CSS.`,
  },
];