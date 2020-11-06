// Code here!

// 1. Byt namn på första hoodien från Ash till Potato.
let h3Element = document.querySelector('h3');
h3Element.innerHTML = 'Potato';
// console.log(h3Element);

// 2. Byt namn på Home till Start.

let navElement = document.querySelector('#header-navigation');
let navElementChildren = navElement.children;
navElementChildren[0].innerText = 'Start';
// console.log(navElementChildren);

// 3. Byt namn på Contact till Mail Us.

navElementChildren[2].innerText = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.

let articleFireElement = document.querySelector('.art-2');
let articleFireElementChildren = articleFireElement.children;
articleFireElementChildren[3].innerText = 'Det är en hoodie tröja som är i färgen röd.';

// 5. Byt bakgrundsfärg och text på en knapp.

articleFireElementChildren[4].style.backgroundColor = 'red';
articleFireElementChildren[4].innerText = 'FUL!!!';
// console.log(articleFireElementChildren[4]);

// 6. Byt bakgrundsfärg på någon av produkterna.

let figureAshElement = document.querySelector('figure');
figureAshElement.style.backgroundColor = 'grey';
// console.log(figureAshElement);

// 7. Byt ut adressen på sidan.
//Claras lösning= let adressElement = document.querySelector(footer p);

let sectionAdressElement = document.querySelector('section');
let sectionAdressElementChildren = sectionAdressElement.children[1];
let pSectionAdressElementChildren = sectionAdressElementChildren.children[1];

pSectionAdressElementChildren.innerHTML = 'Mandus AB<br>Ö-viksvägen 1<br>21 19 24, Domsjö';
// console.log(pSectionAdressElementChildren);

// 8. Byt färg på samtliga <p>

let allP = document.querySelectorAll('p');
allP.forEach(e => e.style.color = 'blue');
// allP[0].style.color = 'blue';
// allP[1].style.color = 'blue';
// allP[2].style.color = 'blue';
// allP[3].style.color = 'blue';
// console.log(allP);

// 9. Ändra text på samtliga knappar till add to cart.

let allButton = document.querySelectorAll('button');
allButton.forEach(e => e.innerText = 'add to cart');
// console.log(allButton);

// 10. Lägg till classen active på menyalternativet home.

let addClassAHome = document.querySelectorAll('a');
addClassAHome[3].classList.add('active');
// console.log(addClassAHome[3]);

// 11. Ta bort classen logo på logotypen.
let removeClassLogo = document.querySelector('.logo');
removeClassLogo.classList.remove('logo');
// console.log(removeClassLogo);

// Add Content
// 12. Lägg till ett nytt menyalternativ.

let addATONav = document.querySelector('nav');
let addInfoAToNav = document.createElement('a');
addInfoAToNav.setAttribute("href", "#");
addInfoAToNav.innerText = 'Phone';
addATONav.appendChild(addInfoAToNav);
// console.log(addInfoAToNav);
// console.log(addATONav);

// 13. Lägg till en ny produkt med följande info.
// element	beskrivning
// img	    hoodie-forrest.png
// h2	    Sinus Hoodie
// h3	    Forrest
// p	    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.

let addProduktMain = document.querySelector('main');

let newArticleInMain = document.createElement('article');
newArticleInMain.classList.add('art-1');

let newFigureInMain = document.createElement('figure');
newFigureInMain.setAttribute('style', 'background-Color: grey;');

let newImgInMain = document.createElement('img');
newImgInMain.setAttribute('src', 'img/hoodie-forrest.png');
newImgInMain.setAttribute('alt', 'hoodie');

let newH2InMain = document.createElement('h2');
newH2InMain.innerHTML = 'Sinus Hoodie';

let newH3InMain = document.createElement('h3');
newH3InMain.innerHTML = 'Forrest';

let newPInMain = document.createElement('p');
newPInMain.innerHTML = 'Det är en hoodie tröja som är i färgen grön';
newPInMain.setAttribute('style', 'color: green;');

let newButtonInMain = document.createElement('button');
newButtonInMain.innerHTML = 'köp den nu!';

addProduktMain.appendChild(newArticleInMain);
newArticleInMain.appendChild(newFigureInMain);
newFigureInMain.appendChild(newImgInMain);
newArticleInMain.appendChild(newH2InMain);
newArticleInMain.appendChild(newH3InMain);
newArticleInMain.appendChild(newPInMain);
newArticleInMain.appendChild(newButtonInMain);

// console.log(addProduktMain);
// console.log(newArticleInMain);

//Mitt egna test
// let copyArticle = document.querySelector('article')
// let newCopyArticle = copyArticle.cloneNode(true);;
// console.log(newCopyArticle);

// Claras lösning
//let lastProduct = document.querySelector('.art-3');
// lastProduct.insertAdjacentHTML('afterend', 
// `<article class="art-4">
// <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
// <h2>Sinus Hoodie</h2>
// <h3>Forrest</h3>
// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
// <button>buy</button>
// </article>`);

// Medinas fråga??
// let forrestHoodie = document.querySelector('.art-4');
// let forrestP = document.querySelector('.art-4 p');
// forrestP.innerText = 'Ny text!';
// let newHeading = document.createElement('h2');
// newHeading.innerText = 'New H2';
// //forrestHoodie.appendChild(newHeading);
// forrestP.insertAdjacentElement('beforebegin', newHeading);
// console.log(forrestP);



















// Tips

// Tips

// Tips