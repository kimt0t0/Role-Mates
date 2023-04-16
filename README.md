# Role Mates

This is a school project aiming to develop a CRUD REST API with Node.js and mobile-first frontend interface with React. It may be shifted to Vue.js later.
Feel free to help or use (non commercially) AFTER MAY 20th, 2023.

Non authenticated users can only access index, about, rules, the games list (with games with a 'public' status only).
Authenticated users can access index, about, rules, the games list (with games with a 'public' status only), games details, create/update/delete games, characters, messages or images for their avatar/games/characters.
Admin accounts can read, create, update and delete everything.

- [Role Mates](#role-mates)
  - [Requirements](#requirements)
  - [Getting started](#getting-started)
  - [Work remaining](#work-remaining)
    - [Backend (web API)](#backend-web-api)
    - [Frontend (client application)](#frontend-client-application)
  - [Questions] (#questions)
  - [References](#references)

## Requirements

- yarn
- node.js

## Getting started

Clone the [repository](https://github.com/kimt0t0/Role-Mates/)

1. Launch the web API

```
pushd rm-back
yarn install
yarn run dev
popd
```

2. Launch frontend application

```
pushd rm-front
yarn install
yarn run start
popd
```

## Work remaining

### Backend (web API)

**temporarily deactivated auth middleware in all routes to make frontend work easier**

1. Fix

- Images
  fix multer issue
  add images to user, character, message, game

- Test auth and adminOnly middlewares

2. Improve

- allow to update / delete data only if owner (to check in route or controller if not already done)
- allow to display games details (participants, messages) only to specified game members if the game's status is private (same for characters and messages?)
- add a logout functionality

### Frontend (client application)

1. [OK] Install project and add dependencies (including scss)

2. [OK] Header + navbar + navtoggle + footer + pages content template + reusable components (links, buttons, cards...).

3. [wip] Create logo, hero title and landing page.
   _fix logo_

4. Signup and login forms (with toggle button)
   _specify on signup form that to delete their account users must contact the site's admins to prevent mistakes. Or add additional security before account removal_

5. Create game / character / message pages

6. Get all users / games

7. Get one user / game

8. Get user's games / characters / messages

9. Get game's messages / users / characters

10. Update (all)

11. Delete

12. Improve style and fix responsive

## Pending

¤ Add security before removal of games and characters (ask password again or ask to type a sentence).

¤ Add honey pot on signup form (hidden field, if filled it's a robot so deny request to db).

¤ Add a signout function.

¤ Add a delete image function for users and admins/mods.

¤ Life can be edited by owner player and Game Master on characters' cards. Players can add / edit statistics and powers on their characters.

¤ Sort getAll results alphabetically / by date (and reversed in both cases)

¤ Users and admins/mod can delete and update images and messages

## References

¤ About icons install and syntax: https://www.npmjs.com/package/react-eva-icons
¤ Icons library: https://akveo.github.io/eva-icons/#/
