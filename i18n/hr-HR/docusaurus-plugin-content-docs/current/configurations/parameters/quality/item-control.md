---
title: Parametri za kontrolu artikala
sidebar_position: 1
---

Parametri se nalaze na putu **Parametri > Kvaliteta > Parametri za kontrolu artikala**.

Podaci prisutni u ovom upravljanju koriste se za predlaganje informacija u upravljanjima:  
- **Tehnička uputstva**;   
- **Kontrolni planovi**;   
- **Kontrola artikala**;   
- **Certifikati analiza**.   

#### Specifična tipka

**Spremi**: omogućuje spremanje izmijenjenih informacija. 

## Općenito   

U ovom kartici moguće je unijeti podatke koji se zadano predlažu u dokumentima modula *Kontrola artikala*.   

### Vrsta testiranja     

U ovom ekspanderu moguće je unijeti podatke koje treba predložiti u *Vrsta testiranja*.   
U expanderu je moguće unijeti:   
- **Vrsta iznosa**: *Vrsta iznosa* da predloži unos jednog *Vrsta testa*.   
- **Vrsta limita**: *Vrsta limita* da predloži unos jednog *Vrsta testa*.   

### Tehnički listovi   

U ovom expanderu moguće je unijeti podatke za predlaganje u *Tehničke listove*.   
U expanderu je moguće unijeti:    
- **Vrsta podatkovnog lista**: *Vrsta podatkovnog lista* za predlaganje pri unosu *Tehničkog lista*.   
- **Odgovoran**: *Zaposlenik* koji se predlaže kao odgovorna osoba pri unosu *Tehničkog lista*.   
- **Vrsta deklaracije u artiklima**: *Vrsta izjave* za predlaganje pri unosu *Povezanog artikla* u *Tehničkom listu*.    
- **Vrsta izjave za ispis**: *Vrsta izjave* za predlaganje u *Vrsta izjave za ispis u slučaju da artikal nije opremljen* u  *Ispis tehničkog lista*.   

### Planovi kontrole      

U ovom proširivom dijelu moguće je unijeti podatke za predlaganje u *Planove kontrole*.   
U proširivom dijelu moguće je unijeti:    
- **Vrsta plana kontrole**: *Vrsta plana kontrole* za predlaganje pri unosu *Plana kontrole*.   
- **Odgovorna osoba**: *Zaposlenik* za predlaganje kao odgovorna osoba pri unosu *Plana kontrole*.   

### Certifikati analize     

U ovom proširivom dijelu moguće je unijeti podatke za predlaganje u *Certifikate analize*.   
U proširivom dijelu moguće je unijeti:    
- **Vrsta certifikata**: *Vrsta certifikata analize* za predlaganje pri unosu *Certifikata analize*.   
- **Odgovorna osoba**: *Zaposlenik* za predlaganje kao odgovorna osoba pri unosu *Certifikata analize*.   


## Kontrola artikala

U ovom tabulatoru moguće je unijeti podatke:  
> - za predlaganje po defaultu u *Kontroli artikala*;   
> - za definiranje različitih boja koje se koriste u filteru pretrage za prepoznavanje različitih stanja *Kontrole*;   
> - za postavljanje upravljačkih parametara;     
> - za automatsku pretragu i povezivanje *Planova kontrole* koje treba povezati s *Kontrolom artikla*.   

- **Omogući višestruko očitavanje vrijednosti**: označava omogućavanje mogućnosti očitavanja više vrijednosti za svaki test, u svim vrstama dokumenata.     
- **Automatsko odobrenje očitanih vrijednosti**: označava automatsko *Odobrenje* *Testa* aprilikom očitavanja *Vrijednosti* i *Ishoda*.   
- **Prijedlog negativnog rezultata**: popis unaprijed definiranih vrijednosti koje sustav koristi za određivanje metodologije dodjele nesukladnost *Testu*.    
> Metodologija se uzima u obzir samo za očitavanje *Testova* tipa *Numerički* u *Višestrukom očitavanju vrijednosti*. Predefinirane vrijednosti su:     
> - *pri prvoj zabilježenoj nesukladnoj vrijednosti*;   
> - *na osnovu aritmetičke sredine očitanih vrijednosti (samo numeričke vrijednosti)*.   
>
- **Vrsta negativnog rezultata**: prijedlog *Vrste ishoda* u slučaju nesukladnih *Testova*.   
- **Vrsta pozitivnog rezultata**: prijedlog *Vrste ishoda* u slučaju nesukladnih *Testova*.   


### Vrste dokumenata za uvoz        

U ovom proširivom dijelu/popisu moguće je unijeti podatke koji se uzimaju u obzir tijekom *Uvoza artikala za kontrolu* i predlažu se u *Kontroli artikla*.   
Tablica sadrži vrste dokumenata kojima upravlja *Kontrola artikala*.   
Radi se o unaprijed definiranim vrstama u sustavu kojima se ne mogu dodavati nove ili brisati postojeće. Predefinirane vrijednosti su:  
> - *Prijem robe*;   
> - *Primka*;   
> - *Ulazni račun*;   
> - *Izvješćivanje proizvodnje*;   
> - *Faza Izrada narudžbe*;   
> - *Povrat od podizvođača*;   
> - *Rukovanje teretom*.   

