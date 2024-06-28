---
title: Sažeci
sidebar_position: 5
---

U različitim sekcijama ovog taba prikazane su glavne informacije o cijelom dokumentu i neki posebni gumbi.

## Završni popusti

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, u kartici *Artikli > kartica Popusti/Listini*.

**Vrsta/Opis popusta**: Omogućuje odabir vrsta popusta (unaprijed definiranih u *Tipovi rabata*), dodjeljujući prioritet primjene popusta vrsti i određujući je li popust izračunat na osnovu oporezivog iznosa ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste.  
**Prioritet**: Predstavlja prioritet primjene popusta; redoslijed primjene raste.  
**Kaskada/Iznos**: Određuje je li izračun popusta zasnovan na (*cijena * količina*) - (*već izračunati popusti*) ili (*cijena * količina*).  
**Vrijednost**: Numerička vrijednost završnog popusta za primjenu.


## Troškovi

Prikazani su troškovi uneseni u osnovne podatke o kontaktu, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutačni dokument.

**Vrsta/Opis**: Omogućuje odabir vrsta troškova (unaprijed definiranih u *Vrstama troškova*), dodjeljujući vrsti postotak troška za primjenu.  
**Postotak/Vrijednost**: Polje koje određuje hoće li se troškovi izračunavati postotkom ili predefiniranom novčanom vrijednošću.  
**Postotak**: Numerička vrijednost postotka troška.  


## Sažeci PDV-a

Prikazuje sažetak PDV-a dokumenta, za svaki PDV.

## Pregled dospjeća plaćanja

Prikazuje sažetak rokova plaćanja dokumenta, za svaki *tip* i *način plaćanja*. 

**Broj**: progresivna vrijednost reda. 

**Plaćanje**: predstavlja alfanumerički kod *Vrste plaćanja* preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*. 

**Iznos**: izračunati iznos roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*. (Automatski se provjeravaju kontrole i upozorenja o usklađenosti između vrijednosti rokova plaćanja i ukupnog iznosa fakture).

**Datum dospijeća**: datum izračunatog dospijeća roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*.

**Troškovi naplate**: polje u kojem su prikazani troškovi naplate. 

**PDV**: Za primjenu na troškove naplate (može se postaviti i ručno)  
**Razlog plačanja**: izravno se može unijeti u fakturu knjigovodstveni račun koji se koristi za naplatu (npr. blagajna ili banka). Obratite pažnju na predložak razloga jer će koristiti i račune koji su prisutni čak i bez podračuna, zbog čega postoji sljedeće polje.  

**Račun/podračun klijenta/dobavljača**, račun koji se koristi za naplatu/plaćanje roka, zamjenjujući račun prisutan u računskom razlogu plaćanja (ili naplate).

**Br. primitka**: eventualni broj primitka za primljene novce. 

**Jed.**: aktivira knjiženje zatvaranja rokova plaćanja u automatiziranim zapisima.

**Vrsta popusta**: vrsta financijskog popusta.

**Dospjela vrijednost**: vrijednost financijskog popusta na naplatu.

**Detaljne deklaracije**: to je referenca na izjavu o namjeri. PDV primijenjen na troškove naplate uvijek može biti PDV iznad pragova, pa je stoga potrebno omogućiti unos povezane izjave o namjeri (kao i za redove artikala i troškova).

**ULAZNI RAČUNI**:

**Znak**: samo rokovi plaćanja koji imaju ovu zastavu zatim se obrađuju u plaćanju s odabranim uzrokom i postavljenim računom. 

**Modeli plaćanja za referencu**: Model stvaranja koda plaćanja. U nekim stranim lokalizacijama svaki rok plaćanja u računu ima kod dodijeljen od strane fakturanta: ovaj je kod strukturiran prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao konstruirati algoritmom.

**Kodovi modela plaćanja**: ovo je kod (strukturiran prema prethodnom modelu) koji se unosi u stavku i stoga u plaćanja koja se šalju banci, kako bi ova obavijestila primatelja koja je dospjela obveza plaćena (i tako automatizirala uvoz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava u stavku i datoteci Sepa.  

**Rok plaćanja u gotovini**: Ovo je polje koje zahtijeva format računa Sdi, rok za primjenu financijskog popusta.



## Popratni račun

Prikazuje mrežu u koju se može unijeti pripadajuća prateća faktura.

## Ostala polja

**Završne napomene**: to je slobodno polje koje korisnik može ispuniti, uključujući *Pomoć kod kodiranih napomena*.

## Ukupni dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih stavki; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos stavki tipa poklon unesenih u karticu *Stavke*;    

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na stavkama, ali bez konačnih popusta. 

**Neto iznos artikala**: *Iznos stavki bez popusta - Ukupni primjenjeni rabati*;  

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos stavki; 

**Neto iznos konačnih popusta**: *Neto iznos stavki - Ukupno konačnih rabata*;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao stavke *Vrste troškova*;  

**Troškovi naplate**: predstavlja zbroj unesenih troškova naplate u mrežu *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj unesenih troškova marke u mrežu *Troškovi*;  

**Trošak dokumentacije**: predstavlja vrijednost unesenih troškova u mrežu *Troškovi*;  

**Osnovica**: *Neto iznos stavki - Konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u pregledima PDV-a;  

**Ukupno**: *Osnovica + PDV*.
