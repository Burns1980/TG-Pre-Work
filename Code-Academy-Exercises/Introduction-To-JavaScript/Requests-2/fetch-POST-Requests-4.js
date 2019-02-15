// Information to reach API
const apiKey = 'd6edc0cee00b4d76a7cf379d1a6de2b2';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {method: 'POST', headers: {'Content-type': 'application/json',
  	'apikey': apiKey}, body: data,}
    ).then(response => {
    	if(response.ok) {
        return response.json();
      }
    	throw new Error('Request failed!');
  	}, networkError => {console.log(networkError.message)});
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

//The second callback function handles a network error.
