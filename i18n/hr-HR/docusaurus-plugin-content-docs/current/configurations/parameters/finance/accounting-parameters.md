---
title: Računovodstveni parametri
sidebar_position: 2
---

Obrazac Računovodstveni parametri omogućuje vam definiranje različitih upravljačkih parametara za **svaku odabranu obračunsku godinu**.

:::tip VAŽNO
Mora postojati zapis koji sadrži različite detaljne parametre za **svaku obračunsku godinu**. Stoga se **svaka nova godina** mora inicijalizirati stvaranjem novog zapisa parametra svaku obračunsku godinu pomoću gumba **Novo**.

Kada kreirate novi zapis parametra, program vas pita želite li kreirati i [**druge brojače nove godine**](/docs/configurations/utility/new-year-counter-generation).
:::

---

### Specifični gumbi

:::note GUMBI NA TRACI IZBORNIKA
**Spremi:** spremi postavke godine

**Unos računa:** za umetanje popisa računa Kupca/Dobavljača u mrežu dopušta automatsku zamjenu generičkog računa u referenci s vlasnikom podračuna poreznog dokumenta, kao i blokiranje ili prijavu nekompatibilnih računa.

**Izbriši račun:** za brisanje prethodno unesenih računa.

**Otkaži zaključni izvještaj:** za nastavak otkazivanja konačnih ispisa dnevnika. Nakon što je konačni ispis poništen, korisnik mora resetirati odgovarajući brojač koji odgovara polju ***Datum zadnjeg ispisa dnevnika***, u odjeljku ***Podaci o godini***, sastavljenom od tri okvira koji sadrže datum, zadnji redak i posljednju stranicu definitivnog ispisa.

**Izbriši knjigu amortizacije:** za poništavanje konačnih ispisa knjige sredstava. Nakon što je konačni ispis otkazan, korisnik mora resetirati odgovarajući brojač stranica koji odgovara polju ***Zadnja stranica ispisana iz temeljnice osnovnih sredstava*** u odjeljku  ***Podaci o godini***.

**Premjesti gore:** za pomicanje odabranog retka prema gore unutar rešetke "Prijedlog troškovno-profitnog centra", dajući mu viši prioritet.

**Premjesti dolje:** za pomicanje odabranog retka prema dolje unutar rešetke "Prijedlog centra troška/profita", dajući mu niži prioritet.
:::

---

## Općenito

### Podaci za godinu

**(Početak/Kraj) Vježba:** Definira raspon datuma snimanja odabrane vježbe. Svaki računovodstveni unos, za provjere prethodnih polja, unosi se u financijsku godinu kojoj pripada s obzirom na ove datume, koji se ne smiju preklapati između različitih financijskih godina.  

**(Početak/Kraj) Obračunski period:** Preporučena izborna polja definiraju raspon datuma kompetencija kojima se može upravljati unutar snimki odabrane vježbe.

**(Početak/Kraj) Tekuće razdoblje:** Obavezna polja, ona definiraju raspon datuma dokumenata kojima se može upravljati unutar zapisa odabrane financijske godine.

**Zatvaranje prethodnog perioda knjiženja:** Definira datum zatvaranja prethodne financijske godine.  

**Zadnji datum ispisa temeljnice:** Pohranjuje posljednji konačni ispisani datum za tekuću financijsku godinu. Prilikom otvaranja nove poslovne godine, ovaj datum mora odgovarati datumu završetka prethodne poslovne godine.  

**Duguje/potražuje saldo:** Pohranjuje posljednje dugovno/kreditno stanje dnevnika odabrane financijske godine, konačno ispisano. Prilikom izrade nove vježbe ova polja moraju biti postavljena na nulu.  

**Datum/posljednji redak/ Zadnji datum ispisa temeljnice:** Pohranjuje posljednju konačno ispisanu stranicu knjige sredstava odabrane financijske godine. Prilikom izrade nove vježbe ovo polje mora biti postavljeno na nulu.  

**Zadnja stranica ispisana iz temeljnice osnovnih sredstava:** Pohranjuje posljednju konačno ispisanu stranicu knjige sredstava odabrane financijske godine. Prilikom izrade nove vježbe ovo polje mora biti postavljeno na nulu.  

**Predložak otvaranja i zatvaranja računa:** Dva polja, koja nisu obavezna, omogućuju vam da unaprijed postavite razloge koji će se koristiti u postupcima zatvaranja/otvaranja računa.  

**Postotak za nepotpuno razdoblje:** Polje vam omogućuje da postavite postotnu vrijednost pro-rata važećeg za odabranu financijsku godinu. Ako ovo nije opcija, koristite polje ostavite praznim ili postavite na 100%.  

