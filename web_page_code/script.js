/* ------------------- CARROSSEL DESTAQUE ------------------- */
const slides = [
  {
    img: "https://i.pinimg.com/1200x/b0/bf/5c/b0bf5cb0bc132ce0424bf6b1362da6b5.jpg",
    title: "Sinners (2025)",
    desc: "Um thriller psicológico que explora os limites entre o bem e o mal."
  },
  {
    img: "https://s2-g1.glbimg.com/QEvAlnPTKSOi7MIb9UOanMyCI0g=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/j/t/qB8KPDRaePOJhORII8iA/corra-que-a-policia-vem-ai.jpg",
    title: "Corra que a Polícia vem Aí (2025)",
    desc: "Uma comédia de ação repleta de perseguições e situações hilárias."
  },
  {
    img: "https://i0.wp.com/www.crossovernerd.com/wp-content/uploads/2025/07/superman-capa-scaled.jpeg?resize=1536%2C864&ssl=1",
    title: "Superman (2025)",
    desc: "O retorno do maior herói da DC em uma aventura épica para salvar a Terra."
  },
  {
    img: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/3928/9be987bfcbdeeb54aa2130e39b5fd070.jpg",
    title: "Quarteto Fantástico (2025)",
    desc: "A origem da famosa equipe de super-heróis em uma nova adaptação."
  },
  {
    img: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2918/acbcdfd4bdd2dc33f8f4d47e6d210cff.jpg",
    title: "Demon Slayer - Castelo Infinito",
    desc: "A emocionante continuação da batalha contra os demônios no castelo infinito."
  }
];

let currentSlide = 0;
const imgEl = document.getElementById("carousel-img");
const titleEl = document.getElementById("carousel-title");
const descEl = document.getElementById("carousel-desc");
const leftBtn = document.querySelector(".highlight .arrow.left");
const rightBtn = document.querySelector(".highlight .arrow.right");

function showSlide(index) {
  const slide = slides[index];
  imgEl.src = slide.img;
  titleEl.textContent = slide.title;
  descEl.textContent = slide.desc;
}

leftBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
rightBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);

