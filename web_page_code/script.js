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
    title: "Titanic"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Diário de uma Paixão"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "Orgulho e Preconceito"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "Antes do Amanhecer"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "La La Land"
  },
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "Como Eu Era Antes de Você"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "Um Amor para Recordar"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "Cartas para Julieta"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "P.S. Eu Te Amo"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "Simplesmente Acontece"
  }
],

  Ação: [
  {
    poster: "https://i.pinimg.com/1200x/21/2c/0c/212c0c1da8e6b21d12fa94b5e4f1a2cc.jpg",
    title: "John Wick 4"
  },
  {
    poster: "https://i.pinimg.com/1200x/40/42/00/404200d6a15cb2b930e8e341da46243f.jpg",
    title: "Missão Impossível 7"
  },
  {
    poster: "https://i.pinimg.com/1200x/40/44/59/4044591e71306098950b4f7ea0450fec.jpg",
    title: "Velozes e Furiosos 10"
  },
  {
    poster: "https://i.pinimg.com/736x/f1/08/1b/f1081b4b351c2df41bc3c9ea35ce1a7a.jpg",
    title: "The Batman"
  },
  {
    poster: "https://i.pinimg.com/1200x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
    title: "Top Gun: Maverick"
  },
  {
    poster: "https://i.pinimg.com/736x/fb/82/79/fb8279258020ae13c5a8c9d215bc199f.jpg",
    title: "Homem-Aranha: Sem Volta para Casa"
  },
  {
    poster: "https://i.pinimg.com/736x/62/dc/ff/62dcff042184966c44f582ce563633d4.jpg",
    title: "Duna"
  },
  {
    poster: "https://i.pinimg.com/736x/d4/1f/b8/d41fb8b72caf4ea9c6aa7e351c003cc7.jpg",
    title: "007 - Sem Tempo para Morrer"
  },
  {
    poster: "https://i.pinimg.com/1200x/48/26/64/482664fd2234133220dbc52313288bc8.jpg",
    title: "The Gray Man"
  },
  {
    poster: "https://i.pinimg.com/1200x/38/0d/9e/380d9ef98119bc7a505d49d59bae02f9.jpg",
    title: "Bullet Train"
  }
],

  Terror: [
  {
    poster: "https://i.pinimg.com/736x/8d/a8/5f/8da85fcd4bdc3fff02b736064a76d092.jpg",
    title: "Invocação do Mal 3"
  },
  {
    poster: "https://i.pinimg.com/1200x/aa/49/e0/aa49e05ce787b72bc53401ceff3ef674.jpg",
    title: "Corra!"
  },
  {
    poster: "https://i.pinimg.com/1200x/82/68/ee/8268eef4cb32f82fd1ddadc4702177a1.jpg",
    title: "Hereditário"
  },
  {
    poster: "https://i.pinimg.com/1200x/d4/45/0a/d4450ad93de703c451b97ef6049f4b9c.jpg",
    title: "O Iluminado"
  },
  {
    poster: "https://i.pinimg.com/1200x/37/03/d8/3703d8526415f4c5406318ed13122a86.jpg",
    title: "O Exorcista"
  },
  {
    poster: "https://i.pinimg.com/1200x/a4/ca/6a/a4ca6abcd42c0422c41583c9e6228b04.jpg",
    title: "It: A Coisa"
  },
  {
    poster: "https://i.pinimg.com/736x/e1/c6/df/e1c6df8b26c08db545f1dc67a07390fa.jpg",
    title: "O Babadook"
  },
  {
    poster: "https://i.pinimg.com/1200x/58/d8/ed/58d8ed95e93f64e315acb80b0adf1094.jpg",
    title: "Os Outros"
  },
  {
    poster: "https://i.pinimg.com/736x/3b/36/99/3b3699ce5d3a8459fd17dcece60c2c7a.jpg",
    title: "O Chamado"
  },
  {
    poster: "https://i.pinimg.com/1200x/d2/c0/db/d2c0db66a87cc7884c84705fd0426870.jpg",
    title: "Atividade Paranormal"
  }
],
Suspense: [
  {
    poster: "https://i.pinimg.com/736x/ff/be/6b/ffbe6bac1fdeeb81df8d1c53d5bf6fe8.jpg",
    title: "Garota Exemplar"
  },
  {
    poster: "https://i.pinimg.com/1200x/6d/43/a7/6d43a79bc771e1c8bce4416743650b98.jpg",
    title: "Cidade de Deus"
  },
  {
    poster: "https://i.pinimg.com/736x/9a/79/2a/9a792a2e8dff8fd8e839a297cc751163.jpg",
    title: "Seven: Os Sete Crimes Capitais"
  },
  {
    poster: "https://i.pinimg.com/736x/96/74/91/9674914bec5b4534737145a23fc92219.jpg",
    title: "Os Suspeitos"
  },
  {
    poster: "https://i.pinimg.com/1200x/39/dd/54/39dd54dd3b0e8d73c0cbe1eb27e25fac.jpg",
    title: "Zodíaco"
  },
  {
    poster: "https://i.pinimg.com/1200x/eb/eb/ea/ebebea709cde5db370c7146a28d833ea.jpg",
    title: "Psicose"
  },
  {
    poster: "https://i.pinimg.com/1200x/54/c5/06/54c506983fa4efb5fc71af49810b8f55.jpg",
    title: "O Silêncio dos Inocentes"
  },
  {
    poster: "https://i.pinimg.com/1200x/e6/b5/a7/e6b5a79c5410e4a171135078d225a404.jpg",
    title: "Os Infiltrados"
  },
  {
    poster: "https://i.pinimg.com/1200x/6d/d9/38/6dd9385620437d27c9d049f35a691b4c.jpg",
    title: "Prisoners"
  },
  {
    poster: "https://i.pinimg.com/1200x/41/e5/10/41e5100562b57c8ba770dfce525a164b.jpg",
    title: "Memórias de um Assassino"
  }
],
Animação:
[
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "A Viagem de Chihiro"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "O Rei Leão"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Toy Story"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "Procurando Nemo"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "Frozen"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "Shrek"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "Meu Amigo Totoro"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "Os Incríveis"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "Spirited Away"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "Wall-E"
  }
],
Aventura: [
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "Indiana Jones"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "Jurassic Park"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Piratas do Caribe"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "Jumanji"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "Avatar"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "O Senhor dos Anéis"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "As Crônicas de Nárnia"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "King Kong"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "Mogli: O Menino Lobo"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "A Ilha do Tesouro"
  }
],
Scifi: [
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "Interestelar"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "Blade Runner 2049"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Matrix"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "O Quinto Elemento"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "2001: Uma Odisseia no Espaço"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "Star Wars: Episódio IV"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "Distrito 9"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "Contato"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "O Predador"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "Alien: O Oitavo Passageiro"
  }
],
Medieval: [
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "O Nome da Rosa"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "Coração de Cavaleiro"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Excalibur"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "Robin Hood: O Príncipe dos Ladrões"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "Braveheart"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "O Senhor dos Anéis: A Sociedade do Anel"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "Joana D'Arc"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "Rei Arthur"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "As Cruzadas"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "O Sétimo Selo"
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
