let cart = [];
let books = [];


function v() {
    fetch('https://striveschool-api.herokuapp.com/books', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            books = data;
            displayBooks(data);
        })
}



function displayBooks(bookList) {
    let container = document.querySelector("#b");
    container.innerHTML = "";
    bookList.forEach((n, index) => {
        let card = `
        <div class="container" id="book-${index}">
            <div class="d-flex m-4 r">
                <div style="width: 15rem;">
                    <img src="${n.img}" class="card-img-top" alt="...">
                </div>
                <div>
                    <h5 class="m-3">$${n.price}</h5>
                </div>
                <div class="mx-3">
                    <div class="d-flex m-4">
                        <div class="mx-3">
                            <h1>Title:</h1>
                        </div>
                        <div>
                            <h2>${n.title}</h2>
                        </div>
                    </div>
                    <div class="d-flex m-4">
                        <div class="mx-3">
                            <h3>Genre:</h3>
                        </div>
                        <div>
                            <h4>${n.category}</h4>
                        </div>
                    </div>
                    <div class="m-5">
                        <button class="btn btn-success t" onclick="addToCart(${index}); ">
                            Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2H8zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                        </button>
                    </div>
                    <div class="m-5">
                    <button class="btn btn-info t" href="details.html" onclick="showDetails(${index})">
                        Show Details
                    </button>
                </div>
                </div>
            </div>
        </div>`;
        container.innerHTML += card;
    });
}


function addToCart(index) {
    cart.push(index);
    updateCartModal();
    alert("Book added to cart.");
}

function removeFromCart(index) {
    cart = cart.filter(cartIndex => cartIndex !== index);
    updateCartModal();
}

function clearCart() {
    cart = [];
    updateCartModal();
}

function updateCartModal() {
    let cartBody = document.getElementById('cartBody');
    if (cart.length === 0) {
        cartBody.innerHTML = "Cart is empty.";
    } else {
        cartBody.innerHTML = "";
        cart.forEach(index => {
            let book = books[index];
            let card = `
            <div class="container" id="cart-book-${index}">
                <div class="d-flex m-4 r">
                    <div style="width: 15rem;">
                        <img src="${book.img}" class="card-img-top" alt="...">
                    </div>
                    <div>
                        <h5 class="m-3">$${book.price}</h5>
                    </div>
                    <div class="mx-3">
                        <div class="d-flex m-4">
                            <div class="mx-3">
                                <h1>Title:</h1>
                            </div>
                            <div>
                                <h2>${book.title}</h2>
                            </div>
                        </div>
                        <div class="d-flex m-4">
                            <div class="mx-3">
                                <h3>Genre:</h3>
                            </div>
                            <div>
                                <h4>${book.category}</h4>
                            </div>
                        </div>
                        <div class="m-5">
                            <button class="btn btn-danger" onclick="removeFromCart(${index})">
                                Remove from cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2H8zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                    <path d="M7.146 4.146a.5.5 0 0 1 .708 0L8 4.293l.146-.147a.5.5 0 0 1 .708.708L8.707 5l.147.146a.5.5 0 0 1-.708.708L8 5.707l-.146.147a.5.5 0 0 1-.708-.708L7.293 5 7.146 4.854a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
            cartBody.innerHTML += card;
        });
    }
}

function showDetails(index) {
    const selectedBook = books[index];
    localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
    console.log('Data saved to localStorage:', localStorage.getItem('selectedBook'));
    window.location.href = 'details.html';
}


function search() {
    let query = document.querySelector("#searchInput").value.toLowerCase();
    let filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.category.toLowerCase().includes(query));
    displayBooks(filteredBooks);
}


v();
