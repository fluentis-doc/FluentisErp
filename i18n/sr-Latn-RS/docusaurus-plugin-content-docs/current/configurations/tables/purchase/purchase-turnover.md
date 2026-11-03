---
title: Promet nabavke
sidebar_position: 9
---

Tabela se otvara putem **Tabele > Nabavka > Promet nabavke** i sadrži podatke potrebne za knjiženje dokumenata.

*Specifična polja*:

**Tip**: šifra za identifikaciju prometa;

**Opis**: opis prometa;

**Konto/Podkonto/Opis podkonta**: konto troška koji se koristi prilikom knjiženja dokumenata;

**Tip PDV-a**: koristi se prilikom knjiženja dokumenta. Najčešće je postavljen na „generički“, a za dodatne detalje potrebno je proveriti njegovu upotrebu u računovodstvenim šablonima i knjiženjima u okviru administrativnog područja;

**Analitički konto/Podkonto/Opis**: konto koji se koristi za knjiženje dokumenta u analitičkom računovodstvu.

**Tip/Opis**: koristi se prilikom knjiženja dokumenta. Za dodatne informacije o načinu [upotrebe](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) u računovodstvenim knjiženjima pogledajte odgovarajuća podešavanja u administrativnom području.

Za sve što nije detaljno objašnjeno u ovom dokumentu u vezi sa zajedničkim funkcionisanjem obrazaca, pogledajte sledeći link: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).

:::note Napomena
Ako se *Tip prometa* unese u *šifarnik artikala*, taj kod će se automatski predložiti u stavkama artikala u dokumentu nabavke i time automatizovati knjiženje dokumenata na određeni konto protivstavke.
:::

*Primer fakture za nabavku*:

Ako je *Tip prometa* već unet u *šifarnik artikala*, u dokumentima nabavke pojaviće se na kartici *Artikli*, u polju *Promet nabavke*; ako nije unet u evidenciju artikla, moguće ga je ručno odabrati unutar dokumenta nabavke putem odgovarajuće padajuće liste.

U slučaju da nije unet ni u evidenciju artikla, a korisnik zaboravi da ga ručno doda u dokument nabavke, sistem – kako ne bi blokirao knjiženje – omogućava (ako je takva opcija podešena) upotrebu podrazumevanog konta protivstavke definisanog u *šifarnik kontakata > kartica Podaci knjiženja > kartica Administracija*, u polju **Podrazumevani konto troška/prihoda (podrazumevane) protivstavke**.