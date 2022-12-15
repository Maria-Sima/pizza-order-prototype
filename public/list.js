const body = document.querySelector('body');


let allergensData = [];
let orderedPizzas = [];

fetch('/api/pizza')
.then((response) => {
    return response.json();
    })
.then((pizzaList) => {
    pizzaList.forEach((pizza) => {
        orderedPizzas.push({ id: pizza.id, ammount: 0 });
        let product = document.createElement("div");
        product.setAttribute("class", "product");
        let imgbox = document.createElement("div");
        imgbox.setAttribute("class", "image-box");
        let img = document.createElement("div");
        img.setAttribute("class", "images");
        img.setAttribute("id", `images-${pizza.id}`);
        imgbox.appendChild(img);
        product.appendChild(imgbox);
        let txtbox = document.createElement("div");
        txtbox.setAttribute("class", "text-box");
        let name = document.createElement("h2");
        name.setAttribute("class", "item");
        let addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove from Cart";
        txtbox.appendChild(addBtn);
        txtbox.appendChild(removeBtn);
        product.appendChild(txtbox);
    });
   }
)
.catch(function(error) {
    console.log(error);
})

fetch('/api/allergens')
.then((response) => {
    return response.json();
    })
.then((data) => {
   
})
.catch(function(error) {
    console.log(error);
})
export { orderedPizzas }