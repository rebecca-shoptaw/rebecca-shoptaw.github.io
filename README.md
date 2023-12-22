# Portfolio 📂🌹

A responsive portfolio site with on-scroll animations and other fun stylistic touches.

<a href="https://rebeccashoptaw.dev/"><button>Live Site</button></a>

<img width="100%"  alt="Portfolio Preview" src="https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/public/portfolio.png">

## Built With

[![React][React-icon]][React-url] [![Vite][Vite-icon]][Vite-url] [![Typescript][TS-icon]][TS-url] [![HTML][HTML-icon]][HTML-url] [![CSS][CSS-icon]][CSS-url] [![SASS][SASS-icon]][SASS-url] [![GSAP][GSAP-icon]][GSAP-url]

## UI Walkthrough

The UI for the portfolio is quite straightforward and intuitive -- it's a single page site composed of a sticky nav bar (the `Nav` component), a welcome section, and three main info sections, each of which has its own componenet: `About`, `Projects`, and `Contact`.

The idea here was to make the site as seamless to navigate as possible: to have all the information readily available to the user via a quick scroll through, and to make jumping around easy by keeping the nav bar always in view.

## Implementation

### Component Structure

The site is designed using a nested component structure, so that each component is responsible for rendering only a single part of the site's UI.

The current organization of the components and sub-components is as follows:

```
Homepage
  -- Nav
  -- About
     -- BioSnippet
  -- Projects
     -- ProjectTile
  -- Contact
    -- SocialLink
```

The nested components (`BioSnippet`, `ProjectTile`, `SocialLink`) are each rendered via their parent components mapping over a separately-stored data array.

For example, the `Projects` component maps over the `projects` array of objects, of which each looks something like this:

```
 {
    id: `open-editions`,
    title: `Open Editions`,
    img_alt: `Audiobook playlist with romantic painting in the background.`,
    description: `A minimalist and aesthetically pleasing audiobook player, which combines public domain audiobook recordings of classic novels with customized cover images . Built with Typescript, React and the Librivox API.`,
    wip: true,
  },
```

As it does so, it passes each project object as a component to the `ProjectTile` sub-component, which then handles all the rendering:

```
{projects.map((project) => (
  <ProjectTile key={project.id} project={project} />
))}

```

### Custom Hooks

The site also uses a few custom hooks to avoid unnecessary repetitions in the code:

- `useReset` makes the simple URL reset function available to any component that needs it (such as to prevent anchor tags like "#about" from appearing in the URL)
- `useAnimation` handles all the GSAP imports and returns the intro animation function for easy use by the `Homepage` component

## Next Steps

- [ ] Redo styling using SASS
- [ ] Use meta and Schema.org tags to improve SEO
- [x] Reorganize app using custom hooks and sub-components
- [x] Use GSAP to create a fun intro animation
- [ ] Shift scroll animations from `react-awesome-reveal` to GSAP
- [ ] Add a test suite via Jest

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Rebecca Shoptaw -
[email](mailto:rebecca@rebeccashoptaw.dev) | [linkedin](https://www.linkedin.com/in/rebeccashoptaw/)

<!-- Links and Icons -->

[React-icon]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite-icon]: https://img.shields.io/badge/-Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/
[TS-icon]: https://img.shields.io/badge/-Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[TS-url]: https://www.typescriptlang.org/
[HTML-icon]: https://img.shields.io/badge/-HTML5-20232A?style=for-the-badge&logo=html5&logoColor=E34F26
[HTML-url]: https://www.w3schools.com/html/
[CSS-icon]: https://img.shields.io/badge/-CSS3-20232A?style=for-the-badge&logo=css3&logoColor=1572B6
[CSS-url]: https://www.w3schools.com/css/
[SASS-icon]: https://img.shields.io/badge/-Sass-20232A?style=for-the-badge&logo=sass&logoColor=CC6699
[SASS-url]: https://sass-lang.com/
[GSAP-icon]: https://img.shields.io/badge/-GSAP-20232A?style=for-the-badge&logo=greensock&logoColor=88CE02
[GSAP-url]: https://sass-lang.com/
