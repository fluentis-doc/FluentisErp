---
title: Sažeci 
sidebar_position: 4
---

U različitim dijelovima ove kartice prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi. 

## PDV/Rokovi 

### Sažetak PDV-a

Prikazan je pregled PDV-a dokumenta, za svaki PDV.

### Sažetak rokova

Prikazuje pregled rokova dokumenta, za svaki *tip i način plaćanja*.

**Broj**: progresivna vrijednost retka.    
**Plaćanje**: predstavlja alfanumerički kod *Način plaćanja preuzet iz zaglavlja dokumenta > kartica Plaćanja*.

**Iznos**: izračunati iznos roka. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka *Ručno uređivanje*. (Automatski se provjeravaju i upozorenja o podudarnosti vrijednosti rokova i ukupnog računa)

**Datum dospijeća**: izračunati datum dospijeća. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka Ručno uređivanje.

**Troškovi naplate**: polje u kojem su prikazani izračunati troškovi inkasa.

**PDV**: koji se primjenjuje na troškove inkasa (može se postaviti i ručno)

**Predložak plaćanja**: moguće je izravno unijeti u račun računsku sljedivost koja rezultira automatskim zapisom naplate/plaćanja. Obratiti pažnju na predložak računske sljedivosti jer će koristiti prisutne račune čak i bez podračuna, zbog čega postoji sljedeće polje.

**Račun s podračunom kupca/dobavljača** koji se koristi za naplatu/plaćanje (npr. gotovina ili banka) roka, što zamjenjuje prisutni račun u računskoj kauzalnosti plaćanja (ili inkasa)

**Primka broj**: eventualni broj računa za primljene novce

**Jed.**: aktivira računovodstvo zatvaranja rokova u automatskom zapisu

**Vrsta popusta**: vrsta financijskog popusta

**Dospjela vrijednost**: vrijednost financijskog popusta po naplati

**Detaljne deklaracije**: To je referenca na izjavu namjere. PDV primijenjen na troškove inkasa može uvijek biti PDV plafond, pa je stoga potrebno moći unijeti i povezanu izjavu namjere (kao kod redaka stavki i troškova)

**ULAZNI RAČUNI**:

**Znak**: samo rokovi s ovom oznakom kasnije se obrađuju u plaćanju s postavljenim računom i računom.

**Modeli referentnog plaćanja**: model stvaranja kodova plaćanja. U nekim stranim lokalizacijama svaki rok u računu ima kod dodijeljen od strane fakturanta: ovaj se kod strukturira prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao izgraditi kod pomoću algoritma.

**Šifre modela plaćanja**: ovo je šifra (strukturirana kao prethodni model) koju treba navesti u stavci, a zatim u plaćanjima koje se šalju banci, kako bi ona obavijestila korisnika o tome koji je rok plaćen (i tako automatizirala uvoz iz bankovnih transakcija s zatvaranjem stavke). Odatle se ispunjava unutar stavke i u Sepa datoteci.

**Ograničenje datuma plaćanja unaprijed**: Ovo je polje predviđeno u SDI formatu računa, rok do kojeg se može primijeniti financijski popust.

Općenito, rokovi dospijeća ponovno se izračunavaju ako se promijeni plaćanje u zaglavlju dokumenta. Slučajevi u kojima se rokovi dospijeća ne ažuriraju ako se promijeni plaćanje u zaglavlju su sljedeći:

- Kada je račun povezan s SDI poveznicom i ima status različit od NotExamined, Controlled, Canceled, Excluded;  
- Kada postoji barem jedan rok dospijeća s aktivnom značajkom *Ručna izmjena*;  
- Kada je račun povezan s jednim ili više efektima ili povezan s linijom FSAdvanceInvoiceMaturity;     
- Kada postoji popust na rok dospijeća koji ne dolazi iz plaćanja;   
- Kada je ukupan iznos u mreži Plaćanja veći od osnovice računa;   
- Ili ako su računi mijenjani izvan Fluentisa.  

## Trgovački predstavnici/Rabati/Naknade

### Konačni popusti artikala 

Mogu se unijeti samo konačna sniženja izražena u postotku, koja će se primijeniti na ukupni iznos dokumenta. 

Sniženja unesena u ovom dijelu izračunavaju se i prikazuju za svaki artikl u dokumentu, u *kartici Artikli > kartici Sniženja/Cjenici*.

**Vrsta/Opis sniženja**: omogućuje odabir vrsta popusta (predefinirane u *Vrstama sniženja*), dodjeljujući vrsti prioritet primjene popusta i određujući je li popust na osnovicu ili se kumulativno primjenjuje s prethodno primijenjenim popustima.  
**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se vrši uzlazno.  
**Cijena prije sniženja**: određuje da li se popust izračunava na (*cijena x količina*) - (*prethodno izračunati popusti*) ili (*cijena x količina*).
**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.  

### Troškovi/Popusti

Prikazani su troškovi uneseni u šifarnik kontakta, u kartici *Troškovi/Sniženja*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument. 

**Vrsta/Opis**: omogućuje odabir vrsta troškova (predefiniranih u Vrstama troškova), dodjeljujući vrsti postotak troškova koji se primjenjuje.   
**Postotak/Vrijednost**: polje koje određuje treba li se troškovi izračunati postotkom ili unaprijed određenom novčanom vrijednošću.   
**Postotak**: numerička vrijednost postotka troškova. 

## Ostala polja

**Završne napomene**: opisno polje koje korisnik može popuniti uz  *Pomoć za šifrirane napomene*.

## Ukupni iznos dokumenta 

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos artikala tipa poklona unesenih u kartici *Artikli*. 

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala - Ukupni primijenjeni popusti*;  

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala;   

**Neto iznos s primijenjenim konačnim popustima**: *Neto iznos artikala - Ukupni primijenjeni konačni popusti*;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Vrste troškova*;   

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u kartici *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u kartici *Troškovi*;     

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u kartici *Troškovi*; 

**Osnovica**: *Neto iznos artikala - Konačni popusti + Ukupni nepodmireni troškovi + Ukupni dokumentirani troškovi*;

**PDV**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a; 

**Ukupno**: *Osnovica + PDV*.