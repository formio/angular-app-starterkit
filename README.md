Form.io Angular Starter Application
====================================
This is a starter application that uses [Angular](https://angular.io), [Bootstrap 4](https://getbootstrap.com/), [Angular CLI](https://cli.angular.io), and [Form.io](https://form.io) to create a Serverless form-based application.

Usage
---------
This starterkit is based off of an [Angular CLI](https://cli.angular.io/) application. Because of this, you will need to install the CLI tool and launch this application using ```ng serve```

```
npm install -g @angular/cli
ng serve
```

This will launch an Angular application @ [http://localhost:4200](http://localhost:4200) in your browser. You can go there to try out the default application.

Using your own Form.io Project
---------
You can also use this application with your own Form.io project. This will use the API's provided by your project to host all of
the data for this application. 

1. First login or create an account @ [Form.io](https://portal.form.io)
2. Create a new project called "Event Manager"
3. Under Advanced Options, click on **Upload A Project Template**, then select the **```/src/project.json```** file from this repository.
  
    ![](https://monosnap.com/file/yITvSniWzfdYJPLdfhC4bWHZEd9LBq.png)
  
4. Click on **Create Project** button.
5. After the project is created, copy the API path of your project. It should look like https://yourproject.form.io
6. Make the following change to the **```src/config.ts```** file, and replace ```[PROJECT_API]``` with the api of your project.

    ```ts
    import { FormioAppConfig } from 'angular-formio';
    import { FormioAuthConfig } from 'angular-formio/auth';

    export const AppConfig: FormioAppConfig = {
      appUrl: '[PROJECT_API]',
      apiUrl: 'https://api.form.io',
      icons: 'fontawesome'
    };

    export const AuthConfig: FormioAuthConfig = {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    };
    ```

7. Launch the application using...

    ```
    ng serve
    ```

You are now hosting all of the data from this application within your own Form.io project.

Enjoy!
