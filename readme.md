#Markup framework
##Requirements
* node ^8.3.0
* npm ^5.3.0

You must be globally installed *gulp*

To set the type in the console `npm install gulp -g`

## Install dependencies, and check if it works
###### step 1
**cd 'project_folder'**
###### step 2
**npm install** - This command installs a package, and any packages that it depends on. ([npm](https://www.npmjs.com/ "npm is the package manager for JavaScript"))
###### step 3
**npm start** or **gulp** - This command starts *Front-end developer kit*

## Development
**browsers.json** - In this file, you can specify the required browsers for [autoprefixer](https://github.com/postcss/autoprefixer "Parse CSS and add vendor prefixes to rules by Can I Use")

**uncss.json** - In this file, you can specify the required ignore ClassNames for [gulp-uncss](https://www.npmjs.com/package/gulp-uncss)

**options.json** - In this file, you can specify your environment `env = "dev"|"prod"`, template language `templateEngine = "html"|"pug"`, and if you need to use uncss `uncss = true|false`

## Gulp tasks
* **gulp** - default task which runs the project with the initial settings with browsersync and Livereload

* **gulp build** - default task which runs the project with the initial settings without browsersync and Livereload

* **gulp png-sprite** - run task that takes image and converts them into a stylesheet and sprites(retina and default)

* **gulp svg-sprite** - run task which takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of several types

* **gulp optimize-images** - run task which minify images seamlessly

* **gulp clean** - run task which remove *dist* folder

* **gulp zip** - run task which archive folder *dist*

* **gulp email** - run task which convert your css to inline styles in *dist/email* folder

## Application Structure
```
.
├── app
│   ├── _includes
│   ├── _layouts
│   ├── API
│   ├── data
│   ├── fonts
│   ├── images
│   ├── png-sprite
│   ├── scripts
│   │   ├── components
│   │   ├── index.js
│   │   └── markup-menu.js
│   ├── scss
│   │   ├── app
│   │   ├── components.scss
│   │   ├── extends.scss
│   │   ├── mixins.scss
│   │   ├── normalize.scss
│   │   ├── variable.scss
│   │   └── index.scss
│   ├── svg-sprite
│   └── index.html     
├── dist               
├── gulp                    
│   └── tasks
├── browsers.json           
├── uncss.json   
└── options.json                
```
