{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to traspile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

/*
The npm install command will install new Node packages locally. the command creates a folder
called node_modules where it copies the package files to. It also installs all of the dependencies.
To use babel, we need to install the babel-cli and babel-present-env packages with the -D flag, which creates a
devDependencies property in json file. 
*/
