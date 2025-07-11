export type Snippet = {
  text: string;
  language: string;
  caption: string;
  link?: string;
};

export const snippets: { [key: string]: Snippet } = {
  custom_collections: {
    text: `[
  {
    "type": "settings",
    "overlayColor": "#e5f1fa",
    "buttonColor": "#e3fdd5",
    "headingBGColor": "#000000",
    "headingFont": "teko-semi-bold"
  },
  {
    "type": "header",
    "backgroundColor": "#e5f1fa",
    "leftImage": "https://archive.org/download/democracys-library/web-component/banner-logo.svg",
    "centerImage": "https://archive.org/download/democracys-library/web-component/banner-image-rebrand.webp"
  },
  {
    "type": "carousel",
    "title": "COLLECTION HIGHLIGHTS",
    "items": [
      "MH07D7178",
      "CAT92272736",
      "CAT79708698031",
      "usda-posters",
      "selectedpolishso00army",
      "introductionlapt00albe",
      "hintsonmountainl94youn",
      "drylandfarmingin00cott"
    ]
  },
  {
    "type": "content-cards",
    "cards": [
      {
        "title": "ABOUT THIS PROJECT",
        "description": "Democracy's Library brings together more than 700 collections from over 50 government organizations, archived by the Internet Archive since 2006. With more than half a million documents (and counting) from local, regional, and national governments, we're just getting started!",
        "linkURL": "https://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/",
        "linkText": "Learn more",
        "usePlainLink": "true"
      },
      {
        "title": "WHAT'S NEXT?",
        "description": "This is just the beginning. Democracy's Library will continue to grow and be updated over time. We'll be adding more information from all over the world, along with useful tools to help find and access what you need. You can help us grow by making a contribution today!",
        "linkURL": "https://archive.org/donate/?origin=iawww-democlibrycllctn",
        "linkText": "DONATE"
      }
    ]
  },
  {
    "type": "content-cards",
    "cards": [
      {
        "title": "REGIONAL ORGANIZATIONS",
        "description": "<dl-regional-organizations></dl-regional-organizations>",
        "linkURL": "https://webservices.archive.org/wgw/",
        "linkText": "Government websites of the world",
        "usePlainLink": "true"
      },
      {
        "title": "JAN 6TH COMMITTEE DOCS",
        "description": "The United States House Select Committee to Investigate the January 6th Attack on the United States Capitol (the January 6th Committee) is a bipartisan select committee of the U.S. House of Representatives established to investigate the U.S. Capitol attack.",
        "linkURL": "https://archive.org/details/jan-6th-committee-docs",
        "linkText": "Browse the Jan 6th Committee Docs",
        "featuredItem": "report-final-report-jan-6-select-committee",
        "usePlainLink": "true"
      },
      {
        "title": "EXCAVATION OF HUMMINGBIRD SHELTER",
        "description": "The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",
        "linkURL": "https://archive.org/details/blmlibrary",
        "linkText": "Browse the Bureau of Land Management Library",
        "featuredItem": "excavationofhumm00conn",
        "usePlainLink": "true"
      },
      {
        "title": "ORGANIZED CRIME ON WALL STREET",
        "description": "The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",
        "linkURL": "https://archive.org/details/us_house_hearings",
        "linkText": "Browse the U.S. Congressional Hearings",
        "featuredItem": "gov.gpo.fdsys.CHRG-106hhrg67115",
        "usePlainLink": "true"
      },
      {
        "title": "WEATHER MODIFICATION IN ALBERTA",
        "description": "Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification",
        "linkURL": "https://archive.org/details/albertagovernmentpublications",
        "linkText": "Browse the Government of Alberta Publications",
        "featuredItem": "potentialforweat00advi",
        "usePlainLink": "true"
      },
      {
        "title": "EDIBLE & POISONOUS MUSHROOMS OF CANADA",
        "description": 'From the guide: "Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous.'",
        "linkURL": "https://archive.org/details/canadianagriculturallibrary",
        "linkText": "Browse the Agriculture and Agri-Food Canada Library",
        "featuredItem": "ediblepoisonousm00grov",
        "usePlainLink": "true"
      }
    ]
  }
  ]`,
    language: "json",
    caption: "collection_layout for the sample collection",
  },
  reviews: {
    text: `<div class="reviews-list">
      {this.reviewsFrozen
        ? <div class="message">
            {msg('Reviews can no longer be added to this item.')}
          </div>
          : nothing}
      {this.editableCurrentReviewTemplate}
      {this.filteredReviews.map(review =>
        review.reviewer_itemname !== this.submitterItemname
        ? this.renderReview(review)
        : nothing,
      )}
    </div>`,
    language: "typescript",
    caption: "ia-review.ts",
    link: "https://github.com/internetarchive/iaux-reviews/blob/main/src/ia-reviews.ts",
  },
  static_pages: {
    text: `const pageContent: StaticPageContent = {
          title: metadata.title?.value ?? '',
          mainContent: metadata.description?.value ?? '',
        };

        const sidebarLinks = metadata.rawMetadata?.sidebar_links;

        if (sidebarLinks) {
          pageContent.sidebarLinks = JSON.parse(sidebarLinks);
        }

        await this.localCache?.set({
          key: pageKey,
          value: pageContent,
          ttl: 15 * 60,
        });`,
    language: "typescript",
    caption: "static-page.ts",
  },
  search_inside: {
    text: `/**
   * Adds the previously-fetched federated results to the carousel tiles,
   * alternating between available services.
   */
  private buildTilesFromFederatedResults(): void {
    const { federatedResults } = this;

    if (federatedResults) {
      for (let i = 0; i < this.tilesPerService; i++) {
        this.addResultsToTiles(federatedResults, i);
      }
      this.emitResultsLoadedEvent(federatedResults);
    } else {
      this.searchError = true;
    }

    this.tilesLoading = false;
  }`,
    language: "typescript",
    caption: "federated-search-carousel.ts",
  },
  registration: {
    text: `function validateUsername() {
        const value_username = $(this).val();

        if (value_username === '') {
            clearError('#username', '#usernameMessage');
            return;
        }

        if (value_username.length < USERNAME_MINLENGTH || value_username.length > USERNAME_MAXLENGTH) {
            renderError('#username', '#usernameMessage', i18nStrings['username_length_err']);
            return;
        }

        if (!(VALID_USERNAME_RE.test(value_username))) {
            renderError('#username', '#usernameMessage', i18nStrings['username_char_err']);
            return;
        }

        clearError('#username', '#usernameMessage');

        $.ajax({
            url: '/account/validate',
            data: { username: value_username },
            type: 'GET',
            success: function(errors) {
                if (errors.username) {
                    renderError('#username', '#usernameMessage', errors.username);
                }
            }
        });
    }
  
  $('#username').on('blur', validateUsername);
  $('#emailAddr').on('blur', validateEmail);
  $('#password').on('blur', validatePassword);
  `,
    language: "javascript",
    caption: `realtime_account_validation.js`,
    link: `https://github.com/internetarchive/openlibrary/pull/9190`,
  },
  newContributorGuide: {
    text: `And then check in with your issue's lead to determine what steps to follow and/ or double-check to ensure you're dealing with an actual merge conflict by:
    1. Following the steps in [Working on Your Branch](#working-on-your-branch) to confirm that your master is up to date and not "ahead" by any commits before trying to rebase again.
    2. Ensuring that your PR does not include any unrelated commits, by checking the "Outgoing" commits in the VSCode Source Control tab and/or the "Commits" tab on your PR on GitHub. If you find any, follow the steps in [PR Includes Unrelated Commits](#pr-includes-unrelated-commits).
    3. Ensuring that your commits don't include any unrelated changes, by checking the "Outgoing" changes in the VSCode Source Control tab and/or the "Files changed" tab on your PR on GitHub. If you find any, follow the steps in [Commits Include Unrelated Changes](#commits-include-unrelated-changes).
    4. Ensuring that you aren't getting this conflict because the [pre-commit CI](#pre-commit-and-the-github-ci) made some commits on your behalf. You'll see these in the "Commits" section on GitHub, and you'll want to pull them into your branch with \`git pull upstream name-of-your-branch\` before trying to rebase. After this, you'll need to run a \`git push -f origin HEAD\` to keep everything up to date.

  If you've tried each of the above steps, and you're still getting the merge conflict error, you can now either contact your issue's lead for help moving forward, or begin to [resolve it manually](#manual-merge-conflict-resolution).
    `,
    language: "markdown",
    caption: "Markdown for new guide",
    link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet/",
  },
  i18n: {
    text: `def extract_messages(
      dirs: list[str], verbose: bool, forced: bool, skip_untracked: bool
  ):
      fixed_creation_date = datetime.fromisoformat('2024-05-01 18:58-0400')
      catalog = Catalog(
          project='Open Library',
          copyright_holder='Internet Archive',
          creation_date=fixed_creation_date,
      )
      METHODS = [("**.py", "python"), ("**.html", "openlibrary.i18n:extract_templetor")]
      COMMENT_TAGS = ["NOTE:"]
  
      template = read_po((Path(root) / 'messages.pot').open('rb'))
      msg_set = {msg.id for msg in template if msg.id != ''}
      new_set = set()
      skipped_files = set()
      if skip_untracked:
          skipped_files = get_untracked_files(dirs, ('.py', '.html'))
  
      for d in dirs:
          extracted = extract_from_dir(
              d, METHODS, comment_tags=COMMENT_TAGS, strip_comment_tags=True
          )
  
          counts: dict[str, int] = {}
          for filename, lineno, message, comments, context in extracted:
              file_path = Path(d) / filename
              if file_path in skipped_files:
                  continue
              new_set.add(message)
              counts[filename] = counts.get(filename, 0) + 1
              catalog.add(message, None, [(filename, lineno)], auto_comments=comments)
  
          if verbose:
              for filename, count in counts.items():
                  path = filename if d == filename else os.path.join(d, filename)
                  print(f"{count}\t{path}", file=sys.stderr)
  
      has_changed = msg_set != new_set
      if has_changed or forced:
          path = os.path.join(root, 'messages.pot')
          f = open(path, 'wb')
          write_po(f, catalog, include_lineno=False)
          f.close()
  
          print('Updated strings written to', path)
      else:
          print(
              'No modified strings discovered. To force a template update, re-run with --force-write.'
          )`,
    language: "python",
    caption: "i18n/_init_.py",
    link: "https://github.com/internetarchive/openlibrary/pull/8900",
  },
  openEditions: {
    text: `export type BookProps = {
      title: string;
      id: number;
      author: string;
      pub_year: number;
      url: string;
      cover: string;
      cover_size?: string;
      cover_position?: string;
      reader?: string;
      reader_url: string;
    };
    
    export type AudiobookPageProps = {
      book:BookProps,
      stopListening:() => void;
    }
    
    export type HomepageProps = {
      setActiveBook:React.Dispatch<React.SetStateAction<BookProps>>;
      startListening:() => void;
    }
    
    export type FeaturedBookProps = {
      book:BookProps,
      setActiveBook:React.Dispatch<React.SetStateAction<BookProps>>;
      startListening:() => void;
    }`,
    language: "typescript",
    caption: "types.ts",
    link: "https://github.com/rebecca-shoptaw/open-editions/blob/master/src/types/types.ts",
  },
  triolingo: {
    text: `const Lesson = (props: LessonProps) => {
      const { questionInfo, answers } = useQuestionData(props.data);
      const { numAns, numCorrect, numIncorrect, resetScore, incrementNums } =
        useScoreKeeping();
    
      return (
        <main id="question-view">
          <LessonHeader
            numAns={numAns}
            numIncorrect={numIncorrect}
            handleGameEnd={props.handleGameEnd}
          />
          <LessonQuestion
            speakerPath={TRIO_PATH}
            question={questionInfo.question}
          />
          <section className="ans-box">
            {answers.map((answer, index) => (
              <LessonAnswerButton key={index + 1} answer={answer} num={index + 1} />
            ))}
          </section>
          <LessonFooter />
        </main>
      );
    };
    
    export default Lesson;`,
    language: "tsx",
    caption: "Lesson.tsx",
    link: "https://github.com/rebecca-shoptaw/triolingo/blob/master/src/components/Lesson.tsx",
  },
  portfolio: {
    text: `{
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
          text: "Project images should open in a larger modal on click",
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
    },`,
    language: "typescript",
    caption: "ProjectData.ts",
    link: "https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/src/data/ProjectData.ts",
  },
  askOscar: {
    text: `import { useState } from "react";
    import oscarQuotes from "../data/OscarQuotes";
    import { useAnimation } from "./useAnimation";
    
    export const useNewQuote = (input: string) => {
      const [quote, setQuote] = useState("Tell me about your troubles.");
      const animateNewQuote = useAnimation();
      const handleReset = () => {
        setQuote("With what else may I assist you?");
        animateNewQuote("#new-predicament-btn");
      };
    
      const handleInput = () => {
        if (input == "") {
          setQuote("Why won't you tell me what ails you??");
        } else {
          setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);
        }
        animateNewQuote("#new-quote-btn");
      };
    
      return { quote, handleInput, handleReset };
    };`,
    language: "typescript",
    caption: "useNewQuote.ts",
    link: "https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/hooks/useNewQuote.tsx",
  },
  catBand: {
    text: `const Cat: React.FC<CatCompProps> = ({cat, playing, handleClick}) => {
      const audio = document.getElementById(cat.id) as HTMLAudioElement;
      if (audio) {
        if (audio.paused && playing) {
          audio.src = cat.arr[Math.floor(Math.random() * cat.arr.length)];
          audio.play();
        } else if (!audio.paused && !playing) {
          audio.pause();
        }
      }
  
    return (
      <button
        id={\`\${cat.role}-button\`}
        key={cat.id}
        type="button"
        className={\`drum-pad \${playing ? "playing" : "paused"}\`}
        onClick={handleClick}
      >
        <img
          id={\`\${cat.role}-cat\`}
          className="cat"
          src={\`./\${cat.role}_cat.jpg\`}
        />
        <audio id={cat.id} className="clip" src={cat.arr[0]} loop></audio>
        <p>{cat.id}</p>
      </button>
    );
  };
  
  export default Cat;`,
    language: "tsx",
    caption: "Cat.tsx",
    link: "https://github.com/rebecca-shoptaw/cat-band/blob/master/src/components/Cat.tsx",
  },
};
