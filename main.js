// 1-masala
// let user = document.querySelector("#users")
// let names = [
//     {
//         name: "adham",
//         age: 35,
//     },
//     {
//         name: "azizbek",
//         age: 65,
//
//     },
//     {
//         name: "anvar",
//         age: 11
//     }
// ]
// names.forEach(ism => {
//     let box = document.createElement("div");
//     box.innerHTML = `<p>${"Ismi: " + ism.name}</p> <p>${ "yoshi: " + ism.age}</p>`;
//     user.appendChild(box)
// })

// 2-masala
// let div = document.querySelector("#product-list");
// let products = ["olma" , "banan" , "anor" , "gilos"]
// products.forEach(mevalar => {
//     let a1b = document.createElement("div");
//     a1b.innerHTML = `<li>${mevalar}</li>`;
//     div.appendChild(a1b);
// })

// 3-masala
// let welcome = document.getElementById("welcome");
// let user = {
//     name: "odil",
//     age: 28,
//     isMember: true,
// }
// if(user.isMember){
//     document.getElementById("welcome").innerHTML = "Xush kelibsiz, Odil!"
// }


let div = document.getElementById("cards");
let books = [
    {title: "JavaScript Asoslari", author: "Hasan"},
    {title: "React Darslari", author: "Ali"}
]
books.forEach(book => {
    let div_two = document.createElement("div");
    div_two.innerHTML = `<p>${book.title}</p>  <p>${"Mualifi: " + book.author}</p>`;
    div.appendChild(div_two)
})
console.log(div)

// 7-masala
// let div = document.getElementById("product")
// let products = [
//     {name:"olma" , price:5000},
//     {name:"anor" , price:8000},
//     {name:"banan" , price:6000}
// ]
// products.forEach(product => {
//     let div = document.createElement("div")
//     div.innerHTML = `${product.name} - ${product.price + " mln so'm" }`
//     div.appendChild(div)
// })