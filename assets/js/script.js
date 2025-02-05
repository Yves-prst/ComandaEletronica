const productsData = {
    0: { name: "Tapioca de Carne seca", price: 19.50 },
    1: { name: "Tapioca de Calabresa", price: 10.50 },
    2: { name: "Tapioca de Carne Bovina Gourmet", price: 13.50 },
    3: { name: "Tapioca Especial", price: 13.50 },
    4: { name: "Tapioca de Frango", price: 9.50 },
    5: { name: "Tapioca de Frango c/ Catupiry", price:11.50},
    6: { name: "Tapioca de Frango c/ Cheddar", price:11.50}, 
    7: { name: "Tapioca de Frango c/ Batata Doce", price:10.50}, 
    8: { name: "Tapioca de Pizza", price:10},
    9: { name: "Tapiproteica", price:15.50},
    10: { name: "Tapiegg", price:9.50},
    11: { name: "Tapifitness", price:10.50},
    12: { name: "Tapioca de Banana c/ Canela", price:9},
    13: { name: "Tapioca de Banana Fitness", price:15}, 
    14: { name: "Tapioca de Banana ao Mel", price:10},
    15: { name: "Tapioca de Banana Gourmet", price:10.50},
    16: { name: "Tapioca de Coco", price:10.50},
    17: { name: "Tapioca da Casa", price:13.50},
    18: { name: "Tapioca de Morango", price:10.50},
    19: { name: "Tapioca Julieta e Catupiry", price:10},
    20: { name: "Tapioca de Prestígio",  price:13.50},
    21: { name: "Tapioca Romeu e Julieta", price:9.50},
    22: { name: "Copo 400ml", price:7},   
    23: { name: "Copo 500ml" ,price:8},    
    24: { name: "Garrafa 500ml", price:10},   
    25: { name: "Garrafa 1l", price:18},  
    26: { name: "Garrafa 2l", price:28},
    27: { name: "Natural", price:0},
    28: { name: "Limão", price:0},
    29: { name: "Abacaxi", price:0},
    30: { name: "Gengibre", price:0},
    31: { name: "Maracujá", price:0},      
    32: { name: "Limão, Abacaxi, Gengibre, Maracujá", price:0},
    33: { name: "Coco Verde Gelado", price:10}, 
    34: { name: "Garrafa Coco", price:12},   
    35: { name: "Água Garrafa", price:3},  
    36: { name: "Refrigerante lata", price:6},    
    37: { name: "Café Espresso Supremo Puro ou c/ Leite", price:5},    
    38: { name: "Café Melitta Filtrado Puro ou c/ Leite", price:5},    
    39: { name: "Chá Mate Quente Natural ou Sabores", price:4},      
    40: { name: "Chocolatto Espresso Levemente Adocicado", price:8},
    41: { name: "Chocolate Nestlé 100% Cacau", price:8},
    42: { name: "Achocolatado Nescau", price:5},
    43: { name: "Geladinho de Abacate", price:3.50},   
    44: { name: "Geladinho de Coco", price:3.50},   
    45: { name: "Geladinho de Chocolate", price:3.50},   
    46: { name: "Geladinho de Maracujá", price:3.50}, 
    47: { name: "Geladinho de Melancia", price:3.50},    
    48: { name: "Geladinho de Morango", price:3.50},    
    49: { name: "Geladinho de Paçoca", price:3.50},   
    50: { name: "Amendoim Doce Cricri", price:5},    
    51: { name: "Amendoim Salgado na Manteiga", price:5},    
    52: { name: "+ Cheddar", price:3},    
    53: { name: "+ Catupiry", price:3},
    54: { name: "+ Muçarela", price:3},     
    55: { name: "+ Carne Bovina", price:4},   
    56: { name: "+ Ovo", price:3},   
    57: { name: "+ Morango", price:3},     
    58: { name: "+ Chocolate", price:3},     
    59: { name: "+ Coco", price:3},  
    60: { name: "+ Leite Condensado", price:3},   
    61: { name: "+ Goiabada", price:3},   
    62: { name: "+ Tomate", price:3},    
    63: { name: "+ Banana", price:3},   
    64: { name: "+ Mel", price:3},    
    65: { name: "+ Frango" ,price:4},   
    66: { name: "+ Canela", price:0},  
    67: { name: "+ Carne Seca", price:5}, 
    68: { name: "Sem Cebola", price:0},    
    69: { name: "Sem Tomate" , price:0},  
    70: { name: "Sem orégano", price:0},   
    71: { name: "Sem orapronóbis", price:0},  
    72: { name: "Sem Gelo", price:0},
    73: { name: "Para Viagem", price:0}
}

