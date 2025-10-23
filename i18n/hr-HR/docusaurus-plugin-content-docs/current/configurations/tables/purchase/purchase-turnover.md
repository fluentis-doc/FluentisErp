---
title: Promet nabave
sidebar_position: 9
---

Tablica se otvara putem **Tablice > Nabava > Promet nabave** i sadrži podatke potrebne za knjiženje dokumenata.

*Specifična polja*:

**Tip**: šifra identifikacije prometa;

**Opis**: opis prometa;

**Konto/Podkonto/Opis podkonta**: konto troška koji se koristi pri knjiženju dokumenata;

**Tip PDV-a**: koristi se pri knjiženju dokumenta. Najčešće je postavljen na „generički“, a za dodatne detalje potrebno je provjeriti njegovo korištenje u računovodstvenim predlošcima i knjiženjima unutar administrativnog područja;

**Analitički konto/Podkonto/Opis**: konto koji se koristi za knjiženje dokumenta u analitičkom računovodstvu.

**Tip/Opis**: koristi se pri knjiženju dokumenta. Za dodatne informacije o načinu [korištenja](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) u računovodstvenim knjiženjima pogledajte odgovarajuće postavke u administrativnom području.  

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom funkcioniranju formi, pogledajte sljedeći link: [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

:::note Napomena
Ako se *Tip prometa* unese u *Evidenciju artikala* taj će se kod automatski predložiti u stavkama artikala u dokumentu nabave i time automatizirati knjiženje dokumenata na određeni konto kontne protustavke.
:::

*Primjer računa za nabavu*:

Ako je *Tip prometa*već unesen u *Evidenciju artikala*, u dokumentima nabave pojavit će se u kartici *Artikli*, u polju *Promet nabave*; ako nije unesen u evidenciju artikla, moguće ga je ručno odabrati unutar dokumenta nabave putem pripadne padajuće liste.

U slučaju da nije unesen ni u evidenciju artikla, a korisnik ga zaboravi ručno dodati u dokument nabave, sustav – kako ne bi blokirao knjiženje – omogućuje (ako je takva opcija postavljena) korištenje zadanog konta protustavke definiranog u *Evidenciji kontakta > kartica Računovodstveni podaci > kartica Administracija* u polju **Zadani konto troška/prihoda protustavke**.