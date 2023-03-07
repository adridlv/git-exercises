# Cypress skeleton

![Logo Emergya](../assets/emergya-logo.svg)

## Description
Testing tool to work with Cypress


## 💻 How to work with this project

You need follow the steps below in order to be able to work with this project

### Install NodeJS Dependencies

To build project you must run the next command:

```bash
# Build project
$ npm run build
```

Build command generates a .tgz file of library, if you want to delete the generated files and rebuild, you will use:

```bash
# Clean, build project and install dependencies
$ npm run clean-build
```

### Environment Variables

```bash
# Identifier of the project in Qase.io. E.g: CYINT
EMERGYA_PROJECT_QASEIO=''
# Token of the user in Qase.io
EMERGYA_QASEIO_API_TOKEN=''
# Check to indicate if results should be uploaded (true or false)
EMERGYA_UPLOAD_QASEIO=''
```

### Development
To start working locally with the project you will need:
- Build your custom components on cypress/pages.
- Build custom commands based on your needs. A great place to define or overwrite commands is in your cypress/support/commands.ts file, since it is loaded before any test files are evaluated.
- Build customs tests. Place in to your cypress/e2e folder.

## How to run the tests

### Run locally using UI

```
    npm run start
```
### Run using terminal

```
    // If you want to run the entire test set
    npm run tests
    
    // If you want to run a specific group of tests
    npm run tests -- --spec cypress/e2e/examples/TC_005-MultiClick.ts,cypress/e2e/examples/TC_004-ForceVisit.ts
```

### Run locally using Currents

```
    npm run currents
```
* NOTE: Before using this script, you must add the Cypress key and CI-Build-ID in the package.json.
## 📂 Code structure
```
/
├── .env 🔌                     # Configure environment variables.
|   |   └── ...                 # ...
|   |
├── cypress
|   ├── e2e
|   |   └── examples           # Examples of some utils that the skeleton has ready to use.            
|   ├── 🌈 fixture             # Fixtures are used as external pieces of static data that can be used by your tests
|   ├── 📚 pages               # Test files are located here by default.
|   |   └── examples           # Pages used in the example
|   ├── support                # Contains custom commands and imports.
|   |
|   └── ...                    # ... other files
└── ...
```   
