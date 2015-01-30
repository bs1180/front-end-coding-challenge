# JustGiving FED coding exercise #

This repository contains a node-based backend and structure to create a web page that interrogates a very simple read/write JG-like backend.

You need to set up this server and build your page on top of it. If you are not fluent in node, don't worry! This is very straightforward and should only take you a few minutes.

## The exercise ##

We want to see your code!

At JustGiving we are crazy about good front end code and good front end principles. We'd like you to implement an interface from a typical page that you would build, but one that shows us the absolute best of your knowledge, including what you consider to be relevant in the field.

In the specs folder, you'll find a jpeg and a psd file with the designs of the Fundraising Page creation process. We want you to implement that page. Please submit and retrieve the pages using asynchronous calls to the backend provided.

Even though this is only an exercise, we want to see code that could be on production, so please consider this when making decisions about the project scalability, performance, accessibility and integration, etc.

We use Angular at JG but you are not restricted to it. In fact, you can pick any technology that is relevant for the exercise as long as you are prepared to justify your choices.

*One important thing, though, is that we want to see your HTML, CSS and Javascript skills, so chose your libraries wisely to showcase what you know. We want to see **your** code. We discourage you, for instance, from using CSS frameworks.*


If you don't have time to build everything you’d like, please prioritise the most important aspects and explain how you would implement the rest.

## Setup ##

* Install node on your computer if you haven't already (http://nodejs.org/)
* Clone this repository on your computer
* All dependencies are bundled within this repository so you don't have to run a build.
* In the terminal, go to the root directory of the repository and run `npm start

You should now be running the server on port 3000.

## The server ##

The server defines four endpoints, three for the REST API and one for the base page of the app.

* **localhost:3000/** — should display a basic page with some very basic HTML
* **GET localhost:3000/fundraisers** — displays all the fundraisers in JSON format
* **GET localhost:3000/fundraisers/{fundraiserId}** — displays the fundraiser for the provided Id in JSON format
* **POST localhost:3000/fundraisers** — allows you to submit a JSON body. The backend doesn't enforce a data format but enforces the fundraiserId. Some initial data has been pre-populated. Feel free to use it, ignore it, change it or remove it entirely if it doesn't fit your purposes. Also, feel free to change the data format if you wish.

[The dates are stored in Unix Epoch timestamps which use a resolution in seconds. Remember that JS uses millisecond time resolution, so don't let that bite you.]

## Creating pages ##

The following directories are already set up

* **/src** — Contains subdirectories to store sources for styles, images and scripts. Feel free to create more if it fits your needs
* **/public** — Contains directories that are made public and are accessible through URLs. For instance files in the stylesheets directory can be accessed in your browser through http://localhost:3000/stylesheets
* **/html** — Contains a basic HTML file that may serve as a starting point to build your page. You can access this file pointing your browser to http://localhost:3000/
The /routes folder contains the routes for the four endpoints as well as the object that serves as storage —for simplicity, the server doesn't use a database, but keeps the values in memory.

When you are finished, send us a Dropbox/Skydrive/whatever link to your zipped  code to ana.henneberke@justgiving.com but please do not send attached zip files via email.

Good luck!
