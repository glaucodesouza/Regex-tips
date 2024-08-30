/*
When you want to get just a middle value 10999
from the text bellow.

Use Extension Code Runner
to test your code in VS Code terminal
*/
let text = `Example of Text, where Nuofe='10999'`;
let transp = text.match(/Nuofe='(.*?)'/)[1];
/*results
[0] is the match: Nuofe='10999'
[1] is the value returned: 10999
transp=10999
*/
