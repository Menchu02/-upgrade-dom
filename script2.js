// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
window.onload = () => {
  const body = document.querySelector('body')
  let div1 = document.createElement('div')
  body.appendChild(div1)

  let div2 = document.createElement('div')
  div2.innerText = 'p' // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
  body.appendChild(div2)

  let divNuevo = document.createElement('div') // 2.2 Inserta dinamicamente en un html un div que contenga un <p></p> con javascript.
  divNuevo.innerHTML = ' <p>Un párrafo</p>'
  body.appendChild(divNuevo)

  let div3 = document.createElement('div') // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
  for (let i = 0; i < 6; i++) {
    let p = document.createElement('p')
    p.innerText = i + 1
    div3.appendChild(p)
  }
  body.appendChild(div3)

  let pDinamico = document.createElement('p')
  pDinamico.innerText = 'Soy Dinámico' // 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
  body.appendChild(pDinamico)

  let h2 = document.querySelector('.fn-insert-here')
  h2.innerText = 'Wubba Lubba dub dub' // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

  /**
   * <div>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul>
    </div>
   */
  const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'] // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
  let contenedorUl = document.createElement('div')
  let ul = document.createElement('ul')
  apps.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item
    ul.appendChild(li)
  })
  contenedorUl.appendChild(ul)
  body.appendChild(contenedorUl)

  let allToRemove = document.querySelectorAll('.fn-remove-me') // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
  allToRemove.forEach((item) => {
    item.remove()
  })

  //   let p = document.createElement('p')
  //   // 	Recuerda que no solo puedes insertar elementos con .appendChild.
  //   let myDiv = document.querySelector('div + div')
  //   myDiv.insertAdjacentElement('beforebegin', p)

  let allDivs = document.querySelectorAll('div') // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
  let pConTexto = document.createElement('p')
  pConTexto.innerText = 'voy en mediooooo'
  body.insertBefore(pConTexto, allDivs[1])

  let myDiv2 = document.querySelectorAll('.fn-insert-here') // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
  myDiv2.forEach((item) => {
    let p2 = document.createElement('p')
    p2.innerText = ' Voy dentro'
    item.appendChild(p2)
  })
}
let getProducts = async () => {
  let respuesta = await fetch('https://fakestoreapi.com/products/')
  let data = await respuesta.json()
  console.log(data)
}
getProducts()
