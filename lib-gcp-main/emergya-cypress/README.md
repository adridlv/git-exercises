# Emergya Logger Library[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

![Logo Emergya](assets/emergya-logo.svg)

## Description

Emergya Logger Library.

## 📌 Methodologies and Guidelines

Quality Assurance Code (QAC)

* TypeScript, These projects provide templates which include TypeScript support. \
  [NPM TypeScript](https://www.npmjs.com/package/typescript) 
* ESLint, tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. \
  [NPM ESLint](https://www.npmjs.com/package/eslint) \
  [NPM ESLint | Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
* Jest, delightful JavaScript Testing. \
  [NPM Jest](https://www.npmjs.com/package/jest)
* SuperTest, HTTP assertions made easy via superagent. \
  [NPM SuperTest](https://www.npmjs.com/package/supertest)
* Mozilla, Standard HTTP response status codes. \
  [HTTP Status MOZILLA](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## 💊 Core Node Modules Libraries

This project is based on the Fastify library as a core for the development of the project structure.
[Fastify](https://www.fastify.io/)

## 📐Infrastructure

### Install NodeJS Dependences

```bash
$ npm i
```

### Running the App

```bash
# development
$ npm run start:watch
```

### Build

To install all dependencies and build project, you must run the next command:

```bash
# Build project and install dependencies
$ npm run build
```

Build command generates a .tgz file of library, if you want to delete the generated files and rebuild, you will use:

```bash
# Clean, build project and install dependencies
$ npm run clean-build
```

### Test

```bash
# unit tests
$ npm run test
```

### Skeleton

To check if the library is working properly, you have to add the following path on Logger-Skeleton, run clean-build and start:watch script on [package.json](../../skeletons/logger-skeleton/package.json):

`"emergya-logger": "file:../../lib-gcp-main/emergya-logger/emergya-logger.tgz"`

Maybe you have to make some changes on skeleton for the changes on libs works

## 📂 Code scaffolding

```
/
├── assets 🌈               # Images Sources.
|   └── emergya-logo        # Emergya Logo
|   |
├── doc
|   ├── api 🚠              # Postman Collection of Api Versions.
|   |   ├── v1              # Version 1
|   |   |   ├── Logger.po.. # Postman Collections
|   ├── qac 🔰              # Quality Assurance Code.
|   |   └── README.md       # JS Documentation Standard
|   |
├── src
|   ├── config              # Generic confi
|   ├── health-check        # Health check config
|   ├── tools               # Generic tools
|   ├── types               # Generic types
|   ├── v1                  # Example Articles Module for Version 1 of API Rest
|   |   ├── __mocks__ 👻    # Mocks data for test.
|   |   ├── __tests__ 🚥    # Unit tests.
|   |   ├── middlewares     # middlewares.
|   |   ├── routes          # routes.
|   |   ├── schemas         # schemas.
|   |   ├── services        # services.
|   |   ├── tools           # tools.
|   |   ├── *               # Version Initiation File.
|   |   └── ...             # ...
|   └── ...   
└── ...
```
## ⚡️ Description
This service sends data to Google Cloud Logging and BigQuery.

### Environments variables needed
For more information about env vars [.env.schema](../../skeletons/logger-skeleton/env/.env.schema).
#### General
* EMERGYA_SERVER_PORT
* EMERGYA_SERVER_GOOGLE_CLOUD_PROJECT
* EMERGYA_SERVER_SECURITY_CHECK_PATTERN
* EMERGYA_SERVER_TOKEN_HEADER_XFROM
* EMERGYA_SERVER_ENVIRONMENT
* EMERGYA_SERVER_SYSTEM_NAME

#### Logger Services
* EMERGYA_LOGGER_{SERVICE}_BIGQUERY
* EMERGYA_LOGGER_{SERVICE}_LOGGING
* EMERGYA_LOGGER_{SERVICE}_TRACKING
* EMERGYA_LOGGER_LEVEL_{SERVICE}

#### Logger Dataset
* EMERGYA_LOGGER_DATASET_TABLE_LOGGING
* EMERGYA_LOGGER_DATASET_TABLE_TRACKING
* EMERGYA_SERVER_CUSTOM_BIGQUERY_PATH
* EMERGYA_SERVER_CUSTOM_BIGQUERY_CUSTOM_TABLE_TRACKING
* EMERGYA_SERVER_CUSTOM_BIGQUERY_CUSTOM_TABLE_LOGGING

### Tools
* [CloudLogger(Stackdriver)](src/tools/cloudLogger.ts) is used to send logs or tracks to Google Cloud Logging service.
* [bigqueryLogger](src/tools/bigqueryLogger.ts) is used to send logs or tracks to Google Cloud BigQuery.

## 🚠 API Documentation Endpoints

| Version | URL | File |
| ------- | --- | -----|
|   V1    | v1  | [Postman Collection](doc/api/v1/Logger.postman_collection.json) 

## ⛽️ Review and Update Dependences

For review and update all npm dependencies of this project you need install in global npm package "npm-check" npm module.

```bash
# Install and Run
$ npm i -g npm-check
$ npm-check
```

## Happy Code

Created with JavaScript, a lot of ❤️ and a few ☕️

#### This README.md file has been written keeping in mind:
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
