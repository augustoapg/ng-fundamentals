# NgFundamentals

Code to follow the course ng-fundamentals in Pluralsight (by Joe Eames and Jim Cooper):
https://www.pluralsight.com/courses/angular-fundamentals

## How to run
To run this project locally, you first need to clone this repo. Then run `npm install` to make sure all dependencies are installed. After than run `npm run server`. This will run the local server locatted in node_modules/ngf-server, which provides the data functionality for the app. Finally, in another command line, run `ng serve --open`.

## Possible issue and fix
It is possible to get a cross-reference error when running the site. This can be fixed by going into node_modules/ngf-server/expressConfig.js and replace module.exports for the following:

```
module.exports = function(app) {
  // app.use(logger('tiny'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns',
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(rootPath));
  app.use(express.static(rootPath + '/dist'));
  app.use('/events', express.static(rootPath));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
}
```


