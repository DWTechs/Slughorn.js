# Installation guide

## Clone the project :

  ```bash
  $ git clone https://github.com/DWTechs/Slughorn.js.git
  ```

## Launch with docker
 
  ### build image : 
  ```bash
  $ cd Slughorn/
  $ docker-compose up -d
  ```
  
  ### build lib : 
  ```bash
  $ cd Slughorn/
  $ docker-compose run slughorn
  ```
  
OR

## Install project dependencies :

  ```bash
  $ cd Slughorn/
  $ npm i
  ```

# Workflow

- create a branch following [these instructions](https://lcluber.github.io/LeadDevToolkit/docs/git/branch.html)

- build the library :

  ```bash
  $ npm run build
  ```

- test the library :

  ```bash
  $ npm run test
  ```

- commit your work following [conventional commits rules](https://lcluber.github.io/LeadDevToolkit/docs/git/commit.html) :


## Folders

- scripts/
- dist/
- src/
- tests/
- web/

