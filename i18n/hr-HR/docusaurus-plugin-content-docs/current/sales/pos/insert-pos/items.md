---
title: Artikli
sidebar_position: 2
---

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, obratite se na sljedeći link [ Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se mogu unositi [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

## Artikli

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste ispunili različite podatke ili koristiti gumb **Novo** koji se nalazi na gornjem izborniku.


### Obavezni podaci

**Broj linije**: ovo će se polje automatski popuniti progresivno prilikom unosa podataka u red.

**Tip linije** pruža mogućnost odabira artikala s različitim karakteristikama:
> **Artikl sa klasom**: to su artikli kodirani u anagrafici i mogu se knjižiti u analitičkom knjigovodstvu i registrirati u skladištu;     
> **Bilješka**: to je jednostavna napomena, ne utječe na knjigovodstvo i skladište;     
> **Gratis artikl**: ovaj tip retka označava da je artikl unesen u tom retku poklon, pa stoga nema troškova za kupca;

**Klasa/Kod/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će ponuditi sve relativne podatke unesene u šifarnik artikla.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijante*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: ponuđena je glavna M.J. artikla, ali korisnik može odabrati drugu mjernu jedinicu.

**Varijante**: ako odabrani artikl ima varijante, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od standardne postavljene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne U.M. i po zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za isporuku (npr. iz narudžbe dobavljača).

**Cijena s PDV-om**: predstavlja cijenu s PDV-om i mora biti unesena unaprijed u Registar artikla > kartica Troškovi i može biti različita za skladišta;

**PDV** i **Osnovica**: automatski se izračunavaju, preuzimajući vrijednosti iz cijene s PDV-om.


*Posebni gumbi*
> **Upravljanje pakiranjem**: otvara upravljanje pakiranjem koje će se koristiti u dokumentu kupnje.
Gumb postaje aktivan ako je dokument spremljen, ali nije učitan.
Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete: unesite količinu, odaberite redak i izvršite prijenos odabranog pakiranja na retke artikla klikom na gumb **Izvrši**. U ovom obrascu prikazani su artikli koji su uneseni kao pakiranje i koji su prisutni u tablici **Pakiranja**. 
 
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen novi cjenik).
Klikom na padajući izbornik pored gumba, moći ćete stvoriti novi cjenik ako ga još nema.



## Popusti/Cjenici

**Popusti**: ponuđeni su svi popusti povezani s artiklom, svaki s vlastitim izračunom i dodjelom. Popusti se mogu preuzeti: iz podataka o kupcu, iz rješenja plaćanja dodijeljenih dokumentu, iz cjenika iz asocijacije cjenika-kupac. Svi predloženi podaci mogu se mijenjati.

**Vrijednosti cjenika**: ponuđen je cjenik iz kojeg je artikl preuzet, s datumom početka/završetka važenja i s posebnim uvjetima prodaje (npr. razrede popusta) dodijeljenim artiklu u cjeniku.

*Posebni gumb*
> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem izborniku.


## Detalj artikla 

Unutar ove kartice, možete pronaći/dodati dodatne informacije o artiklu.

**Artikl**: prikazuje informacije o odabranom artiklu iz tablice artikala.

**PDV**: prvenstveno koristi PDV unesen u polje PDV u Šifarnik kontakata. Ako to nije dostupno, koristi se vrijednost iz Šifarnika artikala, ali korisnik ima mogućnost unosa druge vrijednosti. Ovo polje je obavezno.

**Projekt**: projekt povezan s dokumentom ili može biti dodijeljen uz pomoć pomoći polja;

**Marka**: prikazuje marku artikla, preuzetu iz šifarnika ili cjenika artikla;

**Promet prodaje**: prikazuje prodaju artikla, preuzetu iz *Šifarnik artikli > kartica Općenito*.

Ako ovo nije dostupno, neće biti prikazani nikakvi podaci, ali tijekom knjiženja uzet će se u obzir vrijednost unesena u polje  *Trošak/Profit* u zadanim *Šifarnik Kontakata > Računovodstvo > kartica Administracija* 

**Skladište i predložak**: automatski se prikazuju skladište i uzrok koji će se automatski pojaviti prilikom pražnjenja artikala iz skladišta. Podaci se preuzimaju iz tablice *Tipovi POS-a*.

**Napomene**: omogućuje dodavanje bilješki za svaki artikl.

## Trgovački predstavnici

**Predstavnik**: predstavnik povezan s odabranim artiklom i pripadajuća provizija; podaci odgovaraju onima koji su dostupni u *Zaglavlju > kartici Predstavnici*. Postotak se može promijeniti.

*Poseban gumb*
> **Obriši predstavnika**: omogućuje brisanje povezanog predstavnika s odabranim artiklom.


### Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje se raspoređuju vrijednosti artikala.

Ovi podaci mogu biti uneseni ručno ili *automatski* (ako su troškovni/profitni centri unaprijed uneseni u *kontakte*, *šifarnik artikala* ili u *plan konta*).
