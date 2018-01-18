# AytraAngular

The whole purpose of this app is to provide a basic structure for an angular app. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Guidelines
Module
	Modules are a great way to organize an application and extend it with capabilities from external libraries.
	always create module for each feature. Module helps organize an application into cohesive blocks of functionality.

Service
	Always develop business logic and code related to backend communication inside service class.
	Separate each service based on their purpose. and inject it into the components that need it.
	Using a separate service keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.

Each component and service has its own test file with .spec.ts extension. This is where test cases should be developed

for further detils, follow this guideline
https://angular.io/guide/styleguide

## Directory structure 
	app/ all the application related code resides inside this directory

	app/core - all the services, authguard  and other business logic related files reside inside this directory

	app/shared - holds the common components, directives, pipes, app-setting files, animations files. And share them with the modules that need them.

	app/model - all the entity model classes reside here


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
