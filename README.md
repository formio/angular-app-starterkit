Form.io Angular Starter Application
---------------------------------
This is a starter application that uses Angular, Bootstrap 4, Angular CLI, and Form.io to create a powerful Serverless application platform.

Installation
---------

```
npm install -g @angular/cli
```

### Steps to create from scratch

#### Setup
 - ```ng new angular-app-starterkit --style=sass```
 - ```cd angular-app-starterkit```

#### Install Font-Awesome
 - ```npm install --save font-awesome```
 - ***.angular-cli.json***
 ```
   "apps": [
     {
       ...
       "styles": [
         "styles.scss",
         "../node_modules/font-awesome/scss/font-awesome.scss"
       ],
       "addons": [
         "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
       ]
       ...
 ```
 
#### Install Bootstrap
 - ```npm install --save bootstrap@4.0.0-beta.3```
 - ```npm install --save bootswatch```
 - ***/src/styles.sass***
```
    @import "~bootswatch/dist/yeti/_variables.scss"
    @import "~bootstrap/scss/bootstrap.scss"
    @import "~bootswatch/dist/yeti/_bootswatch.scss"
```
