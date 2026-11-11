# Museu da Madrinha

A prenda para os 38 anos da madrinha Carolina (22 de novembro). Junta três protótipos: o museu, o jornal e o trailer.

1. Bilhete de entrada e um trailer de cinema ("Este inverno, a lenda faz 38").
2. Cinco salas de museu. Cada obra tem ficha e audioguia. Para passar de sala há uma porta trancada: uma pergunta, a resposta certa dá um código, e o código abre a porta.
3. A sala 3 tem o "Diário da Família" de 22/11/1988 emoldurado, que abre inteiro.
4. Na última sala está a nota do curador (a carta) e o livro de honra, que manda a mensagem dela por WhatsApp.

O conteúdo (textos, perguntas, cenas do trailer e a carta) está todo em `conteudo.js`:
- `SALAS`: as salas, as obras e os textos do audioguia;
- `PORTAS`: as perguntas e os códigos das portas;
- `CENAS`: as cenas do trailer;
- `CARTA`: a nota do curador.

## A tua voz

Abre `gravar.html` no telemóvel (pelo GitHub Pages). Grava cada fala, carrega em Guardar e põe os ficheiros na pasta `audio/`. O museu usa as tuas gravações e, onde faltar alguma, a voz sintética.

As fotografias vão para a pasta `fotos/`: `1.jpg` a `7.jpg` e `bebe.jpg` (a foto dela bebé, para o jornal). Sem foto, aparece uma pintura com um emoji.

Para funcionar no telemóvel, ativa o GitHub Pages: https://tiagoduarterossa-cloud.github.io/Anivers-rio-madrinha-/

## Parte física (pasta `impressao/`)

- `tabela-e-bilhete-A4.pdf`: o bilhete de entrada (170 × 66 mm, com QR) e duas tabelas de museu com o QR do audioguia (150 × 92 mm para a parede e 100 × 56 mm para a moldura).
- `verso-A4.pdf`: a etiqueta para as costas da moldura (130 × 80 mm), com o QR que abre só a obra 6 (`banco-do-nuno.html`).
- `jornal-A4.pdf`: o Diário da Família de 22/11/1988 em papel, com o QR da edição digital. Usa `fotos/bebe.jpg` se existir.

Os outros protótipos estão na pasta `prototipos/`.
