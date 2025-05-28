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
  "Este é o dia que o Senhor fez; nele nos alegraremos e exultaremos. - Salmos 118:24",
  "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. — Provérbios 3:5",
  "Buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas. — Mateus 6:33",
  "O Senhor é a minha luz e a minha salvação; a quem temerei? — Salmos 27:1",
  "Bendito seja o Senhor, que diariamente leva a nossa carga, o Deus que é a nossa salvação. — Salmos 68:19",
  "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade. — Salmos 145:18",
  "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos. — Filipenses 4:4",
  "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. — 1 Pedro 5:7",
  "Sede fortes e corajosos; não temais, nem vos assusteis diante deles; porque o Senhor vosso Deus é quem vai convosco. — Deuteronômio 31:6",
  "O Senhor é bom, uma fortaleza no dia da angústia; e conhece os que nele confiam. — Naum 1:7",
  "Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim. — João 14:6",
  "Se Deus é por nós, quem será contra nós? — Romanos 8:31",
  "A tua palavra é lâmpada para os meus pés e luz para o meu caminho. — Salmos 119:105",
  "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e ocultas, que não sabes. — Jeremias 33:3",
  "O Senhor é misericordioso e compassivo, tardio em irar-se e grande em benignidade. — Salmos 103:8",
  "Ele dá força ao cansado, e aumenta as forças ao que não tem nenhum vigor. — Isaías 40:29",
  "Pois eu bem sei os planos que estou projetando para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança. — Jeremias 29:11"
];

// Mostrar versículo aleatório
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

// Carregar anotação salva
function carregarAnotacao() {
  const anotacao = localStorage.getItem('devocional_anotacao');
  if (anotacao) {
    document.getElementById('anotacao').value = anotacao;
  }
}

// Função para abrir o WhatsApp com o pedido de oração
function enviarParaWhatsApp(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("whatsapp").value;
  const mensagem = document.getElementById("mensagem").value;
  
  const texto = `🙏 Pedido de Oração 🙏%0A%0A📌 Nome: ${nome}%0A📞 WhatsApp: ${numero || 'Não informado'}%0A📝 Pedido: ${mensagem}`;
  
  const numeroDestino = "5547997711907"; // seu número sem espaços e sem "+"
  const url = `https://wa.me/${numeroDestino}?text=${texto}`;
  
  window.open(url, "_blank");
}

// Executar funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  mostrarVersiculo();
  carregarAnotacao();
});
