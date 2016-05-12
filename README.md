# Angular app skeleton

This is the seed of an angular application.

It uses :

* AngularJs
* Angular UI Router
* Jade
* Gulp
* Twitter Bootstrap (Full CSS or Sass)
* Font Awesome

## Installation

Clone the repository:

```
git clone https://github.com/NutBoltu/angular-app-skeleton.git
cd angular-app-skeleton
rm -rf .git
```

Install gulp globally : [Official documentation](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

```
npm install -g gulp
```

Install dependencies using npm:

```
npm install
```
Go to src/ directory and run bower.
```
bower install
```

Run gulp in the root directory.

### For development
```
gulp run --env=dev
```
The app will run in http://localhost:3000

### For Production
```
gulp run --env=prod
```
and copy the dist/ directory to the server. You can clean the dist file using following command.
```
gulp clean
```

### Application layout

```
|
+- .sass-cache                --> automatically generated
|                                 which contain cached directories of .scss
+- config
|   +- config.json            --> gulp configuration file where all directories
|                                 of source and dist are described
|   +- env.json               --> environment variable file depends on the APP_ENV value
+- dist                       --> distribution files
+- node_modules               --> development dependencies node modules
+- src
|   +- bower_components       --> dependencies for the application
|   +- img                    --> image files for the application
|   +- scripts
|       +- controllers        --> angular controllers
|           +- account        --> basic controllers home, login, register
|           +- shared         --> shared controllers
|       +- directives         --> angular directives
|       +- routes             --> angular ui routes
|       +- services           --> angular services
|           +- model          --> models related to the server side database
|           +- shared         --> shared services
|   +- scss
|       +- _*.scss            --> partial style files
|       +- stylesheet.scss    --> main style files which imports all files
|   +- views
|       +- account            --> basic view  jade pages(home, login, register)
|       +- shared             --> shared view jade pages
|   +- app.js                 --> application run file
|   +- config.js              --> angular config file
|   +- index.jade             --> application main template file
+- gulpfile.js                --> development dependencies configuration file
```

## Licence
MIT licence

