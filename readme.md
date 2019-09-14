# RESTful API using Node.js, Express, Mongoose & TypeScript

This is a boilerplate for building scalable and robust REST APIs using Node.js & TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Available Routes](#available-routes)
  - [Available Scripts](#available-scripts)

## Prerequisites

You need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) either on your local machine or using a cloud service as [mLab](https://mlab.com/).

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- ODM: [Mongoose](https://mongoosejs.com/)

- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/)

- Easy configuration of environment variables thanks to [dotenv](https://github.com/motdotla/dotenv)

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`

3. Start the app using `npm run dev`

4. After that, go to: `http://localhost:3658/api/users`



### Available routes

| Method   | Resource                  | Description                                                                                                                       |
| :------- | :--------------           | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`   | `/api/users/register`     | Create a new user in the DB. You need to specify in the body the following attributes: firstname, lastname, email & password.                                                                               |
| `POST`   | `/api/users/login`        | Sign in with the email & password. If it's successful, it then generates a token                                         |
| `GET`    | `/api/posts`              | Returns the posts                                      |     

### Available scripts

- `dev` - To run the app without transpile,
- `start` - Build & run the transpiled app
[![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://github.com/DamilolaAlao/TypeScript-Rest-API-with-Express.js-JWT/blob/master/docker-compose.yml)
