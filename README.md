# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When clicking the link above, the client computer attempts to resolve the name into an ip address from the DNS server. After the address is resolved, the client
sends out a HTTP GET request to the server. Then, if the server approves the request, the server sends a message saying that it approved and starts sending data. The data it sends are files such as CSS, HTML, JavaScript and any other files that help make up the web page. The client device then starts creating the
web page as data comes in.

## From start to finish how does that data reach you to be rendered in the browser?

First, the url of the server needs to be resolved into an ip address. Once it has the address, A connection has to be established with the server. Once the
connection has been established, the client can make the HTTP GET request. If the server accepts the request, it will start sending over packets of the code
required to render the webpage. Once all of the data required to render the webpage has been received, the entire page is displayed. This is determined because
the server and client will each send packets that say they are done sending data.

## What code is rendered in the browser?

The HTML, CSS, JavaScript code.

## What is the server-side code’s main function?

The server-side code handles all the requests from clients with responses. It determines what to send to the client based on the clients request. It writes data
to databases that the client may provide. It also handles database queries from the client. Essentially, it takes the request from the client and sends the proper code to the client so that the client can display the information that it requested from the server.

## What is the client-side code’s main function?

The client-side codes main function is to display the webpage that it requested from the server.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I would think there is only one instance per page created for each. I don't see why there would be more than one because that would be wasting resources if there were.

## How many instances of the server-side code are available at any given time?

I would think there are as many instances available as there are resources on that particular server. Every server request results in another instance of it's code.

## What is runtime?

Runtime is when a program is using device resources to perform it's job. Once those resources are released back to the operating system, the program is no longer
in runtime.

## How many instances of the databases connected to the server application are created?

Each server database application has one instance connected to the database.
