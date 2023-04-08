# Role Mates

This is a school project aiming to develop a CRUD REST API with Node.js and frontend interface with React. It may be shifted to Vue.js later.
Feel free to help or use (non commercially) AFTER MAY 20th, 2023.

- [Role Mates](#role-mates)
  - [Requirements](#requirements)
  - [Getting started](#getting-started)
  - [Work remaining](#work-remaining)
    - [Backend](#backend)
  - [References](#references)


## Requirements

- yarn
- node.js

## Getting started

Clone the [repository](https://github.com/kimt0t0/Role-Mates/)

Launch the web API

~~~
pushd rm-back
yarn install
yarn run dev
popd
~~~

Launch the front-end application

~~~
pushd rm-front
yarn install
yarn run dev
popd
~~~

## Work remaining

### Backend

1. CRUD

- Delete
  ¤ when character remove from user and game, and remove messages (-> create removeMessage function in messageController)
  ¤ when message remove from character, user and game
  ¤ when game remove from user and remove corresponding messages
  ¤ when user remove characters, messages and owned games

3. Security

- encrypt password and email, cors, helmet
- protect routes

_* FRONT *_

- not started yet -
  ¤ on sign-up form inform users they will not be able to update their pseudo

_* BONUS IF TIME *_

- Bonus1: life can be edited by owner player and Game Master on characters' cards. Players can add / edit statistics and powers on their characters.

- Bonus2: sort getAll results alphabetically / by date (and reversed in both cases)

- Bonus3 CRUD Update:
  ¤ add user to game
  ¤ add character to game (so add user to game)
  ¤ add message to game (so add message to character and user)
  ¤ add/remove moderator on game and its characters
  --- need to learn how to watch a collection and update it when changes implicate changes on this collection ---


## References

<!-- Une liste de liens utiles pour comprendre, utiliser, modifier le projet -->