const root = document.querySelector('#root');
const selectAllergens = document.querySelector('#select-allergens')

fetch('/api/pizza')
.then((response) => {
    return response.json();
    })
.then((data) => {
   root.innerHTML = data.map((item) =>`<div class="product">
                                            <div class="image-box">
                                                <div class="images" id="images-${item.id}"></div>
                                            </div>
                                            <div class="text-box">
                                                <h2 class="item">${item.name}</h2>
                                                <div class="ingredients">Ingredients:<br>${item.ingredients.join(' / ')}</div><br>
                                                <div class"allergens">Allergens: ${item.allergens}</div><br>
                                                <div class="price">${item.price}</div>
                                                <button>Add to cart</button>
                                                <button>Remove from cart</button>
                                            </div>
                                        </div>`).join("");                                  
})
.catch(function(error) {
    console.log(error);
})

fetch('/api/allergens')
.then((response) => {
    return response.json();
    })
.then((data) => {
    selectAllergens.innerHTML = data.map((i) =>`<option value=${i.id}>${i.name}</option>`);
    selectAllergens.addEventListener('change', () => {
        
    })

})
.catch(function(error) {
    console.log(error);
})
