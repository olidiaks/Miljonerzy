var bazaPytani = [
    "Najpopularniejsze imię nadawane chłopcom w 2020 r. to:",
    "Najwięcej glukozy zużywa",
    "Kabanos mieści słowo kaban, które oznacza:",
    "In silico to termin naukowy informujący, że badania zostały przeprowadzone:",
    "Adenina, guanina, cytozyna, tymina i uracyl to:",
    "Trzydziestego pierwszego dnia którego miesiąca 1859 roku po raz pierwszy zabrzmiał dzwon na londyńskiej wieży Big Ben?",
    "Artykuł 182 Kodeksu cywilnego reguluje kwestię pościgu za:",
    "Łęczysko, które składa się z ramion i majdanu, to główny element:",
    "W 1817 r. warszawskie Łazienki Królewskie zostały sprzedane carowi:",
    '"Mona Lisa" z Luwru to obraz namalowany:',
    "Pała z solfeżu to:",
    "Różańcową tajemnicą chwalebną nie jest?",
    "Z gry na jakim instrumencie słynie Czesław Mozil?",
    "Ile to jest 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11 to 121?",
    "Skąd pochodzi Conan Barbarzyńca?",
    "Komiksowym „dzieckiem” rysownika Boba Kane’a jest",
    "Rybą nie jest:",
    "Kto jest mistrzem tego samego oręża, w jakim specjalizowała się mitologiczna Artemida?",
    "Mowa w obronie poety Archiasza przeszła do historii jako jeden z najświetniejszych popisów retorycznych:",
    "Kto był nadwornym malarzem króla Filipa IV Habsburga?",
    "Likier maraskino produkuje się z maraski, czyli odmiany:",
    "Który utwór Juliusza Słowackiego napisany jest prozą?",
    "Ryś polski, łabędź rostowski, saksoński bocian i wywrotek smoleński to:",
    "Co według Leszka Kołakowskiego jest sklepieniem domu, w którym duch ludzki mieszka?",
    "Który z instrumentów stroi muzyk?",
    "Który ssak się nie poci?"
];

var bazaOdpA = [
    "Antoni",
    "serce",
    "cielaka",
    "w naczyniach z tworzywa",
    "reguły potasowe",
    "kwietnia",
    "złodziejem drobiu",
    "gameta żeńska",
    "łuku",
    "Iwanowi IV Groźnemu",
    "jedynka z czytania nut",
    "Wniebowzięcie Matki Bożej",
    "na kornecie",
    "12 321",
    "z Rivii",
    "Superman",
    "świnka",
    "Zorro",
    "Izokratesa",
    "Marcello Bacciarelli",
    "figi",
    '"Godzina myśli"',
    "rasy gołębi",
    "Rozum",
    "Tamburyn",
    "owca"
];

var bazaOdpB = [
    "Jarosław",
    "wątroba",
    "wieprzka",
    "w miejscu",
    "pryncypia sodowe",
    "maja",
    "stadem muflonów",
    "żołnierskiego płaszcza",
    "Piotrowi I Wielkiemu",
    "na metalu",
    "drąg z twardego drewna",
    "zmartwychwstanie Jezusa",
    "na akordeonie",
    "1 234 321",
    "z Oz",
    "Batman",
    "rozpiór",
    "Legolas",
    "Cycerona",
    "Jan van Eyck",
    "wiśni",
    '"W Szwajcarii"',
    "rasy kur",
    "Bóg",
    "Kocioł",
    "koń"
];

var bazaOdpC = [
    "Andrzej",
    "trzustka",
    "barana",
    "za pomocą komputera",
    "normy wapniowe",
    "września",
    "rojem pszczół",
    "cyrkla",
    "Aleksandrowi I Romanowowi",
    "na drewnie",
    "inaczej osioł dardanelski",
    "śmierć Jezusa na krzyżu",
    "na djembe",
    "111 111 111",
    "z Mordoru",
    "Spider-Man",
    "krasnopiórka",
    "Don Kichot",
    "Demostenesa",
    "Diego Velázquez",
    "jabłoni",
    '"Anhelli"',
    "chrząszcze",
    "Miłość",
    "Okarynę",
    "człowiek"
];

