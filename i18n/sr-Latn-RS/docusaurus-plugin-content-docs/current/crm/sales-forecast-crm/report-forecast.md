---
title: Izveštaj zatvaranja prognoza prodaje
sidebar_position: 2
---

U ovom prozoru moguće je uvesti dokumentaciju i uporediti je sa prethodno kreiranim [Prognozama prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) kako biste utvrdili da li su ciljevi prognoze ostvareni.

U zaglavlju se nalaze sledeća polja:

**Operater**: sadrži operatera koji izvršava operaciju;
**Tip perioda**: ovo polje se automatski popunjava unosom sledećeg polja i predlaže [Tip perioda](/docs/configurations/tables/crm/sales-forecast/period-type) povezan sa prognozom;
**Prognoza prodaje**: potrebno je uneti [Prognozu prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) koju želimo da analiziramo i uporedimo sa dokumentacijom;
**Godina/Datum/Redni broj**: ova polja se automatski popunjavaju prema povezanoj numeraciji i datumu naloga;
**Detalj tipa perioda**: ovaj podatak je ključan kako bi se naznačilo koji detalji perioda (preuzeti iz tabele [Tip perioda](/docs/configurations/tables/crm/sales-forecast/period-type)) treba da budu uzeti u obzir;

Na donjoj kartici **Podaci** moguće je uvoziti dokumentaciju korišćenjem dugmadi na alatnoj traci. Kartica sadrži tri mreže, od kojih je svaka namenjena različitoj vrsti dokumenata: Fakture, Porudžbine i Prilike.

Postoje određeni uslovi za uvoz faktura i porudžbina:

- Stavke artikala u dokumentima moraju imati [Klasu artikla](/docs/configurations/tables/logistics/item-class) povezanu sa grupom artikala unetom u prognozu prodaje;
- [Promet od prodaje](/docs/configurations/tables/sales/sales-turnover) povezan sa stavkama artikala u dokumentima mora biti povezan sa grupom artikala unetom u prognozu prodaje;

Postoje i određeni uslovi za uvoz prilika:

- Agent dodeljen prognozi prodaje mora biti isti agent koji je povezan sa kontaktom vlasnikom prilike;
- U detaljima prilike mora biti uneta porodica proizvoda predviđena u prognozi prodaje.