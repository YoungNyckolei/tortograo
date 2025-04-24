const url = 'https://agriconomie-market-prices.p.rapidapi.com/commodities?country=br'; // Exemplo de endpoint
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SUA_CHAVE_API_AQUI',
        'X-RapidAPI-Host': 'agriconomie-market-prices.p.rapidapi.com'
    }
};

async function atualizarPrecos() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Supondo que a estrutura de dados tenha nomes das commodities
        const mapa = {
            trigo: 'preco-trigo',
            soja: 'preco-soja',
            milho: 'preco-milho',
            feijao: 'preco-feijao',
            arroz: 'preco-arroz',
            cevada: 'preco-cevada'
        };

        for (let produto in mapa) {
            const preco = data.find(item => item.name.toLowerCase().includes(produto));
            if (preco) {
                document.getElementById(mapa[produto]).textContent = `R$ ${parseFloat(preco.price).toFixed(2)}`;
            } else {
                document.getElementById(mapa[produto]).textContent = 'N/D';
            }
        }

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        for (let id of Object.values(mapa)) {
            document.getElementById(id).textContent = 'Erro';
        }
    }
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarPrecos);
