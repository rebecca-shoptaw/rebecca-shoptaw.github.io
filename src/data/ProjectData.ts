export type Consideration = { wip?: boolean; text: string; link?: string };
export type ProjectInfo = {
  id: string;
  title: string;
  type: string;
  wip: boolean;
  link?: string;
  problem: string;
  solution: string;
  considerations?: Consideration[];
  roles: string;
  company?: string;
};

export const projects: ProjectInfo[] = [
  {
    id: "custom_collections",
    title: "Support Fully-Customized Collection Headers",
    type: "issue",
    wip: false,
    problem:
      "The collection pages on the Internet Archive lack individuality, and give users little help with navigating the many thousands of items each collection contains.",
    solution:
      "Support the creation of a fully customized collection header, with carousels, content cards, and special branding, via a single lightweight JSON object.",
    roles: "Project lead, code author",
    company: "ia",
    considerations: [
      {
        text: "We should build an intuitive editor that collection admins can use to generate the JSON object for the layout",
      },
      {
        text: "All properties of the layout should be optional, so that admins can do as much as building 10 carousels or as little as changing the header background color",
      },
      {
        text: "All text that appears on a custom-color background should auto-select between black and white to meet accessibility standards",
      },
      {
        text: "The header should be fully responsive",
      },
      {
        text: "Admins should be able to add any number of cards and carousels in any order",
      },
      {
        text: "We should support custom fonts and colors for the header",
      },
      {
        text: "All existing hardcoded custom headers should be transferred to the new format",
      },
    ],
  },
  {
    id: "static_pages",
    title: "Create a User-Friendly Admin Editing Workflow",
    type: "issue",
    wip: false,
    problem:
      "Editing a number of high-visibility pages on the site, including the about page, previously required admins to write and save raw HTML to the database, which led to frequent page breakage and confusion.",
    solution:
      "Create a simple, performant new editing workflow that does not require admins to touch the HTML directly.",
    roles: "Project lead, code author",
    company: "ia",
    considerations: [
      {
        text: "It should be easy to adjust text and styles without touching HTML",
      },
      {
        text: "The editing experience should reuse the existing architecture for editing archived items",
      },
      {
        text: "The page's content should be cached to prevent unnecessary strain on the metadata service",
      },
      {
        text: "An easy-to-find edit button should appear on the page for site admins",
      },
      {
        text: "All existing content should be transferred into the new format",
      },
      {
        text: "The database used to store the original page content should be deleted",
      },
    ],
  },
  {
    id: "search_inside",
    title: "Build Search Inside Carousel",
    type: "issue",
    wip: false,
    problem:
      "Many users of the Internet Archive's search page have no idea that searching inside text contents or media captions is possible, and may give up before finding what they're looking for.",
    solution:
      "Build a search inside carousel which includes results from text and captions searches to display alongside search results.",
    roles: "Project lead, code author",
    company: "ia",
    considerations: [
      {
        text: "The carousel should alternate between results from each service",
      },
      {
        text: "The tiles should align to match the regular search result tiles",
      },
      {
        text: "The carousel mechanism should be encapsulated in a new, reusable carousel component",
      },
      {
        text: "The number of tiles to display per service should be customizable",
      },
      {
        text: "Placeholders should appear instead of the results while they are being fetched",
      },
    ],
  },
  {
    id: "registration",
    title: "Overhaul Registration User Interface (UI) and User Experience (UX)",
    type: "issue",
    wip: false,
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
        text: "If a user tries to submit a form with a taken email address or username, the submission should fail",
        link: "https://github.com/internetarchive/openlibrary/pull/9267",
      },
      {
        text: "The form should be redesigned to be appealing and intuitive",
        link: "https://github.com/internetarchive/openlibrary/pull/9350",
      },
      {
        text: "Performance should be improved by running all lightweight checks on the frontend",
        link: "https://github.com/internetarchive/openlibrary/pull/9485",
      },
      {
        text: "Form entries already marked invalid should be checked on key-up",
        link: "https://github.com/internetarchive/openlibrary/pull/9512",
      },
      {
        text: "We should add more thorough tests for the form and remove any unused code",
        link: "https://github.com/internetarchive/openlibrary/pull/9543",
      },
    ],
    roles:
      "Project lead, code author (real-time errors, submission prevention, redesign, refactor)",
    company: "ia",
  },
  {
    id: "newContributorGuide",
    title: "Improve Resources for New Contributors",
    type: "issue",
    wip: false,
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
        text: `Reminder and link to guide should be added to every new feature proposal`,
        link: "https://github.com/internetarchive/openlibrary/pull/9273",
      },
      {
        text: `Reminder and link to guide should be added to issue page How-To guide`,
      },
    ],
    roles: `Proposal author, code author (feature form addition), guide editor, guide author (troubleshooting section)`,
    company: "ia",
  },
  {
    id: "i18n",
    title: "Optimize Internationalization",
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
    company: "ia",
  },
  {
    id: "triolingo",
    title: "Gamified Vocab Practice Site",
    type: "repo",
    wip: false,
    link: "https://rebeccashoptaw.dev/triolingo/",
    problem:
      "I was helping a few middle school students study for the vocab portion of the SSAT exam, and was struggling to find resources for them to practice with that were actually fun.",
    solution:
      "Built a Duolingo-esque gamified site that uses a 500+ word vocab practice set to generate unique, gamified practice sessions. \n\n I've been mostly focused on my work with the Internet Archive lately, but if/when I return to this project, I plan to expand it so that the game design can be reused for multiple different subjects and levels.",
    considerations: [
      {
        text: "Each session should use a smaller subset of the total vocab list, so that students reinforce their memories by seeing each word multiple times",
        link: "https://github.com/rebecca-shoptaw/triolingo/blob/master/src/hooks/useQuestionData.tsx",
      },
      {
        text: "If a student fails the session, they should have the opportunity to practice again with the same vocab subset",
        link: "https://github.com/rebecca-shoptaw/triolingo/blob/master/src/components/GameOverButtons.tsx",
      },
      {
        text: "If a student passes the session, they should have the opportunity to practice again with the same subset or try a new set",
        link: "https://github.com/rebecca-shoptaw/triolingo/blob/master/src/components/GameOverButtons.tsx",
      },
    ],
    roles: "Designer and developer",
  },
  {
    id: "openEditions",
    title: "Analogue-esque Audiobook Site",
    type: "repo",
    wip: false,
    link: "https://github.com/rebecca-shoptaw/open-editions",
    problem:
      "I love listening to public domain audiobooks of classic novels but I find most existing audiobook interfaces cluttered and non-edition-specific, and I miss the aesthetic and simplicity of physical books.",
    solution:
      "Built an aesthetically pleasing audiobook player designed to mimic the feeling of reading a physical book. \n \n I've been mostly focused on my work with Internet Archive lately, but if/when I return to the site I plan to use the LibriVox API to make the full catalog available, redesign and simplify the landing page, improve modularity internally, use URLs to access book pages, and replace local covers with covers drawn from the Chicago Art Institute API.",
    considerations: [
      {
        text: "Users should be able to hide all book info to focus on listening",
      },
      {
        text: "Each book should have a customized cover as its background image, repositioned as needed",
      },
      {
        text: "The audiobook component should be fully reusable, so that it can display any book",
      },
    ],
    roles: "Designer and developer",
  },
  {
    id: "portfolio",
    title: "Engineering Portfolio Redesign",
    type: "repo",
    wip: true,
    link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io",
    problem:
      "The previous version of my portfolio site was fun, but I wanted to switch it out for a cleaner design centered around more full walkthroughs of a few of my recent projects.",
    solution:
      "Took inspiration from the GitHub user interface to design and build a new version of the site with a clean, modern look, full project case studies, and an always-visible, responsive infobox.",
    considerations: [
      {
        text: "Site should be highly modular so that it's very simple to add and update project info",
        link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/src/data/ProjectData.ts",
      },
      {
        text: "Infobox should start as a regular site section, then move to be either a side panel or a header on scroll, depending on screen size",
        link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/src/components/InfoBox.tsx",
      },
      {
        text: "Project considerations should link to a relevant site where applicable",
        link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/src/components/ProjectConsiderations.tsx",
      },
      {
        text: "Project images and snippets should open in a larger modal on click",
        link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/src/utils/utils.ts",
      },
      {
        wip: true,
        text: "Site accessibility should be improved throughout, by adding descriptive alt text where possible",
      },
      {
        wip: true,
        text: "Site should have a simple experience section either before or after projects",
      },
    ],
    roles: "Designer and developer",
  },
  {
    id: "askOscar",
    title: "Oscar Wilde Magic 8 Ball",
    type: "repo",
    wip: false,
    link: "https://rebeccashoptaw.dev/ask-oscar-wilde/",
    problem:
      "When facing a personal or professional problem, I was unable to consult famed writer and essayist Oscar Wilde (1854-1900).",
    solution:
      "Designed and built a site where users can submit their predicaments and receive Mr. Wilde's advice.",
    considerations: [
      {
        text: "If a user hits submit without entering a predicament, Oscar should prompt them to do so",
        link: "https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/hooks/useNewQuote.tsx",
      },
      {
        text: "The appearance and disappearance of quotes should be fully animated",
        link: "https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/hooks/useAnimation.tsx",
      },
      {
        text: "Users should be able to submit by hitting enter",
        link: "https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/components/AskOscar.tsx",
      },
    ],
    roles: "Designer and developer",
  },
  {
    id: "catBand",
    title: "All-Cat Jazz Band",
    type: "repo",
    wip: false,
    link: "/cat-band",
    problem:
      "There is not nearly enough cat representation in the online jazz scene.",
    solution:
      "Designed and built an all-cat jazz band where each cat plays a different instrument, and users can start and stop each of the cats.",
    considerations: [
      {
        text: "Each cat should randomly select between a number of different possible jazz loops so that the music is different every time",
        link: "https://github.com/rebecca-shoptaw/cat-band/blob/master/src/components/Cat.tsx",
      },
      {
        text: "Cat data should be stored separately so that the same component can be reused for each cat",
        link: "https://github.com/rebecca-shoptaw/cat-band/blob/master/src/components/Cat.tsx",
      },
      {
        text: "Users should be able to start/stop cats by hitting the relevant keys on their keyboard",
        link: "https://github.com/rebecca-shoptaw/cat-band/blob/master/src/components/CatBand.tsx#L45-L50",
      },
    ],
    roles: "Designer and developer",
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

// When facing a personal or professional problem, I was unable to consult famed writer and essayist Oscar Wilde ().

// I noticed that there was a shocking lack of cat representation in the online jazz scene.
