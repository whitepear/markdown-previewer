This application is live at: https://whitepear.github.io/projects/react/markdown/app/index.html

A React.js application that allows users to type GitHub-flavoured markdown into a text-area field and preview the processed output, which updates with each keystroke.

The application architecture is designed around a stateful container component, within which two stateless functional components reside. The application utilises the 'Marked' library in order to interpret markdown within the input area. Styling is implemented via Sass.
