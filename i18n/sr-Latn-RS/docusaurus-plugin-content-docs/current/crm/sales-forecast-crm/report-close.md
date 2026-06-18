---
title: Automatsko periodično zatvaranje po korisniku
sidebar_position: 3
---

U ovom prozoru moguće je ažurirati postojeće [Izveštaje zatvaranja prognoza](/docs/crm/sales-forecast-crm/report-forecast) prodaje ili generisati nove. Napomena: ovi izveštaji služe za poređenje prognoza prodaje sa dokumentacijom.

U prvoj kartici mogu se uneti sledeća polja:

**Opis**: sadrži opis izveštaja;
**Korisnik**: sadrži korisnika koji će kreirati izveštaj;
**Tip prilike**: potrebno je navesti koji [Tip prilike](/docs/configurations/tables/crm/opportunities/opportunity-type) želite da uzmete u obzir i prikažete u ovom izveštaju;
**Tip prodajne fakture**: potrebno je navesti koji [Tip fakture](/docs/configurations/tables/sales/invoices-type) prodaje treba uzeti u obzir i prikazati;
**Tip porudžbine kupca**: potrebno je navesti koji [Tip porudžbine](/docs/configurations/tables/sales/sales-order-types) treba uzeti u obzir i prikazati.

Da biste nastavili sa kreiranjem izveštaja, potrebno je izabrati željeni red i kliknuti na dugme *Kreiranje izveštaja zatvaranja prognoza prodaje* na alatnoj traci. Nakon toga otvoriće se prozor u kojem ćete Fluentisu zadati način izvršavanja procedure unosom sledećih filtera:

**Prognoza prodaje**: navesti koju [Prognozu prodaje](/docs/crm/sales-forecast-crm/new-sales-forecast) uključiti u izveštaj;
**Detalji tipa perioda**: navesti koji *Detalj* [Tipa perioda](/docs/configurations/tables/crm/sales-forecast/period-type) koristiti; izveštaj će uzeti u obzir samo period naveden u ovom polju;
**Kompanija**: u ovom polju navedite u kojoj kompaniji izvršiti operaciju. Pomoću odgovarajućih oznaka ispod potrebno je Fluentisu naznačiti koje dokumente treba uvesti u ovaj izveštaj.

Nakon potvrde unetih filtera, Fluentis će potražiti postojeći [Izveštaj zatvaranja](/docs/crm/sales-forecast-crm/report-forecast) (bez unetog datuma zatvaranja) za istog korisnika i isti detalj perioda, i u njega dodati redove ukoliko već ne postoje. Ako ne postoji odgovarajući prethodno kreirani izveštaj, biće kreiran novi.

Unutar njega biće uključeni dokumenti koje ste odlučili da uvezete, spremni za poređenje sa prognozom prodaje.

Postoje određeni uslovi za uvoz faktura i porudžbina u izveštaj (isti uslovi važe i za direktan uvoz dokumenata u okviru [Izveštaja zatvaranja](/docs/crm/sales-forecast-crm/report-forecast)):

- Stavke artikala u dokumentima moraju imati povezanu [Klasu artikla](/docs/configurations/tables/logistics/item-class) sa porodicom artikala navedenom u prognozi prodaje;
- [Promet od prodaje](/docs/configurations/tables/sales/sales-turnover) povezan sa artiklima iz dokumenata mora biti povezan sa porodicom artikala navedenom u prognozi prodaje.

Takođe postoje uslovi za uvoz prilika:

- Predstavnik dodeljen prognozi prodaje mora biti isti predstavnik koji je povezan sa kontaktom vlasnikom prilike;
- U detaljima prilike mora biti uneta porodica proizvoda predviđena u prognozi prodaje.