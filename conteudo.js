/* =========================================================
   CONTEÚDO DO MUSEU DA MADRINHA
   Tudo o que se lê e se ouve está aqui. O museu (index.html) e o estúdio de gravação (gravar.html) usam este ficheiro.

   Fotos: pasta fotos/. Se a foto não existir, aparece uma pintura com o emoji.
   Voz: pasta audio/. Cada fala tem um "id". Grava-a no gravar.html e põe o ficheiro em audio/ com esse nome
   (por exemplo audio/t01.m4a). Enquanto não houver gravação, o museu usa a voz sintética.
   ========================================================= */

const SALAS=[
  {nome:'O princípio',wall:'#2f4a3f',voz:{id:'s1',texto:'Sala um. O princípio.'},obras:[
    {foto:'fotos/1.jpg',e:'⛪',paint:'linear-gradient(135deg,#9fb7c9,#55708a)',t:'O batizado',y:'2013',
     tech:'Água benta, roupa de domingo e uma madrinha a assumir o cargo',
     tx:'Repare na solenidade do momento. A madrinha aceita o cargo sem ler o contrato, o que os especialistas consideram um ato de enorme coragem. É a peça que deu origem a toda a coleção.',
     voz:{id:'o1'}},
    {foto:'fotos/2.jpg',e:'🎂',paint:'linear-gradient(135deg,#e7b7a3,#a35d4c)',t:'Primeiro aniversário juntos',y:'2014',
     tech:'Bolo, velas e glacé em sítios onde não devia estar',
     tx:'Obra de transição. O afilhado explora pela primeira vez a relação entre o bolo e a madrinha. Os restauradores ainda hoje encontram vestígios de glacé.',
     voz:{id:'o2'}}]},
  {nome:'O período dourado',wall:'#6b2a2a',voz:{id:'s2',texto:'Sala dois. O período dourado.'},obras:[
    {foto:'fotos/3.jpg',e:'🎁',paint:'linear-gradient(135deg,#e8cf8a,#a3772f)',t:'Natal',y:'2016',
     tech:'Papel de embrulho, fita-cola e paciência',
     tx:'Esta série não é a mais extensa da coleção, mas é das mais valiosas. Os especialistas notam que, nesta autora, cada peça vale por várias.',
     voz:{id:'o3'}},
    {foto:'fotos/4.jpg',e:'🍰',paint:'linear-gradient(135deg,#d9c3e0,#7b5a8c)',t:'Tarde de domingo',y:'2017',
     tech:'Sofá, televisão e lanche reforçado',
     tx:'Uma natureza-morta de domingo. Observe a calma da composição: ninguém tem pressa, ninguém olha para o relógio. Os historiadores chamam a isto a época de ouro do lanche.',
     voz:{id:'o4'}}]},
  {nome:'Arquivo histórico',wall:'#23324a',voz:{id:'s3',texto:'Sala três. Arquivo histórico.'},obras:[
    {jornal:true,foto:'fotos/bebe.jpg',e:'📰',paint:'linear-gradient(135deg,#efe7d3,#bdb196)',t:'Diário da Família, 22/11/1988',y:'1988',
     tech:'Tinta de jornal sobre papel, edição única',
     tx:'A peça mais antiga da coleção. É a primeira página publicada no dia em que tudo começou. Recomenda-se a leitura completa, sobretudo dos classificados.',
     voz:{id:'o5'}}]},
  {nome:'Período contemporâneo',wall:'#7a5a26',voz:{id:'s4',texto:'Sala quatro. Período contemporâneo.'},obras:[
    {foto:'fotos/5.jpg',e:'🍕',paint:'linear-gradient(135deg,#f0b36a,#b5542f)',t:'Adolescente com fome',y:'2024',
     tech:'Frigorífico aberto, luz natural',
     tx:'Peça do período tardio. O afilhado mantém a pose clássica de quem pergunta o que há para comer. A madrinha responde com a generosidade que a caracteriza.',
     voz:{id:'o6'}},
    {foto:'fotos/6.jpg',e:'📸',paint:'linear-gradient(135deg,#a9d3c9,#4b8577)',t:'Selfie de família',y:'2025',
     tech:'Telemóvel em braço esticado, alguém de olhos fechados',
     tx:'Obra coletiva. Há sempre uma pessoa a piscar os olhos. A curadoria decidiu que isso faz parte da autenticidade da peça e recusou qualquer restauro.',
     voz:{id:'o7'}}]},
  {nome:'Sala do curador',wall:'#1f1d1b',final:true,voz:{id:'s5',texto:'Sala cinco. A sala do curador.'},obras:[
    {foto:'fotos/7.jpg',e:'💛',paint:'linear-gradient(135deg,#e9d6a8,#9c7a3c)',t:'Nós os dois',y:'2026',
     tech:'Obra principal da coleção. Não está à venda.',
     tx:'A peça central desta exposição. Não precisa de explicação, mas o curador deixou uma nota.',fin:true,
     voz:{id:'o8'}}]}
];

