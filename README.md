# Brain Tracker

A full-stack web application that allows users to track their mood and sleep, as well as keep track of resources to help on their journies to better health and wellness.

## Try It Out!

### Demo User

```
Email: demouser@test.com
Password: password
```

## Technology Stack

Front-End: ReactJS with Redux
Back-End: Node/Express, Postgres

## Front-End Libraries

The React application uses Bulma CSS with the rbx component library.  
Data Visualization is done with Victory by Formidable Labs.  
The calendar is made with React-Datepicker.  
Moment-Timezone is utilized to parse Postgres Timestamps.

## Testing

REST consumption was tested with POSTMAN prior to setting up the front-end.

## Problems in Development

Sequelize Hooks and Seeding, and Passport JS implementation  
When snapshot testing the front-end, there was an issue with dependencies. For example, the CSS and component library for Bulma, as well as React Router were installed in the root of the project with the back-end but were used in the front-end (view directory).

Using third-party component libraries has been complicated. In particular the chart library, Victory by Formidable Labs has had a steep learning curve associated with it with a lot of trial and error.

Building the heroku app brought up issues with the dependency tree. Eslint and Jest were installed in the root directory and managed with the root package.json but were also a part of the `create-react-app`'s dependencies. In order to proceed with deployment, they had to be uninstalled.

## Future Work

Testing with Jest for the Front-End.  
Alternative to "bruteforcing" REST API with Mocha.
