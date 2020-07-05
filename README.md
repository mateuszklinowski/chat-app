### Chat app base on React and simple WS service


Comments in form of a  dialog with the reviewers not as a code documentation.
Some features like: internationalization are implemented by hand,
just to practice basic concepts on the occasion of technical task.


In case any help or questions appear my email address:
klinowski.mateusz@gmail.com
do not hesitate to send a message

### How to start development build

* Clone this repo
* Install chat-app and chat-server dependencies
    * `npm install` in chat-app directory
    * `npm install` in chat-server directory
* start nodeJS WS server
    * navigate to chat-server
    * `node app.js`
    * keep it running
* start front-end application
    * navigate to chat-app directory
    *`npm run dev` will start dev server 

# Config

In `config.json` file You can specify port that will be used for serving WS.
Front-end assumes that backend will be available on http://localhost,
 if configurated differently pleas change `api` key in `config.json`.

### Features implemented

## Chat page
- [x] Create chat page
- [x] Connect to Socket.io server
- [x] Implement chat functions
- [x] Blinking tab for unread messages
- [x] Smiles support
- [x] Unread messages count
- [x] YouTube links parser
- [ ] Images links parser
- [x] Other links parser

## Settings page
- [x] User name
- [x] Themes dark/light
- [x] Clock display
- [x] ctrl+enter send
- [x] Internationalization
- [x] save and load from LocalStorage


## General
- [x] Use React
- [x] Use Css preprocessor (SCSS)
- [x] TypeScript
- [x] Responsive design
- [x] Modern browser support
- [x] NOT USE tool like create-react-app
- [x] Sample tests - component and unit
- [x] Clean, commented, small and modularized code - hope I did :D
- [x] Working code - docker.mateuszklinowski.pl
- [x] README.md
- [ ] JSdoc
- [x] CSS Modules
- [x] State with Redux

## Extra
- [x] Nice and intuitive design - hope You like my type of humor
- [x] test on Chrome, Firefox and Safari
- [x] test on Linux, Mac and Windows
