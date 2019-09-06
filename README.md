# Interns Front Challenge 2019
The idea was to create a single page application with the microfrontends arquitecture, usign Single-SPA to combine different frameworks such as React, Vue and Angular. 


## Project structure
This project has 3 main folders:

* __angular-new-login:__ This project stores the Angular login application, it also has the routing to show the login or the rest of the application.
* __micro-front-end-vue-react:__ This project uses Single-SPA, (yes, is a redundant name), to integrate Vue and React in the same project. 
    *   __TO-DO app React:__ This TO-DO app is capable of performig CRUD operations thanks to the express backend.
    *   __Weather-widget Vue:__ This widget made in Vue is basically a form that you submit with a city and it tells you the current weather there.

* __express-back:__ The backend of the application developed in NodeJS + express it serves the endpoints used by the React TO-DO app and communicates with MongoDB.
Runs on port 4000

Tu run the project you must run the backend, the spa application and the angular application. Then go to http://localhost:4200 and write whatever you want as credentials (those credentials wil be used from there on to login).

The SPA application can run on its own on http://localhost:8080

The backend runs on http://localhost:4000/api/tasks/ and accepts CRUD operations 



