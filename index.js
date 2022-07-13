const productsCart = [
    {
        id: 1,
        name: "banana kg",
        price: 5.99
    },
    {
        id: 2,
        name: "laranja kg",
        price: 4.59
    },
    {
        id: 3,
        name: "cebola kg",
        price: 3.99
    },
    {
        id: 4,
        name: "biscoito",
        price: 2.99
    },
    {
        id: 5,
        name: "arroz 2kg",
        price : 8.99
    }
]


let tagMain   = document.createElement("main")

let tagH1 = document.createElement("h1")
tagH1.innerText = "Virtual Market"
tagH1 = tagMain.appendChild(tagH1)

let tagUl     = document.createElement("ul")
tagUl = tagMain.appendChild(tagUl)


let tagSection = document.createElement("section")
tagSection = tagMain.appendChild(tagSection)

let tagLista = document.createElement("li")
tagUl.appendChild(tagLista)
let tagP = document.createElement("p")
tagP.innerText = "Item"
let tagSpan = document.createElement("span")
tagSpan.innerText = "Valor"
tagLista.appendChild(tagP)
tagLista.appendChild(tagSpan)

tagLista.style = "background: #000; color: #fff;"


function listarProduto(productsCart){
    for(let i = 0; i < productsCart.length;i++){
        let produto = productsCart[i]
        let liCriado = criarLi(produto)
    }
}

listarProduto(productsCart)

function criarLi(produto){
    let nome = produto.name
    let preço = produto.price

    let tagLi = document.createElement("li")
    let tagName = document.createElement("p")
    let tagPreco = document.createElement("span")

    tagName.innerText = nome
    tagPreco.innerText = `R$ ${preço}`.replace(".",",")

    tagLi.appendChild(tagName)
    tagLi.appendChild(tagPreco)
    tagLi = tagUl.appendChild(tagLi)
}



function somando (productsCart){
    let soma = 0
    for(let i = 0;i<productsCart.length;i++){        
        let produto = productsCart[i]
        soma += produto.price
    }
    return soma
}

let newDiv = document.createElement("div")
tagSection.appendChild(newDiv)
let tagTotal = document.createElement("p")
tagTotal.innerText = "Total"
newDiv.appendChild(tagTotal)
let tagSoma = document.createElement("span")
tagSoma.innerText = `R$ ${somando(productsCart).toFixed(2)}`
tagSoma = newDiv.appendChild(tagSoma)


let tagButton = document.createElement("button")
tagButton.innerText = "Finalizar"
tagButton = tagMain.appendChild(tagButton)


let root = document.getElementById("root")

tagMain = root.appendChild(tagMain)