---
title: NSO poruke
sidebar_position: 4
---

Za svaku zaprimljenu poruku NSO dodjeljuje identifikator transakcije (IdT) i provodi njezinu validaciju.

Podsjećamo da, u skladu s člankom 3. ministarske uredbe od 7. prosinca 2018., tijela javne uprave ne smiju provesti obračun niti naknadno plaćanje na temelju dokumenata sadržanih u porukama koje NSO nije validirao.

Svaki dokument jedinstveno se identificira pomoću identifikacijske trojke koja se sastoji od tri obvezna elementa:

- identifikator izdavatelja dokumenta (EndpointID), koji se u pravilu podudara s pošiljateljem;
- identifikator dokumenta koji dodjeljuje izdavatelj (ID);
- datum dokumenta (IssueDate).

Prema tome, isti subjekt može izdati samo jedan dokument s istim identifikatorom i istim datumom (jedinstvenost dokumenta).

Identifikacijska trojka koristi se svaki put kada je potrebno referencirati određeni dokument u postupcima opoziva i zamjene narudžbi i unaprijed dogovorenih narudžbi, u odgovorima i narudžbama za potvrdu.

IdT koji NSO dodjeljuje svakoj poruci povezan je s identifikacijskom trojkom dokumenta koji se nalazi u toj poruci.

Sve valjane poruke (a time i svi valjani dokumenti) mogu se pretraživati na Platformi za komercijalne kredite (PCC), i to pomoću identifikacijske trojke ili identifikatora IdT.

## Statusi NSO validacije

Ovisno o rezultatu zatražene operacije, NSO može pošiljatelju poruke proslijediti jednu ili više u nastavku opisanih sistemskih obavijesti, koje sadržavaju identifikator transakcije (IdT) na koji se odnose.

U obje kategorije scenarija (slanje i validacija), ako poruka ne prođe validaciju, NSO pošiljatelju šalje sljedeće sistemske obavijesti:

- **Obavijest o odbacivanju**: obavještava pošiljatelja da poruka nije prošla provjere validacije.
- **Potvrda o dostavi**: obavještava pošiljatelja da je NSO dostavio poruku primatelju.
- **Neuspjela dostava**: obavještava pošiljatelja o privremenoj nemogućnosti dostave poruke primatelju.
- **Potvrda o uspješnom slanju poruke uz nemogućnost dostave**: obavještava pošiljatelja da poruku nije moguće dostaviti primatelju zbog razloga za koje NSO nije odgovoran.

Ako nakon tri automatska pokušaja ponovnog slanja u razdoblju od dva sata dostava primatelju ne uspije, NSO pošiljatelju šalje obavijest o neuspjeloj dostavi. Ova obavijest označava privremenu nemogućnost dostave poruke primatelju te stoga ima privremeni karakter.

Iz toga proizlazi da je ispravno postupanje pošiljatelja pričekati konačan rezultat postupka dostave. Ako dostava uspije, pošiljatelj će primiti potvrdu o dostavi, a u suprotnom će primiti potvrdu o uspješnom slanju poruke uz nemogućnost dostave.

Nakon slanja obavijesti o neuspjeloj dostavi NSO nastavlja s dodatnim pokušajima dostave poruke.

Ako dostava poruke ipak ne uspije, NSO pošiljatelju šalje potvrdu o uspješnom slanju poruke uz nemogućnost dostave.

U tom je slučaju pošiljatelj ovlašten samostalno dostaviti poruku primatelju. U praksi se time ostvaruje svojevrsni scenarij izravne validacije, uzrokovan tehničkom nemogućnošću dostave poruke putem NSO-a.

Kupci i dobavljači registrirani u sustavu NSO (uključujući one koji pristupaju putem posrednika), odnosno oni čija adresa navedena u prijenosnoj omotnici počinje s „NSO0:” (vidi odjeljak 2.5.3), imaju prednost jer ne moraju provjeravati je li poruka validirana. Naime, sve poruke koje šalje NSO nužno su prethodno validirane prije prosljeđivanja primatelju.