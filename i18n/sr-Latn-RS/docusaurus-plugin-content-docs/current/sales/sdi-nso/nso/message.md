---
title: NSO poruke
sidebar_position: 4
---

Za svaku primljenu poruku NSO dodeljuje identifikator transakcije (IdT) i sprovodi njenu validaciju.

Podsećamo da, u skladu sa članom 3. ministarske uredbe od 7. decembra 2018., organi javne uprave ne smeju da izvrše obračun niti naknadno plaćanje na osnovu dokumenata sadržanih u porukama koje NSO nije validirao.

Svaki dokument jedinstveno se identifikuje pomoću identifikacione trojke koja se sastoji od tri obavezna elementa:

- identifikator izdavaoca dokumenta (EndpointID), koji se po pravilu podudara sa pošiljaocem;
- identifikator dokumenta koji dodeljuje izdavalac (ID);
- datum dokumenta (IssueDate).

Prema tome, isti subjekt može izdati samo jedan dokument sa istim identifikatorom i istim datumom (jedinstvenost dokumenta).

Identifikaciona trojka koristi se svaki put kada je potrebno referencirati određeni dokument u postupcima opoziva i zamene narudžbina i unapred dogovorenih narudžbina, u odgovorima i narudžbinama za potvrdu.

IdT koji NSO dodeljuje svakoj poruci povezan je sa identifikacionom trojkom dokumenta koji se nalazi u toj poruci.

Sve validne poruke (a time i svi validni dokumenti) mogu se pretraživati na Platformi za komercijalne kredite (PCC), pomoću identifikacione trojke ili identifikatora IdT.

## Statusi NSO validacije

U zavisnosti od rezultata zatražene operacije, NSO može pošiljaocu poruke proslediti jedno ili više sistemskih obaveštenja opisanih u nastavku, koja sadrže identifikator transakcije (IdT) na koji se odnose.

U obe kategorije scenarija (slanje i validacija), ako poruka ne prođe validaciju, NSO pošiljaocu šalje sledeća sistemska obaveštenja:

- **Obaveštenje o odbacivanju**: obaveštava pošiljaoca da poruka nije prošla provere validacije.
- **Potvrda o dostavi**: obaveštava pošiljaoca da je NSO dostavio poruku primaocu.
- **Neuspešna dostava**: obaveštava pošiljaoca o privremenoj nemogućnosti dostave poruke primaocu.
- **Potvrda o uspešnom slanju poruke uz nemogućnost dostave**: obaveštava pošiljaoca da poruku nije moguće dostaviti primaocu iz razloga za koje NSO nije odgovoran.

Ako nakon tri automatska pokušaja ponovnog slanja u periodu od dva sata dostava primaocu ne uspe, NSO pošiljaocu šalje obaveštenje o neuspešnoj dostavi. Ovo obaveštenje označava privremenu nemogućnost dostave poruke primaocu i zato ima privremeni karakter.

Iz toga proizlazi da je ispravno postupanje pošiljaoca da sačeka konačan rezultat postupka dostave. Ako dostava uspe, pošiljalac će primiti potvrdu o dostavi, a u suprotnom će primiti potvrdu o uspešnom slanju poruke uz nemogućnost dostave.

Nakon slanja obaveštenja o neuspešnoj dostavi, NSO nastavlja sa dodatnim pokušajima dostave poruke.

Ako dostava poruke ipak ne uspe, NSO pošiljaocu šalje potvrdu o uspešnom slanju poruke uz nemogućnost dostave.

U tom slučaju pošiljalac je ovlašćen da samostalno dostavi poruku primaocu. U praksi se time ostvaruje svojevrstan scenario direktne validacije, uzrokovan tehničkom nemogućnošću dostave poruke putem NSO-a.

Kupci i dobavljači registrovani u sistemu NSO (uključujući one koji pristupaju putem posrednika), odnosno oni čija adresa navedena u prenosnoj omotnici počinje sa „NSO0:” (pogledajte odeljak 2.5.3), imaju prednost jer ne moraju da proveravaju da li je poruka validirana. Naime, sve poruke koje šalje NSO nužno su prethodno validirane pre prosleđivanja primaocu.