**Umetni tip knjiženja PDV-a:** Polje omogućuje definiranje zadane vrste obračuna stopa PDV-a na različitim podračunima kontnog plana.  

**Mjesečno zatvaranje:** Ako je aktivno, mijenja funkcioniranje postupka *Automatskog zatvaranja računa* kako bi se moglo izvršiti mjesečno prema potrebi u nekim inozemnim lokacijama (osobito u istočnoj Europi). **Postavka se ne preporučuje za Italiju**.

:::danger[PAŽNJA]  
Ova oznaka mora biti postavljena na neaktivno za uobičajeno talijansko računovodstvo. Ako je aktivirana (npr. slučajno), osim što će se primijetiti neke razlike u obrascu za provođenje zatvaranja računa, uočit će se nemogućnost izračuna i upravljanja obračunatim prihodima i rashodima u obrascu *Zapisi usklađenja*.
:::

**Upravljanje komisijom:** Aktivirajte funkcije za upravljanje obračunom agentskih provizija iz modula Administracija. 

**Postotak aktualizacije:** Označava povećanje vrijednosti imovine iz godine u godinu za potrebe amortizacije koja se posebno izračunava unutar modula Kontroling i kojom se upravlja u raznim drugim detaljima unutar kartice  *Amortizacija za kontroling* koja je prisutna u postavci lista imovine [*Obrazac kategorija imovine za kontroling*](/docs/configurations/tables/controlling/analytical-accounting/controlling-asset-categories).    
**PRIMJER:** Unosom vrijednosti 1,1 svake godine ćete imati povećanje amortizirajuće vrijednosti imovine od 10%, stoga će imovina početne vrijednosti 1000 imati vrijednost 1100 u godini x+1 i u godine x+2 dodat će se daljnji porast prema istoj logici.  

**Obračun PDV-a:** Postavite učestalost periodičnih obračuna PDV-a. Zastavice su međusobno alternativne, a dvije glavne odnose se na mjesečnu ili tromjesečnu periodičnost, ovisno o prometu (vidi pravila o PDV-u). Treća se odnosi na subjekte koji su tromjesečni "po prirodi" u skladu s posebnim režimom članka 74 DPR 633/72.  

**Minimalni dug za uplatu PDV-a**: predstavlja iznos (podložan mogućim promjenama prema propisima o PDV-u) ispod kojeg dug koji proizlazi iz periodičnog obračuna PDV-a nije obavezan. Ovo polje utječe na ispis periodičnog obračuna i na obradu tromjesečne prijave (Li.Pe.).

**Knjige PDV-a:** Postavite zaokruživanje PDV-a uvijek prema gore odabirom 'Lira' ili prema Euro logici.  

**Knjige PDV-a:** Definira hoće li se ispisivati PDV knjige po datumu registracije ili po datumu obračuna PDV-a unutar odabranog razdoblja. Za one koji ne iskoriste mogućnost odgode naplate do 15. sljedećeg mjeseca rezultat se ne mijenja.  

**Datum obračuna u gornjoj/donjoj vrijednosti:** Definira treba li datum obračuna plafona koji se dodjeljuje pokretima PDV-a sa stopom povezanom s plafonom postaviti na temelju datuma registracije ili datuma dokumenta.   

**Numeracija:** Omogućuje vam da svaku odabranu godinu povežete s brojnikom za konačne računovodstvene evidencije i one u "privremenom" statusu. Korisno u slučaju povremenih promjena u politici numeriranja umjesto fiksne definicije brojnika u tablici [Numeriranje računovodstvenog zapisa](/docs/configurations/tables/fluentis-numerations). SAko numeriranje nije postavljeno u ovom obrascu, prema zadanim postavkama i dalje će se tražiti u tablici *Numeriranje računovodstvenog zapisa*. Postavka šifranika za konačne i privremene registracije također je prisutna unutar svakog pojedinačnog računovodstvenog razloga (kako bi se razlikovali brojevi za svaku vrstu pisma, kako zahtijevaju neke strane lokalizacije, obično francuska) [*u zaglavlju predložak* ](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header) i ako nije postavljen u razlogu, prema zadanim postavkama čitat će se onaj postavljen u ovom obrascu općih parametara. Ako ni ovdje nije definiran brojnik, čitat će se onaj koji je prisutan u općoj tablici, kao što je gore navedeno.

**Autofaktura:** Odjeljak sadrži parametre za izradu samofakture iz knjigovodstvene evidencije za priopćavanje podataka o kupnji u SDI. Vidi [**specifične parametre** ](/docs/finance-area/e-invoice/auto-invoice/parameters) 

**Intrastat:** Ovaj odjeljak sadrži nekoliko polja vezanih za obradu i izvoz Intrastat obrazaca.