let currentComanda = []

function hideAllProducts() {
    document.querySelectorAll('.products').forEach(div => {
        div.style.display = 'none'
    })
}

function mostarTap() {
    hideAllProducts()
    var show = document.querySelector('div#tapiocas')
    show.style.display = 'block'
    show.innerHTML = '<h1>Tapiocas</h1><br>' +
        '0 - Tapioca de Carne seca <br>'+
        '1 - Tapioca de Calabresa<br>' +
        '2 - Tapioca de Carne Bovina Gourmet<br>' +
        '3 - Tapioca Especial <br>' +
        '4 - Tapioca de Frango <br>'+    
        '5 - Tapioca de Frango c/ Catupiry <br>'+
        '6 - Tapioca de Frango c/ Cheddar <br>'+
        '7 - Tapioca de Frango c/ Batata Doce <br>'+
        '8 - Tapioca de Pizza <br>'+
        '9 - Tapiproteica <br>'+
        '10 - Tapiegg <br>'+
        '11 - Tapifitness <br>'+
        '12 - Tapioca de Banana c/ Canela<br>'+
        '13 - Tapioca de Banana Fitness <br>'+
        '14 - Tapioca de Banana ao Mel <br>'+
        '15 - Tapioca de Banana Gourmet <br>'+
        '16 - Tapioca de Coco <br>'+
        '17 - Tapioca da Casa <br>'+
        '18 - Tapioca de Morango <br>'+
        '19 - Tapioca Julieta e Catupiry <br>'+
        '20 - Tapioca de Prestígio <br>'+
        '21 - Tapioca Romeu e Julieta <br>'

}

function mostarCal() {
    hideAllProducts()
    var show = document.querySelector('div#caldo')
    show.style.display = 'block'
    show.innerHTML = '<h1>Caldo de Cana</h1><br>' +
    '22 - Copo 400ml <br>'+  
    '23 - Copo 500ml <br>'+  
    '24 - Garrafa 500ml <br>'+ 
    '25 - Garrafa 1l <br>'+ 
    '26 - Garrafa 2l <br>'+
    '<br><hr style="width: 350px"><br>'+
    '27 - Natural<br>'+
    '28 - Limão<br>'+
    '29 - Abacaxi <br>'+
    '30 - Gengibre <br>'+
    '31 - Maracujá <br>'+    
    '32 - Limão, Abacaxi, Gengibre, Maracujá <br>'

}

function mostarBeb(){
    hideAllProducts()
    var show = document.querySelector('div#bebidas')
    show.style.display = 'block'
    show.innerHTML = '<h1>Bebidas</h1><br>' +
    '33 - Coco Verde Gelado <br>'+
    '34 - Garrafa Coco <br>'+  
    '35 - Água Garrafa <br>'+
    '36 - Refrigerante lata <br>'

}

function mostarCaf(){
    hideAllProducts()
    var show = document.querySelector('div#cafe')
    show.style.display = 'block'
    show.innerHTML = '<h1>Cafés</h1><br>' +
    '37 - Café Espresso Supremo Puro ou c/ Leite <br>'+  
    '38 - Café Melitta Filtrado Puro ou c/ Leite <br>'+
    '39 - Chá Mate Quente Natural ou Sabores <br>'+   
    '40 - Chocolatto Espresso Levemente Adocicado <br>'+
    '41 - Chocolate Nestlé 100% Cacau <br>'+
    '42 - Achocolatado Nescau <br>'

}

