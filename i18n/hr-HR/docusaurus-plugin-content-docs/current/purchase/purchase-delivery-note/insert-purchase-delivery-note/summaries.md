---
title: Sažeci
sidebar_position: 5
---

U različitim sekcijama ove kartice prikazane su osnovne informacije o cijelom dokumentu i određeni posebni gumbi.

## Konačni popusti

Mogu se unijeti samo popusti izraženi u postotku koji se primjenjuju na ukupan iznos dokumenta.

Uneseni popusti u ovoj sekciji izračunavaju se i prikazuju za svaki članak dokumenta, u *kartici Artikli > kartica Popusti/Listini*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definirane u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovicu ili se kumulira s prethodno primijenjenim popustima.   
**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se vrši uzlaznim redoslijedom.   
**Kaskada/Iznos**: definira hoće li se popust izračunavati na osnovicu (cijena*količina - primijenjeni popusti) ili na osnovicu(cijena*količina).   
**Vrijednost**: numerička vrijednost konačnog popusta za primjenu.


## Troškovi

Prikazuje troškove unesene u podacima o kontaktu, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definirane u Vrstama troškova), dodjeljujući svakoj vrsti postotak troška za primjenu.   
**Postotak/Vrijednost**: polje koje određuje je li trošak izračunat postotkom ili unaprijed određenim novčanim iznosom.   
**Postotak**: numerička vrijednost postotka troška.  


## Sažetak PDV-a 

Prikazuje sažetak PDV-a dokumenta za svaki PDV kod.

## Pregled dospjeća plaćanja

Predstavlja sažetak rokova dokumenta za svaki *tip* i *uvjet* plaćanja.

**Broj**: progresivna vrijednost retka. 

**Plaćanje**: predstavlja alfanumerički kod Tipa plaćanja preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*.

**Iznos**: iznos izračunatog roka plaćanja. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka *Ručno mijenjanje*. (Automatski se vrše provjere i upozorenja na usklađenost iznosa rokova s ukupnim iznosom računa).

**Datum dospijeća**: datum izračunatog roka plaćanja. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka Ručno mijenjanje.

**Troškovi naplate**: polje u kojem se prikazuju izračunati troškovi naplate.

**PDV**: primjenjuje se na troškove naplate (može se također postaviti ručno).

**Razlog plaćanja**: moguće je izravno uključiti računsku stavku u račun koja dovodi do automatskog evidentiranja naplate/plaćanja. Važno je pažljivo pratiti predložak računa jer će koristiti i račune koji nemaju podračun, zbog čega postoji sljedeće polje.

**Konto podkonto kupca/dobavljača** računa koji koristi za naplatu/plaćanje (npr., blagajna ili banka).

**Br. priznanice**: eventualni broj priznanice za primljena sredstva.

**Jed.**: omogućuje knjiženje zatvaranja rokova u automatski generirane knjižne redove.

**Vrsta popusta**: Vrsta financijskog popusta.

**Dospjela vrijednost**: vrijednost financijskog popusta na naplatu
Detaljne deklaracije: referenca na izjavu o namjeri. PDV primijenjen na troškove naplate uvijek može biti na gornju/donju vrijednost PDV-a, pa je stoga potrebno omogućiti unos izjave o namjeri i ovdje (kao i za člancima i troškovima).

**ULAZNI RAČUNI**:

**Znak**: samo rokovi označeni ovom oznakom zatim se obrađuju u plaćanju s određenom oznakom i postavljenim kontom

**Modeli referentnih plaćanja**: model stvaranja koda plaćanja. U nekim stranim lokalizacijama svaki rok plaćanja u računu ima kod koji dodjeljuje izdavatelj računa: ovaj je kod strukturiran prema određenim posebnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao konstruirati prema određenom algoritmu.

**Kodovi modela plaćanja**: ovo je kod (strukturiran kao i prethodni model) koji se unosi u račun i stoga zatim u plaćanja koja se šalju banci, kako bi ova obavijestila primatelja koja dospjela plaćanja su plaćena (i tako automatizirala uvoz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava unutar stavke i u Sepa datoteci.

**Datum dospijeća plaćanja** unaprijed je predviđeno u formatu Sdi faktura, datum do kojeg se primjenjuje financijski popust.


## Dodatna polja

**Volumen**: ponuđena je zbrojna zapremina, rezultat zbroja zapremina članaka (vrijednost se preuzima iz *Šifarnik artikla  > kartica Težina/Dimenzije*), kada se jedinica mjere zapremine artikla podudara s onom unesenom u parametre otpremnice. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Neto/bruto težina**: ponuđena je zbrojna neto težina, rezultat zbroja težina članaka (vrijednost se preuzima iz *Šifarnik artikla > kartica Težina/ Dimenzije*), kada se jedinica mjere težine članaka podudara s onom unesenom u parametre dostavnice. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Paketi**: ponuđen je broj paketa, na temelju podataka unesenih u *šifarnik artikla > kartica Težina/ Dimenzije*, u poljima *Artikli prisutni samo u jednom paketu* ili *Paketi za artikl*. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Vrijednost ručno promijenjena**:

## Ukupno za dokument:

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikla;

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos artikla vrste poklona unesenih u karticu *Artikli*;

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta.

**Neto iznos predmeta**: *Iznos stavki bez popusta - Ukupni primjenjeni rabati*;

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikla;

**Neto iznos konačnih rabata**: *Neto iznos predmeta - Ukupno konačnih rabata*;

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao artikala *Tip troška*;

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u rešetku *Troškovi*;

**Trošak ovjere**: predstavlja zbroj troškova marke unesenih u rešetku *Troškovi*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u rešetku *Troškovi*;

**Osnovica**: *Neto iznos artikla - konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica + PDV*.
