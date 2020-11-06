//återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


//Sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click',
    function(event) {
        changeArt1toHotPink();
        changeH2inArt2();
    }
);

function resetAll() {
    //reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    //reset radikalt till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';
}

function changeH2inArt2() {
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//ändrar art-1 bakgrundsfärg till hot pink
function changeArt1toHotPink() {
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}


// Kunskapskontroll 1 - DOM & Events
// Deadline
// Måndag 9/11, kl 23:59
// Inlämning
// Lägg upp allt på din github. 
// Lämna in länken till repositoryn på Pingpong
// Namnge repositoryt Kunskapskontroll1-Förnamn-Efternamn
// Huvudmappen ska innehålla alla filer och bilder. Inklusive en Readmefil där du beskriver alla interaktioner som ditt projekt innehåller
// Instruktioner
// Hämta sinus mini-shop exemplet från DOM exercises på github https://github.com/cleivas/EC-FEU20/tree/main/v.45/dom-exercises 
// Skapa en ny javascript-fil för din kod 
// Kommentera all kod med beskrivning av vad den gör

// Det här är en väldigt öppen uppgift. Målet är att du ska få experimentera och bli bekväm i att manipulera domen och att använda event listeners. 
// Med JS-kod ska du ändra utseendet av sidan utifrån interaktion från användaren. 
// Använd knapparna på sidan. Men du är inte begränsad till det. 

// Måste vara med:
// En knapp som återställer allt till originalutseendet
// Alla ändringar som du har gjort ska ändras tillbaka
// Byt ut minst ett foto
// Ändra bakgrundsfärg på minst ett element
// Ändra text på minst ett element
// Ändra färg på minst en knapp
// Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
// Lägg till en lista var du vill med synlig border för varje li element (Måste tas bort när man trycker på återställningsknappen)

// Tips
// Var metodisk! Ett steg i taget. Återställ det du håller på med innan du börjar med nästa. 
// Fråga om du sitter fast!
// Ta pauser!