function mostarGel(){
    hideAllProducts()
    var show = document.querySelector('div#geladinho')
    show.style.display = 'block'
    show.innerHTML = '<h1>Geladinhos</h1><br>' +
    '43 - Geladinho de Abacate <br>'+
    '44 - Geladinho de Coco <br>'+
    '45 - Geladinho de Chocolate <br>'+
    '46 - Geladinho de Maracujá <br>'+
    '47 - Geladinho de Melancia <br>'+ 
    '48 - Geladinho de Morango <br>'+  
    '49 - Geladinho de Paçoca <br>'
}

function mostarAme(){
    hideAllProducts()
    var show = document.querySelector('div#amendoim')
    show.style.display = 'block'
    show.innerHTML = '<h1>Amendoins</h1><br>' +
    '50 - Amendoim Doce Cricri <br>'+ 
    '51 - Amendoim Salgado na Manteiga <br>'  

}

function mostarAdd(){
    hideAllProducts()
    var show = document.querySelector('div#adds')
    show.style.display = 'block'
    show.innerHTML = '<h1>Adicionais</h1><br>' +
    '52 - Cheddar <br>'+   
    '53 - Catupiry <br>'+
    '54 - Muçarela <br>'+    
    '55 - Carne Bovina <br>'+  
    '56 - Ovo <br>'+
    '57 - Morango <br>'+
    '58 - Chocolate <br>'+
    '59 - Coco <br>'+ 
    '60 - Leite Condensado <br>'+ 
    '61 - Goiabada <br>'+
    '62 - Tomate <br>'+
    '63 - Banana <br>'+
    '64 - Mel <br>'+    
    '65 - Frango <br>'+
    '66 - Canela <br>'+
    '67 - Carne Seca <br>'
}

function mostarObs(){
    hideAllProducts()
    var show = document.querySelector('div#obs')
    show.style.display = 'block'
    show.innerHTML = '<h1>Observações</h1><br>' +
    '68 - Sem Cebola <br>'+    
    '69 - Sem Tomate <br>'+
    '70 - Sem orégano <br>'+ 
    '71 - Sem orapronóbis <br>'+
    '72 - Sem Gelo <br>'+
    '73 - Para Viagem <br>'
}

function limparTela(){
    hideAllProducts()
}

function addProduct() {
    const code = parseInt(document.getElementById('productCode').value)

    if (productsData[code]) {
        const product = {
            code: code,
            name: productsData[code].name,
            price: productsData[code].price,
        }

        currentComanda.push(product)

        // Atualiza o texto exibido na tela
        const txt = document.querySelector('div#adicionado')
        txt.innerHTML += `<div class="Adi" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>${product.name} - R$${product.price.toFixed(2)}</span>
                            <button id="buttonAdd1" onclick="deleteLinha(this)" style="margin-left: auto;"><i class="fas fa-x"></i></button>
                          </div>`

        document.getElementById('productCode').value = ''
        document.querySelector('.cdg').value = ''
    } else {
        alert('Código de produto inválido.')
    }
}

function deleteLinha(button) {

    const div = button.closest('div')

    div.remove()

    const itemName = div.textContent.split(' - ')[0].trim()
    currentComanda = currentComanda.filter(item => item.name !== itemName)
}


let numeroComanda = 1
let comandaEditadaNumero = null 

