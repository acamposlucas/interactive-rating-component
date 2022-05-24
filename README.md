# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Frontendmentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub/interactive-rating-component-with-react-9-zeRc2pkH)
- Live Site URL: [Vercel](https://interactive-rating-component-chi-flame.vercel.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- TypeScript

### What I learned

This is my first challenge with React and styled components. I learned how to manage states and share hooks between components.

To see how you can add code snippets, see below:

```js
const [ratings, setRatings] = useState(false);
const [selectedInput, setSelectedInput] = useState(String);

function handleSelectedInput(e: any) {
  setSelectedInput(e.currentTarget.value);
}

function handleRatingsOnSubmit() {
  setRatings(true);
}
```

### Continued development

Besides keep improving my knowledge in React. I also look forward to keep up my studies in TypeScript!

## Author

- Frontend Mentor - [@acamposlucas](https://www.frontendmentor.io/profile/acamposlucas)
- Twitter - [@acamposlucas](https://www.twitter.com/acamposlucas)
