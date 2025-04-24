// URL do endpoint da API para o trigo
const url = 'https://agro-business-api.p.rapidapi.com/wheat'; 

// Definindo as opções para a requisição
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '63af5e3afemsh1b446ff284b2421p179fe4jsnc43ed4405e4d', // Sua chave API
        'X-RapidAPI-Host': 'agro-business-api.p.rapidapi.com' // O host da API
    }
};

// Função assíncrona para atualizar os preços
async function atualizarPrecos() {
    try {
        const response = await fetch(url, options);

        // Verificando se a resposta da API foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

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
        if (data && data.price) {
            document.getElementById(mapa.trigo).textContent = `R$ ${parseFloat(data.price).toFixed(2)}`;
        } else {
            document.getElementById(mapa.trigo).textContent = 'N/D';
        }

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        alert('Erro ao buscar dados. Verifique sua chave de API e a URL da API.');
        // Caso ocorra erro, mostra 'Erro' nos preços
        const mapa = {
            trigo: 'preco-trigo',
            soja: 'preco-soja',
            milho: 'preco-milho',
            feijao: 'preco-feijao',
            arroz: 'preco-arroz',
            cevada: 'preco-cevada'
        };
        for (let id of Object.values(mapa)) {
            document.getElementById(id).textContent = 'Erro';
        }
    }
}

// Executa a função quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', atualizarPrecos);
