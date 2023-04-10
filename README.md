# Role Mates

This is a school project aiming to develop a CRUD REST API with Node.js and frontend interface with React. It may be shifted to Vue.js later.
Feel free to help or use (non commercially) AFTER MAY 20th, 2023.

- [Role Mates](#role-mates)
  - [Requirements](#requirements)
  - [Getting started](#getting-started)
  - [Work remaining](#work-remaining)
    - [Backend (web API)](#backend-web-api)
    - [Frontend (client application)](#frontend-client-application)
  - [References](#references)

## Requirements

- yarn
- node.js

## Getting started

Clone the [repository](https://github.com/kimt0t0/Role-Mates/)

Launch the web API

```
pushd rm-back
yarn install
yarn run dev
popd
```

<!-- Launch the front-end application

~~~
pushd rm-front
yarn install
yarn run dev
popd
~~~ -->

## Work remaining

### Backend (web API)

1. CRUD

- Images
  fix multer issue
  add images to user, character, message, game

2. Security

- encrypt password and email, cors, helmet
- protect routes
- on signin check that credentials are strings and not other data types

### Frontend (client application)

- **not started yet**

  ¤ Add a signout function.

  ¤ Add a delete image function for users and admins/mods.

  ¤ Life can be edited by owner player and Game Master on characters' cards. Players can add / edit statistics and powers on their characters.

  ¤ Sort getAll results alphabetically / by date (and reversed in both cases)

  ¤ Users and admins/mod can delete images

  --- need to learn how to watch a collection and update it when changes implicate changes on this collection ---

## References

<!-- Une liste de liens utiles pour comprendre, utiliser, modifier le projet -->
