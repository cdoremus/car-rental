# Car Rental Demo Front End

This project is the front end for a Car Rental Demo application. The back end uses [Node](https://nodejs.org/en/)/[Express](https://expressjs.com/) to provide data from a [PostgreSQL](https://www.postgresql.org/) database. See the [Readme.md](../node-car-rental/Readme.md) file in the `node-car-rental` folder for more details.

The application uses a single Angular 4 component to display the user interface. The top portion of the component's page contains an Angular form to input the rental location and month. The bottom part of the page shows the best-price query results using an HTML table displayed after location and month is selected and the **Find Best Price** button is clicked.

## Application Features/Best Practices
This Angular application contains the following features and best-practices:
* Use of the Angular CLI to assure that the application is configured and structured according to current best-practices.
* Use of a Reactive Angular form.
* Use of an Angular service for back end REST requests to the Node/Express app (and the database) via the Angular `HttpClient`.
* Use of the Angular async pipe in the component template to display RxJS `Observable` results.
* Use of the `@ViewChild` decorator to gain access to a DOM element (location select drop-down).
* Use of the change event on the select location element to trigger the `onLocationChange()` method to populate the location name used in the best-price query results table.

## Future Development

A single component structure was used to facilitate rapid development due to time constraints.

Further development would involve refactoring out the form and best-price data table into separate presentation components with attributes (defined using `@Input`) to hold component data. This would require that the `AppComponent` be a container component that supplies data to its child presentation components via the attributes.

Also to be considered would be the use of [`ngrx`](https://github.com/ngrx) for state management.

In addition, form validation needs to be implemented with front-end messaging to make sure that a valid location and month is selected.

## Project Setup

### Back End
The Node/Express application needs to be started before the front end so the data needed by the front end is available. See the [back end Readme](./node-car-rental/Readme.md) for details on how to setup and run the back end.

### Development server

Run `ng serve` to start the  development server and then navigate to [http://localhost:4200/](http://localhost:4200). The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

The scaffolding and configuration for this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

