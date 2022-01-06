# span-logger

This basic logger library which gives you time difference between your last console log. 

## Installation

```js
# using npm
npm install span-logger

# using yarn
yarn add span-logger
```

## Usage

```js
# using require
const spanLogger = require('span-logger');
let span = new spanLogger()

span.log('before API call'); // print 1 - before API call - 0.000ms
// this is api call takes 2.000ms
span.log('after api call'); // print 2 - after API call - 2.000ms

spam.record('api call'); // don't log only record

span.allLogs // This will return all logs as Array of JSON Objects

# using import
import span from 'span-logger';
```