- Prikaži detalje prirode transakcije: S nedavnom izmjenom propisa uveden je detalj vezan za polje prirode transakcije, koji se može učiniti vidljivim aktiviranjem zastavice. (Podsjećamo da ovo detaljno polje popunjavaju oni koji prelaze prag od 20 milijuna eura za isporuke prema obrascu intra 1 bis ili za nabave prema obrascu intra 2 bis tijekom godine.) Za pojedinosti o kodiranju novog stupca B vezanog uz detalje prirode transakcije pogledajte uputstva ministarstva.

- Identifikacijski kod ovlaštenog korisnika: U ovom polju moguće je specificirati kodiranje za naziv izvezenog datoteke koja sadrži popise (također zabilježeno u zaglavlju zapisa) za slanje datoteka putem kanala Entratel.

- Periodičnost Intrastat Nabava / Prodaja: Padajući izbornici omogućuju postavljanje mjesečne ili tromjesečne periodičnosti, za nabave i prodaje, prema kojima će biti zahtijevana, u skladu s propisima, veća ili manja razina detalja u popunjavanju podataka. N.B. trenutno je tromjesečna periodičnost za nabave ukinuta.

**PDV na maržu:** U ovom se odjeljku unose specifični parametri za upravljanje funkcionalnostima vezanim uz režim PDV-a na maržu. Za pojedinosti pogledajte [**ovdje**](/docs/finance-area/particular-cases/VAT_regime-del-maine)

---

### Popis računa Kupaca/Dobavljača

**Dodjela** vrsta računa kupca, dobavljača, banke i agenta s odgovarajućim računima (glavne knjige bez šifre podračuna) koje treba provesti u ovoj mreži, iako nije obavezno, <u>**snažno se preporučuje**</u> kako bi se omogućili različiti automatizmi unutar upravljanja sustava.  
Posebno ističemo dva slučaja:    
1. Nakon stvaranja zapisa kontakta, kada dodijelite vrstu računa i naknadno dobijete pojedinosti zapisa, parametar vam omogućuje stvaranje novog računovodstvenog podračuna namijenjenog dotičnom kupcu ili dobavljaču ili agentu ili banci, stavljajući ga pod ispravan glavni račun . Bez ovog uparivanja ovaj bi se zadatak morao unijeti ručno.    
2. Unutar računovodstvenih predložaka, posebno onih za registraciju faktura, registracijska shema koja izvješćuje o određenom glavnom računu omogućuje, kroz dotičnu kombinaciju, provjeru da li se ispravan glavni račun koristi u registraciji (na primjer, račun dobavljača u registraciji kupnje umjesto računa istog naziva, ali tipa kupca, moguće blokiranje umetanja ovisno o postavci odgovarajućeg sigurnosnog parametra u predlošku).    
**PAŽNJA:** Postavka dopušta automatsku zamjenu generičkog računa u razlogu plaćanja s podračunom koji drži porezni dokument, stoga nedostatak postavke neće učiniti da automatski razlozi za razloge rade ispravno, učinkovito sprječavajući fakture od automatski se obračunavaju. Prijedlog centra troška/profita od:
U odjeljku je definiran logičan redoslijed računovodstvenog vrednovanja troškovno-profitnih centara.  

---

### Predloži troškovni/profitni centar iz: {#center-proposal}

U odjeljku je definiran logičan redoslijed računovodstvenog vrednovanja troškovno-profitnih centara.  

Mogu se pomicati pomoću gumba *Premjesti gore/Premjesti  dolje*, koji se nalaze na traci vrpce, kako bi se upravljalo prioritetom čitanja koji se uvijek pojavljuje odozgo prema dolje, stoga će prvi na popisu biti prvi čitaj, ako se cdc ne nađe idemo na drugi itd...  

**<u>NAPOMENA:</u>** trenutno se kriterij *Industrijskog troška* mora smatrati zastarjelim i stoga će se očitavanje zapravo primarno odvijati iz kontnog plana ili iz matičnih podataka kupca.

---
## Računi

U ovoj kartici detaljno postavljate konta kontnog plana koji će se koristiti u različitim automatskim računovodstvenim postupcima koje provodi sustav upravljanja.

