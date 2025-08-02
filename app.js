//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Você deve criar um sorteio de amigos secretos, onde os nomes dos amigos serão inseridos em uma lista.
// Após inserir os nomes, você poderá sortear um amigo secreto aleatoriamente.
// O nome sorteado será exibido na tela e removido da lista de amigos.
// Você também poderá limpar a lista de amigos a qualquer momento.
let lista_NomesSorteados = [];
function campo (tag, id, texto){
    let elemento = document.querySelector(tag);
    elemento.id = id;
    elemento.innerHTML = texto;
}

// Sorteia um amigo secreto aleatoriamente
// Utiliza Math.random() para gerar um índice aleatório da lista de amigos
// Exibe o nome sorteado na tela e remove o nome da lista
// Atualiza a lista exibida na tela
let indexDoSorteio = 0;
function sortearAmigo(){
   if (lista_NomesSorteados.length === 0) {
       alert("Todos os amigos secretos foram sorteados!");
       document.getElementById('resultado').style.display = "none";
       document.getElementById('listaAmigos').style.display = "none";
       return;
   }
   indexDoSorteio = Math.floor(Math.random() * lista_NomesSorteados.length);
   let nomeSorteado = lista_NomesSorteados[indexDoSorteio];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `O amigo secreto sorteado é: <span style="color: purple;">${nomeSorteado}</span>`;
   resultado.style.display = "block";
   resultado.style.color = "purple";
   lista_NomesSorteados.splice(indexDoSorteio, 1); 
   exibirLista();
   limparCaixadeTexto();
   document.getElementById('listaAmigos').style.display = "none";

   if (lista_NomesSorteados.length === 1){
           resultado.innerHTML = `O amigo secreto sorteado é: <span style="color: purple;">${nomeSorteado}</span>`;
         resultado.style.display = "block";
         alert("Apenas um amigo secreto restante! Você pode limpar a lista ou sortear novamente.");
   }

   // Se a lista ficou vazia após o sorteio, mostra o alerta
   if (lista_NomesSorteados.length === 0) {
       alert("Todos os amigos secretos foram sorteados!");
       document.getElementById('resultado').style.display = "none";
       document.getElementById('listaAmigos').style.display = "none";
   }
}

// Adiciona um amigo à lista de amigos
// Verifica se o campo de entrada está vazio e exibe um alerta se necessário
// Adiciona o nome à lista e exibe a lista atualizada
function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    lista_NomesSorteados.push(nome);
    let listaa = document.getElementById('listaAmigos');
    exibirLista();
    limparCaixadeTexto();
    
}

// Exibi os elementos da lista de amigos na tela
function exibirLista() {
    let listaa = document.getElementById('listaAmigos');
    listaa.innerHTML = "";
    lista_NomesSorteados.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        li.style.color = "black";
        listaa.appendChild(li);
    });
    listaa.style.display = "block";
}

// Limpa a lista de amigos e exibe uma mensagem
function limparLista() {
    lista_NomesSorteados = [];
    exibirLista();
}

// Limpa o campo de entrada de texto
function limparCaixadeTexto() {
    let input = document.querySelector("input");
    input.value = "";
}