// Função para gerar preços aleatórios para simulação
function gerarPrecoAleatorio(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Função para obter dados simulados
function obterDadosSimulados() {
    return {
        trigo: gerarPrecoAleatorio(81, 83),
        soja: gerarPrecoAleatorio(129, 132),
        milho: gerarPrecoAleatorio(79, 82),
        feijao: gerarPrecoAleatorio(250, 254)
    };
}

// Função principal para atualizar os preços na página
function atualizarPrecos() {
    const dados = obterDadosSimulados();

    const mapa = {
        trigo: 'preco-trigo',
        soja: 'preco-soja',
        milho: 'preco-milho',
        feijao: 'preco-feijao',
    };

    for (let produto in mapa) {
        const preco = dados[produto];
        document.getElementById(mapa[produto]).textContent = `R$ ${preco}`;
    }
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarPrecos);

// Atualiza os preços a cada 10 segundos
setInterval(atualizarPrecos, 180000);
