---
title: Otpreme/dostave
sidebar_position: 3
---

:::important Čemu služi
Modul **Otpreme/dostave** u sistemu Fluentis predstavlja značajan napredak u upravljanju logistikom i operativnim procesima. Razvijen je kako bi optimizovao i pojednostavio postupak otpreme i omogućio efikasniju i integrisaniju kontrolu svih logističkih aktivnosti.

Sistem upravljanja otpremama omogućava i korišćenje funkcionalnosti **grupisanja**, odnosno objedinjavanje pošiljki različitih kupaca ili dobavljača u jednu transportnu jedinicu.

Takav način konsolidacije donosi brojne prednosti:

- **Smanjenje troškova**: objedinjavanjem pošiljki bolje se koristi raspoloživi prostor za utovar i smanjuju se troškovi prevoza po jedinici robe. Ova funkcionalnost je posebno korisna za kompanije koje otpremaju manje količine robe.
- **Operativna efikasnost**: objedinjavanje više pošiljki u jedan transport pojednostavljuje logističke procese, skraćuje vreme prevoza i povećava ukupnu efikasnost.
- **Fleksibilnost i skalabilnost**: kompanije mogu lako prilagoditi strategiju otpreme promenama potražnje i tržišnim uslovima, kao i efikasnije upravljati vršnim opterećenjima i rokovima isporuke.

Na kraju, modul **Otpreme/dostave** omogućava optimizaciju logističkih procesa, povećava efikasnost poslovanja i smanjuje troškove, uz istovremeno održavanje visokog nivoa usluge i zadovoljstva kupaca.
:::

Forma **Nova otprema** otvara se:

- putem menija **Logistika > Dostave > Nova otprema**
- ili pritiskom na dugme **Novo** u formi [Pretraga otprema](/docs/logistics/shipping/search-shippings).

Prilikom otvaranja forme automatski se predlažu **Datum** i **Godina**, ali ih korisnik po potrebi može promeniti.

## 1. Obavezni podaci

- **Vrsta dostave**: određuje vrstu otpreme i automatski dodeljuje **broj otpreme**. Podešava se u **Konfiguracija > Tabele > Logistika > [Vrste otpreme](/docs/configurations/tables/logistics/shipping-type)**.
- **Status dostave**: početni status definisan u **Konfiguracija > Tabele > Logistika > [Statusi otpreme](/docs/configurations/tables/logistics/shipping-states)**.
- **Prevoz putem**: korisnik može odabrati jednu od opcija: **Pošiljalac**, **Primalac** ili **Prevoznik**.
- **Broj**: svakom dokumentu dodeljuje se broj prema numeraciji definisanoj za odabranu vrstu otpreme.
- **Prevoznik**: određuje prevoznika koji će izvršiti otpremu.
- **Kupac**: određuje kupca kome je otprema namenjena.

## 2. Zaglavlje

Nakon odabira obaveznih podataka u gornjem delu forme, korisnik može nastaviti sa unosom sledećih podataka.

### Podaci o rasporedu

- **Datum početka**: određuje datum početka otpreme.
- **Datum završetka**: određuje datum završetka otpreme.
- **Planirani sati**: prikazuje ukupan broj sati potrebnih za izvršenje otpreme. Vrednost se automatski izračunava na osnovu datuma početka i završetka.

### Podaci o vozilu i vozaču

- **Vozilo**: omogućava odabir vozila kojim će se izvršiti otprema iz tabele [Vozila](/docs/logistics/motorvehicles/motorvehicle).
- **Dodeljeni vozač**: omogućava odabir vozača iz tabele [Vozači vozila](/docs/logistics/motorvehicles/motorvehicle-drivers).
- **Volumen**: određuje volumen pošiljke i pripadajuću mernu jedinicu.
- **Neto težina**: određuje neto težinu pošiljke i pripadajuću mernu jedinicu.
- **Bruto težina**: određuje bruto težinu pošiljke i pripadajuću mernu jedinicu.

### Podaci o robi

- **Spoljašnji izgled robe**: omogućava odabir izgleda robe iz tabele [Spoljašnji izgled robe](/docs/configurations/tables/logistics/type-of-packaging/).
- **Broj za praćenje (Tracking)**: određuje broj za praćenje otpreme. Ova vrednost se automatski predlaže za sve otpreme dodate na kartici **Grupisanje**.
- **Ukupan broj paketa**: određuje ukupan broj paketa u pošiljci.

### Podaci o valuti

