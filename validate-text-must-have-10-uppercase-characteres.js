/*
When you want:
  to validate a text have 10 exactly alphanumeric

Use Extension Code Runner
to test your code in VS Code terminal
*/
let text = `ABC99FFL00`;
let isValid = text.match(/[A-Z0-9]{10}/);
/*results
isValid=true
*/
