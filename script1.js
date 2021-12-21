window.onload = () => {
  //  1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
  let buttonShowme = document.querySelector('.showme')
  console.log(buttonShowme)

  // 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
  let idHi = document.querySelector('#pillado')
  console.log(idHi)

  // 1.3 Usa querySelector para mostrar por consola todos los p
  let todosP = document.querySelectorAll('p')
  console.log(todosP)

  // 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
  let pokemonclass = document.querySelectorAll('.pokemon')
  console.log(pokemonclass)
  // 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
  // data-function="testMe".
  let dataFuncionAll = document.querySelectorAll('[data-function="testMe"]')
  console.log(dataFuncionAll)

  // 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
  // data-function="testMe".
  //   let dataFuncion3 = document.querySelectorAll(
  //     '[data-function="testMe"]:nth-child (3)',
  //   )
  //   console.log(dataFuncion3)
  console.log(dataFuncionAll[2])
  console.log(dataFuncionAll[2].innerText)
}
