---
title: Kreiranje i upravljanje vrijednosnim papirima
sidebar_position: 5
---

Obrazac se nalazi na putanji **Riznica > Vrijednosni papiri > Vrijednosni papiri** te omogućuje **ručno kreiranje**, upravljanje, izmjenu i pregled vrijednosnih papira ili instrumenata naplate.

## Kako kreirati novi vrijednosni papir

:::tip Pažnja
U nastavku je opisan postupak **ručnog kreiranja** instrumenta naplate. Ovaj način rada koristi se rijetko te se preporučuje korištenje automatskih procedura:

- [Preuzimanje iz otvorenih stavki](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)
- [Preuzimanje iz računa](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

Za ručno kreiranje potrebno je:

1. Odabrati **vrstu vrijednosnog papira**. Sustav automatski dodjeljuje **broj dokumenta** prema numeraciji povezanoj s vrstom instrumenta i odgovarajućom **godinom**.
2. Unijeti **dužnika** (konto kupca ili druge osobe na koju glasi instrument) i **datum dospijeća**.
3. Spremiti zaglavlje dokumenta.
4. Ručno unijeti **iznos u valuti** i **iznos instrumenta** ili ih automatski preuzeti iz povezanih otvorenih stavki odnosno dospijeća putem kartica **Reference dospijeća** i **Reference stavki**.

Polje **Iznos biljega** nije u uporabi.

Za povezivanje stavki ili dospijeća koriste se funkcije **Dodaj stavke** i **Dodaj dospijeća**.

**Datum valute** predstavlja datum tečaja za instrumente u stranoj valuti i prema zadanim postavkama jednak je datumu instrumenta.

Obavezni podaci su:
- datum dospijeća,
- valuta i tečaj,
- kupac (dužnik),
- mjesto plaćanja (automatski preuzeto iz podataka kupca).

**Agent** je informativni podatak koji prikazuje glavnog agenta povezanog s izvornim računom.

**Status instrumenta** inicijalno se postavlja na *Izdan* te se automatski mijenja tijekom daljnjih obrada.

Polje **Ispisano** nije aktivno, dok statusi **Knjiženo** i **Odobreno** ovise o izvršenim procedurama knjiženja i odobravanja.

Polje **Reference** služi za unos slobodnih napomena koje se prenose u datoteku kao opis operacije.

## Kartica Prezentacija

Kartica sadrži dvije sekcije.

### Bankovni podaci

Prikazuju podatke banke preko koje se instrument naplate obrađuje:

- ABI/CAB kodovi (obavezni za uključivanje instrumenta u prezentacijsku listu),
- broj računa,
- IBAN,
- SWIFT,
- CIN (potreban samo za RID instrumente).

### Podaci o prezentaciji

Prikazuju podatke o prezentacijskoj listi putem koje je instrument predan banci (primjerice za naplatu).

## Kartica Referetne dospjelosti

Prikazuje reference izvornog računa kada je instrument nastao procedurom preuzimanja iz dospijeća ili omogućuje ručno dodavanje dospijeća putem funkcije **Dodaj dospijeće**.

Moguće je povezati i dospijeća koja nisu vezana uz vrste plaćanja koje koriste instrumente naplate te dospijeća kreditnih nota.

## Kartica Reference dospjele vrijednosti

Prikazuje reference otvorenih stavki kada je instrument nastao procedurom preuzimanja iz stavki ili omogućuje ručno dodavanje stavki putem funkcije **Dodaj stavku**.

Moguće je povezati i stavke koje nisu vezane uz instrumente naplate te stavke kreditnih nota.

## Kartica Ostalo

Omogućuje pohranu podataka o indosantima i jamcima.

## SDD – SEPA Direct Debit

**SEPA Direct Debit (SDD)** zamjenjuje prethodni nacionalni sustav RID te predstavlja unaprijed odobren način naplate temeljen na mandatu koji dužnik daje vjerovniku.

Temelji se na prethodnom sporazumu između dužnika i vjerovnika, kojim vjerovnik dobiva pravo pokretanja međubankovne procedure za automatsko terećenje računa dužnika.

:::tip Kako kreirati SDD prezentacijsku listu

Prije kreiranja SDD naloga potrebno je ispravno popuniti podatke:

- u [evidenciji kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information),
- u postavkama vlastite tvrtke.

Nakon toga potrebno je:

1. Definirati vrstu instrumenta naplate **SDD** i povezati je s odgovarajućom [vrstom plaćanja](/docs/configurations/tables/general-settings/payment-types).
2. Definirati odgovarajuću vrstu prezentacijske liste s uključenim postavkama za SDD.
3. Kreirati SDD instrument korištenjem procedura:
   - Preuzimanje instrumenata iz otvorenih stavki
   - Preuzimanje instrumenata iz dospijeća
4. Kreirati novu prezentacijsku listu tipa **SDD** i u nju uključiti odgovarajuće SDD instrumente.
5. Koristiti funkciju **Izvoz SDD datoteke** za generiranje bankarske datoteke u SEPA formatu.

:::