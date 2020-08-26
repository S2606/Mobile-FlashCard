# Mobile-FlashCard Project

Project for maintiaing and creating a flashcard to help with your studies.

This project was bootstrapped with [Create React Native App](https://github.com/expo/create-react-native-app).

## TL;DR

To get started right away(assuming expo config is done):

* install all project dependencies with `yarn`
* start the development server with `expo start`
* Tested for only Android version

## File Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file.
└── src
    ├── Actions # for handling business logic
    │   └── deck.js
    ├── Components # for handling presentation logic
    │   └── AddCard.js
    │   └── AppNavigator.js
    │   └── CreateDeck.js
    │   └── DeckItem.js
    │   └── DetailDeck.js
    │   └── ListDeck.js
    │   └── MainNavigator.js
    │   └── Quiz.js
    ├── Reducers # for handling store maintainence
    │   └── index.js
    │   └── deck.js
    └── App.js # It is used for DOM rendering only.
```
