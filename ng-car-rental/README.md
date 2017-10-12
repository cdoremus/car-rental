# Car Rental Demo Front End

This project is the front end for a Car Rental Demo application. The back end uses [Node](https://nodejs.org/en/)/[Express](https://expressjs.com/) to provide data from a [PostgreSQL](https://www.postgresql.org/) database. See the [Readme.md](../node-car-rental/Readme.md) file in the `node-car-rental` folder for more details.


The application uses a single Angular 4 component to display the user interface.

## Project Setup

### Back End
The Node/Express application needs to be started before the front end so the data needed by the front end is available. To do that, run `npm start` inside the `node-car-rental` folder
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

The scaffolding and configuration for this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

