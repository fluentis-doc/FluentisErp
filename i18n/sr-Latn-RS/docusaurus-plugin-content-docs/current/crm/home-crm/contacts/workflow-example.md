---
title: Primer CRM zapisa toka rada
sidebar_position: 3
---

U nastavku je prikazan primer zapisa toka rada kreiranog za upravljanje putem kupca. Napomena – da bi bio vidljiv, zapis mora biti unet među Aktivne zapise u Fluentisu:

![](/img/it-it/crm/workflows.png)

Predlažemo tok rada koji uključuje sledeće faze:

Start > Qualification > Prospect > Lead > Opportunity > Not qualified customer > Customer > Closed.

Faza **Start** je početno stanje, a stanje **Closed** je završno. Na slici ispod odabrana je faza **Start**.

U desnoj tabeli za ovu fazu vidljivi su različiti podaci, poput koda (koji mora biti jedinstven za svaku fazu), eventualnih prava prikaza, kao i eventualnih boja koje važe samo za tu fazu.

Za ovu fazu su takođe unete dve obavezne aktivnosti (zbog oznake **Obavezno**: bez izvršavanja ovih aktivnosti nije moguće preći u sledeću fazu):

- unos osnovnih podataka u CRM kompanije;
- prvi informativni poziv.

Moguće je dodati i druge aktivnosti unutar CRM kontakta, ukoliko su dostupne. Ako nisu unete u ovu mrežu, to neće sprečiti normalan rad aplikacije.

![](/img/it-it/crm/contactworkflow.png)