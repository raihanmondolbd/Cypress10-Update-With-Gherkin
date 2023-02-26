 clone this repo and open terminal with root project directory and following the command step by step:
 #### install the dependencies
 ```bash
 npm init -y
 ```
 ```bash
 npm install cypress --save-dev
 ```
 ```bash
 npm install @badeball/cypress-cucumber-preprocessor
 ```
 ```bash
 npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
 ```
 ```bash
 npm i @shelex/cypress-allure-plugin
 ```
 ```bash
 npm i cypress-xpath
 ```
  ```bash
 npm i cypress-parallel
 ```
 
 #### simple run:
 
 ```bash
  npm run cy:run
 ```
 #### run with generate allure results:
  ```bash
  npm run cy:run:allure
 ```
 #### run in parallel with allure results:
  ```bash
  npm run cy:parallel  
 ```
  #### see allure results:
 ```bash
 allure serve .\allure-results\ 
 ```
