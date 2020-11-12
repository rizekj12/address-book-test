# Quick Front-end Contact Book project

This was a brief front-end challenge I wanted to do for the purpose of refreshing some knowledge of React


## Errors and solutions 

error 1. When trying to use a .map method on this.state.contacts that were pre-set, for some reason the ContactItem component was not rendering the items on the contacts state list. This was because I had curly braces on my callBack function which was not telling the code to return anything. I needed to fix this by either removing the curly braces or putting a return. By removing curly braces this is an implicite return.

by using curlys Javascript thinks you are using JS code so it is waiting for a return statement before the HTML. 

error 2. On my CreateItem function I needed it to be a fat arrow function because I was using the "this" keyword which meant by using a regular function synthax the "this" keyword was referring to the global object or window object instead of the class component object Main. The fat-arrow function fixed this by making the function inheret the class component main and binding "this" to the Main class component. 
