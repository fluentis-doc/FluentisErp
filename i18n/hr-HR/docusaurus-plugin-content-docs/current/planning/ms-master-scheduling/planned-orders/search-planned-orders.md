---
title: Pretraga Proizvodnih naloga 
sidebar_position: 2
---

Obrazac za pretraživanje dokumenata omogućuje pretraživanje svih dokumenata s ciljem njihovog prikazivanja, izmjene i eventualnog brisanja ili unosa novog dokumenta; prozor se sastoji od područja filtra i rezultata u tablici. 

Nakon postavljanja svih željenih filtara, dovoljno je kliknuti na gumb **Traži** na *traci izbornika* kako bi se rezultati prikazali u tablici. 

Za otvaranje detalja dokumenta, dovoljno je odabrati ga i dvaput kliknuti mišem, ili kliknuti na gumb **Izmjena** (omogućuje ulazak u detalje i njihovu izmjenu) ili na gumb **Prikaži** (omogućuje ulazak u detalje i njihov prikaz, ali bez mogućnosti izmjene).

*Vidi također*: 

*Funkcionalnosti, gumbi i zajednička polja*   
*Dodavanje novih polja u obrasce za pretraživanje*   


*Specifični gumbi*:

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): ovim gumbom možete otvoriti zaslon za MRP parametre artikla;               
> [Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): omogućuje otvaranje zaslona za popis materijala artikla;    
> [Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route): omogućuje pregled radnog ciklusa i povezanih proizvodnih faza artikla.  

*Specifična polja*:

**Datum početka**: za planirane narudžbe kupnje ili radnih naloga, označava datum kada treba poslati narudžbu dobavljaču koja će biti generirana prilikom izdavanja same narudžbe. Za planirane narudžbe proizvodnje, ovo označava predviđeni datum početka prve faze proizvodnje;    
**Datum FOB-a**(free on Board): predstavlja datum koji se izračunava zbrajanjem *Predviđenog datuma početka* i *Vremena nabave* unesenog u karticu [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) artikla koji je predmet Planirane narudžbe za nabavu. Ovo se obrađuje samo za artikle s tipom nabave *Kupnja*;    
**Datum očekivanog vremena dolaska**(Estimated Time of Arrival): označava datum koji se izračunava dodavanjem *Datum FOB-a* na *Lead Time Otpreme* koje je uneseno također u kartici  *Preferirani dobavljači* artikla koji je predmet planirane narudžbe za nabavu. Ovo se obrađuje samo za artikle s tipom nabave *Kupnja*;      
**Datum završetka**: za planirane narudžbe kupnje ili radnih naloga, označava datum kada treba primiti isporuku, što će se podudarati s predviđenim datumom primitka linije narudžbe dobavljača koja će biti generirana prilikom izdavanja same narudžbe. Za planirane narudžbe proizvodnje, ovo označava predviđeni datum završetka posljednje faze proizvodnje;    
**Od minimalne dostupnosti**: ova značajka je aktivna samo ako je planirana narudžba generirana korištenjem procedure *Općeg raspoređivanja* i ako je u [Parametrima raspoređivanja](/docs/planning/ms-master-scheduling/general-schedule), omogućena opcija za *Razmatranje minimalne dostupnosti* u razdoblju. Ova značajka će biti aktivirana ako je *Datum minimalne dostupnosti* u razdoblju rasporeda nakon datuma potrebe; inače će biti onemogućena;              
**Potvrđena količina**: različita je od nule samo ako je narudžba generirana obradom MRP-a;    
**Korištena količina**: količina koja je obvezana na trenutni datum za artikl;    
**Obvezna**: ako je aktivno, zastava će naznačiti da planirana proizvodna narudžba nije pomična u odnosu na unutarnji datum početka.  

U tablici će narudžbe biti prikazane u različitim bojama ovisno o *Vrsti planirane narudžbe* (ako je kupnja, proizvodnja ili radni nalog). Ovo se podešava unutar [Parametara potrebe materijala](/docs/configurations/parameters/production/resource-requirements-parameters), u pripadnoj tablici gdje možete odabrati pozadinu reda ili tekst različitih narudžbi.  

Iz ovog obrasca također možete unijeti novu narudžbu klikom na gumb [Umetni nalog](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).
