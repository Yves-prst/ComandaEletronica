const productsData = {
    1: { name: "Tapioca de Calabresa", price: 9.50 },
    2: { name: "Tapioca de Carne Bovina Gourmet", price: 12.50 },
    3: { name: "Tapioca Especial", price: 12.50 },
    4: { name: "Tapioca de Frango", price: 8.50 },
    5: { name: "Tapioca de Frango c/ Catupiry", price:10},
    6: { name: "Tapioca de Frango c/ Cheddar", price:10}, 
    7: { name: "Tapioca de Frango c/ Batata Doce", price:9.50}, 
    8: { name: "Tapioca de Pizza", price:9},
    9: { name: "Tapiproteica", price:15},
    10: { name: "Tapiegg", price:8},
    11: { name: "Tapifitness", price:9.50},
    12: { name: "Tapioca de Banana c/ Canela", price:8.50},
    13: { name: "Tapioca de Banana Fitness", price:14.50}, 
    14: { name: "Tapioca de Banana ao Mel", price:9.50},
    15: { name: "Tapioca de Banana Gourmet", price:9.50},
    16: { name: "Tapioca de Coco", price:9},
    17: { name: "Tapioca da Casa", price:12.50},
    18: { name: "Tapioca de Morango", price:10.50},
    19: { name: "Tapioca Julieta e Catupiry", price:8.50},
    20: { name: "Tapioca de Prestígio",  price:12.50},
    21: { name: "Tapioca Romeu e Julieta", price:8.50},
    22: { name: "Copo 400ml", price:6},   
    23: { name: "Copo 500ml" ,price:7},    
    24: { name: "Garrafa 500ml", price:9},   
    25: { name: "Garrafa 1l", price:15},  
    26: { name: "Garrafa 2l", price:25},
    27: { name: "Natural", price:0},
    28: { name: "Limão", price:0},
    29: { name: "Abacaxi", price:0},
    30: { name: "Gengibre", price:0},
    31: { name: "Maracujá", price:0},      
    32: { name: "Limão, Abacaxi, Gengibre, Maracujá", price:0},
    33: { name: "Coco Verde Gelado", price:10},    
    34: { name: "Água Garrafa", price:3},  
    35: { name: "Refrigerante lata", price:5},    
    36: { name: "Café Espresso Supremo Puro ou c/ Leite", price:5},    
    37: { name: "Café Melitta Filtrado Puro ou c/ Leite", price:5},    
    38: { name: "Chá Mate Quente Natural ou Sabores", price:4},      
    39: { name: "Chocolatto Espresso Levemente Adocicado", price:8},
    40: { name: "Chocolate Nestlé 100% Cacau", price:8},
    41: { name: "Achocolatado Nescau", price:5},
    42: { name: "Geladinho de Abacate", price:3.50},   
    43: { name: "Geladinho de Coco", price:3.50},   
    44: { name: "Geladinho de Chocolate", price:3.50},   
    45: { name: "Geladinho de Maracujá", price:3.50}, 
    46: { name: "Geladinho de Melancia", price:3.50},    
    47: { name: "Geladinho de Morango", price:3.50},    
    48: { name: "Geladinho de Paçoca", price:3.50},   
    49: { name: "Amendoim Doce Cricri", price:5},    
    50: { name: "Amendoim Salgado na Manteiga", price:5},    
    51: { name: "+ Cheddar", price:3},    
    52: { name: "+ Catupiry", price:3},
    53: { name: "+ Muçarela", price:3},     
    54: { name: "+ Carne Bovina", price:3},   
    55: { name: "+ Ovo", price:3},   
    56: { name: "+ Morango", price:3},     
    57: { name: "+ Chocolate", price:3},     
    58: { name: "+ Coco", price:3},  
    59: { name: "+ Leite Condensado", price:3},   
    60: { name: "+ Goiabada", price:3},   
    61: { name: "+ Tomate", price:3},    
    62: { name: "+ Banana", price:3},   
    63: { name: "+ Mel", price:3},    
    64: { name: "+ Frango" ,price:3},   
    65: { name: "+ Canela", price:0},   
    66: { name: "Sem Cebola", price:0},    
    67: { name: "Sem Tomate" , price:0},  
    68: { name: "Sem orégano", price:0},   
    69: { name: "Sem orapronóbis", price:0},  
    70: { name: "Sem Gelo", price:0},
    71: { name: "Para Viagem", price:0}
};

