[![Build Status](https://travis-ci.org/udantha/exception.svg?branch=master)](https://travis-ci.org/udantha/exception)

## Synopsis

This module provides an extendable javascript exception class for easy declaration of custom exceptions.

## Usage

```     
class HttpException extends Exception {
    constructor(message, statusCode) {
        super(message);
        //set http status
        this.httpStatus = statusCode;
    }
}

try {
    throw new HttpException('Page not found', 404);
} catch (error) {
    console.log(error.httpStatus); // equals to 404
}
```

## Motivation

A common problem with Javascript compared to a language like Java is that the exception handling and ability to throw and use custom exceptions is not simple. This library aims to provide a common wrapper class to provide the extendability that's needed in this case.

## Installation

`npm install @udantha/exception`

## API Reference

Import/require the class on your file and extend it. Simply throw your custom object instead of javascript 'Error'

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.


TK
