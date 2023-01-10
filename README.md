# Blog App

A basic application where user can add, edit and delete a blog as well as view other blogs and make changes in them.

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