U popisu, za svaku vrstu dokumenta, moguće je unijeti:    
- **Def.**: označava vrstu dokumenta koja se predlaže u filterima pretrage; može se odabrati samo jedna vrsta ili nijedna.    
- **Detalj artikla**: popis unaprijed definiranih vrijednosti koje sustav koristi za identifikaciju vrste detalja za kontrolu *Artikla* za određenu vrstu dokumenta. Predefinirane vrijednosti su:    
>- *Nijedan* - redak *Artikla* neće imati dodatne detalje;   
>- *Lot* - redak *Artikla* ima najviše detalje u obliku *Serije*;   
>- *S.N.* - redak *Artikla* ima najviše detalje u obliku *Serijskog broja*;   
>- *Utovarna jedinica* - redak *Artikla* ima najviše detalje u obliku *Jedinice utovara*;   
>
- **Višestr.**: označava je li omogućeno *Višestruko očitavanje vrijednosti* u *Kontroli artikala* za određenu vrstu dokumenta.  
> Kako bi se omogućila ova funkcionalnost, potrebno je u općim postavkama označiti parametar *Omogući višestruko očitavanje vrijednosti*.   
- **Vrsta kontrole**: *Vrsta kontrole* koja se automatski predlaže prilikom unosa nove *Kontrole artikala* za određenu vrstu dokumenta.     
- **Tip kontrolnog plana**: tijekom *Uvoza artikala za kontrolu*, osim za vrste dokumenata vezane uz proizvodnju (*Izjava o proizvodnji* i *Faza proizvodnog naloga*), ova postavka ima najveći prioritet prilikom traženja *Tip kontrolnog plana* koji se pridružuje *Kontroli artikala*.     
- **Opis kontrola tipa**: opis odabranog *Tipa kontrole*.   
- **Opis tipa upravljačkog plana**: opis odabranog *Tipa kontrolnog plana*.   

### Boje redaka u Kontroli artikala    

U ovom popisu moguće je definirati različite boje kako bi se lakše prepoznala različita stanja pojedine *Kontrole artikala*.   
Te se boje primjenjuju unutar *filtera Kontrola artikala*. Popis sadrži sljedeće informacije:  
- **Tip**: označava stanje *Kontrole artikla* kojem treba pridružiti određene boje.    
> Tablica sadrži unaprijed definirane vrijednosti koje nije moguće dodavati, brisati niti mijenjati. Predefinirane vrijednosti su:  
> - *Artikli koji nisu predmet kontrole*;   
> - *Kontrole bez plana upravljanja*;   
> - *Kontrola planova kontrole*;   
> - *Kontrole nisu otkrivene*;   
> - *Kontrole s nezadovoljnim rezultatom*;   
> - *Provjerite opet biti potvrđene*;   
> - *Već validirani Kontrole*.   
>
- **Pozadina**: boja koja se primjenjuje na pozadinu retka za određeno stanje *Kontrole artikla*.   
- **Tekst**: boja teksta retka za određeno stanje *Kontrole artikla*.   

### Prilagodba podataka po vrsti dokumenta      

U ovom je popisu moguće dodati *Svojstva* izvornog dokumenta u prikaz podataka unutar *Kontrole artikala*.   
Tablica sadrži iste vrste dokumenata kao one navedene u odjeljku **Vrste dokumenata za uvoz**.   
Radi se o vrstama dokumenata koje su unaprijed definirane u sustavu i nije ih moguće dodavati niti brisati.    
Za svaku vrstu podatka moguće je unijeti do 5 informacija, ovisno o tipu: *Tekst*, *Da/Ne*, *Cijeli broj*, *Decimalni broj*, *Datum*.   
Dvaput klikom na ćeliju moguće je odabrati željeno *Svojstvo* dokumenta.   

:::tip *Primjer*:   
Za vrstu dokumenta *Ulazna faktura* moguće je dodati vrijednost iz zaglavlja, npr. *Svojstvo* *Vaša referenca*.   
Budući da je *Vaša referenca* tekstualna informacija, dvostrukim klikom miša na stupac *Tekst 01* pokreće se pomoć s popisom svojstava redaka dokumenta *Ulazna faktura*.   
Potrebno je proširiti stavku *Invoice (Faktura)*, odabrati svojstvo *Your reference (Vaša referenca)* i pritisnuti tipku *Odaberi*.   
U ćeliji u kojoj je izvršen odabir prikazat će se svojstvo *YourReference*.
:::

### Prilagodba zaglavlja stupaca po vrsti dokumenta       

U ovom popisu moguće je unijeti *Naslov svojstva*, koji odgovara prethodno odabranim *Svojstvima* iz popisa **Prilagodba podataka po vrsti dokumenta** i koji će se prikazivati u prikazu podataka unutar *Kontrole artikala*.   
Tablica sadrži iste vrste dokumenata kao i u odjeljku **Vrste dokumenata za uvoz**.   
Radi se o vrstama koje su unaprijed definirane u sustavu te ih nije moguće dodavati niti brisati.  
Moguće je postaviti do 5 informacija po tipu podatka: *Tekst*, *Da/Ne*, *Cijeli broj*, *Decimalni broj*, *Datum*.   
Dvaput klikom na ćeliju moguće je odabrati željeni unos iz *rječnika* koji će se prikazivati kao naziv stupca.  
 
:::tip *Primjer:*   
Za vrstu dokumenta *Ulazna faktura* moguće je postaviti zaglavlje koje odgovara prethodno navedenom primjeru za svojstvo zaglavlja *Vaša referenca*.    
Dvaput klikom na stupac *Tekst 01* ili ručnim unosom naziva iz rječnika, unesite *Vaša referenca*.   
:::

Za sve ostale funkcionalnosti koje nisu posebno objašnjene u ovom dokumentu, pogledajte sljedeću poveznicu: [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).