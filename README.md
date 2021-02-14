<p align="center">

  <h3 align="center">Xmeme</h3>

  <p align="center">
     Anyone can post and edit posted memes.
    <br />
    <br />
    <a href="https://nc-xmeme.herokuapp.com/">Deployed Xmeme on heroku</a>
    .
    <a href="mailto:nikitachirania15@gmail.com">Any feedback would be greatly appreciated.</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Installation and starting the server">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Anyone can post and edit memes with a caption which includes Rest API methods get, post and patch using nodejs and Express framework.
Users can only post unique memes.

It is using mongodb database for storing memes and displaying 100 latest memes on EJS pages.
EJS is used for rendering pages dynamically.

The project also includes three script files install.sh, sleep.sh and server_run.sh so can be tested anywhere without worrying about installation and server running process.

It also includes docker image of the whole software to make testing easier.

It takes care of every type of Error handling and response status code.
Code has been written with clear comments and good modularity.

### Built With

- [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://docs.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

### Installation and starting the server

1. Clone the repo
   ```sh
   git clone https://github.com/nikitachirania/Xmeme
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm run start
   ```
4. Visit localhost on port 8081
<!-- USAGE EXAMPLES -->

## Usage

For posting a meme, user need to provide 3 things

1. Name of the meme creator
2. Caption for the meme
3. URL of the meme image

After providing these 3 parameters click on submit button to post your meme.

After this, the page will be refreshed and the user's posted memes will be  shown on the top of the listed memes and there, they can edit the meme by clicking the edit button and view the meme by clicking the show button.