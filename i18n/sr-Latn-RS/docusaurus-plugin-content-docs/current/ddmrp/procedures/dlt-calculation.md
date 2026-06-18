---
title: Ažuriranje razdvojenog vremena nabavke (DLT)
sidebar_position: 2
---

Ova procedura izračunava razdvojeno vreme nabavke (**DLT – Decoupled Lead Time**) za sve artikle koji imaju definisane buffere, bilo da se nalaze u proizvodnji ili u distributivnim centrima / logističkim čvorištima (hubovima).

Ovo je veoma važan parametar za određivanje veličine buffer zona, a samim tim i nivoa zaliha koji su proporcionalni vrednosti DLT-a.

Ako distributivni centar ili hub dobija zalihe iz drugog huba, DLT artikala koji se u njemu skladište jednak je za sve artikle i određen je vremenom isporuke navedenim u tabeli logističke strukture, osim ukoliko za određeni artikl u DDMRP parametrima nije definisan izuzetak za snabdevanje.

Ako distributivni centar ili hub dobija zalihe iz fabrike, svaki artikl ima specifičan DLT koji se dobija sabiranjem vremena transporta iz fabrike i vremena potrebnog za proizvodnju proizvoda u fabrici. Vrednost je jednaka nuli samo za artikle koji su buffer artikli u fabrici.

Procedura zahteva tačne i ažurne podatke. Zbog toga tip dela definisan u buffer profilu mora biti ispravno postavljen za artikle kojima se upravlja pomoću buffera, a generalno mora biti definisano i vreme nabavke za artikle u sastavnici proizvoda.

Za nabavne artikle potrebno je definisati preferiranog dobavljača sa odgovarajućom oznakom i vremenom isporuke, dok za ostale artikle mora biti definisano vreme nabavke u MRP parametrima.

Artikli sa nedoslednim ili nepotpunim podacima neće biti uključeni u obračun. Po završetku procedure prikazaće se poruka sa spiskom utvrđenih nedoslednosti.

Za sve artikle u fabrici koji imaju definisanu sastavnicu, procedura sabira vremena nabavke svih artikala u sastavnici. Obračun se zaustavlja kada naiđe na artikl koji ima buffer, jer se smatra da je takav artikl već dostupan na zalihama i ne zahteva dodatno vreme za nabavku.

Najveći zbir među različitim granama sastavnice određuje DLT artikla, odnosno vreme potrebno za njegovu proizvodnju.

Ovaj obračun se vrši i za proizvode koji nisu definisani kao DDMRP buffer artikli u fabrici, jer oni mogu biti buffer artikli u distributivnim centrima ili hubovima. U tom slučaju njihov DLT odgovara DLT vrednosti u fabrici uvećanoj za vreme transporta.

Procedura takođe određuje **kritični put** svakog artikla, odnosno identifikuje sve artikle koji se nalaze na najdužem lancu snabdevanja i samim tim određuju DLT vrednost artikla.

Ukoliko je cilj smanjenje DLT vrednosti nekog artikla, potrebno je odabrati artikle koji pripadaju kritičnom putu kao nove buffer artikle, jer izbor artikala koji nisu deo kritičnog puta neće doneti nikakvo poboljšanje.

Po završetku procedure automatski se pokreće procedura za ažuriranje zona.