---
title: Kreiranje i upravljanje vrijednosnim papirima
sidebar_position: 5
---

Obrazac se nalazi na putanji **Blagajna > Vrijednosni papiri > Vrijednosni papiri** i omogućava **ručno kreiranje**, upravljanje, izmjenu i pregled vrijednosnih papira odnosno instrumenata naplate.

## Kako kreirati novi vrijednosni papir

:::tip Pažnja
U nastavku je opisan postupak **ručnog kreiranja** instrumenta naplate. Ovaj način rada koristi se rijetko te se preporučuje korištenje automatskih procedura:

- [Preuzimanje iz otvorenih stavki](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)
- [Preuzimanje iz računa](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

Za ručno kreiranje potrebno je:

1. Odabrati **Vrstu vrijednosnog papira**. Sistem automatski dodjeljuje **broj dokumenta** prema numeraciji povezanoj s vrstom instrumenta i odgovarajućom **godinom**.
2. Unijeti **Dužnika** (konto kupca ili druge osobe na koju glasi instrument) i **Datum dospijeća**.
3. Sačuvati zaglavlje dokumenta.
4. Ručno unijeti **Iznos u valuti** i **Iznos instrumenta** ili ih automatski preuzeti iz povezanih otvorenih stavki odnosno dospijeća putem kartica **Reference dospijeća** i **Reference stavki**.

Polje **Iznos biljega** nije u upotrebi.

Za povezivanje stavki ili dospijeća koriste se funkcije **Dodaj stavke** i **Dodaj dospijeća**.

**Datum valute** predstavlja datum kursa za instrumente u stranoj valuti i prema zadanim postavkama jednak je datumu instrumenta.

Obavezni podaci su:

- datum dospijeća,
- valuta i kurs,
- kupac (dužnik),
- mjesto plaćanja (automatski preuzeto iz podataka kupca).

**Agent** je informativni podatak koji prikazuje glavnog agenta povezanog s izvornim računom.

**Status instrumenta** inicijalno se postavlja na **Izdan** te se automatski mijenja tokom daljnjih obrada.

Polje **Ispisano** nije aktivno, dok statusi **Knjiženo** i **Odobreno** zavise o izvršenim procedurama knjiženja i odobravanja.

Polje **Reference** služi za unos slobodnih napomena koje se prenose u datoteku kao opis operacije.

## Kartica Prezentacija

Kartica sadrži dvije sekcije.

### Bankovni podaci

Prikazuju podatke banke preko koje se instrument naplate obrađuje:

- ABI/CAB šifre (obavezne za uključivanje instrumenta u prezentacijsku listu),
- broj računa,
- IBAN,
- SWIFT,
- CIN (potreban samo za RID instrumente).

### Podaci o prezentaciji

Prikazuju podatke o prezentacijskoj listi putem koje je instrument predat banci (na primjer radi naplate).

## Kartica Reference dospijeća

Prikazuje reference izvornog računa kada je instrument nastao procedurom preuzimanja iz dospijeća ili omogućava ručno dodavanje dospijeća putem funkcije **Dodaj dospijeće**.

Moguće je povezati i dospijeća koja nisu vezana uz vrste plaćanja koje koriste instrumente naplate, kao i dospijeća odobrenja (kreditnih nota).

## Kartica Reference otvorenih stavki

Prikazuje reference otvorenih stavki kada je instrument nastao procedurom preuzimanja iz stavki ili omogućava ručno dodavanje stavki putem funkcije **Dodaj stavku**.

Moguće je povezati i stavke koje nisu vezane uz instrumente naplate, kao i stavke odobrenja (kreditnih nota).

## Kartica Ostalo

Omogućava pohranu podataka o indosantima i jemcima.

## SDD – SEPA Direct Debit

**SEPA Direct Debit (SDD)** zamjenjuje prethodni nacionalni sistem RID te predstavlja unaprijed odobren način naplate zasnovan na mandatu koji dužnik daje povjeriocu.

Temelji se na prethodnom sporazumu između dužnika i povjerioca, kojim povjerilac dobija pravo pokretanja međubankarske procedure za automatsko terećenje računa dužnika.

:::tip Kako kreirati SDD prezentacijsku listu

Prije kreiranja SDD naloga potrebno je ispravno popuniti podatke:

- u [evidenciji kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information),
- u postavkama vlastite kompanije.

Nakon toga potrebno je:

1. Definisati vrstu instrumenta naplate **SDD** i povezati je s odgovarajućom [vrstom plaćanja](/docs/configurations/tables/general-settings/payment-types).
2. Definisati odgovarajuću vrstu prezentacijske liste s uključenim postavkama za SDD.
3. Kreirati SDD instrument korištenjem procedura:
   - Preuzimanje instrumenata iz otvorenih stavki
   - Preuzimanje instrumenata iz dospijeća
4. Kreirati novu prezentacijsku listu tipa **SDD** i u nju uključiti odgovarajuće SDD instrumente.
5. Koristiti funkciju **Izvoz SDD datoteke** za generisanje bankarske datoteke u SEPA formatu.

:::