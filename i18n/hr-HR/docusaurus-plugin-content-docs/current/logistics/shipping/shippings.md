---
title: Otpreme/dostave
sidebar_position: 3
---

:::important Čemu služi
Modul **Otpreme/dostave** u sustavu Fluentis predstavlja značajan napredak u upravljanju logistikom i operativnim procesima. Razvijen je kako bi optimizirao i pojednostavio postupak otpreme te omogućio učinkovitiju i integriraniju kontrolu svih logističkih aktivnosti.

Sustav upravljanja otpremama omogućuje i korištenje funkcionalnosti **grupiranja**, odnosno objedinjavanje pošiljaka različitih kupaca ili dobavljača u jednu transportnu jedinicu.

Takav način konsolidacije donosi brojne prednosti:

- **Smanjenje troškova**: objedinjavanjem pošiljaka bolje se iskorištava raspoloživi prostor za utovar te se smanjuju troškovi prijevoza po jedinici robe. Ova je funkcionalnost posebno korisna za tvrtke koje otpremaju manje količine robe.
- **Operativna učinkovitost**: objedinjavanje više pošiljaka u jedan transport pojednostavljuje logističke procese, skraćuje vrijeme prijevoza i povećava ukupnu učinkovitost.
- **Fleksibilnost i skalabilnost**: tvrtke mogu jednostavno prilagoditi strategiju otpreme promjenama potražnje i tržišnim uvjetima te učinkovitije upravljati vršnim opterećenjima i rokovima isporuke.

U konačnici, modul **Otpreme/dostave** omogućuje optimizaciju logističkih procesa, povećava učinkovitost poslovanja i smanjuje troškove, uz istodobno održavanje visoke razine usluge i zadovoljstva kupaca.
:::

Forma **Nova otprema** otvara se:

- putem izbornika **Logistika > Dostave > Nova otprema**
- ili pritiskom na gumb **Novo** u formi [Pretraga otprema](/docs/logistics/shipping/search-shippings).

Prilikom otvaranja forme automatski se predlažu **Datum** i **Godina**, no korisnik ih može po potrebi promijeniti.

## 1. Obvezni podaci

- **Vrsta dostave**: određuje vrstu otpreme te automatski dodjeljuje **broj otpreme**. Postavlja se u **Konfiguracija > Tablice > Logistika > [Vrste otpreme](/docs/configurations/tables/logistics/shipping-type)**.
- **Status dostave**: početni status definiran u **Konfiguracija > Tablice > Logistika > [Statusi otpreme](/docs/configurations/tables/logistics/shipping-states)**.
- **Prijevoz putem**: korisnik može odabrati jednu od opcija: **Pošiljatelj**, **Primatelj** ili **Prijevoznik**.
- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji definiranoj za odabranu vrstu otpreme.
- **Prijevoznik**: određuje prijevoznika koji će izvršiti otpremu.
- **Kupac**: određuje kupca kojem je otprema namijenjena.

## 2. Zaglavlje

Nakon odabira obveznih podataka u gornjem dijelu forme, korisnik može nastaviti s unosom sljedećih podataka.

### Podaci o rasporedu

- **Datum početka**: određuje datum početka otpreme.
- **Datum završetka**: određuje datum završetka otpreme.
- **Planirani sati**: prikazuje ukupan broj sati potrebnih za izvršenje otpreme. Vrijednost se automatski izračunava na temelju datuma početka i završetka.

### Podaci o vozilu i vozaču

- **Vozilo**: omogućuje odabir vozila kojim će se izvršiti otprema iz tablice [Vozila](/docs/logistics/motorvehicles/motorvehicle).
- **Dodijeljeni vozač**: omogućuje odabir vozača iz tablice [Vozači vozila](/docs/logistics/motorvehicles/motorvehicle-drivers).
- **Volumen**: određuje volumen pošiljke i pripadajuću mjernu jedinicu.
- **Neto težina**: određuje neto težinu pošiljke i pripadajuću mjernu jedinicu.
- **Bruto težina**: određuje bruto težinu pošiljke i pripadajuću mjernu jedinicu.

### Podaci o robi

- **Vanjski izgled robe**: omogućuje odabir izgleda robe iz tablice [Vanjski izgled robe](/docs/configurations/tables/logistics/type-of-packaging/).
- **Broj za praćenje (Tracking)**: određuje broj za praćenje otpreme. Ova se vrijednost automatski predlaže za sve otpreme dodane na kartici **Grupiranje**.
- **Ukupan broj paketa**: određuje ukupan broj paketa u pošiljci.

### Podaci o valuti

