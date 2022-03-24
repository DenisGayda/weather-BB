# Backbase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Description of applied approaches and solutions

* The application uses the **SCAM** pattern
* Implemented 2 pages with **LazyLoading**
* Used *RouterResolver* for data preloading
* Services are implemented at the root injector level
* Libraries for UI components were not used
* Added **tslint** for code analysis
* Added **stylelint** for style analysis
* The **Jest** library was used to implement the tests
* Introduced a variable.css file to store base variables and ease subsequent changes
* **trackBy** was not used with the **ngFor** directive, since it is not supposed to change the data arrays, respectively, and redraw
* For detailed information on the weather forecast, [Forecast API](https://api.openweathermap.org/data/2.5/forecast) was used, since it is the only one available in a free subscription
* **API_KEY** is stored in a variable, but this is a bad example and it is better to get it from the server in the form with cookies
* Added handling of a loading state and the loader display
* Error processing has been implemented, used a common message ("Something went wrong") to notify user

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/ru/docs/api).

## Running linting
Run `ng lint` to analyze typescript files (*.ts) and styles(*.{css,scss})

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