let currentComanda = [];

function hideAllProducts() {
    document.querySelectorAll('.products').forEach(div => {
        div.style.display = 'none'
    });
}

function mostarTap() {
    hideAllProducts();
    var show = document.querySelector('div#tapiocas')
    show.style.display = 'block'
    show.innerHTML = '<h1>Tapiocas</h1><br>' +
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
    // Adicione o resto dos produtos aqui...
}

function mostarCal() {
    hideAllProducts();
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
        
    // Adicione o resto dos produtos aqui...
}

function mostarBeb(){
    hideAllProducts();
    var show = document.querySelector('div#bebidas')
    show.style.display = 'block'
    show.innerHTML = '<h1>Bebidas</h1><br>' +
    '33 - Coco Verde Gelado <br>'+  
    '34 - Água Garrafa <br>'+
    '35 - Refrigerante lata <br>'

}

function mostarCaf(){
    hideAllProducts();
    var show = document.querySelector('div#cafe')
    show.style.display = 'block'
    show.innerHTML = '<h1>Cafés</h1><br>' +
    '36 - Café Espresso Supremo Puro ou c/ Leite <br>'+  
    '37 - Café Melitta Filtrado Puro ou c/ Leite <br>'+
    '38 - Chá Mate Quente Natural ou Sabores <br>'+   
    '39 - Chocolatto Espresso Levemente Adocicado <br>'+
    '40 - Chocolate Nestlé 100% Cacau <br>'+
    '41 - Achocolatado Nescau <br>'

}

function mostarGel(){
    hideAllProducts();
    var show = document.querySelector('div#geladinho')
    show.style.display = 'block'
    show.innerHTML = '<h1>Geladinhos</h1><br>' +
    '42 - Geladinho de Abacate <br>'+
    '43 - Geladinho de Coco <br>'+
    '44 - Geladinho de Chocolate <br>'+
    '45 - Geladinho de Maracujá <br>'+
    '46 - Geladinho de Melancia <br>'+ 
    '47 - Geladinho de Morango <br>'+  
    '48 - Geladinho de Paçoca <br>'
}

function mostarAme(){
    hideAllProducts();
    var show = document.querySelector('div#amendoim')
    show.style.display = 'block'
    show.innerHTML = '<h1>Amendoins</h1><br>' +
    '49 - Amendoim Doce Cricri <br>'+ 
    '50 - Amendoim Salgado na Manteiga <br>'  

}

function mostarAdd(){
    hideAllProducts();
    var show = document.querySelector('div#adds')
    show.style.display = 'block'
    show.innerHTML = '<h1>Adicionais</h1><br>' +
    '51 - Cheddar <br>'+   
    '52 - Catupiry <br>'+
    '53 - Muçarela <br>'+    
    '54 - Carne Bovina <br>'+  
    '55 - Ovo <br>'+
    '56 - Morango <br>'+
    '57 - Chocolate <br>'+
    '58 - Coco <br>'+ 
    '59 - Leite Condensado <br>'+ 
    '60 - Goiabada <br>'+
    '61 - Tomate <br>'+
    '62 - Banana <br>'+
    '63 - Mel <br>'+    
    '64 - Frango <br>'+
    '65 - Canela <br>'
}

