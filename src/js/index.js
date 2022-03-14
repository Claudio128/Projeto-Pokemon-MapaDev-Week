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

// Presisamos criar duas variáveis no JS, para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCartao = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //- Remover a class aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //- Ao clicar em um Pokémon da listagem, pegamos o ID do pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- Remover a class ativo que marca o Pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //- Adicionar a class ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})