// Dados das categorias e filmes
const movieCategories = {
  Romance: [
    {
      poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
      title: "Titanic",
      desc: "Um amor proibido nasce entre dois jovens de mundos opostos a bordo do navio mais famoso da história."
    },
    {
      poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
      title: "Diário de uma Paixão",
      desc: "Noah e Allie vivem uma intensa história de amor que resiste ao tempo e às adversidades da vida."
    },
    {
      poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
      title: "Orgulho e Preconceito",
      desc: "Elizabeth Bennet e Mr. Darcy enfrentam seus próprios preconceitos em busca do verdadeiro amor."
    },
    {
      poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
      title: "Antes do Amanhecer",
      desc: "Dois jovens desconhecidos se conhecem em um trem e vivem uma noite inesquecível pelas ruas de Viena."
    },
    {
      poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
      title: "La La Land",
      desc: "Um músico e uma atriz lutam para equilibrar seus sonhos artísticos e um amor arrebatador em Los Angeles."
    },
    {
      poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
      title: "Como Eu Era Antes de Você",
      desc: "Uma jovem cuidadora transforma a vida de um homem paralisado e descobre o poder do amor e da empatia."
    },
    {
      poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
      title: "Um Amor para Recordar",
      desc: "Dois adolescentes de mundos opostos descobrem o amor e a fé em meio às dificuldades da juventude."
    },
    {
      poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
      title: "Cartas para Julieta",
      desc: "Durante uma viagem à Itália, uma jovem encontra uma carta antiga que a leva a uma jornada romântica."
    },
    {
      poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
      title: "P.S. Eu Te Amo",
      desc: "Após a morte do marido, uma mulher recebe cartas deixadas por ele para ajudá-la a seguir em frente."
    },
    {
      poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
      title: "Simplesmente Acontece",
      desc: "Amigos inseparáveis enfrentam o tempo, a distância e o destino em uma história sobre amor e escolhas."
    }
  ],

  Ação: [
    {
      poster: "https://i.pinimg.com/1200x/21/2c/0c/212c0c1da8e6b21d12fa94b5e4f1a2cc.jpg",
      title: "John Wick 4",
      desc: "O lendário assassino enfrenta seu passado e uma nova onda de inimigos em uma batalha de sobrevivência."
    },
    {
      poster: "https://i.pinimg.com/1200x/40/42/00/404200d6a15cb2b930e8e341da46243f.jpg",
      title: "Missão Impossível 7",
      desc: "Ethan Hunt embarca em sua missão mais perigosa para impedir uma ameaça global incontrolável."
    },
    {
      poster: "https://i.pinimg.com/1200x/40/44/59/4044591e71306098950b4f7ea0450fec.jpg",
      title: "Velozes e Furiosos 10",
      desc: "Dom Toretto e sua família enfrentam um novo inimigo que busca vingança a qualquer custo."
    },
    {
      poster: "https://i.pinimg.com/736x/f1/08/1b/f1081b4b351c2df41bc3c9ea35ce1a7a.jpg",
      title: "The Batman",
      desc: "Bruce Wayne enfrenta o Charada enquanto descobre os segredos sombrios que assolam Gotham City."
    },
    {
      poster: "https://i.pinimg.com/1200x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
      title: "Top Gun: Maverick",
      desc: "Maverick retorna como instrutor para treinar uma nova geração de pilotos, enfrentando seu passado."
    },
    {
      poster: "https://i.pinimg.com/736x/fb/82/79/fb8279258020ae13c5a8c9d215bc199f.jpg",
      title: "Homem-Aranha: Sem Volta para Casa",
      desc: "Peter Parker busca restaurar sua identidade, mas acaba abrindo o multiverso e enfrentando antigos vilões."
    },
    {
      poster: "https://i.pinimg.com/736x/62/dc/ff/62dcff042184966c44f582ce563633d4.jpg",
      title: "Duna",
      desc: "Paul Atreides enfrenta o destino em um planeta desértico repleto de intrigas e poder espiritual."
    },
    {
      poster: "https://i.pinimg.com/736x/d4/1f/b8/d41fb8b72caf4ea9c6aa7e351c003cc7.jpg",
      title: "007 - Sem Tempo para Morrer",
      desc: "James Bond retorna da aposentadoria para enfrentar um vilão que ameaça milhões de vidas."
    },
    {
      poster: "https://i.pinimg.com/1200x/48/26/64/482664fd2234133220dbc52313288bc8.jpg",
      title: "The Gray Man",
      desc: "Um agente secreto se torna alvo da própria CIA após descobrir segredos comprometores da agência."
    },
    {
      poster: "https://i.pinimg.com/1200x/38/0d/9e/380d9ef98119bc7a505d49d59bae02f9.jpg",
      title: "Bullet Train",
      desc: "Cinco assassinos descobrem que suas missões estão interligadas em um trem-bala rumo a Tóquio."
    }
  ],

  Terror: [
    {
      poster: "https://i.pinimg.com/736x/8d/a8/5f/8da85fcd4bdc3fff02b736064a76d092.jpg",
      title: "Invocação do Mal 3",
      desc: "Os investigadores paranormais Ed e Lorraine Warren enfrentam um dos casos mais sombrios de suas vidas."
    },
    {
      poster: "https://i.pinimg.com/1200x/aa/49/e0/aa49e05ce787b72bc53401ceff3ef674.jpg",
      title: "Corra!",
      desc: "Um jovem negro visita a família da namorada branca e descobre segredos perturbadores por trás da fachada."
    },
    {
      poster: "https://i.pinimg.com/1200x/82/68/ee/8268eef4cb32f82fd1ddadc4702177a1.jpg",
      title: "Hereditário",
      desc: "Após a morte da matriarca, uma família é atormentada por forças macabras e segredos ancestrais."
    },
    {
      poster: "https://i.pinimg.com/1200x/d4/45/0a/d4450ad93de703c451b97ef6049f4b9c.jpg",
      title: "O Iluminado",
      desc: "Um escritor enlouquece lentamente enquanto passa o inverno isolado em um hotel assombrado."
    },
    {
      poster: "https://i.pinimg.com/1200x/37/03/d8/3703d8526415f4c5406318ed13122a86.jpg",
      title: "O Exorcista",
      desc: "Uma jovem possuída por uma força demoníaca se torna o centro de um aterrorizante ritual de exorcismo."
    },
    {
      poster: "https://i.pinimg.com/1200x/a4/ca/6a/a4ca6abcd42c0422c41583c9e6228b04.jpg",
      title: "It: A Coisa",
      desc: "Um grupo de crianças enfrenta uma entidade maligna que assume a forma de um palhaço assustador."
    },
    {
      poster: "https://i.pinimg.com/736x/e1/c6/df/e1c6df8b26c08db545f1dc67a07390fa.jpg",
      title: "O Babadook",
      desc: "Uma mãe e seu filho enfrentam uma entidade sombria saída de um misterioso livro infantil."
    },
    {
      poster: "https://i.pinimg.com/1200x/58/d8/ed/58d8ed95e93f64e315acb80b0adf1094.jpg",
      title: "Os Outros",
      desc: "Uma mulher vive isolada com seus filhos até começar a suspeitar que não estão sozinhos na casa."
    },
    {
      poster: "https://i.pinimg.com/736x/3b/36/99/3b3699ce5d3a8459fd17dcece60c2c7a.jpg",
      title: "O Chamado",
      desc: "Uma fita amaldiçoada condena à morte todos que a assistem em sete dias, e uma repórter decide investigar."
    },
    {
      poster: "https://i.pinimg.com/1200x/d2/c0/db/d2c0db66a87cc7884c84705fd0426870.jpg",
      title: "Atividade Paranormal",
      desc: "Uma jovem casal grava acontecimentos assustadores em casa, revelando uma presença demoníaca."
    }
  ],
  Suspense: [
    {
      poster: "https://i.pinimg.com/736x/ff/be/6b/ffbe6bac1fdeeb81df8d1c53d5bf6fe8.jpg",
      title: "Garota Exemplar",
      desc: "Quando sua esposa desaparece misteriosamente, um homem se torna o principal suspeito em um jogo psicológico."
    },
    {
      poster: "https://i.pinimg.com/1200x/6d/43/a7/6d43a79bc771e1c8bce4416743650b98.jpg",
      title: "Cidade de Deus",
      desc: "A dura realidade das favelas cariocas contada através da ascensão e queda de jovens entre o crime e a sobrevivência."
    },
    {
      poster: "https://i.pinimg.com/736x/9a/79/2a/9a792a2e8dff8fd8e839a297cc751163.jpg",
      title: "Seven: Os Sete Crimes Capitais",
      desc: "Dois detetives caçam um serial killer que comete assassinatos inspirados nos sete pecados capitais."
    },
    {
      poster: "https://i.pinimg.com/736x/96/74/91/9674914bec5b4534737145a23fc92219.jpg",
      title: "Os Suspeitos",
      desc: "Um pai desesperado toma atitudes extremas para encontrar sua filha desaparecida em um jogo de moral e justiça."
    },
    {
      poster: "https://i.pinimg.com/1200x/39/dd/54/39dd54dd3b0e8d73c0cbe1eb27e25fac.jpg",
      title: "Zodíaco",
      desc: "Baseado em fatos reais, acompanha a caçada ao assassino Zodíaco que aterrorizou São Francisco nos anos 70."
    },
    {
      poster: "https://i.pinimg.com/1200x/eb/eb/ea/ebebea709cde5db370c7146a28d833ea.jpg",
      title: "Psicose",
      desc: "Um clássico do suspense sobre uma mulher em fuga e o sinistro dono de um isolado motel de beira de estrada."
    },
    {
      poster: "https://i.pinimg.com/1200x/54/c5/06/54c506983fa4efb5fc71af49810b8f55.jpg",
      title: "O Silêncio dos Inocentes",
      desc: "Uma jovem agente do FBI busca a ajuda de um assassino canibal para capturar outro serial killer."
    },
    {
      poster: "https://i.pinimg.com/1200x/e6/b5/a7/e6b5a79c5410e4a171135078d225a404.jpg",
      title: "Os Infiltrados",
      desc: "Policial e criminoso infiltram-se um no outro em uma perigosa teia de engano e lealdade."
    },
    {
      poster: "https://i.pinimg.com/1200x/6d/d9/38/6dd9385620437d27c9d049f35a691b4c.jpg",
      title: "Prisoners",
      desc: "Após o desaparecimento de duas meninas, um pai decide fazer justiça com as próprias mãos."
    },
    {
      poster: "https://i.pinimg.com/1200x/41/e5/10/41e5100562b57c8ba770dfce525a164b.jpg",
      title: "Memórias de um Assassino",
      desc: "Dois detetives sul-coreanos tentam capturar um assassino em série em meio a uma investigação repleta de falhas."
    }
  ],

  Animação: [
    {
      poster: "https://i.pinimg.com/736x/78/92/82/789282ea5e2c44e0c2f2ceba4185936c.jpg",
      title: "A Viagem de Chihiro",
      desc: "Uma garota entra em um mundo mágico repleto de espíritos e precisa encontrar coragem para salvar seus pais."
    },
    {
      poster: "https://i.pinimg.com/736x/ee/73/35/ee733577a5724b59de70e4f1f335f874.jpg",
      title: "O Rei Leão",
      desc: "Simba deve enfrentar o passado e reivindicar seu lugar como rei após a trágica morte de seu pai."
    },
    {
      poster: "https://i.pinimg.com/736x/ff/ba/c3/ffbac3218ac7704e2d8eb5b63380d485.jpg",
      title: "Toy Story",
      desc: "Os brinquedos de Andy ganham vida e mostram o poder da amizade e da lealdade."
    },
    {
      poster: "https://i.pinimg.com/736x/6b/ce/c7/6bcec7b2dd74eab3a07394e4cd7ab446.jpg",
      title: "Procurando Nemo",
      desc: "Um peixe-palhaço atravessa o oceano em busca de seu filho desaparecido, enfrentando desafios e fazendo amigos."
    },
    {
      poster: "https://i.pinimg.com/736x/cd/f0/2f/cdf02fbb3554e09507bad8789e238b26.jpg",
      title: "Frozen",
      desc: "Duas irmãs enfrentam o poder da magia do gelo e o verdadeiro significado do amor fraternal."
    },
    {
      poster: "https://i.pinimg.com/1200x/7c/40/5a/7c405a150cc1ff877e8a412868939fa4.jpg",
      title: "Shrek",
      desc: "Um ogro rabugento embarca em uma missão para resgatar uma princesa e acaba descobrindo o amor verdadeiro."
    },
    {
      poster: "https://i.pinimg.com/736x/99/7f/da/997fda738fa282d8cb9e2a909ef450a4.jpg",
      title: "Meu Amigo Totoro",
      desc: "Duas irmãs descobrem criaturas mágicas na floresta enquanto enfrentam a mudança para uma nova casa."
    },
    {
      poster: "https://i.pinimg.com/1200x/71/0b/d0/710bd076bb7875cca4ac1e5ec0636d91.jpg",
      title: "Os Incríveis",
      desc: "Uma família de super-heróis tenta viver uma vida normal enquanto enfrenta novos vilões."
    },
    {
      poster: "https://i.pinimg.com/736x/08/5e/dd/085edd8ede953f1e3a5bd369faf193ed.jpg",
      title: "Moana",
      desc: "Uma jovem aventureira navega pelos mares para salvar seu povo e descobrir quem realmente é."
    },
    {
      poster: "https://i.pinimg.com/1200x/64/cb/dc/64cbdcd33adf888858a38d630bfc2aa0.jpg",
      title: "Wall-E",
      desc: "Um pequeno robô solitário embarca em uma jornada pelo espaço para restaurar a esperança da humanidade."
    }
  ],

  Aventura: [
    {
      poster: "https://i.pinimg.com/1200x/35/30/d8/3530d8623fcb76d42e75e85848f45985.jpg",
      title: "Indiana Jones",
      desc: "O arqueólogo mais destemido do cinema parte em busca de relíquias perdidas e enfrenta inimigos implacáveis."
    },
    {
      poster: "https://i.pinimg.com/1200x/a3/00/84/a300845de127a59333bd91688ba3d4e0.jpg",
      title: "Jurassic Park",
      desc: "Um parque de dinossauros recriados geneticamente se torna um pesadelo quando as criaturas escapam."
    },
    {
      poster: "https://i.pinimg.com/736x/92/d4/ff/92d4ffbe32454b2e7bc866caf224ded8.jpg",
      title: "Piratas do Caribe",
      desc: "O capitão Jack Sparrow enfrenta maldições e inimigos em busca de tesouros e liberdade pelos mares."
    },
    {
      poster: "https://i.pinimg.com/736x/d7/64/61/d764616d3a51de0be543cea2c0da55c6.jpg",
      title: "Jumanji",
      desc: "Um jogo misterioso transporta jogadores para uma selva cheia de perigos e desafios inacreditáveis."
    },
    {
      poster: "https://i.pinimg.com/736x/30/40/10/304010f409cc50741e89a94f5cbf577f.jpg",
      title: "Avatar",
      desc: "Em Pandora, um ex-soldado descobre um novo propósito de vida ao lado de um povo em harmonia com a natureza."
    },
    {
      poster: "https://i.pinimg.com/1200x/fe/98/28/fe9828d616848f7c4be388ce65718314.jpg",
      title: "O Senhor dos Anéis",
      desc: "Um grupo improvável parte em uma jornada épica para destruir o Um Anel e salvar a Terra-média."
    },
    {
      poster: "https://i.pinimg.com/1200x/75/0f/70/750f70405cfcf37c439daf80d2ecc375.jpg",
      title: "As Crônicas de Nárnia",
      desc: "Quatro irmãos descobrem um mundo mágico e ajudam o leão Aslam a lutar contra as forças do mal."
    },
    {
      poster: "https://i.pinimg.com/1200x/bd/a8/44/bda84441f480bf15f7a32a236a738402.jpg",
      title: "King Kong",
      desc: "Uma expedição captura um gorila gigante e o leva para a cidade, onde a fera causa caos e tragédia."
    },
    {
      poster: "https://i.pinimg.com/736x/38/7e/ec/387eecaa845afd256e84eaa980d5fac0.jpg",
      title: "Mogli: O Menino Lobo",
      desc: "Criado por lobos na selva, Mogli precisa escolher entre o mundo dos animais e o dos humanos."
    },
    {
      poster: "https://i.pinimg.com/1200x/13/1f/a7/131fa757cf50abed9f1393564a631f00.jpg",
      title: "Tesure Planet",
      desc: "Um jovem aventureiro embarca em uma viagem espacial em busca de um lendário tesouro escondido."
    }
  ],
  Scifi: [
    {
      poster: "https://i.pinimg.com/1200x/21/37/92/2137925653fcb239512301821fd8cdbb.jpg",
      title: "Interestelar",
      desc: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
    },
    {
      poster: "https://i.pinimg.com/736x/f1/b1/d6/f1b1d6a84d8c44f3d67007c5f460b7cb.jpg",
      title: "Blade Runner 2049",
      desc: "Décadas após os eventos originais, um novo caçador de replicantes descobre segredos que podem mudar o mundo."
    },
    {
      poster: "https://i.pinimg.com/1200x/c3/8d/09/c38d09658a348f3b6101e9eff348b706.jpg",
      title: "Matrix",
      desc: "Neo descobre que o mundo em que vive é uma simulação e se junta à resistência contra as máquinas."
    },
    {
      poster: "https://i.pinimg.com/736x/dc/df/71/dcdf71615a4d42dbd2ad44b054dd610e.jpg",
      title: "O Quinto Elemento",
      desc: "No futuro, um taxista se vê envolvido em uma corrida para salvar a Terra de uma ameaça cósmica."
    },
    {
      poster: "https://i.pinimg.com/736x/6c/6d/71/6c6d7177c225ee424b8c3bea8073f0de.jpg",
      title: "2001: Uma Odisseia no Espaço",
      desc: "Uma viagem visionária pelas eras da humanidade, guiada por um misterioso monólito e pela inteligência artificial HAL 9000."
    },
    {
      poster: "https://i.pinimg.com/1200x/78/3d/ba/783dbaf9449725a8b920a694443c80b6.jpg",
      title: "Star Wars: Episódio IV",
      desc: "Luke Skywalker se une a rebeldes para derrotar o Império Galáctico e restaurar a esperança na galáxia."
    },
    {
      poster: "https://i.pinimg.com/1200x/69/87/99/6987991829ca270f0e489e94da5c18b8.jpg",
      title: "Distrito 9",
      desc: "Alienígenas são confinados em guetos na Terra, e um agente descobre uma ligação inesperada com eles."
    },
    {
      poster: "https://i.pinimg.com/736x/61/6a/83/616a83ef85ee76bf8f62c58168c6586e.jpg",
      title: "Contato",
      desc: "Uma cientista faz contato com uma civilização extraterrestre e embarca em uma jornada filosófica e espiritual."
    },
    {
      poster: "https://i.pinimg.com/736x/0a/d1/73/0ad1738d24e4431c7890032cbd0705cd.jpg",
      title: "O Predador",
      desc: "Um grupo de soldados enfrenta uma criatura alienígena mortal em uma selva implacável."
    },
    {
      poster: "https://i.pinimg.com/1200x/ee/3f/74/ee3f74bdaa5f1437feab5e6ceb1fa5e9.jpg",
      title: "Alien: O Oitavo Passageiro",
      desc: "Uma nave espacial recebe um sinal desconhecido e desperta uma ameaça mortal entre sua tripulação."
    }
  ],

  Medieval: [
    {
      poster: "https://i.pinimg.com/736x/74/18/fd/7418fddf783cbae01364d815c501a953.jpg",
      title: "O Nome da Rosa",
      desc: "Um monge investiga uma série de assassinatos misteriosos em um mosteiro medieval repleto de segredos."
    },
    {
      poster: "https://i.pinimg.com/736x/71/47/ae/7147aedcb63b3edf4f5126c24e7c765a.jpg",
      title: "Coração de Cavaleiro",
      desc: "Um camponês finge ser nobre para competir em torneios de cavalaria e provar seu valor."
    },
    {
      poster: "https://i.pinimg.com/1200x/6f/96/70/6f9670fe7232886f685a1a81eb82b7d5.jpg",
      title: "Excalibur",
      desc: "A lenda do Rei Arthur e a busca pela espada mágica que simboliza poder, destino e justiça."
    },
    {
      poster: "https://i.pinimg.com/736x/d0/53/76/d053766210f5d2a6a753aafb7234d3fb.jpg",
      title: "Robin Hood: O Príncipe dos Ladrões",
      desc: "O fora-da-lei mais famoso da Inglaterra rouba dos ricos para ajudar os pobres e desafiar a tirania."
    },
    {
      poster: "https://i.pinimg.com/1200x/da/72/4c/da724ce295774b56f5499fb198c35fbe.jpg",
      title: "Braveheart",
      desc: "William Wallace lidera uma revolta pela liberdade da Escócia contra a opressão inglesa."
    },
    {
      poster: "https://i.pinimg.com/1200x/4b/93/d1/4b93d134bb22d25a1ed660b8b43bf95a.jpg",
      title: "O Senhor dos Anéis: A Sociedade do Anel",
      desc: "Frodo e seus companheiros iniciam a jornada para destruir o Anel e derrotar Sauron."
    },
    {
      poster: "https://i.pinimg.com/736x/c8/9a/0a/c89a0a08dd0f4721085d484ed6720d0b.jpg",
      title: "Joana D'Arc",
      desc: "A história da jovem camponesa que acreditava ter sido escolhida por Deus para libertar a França."
    },
    {
      poster: "https://i.pinimg.com/736x/0b/da/0d/0bda0dd64c1343deec7fd73b5dd25138.jpg",
      title: "Rei Arthur",
      desc: "O lendário rei e seus cavaleiros da Távola Redonda enfrentam traições e batalhas épicas pelo reino."
    },
    {
      poster: "https://i.pinimg.com/736x/b6/12/dd/b612dd8640c75ac2610c9bc24ee7e9b0.jpg",
      title: "As Cruzadas",
      desc: "Um ferreiro se torna cavaleiro e luta para proteger Jerusalém em meio ao conflito entre fé e poder."
    },
    {
      poster: "https://i.pinimg.com/736x/e8/7d/32/e87d3222ea57c816c85a48d9a7459c2f.jpg",
      title: "O Sétimo Selo",
      desc: "Um cavaleiro medieval desafia a própria Morte para entender o sentido da vida em tempos de peste e desespero."
    }
  ],

  Dorama: [
    {
      poster: "https://i.pinimg.com/1200x/b8/61/59/b8615957b66420a74337fa1902ae353a.jpg",
      title: "The Glory",
      desc: "Uma mulher busca vingança contra os colegas que destruíram sua juventude, planejando cada detalhe de sua retribuição."
    },
    {
      poster: "https://i.pinimg.com/736x/6d/01/e5/6d01e5dd4394a94c892485e48cd6ee8c.jpg",
      title: "Vincenzo",
      desc: "Um advogado da máfia italiana retorna à Coreia e usa seus métodos implacáveis para combater a corrupção."
    },
    {
      poster: "https://i.pinimg.com/736x/2c/f6/83/2cf683fd22da75400604044600c2390e.jpg",
      title: "Alquimia da Alma",
      desc: "Em um mundo de magia e guerreiros, uma assassina reencarna no corpo de uma jovem e muda o destino de um nobre."
    },
    {
      poster: "https://i.pinimg.com/736x/df/5c/ad/df5cad58fe2c9a2d69923c70053d1576.jpg",
      title: "Happiness",
      desc: "Após uma epidemia transformar pessoas em monstros sedentos, moradores de um prédio lutam para sobreviver."
    },
    {
      poster: "https://i.pinimg.com/1200x/02/dd/19/02dd195f7ba790bb330971af420b01fe.jpg",
      title: "All of Us Are Dead",
      desc: "Um vírus zumbi se espalha em uma escola e os alunos precisam lutar para escapar e encontrar ajuda."
    },
    {
      poster: "https://i.pinimg.com/1200x/8b/42/5d/8b425d6eb7d1bdcb8aecb34985dd2f0d.jpg",
      title: "Alice in Borderland",
      desc: "Três jovens são transportados para um mundo paralelo onde precisam vencer jogos mortais para sobreviver."
    },
    {
      poster: "https://i.pinimg.com/736x/69/24/d4/6924d4d4a7fab170daeda8a36eab5030.jpg",
      title: "Squid Game",
      desc: "Centenas de pessoas endividadas participam de jogos infantis mortais em busca de um prêmio milionário."
    },
    {
      poster: "https://i.pinimg.com/736x/4d/2e/e2/4d2ee29a20d9813b47f715765ca9f75f.jpg",
      title: "Sweet Home",
      desc: "Após um apocalipse, moradores de um prédio lutam contra monstros e seus próprios medos interiores."
    },
    {
      poster: "https://i.pinimg.com/1200x/09/c7/92/09c7924a0f9ace085fb9d46538318400.jpg",
      title: "Kingdom",
      desc: "Na Coreia medieval, o príncipe herdeiro enfrenta uma praga misteriosa que transforma pessoas em mortos-vivos."
    },
    {
      poster: "https://i.pinimg.com/736x/8c/e4/24/8ce4240b366ae882ce4fc706ab3a3d68.jpg",
      title: "Mr. Queen",
      desc: "Um chef moderno acorda preso no corpo de uma rainha da era Joseon, provocando confusões hilárias na corte."
    }
  ],

  Anime: [
    {
      poster: "https://i.pinimg.com/736x/ae/b8/1e/aeb81e901a22cd9b814671e1a4007c79.jpg",
      title: "A Viagem de Frieren",
      desc: "Após derrotar o Rei Demônio, uma elfa imortal viaja pelo mundo refletindo sobre o tempo e a amizade."
    },
    {
      poster: "https://i.pinimg.com/736x/62/41/e5/6241e5be5dc063a8332b4ea365968947.jpg",
      title: "Diário de uma Apotecária",
      desc: "Uma jovem inteligente descobre segredos da corte imperial enquanto trabalha como farmacêutica."
    },
    {
      poster: "https://i.pinimg.com/1200x/7d/a4/59/7da459e1163d6e3f405e976e1634de94.jpg",
      title: "Spy x Family",
      desc: "Um espião precisa formar uma família falsa para sua missão, mas acaba criando laços verdadeiros."
    },
    {
      poster: "https://i.pinimg.com/1200x/3a/99/5e/3a995e5fb83110c467797f72de6fd6cb.jpg",
      title: "DanDaDan",
      desc: "Dois adolescentes enfrentam seres sobrenaturais e alienígenas em uma mistura insana de ação e comédia."
    },
    {
      poster: "https://i.pinimg.com/736x/21/97/d0/2197d0858a0200c2f4d94efe02f98eda.jpg",
      title: "Your Name",
      desc: "Dois jovens desconhecidos trocam de corpo misteriosamente e iniciam uma conexão que transcende o tempo."
    },
    {
      poster: "https://i.pinimg.com/736x/1b/dd/c2/1bddc2171b634ce55ad199b11f9acce7.jpg",
      title: "The Summer Hikaru Died",
      desc: "Um adolescente percebe que algo inumano tomou o lugar de seu melhor amigo e precisa enfrentar o medo da perda."
    },
    {
      poster: "https://i.pinimg.com/1200x/56/e3/bd/56e3bd29c2ca846af718fbd512512ead.jpg",
      title: "Jujutsu Kaisen",
      desc: "Um estudante ganha poderes amaldiçoados e luta contra espíritos malignos para proteger os inocentes."
    },
    {
      poster: "https://i.pinimg.com/1200x/31/9d/86/319d86712c65c8974b04657c4153cc5f.jpg",
      title: "Sailor Moon",
      desc: "Uma garota comum descobre ser uma guerreira mágica destinada a proteger o mundo das forças do mal."
    },
    {
      poster: "https://i.pinimg.com/1200x/cb/23/10/cb23105557bb46ca0857f5ab80304a97.jpg",
      title: "Soul Eater",
      desc: "Jovens caçadores de almas treinam para enfrentar criaturas malignas e manter o equilíbrio do mundo."
    },
    {
      poster: "https://i.pinimg.com/736x/ad/1d/08/ad1d080812373cc16ff22df4c859aae7.jpg",
      title: "Noragami",
      desc: "Um deus esquecido tenta reconquistar sua fama ajudando humanos em troca de doações simbólicas."
    },
    {
      poster: "https://i.pinimg.com/1200x/24/11/e4/2411e4f111197cfd71562eaa81e769e5.jpg",
      title: "Vanitas no Carte",
      desc: "Em uma Paris steampunk, um humano e um vampiro unem forças para salvar almas amaldiçoadas."
    }
  ]
};