**Detaljni konto-ulazni PDV**: omogućuje vam da postavite podračun koji će se predložiti u automatskom otkrivanju povrata PDV-a kada se periodično plaćanje PDV-a definitivno ispisuje.  
**Detaljni konto-izlazni PDV**: omogućuje vam da postavite podračun koji će se predložiti u automatskom otkrivanju povrata PDV-a kada se periodično plaćanje PDV-a definitivno ispisuje.   
**Početno financijsko stanje**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog otvaranja računa.  
**Tekuća dobit prije oporezivanja**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog zatvaranja/otvaranja računa.  
**Gubitak tekućeg računovodstvenog razdoblja**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog zatvaranja/otvaranja računa.  
**Prethodna dobit prije oporezivanja**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog zatvaranja/otvaranja računa.  
**Predhodni gubitak prije oporezivanja**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog zatvaranja/otvaranja računa.   
**Račun dobiti i gubitka**: omogućuje vam da postavite podračun koji će se predložiti za operacije automatskog zatvaranja računa.    
**Kapitalni gubitak**: omogućuje vam postavljanje podračuna koji će se koristiti za priznavanje negativnih ekonomskih razlika od prodaje imovine.   
**Kapitalni dobitak**: omogućuje vam da postavite podračun koji će se koristiti za priznavanje pozitivnih ekonomskih razlika od prodaje imovine.  
**Nepredviđena dobit**: omogućuje vam postavljanje podračuna koji će se koristiti za otkrivanje nepredviđene imovine.  
**Nepredviđeni gubitak**: omogućuje vam da postavite podračun koji će se koristiti za evidentiranje potencijalnih obveza.  
**Nepredviđena imovina**: omogućuje vam postavljanje podračuna koji će se koristiti za otkrivanje aktivnog nepostojanja.  
**Potencijalne obveze**: omogućuje vam da postavite podračun koji će se koristiti za otkrivanje pasivnih nedostataka.  
**Obveza za obračunati porez**: omogućuje vam da postavite podračun koji će se predložiti u automatskom otkrivanju prijave PDV-a kada se periodično plaćanje PDV-a definitivno ispisuje.  
**Pretporez**: omogućuje vam da postavite kreditni podračun prema riznici koji će se predložiti u automatskom otkrivanju povrata PDV-a kada se periodično plaćanje PDV-a konačno ispiše.  
**Konto razmatranja**: omogućuje vam da postavite podračun fiktivnog kupca za priznavanje imovine za naknade.  
**Prijeboj konto odštete**: aktivno ako je prethodni račun razmatranja aktiviran, omogućuje vam da postavite podračun ekonomskog kompenzacije naknada koje treba provjeriti.  
**Stopa PDV-a na primitke**: aktivna ako je aktiviran račun za prethodna plaćanja, omogućuje postavljanje stope PDV-a za evidentiranje isplata koje treba objaviti.  
**Nezaprimljeni računi**: omogućuje vam da postavite generički podračun koji će se koristiti u postupku 'Računovodstvo za primljene fakture' koji je prisutan u modulu 'Fakture za kupnju' ili u računovodstvu faktura za kupnju vrste koja uključuje upravljanje razgraničenje.  
**Računi koji će biti izdani**: omogućuje vam da postavite generički podračun koji će se koristiti u računovodstvu za prodajne fakture vrste koja uključuje obračunsko upravljanje.  
**Odgođene naknade**: omogućuje vam da postavite generički podračun koji će se koristiti u postupku automatske prilagodbe modula 'Privremena godišnja zatvaranja'.  
**Nastali prihod**: omogućuje vam da postavite generički podračun koji će se koristiti u postupku automatskih prilagodbi modula 'Privremena godišnja zatvaranja'.   
**Odgođeni dohodak**: omogućuje vam da postavite generički podračun koji će se koristiti u postupku automatskih prilagodbi modula 'Zaključci međugodišnjih godina'.  
**Nastali trošak**: omogućuje vam da postavite generički podračun koji će se koristiti u postupku automatskih prilagodbi modula 'Zaključci međugodine'.  
**F24 Model računa**: omogućuje vam postavljanje generičkog podračuna koji će se koristiti u računovodstvenom postupku obrasca F24.  
**INPS račun**: omogućuje vam postavljanje generičkog podračuna koji će se koristiti u računovodstvenom postupku obrasca F24.  
**Ostali porezni računi**: omogućuje vam postavljanje generičkog podračuna koji će se koristiti u računovodstvenom postupku obrasca F24.   
**Podkonto autofakture**: omogućuje postavljanje podkonta za izradu samofakture iz knjigovodstvene evidencije za priopćavanje podataka o kupnji u SDI. [**Specifični parametri**](/docs/finance-area/e-invoice/auto-invoice/parameters).  
**Drugi protuvrijednosni likvidacijski PDV kamata:**  omogućuje automatizaciju knjiženja zateznih kamata koje proizlaze iz tromjesečnog obračuna PDV-a unosom željenog proturačuna (troška).  

---

### VIDEO TUTORIALI O PARAMETRIMA

:::important Vidi također
[**VIDEO TUTORIALI O PARAMETRIMA**](/docs/video/finance/intro)
:::
