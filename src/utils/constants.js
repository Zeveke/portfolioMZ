import myProject from '../../src/images/projects/my-project.jpg';
import portfolio from '../../src/images/projects/portfolio.png';
import js from '../../src/images/stack/js.svg';
import react from '../../src/images/stack/react.svg';
import ts from '../../src/images/stack/ts.svg';
import html from '../../src/images/stack/html.svg';
import css from '../../src/images/stack/css.png';
import scss from '../../src/images/stack/scss.svg';
import eslint from '../../src/images/stack/eslint.svg';
import redux from '../../src/images/stack/redux.svg';
import rest from '../../src/images/stack/rest.png';
import node from '../../src/images/stack/node.svg';
import express from '../../src/images/stack/express.png';
import mongo from '../../src/images/stack/mongo.png';
import webpack from '../../src/images/stack/webpack.svg';
import postman from '../../src/images/stack/postman.svg';
import npm from '../../src/images/stack/npm.svg';
import github from '../../src/images/stack/github.svg';

import mail from '../../src/images/icons/mail.svg';
import githubLink from '../../src/images/icons/github.svg';
import telegram from '../../src/images/icons/telegram.svg';
import cv from '../../src/images/icons/cv.svg';

export const projectsList = [
  {
    id: 1,
    title: 'My project',
    description: `Pet-project: The project demonstrates my skills and abilities.`,
    stack: ['Stack: Webpack, React, Redux, SCSS, ESLint, Loader'],
    github: 'https://github.com/Zeveke/dip_book_8',
    image: myProject
  },
  {
    id: 2,
    title: 'Portfolio web-developer',
    description: `The project demonstrates my skills and abilities. On the site it is possible to find information about all my projects and find all the necessary links to contact me.`,
    stack: ['Stack: React, CSS, Prettier'],
    github: 'https://github.com/Zeveke/portfolio',
    image: portfolio
  }
];

export const stackList = [
  {
    title: 'Java Script',
    image: js
  },
  {
    title: 'React.js',
    image: react
  },
  {
    title: 'Type Script',
    image: ts
  },
  {
    title: 'Next.js',
    image: node
  },
  {
    title: 'HTML5',
    image: html
  },
  {
    title: 'CSS3',
    image: css
  },
  {
    title: 'SCSS',
    image: scss
  },
  {
    title: 'Eslint',
    image: eslint
  },
  {
    title: 'Redux',
    image: redux
  },
  {
    title: 'REST API',
    image: rest
  },
  {
    title: 'Node.js',
    image: node
  },
  {
    title: 'Express.js',
    image: express
  },
  {
    title: 'MongoDB',
    image: mongo
  },
  {
    title: 'Webpack',
    image: webpack
  },
  {
    title: 'Postman',
    image: postman
  },
  {
    title: 'NPM',
    image: npm
  },
  {
    title: 'Github',
    image: github
  }
];

export const contactList = [
  {
    title: 'telegram',
    image: telegram,
    text: '@Zeveke',
    link: 'https://t.me/Zeveke'
  },
  {
    title: 'gitHub',
    image: githubLink,
    text: 'Zeveke',
    link: 'https://github.com/Zeveke'
  },
  {
    title: 'email',
    image: mail,
    text: 'Mazev@ list.ru',
    link: 'mailto:mazev@list.ru'
  },
  {
    title: 'CV',
    image: cv,
    text: 'CV',
    link: 'https://drive.google.com/file/d/1XxNrgo3pqTDbxZ3z_NNVYpEz74ZrpsZl/view'
  }
];