- **Valuta**: sadrži podatke o [valuti](/docs/guide/common/glossary/glossary-intro#currency).
- **Datum valute**: određuje [datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).

### Podaci o primatelju i odredištu

- **Proizvodno mjesto**: omogućuje odabir proizvodne lokacije iz koje će se izvršiti otprema. Nakon odabira automatski se preuzima adresa kontakta povezanog s proizvodnom lokacijom i upisuje u polje **Adresa primatelja**.
- **Adresa primatelja**: prilikom otvaranja forme automatski se popunjava adresom tvrtke, odnosno uobičajenim mjestom otpreme robe. Po potrebi ju je moguće ručno izmijeniti.
- **Adresa odredišta**: određuje adresu na koju se roba isporučuje.

### Podaci o pošiljci

- **Otprema**: omogućuje unos podataka o [otpremi](/docs/guide/common/glossary/glossary-intro#shipment).
- **Paritet isporuke**: omogućuje unos podataka o [paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage).
- **Pakiranje**: omogućuje unos podataka o [ambalaži](/docs/guide/common/glossary/glossary-intro#packing).

### Bilješka

- **Napomena**: omogućuje unos slobodne napomene.
- **Početna napomena**: omogućuje unos dodatne slobodne napomene.

### Status izvršenja otpreme

- **Status izvršenja**: kada se otprema izvrši putem otpremnice (DDT) ili izlaznog računa, status se automatski mijenja iz **Neizvršeno** u **Djelomično izvršeno** ili **Izvršeno**. Korisnik može ručno postaviti status **Prisilno izvršeno** ako želi označiti otpremu kao izvršenu iako nije u potpunosti realizirana.
- **Datum zatvaranja**: određuje datum izvršenja dokumenta.

## 3. Groupage (grupiranje)

Na ovoj kartici unose se svi podaci vezani uz **groupage (grupiranje)**.

**Grupiranje** predstavlja objedinjavanje više pošiljaka različitih pošiljatelja, namijenjenih istom geografskom području, u jedan utovar ili kontejner. Na taj se način optimalno iskorištava raspoloživi prostor u prijevoznim sredstvima (kamionima, brodskim kontejnerima ili zrakoplovima) te se omogućuje ekonomičniji prijevoz u odnosu na pojedinačnu otpremu svake pošiljke.

### Grupiranje pošiljke

U ovoj se tablici unose podaci o svim pošiljkama koje pripadaju ovom **grupiranju**. Novu pošiljku moguće je dodati unosom podataka u novi redak ili pritiskom na gumb **Novo** na alatnoj traci.

Dostupni stupci grupirani su prema sljedećim kategorijama.

### Podaci o otpremi

- **Broj linije**: redni broj stavke otpreme. Dodjeljuje se automatski.
- **Datum početka**: datum i vrijeme početka otpreme.
- **Datum završetka**: datum i vrijeme završetka otpreme.
- **Planirani sati**: trajanje otpreme u satima. Vrijednost se automatski izračunava na temelju datuma početka i završetka.
- **Broj praćenja (Tracking)**: broj za praćenje pojedinačne otpreme. Ako je definiran u zaglavlju dokumenta, automatski se predlaže za sve novokreirane pošiljke, ali ga korisnik može ručno promijeniti.

### Adresa mjesta utovara

- **Polazište**: naziv ili tvrtka mjesta utovara.
- **Poštanski broj**: poštanski broj mjesta utovara.
- **Grad**: grad mjesta utovara.
- **Županija**: županija mjesta utovara.
- **Adresa mjesta utovara**: adresa mjesta utovara. Prema zadanim postavkama preuzima se adresa tvrtke definirana u zaglavlju dokumenta, ali ju je moguće ručno izmijeniti.

### Adresa odredišta

- **Odredište**: naziv ili tvrtka odredišta.
- **Poštanski broj**: poštanski broj odredišta.
- **Grad**: grad odredišta.
- **Županija**: županija odredišta.
- **Adresa odredišta**: adresa odredišta. Automatski se preuzima iz šifarnika kupaca, ali ju korisnik može po potrebi ručno izmijeniti.

### Motorno vozilo

- **Vozilo**: određuje vozilo kojim će se izvršiti otprema.
- **Dodijeljeni vozač**: određuje vozača koji će izvršiti otpremu.

Za svaki redak **grupiranja** moguće je proširiti detalje pritiskom na znak **+** te upravljati dodatnim podacima.

#### Podaci o mjestu utovara

- **Telefon**: telefonski broj mjesta utovara.
- **E-mail**: adresa e-pošte mjesta utovara.
- **Napomena**: slobodna napomena vezana uz mjesto utovara.

#### Podaci o odredištu

- **Telefon**: telefonski broj odredišta.
- **E-mail**: adresa e-pošte odredišta.
- **Napomena**: slobodna napomena vezana uz odredište.

### Artikli otpreme

U ovoj se sekciji prikazuju svi artikli koji pripadaju otpremi odabranoj u **grupiranju**.

Novi artikl moguće je dodati:

- unosom podataka u novi redak tablice
- pritiskom na gumb **Novo** na alatnoj traci.

Artikle je također moguće preuzeti izravno iz narudžbi kupaca pomoću funkcije **Prijenos artikala**.

Pritiskom na gumb **Prebaci artikle** otvara se forma **Povezivanje narudžbi kupaca**, u kojoj se prema zadanim postavkama u filtru **Kupac** automatski predlaže kupac odabrane otpreme.

Nakon pritiska na gumb **Traži**, u desnoj tablici prikazuju se svi artikli iz **neizvršenih** i **djelomično izvršenih** narudžbi tog kupca.

Na lijevoj strani forme prikazane su tablice:

- **Grupiranje dostave**
- **Artikli za otpremu**

s podacima preuzetima iz glavne forme grupiranja.

Korisnik zatim može metodom **drag & drop** povući artikle iz desne tablice izravno na željenu otpremu. Sustav će ih automatski dodati u tablicu **Artikli otpreme** odgovarajuće pošiljke.

Po potrebi je moguće dodavati i artikle iz narudžbi drugih kupaca promjenom vrijednosti u filtru **Kupac** te ponovnim pritiskom na gumb **Traži**.

Nakon završetka dodavanja svih artikala potrebno je pritisnuti gumb **Preuzmi** kako bi se potvrdile sve izmjene.

#### Specifična polja

- **Broj linije**: označava broj retka artikla unesenog u **grupiranju**.
- **Klasa**: označava klasu artikla.
- **Artikl**: označava šifru artikla.
- **Varijanta artikla**: označava varijantu artikla.
- **Opis varijante**: prikazuje opis odabrane varijante artikla.
- **Mjerna jedinica**: označava mjernu jedinicu artikla.
- **Marka**: prikazuje marku definiranu u *Šifarniku artikala*.
- **Količina**: označava količinu artikla.
- **Alternativna mjerna jedinica**: označava alternativnu mjernu jedinicu artikla.
- **Alternativna količina**: označava količinu izraženu u alternativnoj mjernoj jedinici.
- **Volumen**: označava volumen artikla.
- **Neto masa**: označava neto masu artikla.
- **Bruto masa**: označava bruto masu artikla.
- **Konto za narudžbu kupca**: prikazuje konto narudžbe kupca kojoj artikl pripada.
- **Tip narudžbe kupca**: prikazuje tip narudžbe kupca kojoj artikl pripada.
- **Datum narudžbe kupca**: prikazuje datum narudžbe kupca kojoj artikl pripada.
- **Račun ili primka**: prikazuje referencu računa ili dostavnice kreirane pritiskom na gumbe **Račun** ili **Otpremnica/Primka**. Vrijednost se prikazuje u obliku: *vrsta dokumenta / datum dokumenta / broj dokumenta*.
- **Referenca pickinga**: prikazuje referencu picking dokumenta kreiranog pritiskom na gumb **Picking**. Vrijednost se prikazuje u obliku: *vrsta dokumenta / datum dokumenta / broj dokumenta*.

#### Specifični gumbi

- **Nova otprema**: omogućuje dodavanje nove otpreme u **grupiranje**.
- **Izbriši otpremu**: uklanja odabranu otpremu iz **grupiranja**.
- **Prebaci artikle**: omogućuje dodavanje artikala u otpremu izravno iz narudžbi kupaca.
- **Otpremnica/Primka**: automatski kreira [Dostavnice](/docs/sales/sales-delivery-notes/general-overview) za odabrane otpreme u **grupiranju**.
- **Račun**: automatski kreira [Izlazne račune](/docs/sales/sales-invoices/general-overview) za odabrane otpreme u **grupiranju**.
- **Picking (slaganje robe)**: automatski kreira [Picking](/docs/logistics/picking/picking-intro) za odabrane otpreme u **grupiranju**.

## **4. Sažeci**

U kartici **Sažeci** prikazane su informacije o troškovima cijelog dokumenta.

### Troškovi

U ovoj tablici moguće je unijeti dodatne troškove (pozitivne vrijednosti) ili popuste (negativne vrijednosti).

Unesene stavke primjenjuju se na cijeli dokument i ne raspodjeljuju se na pojedinačne retke artikala. Mogu predstavljati dodatne troškove, ukupne popuste ili druga povećanja koja se odnose na cijelu otpremu.

Za unos nove stavke potrebno je ispuniti sljedeća polja:

- **Broj linije**: označava redni broj stavke troška i automatski se dodjeljuje.
- **Vrsta troška / Opis**: omogućuje odabir vrste troška definirane u tablici [Vrste troškova](/docs/configurations/tables/general-settings/expenses-types/).
- **Iznos troška**: označava vrijednost troška izraženu u valuti dokumenta.
- **Opis troška**: omogućuje unos dodatnog opisa ili pojedinosti o trošku.
- **Porez**: omogućuje odabir odgovarajuće stope PDV-a definirane u tablici [PDV stope / Načini obračuna PDV-a](/docs/configurations/tables/finance/vat-rates/).

S desne strane forme nalaze se sljedeća polja:

- **Završne napomene**: omogućuje unos slobodne napomene.
- **Ukupan iznos**: prikazuje ukupan iznos otpreme, izračunat kao zbroj svih stavki unesenih u tablicu **Troškovi**.