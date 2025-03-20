# DICAS REGEX
?  
- Significa para trazer o caracter antes dele, nenhuma ou uma vêz  
.  
- traz todos os caracteres , - / ; : " '  
- não engloba o \n  
+  
- muitos caracteres  
*  
- significa um ou mais caracteres
\b  
- borda de palavra  
- Infelizmente a boarda foi criada pensando somente no idioma inglês...por isto a boarda não funciona para palavras com acento. é ó ú etc.
- Tudo que for diferente de \w ([0-9A-Za-z_]) é considerado como borda. (inclusive palavras acentuadas é ó ú etc)  
- Solução é usar (\s\S) no lugar de \b.
\d  
- pega somente dígitos numéricos
\w  
- pegará quaisquer caracteres e números [^A-Za-z0-9_]  
\s  
- espaços  
\S  
- não espaços, pegará inclusive , e \n  
[\s\S]  
- é o famoso Dotall. Pegará todas as palavras, mesmo que contenha \n  
(/conteúdo/gim)  
  - g = pegará várias palavras  
  - i = insensitive case  
  - m = multiline, pegará caracteres ou palavras até depois de quebras de linha  

