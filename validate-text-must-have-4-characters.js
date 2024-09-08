/*
When you want to get just a middle value 10999
from the text bellow.

Use Extension Code Runner
to test your code in VS Code terminal
*/
let text = `DD99`;
let isValid = text.match(/^[a-zA-Z0-9]{4}$/);
console.log(isValid);

/*results
isValid=true
*/
