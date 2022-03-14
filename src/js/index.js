/* Quando clicar no Pokémon da listagem, temos que esconder o cartão Pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso precisamos trabalhar com dois elementos:
1- Listagem
2- Cartão pokémon.

Presisamos criar duas variáveis no JS, para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokémons

- Remover a class aberto só do cartão que está aberto
- Ao clicar em um Pokémon da listagem, pegamos o ID do pokémon para saber qual cartão mostrar
- Remover a class ativo que marca o Pokémon selecionado
- Adicionar a class ativo no item da lista selecionado*/

// Criando as variáveis 
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCartao = document.querySelectorAll('.cartao-pokemon')