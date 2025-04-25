async function carregarNoticias() {
    const container = document.querySelector('.noticias-container');
  
    // Criando um conjunto de notícias fictícias
    const noticiasFicticias = [
      {
        title: 'A TortoGrão lança novo produto agrícola inovador',
        description: 'A cooperativa TortoGrão acaba de lançar um novo produto que promete revolucionar o mercado agrícola...',
        url: 'https://www.tortograo.com.br/noticias/produto-inovador',
        urlToImage: 'https://via.placeholder.com/600x400?text=Imagem+1' // Imagem fictícia
      },
      {
        title: 'Copa Torto 2025: Participação recorde de equipes!',
        description: 'A Copa Torto, um dos maiores eventos de esportes da região, teve uma participação recorde de equipes este ano...',
        url: 'https://www.tortograo.com.br/noticias/copa-torto-2025',
        urlToImage: 'https://via.placeholder.com/600x400?text=Imagem+2' // Imagem fictícia
      },
      {
        title: 'Inovação no campo: Tecnologia e sustentabilidade se encontram na TortoGrão',
        description: 'A TortoGrão investe cada vez mais em tecnologias sustentáveis para garantir um futuro melhor para o campo...',
        url: 'https://www.tortograo.com.br/noticias/inovacao-tecnologia-sustentabilidade',
        urlToImage: 'https://via.placeholder.com/600x400?text=Imagem+3' // Imagem fictícia
      }
    ];
  
    try {
      // Limpa o conteúdo anterior
      container.innerHTML = '';
  
      // Itera sobre as notícias fictícias e cria os elementos HTML
      noticiasFicticias.forEach(noticia => {
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
      console.error('Erro ao carregar as notícias fictícias:', erro);
    }
  }
  
  carregarNoticias();
  