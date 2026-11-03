---
title: Tipovi narudžbi dobavljača
sidebar_position: 3
---

Ova je tablica ključna za definiranje različitih vrsta narudžbi dobavljača, od kojih svaka ima svoja svojstva. Dostupna je putem izbornika *Konfiguracija > Tablice > Nabava > Tipovi narudžbi dobavljača*.

Dostupna su sljedeća polja:

**Tip/Opis**: obvezna polja za definiranje vrste i opisa narudžbe dobavljaču.

**Numeracija/Opis**: obvezno polje za odabir [Numeriranja](/docs/configurations/tables/fluentis-numerations) koje će se povezati s vrstom narudžbe.

**Automatska potvrda narudžbe**: ako je ova opcija aktivirana, prilikom izrade narudžbe ove *vrste narudžbe* automatski se popunjava i polje *Datum potvrde narudžbe* u zaglavlju narudžbe, i to tekućim datumom.

**Novčani tijek**: ako je ova opcija aktivirana, vrsta narudžbe uključuje se u izračun novčanog toka.

**Skladište/Opis skladišta**: skladište u koje se zaprima roba, a koje se automatski postavlja na retke artikala narudžbi izrađenih s ovom vrstom narudžbe.

**Predložak/Opis predloška**: [Predložak](/docs/configurations/tables/logistics/warehouse-templates) skladišnog kretanja za zaprimljenu robu, koji se automatski postavlja na retke artikala narudžbi izrađenih s ovom vrstom.

**Kontroliraj raspoloživost**: ako je ova opcija aktivirana, narudžbe ove vrste uključuju se u izračun raspoloživosti i vidljive su u obrascu [Analiza raspoloživosti](/docs/erp-home/registers/items/availability-analysis).

**Poljoprivredni PDV u nabavi**: ako je ova opcija aktivirana, prilikom izrade narudžbe sustav provjerava postoji li za korišteni artikl šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se uobičajena šifra PDV-a.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućuje prikaz dodatne kartice za unos količina za svaku pojedinu ćeliju matrice, u slučaju upravljanja artiklima s matricom.

**Ažurirati cjenik**: služi za automatsko ažuriranje cijena u cjenicima na temelju cijena navedenih u narudžbi. Ako ova opcija nije aktivirana, i dalje je moguće ručno ažurirati vrijednost u cjeniku na temelju cijene navedene u retku narudžbe.

**Tip otpremnice**: vrsta nabavne otpremnice koja će se izraditi prilikom korištenja postupka [Razduživanje iz narudžbi](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

**Izvještaji**: u ovom polju moguće je odabrati zadani ispis (napominjemo da je za ispis zadanog izvještaja prilikom ispisa potrebno odabrati opciju *Višestruki ispisi*). U sljedećem polju moguće je navesti **Broj kopija** za ispis.

**Kontrola dobavljača**: omogućuje aktivaciju kontrole prema kojoj će postupak prilikom odabira subjekta navedenog u zaglavlju narudžbe dopuštati odabir samo konta vrste dobavljač, a ne konta vrste kupac.

**Osnovnim sredstva**: ova opcija omogućuje aktivaciju [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za tu vrstu narudžbe i odabir **Vrste operacije** koja se želi izvršiti.