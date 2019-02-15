const getData = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint");
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {console.log(error);}
};

/*
The async kw makes sure our getData function returns a promise.
The try statement will try to run a block of code. If an error occurs, the catch(error)
statement will handle it.
*/