var bazaOdpD = [
    "Emil",
    "mózg",
    "osła",
    "na silikonowych modelach",
    "zasady azotowe",
    "listopada",
    "niewiernym małżonkiem",
    "liturgicznego świecznika",
    "Mikołajowi II Romanowowi",
    "na murze",
    "w slangu ogolona głowa",
    "zesłanie Ducha Świętego",
    "na ksylofonie",
    "123 454 321",
    "z Cimmerii",
    "Captain America",
    "kraska",
    "Longinus Podbipięta",
    "Kwintyliana",
    "Jacques-Louis David",
    "gruszy",
    '"Arab"',
    "Nazwy planet w układzie Alfa Centauri",
    "Czas",
    "Czynele",
    "królik"
];

var bazaPoprawnychOdpowidzi = [
    "a",
    "d",
    "b",
    "c",
    "d",
    "b",
    "c",
    "a",
    "c",
    "c",
    "a",
    "c",
    "b",
    "b",
    "d",
    "b",
    "d",
    "b",
    "b",
    "c",
    "b",
    "c",
    "a",
    "d",
    "b",
    "d"
];

var numerPytaniaWylosowanyZBazy = new Array();
var pytaniaBioraceUdzailWGrze = new Array();
var odpABioraceUdzailWGrze = new Array();
var odpBBioraceUdzailWGrze = new Array();
var odpCBioraceUdzailWGrze = new Array();
var odpDBioraceUdzailWGrze = new Array();
var poprawnaOdpowidzBioraceUdzailWGrze = new Array();

for (var i = 0; i <= 10; i++) {
    var brakPowturzenia = true;
    var rnd = Math.floor(Math.random() * bazaPytani.length);
    for (var j = 0; j < numerPytaniaWylosowanyZBazy.length; j++) {
        if (numerPytaniaWylosowanyZBazy[j] == rnd) {
            brakPowturzenia = false;
            i--;
            break;
        }
    }
    if (brakPowturzenia == true) {
        pytaniaBioraceUdzailWGrze[i] = bazaPytani[rnd];
        odpABioraceUdzailWGrze[i] = bazaOdpA[rnd];
        odpBBioraceUdzailWGrze[i] = bazaOdpB[rnd];
        odpCBioraceUdzailWGrze[i] = bazaOdpC[rnd];
        odpDBioraceUdzailWGrze[i] = bazaOdpD[rnd];
        poprawnaOdpowidzBioraceUdzailWGrze[i] = bazaPoprawnychOdpowidzi[rnd];
        numerPytaniaWylosowanyZBazy[i] = rnd;
    }
}

var numerRundy = 1;

var licznikCzasInterval;

function uaktualnieniePytania(nrPytania) {
    var i = 20

    document.getElementById("pytanie").innerHTML = pytaniaBioraceUdzailWGrze[nrPytania];
    document.getElementById("odpA").innerHTML = "A: " + odpABioraceUdzailWGrze[nrPytania];
    document.getElementById("odpB").innerHTML = "B: " + odpBBioraceUdzailWGrze[nrPytania];
    document.getElementById("odpC").innerHTML = "C: " + odpCBioraceUdzailWGrze[nrPytania];
    document.getElementById("odpD").innerHTML = "D: " + odpDBioraceUdzailWGrze[nrPytania];

    document.getElementById("licznikPieniedzy").innerHTML = "Twoja wygrana: " + (nrPytania - 1) * 100000 + "zł";

    document.getElementById("odpA").setAttribute('onclick', 'nastepnaRunda("a","' + poprawnaOdpowidzBioraceUdzailWGrze[nrPytania] + '")');
    document.getElementById("odpB").setAttribute('onclick', 'nastepnaRunda("b","' + poprawnaOdpowidzBioraceUdzailWGrze[nrPytania] + '")');
    document.getElementById("odpC").setAttribute('onclick', 'nastepnaRunda("c","' + poprawnaOdpowidzBioraceUdzailWGrze[nrPytania] + '")');
    document.getElementById("odpD").setAttribute('onclick', 'nastepnaRunda("d","' + poprawnaOdpowidzBioraceUdzailWGrze[nrPytania] + '")');

    document.getElementById("odpA").setAttribute('style', ';');
    document.getElementById("odpB").setAttribute('style', ';');
    document.getElementById("odpC").setAttribute('style', ';');
    document.getElementById("odpD").setAttribute('style', ';');

    document.getElementById("pasekPostepu").style.width = nrPytania * 10 + "%";

    document.getElementById("czasPozostalyNaOdpowiedzenie").innerHTML = "Czas pozostały na udzielenie odpowiedzi: 20s";

    licznikCzasInterval = setInterval(() => {
        i--;
        document.getElementById("czasPozostalyNaOdpowiedzenie").innerHTML = "Czas pozostały na udzielenie odpowiedzi: " + i + "s";
        if (i == 0) {
            document.getElementById("kontener").innerHTML = "Niestety czas na udzielenie odpowidzi minął. 😢 Udało ci się wygrać " + (nrPytania - 1) * 100000 + "zł." +
                '<br> <div id="jeszczeRaz" onclick="location.reload();">Zagraj jeszcze raz!</div>';
            document.getElementById("kontener").style.textAlign = "center";
            clearInterval(licznikCzasInterval);
        }
    }, 1000);
}

