const basicLogging = {
  requestDidStart(requestContext) {
    const request = requestContext.request;

    console.log("Request started");
    console.log("Query: ", request.query);
    console.log("Variables: ", request.variables);
    
    return {
      didEncounterErrors(requestContext) {
        console.log("An error occured in response to the query " + request.query);
        console.log("Errors: ", requestContext.errors);
      },

      willSendResponse(requestContext) {
        console.log("Response sent", requestContext.response);
      },
    };
  },
};

module.exports = {
  basicLogging,
};
