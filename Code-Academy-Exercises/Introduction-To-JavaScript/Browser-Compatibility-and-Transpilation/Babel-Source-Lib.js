{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to traspile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

/*
The last step before we can transpile the code is to add a script to the script property
in the package.json file. The script is: "build": "babel src -d lib".
babel is the command that transpiles the code.
src is the directory with all the files to transpile.
-d says to write the traspiled code to a directory
lib is the name of said directory.
*/
