// Exibindo dados de contato e projetos da ONG
document.getElementById('telefone').textContent = ongData.contato.telefone;
document.getElementById('email').textContent = ongData.contato.email;
document.getElementById('endereco').textContent = ongData.contato.endereco;

const projetosDiv = document.getElementById('lista-projetos');
ongData.projetos.forEach(projeto => {
    const projetoElemento = document.createElement('div');
    projetoElemento.innerHTML = `<h3>${projeto.titulo}</h3><p>${projeto.descricao}</p>`;
    projetosDiv.appendChild(projetoElemento);
});
