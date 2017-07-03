## Synopsis

This module provides an extendable javascript exception class for easy declaration of custom exceptions.

## Usage

```     class HttpException extends Exception {
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

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
