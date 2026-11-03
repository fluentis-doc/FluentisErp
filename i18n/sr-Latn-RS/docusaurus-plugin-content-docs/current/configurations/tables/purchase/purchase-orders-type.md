---
title: Tipovi narudžbina dobavljača
sidebar_position: 3
---

Ova tabela je ključna za definisanje različitih tipova narudžbina dobavljača, od kojih svaka ima svoja svojstva. Dostupna je putem menija *Konfiguracija > Tabele > Nabavka > Tipovi narudžbina dobavljača*.

Dostupna su sledeća polja:

**Tip/Opis**: obavezna polja za definisanje tipa i opisa narudžbine dobavljaču.

**Numerisanje/Opis**: obavezno polje za izbor [Numerisanja](/docs/configurations/tables/fluentis-numerations) koje će biti povezano sa tipom narudžbine.

**Automatska potvrda narudžbine**: ako je ova opcija aktivirana, prilikom kreiranja narudžbine ovog *tipa narudžbine* automatski se popunjava i polje *Datum potvrde narudžbine* u zaglavlju narudžbine, i to tekućim datumom.

**Novčani tok**: ako je ova opcija aktivirana, tip narudžbine uključuje se u obračun novčanog toka.

**Skladište/Opis skladišta**: skladište u koje se prima roba, a koje se automatski postavlja na redove artikala narudžbina kreiranih sa ovim tipom narudžbine.

**Šablon/Opis šablona**: [Šablon](/docs/configurations/tables/logistics/warehouse-templates) skladišnog kretanja za primljenu robu, koji se automatski postavlja na redove artikala narudžbina kreiranih sa ovim tipom.

**Kontroliši raspoloživost**: ako je ova opcija aktivirana, narudžbine ovog tipa uključuju se u obračun raspoloživosti i vidljive su u obrascu [Analiza raspoloživosti](/docs/erp-home/registers/items/availability-analysis).

**Poljoprivredni PDV u nabavci**: ako je ova opcija aktivirana, prilikom kreiranja narudžbine sistem proverava da li za korišćeni artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se uobičajena šifra PDV-a.

**Upravljanje dodatnim podacima matrice**: ako je ova opcija aktivirana, omogućava prikaz dodatne kartice za unos količina za svaku pojedinačnu ćeliju matrice, u slučaju upravljanja artiklima sa matricom.

**Ažuriranje cenovnika**: služi za automatsko ažuriranje cena u cenovnicima na osnovu cena navedenih u narudžbini. Ako ova opcija nije aktivirana, i dalje je moguće ručno ažurirati vrednost u cenovniku na osnovu cene navedene u redu narudžbine.

**Tip otpremnice**: tip nabavne otpremnice koja će se kreirati prilikom korišćenja postupka [Razduživanje iz narudžbina](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

**Izveštaji**: u ovom polju moguće je odabrati podrazumevanu štampu (napominjemo da je za štampanje podrazumevanog izveštaja prilikom štampanja potrebno odabrati opciju *Višestruke štampe*). U sledećem polju moguće je navesti **Broj kopija** za štampu.

**Kontrola dobavljača**: omogućava aktiviranje kontrole prema kojoj će postupak prilikom izbora subjekta navedenog u zaglavlju narudžbine dozvoljavati izbor samo konta tipa dobavljač, a ne konta tipa kupac.

**Osnovna sredstva**: ova opcija omogućava aktiviranje [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za taj tip narudžbine i izbor **Tipa operacije** koji se želi izvršiti.