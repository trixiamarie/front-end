// Chiamate Ajax
let xhr = new XMLHttpRequest(); // Ogg in grado di effettuare Richieste al Server - readyState = 0
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books'); // Definisco il Method e URL della chiamate - readyState = 1
xhr.send(); // Eseguo la chiamata - readyState = 2
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log('The operation is complete');
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj);
        createList(obj);
    }
}

let cartArr = JSON.parse(localStorage.getItem('ItemCart')) || []
window.onload = function (){

}

function createList(books) {
    let divCardContainer = document.querySelector('.card-group');
    
    let row = document.createElement('div');
    row.classList.add('row');
    divCardContainer.appendChild(row);

    let cardsPerRow = 5;
    let columnsPerCard = 12 / cardsPerRow;

    books.forEach(x => {
        let divCard = document.createElement('div');
        divCard.classList.add(`col-${columnsPerCard}`, 'card', 'mb-3', 'mx-2', 'justify-content-between', 'shadow-sm'); 

        divCard.style.width = '15rem';
        divCard.style.padding = '0';

        let bookCover = document.createElement('img');
        bookCover.classList.add('card-img-top');
        bookCover.alt = x.title;
        bookCover.src = x.img;
        bookCover.style.width = 'auto'; 
        bookCover.style.height = '20rem'; 

        let divBody = document.createElement('div');

        let h5Body = document.createElement('h5');
        h5Body.classList.add('card-title','p-2', 'text-center');
        h5Body.innerText = x.title;

        let pBody = document.createElement('span');
        pBody.classList.add('badge', 'p-2', 'bg-primary', 'm-2');
        pBody.innerText = x.category;

        let divPDA = document.createElement('div');

        let priceBody = document.createElement('p');
        priceBody.classList.add('p-2', 'm-2', 'text-center','bg-dark-subtle');
        priceBody.innerText = "Price: "+ "$" + x.price;
        priceBody.style.fontWeight = 'bold';

        let btnDel = document.createElement('button');
        btnDel.classList.add('btnDel','btn', 'btn-outline-danger');
        btnDel.innerText= "Remove";

        btnDel.addEventListener('click', function () {
            divCard.remove();
        });

        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-outline-success', 'm-2');
        btnAdd.innerText= "Add to Cart";

        
        btnAdd.addEventListener('click', function () {
           
            let cart = document.querySelector('#cart');
            let listItem = document.createElement('li');
            listItem.classList.add('m-2', 'border', 'border-secondary', 'rounded', 'p-2', 'd-flex', 'align-items-center', 'justify-content-between');
            let pListItem = document.createElement('p');
            pListItem.classList.add('m-2');
            pListItem.style.width= '15rem';
            pListItem.style.fontSize= '0.8rem';
            pListItem.innerText= x.title;
            let bookCoverCart = document.createElement('img');
            bookCoverCart.src=x.img;
            bookCoverCart.style.width = 'auto'; 
            bookCoverCart.style.height = '4rem'; 
            let pPrice = document.createElement('p');
            pPrice.innerText="$"+x.price;
            pPrice.classList.add('m-2');
            pPrice.style.width= '3rem';
            pPrice.style.fontWeight= 'bold';
            pPrice.style.fontSize= '1rem';

            let btnRem = document.createElement('button');
            btnRem.classList.add('btnDel','btn', 'btn-outline-danger');
            btnRem.innerHTML= `<i class="bi bi-trash3"></i>`;

            btnRem.addEventListener('click', function () {
                listItem.remove();
                
            });

            listItem.appendChild(bookCoverCart);
            listItem.appendChild(pListItem);
            listItem.appendChild(pPrice);
            listItem.appendChild(btnRem);
            cart.appendChild(listItem);

            localStorage.setItem('ItemCart', JSON.stringify());
        });
        
        divBody.appendChild(h5Body);
        divBody.appendChild(pBody);
        divBody.appendChild(divPDA);

        divPDA.appendChild(priceBody);
        divPDA.appendChild(btnAdd);
        divPDA.appendChild(btnDel);
        
        divCard.appendChild(bookCover);
        divCard.appendChild(divBody);
        
        row.appendChild(divCard);  
    });

}




