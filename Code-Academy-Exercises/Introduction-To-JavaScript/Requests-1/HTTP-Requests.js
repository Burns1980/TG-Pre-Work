console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

//Java is an asynchronous language. This means that things that are quick to get rendered, get
//rendered first. This is so a page doesn't get held up by something that takes long to render.
//The event loop handles the asynchronous function calls.
