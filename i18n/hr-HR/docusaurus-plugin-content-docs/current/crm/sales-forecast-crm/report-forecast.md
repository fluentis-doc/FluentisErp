---
title: Ispis zatvaranja prodajnih prognoza
sidebar_position: 2
---

U ovom prozoru moguće je uvesti dokumentaciju i usporediti je s prethodno stvorenim [Prognozama prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) kako biste saznali jesu li ciljevi prognoze ostvareni.

U zaglavlju se nalaze sljedeća polja:  
**Operater**: sadrži operatera koji obavlja operaciju;      
**Vrsta razdoblja**: Ovo polje se automatski popunjava unoseći sljedeće polje i predlaže [Vrstu razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type) povezanu s Prognozom;      
**Prognoza prodaje**: potrebno je unijeti [Prognozu prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) koju želimo analizirati i usporediti s dokumentacijom;       
**Godina/Datum/Redni broj**: ova polja automatski se popunjavaju prema povezanoj Numeraciji i Datumu narudžbe;     
**Detalj vrste razdoblja**: ovi podaci su ključni kako bi se naznačilo koje detalje razdoblja (preuzete iz tablice [Vrsta razdoblja](/docs/configurations/tables/crm/sales-forecast/period-type)) treba uzeti u obzir;             

Na donjoj kartici **Podaci** moguće je uvesti dokumentaciju koristeći gumbe na alatnoj traci. Kartica sadrži tri mreže, svaka za svrhu različite vrste dokumenata: Fakture, Narudžbe i Prilike.
       
Postoje određeni uvjeti za uvoz Faktura i Narudžbi:     
- Redovi artikala u dokumentima moraju imati [Razred artikla](/docs/configurations/tables/logistics/item-class) povezan s grupom artikala unesenom u Prognozu prodaje;
- [Prihod od prodaje ](/docs/configurations/tables/sales/sales-turnover) povezan s redovima artikala u dokumentima mora biti povezan s Obitelji artikala unesenom u Prognozu prodaje;      

Postoje i određeni uvjeti za uvoz Prilika:         
- Agent dodijeljen Prognozi prodaje mora biti isti agent povezan s Kontaktom vlasnikom Prilike;        
- U detaljima Prilike mora biti unesena Obitelj proizvoda predviđena u Prognozi prodaje.    