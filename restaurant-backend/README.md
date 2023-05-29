# Pipedreams backend test

This repo shows the solution for the backend part described by [Pipedreams](https://www.pipedreams.com/)

## Getting Started

To give the best solution, I created an implementation using an hexagonal architecture that allows to decouple the business layer with the adapters such as the data base and the communication layer.

To provide the information to the data base, I decided to run an script that you can find in the `src/scripts/seed.js` file. The script is in charge of getting data of the following documents cooks.json and waiters.json. These data is saved in the staff table using MongoDB.

To communicate the front end layer with the back end layer, I implemented the Fastify framework.

To run the unit testing, you should run in your terminal the next command npm run test.

### Installing

For installing this project

```
npm i
```

### Testing

I wrote some test for verified the most importantant layers in the proyect. You can check it in `test` folder.
To run the unit testing, you should run in your terminal the next command.

```
npm run test
```

## Built With

- [Fastify](https://www.fastify.io/) - The web framework for node.js
- [MongoDB drive](https://www.npmjs.com/package/mongodb) - Driver mongoDB node.
