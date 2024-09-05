/*
When you want using:
  Groups

Use Extension Code Runner
to test your code in VS Code terminal
*/

let text1 = `<b>Destaque</b><strong>Forte</strong><div>Content</div>`;
console.log(text1.match(/<(\w+)>.*<\/\1>/g)); // g to get all references

/*
results:
<(\w+)>   => to get <tags>
.*        => to get words/texts between tags
<\/\1>    => to get closing tags </tag> (important: \1 references the group 1, to get group 1 again)

*/