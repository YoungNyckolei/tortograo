// URL do endpoint da API (ajustado para a API que você vai usar)
const url = 'https://plants10.p.rapidapi.com/plants/details?offset=0&limit=10'; 

// Definindo as opções para a requisição
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'plants10.p.rapidapi.com',  // O host da API
        'x-rapidapi-key': '63af5e3afemsh1b446ff284b2421p179fe4jsnc43ed4405e4d' // Sua chave de API
    }
};

// Função assíncrona para atualizar as cotações
async function atualizarPrecos() {
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Recebe a resposta da API como JSON

        // Estrutura de mapeamento para os elementos do HTML
        const mapa = {
            trigo: 'preco-trigo',
            soja: 'preco-soja',
            milho: 'preco-milho',
            feijao: 'preco-feijao',
            arroz: 'preco-arroz',
            cevada: 'preco-cevada'
        };

        // Atualiza os preços com base nos dados da API
        // Aqui você adapta o código para tratar a resposta da API que você está utilizando
        data.forEach(item => {
            // Assumindo que a API retorna informações de cada produto
            // Troque os nomes e estrutura conforme a resposta real da API
            if (item.name && mapa[item.name.toLowerCase()]) {
                document.getElementById(mapa[item.name.toLowerCase()]).textContent = `R$ ${parseFloat(item.price).toFixed(2)}`;
            }
        });
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        // Caso ocorra erro, mostra 'Erro' nos preços
        for (let id of Object.values(mapa)) {
            document.getElementById(id).textContent = 'Erro';
        }
    }
}

// Executa a função quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', atualizarPrecos);
