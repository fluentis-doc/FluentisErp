---
title: Dodela resursa WBS-u
sidebar_position: 3
---

## Dodela resursa WBS-u

Funkcionalnost **Dodela resursa WBS-u** omogućava povezivanje resursa sa WBS-ovima projekta bez otvaranja projekta, uz direktno korišćenje kalendara za prikaz stvarnog angažovanja resursa.

Dostupna je uz licencu Fluentis Universal, a otvara se putem menija **Upravljanje projektima > Planiranje resursa WBS-u**.

# Filteri

Prilikom otvaranja potrebno je odabrati kalendare resursa na kojima se želi raditi, putem kartice **Filteri** koja se nalazi u donjem levom delu ekrana.

Kliknite na **Pretraži** kako biste prikazali sve dostupne resurse, a zatim prevucite one koje želite da koristite u okvir sa desne strane.

Nakon toga potrebno je odabrati projekte na kojima se želi raditi. Detalji strukture projekta biće vidljivi na kartici **Kalendar po projektu**, koja se nalazi pri dnu ekrana, pored filtera.

Oznaka **WBS sa preostalim danima** prikazaće projekte kod kojih je broj „Dodeljenih dana” veći od broja „Predviđenih dana”.

**Opšti filteri**:

Na ovoj kartici moguće je odabrati:

- koji će se tipovi dokumenata prikazivati u kalendarima: Zahtevi za intervenciju, Planirane intervencije, Intervencije, Prijave aktivnosti, Resursi dodeljeni WBS-u projekta i Godišnji odmori.
- Opcija **Istakni dane resursa koji imaju raspoloživost** bojom označava pozadinu dana tokom kojih nije dodeljen ceo vremenski raspon resursa.

Dani sa raspoloživim vremenom biće označeni tirkiznom bojom.

Svaki tip dokumenta u kalendaru može imati različitu boju kako bi se lakše razlikovao.

Konfiguracija se obavlja u tabelama tipova dokumenata. Na primer, u tabeli Tipovi intervencija za svaki tip intervencije moguće je definisati zasebnu boju.

Na isti način postupa se sa zahtevima za intervenciju, planiranim intervencijama i prijavama aktivnosti.

Samo sastanci resursa dodeljenih projektu nemaju mogućnost izbora boje. Njihova boja odgovaraće boji kalendara resursa. Ti sastanci mogu se prepoznati po oznaci „PR” (Project resource) koja se prikazuje nakon vremena održavanja.

Ako postoje zahtevi za godišnji odmor ili odsustvo, pozadina će se promeniti u narandžastu boju. Ako je povezana aktivnost generisana na osnovu zahteva za godišnji odmor, prikazaće se u zavisnosti od opcije **Godišnji odmori** u filteru „Dokumenti”.

# Kalendar po projektu

Na ovom ekranu moguće je prevući pojedinačne WBS-ove u kalendar jednog ili više resursa i odabrati tip dokumenta koji treba kreirati.

Prikazuje se celokupna struktura projekta sa sledećim podacima: broj reda, WBS broj, opis WBS-a, datum početka i datum završetka, dodeljeni dani, predviđeni dani, planirani dani i izvršeni dani.

Pomoću dugmadi na traci moguće je **Proširiti** i **Sažeti** celu strukturu.

Odaberite pojedinačni WBS najnižeg nivoa i prevucite ga na željeni dan u kalendaru.

Otvoriće se ekran na kojem je moguće odrediti resurs (koji se automatski predlaže na osnovu kalendara u koji se dodaje sastanak), vreme početka i završetka i pauzu (preuzete iz radne smene resursa), kao i dokument koji treba generisati:

- Dodela resursa WBS-u projekta
- Zahtev za intervenciju
- Planirana intervencija
- Intervencija

Sastanak može biti jednokratan ili ponavljajući, a ponavljanje se konfiguriše putem odgovarajućeg dugmeta **Ponavljanje**:

- dnevno: svakih *N* dana ili svakog dana
- nedeljno: svakih *N* nedelja i određenim danima
- mesečno: određenog dana u mesecu, svakih *N* meseci ili *prvog/drugog/trećeg/četvrtog/poslednjeg* dana svakih *N* meseci
- godišnje: svakih *N* godina, na određeni datum ili svakog *prvog/drugog/trećeg/četvrtog/poslednjeg* dana određenog meseca.

Završetak ponavljanja određuje broj sastanaka koji će biti dodeljeni prema prethodno definisanim pravilima:

- Bez datuma završetka
- Završetak nakon: *N* ponavljanja. Podrazumevano se predlaže vrednost navedena u polju „Predviđeni dani”.
- Završetak na: *određeni datum*

U zavisnosti od tipa dokumenta koji treba generisati, izvršiće se sledeće radnje:

- **Dodela resursa WBS-u projekta**: na karticu „Resursi” dodaće se red za odabrani WBS projekta.
- **Zahtev za intervenciju**: na karticu „Resursi” dodaće se red za odabrani WBS projekta, a zahtev za intervenciju automatski će se generisati.
- **Planirana intervencija**: na karticu „Resursi” dodaće se red za odabrani WBS projekta, a planirana intervencija automatski će se generisati.
- **Intervencija**: na karticu „Resursi” dodaće se red za odabrani WBS projekta, generisaće se planirana intervencija, a zatim i stvarna intervencija.

Ako za odabrani dan već postoje drugi dokumenti, sistem će zatražiti potvrdu da li želite da preklopite sastanak.

Ako je za isti dan predviđeno više sastanaka i nije moguće sve prikazati, prikazaće se strelica koja otvara detaljan prikaz tog dana.

Sastanci prikazuju tri glavne informacije:

- vreme početka i završetka – opis tipa dokumenta
- kupac
- WBS projekta

Postavljanjem pokazivača miša iznad sastanka prikazaće se opis sa dodatnim detaljima.

Dvostrukim klikom moguće je otvoriti odgovarajući dokument.

U kalendaru je dostupna i funkcionalnost prevlačenja i ispuštanja (drag & drop). Prevlačenjem sastanka sa jednog dana na drugi ili sa jednog resursa na drugi automatski će se ažurirati podaci u odgovarajućim dokumentima.

Ova operacija nije dozvoljena za intervencije čiji status nije „Uneto”, niti za fakturisane aktivnosti.

**Kalendar po projektu**: ispod strukture projekta nalazi se proširivi odeljak sa malim kalendarom namenjenim isključivo tom projektu, koji prikazuje sastanke prema projektu, a ne prema resursu.