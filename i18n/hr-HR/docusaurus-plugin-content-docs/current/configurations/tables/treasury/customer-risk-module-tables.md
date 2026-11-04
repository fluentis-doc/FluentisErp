---
title: Tablice modula Rizik kupca
sidebar_position: 7
---

U ovom modulu nema posebnih tablica, ali potrebno je napomenuti da različite vrste nabavnih i prodajnih dokumenata sadrže postavke povezane s rizikom kupca.

Kreditni limit kupca preuzima podatke iz sljedećih dokumenata prodajnog područja:

**[Vrsta narudžbe kupca](/docs/configurations/tables/sales/sales-order-types):** opcija „Kreditni limit” određuje uzima li se dokument (ispisan i potvrđen) u obzir pri izračunu kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovu vrstu dokumenta iz blokade kupca.

**Vrste otpremnica:** opcija „Kreditni limit” određuje uzima li se dokument (ispisan, ali još nije fakturiran) u obzir pri izračunu kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovu vrstu dokumenta iz blokade kupca.

**[Vrste računa](/docs/configurations/tables/purchase/purchase-invoices-type):** opcija „Kreditni limit” određuje uzima li se dokument (ispisan, ali još nije proknjižen) u obzir pri izračunu kreditnog limita kupca. Opcija „Isključi blokadu” izuzima ovu vrstu dokumenta iz blokade kupca.

Osim toga, svaki šifarnik kupca sadrži dvije postavke povezane s ovim modulom:

**Vrsta kontrole kreditnog limita:**

- **Blokada dokumenta i nadzor kreditnog limita:** dokument iz prodajnog područja kojim se prekoračuje kreditni limit bit će blokiran. Za nastavak sljedećih faza tijeka dokumentacije bit će potrebno odobrenje.
- **Nadzor kreditnog limita:** provodi se samo kontrola kreditnog limita, uz eventualnu obavijest korisniku o prekoračenju.
- **Grupna blokada:** kao i kod prve opcije, ali se izračun kumulativno provodi za sva poduzeća u bazi podataka koja pripadaju istom šifarniku kupca.
- **Grupni nadzor:** kao i kod druge opcije, ali se izračun kumulativno provodi za sva poduzeća u bazi podataka koja pripadaju istom šifarniku kupca.

Druga postavka je opcija **Kontrola izloženosti**, koja omogućuje prikaz kupca u obrascu izloženosti kupaca.):** opcija „Kreditni limit” određuje uzima li se dokument (ispisan, ali još nije proknjižen) u obzir pri izračunu kredit