function editarComanda(icon) {
    const comandaDiv = icon.closest('.itens')
    const comandaTitle = comandaDiv.querySelector('h2').textContent

    comandaEditadaNumero = parseInt(comandaTitle.split(' ')[1]) 

    const products = comandaDiv.querySelectorAll('ul li')
    const total = comandaDiv.querySelector('p').textContent

    currentComanda = []

    products.forEach(item => {
        const itemName = item.textContent.split(' - ')[0].trim()
        const itemPrice = parseFloat(item.textContent.split(' - ')[1].replace('R$', '').trim())
        const code = Object.keys(productsData).find(key => productsData[key].name === itemName)

        if (code) {
            currentComanda.push({
                code: parseInt(code),
                name: itemName,
                price: itemPrice
            })
        }
    })

    comandaDiv.innerHTML = ''

    const txt = document.querySelector('div#adicionado')
    txt.innerHTML = ''

    currentComanda.forEach(product => {
        txt.innerHTML += `<div class="Adi" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>${product.name} - R$${product.price.toFixed(2)}</span>
                            <button id="buttonAdd1" onclick="deleteLinha(this)" style="margin-left: auto;"><i class="fas fa-x"></i></button>
                          </div>`
    })
}

function confirmComanda() {
    let total = 0
    let comandaContent = `<div class="menuIcons">
                                <i id="icone" class="fas fa-print" onclick="window.print()" style="cursor: pointer; margin-right: auto; margin-left: auto;"></i>
                                <i id="icone" class="fas fa-edit" onclick="editarComanda(this)" style="cursor: pointer; margin-right: auto;"></i> 
                                <i id="icone" class="fas fa-trash" onclick="deletarComanda(this)" style="cursor: pointer; margin-right: auto;"></i> 
                                <i class="fas fa-check" onclick="comandaPaga(this)" style="cursor: pointer; margin-right: auto;"></i> 
                            </div>
        <br>`

    if (comandaEditadaNumero !== null) {
        comandaContent += `<h2>Comanda ${comandaEditadaNumero}</h2><ul><br>`
        comandaEditadaNumero = null 
    } else {
        comandaContent += `<h2>Comanda ${numeroComanda}</h2><ul><br>`
        numeroComanda++
    }

    currentComanda.forEach(product => {
        comandaContent += `<li>${product.name} - R$${product.price.toFixed(2)} </li><br>`
        total += product.price
    })

    comandaContent += `<br><hr><br></ul><p>Total: R$${total.toFixed(2)}</p>`

    const comandaDivs = document.querySelectorAll('.itens')
    let comandaDiv = Array.from(comandaDivs).find(div => !div.innerHTML)

    if (!comandaDiv) {
        if (currentComanda.length > 0) {
            comandaDiv = document.createElement('div')
            comandaDiv.classList.add('itens')
            document.querySelector('.comandas').appendChild(comandaDiv)
        } else {
            alert('Comanda vazia')
        }   
    }

    comandaDiv.innerHTML = comandaContent
    currentComanda = []

    var text = document.querySelector('div#adicionado') 
    text.innerHTML= ''
}

function deletarComanda(icon) {
    if (confirm('Você tem certeza que deseja excluir esta comanda?')) {
        const comandaDiv = icon.closest('.itens')
        comandaDiv.remove()
    }
}

function comandaPaga(icon) {
    const comandaDiv = icon.closest('.itens')
    const comandaTitle = comandaDiv.querySelector('h2').textContent
    const comandaListItems = comandaDiv.querySelectorAll('ul li')
     const comandaTotal = comandaDiv.querySelector('p').textContent

    const comanda = {
        title: comandaTitle,
        items: Array.from(comandaListItems).map(item => item.textContent),
        total: comandaTotal
    }

    let comandasPagas = JSON.parse(localStorage.getItem('comandasPagas')) || []
    comandasPagas.push(comanda)
    localStorage.setItem('comandasPagas', JSON.stringify(comandasPagas))
            
    comandaDiv.remove()

    console.group(`Comanda: ${comandaTitle}`)
    console.log('Itens:')
    comandaListItems.forEach(item => {
    console.log(item.textContent)
    })
    console.log(comandaTotal)
    console.groupEnd()
}