# Role Mates

This is a school project aiming to develop a CRUD REST API and mobile-first frontend interface with Node.js, Express and React.
Feel free to help or use (non commercially) AFTER MAY 20th, 2023.

Non authenticated users can only access index, about, rules, the games list.
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
- mongoDB

## Getting Started

- Clone the [repository](https://github.com/kimt0t0/Role-Mates/).
- Create your own MongoDB database.
- Fill-in your own .env file in /rm-back - follow the instructions in the comments.
- Fill-in your own .env file in /rm-front - each variable must start with REACT*APP* or won't be recognized by the app.

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

## If you are willing to fork or contribute to this project

1. Follow the [Getting started](#getting-started) steps.
2. Create your own branch.
3. You are not allowed to merge directly your code onto the master of frontdev branches. If you want to help please make a merge request and feel free to contact me.
4. Must know:

- You can find the necessary .env structures in /rm-back/.env.structure and /rm-front/.env.structure and add your own settings to them.
- Frontend:
  - Each component / page and their specific styles are stored in their own file. You can also add the site's global styling by using @use '<path_to_global_style>' as \*; at the start of your style sheet.
  - If you want to use new eva-icons, you must use the specific syntax of react eva icons and not the usual icon tag.

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

_change all components into functions_

4. [WIP] Signup and login forms (with toggle button)
   _specify on signup form that to delete their account users must contact the site's admins to prevent mistakes. Or add additional security before account removal_

5. [WIP]Create game / character / message pages
   _started characters list and detailed character page, need to add services in API and add update/remove functionalities_

6. Add conditional buttons to sign out and get to user profile page

7. Get all users / games

8. Get one user / game

9. Get user's games / characters / messages

10. Get game's messages / users / characters

11. Update (all)

12. Delete

13. Improve style and fix responsive

## Pending

¤ On Characters page add a button "see my characters" (will hide others' characters) / in general setting hide non-public characters / add sorting tools (date / reverse date / alphabet / reverse alphabet)

¤ Add security before removal of games and characters (ask password again or ask to type a sentence).

¤ Add honey pot on signup form (hidden field, if filled it's a robot so deny request to db).

¤ Add a signout function.

¤ Add a delete image function for users and admins/mods.

¤ Life can be edited by owner player and Game Master on characters' cards. Players can add / edit statistics and powers on their characters.

¤ Sort getAll results alphabetically / by date (and reversed in both cases)

¤ Users and admins/mod can delete and update images and messages

¤ fix desktop responsive

¤ add search bar (users, games, themes)

¤ add a voting system on characters / games (stars or thumb) - and add sorting them by grades / reversed grades

## References

¤ About icons install and syntax: https://www.npmjs.com/package/react-eva-icons
¤ Icons library: https://akveo.github.io/eva-icons/#/
¤ Optimizing images tools for web projects: https://squoosh.app/
¤ About CORS parameters: https://expressjs.com/en/resources/middleware/cors.html (in /rm-back/index.js)

## License

RoleMates is under the [GNU GPL 3 License](https://choosealicense.com/licenses/agpl-3.0/).

Main informations about this licence are:
¤ Permissions: Commercial use, distribution, modification, patent use, private use.
¤ Conditions to use: Disclose source, License and copyright notice, Network use is distribution, Same license, State changes.
¤ Limitations: Liability, Warranty.