- **Valuta**: sadrži podatke o [valuti](/docs/guide/common/glossary/glossary-intro#currency).
- **Datum valute**: određuje [datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).

### Podaci o primaocu i odredištu

- **Proizvodno mesto**: omogućava odabir proizvodne lokacije sa koje će se izvršiti otprema. Nakon odabira automatski se preuzima adresa kontakta povezanog sa proizvodnom lokacijom i upisuje u polje **Adresa primaoca**.
- **Adresa primaoca**: prilikom otvaranja forme automatski se popunjava adresom kompanije, odnosno uobičajenim mestom otpreme robe. Po potrebi ju je moguće ručno izmeniti.
- **Adresa odredišta**: određuje adresu na koju se roba isporučuje.

### Podaci o pošiljci

- **Otprema**: omogućava unos podataka o [otpremi](/docs/guide/common/glossary/glossary-intro#shipment).
- **Paritet isporuke**: omogućava unos podataka o [paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage).
- **Pakovanje**: omogućava unos podataka o [ambalaži](/docs/guide/common/glossary/glossary-intro#packing).

### Napomena

- **Napomena**: omogućava unos slobodne napomene.
- **Početna napomena**: omogućava unos dodatne slobodne napomene.

### Status izvršenja otpreme

- **Status izvršenja**: kada se otprema izvrši putem otpremnice (DDT) ili izlaznog računa, status se automatski menja iz **Neizvršeno** u **Delimično izvršeno** ili **Izvršeno**. Korisnik može ručno postaviti status **Prisilno izvršeno** ukoliko želi označiti otpremu kao izvršenu iako nije u potpunosti realizovana.
- **Datum zatvaranja**: određuje datum izvršenja dokumenta.

## 3. Groupage (grupisanje)

Na ovoj kartici unose se svi podaci vezani za **groupage (grupisanje)**.

**Grupisanje** predstavlja objedinjavanje više pošiljki različitih pošiljalaca, namenjenih istom geografskom području, u jedan utovar ili kontejner. Na taj način optimalno se koristi raspoloživi prostor u prevoznim sredstvima (kamionima, brodskim kontejnerima ili avionima), čime se omogućava ekonomičniji prevoz u odnosu na pojedinačnu otpremu svake pošiljke.

### Grupisanje pošiljke

U ovu tabelu unose se podaci o svim pošiljkama koje pripadaju ovom **grupisanju**. Novu pošiljku moguće je dodati unosom podataka u novi red ili pritiskom na dugme **Novo** na alatnoj traci.

Dostupne kolone grupisane su prema sledećim kategorijama.

### Podaci o otpremi

- **Broj reda**: redni broj stavke otpreme. Dodeljuje se automatski.
- **Datum početka**: datum i vreme početka otpreme.
- **Datum završetka**: datum i vreme završetka otpreme.
- **Planirani sati**: trajanje otpreme u satima. Vrednost se automatski izračunava na osnovu datuma početka i završetka.
- **Broj praćenja (Tracking)**: broj za praćenje pojedinačne otpreme. Ako je definisan u zaglavlju dokumenta, automatski se predlaže za sve novokreirane pošiljke, ali ga korisnik može ručno promeniti.

### Adresa mesta utovara

- **Polazište**: naziv ili kompanija mesta utovara.
- **Poštanski broj**: poštanski broj mesta utovara.
- **Grad**: grad mesta utovara.
- **Okrug**: okrug mesta utovara.
- **Adresa mesta utovara**: adresa mesta utovara. Prema podrazumevanim podešavanjima preuzima se adresa kompanije definisana u zaglavlju dokumenta, ali ju je moguće ručno izmeniti.

### Adresa odredišta

- **Odredište**: naziv ili kompanija odredišta.
- **Poštanski broj**: poštanski broj odredišta.
- **Grad**: grad odredišta.
- **Okrug**: okrug odredišta.
- **Adresa odredišta**: adresa odredišta. Automatski se preuzima iz šifarnika kupaca, ali ju korisnik po potrebi može ručno izmeniti.

### Motorno vozilo

- **Vozilo**: određuje vozilo kojim će se izvršiti otprema.
- **Dodeljeni vozač**: određuje vozača koji će izvršiti otpremu.

Za svaki red **grupisanja** moguće je proširiti detalje pritiskom na znak **+** i upravljati dodatnim podacima.

#### Podaci o mestu utovara

- **Telefon**: telefonski broj mesta utovara.
- **E-mail**: adresa elektronske pošte mesta utovara.
- **Napomena**: slobodna napomena vezana za mesto utovara.

#### Podaci o odredištu

- **Telefon**: telefonski broj odredišta.
- **E-mail**: adresa elektronske pošte odredišta.
- **Napomena**: slobodna napomena vezana za odredište.

### Artikli otpreme

U ovoj sekciji prikazuju se svi artikli koji pripadaju otpremi odabranoj u **grupisanju**.

Novi artikl moguće je dodati:

- unosom podataka u novi red tabele
- pritiskom na dugme **Novo** na alatnoj traci.

Artikle je takođe moguće preuzeti direktno iz narudžbina kupaca pomoću funkcije **Prenos artikala**.

Pritiskom na dugme **Prebaci artikle** otvara se forma **Povezivanje narudžbina kupaca**, u kojoj se prema podrazumevanim podešavanjima u filteru **Kupac** automatski predlaže kupac odabrane otpreme.

Nakon pritiska na dugme **Traži**, u desnoj tabeli prikazuju se svi artikli iz **neizvršenih** i **delimično izvršenih** narudžbina tog kupca.

Na levoj strani forme prikazane su tabele:

- **Grupisanje dostave**
- **Artikli za otpremu**

sa podacima preuzetim iz glavne forme grupisanja.

Korisnik zatim može metodom **drag & drop** prevući artikle iz desne tabele direktno na željenu otpremu. Sistem će ih automatski dodati u tabelu **Artikli otpreme** odgovarajuće pošiljke.

Po potrebi je moguće dodavati i artikle iz narudžbina drugih kupaca promenom vrednosti u filteru **Kupac** i ponovnim pritiskom na dugme **Traži**.

Nakon završetka dodavanja svih artikala potrebno je pritisnuti dugme **Preuzmi** kako bi se potvrdile sve izmene.

#### Specifična polja

- **Broj reda**: označava broj reda artikla unetog u **grupisanje**.
- **Klasa**: označava klasu artikla.
- **Artikl**: označava šifru artikla.
- **Varijanta artikla**: označava varijantu artikla.
- **Opis varijante**: prikazuje opis odabrane varijante artikla.
- **Merna jedinica**: označava mernu jedinicu artikla.
- **Marka**: prikazuje marku definisanu u *Šifarniku artikala*.
- **Količina**: označava količinu artikla.
- **Alternativna merna jedinica**: označava alternativnu mernu jedinicu artikla.
- **Alternativna količina**: označava količinu izraženu u alternativnoj mernoj jedinici.
- **Volumen**: označava volumen artikla.
- **Neto masa**: označava neto masu artikla.
- **Bruto masa**: označava bruto masu artikla.
- **Konto narudžbine kupca**: prikazuje konto narudžbine kupca kojoj artikl pripada.
- **Tip narudžbine kupca**: prikazuje tip narudžbine kupca kojoj artikl pripada.
- **Datum narudžbine kupca**: prikazuje datum narudžbine kupca kojoj artikl pripada.
- **Račun ili otpremnica**: prikazuje referencu računa ili otpremnice kreirane pritiskom na dugmad **Račun** ili **Otpremnica/Primka**. Vrednost se prikazuje u obliku: *vrsta dokumenta / datum dokumenta / broj dokumenta*.
- **Referenca pickinga**: prikazuje referencu picking dokumenta kreiranog pritiskom na dugme **Picking**. Vrednost se prikazuje u obliku: *vrsta dokumenta / datum dokumenta / broj dokumenta*.

#### Specifična dugmad

- **Nova otprema**: omogućava dodavanje nove otpreme u **grupisanje**.
- **Obriši otpremu**: uklanja odabranu otpremu iz **grupisanja**.
- **Prebaci artikle**: omogućava dodavanje artikala u otpremu direktno iz narudžbina kupaca.
- **Otpremnica/Primka**: automatski kreira [Otpremnice](/docs/sales/sales-delivery-notes/general-overview) za odabrane otpreme u **grupisanju**.
- **Račun**: automatski kreira [Izlazne račune](/docs/sales/sales-invoices/general-overview) za odabrane otpreme u **grupisanju**.
- **Picking (slaganje robe)**: automatski kreira [Picking](/docs/logistics/picking/picking-intro) za odabrane otpreme u **grupisanju**.

## **4. Sažeci**

Na kartici **Sažeci** prikazane su informacije o troškovima celog dokumenta.

### Troškovi

U ovoj tabeli moguće je uneti dodatne troškove (pozitivne vrednosti) ili popuste (negativne vrednosti).

Unete stavke primenjuju se na ceo dokument i ne raspoređuju se na pojedinačne redove artikala. Mogu predstavljati dodatne troškove, ukupne popuste ili druga uvećanja koja se odnose na celu otpremu.

Za unos nove stavke potrebno je popuniti sledeća polja:

- **Broj reda**: označava redni broj stavke troška i automatski se dodeljuje.
- **Vrsta troška / Opis**: omogućava odabir vrste troška definisane u tabeli [Vrste troškova](/docs/configurations/tables/general-settings/expenses-types/).
- **Iznos troška**: označava vrednost troška izraženu u valuti dokumenta.
- **Opis troška**: omogućava unos dodatnog opisa ili detalja o trošku.
- **Porez**: omogućava odabir odgovarajuće stope PDV-a definisane u tabeli [PDV stope / Načini obračuna PDV-a](/docs/configurations/tables/finance/vat-rates/).

Sa desne strane forme nalaze se sledeća polja:

- **Završne napomene**: omogućava unos slobodne napomene.
- **Ukupan iznos**: prikazuje ukupan iznos otpreme, izračunat kao zbir svih stavki unetih u tabelu **Troškovi**.