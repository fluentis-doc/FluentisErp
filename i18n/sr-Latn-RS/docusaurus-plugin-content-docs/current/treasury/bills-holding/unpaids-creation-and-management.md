---
title: Kreiranje i upravljanje nenaplaćenim potraživanjima
sidebar_position: 6
---

Forma se nalazi na putanji **Blagajna > Vrednosni papiri > Kreiranje nenaplaćenog potraživanja** i omogućava kreiranje **novog nenaplaćenog potraživanja**.

## Kako kreirati nenaplaćeno potraživanje

1. Nakon otvaranja forme, iako je moguće ručno popuniti polja, preporučuje se korišćenje funkcije **Preuzimanje podataka** (na alatnoj traci) za preuzimanje potraživanja koje će biti osnova za dokument, putem odgovarajućeg prozora za pretragu.

2. U otvorenom prozoru odaberite dokument, po potrebi koristeći dostupne filtere, a zatim kliknite **Označi**. Svi podaci potraživanja biće automatski popunjeni, uključujući iznos, dužnika, broj dokumenta, tip i ostale podatke preuzete iz izvornog dokumenta.

3. Ručno unesite bankarske troškove i ostale iznose u kartici **Obaveštenje o zaduženju**, kako bi kasnije bilo moguće izvršiti knjiženje i ponovno zaduženje dužnika za navedene troškove.

   Pojedina polja mogu biti automatizovana, kao što su zakonske zatezne kamate i bankarski troškovi, pravilnim podešavanjem evidencije banke i [**opštih parametara modula**](/docs/configurations/parameters/treasury/unpaids-parameters) za nenaplaćena potraživanja (polje **Vrsta kamate**).

4. Sačuvajte kreirano potraživanje.

Forma **Upravljanje nenaplaćenim potraživanjima** sastoji se od fiksnog zaglavlja sa osnovnim podacima o potraživanju i donjeg dela podeljenog na četiri kartice sa detaljima, kao i dodatne kartice za prilaganje dokumenata.

## 1. Fiksno zaglavlje

Sadrži opšte podatke o nenaplaćenom potraživanju, uključujući:

- polje za **bankarske troškove**, koje se može ručno korigovati;
- **broj potraživanja**, koji odgovara broju izvornog instrumenta naplate;
- različite **statusne oznake**, koje zavise od izvršenih operacija, kao što su knjiženje, štampa, konačna naplata i slično.

### 1.1 Obaveštenje o zaduženju

Koristi se za upravljanje:

- obračunom kamata sa pripadajućom **kamatnom stopom** i **zakonskom zateznom kamatom** (na osnovu vrste kamatne stope definisane u parametrima modula i broja dana između datuma dospeća i datuma kreiranja nenaplaćenog potraživanja);
- **naknadom za administrativne troškove** (ručni unos), koja će biti zaračunata prilikom ponovnog izdavanja instrumenta naplate;
- **troškom overe** (ručni unos), koji će takođe biti zaračunat prilikom ponovnog izdavanja instrumenta naplate.

### 1.2 Prezentacija

Prikazuje podatke o prezentacionoj listi povezanoj sa izvornim instrumentom naplate.

### 1.3 Reference nenaplaćenog potraživanja

Na ovoj kartici prikazane su stavke nastale knjiženjem nenaplaćenog potraživanja, zajedno sa povezanim uplatama.

### 1.4 Reference izvornog dokumenta

Prikazuje reference na dokumente (stavke ili račune) koji predstavljaju osnov za nastanak instrumenta naplate.