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
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "John Wick 4"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "Missão Impossível 7"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Velozes e Furiosos 10"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "The Batman"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "Top Gun: Maverick"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "Homem-Aranha: Sem Volta para Casa"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "Duna"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "007 - Sem Tempo para Morrer"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "The Gray Man"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "Bullet Train"
  }
],

  Terror: [
  {
    poster: "https://i.pinimg.com/736x/1b/6a/5d/1b6a5dd765535ae8d703c6e282b2c5f4.jpg",
    title: "Invocação do Mal 3"
  },
  {
    poster: "https://i.pinimg.com/736x/a5/db/1c/a5db1c46a01a5e26115ed1690d95bbd4.jpg",
    title: "Corra!"
  },
  {
    poster: "https://i.pinimg.com/1200x/91/8b/88/918b88576de32abf6e791aee60be5fb5.jpg",
    title: "Hereditário"
  },
  {
    poster: "https://i.pinimg.com/736x/fd/f6/58/fdf65814318d1453a810544cecedb345.jpg",
    title: "O Iluminado"
  },
  {
    poster: "https://i.pinimg.com/1200x/59/13/7d/59137ddf8f480cf388efed55081fc3a6.jpg",
    title: "O Exorcista"
  },
  {
    poster: "https://i.pinimg.com/736x/46/6f/97/466f97e7a5c96a64eef86d4e3d418a70.jpg",
    title: "It: A Coisa"
  },
  {
    poster: "https://i.pinimg.com/736x/60/89/7d/60897d93b3bdc3373fc99b244d96e784.jpg",
    title: "O Babadook"
  },
  {
    poster: "https://i.pinimg.com/1200x/3c/9e/e5/3c9ee5c14f5a84b5ff8b5b7dad0b60ee.jpg",
    title: "Os Outros"
  },
  {
    poster: "https://i.pinimg.com/1200x/56/84/38/568438a46ff9bd56f4372b616960a3b2.jpg",
    title: "O Chamado"
  },
  {
    poster: "https://i.pinimg.com/736x/b7/71/2b/b7712b05ce4965623926a4a1543ed2ff.jpg",
    title: "Atividade Paranormal"
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
