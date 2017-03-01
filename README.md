Form.io Angular 2 Starter Application
---------------------------------
This is a starter application that uses Angular 2, Bootstrap, Webpack, Gulp, and Form.io to create a powerful Serverless application platform.

Installation
---------
Download this application within your local machine, and then type the following.

```
npm install
```

Running
-----------
You can develop within this application by typing the following

```
npm run serve
```

This will launch the application locally @ https://localhost:3000. Now, whenever you make changes, those will be directly reflected within the launched application.


Building
------------
Once you have your application developed, it is now time to build the application for deployment. This can be done by typing the following.

```
npm run build
```

This will generate the **dist** folder which you can then use to install within any webserver, Github Page, an Amazon S3 bucket, etc.

Application Generation
----------
This application was generated using the amazing [Fountain.js](http://fountainjs.io/) system. To build your own, follow these steps.

  - Install Yeoman
    `npm install -g yo`
  - Install Fountain.js Webapp Generator
    `npm install -g generator-fountain-webapp`
  - Create a new folder, and then generate your webapp.
    `mkdir webapp && cd webapp`
  - Generate the application.
    `yo fountain-webapp`
  - Follow the on-screen instructions providing the following input.
    - `Which JavaScript framework do you want?` **Angular 2**
    - `Which module management do you want?` **Webpack with NPM**
    - `Which JS preprocessor do you want?` **TypeScript**
    - `Which CSS preprocessor do you want?` **SASS**
    - `Which Continuous Integration platform do you want?` **none**
    - `Do you want a sample app?` **A working landing page**
    - `Would you like a router?` **@angular/router**
  - Install Bootstrap SAAS, Bootswatch, and Form.io
    `npm install --save bootstrap-sass bootswatch ng2-formio`
  - Make the following changes to get started.
    - https://github.com/formio/ng2-app-starterkit/commit/99a330c3007f54d6559ff3946a7c40e5c5ad9028
    - https://github.com/formio/ng2-app-starterkit/commit/1d193a105ed94bab61765441dfd311c016bfca25


Have fun!

- The Form.io Team
