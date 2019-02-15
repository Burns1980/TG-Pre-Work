fetch("https://api-to-call.com/endpoint", {method: 'POST', body: JSON.stringify({id: '200'})})
  .then(response => {
  	if(response.ok) {
      return response.json();
    }
  	throw new Error('Request failed!');
	}, networkError => {console.log(networkError.message)})
	.then(jsonResponse => {return jsonResponse;});
  
/*
For POST requests, the 2nd arg is an object. This object tells the server the type of request (POST) and
what information will be sent to the server (API).
*/
