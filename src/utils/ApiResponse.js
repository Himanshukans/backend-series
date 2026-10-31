class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; //less than 400 means success, greater than or equal to 400 means error
  }
}

export { ApiResponse };
