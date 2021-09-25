# Anti-Double-Typer

## About

This package is to help prevent you from accidentally assigning the same, string
name to a different variable. This is something that may pass most compilers, 
and linters but has the potential to cause some wonky headaches at runtime.

This is an example of what we are trying to avoid/catch:

```javascript
const USER_GET_PROFILE = '@USER/GET_PROFILE'  
const ACCOUNT_GET_ACOUNT_INFO = '@USER/GET_PROFILE' // This is a duplicate our script should catch 
const USER_UPDATE_PROFILE = '@USER/UPDATE_PROFILE'
const ACCOUNT_UPDATE_ACCOUNT_INFO = '@USER/UPDATE_PROFILE' // Another Duplicate.
```

## Expectations

This package (in it's current form) assumes all your actions are in one file. 
Later iterations of the package would be able:
- to accept a directory and scan all contained files for duplicates.
- use regex matching

## To Run Test This Package

1. Clone the Repo
2. Run `npm i` to get the dependencies.
3. Run `npm start` to see an example using node.
4. Run `npm run dev` to see an example using ts-node.

## Implement this package in your code (Alpha-test)

Right now this is not yet an npm package so there's a bit of a work around: 

1. Copy the file `./build/anti-double-typer.js` to somewhere local to your project.
2. To run the tool type `./build/anit-double-typer.js <path-to-your-types-file>`
3. Observe the output!

I'll leave it up to you to implment this into your devops process. (I'd recommend 
a pre-commit git hook, but that's just me.)


## Eventual Implementation

The aim is to be able use the package in the following way.
1. Check for clean git workspace. No working changes/staged changes. 
2. install the package `npm install anti-double-typer`
3. run the init script `./node_modules/.bin/anti-double-typer-init`
4. Answer the following: 
   1. Do you have: a) single type file b) single type directory c) consistent type file name (like 'user.actionTypes.js`)
   2. If (a | b): type the path to the resource.
5. Name the npm command: (default: 'checkDoubleTypes`)


At that point your NPM package would contain a few new variables/configs that would 
help the tool run: 

- A script to run anytime you like
- A path to the relevant resource OR the regex matching pattern
- A path to the anti-double-typer.js script inside the node_modules/.bin folder