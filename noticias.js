async function carregarNoticias() {
    const container = document.querySelector('.noticias-container');
    const apiKey = 'SUA_API_KEY_AQUI'; // substitua pela sua chave da NewsAPI
    const url = `https://newsapi.org/v2/top-headlines?country=br&pageSize=3&apiKey=${apiKey}`;
  
    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
  
      container.innerHTML = ''; // limpa antes de adicionar
  
      dados.articles.forEach(noticia => {
        const box = document.createElement('div');
        box.classList.add('noticia-item');
  
        box.innerHTML = `
          <h4>${noticia.title}</h4>
          <p>${noticia.description || ''}</p>
          <a href="${noticia.url}" target="_blank">Leia mais</a>
        `;
  
        container.appendChild(box);
      });
    } catch (erro) {
      container.innerHTML = '<p>Erro ao carregar notícias.</p>';
      console.error(erro);
    }
  }
  
  carregarNoticias();
  