function mostarObs(){
    hideAllProducts()
    var show = document.querySelector('div#obs')
    show.style.display = 'block'
    show.innerHTML = '<h1>Observações</h1><br>' +
    '66 - Sem Cebola <br>'+    
    '67 - Sem Tomate <br>'+
    '68 - Sem orégano <br>'+ 
    '69 - Sem orapronóbis <br>'+
    '70 - Sem Gelo <br>'+
    '71 - Para Viagem <br>'
}

function limparTela(){
    hideAllProducts()
}

function addProduct() {
    const code = parseInt(document.getElementById('productCode').value);

    if (productsData[code]) {
        const product = {
            code: code,
            name: productsData[code].name,
            price: productsData[code].price,
        };

        currentComanda.push(product);

        // Atualize o texto exibido na tela
        const txt = document.querySelector('div#adicionado');
        txt.innerHTML += `${product.name} - R$${(product.price).toFixed(2)}<br>`;

        document.getElementById('productCode').value = '';
        document.querySelector('.cdg').value = '';
    } else {
        alert('Código de produto inválido.');
    }
}

let numeroComanda = 1  

function confirmComanda() {
    let total = 0
    let comandaContent = `<div class="menuIcons">
                                <i class="fas fa-edit" onclick="editarComanda(this)" style="cursor: pointer; margin-right: 50px; margin-left: auto;"></"></i> 
                                <i class="fas fa-trash" onclick="deletarComanda(this)" style="cursor: pointer; margin-right: 50px;"></i> 
                                <i class="fas fa-check" onclick="comandaPaga(this)" style="cursor: pointer; margin-right: auto;"></i> 
                            </div>
        <br>
        <h2>Comanda ${numeroComanda}</h2><ul><br>`
    
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
            alert('Comanda vazia');
        }   
    }
    
    comandaDiv.innerHTML = comandaContent
    currentComanda = []
    
    numeroComanda++ // Incrementa o número da próxima comanda
    var text = document.querySelector('div#adicionado') 
    text.innerHTML= ''
}

function editarComanda(icon) {
    const comandaDiv = icon.closest('.itens')
    const products = comandaDiv.querySelector('div').innerHTML.split('<br>')
    currentComanda = products
    document.getElementById('precomanda').innerHTML = products.join('<br>')
    
}

function deletarComanda(icon) {
    if (confirm('Você tem certeza que deseja excluir esta comanda?')) {
        const comandaDiv = icon.closest('.itens')
        comandaDiv.remove()
    }
}

function comandaPaga(icon) {
    const comandaDiv = icon.closest('.itens');
    const comandaTitle = comandaDiv.querySelector('h2').textContent;
    const comandaListItems = comandaDiv.querySelectorAll('ul li');
     const comandaTotal = comandaDiv.querySelector('p').textContent;

    const comanda = {
        title: comandaTitle,
        items: Array.from(comandaListItems).map(item => item.textContent),
        total: comandaTotal
    };

    let comandasPagas = JSON.parse(localStorage.getItem('comandasPagas')) || [];
    comandasPagas.push(comanda);
    localStorage.setItem('comandasPagas', JSON.stringify(comandasPagas));
            
            // Remove comanda da tela principal
    comandaDiv.remove();

    console.group(`Comanda: ${comandaTitle}`);
    console.log('Itens:');
    comandaListItems.forEach(item => {
    console.log(item.textContent);
    });
    console.log(comandaTotal);
    console.groupEnd();
}

document.addEventListener('DOMContentLoaded', function() {
    const adicionadoDiv = document.getElementById('adicionado');

    function editarAdicionado() {
        const originalContent = adicionadoDiv.innerHTML;
        adicionadoDiv.innerHTML = `<textarea id="editArea">${originalContent}</textarea><br><button onclick="salvarEdicao()">Salvar</button>`;
    }

    function salvarEdicao() {
        const editArea = document.getElementById('editArea');
        const newContent = editArea.value;
        adicionadoDiv.innerHTML = `${newContent}<br><button onclick="editarAdicionado()">Editar</button>`;
    }

    window.editarAdicionado = editarAdicionado;
    window.salvarEdicao = salvarEdicao;
});



