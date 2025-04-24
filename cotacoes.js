// URL do endpoint da API
const url = 'https://agro-business-api.playground/apiendpoint_73dcd2cb-7e79-475e-a06c-d4f38160cad6'; 

// Definindo as opções para a requisição
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '63af5e3afemsh1b446ff284b2421p179fe4jsnc43ed4405e4d', // Substitua pela sua chave API
        'X-RapidAPI-Host': 'agro-business-api.playground' // O host da API
    }
};

// Função assíncrona para atualizar os preços
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
        for (let produto in mapa) {
            const preco = data.find(item => item.commodity.toLowerCase().includes(produto)); // Atualize conforme a estrutura da API
            if (preco) {
                document.getElementById(mapa[produto]).textContent = `R$ ${parseFloat(preco.price).toFixed(2)}`; // Formatação de preço
            } else {
                document.getElementById(mapa[produto]).textContent = 'N/D'; // Caso não encontre o produto
            }
        }

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