# Blog App

A basic application where user can add, edit and delete a blog as well as view other blogs and make changes in them - [Take a look](https://blog-app-karanchandekar.vercel.app/)

![Practice](https://img.shields.io/badge/Practice-HTML/CSS/JS-orange.svg)

## Description

Application uses LocalStorage, the localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available when the user comes again.

## Stacks Used

- HTML
- CSS
- Bootstrap - A CSS Framework
- JavaScript -> LocalStorage
- [Awesomeness](https://www.wikihow.com/Love-Programming) - Strictly for the love of coding :-)

## Use of Project

To understand the concept of the localstorage, how localstorage persist the data, even the tab is closed or user refersh the page.

## How I used local storage

```javascript
let globalStore = [];

// --------------------------------------------------
const loadData = () => {
  // access localstorage
  // localStorage.getItem("blog") ===  localStorage.blog
  const getInitialData = localStorage.blog; // if null, then
  if (!getInitialData) return;

  // convert stringified-object to object
  const { cards } = JSON.parse(getInitialData);

  // map around the array to generate HTML card and inject it to DOM
  cards.map((blogObject) => {
    const createNewBlog = newCard(blogObject);
    blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
    globalStore.push(blogObject);
  });
};
```

And to update the local storage:

```javascript
const updateLocalStorage = () => {
  localStorage.setItem(
    "blog",
    JSON.stringify({
      cards: globalStore,
    })
  );
};
```

## Screenshots

<img width="960" alt="ss1" src="https://user-images.githubusercontent.com/93200960/211460092-29588e43-c124-4b8d-b7d8-6286d3058d2b.png">

<br />

Click on the `Add New`, UI looks like:

<img width="946" alt="ss2" src="https://user-images.githubusercontent.com/93200960/211460127-438109d9-fdd2-4c0a-97b5-b1c1a47919a0.png">

<br />

Click on the `Open Blog`, UI looks like:

<img width="947" alt="ss3" src="https://user-images.githubusercontent.com/93200960/211460149-fb5f85da-78f9-4cca-99fd-ebe3779ca832.png">

<br />

## Contribution

Contributions are highly welcome. Feel free to fork, clone, make pull requests, report issues etc.

## Acknowledgments

- To anyone who is reading this... _You're awesome!_

That being said
_<p align="center">To the Front... to the Back... End to End... cut no slack. Making ends meet. lol</p>_
