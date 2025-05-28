// Ativar/desativar modo escuro
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Versículos para exibir (você pode trocar por uma API depois se quiser)
const versiculos = [
  "O Senhor é o meu pastor; nada me faltará. — Salmos 23:1",
  "Tudo posso naquele que me fortalece. — Filipenses 4:13",
  "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. — Salmos 37:5",
  "Não se turbe o vosso coração; credes em Deus. — João 14:1",
  "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração. — Romanos 12:12",
  "Não se turbe o vosso coração, mas acredite em Deus. - João 14:1",
  "E nos fez reinos e sacerdotes para o nosso Deus; e reinarão sobre a terra. - Apocalipse 5:10",
  "A fé é a certeza do que esperamos, e a prova do que não vemos. - Hebreus 11:1",
  "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes. - Jeremias 33:3",
  "Eis que trarei a ela saúde e cura, e os sararei; e lhes revelarei abundância de paz e segurança. - Jeremias 33:6",
  "E a paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente, em Cristo Jesus. - Filipenses 4:7",
  "Não temas, porque eu estou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça. - Isaías 41:10",
  "O amor é paciente, o amor é bondoso. O amor não é invejoso, nem orgulhoso, nem vaidoso, nem rude, nem egoísta, nem se irrita, nem guarda rancor. - 1 Coríntios 13:4",
  "Este é o dia que o Senhor fez; nele nos alegraremos e exultaremos. - Salmos 118:24"
];

// Selecionar versículo aleatório do dia
function mostrarVersiculo() {
  const texto = document.getElementById('versiculo-texto');
  const aleatorio = Math.floor(Math.random() * versiculos.length);
  texto.textContent = versiculos[aleatorio];
}

// Salvar anotação localmente
function salvarAnotacao() {
  const anotacao = document.getElementById('anotacao').value;
  localStorage.setItem('devocional_anotacao', anotacao);
  alert('Anotação salva com sucesso!');
}

// Carregar anotação salva (caso exista)
function carregarAnotacao() {
  const anotacao = localStorage.getItem('devocional_anotacao');
  if (anotacao) {
    document.getElementById('anotacao').value = anotacao;
  }
}

// Simular envio de pedido de oração
function enviarPedido() {
  const pedido = document.getElementById('pedido').value;
  const confirmacao = document.getElementById('confirmacao');
  
  if (pedido.trim() === '') {
    confirmacao.textContent = "Por favor, escreva seu pedido.";
    confirmacao.style.color = "red";
    return;
  }

  confirmacao.textContent = "Pedido enviado com fé! 🙏";
  confirmacao.style.color = "#388e3c";
  document.getElementById('pedido').value = '';
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  mostrarVersiculo();
  carregarAnotacao();
});
