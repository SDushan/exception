'use strict';

let expect = require('chai').expect;
let Exception = require('../exception').Exception;

describe('Check exception', () => {
    it('Should inherit Error', () => {
        let exception = new Exception('Custom Error');
        expect(exception).to.exist;
        expect(exception).to.be.an.instanceof(Error);
    });

    it('Should have error properties', () => {
        let exception = new Exception('Custom Error #SDKJ#');
        expect(exception.name).to.equals('Exception');
        expect(exception.message).to.equals('Custom Error');
        expect(exception.stack).not.to.be.empty;             
    });

    it('Should accept an exception as message', () => {
        let exception = new Exception( new Error() );
        expect(exception.stack).not.to.be.empty;
    });

    it('Should be extendable', () => {
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
            expect(error.name).to.equals('HttpException');
            expect(error.httpStatus).to.equals(404);
        }
    });
});
