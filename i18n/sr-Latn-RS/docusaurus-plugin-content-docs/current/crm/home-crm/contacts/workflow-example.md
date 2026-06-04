---
title: Primjer CRM zapisa tijeka rada
sidebar_position: 3
---

U nastavku je prikazan primjer zapisa tijeka rada stvorenog za upravljanje putem kupca. Napomena da bi bio vidljiv, zapis mora biti unesen među Aktivne Zapise u Fluentisu:   

![](/img/it-it/crm/workflows.png)

Predlažemo zapis koji uključuje sljedeće faze: Start > Qualification > Prospect > Lead > Opportunity > Not qualified customer > Customer > Closed. Faza Start je početno stanje, a stanje Closed je završno. Na slici u nastavku odabrana je faza Start. U desnoj mreži za ovu fazu vidljivi su različiti podaci, poput koda (koji mora biti jedinstven za svaku fazu), eventualnih prava prikaza, eventualnih boja koje vrijede samo za tu fazu. Za ovu fazu također su unesene dvije obvezne aktivnosti (zbog Obveznog označavanja: bez izvođenja ovih aktivnosti nije moguće prijeći na sljedeću fazu): unos osnovnih podataka u CRM tvrtke i prvi informativni poziv. Moguće je dodati druge aktivnosti unutar CRM kontakta, ako su dostupne, a ukoliko nisu unesene u ovu mrežu, ta činjenica ne spriječava rad aplikacije.

![](/img/it-it/crm/contactworkflow.png)
