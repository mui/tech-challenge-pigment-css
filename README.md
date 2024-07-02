# Pigment CSS technical challenge @ MUI

This challenge is part of the hiring process for the Staff Engineer - Pigment CSS positions at MUI.
The idea is to make as much progress as possible under a given time constraint (1-2 hours).

## Why are we doing this?

At MUI, because we are a DevTools company, we put a lot of accent on the quality of the work on the tools we create.
The Pigment CSS project was started because we wanted to solve one main problems for our users, the performance of their apps and the support for React Server Components, without compromising their Developer Experience.
The idea of this challenge, is to test out how deep you can go into solving technical problems that will help us achieve the these goals.
We want to get a glimpse of how you will perform in the role.

## Context about MUI

MUI's objective is to become the UI toolkit for React developers.
We're unifying the fragmented ecosystem of dependencies into a single set of simple, beautiful, consistent, and accessible React components.

Our mission is, ultimately, to make building great UIs and web apps a breeze ⎯ quicker, simpler, and accessible to more people.
At the end of the day, it's about [_writing less code_](https://youtu.be/GnO7D5UaDig?t=2451).

Pigment CSS plays a critical role in this, as performance is one of the main criteria for building *great* UIs.

Head to [our Handbook](https://mui-org.notion.site/Why-MUI-d8b8c142a6a44e3aa963f26edf4e03db) to learn more.

## Summary

The objective of the challenge is to implement build time transformation of an example of React code that will generate a CSS and assosiate it with the respective React components.

###### _~2 hours - The basics_

### Introduction

The idea of this challenge is to implement a transformation of an example React code, that could be used inside a zero-runtime CSS-in-JS library that focuses on the basic use-case of how people may style their components.

Here is the example code that you will need to transform:

```jsx
import { styled } from '@pigment-css/react';

const Div = styled('div')({
  border: '1px solid black'
});

export default function App(props) {
  return (
    <Div
      {...props}
      sx={{
        ...props.primary ? { background: 'blue' } : { background: 'red' },
      }}
    />
  )
}
```

Your goal would be to transform the `styled` and the `sx` calls into a valid CSS and a transformed JavaScript code that can later be used by a simple runtime after the CSS is already extracted. The result output should look like this:

*JavaScript*

```jsx
import { styled } from '@pigment-css/react';
import 'styles.css';

const Div = styled('div')({
  className: 'hashed-string1'
});

export default function App(props) {
  return (
    <Div
      {...props}
      className="hashed-string2"
      style={{
          '--primary-var': props.primary ? 'blue' : 'red'
      }}
    />
  )
}
```

*CSS*

```css
.hashed-string1 {
  border: 1px solid black;
}

.hashed-string2 {
  background: var(--primary-var);
}
```

### Work environment

To save you time, a working environment was created.
You can install this environment by following these steps:

- clone the repo: `git clone git@github.com:mui/tech-challenge-pigment-css.git`
- install the dependencies: `pnpm install`
- start Next.js: `pnpm start`
- open http://localhost:5173/

You can find the source of this URL at `src/App.jsx`. Your goal is to implement the `utils/transform.js` function that is responsible for doing the transformation. Uou can use the example code from above in the Input code textarea and check the results of the generated JavaScript and CSS.

## Submission

Instructions:

- **DO NOT** fork / host your project on a public repository.
- Please send us a zip file containing this project using the upload link that we have provided by email (**with** the _.git_ folder).
- To significantly reduce the size of the archive, you can remove the `/_node_modules_/` and `/docs/.next/` folders.
- If you don't have the upload link, you can simply send it to job@mui.com.

We're excited and looking forward to seeing what you'll create!
Good luck 🚀
