// //mouse event-- click
// let btn = document.querySelector('button');
// let firstProduct = document.querySelector('.art-1');

// // 'click'
// btn.addEventListener('mouseenter', function(event) {
//     // console.dir(event.altKey);
//     // firstProduct.style.backgroundColor = 'blue';
//     // firstProduct.classList.add('bg-blue');
//     // firstProduct.classList.toggle('bg-blue');
//     // event.target = elementet som eventet hände på
//     event.target.classList.add('bg-blue');
//     // console.log('mouse enter');

// });

// btn.addEventListener('mouseleave', function(event) {
//     // console.log('mouse leave');
//     event.target.classList.remove('bg-blue');
// });

// console.dir(btn);

// let secondProduct = document.querySelector('.art-2');

// secondProduct.addEventListener('mousemove', function(event) {
//      let hue = ( (event.x) / 3 ) + 100;
//      let saturation = event.y/5;

//     secondProduct.style.backgroundColor = `hsl( ${hue}, ${saturation}%, 70%)`;
// console.log(event.x, hue);
//console.log(event.y, saturation);
//console.log(event.x, event.y);
// });

// console.log(secondProduct);

// Koda själv!

// 1 Klicka på ett element -> ändra texten på ett annat element

// let article1 = document.querySelector('article h2');

// article1.addEventListener('click', function(event) {
//     let articleH3 = document.querySelector('article h3');
//     articleH3.innerHTML = 'Mandus Tröja!';
// });


// 2 För musen över ett element -> ändra bakgrundsfärgen för samma element

// let article1 = document.querySelector('article p');

// article1.addEventListener('mouseover', function(event) {
//     article1.style.backgroundColor = 'olive';
// });

// 3 Ta bort musen från ett element -> lägg till ett nytt element i menyn

// let navA = document.querySelector('nav a');

// navA.addEventListener('mouseleave', function(event) {
//     let addATONav = document.querySelector('nav');
//     let addInfoAToNav = document.createElement('a');
//     addInfoAToNav.setAttribute("href", "#");
//     addInfoAToNav.innerText = 'Phone';
//     addATONav.appendChild(addInfoAToNav);
// });

// 4 Använd mousemove eventet -> ändra bakgrundsfärg på ett element med hjälp av event.x eller event.y

// let article1 = document.querySelector('article');

// article1.addEventListener('mousemove', function(event) {
//     let hue = ((event.x) / 3) + 100;
//     let saturation = event.y / 5;

//     article1.style.backgroundColor = `hsl( ${hue}, ${saturation}%, 70%)`;

//     // console.log(event.x, hue);
//     // console.log(event.y, saturation);
//     // console.log(event.x, event.y);
// });

//event listener för Keyboard event

// let htmlElemnet = document.querySelector('html');

// htmlElemnet.addEventListener('keydown', function(event) {
//     console.log(event.key);

//     //     //elementet vi vill ändra
//     let art1 = document.querySelector('.art-1');

//     if (event.key === 'b' || event.key === 'B') {
//         art1.style.backgroundColor = 'blue';
//     } else if (event.key === 'r' || event.key === 'R') {
//         art1.style.backgroundColor = 'red';
//     } else if (event.key === 'Alt') {
//         art1.style.backgroundColor = 'hotpink';
//     }
// });

// Koda själv!

// 1 Ändra textfärgen på en knapp när du trycker på ‘f’ eller ‘F’

// let changeButton = document.querySelector('button');
// // console.log(changeButton);

// changeButton.addEventListener('keydown', function(event) {

//     if (event.key === 'f' || event.key === 'F') {
//         changeButton.style.backgroundColor = 'blue';
//     }
// });

// 2 Ändra fotot på första produkten när du trycker på ‘i’ eller ‘I’

// let imgArticle1 = document.querySelector('article img');
// console.log(imgArticle1);

// // imgArticle1.setAttribute('src', 'img/hoodie-forrest.png');

// imgArticle1.addEventListener('keydown', function(event) {
//     if (event.key === 'f' || event.key === 'F') {
//         imgArticle1.setAttribute('src', 'img/hoodie-forrest.png');
//     }
// });