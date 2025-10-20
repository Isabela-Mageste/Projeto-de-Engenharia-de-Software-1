/* === CONTEÚDO DO FEED SOCIAL === */

// Mock de dados (simulando a resposta de uma API)
const mockFeedData = {
    posts: [
        {
            type: "video",
            user: "ana Faria limer",
            nickname: "@Anafalim",
            media_content: "Interestelar é espetacular",
            media_url: "https://http2.mlstatic.com/D_NQ_NP_610800-MLB81646158652_012025-O.webp ",
            movie_title: "Interestelar",
            sinopse: " As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
        },
        {
            type: "comment",
            user: "GatinhaEspacial123",
            nickname: "@GatinhaEspacial:",
            content: "Gostei muito do filme -As meninas Malvadas-. acho que ..."
        },
        {
            type: "photo",
            user: "Alana Mendes",
            nickname: "@Alamen",
            media_url: "https://cinepop.com.br/wp-content/uploads/2024/11/como-treinar-seu-dragao-live-action.jpg",
            media_content: "Em breve: Como treinar seu dragão"
        }, {
            type: "video",
            user: "ana Faria limer",
            nickname: "@Anafalim",
            media_content: "Como eu era antes desse filme",
            media_url: "https://i.ytimg.com/vi/aO7f5h8IYHw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCyUb_IqHv3kZ5MKL_ueqGJYOJ72A",
            movie_title: "Como eu era antes de você",
            sinopse: " De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico."
        },
        {
            type: "video",
            user: "ana Faria limer",
            nickname: "@Anafalim",
            media_content: "O Filme de terror mais terrivel  ",
            media_url: "https://wallpapers.com/images/hd/annabelle-background-y7umu77k214vq5rt.jpg",
            movie_title: "Anabelle 2",
            sinopse: " John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca vintage. No entanto, a alegria do casal não dura muito. Uma noite terrível, membros de uma seita satânica invadem a casa do casal em um ataque violento. Ao tentarem invocar um demônio, eles mancham a boneca de sangue, tornando-a receptora de uma entidade do mal."
        },

        // Adicione mais posts aqui
    ],
    popular_movies: [
        { title: "Gente Grande 2", sinopse: "Comédia" },
        { title: "Bad boys", sinopse: "Ação" },
        { title: "Your name", sinopse: "Romance" }
    ]
};


const feedContainer = document.getElementById("feed-container");
const popularesContainer = document.getElementById("filmes-populares");

/**
 * Cria o HTML para um único post
 * @param {object} post - Dados do post
 * @returns {string} HTML do post
 */
const createPostHTML = (post) => {
    let postContentHTML = '';
    let postClass = '';

    switch (post.type) {
        case 'video':
            postClass = 'post-video';
            postContentHTML = `
                <div class="media-container">${post.media_content}</div>
                <div class="post-info-card">
                    <h3 class="movie-title">${post.movie_title}</h3>
                    <p class="sinopse">${post.sinopse}</p>
                </div>
            `;
            postClass = post.type === 'video' ? 'post-video' : 'post-photo';
            postContentHTML = `
                <div class="media-container">
                    <img class="post-media-img" src="${post.media_url}" alt="Mídia do post">
                </div>
                ${post.movie_title ? `
                    <div class="post-info-card">
                        <h3 class="movie-title">${post.movie_title}</h3>
                        <p class="sinopse">${post.sinopse}</p>
                    </div>` : ''}
            `;
            break;
        case 'comment':
            postClass = 'post-comment';
            postContentHTML = `<p>${post.content}</p>`;
            break;
        case 'photo':
            postClass = 'post-photo';
            postContentHTML = `<div class="media-container">${post.media_content}</div>`;
            postClass = post.type === 'video' ? 'post-video' : 'post-photo';
            postContentHTML = `
                <div class="media-container">
                    <img class="post-media-img" src="${post.media_url}" alt="Mídia do post">
                </div>
                ${post.movie_title ? `
                    <div class="post-info-card">
                        <h3 class="movie-title">${post.movie_title}</h3>
                        <p class="sinopse">${post.sinopse}</p>
                    </div>` : ''}
            `;
            break;
        default:
            return '';
    }

    return `
        <article class="post-card ${postClass}">
            <header class="post-header">
                <span class="user-name">${post.user}</span>
                <span class="nickname">${post.nickname}</span>
            </header>
            <div class="post-content">
                ${postContentHTML}
            </div>
        </article>
    `;
};

/**
 * Renderiza o feed completo
 * @param {object} data - Dados do feed
 */
const renderFeed = (data) => {
    if (feedContainer) {
        feedContainer.innerHTML = data.posts.map(createPostHTML).join('');
    }

    if (popularesContainer) {
        const popularHTML = data.popular_movies.map(movie => `
            <div class="filme-popular-card">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="sinopse">${movie.sinopse}</p>
            </div>
        `).join('');
        
        // Mantém o título "Filmes mais populares"
        popularesContainer.innerHTML = `<h2>Filmes mais populares</h2>${popularHTML}`;
    }
};

// Simulação de carregamento de dados (substitua por um fetch real se usar um JSON)
window.addEventListener("DOMContentLoaded", () => {
    // Aqui você usaria 'fetch("feed.json").then(...)' se tivesse um arquivo JSON real.
    // Usando o mock para demonstração:
    renderFeed(mockFeedData);
});