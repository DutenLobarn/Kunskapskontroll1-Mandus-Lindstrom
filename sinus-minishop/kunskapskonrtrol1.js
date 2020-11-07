// 2 Välj button element från html.
let btns = document.querySelectorAll('button');

// 3 Välj article art-2 element från html.
let btnsBackground = document.querySelectorAll('.art-2');

// 4 Välj .art-2 h2 element från html.
let btnsArt2H2 = document.querySelectorAll('.art-2 h2');

// 5 Välj .art-2´s knapp.
let buttonChangeColor = document.querySelectorAll('.art-2 button');

// 6 Välj navs img "logo".
let deleteLogo = document.querySelector('img');
// 6 Välj nav.
let createNavigation = document.querySelector('nav');

// 7 Välj första article i min footer.
let addUlandLi = document.querySelectorAll('footer section article');


//-----------------------------------------------------------

// 1 Återställningsknappen.
let reset = btns[2];
reset.innerText = 'RESET';

// 1 Sätt en event listener på reset-knappen.
reset.addEventListener('click', resetAll);

// 2 Sätt event listener för första knappen och genomför changeArt1toImgForrest funktionen.
let knapp1 = btns[0];
knapp1.addEventListener('click',
    function(event) {
        changeArt1toImgForrest();
    }
);

// 3 Sätt event listener .art-3 och genomför changeBackgroundcolor funktionen.
let knapp3 = btnsBackground[0];
knapp3.addEventListener('dblclick',
    function(event) {
        changeBackgroundcolor();
    }
);

// 4 Sätt event listener .art-2 h2 och genomför changeH2inArt2 funktionen.
let knapp4 = btnsArt2H2[0];
knapp4.addEventListener('click',
    function(event) {
        changeH2inArt2();
    }
);

// 5 Sätt event listener .art-2 button och genomför changebButtonColor funktionen.
let knapp5 = buttonChangeColor[0];
knapp5.addEventListener('keypress',
    function(event) {
        changebButtonColor();
    }
);

// 6 Sätt event listener nav logo och genomför navList funktionen.
let deleteLogoAction = deleteLogo;
deleteLogoAction.addEventListener('mouseleave',
    function(event) {
        navList();
    }
);

// 7 Sätt event listener på footer.section.article[0] och genomför addUlandLitoFooterSectionArticle funktionen.
let addUland4Litofooter = addUlandLi[0];
addUland4Litofooter.addEventListener('wheel',
    function(event) {
        addUlandLitoFooterSectionArticle();
    }
);

//----------------------------------------------------------

// 2 Ändrar .art-1 img till Forrest foto.
function changeArt1toImgForrest() {
    let art1 = document.querySelector('.art-1 img');
    art1.setAttribute('src', 'img/hoodie-forrest.png');
};

// 3 Ändrar bakgrundsfärg på .art-3.
function changeBackgroundcolor() {
    let art3 = document.querySelector('.art-2');
    art3.style.backgroundColor = 'red';
};

// 4 Ändrar text på art-2 h2 till Radikalt.
function changeH2inArt2() {
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
};

// 5 Ändrar färg på art-2 button till pink.
function changebButtonColor() {
    let h2Button = document.querySelector('.art-2 button');
    h2Button.style.backgroundColor = 'pink';
};

// 6 Deletar allt i id: .header-navigation.
function navList() {
    let logoNav = document.getElementById('header-navigation');

    if (logoNav != null) {
        logoNav.remove();
    }
};

// 7 Add ul and 4 li to footer´s första article.
function addUlandLitoFooterSectionArticle() {
    let articleFooter = document.querySelector('footer section article');

    let ulFooter = document.createElement('ul');
    ulFooter.innerText = 'Vilken är bästa studenten?';

    articleFooter.appendChild(ulFooter);

    let sudnam = ['Mandus', 'är', 'bästa', 'studenten'];

    for (let i = 0; i < sudnam.length; i++) {
        let liFooter = document.createElement('li');
        liFooter.style.border = '1px solid black';
        liFooter.innerText = sudnam[i];
        ulFooter.appendChild(liFooter);
    }
};

//-----------------------------------------------------

// 1 Återställsknappen.

function resetAll() {
    // 2 Reset art1 till img/hoodie-ash.png.
    let art1 = document.querySelector('.art-1 img');
    art1.setAttribute('src', 'img/hoodie-ash.png');

    // 3 Reset art3 till backgroundcolor white.
    let art3 = document.querySelector('.art-2');
    art3.style.backgroundColor = 'white';

    // 4 Reset text radikalt till text Sinus Hoodie.
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    // 5 Reset .art-2 button till bakgrundsfärg till svart.
    let h2Button = document.querySelector('.art-2 button');
    h2Button.style.backgroundColor = 'black';

    // 6 Reset nav.
    let createAgainNav = document.querySelector('header');
    createAgainNav.appendChild(createNavigation);

    // 7 Remove the created ul and li´s.
    let removeUl = document.querySelectorAll('ul');

    for (let i = 0; i < removeUl.length; i++) {
        removeUl[i].remove();
    }
};