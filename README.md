# Mental Health Tracker

A full-stack web application that allows users to track their mood and sleep, as well as keep track of resources to help on their journies to better health and wellness.

## Technology Stack

Front-End: ReactJS  
Back-End: Node, Express, Postgres

## Front-End Libraries

The React application uses Bulma CSS with the rbx component library.

## Testing

REST Testing with POSTMAN  
Front-End Component Testing with Jest

## Problems in Development

Sequelize Hooks and Seeding, and Passport JS implementation  
When snapshot testing the front-end, there was an issue with dependencies. For example, the CSS and component library for Bulma, as well as React Router were installed in the root of the project with the back-end but were used in the front-end (view directory).

Using third-party component libraries has been complicated. In particular the chart library, Victory by Formidable Labs has had a steep learning curve associated with it with a lot of trial and error.

## Demo User

```
Email: demouser@test.com
Password: password
```