uaktualnieniePytania(1);

function nastepnaRunda(literkaOdpowidzi, porawnaOdpowidz) {
    literkaOdpowidzi = literkaOdpowidzi.toUpperCase();
    porawnaOdpowidz = porawnaOdpowidz.toUpperCase();
    numerRundy++;

    if (numerRundy > 10 && literkaOdpowidzi == porawnaOdpowidz) {
        document.getElementById("kontener").innerHTML = "Brawo udało ci się wygrać 1 000 000 zł" +
            '<br> <span id="jeszczeRaz" onclick="location.reload();">Zagraj jeszcze raz!</span>';
        document.getElementById("kontener").style.textAlign = "center";

        clearInterval(licznikCzasInterval);
    }
    else if (literkaOdpowidzi == porawnaOdpowidz) {
        document.getElementById("odp" + literkaOdpowidzi).style.color = "rgb(0, 255, 42)";
        document.getElementById("odp" + literkaOdpowidzi).style.borderColor = "rgb(0, 255, 42)";

        document.getElementById("odpA").style.cursor = "default";
        document.getElementById("odpB").style.cursor = "default";
        document.getElementById("odpC").style.cursor = "default";
        document.getElementById("odpD").style.cursor = "default";

        document.getElementById("odpA").setAttribute('onclick', ';');
        document.getElementById("odpB").setAttribute('onclick', ';');
        document.getElementById("odpC").setAttribute('onclick', ';');
        document.getElementById("odpD").setAttribute('onclick', ';');

        setTimeout(() => {
            uaktualnieniePytania(numerRundy);
        }, 1000);

        clearInterval(licznikCzasInterval);
    }
    else {
        document.getElementById("odp" + porawnaOdpowidz).style.color = "rgb(0, 255, 42)";
        document.getElementById("odp" + porawnaOdpowidz).style.borderColor = "rgb(0, 255, 42)";

        document.getElementById("odp" + literkaOdpowidzi).style.color = "rgb(255, 0, 0)";
        document.getElementById("odp" + literkaOdpowidzi).style.borderColor = "rgb(255, 0, 0)";

        document.getElementById("odpA").style.cursor = "default";
        document.getElementById("odpB").style.cursor = "default";
        document.getElementById("odpC").style.cursor = "default";
        document.getElementById("odpD").style.cursor = "default";

        document.getElementById("odpA").setAttribute('onclick', ';');
        document.getElementById("odpB").setAttribute('onclick', ';');
        document.getElementById("odpC").setAttribute('onclick', ';');
        document.getElementById("odpD").setAttribute('onclick', ';');

        setTimeout(() => {
            document.getElementById("kontener").innerHTML = "Brawo udało ci się wygrać " + (numerRundy - 1) * 100000 + " zł" +
                '<br> <div id="jeszczeRaz" onclick="location.reload();">Zagraj jeszcze raz!</div>';
            document.getElementById("kontener").style.textAlign = "center";
        }, 1000);

        clearInterval(licznikCzasInterval);
    }
}

document.getElementById("pytanie").addEventListener("click", () => {
    document.getElementById("kontener").innerHTML = "I co chciałeś skopiwać to pytanie i znaleźć na nie odpowiedź w DuckDuckGo. Nie ma tak." +
        '<br> <div id="jeszczeRaz" onclick="location.reload();">Masz jeszcze jedna szansę dobrze ją wykorzystaj.</div>';
    document.getElementById("kontener").style.textAlign = "center";
});