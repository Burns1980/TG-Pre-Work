fetch("https://api-to-call.com/endpoint").then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error("Request failed!");
}, networkError => {console.log(networkError.message)}).then(jsonResponse => {return jsonResponse;});

/*
The first argument in the fetch function determines the endpoint of the request.
The .then() method is chained to fetch with a function that is called upon success of the fetch. It takes
one parameter: response. We then test the ok property of response object because that will
be true if no errors occurred. We then create a way to handle an error if the conditional
statement is falsey. The second argument to the first .then() will be an error message to the console,
should one occur. We then chain another .then() to the first one. This method only runs if
the fist one completes without throwing an error.
*/
