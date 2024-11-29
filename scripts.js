// Objeto com dados principais da ONG
const ongData = {
    nome: "Esperança e Vida",
    descricao: "ONG que ajuda pessoas com câncer em Foz do Iguaçu e Cascavel.",
    contato: {
        telefone: "(45) 3026-1400",
        email: "unican@hotmail.com.br",
        endereco: "Avenida Gramado, 749, Vila A, Foz do Iguaçu - PR"
    },
    projetos: [
        {
            titulo: "Campanha Outubro Rosa",
            descricao: "Apoio a mulheres diagnosticadas com câncer de mama."
        },
        {
            titulo: "Apoio ao Tratamento",
            descricao: "Auxílio financeiro e psicológico a pacientes em tratamento."
        }
    ]
};

// Função para exibir os dados de contato na seção de contato
function carregarContato() {
    document.getElementById("telefone").textContent = ongData.contato.telefone;
    document.getElementById("email").textContent = ongData.contato.email;
    document.getElementById("endereco").textContent = ongData.contato.endereco;
}

// Função para listar os projetos na seção de projetos
function carregarProjetos() {
    const listaProjetos = document.getElementById("lista-projetos");
    listaProjetos.innerHTML = ""; // Limpa o conteúdo existente

    ongData.projetos.forEach(projeto => {
        const projetoDiv = document.createElement("div");
        projetoDiv.classList.add("projeto-item");

        const titulo = document.createElement("h3");
        titulo.textContent = projeto.titulo;

        const descricao = document.createElement("p");
        descricao.textContent = projeto.descricao;

        projetoDiv.appendChild(titulo);
        projetoDiv.appendChild(descricao);
        listaProjetos.appendChild(projetoDiv);
    });
}

// Função principal para carregar todas as informações da ONG
function carregarInformacoes() {
    carregarContato();
    carregarProjetos();
}

// Chama a função principal ao carregar a página
document.addEventListener("DOMContentLoaded", carregarInformacoes);
