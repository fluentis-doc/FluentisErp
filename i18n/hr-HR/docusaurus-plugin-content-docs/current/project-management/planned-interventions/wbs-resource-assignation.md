---
title: Dodjela resursa WBS-u
sidebar_position: 3
---

## Dodjela resursa WBS-u

Funkcionalnost **Dodjela resursa WBS-u** omogućuje povezivanje resursa s WBS-ovima projekta bez otvaranja projekta, uz izravno korištenje kalendara za prikaz stvarnih angažmana resursa.

Dostupna je uz licencu Fluentis Universal, a otvara se putem izbornika **Upravljanje projektima > Planiranje resursa WBS-u**.

# Filtri

Prilikom otvaranja potrebno je odabrati kalendare resursa na kojima se želi raditi, putem kartice **Filtri** koja se nalazi u donjem lijevom dijelu zaslona.

Kliknite na **Traži** kako biste prikazali sve dostupne resurse, a zatim povucite one koje želite koristiti u okvir s desne strane.

Nakon toga potrebno je odabrati projekte na kojima se želi raditi. Detalji strukture projekta bit će vidljivi na kartici **Kalendar po projektu**, koja se nalazi pri dnu zaslona, pokraj filtara.

Oznaka **WBS s preostalim danima** prikazat će projekte kod kojih je broj „Dodijeljenih dana” veći od broja „Predviđenih dana”.

**Opći filtri**:

Na ovoj kartici moguće je odabrati:

- koje će se vrste dokumenata prikazivati u kalendarima: Zahtjevi za intervenciju, Planirane intervencije, Intervencije, Prijave aktivnosti, Resursi dodijeljeni WBS-u projekta i Godišnji odmori.
- Opcija **Istakni dane resursa koji imaju raspoloživost** bojom označava pozadinu dana tijekom kojih nije dodijeljen cijeli vremenski raspon resursa.

Dani s raspoloživim vremenom bit će označeni tirkiznom bojom.

Svaka vrsta dokumenta u kalendaru može imati različitu boju kako bi se lakše razlikovala.

Konfiguracija se provodi u tablicama vrsta dokumenata. Primjerice, u tablici Vrste intervencija za svaku je vrstu intervencije moguće definirati zasebnu boju.

Na isti se način postupa sa zahtjevima za intervenciju, planiranim intervencijama i prijavama aktivnosti.

Samo sastanci resursa dodijeljenih projektu nemaju mogućnost odabira boje. Njihova će boja odgovarati boji kalendara resursa. Ti se sastanci mogu prepoznati po oznaci „PR” (Project resource) koja se prikazuje nakon vremena održavanja.

Ako postoje zahtjevi za godišnji odmor ili dopust, pozadina će se promijeniti u narančastu boju. Ako je povezana aktivnost generirana na temelju zahtjeva za godišnji odmor, prikazat će se ovisno o opciji **Godišnji odmori** u filtru „Dokumenti”.

# Kalendar po projektu

Na ovom je zaslonu moguće povući pojedinačne WBS-ove u kalendar jednog ili više resursa te odabrati vrstu dokumenta koju treba kreirati.

Prikazuje se cjelokupna struktura projekta sa sljedećim podacima: broj retka, WBS broj, opis WBS-a, datum početka i datum završetka, dodijeljeni dani, predviđeni dani, planirani dani i izvršeni dani.

Pomoću gumba na vrpci moguće je **Proširiti** i **Sažeti** cijelu strukturu.

Odaberite pojedinačni WBS najniže razine i povucite ga na željeni dan u kalendaru.

Otvorit će se zaslon na kojem je moguće odrediti resurs (koji se automatski predlaže na temelju kalendara u koji se dodaje sastanak), vrijeme početka i završetka te stanku (preuzete iz radne smjene resursa), kao i dokument koji treba generirati:

- Dodjela resursa WBS-u projekta
- Zahtjev za intervenciju
- Planirana intervencija
- Intervencija

Sastanak može biti jednokratan ili ponavljajući, a ponavljanje se konfigurira putem odgovarajućeg gumba **Ponavljanje**:

- dnevno: svakih *N* dana ili svaki dan
- tjedno: svakih *N* tjedana i određenim danima
- mjesečno: određenog dana u mjesecu, svakih *N* mjeseci ili *prvog/drugog/trećeg/četvrtog/posljednjeg* dana svakih *N* mjeseci
- godišnje: svakih *N* godina, na određeni datum ili svakog *prvog/drugog/trećeg/četvrtog/posljednjeg* dana određenog mjeseca.

Završetak ponavljanja određuje broj sastanaka koji će se dodijeliti prema prethodno definiranim pravilima:

- Bez datuma završetka
- Završetak nakon: *N* ponavljanja. Zadano se predlaže vrijednost navedena u polju „Predviđeni dani”.
- Završetak na: *određeni datum*

Ovisno o vrsti dokumenta koji treba generirati, izvršit će se sljedeće radnje:

- **Dodjela resursa WBS-u projekta**: u karticu „Resursi” dodat će se redak za odabrani WBS projekta.
- **Zahtjev za intervenciju**: u karticu „Resursi” dodat će se redak za odabrani WBS projekta, a zahtjev za intervenciju automatski će se generirati.
- **Planirana intervencija**: u karticu „Resursi” dodat će se redak za odabrani WBS projekta, a planirana intervencija automatski će se generirati.
- **Intervencija**: u karticu „Resursi” dodat će se redak za odabrani WBS projekta, generirat će se planirana intervencija, a zatim i stvarna intervencija.

Ako za odabrani dan već postoje drugi dokumenti, sustav će zatražiti potvrdu želite li preklopiti sastanak.

Ako je za isti dan predviđeno više sastanaka i nije ih moguće sve prikazati, prikazat će se strelica koja otvara detaljan prikaz tog dana.

Sastanci prikazuju tri glavne informacije:

- vrijeme početka i završetka – opis vrste dokumenta
- kupac
- WBS projekta

Postavljanjem pokazivača miša iznad sastanka prikazat će se opis s dodatnim detaljima.

Dvostrukim klikom moguće je otvoriti odgovarajući dokument.

U kalendaru je dostupna i funkcionalnost povlačenja i ispuštanja (drag & drop). Povlačenjem sastanka s jednog dana na drugi ili s jednog resursa na drugi automatski će se ažurirati podaci u odgovarajućim dokumentima.

Ova operacija nije dopuštena za intervencije čiji status nije „Uneseno” niti za fakturirane aktivnosti.

**Kalendar po projektu**: ispod strukture projekta nalazi se proširivi odjeljak s malim kalendarom namijenjenim isključivo tom projektu, koji prikazuje sastanke prema projektu, a ne prema resursu.