// Container principal
const container = document.getElementById("categories-container");

// Criação dinâmica das categorias
Object.entries(movieCategories).forEach(([category, movies]) => {
  const categorySection = document.createElement("section");
  categorySection.classList.add("category");

  categorySection.innerHTML = `
    <div class="category-header">
      <h2>${category}</h2>
    </div>
    <div class="category-carousel">
      <button class="arrow left">&#10094;</button>
      <div class="carousel-track" id="track-${category.toLowerCase()}"></div>
      <button class="arrow right">&#10095;</button>
    </div>
  `;

  container.appendChild(categorySection);

  // Adiciona os itens de cada categoria
  const track = categorySection.querySelector(".carousel-track");
  movies.forEach(movie => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="item-info">
        <h3>${movie.title}</h3>
      </div>
    `;
    track.appendChild(item);
  });

  // Controles de navegação (com loop infinito)
  const leftBtn = categorySection.querySelector(".arrow.left");
  const rightBtn = categorySection.querySelector(".arrow.right");
  const scrollAmount = 250;

  leftBtn.addEventListener("click", () => {
    if (track.scrollLeft <= 0) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });

  rightBtn.addEventListener("click", () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScrollLeft - 10) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });
});

// --- MODAL DE FILMES ---
const modal = document.getElementById("movie-modal");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeModalBtn = document.querySelector(".close-modal");

// Mapeia pôsteres e adiciona evento de clique
Object.entries(movieCategories).forEach(([category, movies]) => {
  movies.forEach(movie => {
    // encontra o item correspondente pelo alt do pôster
    const imgEl = Array.from(document.querySelectorAll(".item img"))
      .find(img => img.alt === movie.title);
    
    if (imgEl) {
      imgEl.addEventListener("click", () => {
        modalPoster.src = movie.poster;
        modalTitle.textContent = movie.title;
        modalDesc.textContent = movie.desc || "Descrição não disponível.";
        modal.classList.remove("hidden");
      });
    }
  });
});

// Fecha modal
closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

// === SIDEBAR + MODO ESCURO ===
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const themeBtn = document.getElementById("toggle-theme");

// Abrir sidebar
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Fechar ao clicar fora
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("active");
});

// Alternar tema
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeBtn.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("dark-mode", isDark);
});

// Carregar preferência salva
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("dark-mode") === "true";
  if (savedTheme) {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Modo Claro";
  }
});