/* Portas entre salas: uma pergunta, a resposta certa dá o código */
const PORTAS=[
  {q:'Quem é o melhor afilhado do mundo?',o:['O Tiago','O Tiago','O Tiago'],c:[0,1,2],ok:'Resposta certíssima. Não havia outra.',code:'2013'},
  {q:'O que é que a madrinha nunca disse ao afilhado?',o:['Estás tão crescido','Já comeste?','Não'],c:[2],ok:'Exato. Nem uma vez.',code:'2512'},
  {q:'Em que ano abriu a primeira sala deste museu, ou seja, em que ano nasceste?',o:['1987','1988','Isso não se pergunta a uma senhora'],c:[1,2],ok:'Certo. Mas ninguém diria.',code:'1988'},
  {q:'Quantas velas vais apagar este ano?',o:['36','38','Prefiro não contar'],c:[1,2],ok:'Trinta e oito. E todas merecidas.',code:'2211'}
];

/* Trailer. "voz" é o que o narrador diz (tu). "foto" aparece se existir. */
const CENAS=[
  {h:'<div class="s">Num mundo onde os afilhados não param de crescer...</div>',voz:{id:'t01',texto:'Num mundo onde os afilhados não param de crescer...'},d:3700,hit:1},
  {h:'<div class="s">... uma mulher aceitou uma missão</div>',voz:{id:'t02',texto:'... uma mulher aceitou uma missão.'},d:3100,hit:1},
  {h:'<div class="big">2013</div><div class="s">O batizado</div>',voz:{id:'t03',texto:'Dois mil e treze.'},d:2800,hit:2,foto:'fotos/1.jpg'},
  {h:'<div class="q">"E agora, o que é que uma madrinha faz?"</div>',voz:{id:'t04',texto:'E agora, o que é que uma madrinha faz?'},d:3200},
  {h:'<div class="s">Nem sempre por perto</div>',voz:{id:'t05',texto:'Nem sempre por perto.'},d:2800,hit:1,foto:'fotos/3.jpg'},
  {h:'<div class="s">Mas sempre lá</div>',voz:{id:'t06',texto:'Mas sempre lá.'},d:3000,hit:2},
  {h:'<div class="q">"Estás tão crescido!"</div><div class="s" style="margin-top:10px;color:var(--muted)">Ela, sempre que me vê</div>',voz:{id:'t07',texto:'Estás tão crescido!'},d:3500,foto:'fotos/5.jpg'},
  {h:'<div class="s">Este inverno</div>',voz:{id:'t08',texto:'Este inverno, a lenda faz trinta e oito.'},d:2000,hit:1},
  {h:'<div class="s">a lenda faz</div>',d:1500},
  {h:'<div class="big"><em>38</em></div>',d:2500,hit:3},
  {h:'<div class="cr">Uma exposição de <b>o afilhado</b><br>Curadoria <b>o afilhado</b><br>Orçamento <b>nenhum</b><br>Com <b>Carolina Breda</b></div>',d:4200},
  {h:'<div class="big" style="font-size:clamp(40px,12vw,72px)">Museu da Madrinha</div><div class="s" style="margin-top:8px;color:var(--gold)">A exposição está aberta</div>',voz:{id:'t09',texto:'O Museu da Madrinha. A exposição está aberta.'},d:4200,hit:3}
];

/* A nota do curador (a tua carta). Cada parágrafo é um elemento. */
const CARTA=[
  'Os meus pais escolheram-te para madrinha em 2013.',
  'Nem sempre conseguimos estar perto, e a vida às vezes pôs quilómetros e agendas pelo meio. Mas nunca tive dúvidas de que estavas lá.',
  'Cada vez que estivemos juntos valeu por muitas. Este museu é pequeno, mas tudo o que está cá dentro é verdade.',
  'Não digo isto muitas vezes, por isso fiz-te um museu. É mais fácil pendurar na parede do que dizer em voz alta.',
  'Parabéns, madrinha. Gosto muito de ti.'
];
const FINAL_VOZ={id:'f01',texto:'Parabéns, madrinha. Gosto muito de ti.'};

/* Texto que se ouve no audioguia de cada obra */
function falaObra(o,num){return `Obra ${num}. ${o.t}. ${o.tech}. ${o.tx}`}

/* Lista de todas as falas, para o estúdio de gravação */
function todasAsFalas(){
  const L=[];
  CENAS.forEach(c=>{if(c.voz)L.push({grupo:'Trailer (narrador)',id:c.voz.id,texto:c.voz.texto})});
  let n=0;SALAS.forEach(s=>{L.push({grupo:'Entrada nas salas',id:s.voz.id,texto:s.voz.texto});s.obras.forEach(o=>{n++;L.push({grupo:'Audioguia',id:o.voz.id,texto:falaObra(o,n)})})});
  L.push({grupo:'Final',id:FINAL_VOZ.id,texto:FINAL_VOZ.texto});
  return L;
}
