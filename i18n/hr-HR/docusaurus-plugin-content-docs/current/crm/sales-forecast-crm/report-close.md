---
title: Automatsko razdoblje zatvaranja po korisniku
sidebar_position: 3
---

U ovom prozoru moguće je ažurirati postojeće [Izvještaje zatvaranja projekcija](/docs/crm/sales-forecast-crm/report-forecast) prodaje ili generirati nove. Napomena da ovi Izvještaji služe za uspoređivanje projekcija prodaje kreiranih sa dokumentacijom.  
U prvoj kartici mogu se unijeti sljedeća polja:       
**Opis**: sadrži opis Izvještaja;      
**Korisnik**: sadrži korisnika koji će kreirati Izvještaj;       
**Tip prilike**: potrebno je navesti koji [Tip prilike](/docs/configurations/tables/crm/opportunities/opportunity-type) želite uzeti u obzir i ispisati u ovom izvještaju;       
**Tip računa prodaje**: potrebno je navesti koji [Tip računa](/docs/configurations/tables/sales/invoices-type) prodaje uzeti u obzir i ispisati;         
**Tip narudžbe kupca**: potrebno je navesti koji [Tip narudžbe](/docs/configurations/tables/sales/sales-order-types) uzeti u obzir i ispisati.      

Za nastavak kreiranja Izvještaja, potrebno je odabrati odabranu redak i kliknuti na gumb za *Kreiranje izvještaja zatvaranja projekcija prodaje* na alatnoj traci. Zatim će se otvoriti popup u kojem ćete Fluentisu navesti kako izvršiti postupak putem unosom sljedećih filtara:  
**Projekcije prodaje**: navesti koju [Projekciju prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) uključiti u izvještaj;     
**Detalji vrste razdoblja**: navesti koji *Dettalj* [Vrste razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type) koristiti; izvještaj će uzeti u obzir samo vrijeme naznačeno u ovom polju;      
**Tvrtka**: u ovom polju naznačite u kojoj tvrtki obaviti operaciju. S pripadajućim oznakama ispod, potrebno je Fluentisu navesti koje dokumente uvesti u ovaj izvještaj.           
Kada potvrdite unesene filtre, Fluentis će potražiti već postojeći [Izvještaj zatvaranja](/docs/crm/sales-forecast-crm/report-forecast) (bez datuma zatvaranja unutar) za istog Korisnika i isti Detalj razdoblja, te će unutar njega dodati retke, ako ih nema. Ako ne postoji valjani prethodno postojeći Izvještaj, stvorit će se novi. Unutar njega će biti dokumenti koje ste odlučili uvesti, spremni za usporedbu s Projekcijom prodaje   
  
Postoje uvjeti za uvoz Računa i Narudžbi u izvještaj (isti uvjeti kao i slučaj izravnog uvoza dokumenata unutar [Izvještaja zatvaranja](/docs/crm/sales-forecast-crm/report-forecast)):     
- Stavke artikla dokumenata moraju imati povezanu [Klasu artikla](/docs/configurations/tables/logistics/item-class) s Obitelji artikla navedenom u Projekciji prodaje;
- [Prihod od prodaje](/docs/configurations/tables/sales/sales-turnover) povezan s artiklima dokumenata mora biti povezan s Obitelji artikla navedenoj u Projekciji prodaje.       

Također postoje uvjeti za uvoz Prilika:        
- Predstavnik dodijeljen Projekciji prodaje mora biti isti Predstavnik povezan s Kontaktom vlasnikom Prilike;      
- U Detaljima Prilike mora biti unesena Obitelj proizvoda predviđena u Projekciji prodaje.  