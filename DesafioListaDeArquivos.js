const texto = "lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3";
console.log(texto.match(/\.mp3/g));
//resultado: [ '.mp3', '.mp3', '.mp3', '.mp3' ]

//no futuro, para extrair todos os nomes de arquivos .mp3
//fazer como abaixo:
console.log(texto.match(/\w+\.mp3/g));
//resultado: [ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]

// se eu quiser extrair somente o arquivo rock.mp3:
//fazer:
console.log(texto.match(/r\w+\.mp3/g));
//resultado: [ 'rock.mp3']
