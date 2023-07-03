export class APIError extends Error {
    constructor(status, message, data) {
        super(message)
        this.status = status;
        this.data = data;
    }
    status;
    data;
    errorPage = false;
}

APIError.prototype.name = "APIError"
