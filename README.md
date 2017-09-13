# Basic Hexo Boilerplate
## Includes
- Hexo-webpack-renderer-2-advanced -> [https://github.com/jimmyn/hexo-renderer-webpack-2]("Right here")
- VueJs' vue-loader - Write `.vue` files and have them compiled -> [https://github.com/vuejs/vue-loader]("Found Here")
- Babel-loader - Transpiles javascript files using Babel and webpack -> [https://github.com/babel/babel-loader]("Found Here")
- Hexo-browsersync for reloading any changes on save -> [https://github.com/hexojs/hexo-browsersync]("Here")

## Setup

You may need to install the hexo cli 
```
npm install hexo-cli -g
```
More info here -> [https://github.com/hexojs/hexo-cli](https://github.com/hexojs/hexo-cli)


Install remaining dependencies using... 
```
npm install
``` 

## Run
With the hexo cli install run...
```
hexo serve
```
or
```
hexo generate
```

## Notes:

For the time being the entry file for webpack is placed inside the `themes/source/js` folder. That way only this file will be moved to the `public` folder when `hexo generate` is run.
All other referenced files from the entry file can be put outside the `themes/source` folder so they aren't moved to the output. Instead they are in a `src` folder instead. This can be renamed to what ever is necessary