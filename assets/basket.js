let price = document.querySelector('.price2').textContent;
let priceBlock = document.querySelector('.price2')
let button = document.querySelector('.button');
let percent = price /100 * 20

function changePrice(){
    let result = Number(price) - percent;
    console.log(result)
    console.log(price)
    priceBlock.textContent = result
}
 button.addEventListener('click', changePrice);