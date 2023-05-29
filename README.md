# Pipedreams test

This repo shows the solution for the test described by [Pipedreams](https://www.pipedreams.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For the porpouse of making faster and easier the assignmetn review, I suggest to use `docker compose`

However if you want to use your environment machine, you will need:

```
node
```

```
mongodb
```

### Installing

If you are using `docker compose`, please run the next command in your terminal in the root of the project:

```
docker compose up
```

If you are running the project in your machine, please follow the next steps for intalling the project:

In the project's root go to the _backend-restaurant_ folder and type:

```
npm install
```

After that come back to the root's project and go to the _frontend-restaurant_ and type:

```
npm i -f
```

In the `package.json` of each folder you can find the scripts to run the each project.
## Built With

- [Fastify](https://www.fastify.io/) - The web framework for node.js
- [React](https://react.dev/) - Library for the web intarfaces
- [MongoDB](https://www.mongodb.com/) - Nosql database for persistance data

## Authors

- **Nicolas Gonzalez** - _Initial work_ - [Github](https://github.com/nfgonzalez10)
