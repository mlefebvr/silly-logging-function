# silly-logging-function
A logging function so simple it's silly

Best used with apps that log to the console, for example when inside a Docker container.

While testing, if NODE_ENV is set to 'test', no log message will be generated.

The following environment variables will be added to the log:

- NODE_ENV as 'environment'
- APP as 'app'

## Installation

```bash
$ npm install silly-logging-function
```

## Usage
```js
const logger = require('silly-logging-function')

const myFunction = (arg) => {
  logger({
    arg,
    message: `Received log message ${arg}`
  })
}
```

## Output
```json
{"app":"none","environment":"none","timestamp":"2021-06-17T01:34:55.887Z","details":{"url": "/"},"statusCode":200,"statusMessage":"OK","duration":11}
```