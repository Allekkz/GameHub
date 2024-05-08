// Defina a função procurar() fora do evento de input
function procurar() {
  var filtro = document.getElementById("barra").value.toUpperCase();
  var listaJogos = document.querySelectorAll(".jogos li");

  listaJogos.forEach(function (jogo) {
    var alt = jogo.querySelector("img").getAttribute("alt").toUpperCase();
    if (alt.includes(filtro)) {
      jogo.style.opacity = "1";
      jogo.parentElement.prepend(jogo); // Move o jogo para o início da lista
    } else {
      jogo.style.opacity = "0.1";
    }
  });
}

document.getElementById("barra").addEventListener("input", function () {
  procurar(); // Chama a função procurar() quando há entrada de texto na barra
});

function baixar(link) {
  if (link && link != "LINK JOGO") {
    window.open(link);
  }
  else {
    alert("Desculpe, ainda não temos este jogo!")
  }
}

var lista = document.getElementById("lista");
lista.style.display = "none";

// autoComplete na barra
function autoComplete() {
  var barra = document.getElementById("barra");

  var alt = document.querySelectorAll(".jogos img");
  var quantidade = 0;

  lista.innerHTML = "";

  alt.forEach(img => {
    var jogo = img.getAttribute("alt").toUpperCase();
    if (jogo.toLowerCase().includes(barra.value) && barra.value != "" && barra.value.length >= 3 && barra.value.length <= 4 && quantidade < 3) {
      lista.style.display = "block";
      var li = document.createElement("li");
      li.innerHTML = jogo.charAt(0).toUpperCase() + jogo.slice(1).toLowerCase();
      lista.appendChild(li);
      li.addEventListener("click", function () {
        barra.value = this.innerHTML;
        lista.innerHTML = "";
        lista.style.display = "none";
        procurar(); // Chama a função procurar() quando um item da lista é clicado
      });

      quantidade++;
    } else if (quantidade === 0) {
      lista.style.display = "none";
    }

  });
}

//limpa as sugestões quando clica em baixar jogo!
//também um espaço para futuras propagandas...
var divBotoes = document.getElementById("jogos");
var botoes = divBotoes.querySelectorAll("button");
botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    lista.style.display = "none";

  });
});

