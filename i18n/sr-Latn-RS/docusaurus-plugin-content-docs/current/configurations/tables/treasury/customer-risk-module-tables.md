---
title: Tabele modula Rizik kupca
sidebar_position: 7
---

U ovom modulu nema posebnih tabela, ali potrebno je napomenuti da različiti tipovi nabavnih i prodajnih dokumenata sadrže podešavanja povezana sa rizikom kupca.

Kreditni limit kupca preuzima podatke iz sledećih dokumenata prodajnog područja:

**[Tip narudžbine kupca](/docs/configurations/tables/sales/sales-order-types):** opcija „Kreditni limit” određuje da li se dokument (odštampan i potvrđen) uzima u obzir pri izračunavanju kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovaj tip dokumenta iz blokade kupca.

**Tipovi otpremnica:** opcija „Kreditni limit” određuje da li se dokument (odštampan, ali još nije fakturisan) uzima u obzir pri izračunavanju kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovaj tip dokumenta iz blokade kupca.

**Tipovi faktura:** opcija „Kreditni limit” određuje da li se dokument (odštampan, ali još nije proknjižen) uzima u obzir pri izračunavanju kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovaj tip dokumenta iz blokade kupca.

Osim toga, svaki šifarnik kupca sadrži dva podešavanja povezana sa ovim modulom:

**Tip kontrole kreditnog limita:**

- **Blokada dokumenta i nadzor kreditnog limita:** dokument iz prodajnog područja kojim se prekoračuje kreditni limit biće blokiran. Za nastavak narednih faza toka dokumentacije biće potrebno odobrenje.
- **Nadzor kreditnog limita:** sprovodi se samo kontrola kreditnog limita, uz eventualno obaveštavanje korisnika o prekoračenju.
- **Grupna blokada:** kao i kod prve opcije, ali se izračunavanje kumulativno sprovodi za sva preduzeća u bazi podataka koja pripadaju istom šifarniku kupca.
- **Grupni nadzor:** kao i kod druge opcije, ali se izračunavanje kumulativno sprovodi za sva preduzeća u bazi podataka koja pripadaju istom šifarniku kupca.

Drugo podešavanje je opcija **Kontrola izloženosti**, koja omogućava prikaz kupca u obrascu izloženosti kupaca.