async function carregarNoticias() {
    const container = document.querySelector('.noticias-container');
    const apiKey = 'e03cb832c93743b797a3ed8df3a5db94'; // Substitua pela sua chave da NewsAPI
    const url = `https://newsapi.org/v2/everything?q=agronegócio&language=pt&pageSize=3&sortBy=publishedAt&apiKey=${apiKey}`;
  
    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();
  
      // Verifica se a API retornou erro
      if (resposta.status !== 200 || dados.status !== 'ok') {
        throw new Error(`Erro da API: ${dados.message || 'Falha ao carregar dados.'}`);
      }
  
      // Caso não haja artigos, exibe mensagem
      if (!dados.articles || dados.articles.length === 0) {
        container.innerHTML = '<p>Não há notícias disponíveis no momento.</p>';
        return;
      }
  
      container.innerHTML = ''; // Limpa o conteúdo anterior
  
      dados.articles.forEach(noticia => {
        const box = document.createElement('div');
        box.classList.add('noticia-item');
  
        box.innerHTML = `
          ${noticia.urlToImage ? `<img src="${noticia.urlToImage}" alt="Imagem da notícia" style="max-width: 100%; height: auto; margin-bottom: 10px;">` : ''}
          <h4>${noticia.title}</h4>
          <p>${noticia.description || ''}</p>
          <a href="${noticia.url}" target="_blank">Leia mais</a>
        `;
  
        container.appendChild(box);
      });
    } catch (erro) {
      container.innerHTML = '<p>Erro ao carregar notícias.</p>';
      console.error('Erro ao buscar notícias:', erro);
    }
  }
  
  carregarNoticias();
  