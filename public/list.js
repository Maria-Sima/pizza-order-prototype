const body = document.querySelector('body');

let allergensData = [];

fetch('/api/pizza')
.then((response) => {
    return response.json();
    })
.then((data) => {
   for(let i = 0; i < data.length; i++){
    body.insertAdjacentHTML("beforeend", `<div>${data[i].name}</div>
                                        <div>${data[i].ingredients}</div>
                                        <div>${data[i].price}</div>
                                        <div>${data[i].allergens}</div>`);
   }
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
export { orderedPizzas }