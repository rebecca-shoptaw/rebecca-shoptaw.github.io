export type Consideration = { wip?: boolean; text: string; link?: string };
export type ProjectInfo = {
  id: string;
  title: string;
  type: string;
  wip?: boolean;
  link: string;
  problem: string;
  solution: string;
  considerations?: Consideration[];
  roles: string;
};

export const projects: ProjectInfo[] = [
  {
    id: `registration`,
    title: "Overhaul Registration User Interface (UI) and User Experience (UX)",
    type: "issue",
    wip: true,
    link: "https://github.com/internetarchive/openlibrary/issues/7694",
    problem: `The Internet Archive's Open Library registration form is many new users' first interaction with the site, and currently it is clunky and non-intuitive, and does not notify users of errors in their submission until after the form has been submitted.`,
    solution: `Add custom real-time error messages, prevent submissions with bad entries, and implement a full form redesign.`,
    considerations: [
      {
        text: "If a badly formatted email, username or password is entered, an error message should appear",
        link: "https://github.com/internetarchive/openlibrary/pull/9190",
      },
      {
        text: "If an email or username that is already taken on the Internet Archive or Open Library is entered, an error message should appear",
        link: "https://github.com/internetarchive/openlibrary/pull/9223",
      },
      {
        text: "If a user tries to submit a form with missing or badly formatted entries, the submission should fail",
        link: "https://github.com/internetarchive/openlibrary/pull/9245",
      },
      {
        wip: true,
        text: "If a user tries to submit a form with a taken email address or username, the submission should fail",
        link: "https://github.com/internetarchive/openlibrary/pull/9267",
      },
      {
        wip: true,
        text: "The form should be redesigned to be appealing and intuitive",
      },
      {
        wip: true,
        text: "We should add more thorough tests for the form and remove any unused code",
      },
    ],
    roles:
      "Project lead, code author (real-time errors, submission prevention, redesign, refactor)",
  },
  {
    id: "newContributorGuide",
    title: "Improve Resources for New Contributors",
    type: "issue",
    wip: true,
    link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet#troubleshooting-your-pull-request",
    problem:
      "A lot of new contributors to the Internet Archive's Open Library site have been getting confusing errors as a result of failing to keep their copy of the site's code up to date. \n\n After helping a number of different people follow similar steps to solve the problem, I realized what we needed was an expanded guide that we could give new developers as a resource and hopefully use to stop these problems before they begin.",
    solution: `Flesh out the relevant developer "Cheat Sheet" with extensive information re: staying up to date and a full troubleshooting guide. Increase visibility by adding a reminder to stay up to date to the bottom of every new feature proposal.`,
    considerations: [
      {
        text: `Guide should include easy-to-follow new section re: how to stay up to date and/or check whether you're up to date`,
        link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet#working-on-your-branch",
      },
      {
        text: `"Creating a Pull Request" section should be rewritten to be more general and include all necessary steps for contributing a change`,
        link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet#making-changes-and-creating-a-pull-request",
      },
      {
        text: `New troubleshooting section should cover all common git-related errors and include its own table of contents for easy navigation`,
        link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet#troubleshooting-your-pull-request",
      },
      {
        wip: true,
        text: `Reminder and link to guide should be added to every new feature proposal`,
        link: "https://github.com/internetarchive/openlibrary/pull/9273",
      },
      {
        wip: true,
        text: `Reminder and link to guide should be added to issue page How-To guide`,
      },
    ],
    roles: `Proposal author, code author (feature form addition), guide editor, guide author (troubleshooting section)`,
  },
  {
    id: "i18n",
    title: "Internationalization Project",
    type: "issue",
    wip: false,
    link: "https://github.com/internetarchive/openlibrary/pull/8900",
    problem:
      "New onscreen text is frequently added to the Open Library site, but could only be translated once a new translation template was manually generated, which could happen as infrequently as every 3-6 months. This hampered the site's accessibility for non-English speakers, who would encounter random English phrases throughout the site.",
    solution:
      "Wrote a program that auto-generates a new template each time a developer's change involves adding or modifying on-screen text, which means that no new text is now added without also being added to the translation template. Also oversaw a bulk re-formatting of a lot of previously untranslated text to make it detectable for the template.",
    considerations: [
      {
        text: "Template should only update if changes to the text have been made",
      },
      {
        text: "Developers should be able to force a template update manually",
      },
      {
        text: "The Creation Date field should be standardized to avoid merge conflicts",
        link: "https://github.com/internetarchive/openlibrary/pull/9210",
      },
      {
        text: "The automation project should be accompanied with a bulk re-formatting of currently untranslated text",
        link: "https://github.com/internetarchive/openlibrary/issues/8904",
      },
    ],
    roles: "Proposal author, code author, project lead (bulk re-formatting)",
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
