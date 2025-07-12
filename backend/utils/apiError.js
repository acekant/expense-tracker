class ApiError extends Error {
    constructor (message="Something went wrong", statusCode,error = [],stack = "") {
        super(message)
        this.message = message
        this.error = error
        this.statusCode = statusCode
        this.success = false
        this.data = null

        if (stack) {
            this.stack = stack
        } else {
            Error.captureErrorTrace(this, this.constructor)
        }
    }
}

export {ApiError}
