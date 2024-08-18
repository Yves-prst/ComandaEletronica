document.addEventListener('DOMContentLoaded', () => {
    const comandasPagas = JSON.parse(localStorage.getItem('comandasPagas')) || [];
    const totalComandasDiv = document.getElementById('total-comandas');
    const comandasPagasDiv = document.getElementById('comandas-pagas');
    let totalComandas = 0;
    let htmlContent = '';

    if (comandasPagas.length > 0) {
        comandasPagas.forEach((comanda, index) => {
            htmlContent += `<div class="comanda-info" data-index="${index}">`;
            htmlContent += `<span class="delete-btn" onclick="deleteComanda(${index})">&times;</span> <br>`;
            htmlContent += `<h3>${comanda.title}</h3><ul>`;
            comanda.items.forEach(item => {
                htmlContent += `<li>${item}</li>`;
            });

            htmlContent += `<hr></ul><p>${comanda.total}</p></div>`;
            const totalValueString = comanda.total.replace('Total: ', '').replace('R$', '').replace(',', '.');
            const totalValue = parseFloat(totalValueString);
            console.log(`Valor extraído: ${totalValue}`); // Isso mostrará o valor extraído de cada comanda
            if (!isNaN(totalValue)) {
                totalComandas += totalValue;
                console.log(`Total acumulado: ${totalComandas}`); // Isso mostrará o total acumulado após cada adição
            } else {
                console.warn(`Valor total inválido encontrado: ${comanda.total}`);
            }
        });

        comandasPagasDiv.innerHTML = htmlContent; // Atualiza o HTML apenas uma vez aqui
        totalComandasDiv.innerHTML = `Soma Total de Todas as Comandas: R$${totalComandas.toFixed(2)}`;
    } else {
        comandasPagasDiv.innerHTML = '<p>Nenhuma comanda paga encontrada.</p>';
    }
});

function deleteComanda(index) {
    const comandasPagas = JSON.parse(localStorage.getItem('comandasPagas')) || [];
    comandasPagas.splice(index, 1);
    localStorage.setItem('comandasPagas', JSON.stringify(comandasPagas));
    location.reload(); // Recarrega a página para atualizar a lista de comandas pagas
}


const totalValue = parseFloat(comanda.total.replace('R$', '').replace(',', '.'));
console.log(`Valor extraído: ${totalValue}`); // Isso mostrará o valor extraído de cada comanda
if (!isNaN(totalValue)) {
    totalComandas += totalValue;
    console.log(`Total acumulado: ${totalComandas}`); // Isso mostrará o total acumulado após cada adição
} else {
    console.warn(`Valor total inválido encontrado: ${comanda.total}`);
}

