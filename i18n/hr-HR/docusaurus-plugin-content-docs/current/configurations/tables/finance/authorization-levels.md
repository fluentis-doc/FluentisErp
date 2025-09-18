---
title: Razine odobrenja
sidebar_position: 23
---

Ova tablica omogućuje proširenje upravljanja blokadom pasivnih stavki prema složenijoj logici.

Pretpostavimo da postoji:
- administrativna kontrola računa,  
- naknadna kontrola od strane nabavnog odjela, 
- konačna autorizacija od strane vlasnika. 

Moguća kodifikacija razina autorizacije mogla bi biti sljedeća:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

Razina *00 – Početna blokada* mora biti unaprijed postavljena u svakoj **kartici dobavljača**, u kartici [**Plaćanja**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), kako bi stavke bile kreirane blokirane s ovom početnom razinom.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

Stavka se potom može podići na razinu *01* od strane korisnika u ulozi *Administracija* (na slici *Fluentis Users*, usp. upravljanje korisnicima i ulogama u odjeljku ARM): to je moguće jer ima roditeljsku *razinu* 0 i podiže je na razinu 1.

Zatim stavka može biti podignuta na razinu *02* od strane korisnika u ulozi *Nabava* (na slici *Fluentis Admins*): ovo je moguće jer ima *roditeljsku* razinu 1 i podiže je na razinu 2.

Na kraju, stavka može doći do konačne razine *03* samo od strane korisnika XXXXXXX (vlasnika), koji daje stvarnu autorizaciju za plaćanje (tek tada se blokada stavke uklanja i stavka postaje plaćiva).

Svaki korak može zahtijevati unos napomene o autorizaciji ako je na razini postavljena odgovarajuća oznaka (flag).

Promjene stanja mogu se izvršavati kroz sučelje [**Upravljanje likvidnošću**](/docs/finance-area/maturity-values/procedures/cash-management/), putem gumba *Autoriziraj stavku*. 

Nakon davanja autorizacije, također iz sučelja *Upravljanje likvidnošću*, moguće je pripremiti izravno liste plaćanja iz modula *Plaćanja dobavljača* za autorizirane stavke (ili one koje nisu blokirane), kao alternativa klasičnoj proceduri kreiranja liste plaćanja i naknadnog pretraživanja pasivnih stavki za uključivanje u listu.