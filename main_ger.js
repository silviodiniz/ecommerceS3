'use strict'

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => {
  clearFields()
  document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_product')) ?? []
const setLocalStorage = (dbProduct) => localStorage.setItem('db_product', JSON.stringify(dbProduct))
  
// CRUD: Create, Read, Up-date, Delete

// Delete

const deleteProduct = (index) => {
  const dbProduct = readProduct()
  dbProduct.splice(index, 1)
  setLocalStorage(dbProduct)
}

// splice = fatiar = de várias infos (com os index) no array vou fatiar e pegar sou uma delas que - no caso - e ela mesma.
//  1 = só vai avançar 1 casa, ou seja, excluir só um.//

// Up-date

const updateProduct = (index, product) => {
  const dbProduct = readProduct()
  dbProduct[index] = product
  setLocalStorage(dbProduct)
}  

// Read
const readProduct = () => getLocalStorage()

// Create
const createProduct = (product) => {
  const dbProduct = getLocalStorage()
  dbProduct.push (product)
  setLocalStorage(dbProduct)
}

const isValidFields = () => {
  return document.getElementById('form').reportValidity()
}

// para validar se as regras impostas no html foram cumpridas. Dados do produto são todos requeridos, i.e, não podem ficar sem definições.

// Interação com o usuário que cadastrará novos produtos

  const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
  }

  const saveProduct = () => {
    debugger
    if (isValidFields()) {
      const product = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        imagem: document.getElementById('imagem').value,
        categoria: document.getElementById('categoria').value,
        descricao: document.getElementById('descricao').value
    }
    const index = document.getElementById('nome').dataset.index 
    if (index == 'new') {  
      createProduct(product)
      updateTable()
      closeModal()
    } else {
        updateProduct(index, product)
        updateTable()
        closeModal()
    }
   }
  }  

  const createRow = (product, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
      <td>${product.nome}</td>
      <td>${product.preco}</td>
      <td>${product.imagem}</td>
      <td>${product.categoria}</td>
      <td>${product.descricao}</td>
      <td>                  
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">Excluir</button>
      </td>          
   `
    document.querySelector('#tableProduct>tbody').appendChild(newRow)
  }

  // Criei 1 nova linha vazia, preenchi ela com os dados (os 'tds') do produto e depois colquei tudo no tbody.
  // Até a linha 91 os dados estavam só na memória e a partir da linha 92 ela faz par do (html) DOM.
  
  const clearTable = () => {
    const rows = document.querySelectorAll('#tableProduct>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
  }


  const updateTable = () => {
    const dbProduct = readProduct()
    clearTable()
    dbProduct.forEach(createRow)
  }

// Update é isso: lê os dados e cria uma linha

const fillFields = (product) => {
  document.getElementById('nome').value = product.nome
  document.getElementById('preco').value = product.preco
  document.getElementById('imagem').value = product.imagem
  document.getElementById('categoria').value = product.categoria
  document.getElementById('descricao').value = product.descricao
  document.getElementById('nome').dataset.index = product.index
}

const editProduct = (index) => {
  const product = readProduct()[index]
  product.index = index
  fillFields(product)
  openModal()
}

const editDelete= (event) => {
  if (event.target.type == 'button') {

    const [action, index] = event.target.id.split('-')

    if (action == 'edit') {
       editProduct(index)
    } else {
        const product = readProduct()[index]
        const response = confirm(`Deseja realmente excluir o produto ${product.nome}?`)
        if (response) {
            deleteProduct(index)
            updateTable()
        }
    }
 }
}

updateTable()

// Eventos

document.getElementById('cadastrarProduto').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvarProduto').addEventListener('click', saveProduct)

document.querySelector('#tableProduct>tbody').addEventListener('click', editDelete)

document.getElementById('cancelarProduto').addEventListener('click', closeModal)

