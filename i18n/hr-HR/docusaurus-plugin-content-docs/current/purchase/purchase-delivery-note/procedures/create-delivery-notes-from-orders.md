---
title: Obrada otpremnice za kupnju iz narudžbe
sidebar_position: 3
keywords:
- DDT
- Ordini
---

Obrada dostavnica za kupnju iz narudžbi omogućuje obradu artikala iz narudžbi s automatskim generiranjem otpremnica za kupnju grupiranih po dobavljaču te njihovim knjiženjem u skladištu.

Procedura se otvara putem putanje **Nabava > Otpremnica za kupnju > Procedure > Izvršenje otpremnice iz narudžbi**

*Posebni gumbi*

> **Pretraži**: omogućuje pretraživanje artikala prema unesenim filterima;  
> **Prijenos**: omogućuje prijenos odabranih artikala;  
> **Označi sve**: omogućuje označavanje svih artikala u rezultatima;   
> **Odznači sve**: omogućuje poništavanje označavanja svih artikala u rezultatima.   

*Postupak* za izradu otpremnice i knjiženje u skladištu:  
- unesite željene filtre u odjeljku *Filter* i kliknite na gumb **Pretraži**. U rezultatima će se prikazati jedan redak za svaki isprintani, potvrđeni i neobrađeni ili djelomično obrađeni artikl-narudžba;  
- odaberite željeni artikl stavljanjem oznake u stupcu **Ožnači**;  
- unesite količinu za obradu u stupcu **Količina za obradu** za odabrani artikl. Ako se količina ne unese, aplikacija će ponuditi vrijednost unesenu u stupcu **Količina**;  
- obavite obradu pomoću gumba **Prijenos**;  
- potvrdite ili odbijte promjene u otpremnici u poruci koju pokreće aplikacija: 
   - ako odaberete **Ne**, postupak automatski izvršava knjiženje u skladištu i stvara otpremnicu, preuzimajući sve podatke prisutne za artikl i, kao rezultat, uvjeti kupnje za artikl bit će primijenjeni na dostavnicu;
   - ako odaberete **Da**, postupak otvara odjeljak artikala u dostavnici za kupnju kako biste:

    > 1. izmijenili podatke;  
    > 2. potvrdili promjene pomoću gumba **Potvrdi**;  
    > 3. promijenili i sljedeći artikl u otpremnici (ako je odabrano više artikala za izmjenu);  
    > 4. zatvorili obrazac. Postupak stvara otpremnicu i automatski izvršava knjiženje u skladištu s upravo izmijenjenim podacima.

Obje operacije mogu se poništiti pomoću postupka [Zaduženje skladišta Primkom](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). 
