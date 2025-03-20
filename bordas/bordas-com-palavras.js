/*
HOW TO TEST this file?
option a) Use extension Code Runner to test your code in VS Code terminal
option b) or use this command to run: node yourfile.js
*/

// Buscar todas as palavras que contém dia.

// A mehor busca é a última opção 7

const texto = `dia diatonico diafragma media wikipedia bom_dia melodia radial`;

// PARCIALMENTE Correto
// buscar palavras que comecem com dia
// \b  = borda de palavra
// dia = palavra que inicia com dia (por causa da borda \b)
// \w  = quaisquer caracteres [^A-Za-z0-9_]
// +   = muitos caracteres
// (/conteúdo/) = sem g = pegará apenas a primeira palavra
// SAÍDA: 'diatonico'
console.log(texto.match(/\bdia\w+/)); 

// PARCIALMENTE correto 2
// buscar palavras que comecem com dia
// \b  = borda de palavra
// dia = palavra que inicia com dia (por causa da borda \b)
// \w  = quaisquer caracteres
// +   = muitos caracteres
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// SAÍDA: ['diatonico', 'diafragma']
console.log(texto.match(/\bdia\w+/gi));

// PARCIALMENTE correto 3
// buscar palavras que comecem com dia
// \b  = borda de palavra
// dia = palavra que inicia com dia (por causa da borda \b)
// \w  = quaisquer caracteres
// *   = muitos caracteres, tornando dia opcional.
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// SAÍDA: ['dia', 'diatonico', 'diafragma']
console.log(texto.match(/\bdia\w*/gi));

// PARCIALMENTE correto 4
// buscar palavras que comecem com dia
// \w  = palavras antes de dia
// dia = palavra contém dia
// \w  = palavras depois de dia
// +   = OBRIGATÓRIO, TORNANDO OBRIGATÓRIO A PALAVRA DIA
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// SAÍDAS: 
// [ 'diatonico', 'diafragma' ]
// [ 'dia', 'diatonico', 'diafragma' ]
// [ 'radial' ]
console.log(texto.match(/\w+dia\w+/gi));

// PARCIALMENTE correto 5
// buscar palavras que comecem com dia
// \w  = palavras antes de dia
// dia = palavra contém dia
// \w  = palavras depois de dia
// *   = OPCIONAL, TORNANDO OPCIONAL A PALAVRA DIA
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// SAÍDAS: 
// [
//   'dia',       'diatonico',
//   'diafragma', 'media',
//   'wikipedia', 'bom_dia',
//   'melodia',   'radial'
// ]
console.log(texto.match(/\w*dia\w*/gi));

// PARCIALMENTE correto 6
// buscar palavras que comecem com dia
// (\S*)?  = buscar qualquer palavra ou espaço ANTES de dia, e ? torna este grupo opcional.
// dia = palavra contém dia
// (\S*)?  = buscar qualquer palavra ou espaço APÓS dia, e ? torna este grupo opcional.
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// OBS.: O PROBLEMA é que pega vírgulas. POIS o \Spega qualquer coisa, inclusive , e \n.
// SAÍDAS: 
// [
//   'dia',       'diatônico',
//   'diafragma', 'média',
//   'wikipédia', 'bom_dia',
//   'melodia',   'radial'
// ]
const textoComAcentos = `dia diatônico diafragma média wikipédia bom_dia melodia radial`;
console.log(textoComAcentos.match(/(\S*)?dia(\S*)?/gi));

// MELHOR SOLUÇÃO (CORRETO) 7
// buscar palavras que comecem com dia
// (\S*)?  = buscar qualquer palavra ou espaço ANTES de dia, e ? torna este grupo opcional.
// dia = palavra contém dia
// (\S*)?  = buscar qualquer palavra ou espaço APÓS dia, e ? torna este grupo opcional.
// (/conteúdo/gi) = g = globalmente, pegará várias letras ou palavras, i=insensitive case
// OBS.: O PROBLEMA é que pega vírgulas. POIS o \Spega qualquer coisa, inclusive , e \n.
// SAÍDAS: 
// [
//   'dia',       'diatônico',
//   'diafragma', 'média',
//   'wikipédia', 'bom_dia',
//   'melodia',   'radial'
// ]
console.log(textoComAcentos.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
