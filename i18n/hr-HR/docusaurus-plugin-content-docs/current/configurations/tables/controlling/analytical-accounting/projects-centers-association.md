---
title: Povezivanje centara / naloga
sidebar_position: 1
---

Putanja se nalazi na: **Tablice > Kontroling > Troškovno računovodstvo > Povezivanje centara / naloga**


:::tip Napomena
Ova je tablica namijenjena isključivo društvima koja imaju postavljen *kontroling*.
:::

Kada poduzeće proizvodi po projektu/narudžbi, analiza stvarnih podataka može imati dva interesa:
- točan interes, na razini pojedinog projekta/narudžbe, osobito kada oni međusobno nemaju zajedničke karakteristike;
- interes za grupu projekata/narudžbi proizvedenih u određenom vremenskom razdoblju, kada ti projekti/narudžbe imaju karakteristike koje omogućuju generaliziranje tipologije.

U ovom drugom slučaju ova tablica postaje ključna jer omogućuje povezivanje poslovnih centara *dimenzije* *Projekti/Narudžbe* s nekom njihovom značajkom, kako bi se mogli analizirati ukupni podaci prema tim *centrima projekta/narudžbe* bez potrebe za ulaskom u detalje svakog pojedinog posla.

:::tip Napomena
Ako poduzeće nije zainteresirano za makro-analizu, može preskočiti konfiguraciju ove tablice i koristiti samo jedan *centar projekta/narudžbe*, označen kao *Zadani centar za projekte*. Detalji se nalaze u tablici [***CENTAR TROŠKA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

Dostupna polja za konfiguraciju su:
- ***Šifra*** poduzeća

:::tip Bilješka
***FluentisERP*** će analizirati poveznice prema redoslijedu šifre: kada se odabere projekt X, najprije će se provjeriti omogućuje li prva poveznica određivanje centra koji treba dodijeliti retku. Ako ne, provjerit će se druga poveznica i tako redom, sve dok se ne pronađe prva valjana opcija.
:::

- ***Opis*** poduzeća  
- ***Tip*** poduzeća, tj. objekt unutar kojeg se traži prepoznatljivi element  
- ***Vlasnik'*** koje se uzima u obzir, a koje ovisi o odabiru u prethodnom polju.  

Za ova posljednja dva polja opcije su:
    - *Projekt*
        - *Vrsta projekta*
        - *Godina projekta*
        - *Zona projekta*
        - *Država projekta*
    - *Klijent*
        - *Tip konta*
        - *Kupac račun*
        - *zona za korisnike*
        - *Zemlja kupca*
        - *Administrativna kategorija*
        - *Komercijalna kategorija*
        - *Unos izdataka*
    - *Artikl*
        - *Klasa*
        - *Kategorija proizvoda*
        - *Jedinica mjere*
        - *Porezna kategorija*
        - *Karakteristika*
        - *Vrsta artikla*

Ovisno o postavci, u donjoj mreži omogućit će se povezivanje centra s odgovarajućim definiranim elementom.

:::danger UPOZORENJE
Definiranje poveznice vezane uz *Artikle* zahtijeva da:
    - unutar svakog projekta postoji barem jedan redak sa šifriranim artiklom
    - svaka nabavna ili prodajna stavka, odnosno svaka stavka analitike u računovodstvu koja predstavlja izravni trošak/prihod projekta/narudžbe, mora biti povezana s artiklom unutar projekta. U suprotnom, ***FluentisERP*** neće moći dodijeliti vrijednost toj poveznici i tražit će sljedeću moguću poveznicu.

Ako je, primjerice, svaki projekt obilježen gotovim proizvodom različite klase, vjerojatno je jednostavnije upravljati različitim *vrstama projekata* za svaku klasu nego zahtijevati ručno dodavanje artikla unutar svakog pojedinog projekta i njegovo odabiranje u svim povezanim dokumentima.
:::