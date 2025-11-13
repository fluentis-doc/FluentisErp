---
title: NSO Poruke
sidebar_position: 4
---

A suprotiv svakom primljenom Poruci, NSO izdaje Identifikator transakcije (IdT) i vrši njegovu validaciju.  
Podsjećamo da, prema članku 3. d.m. 7. prosinca 2018., javne uprave ne mogu provesti likvidaciju i naknadno plaćanje na temelju Dokumenata sadržanih u Porukama koje nisu validirane od strane NSO-a.  
Svaki Dokument jedinstveno se identificira putem Trojke identifikacije sastavljene od tri elementa, koja moraju biti obavezno prisutna:
- identifikator subjekta koji ga je izdao (EndpointID), koji u pravilu odgovara Pošiljatelju;   
- identifikator Dokumenta dodijeljen od strane izdavatelja (ID);  
- datum Dokumenta (IssueDate).        

Jedna te ista osoba može izdati samo jedan Dokument s istim identifikatorom i istim datumom (jedinstvenost Dokumenta).  
Trojka identifikacije koristi se svaki put kada je potrebno referirati se na određeni Dokument u Opozivima i Zamjenama Narudžbi i Ugovorenih Narudžbi, u Odgovorima i u Narudžbama potvrde.  
IdT dodijeljen svakoj Poruci od NSO povezan je s Trojkom identifikacije Dokumenta koji se u njemu nalazi.

Svi poruke (i, stoga, svi dokumenti) koji su valjani mogu se pretraživati na Platformi komercijalnih kredita (PCC) kako putem Trojke identifikacije (Tripletta di identificazione) tako i putem IdT.

## Stanja validacije NSO

Na temelju ishoda tražene operacije, NSO može poslati Pošiljatelju jednu ili više sustavnih Obavijesti opisane u nastavku, koje sadrže Identifikator transakcije (IdT) na koji se odnose.  
U obje kategorije scenarija (slanje i validacija), ako Poruka ne prođe validaciju, NSO šalje Pošiljatelju sljedeću sustavnu Obavijest:  
- Obavijest o odbacivanju: obavještava Pošiljatelja da Poruka nije prošla provjere validacije.  
-Potvrda o dostavi, koja obavještava Pošiljatelja da je NSO dostavio Poruku Primatelju;  
- Nedostava, koja signalizira Pošiljatelju privremenu nemogućnost dostave Poruke Primatelju;  
- Potvrda o slanju poruke s nemogućnošću dostave, koja obavještava Pošiljatelja o nemogućnosti dostave Poruke Primatelju zbog razloga koji nisu NSO-u pripisivi.        

U slučaju da, nakon tri "automatska" pokušaja ponovnog slanja u razdoblju od dva sata, dostava primatelju nije uspjela, NSO šalje Pošiljatelju Obavijest o neuspjeloj dostavi. Ova Obavijest označava trenutnu nemogućnost dostave Poruke primatelju: stoga se radi o komunikaciji koja ima privremenu vrijednost. Iz toga proizlazi da će ispravno ponašanje Pošiljatelja biti čekati konačni ishod procesa dostave. Ako taj proces bude uspješan, Pošiljatelj će primiti Potvrdu o dostavi; u suprotnom, primit će Potvrdu o uspješnom prijenosu poruke s nemogućnošću dostave.  
Nakon slanja Obavijesti o neuspjeloj dostavi, NSO provodi dodatne pokušaje dostave Poruke.  
Ako proces dostave Poruke i dalje ne uspije, NSO šalje Pošiljatelju Potvrdu o uspješnom prijenosu poruke s nemogućnošću dostave. U tom slučaju, Pošiljatelj je ovlašten samostalno dostaviti Poruku primatelju. U suštini, ostvaruje se svojevrsni scenarij izravne validacije uzrokovan tehničkom nemogućnošću dostave Poruke putem NSO.     

Klijenti i dobavljači akreditirani su NSO (također putem posrednika), odnosno oni čija adresa navedena u *Omotu za prijenos* počinje s "NSO0:" (v. Paragraf 2.5.3) imaju prednost što ne moraju provjeravati je li došlo do validacije poruka, budući da su sve poruke koje šalje NSO nužno bile validirane prije nego što su proslijeđene primatelju.