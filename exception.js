/**
 * Exception class that wraps native js error.
 */
class Exception extends Error {

    /**
     * Constructor
     * Set exception message
     * @param {*} message 
     */
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        //Set correct stack trace
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }

} 

exports.Exception = Exception;
