---
title: Zaglavlje
sidebar_position: 2
---

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručni](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). Ovisno o podacima unesenima u kartici dobavljača, aplikacija *automatski* popunjava polja.

Unosom **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno unesenim podacima u [Šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) i u sljedećim *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [interval valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date)

*Ostala polja*:

**Stanje otpremnice**: pomoću ova dva znaka označava se stanje otpremnice, što može biti označeno kao ispisano (nakon što je fizički ispis izvješća otpremnice dostave pokrenut) i preuzeto (nakon što je sama otpremnica preuzeta iz skladišta). Ako otpremnica nije isprintana, nije moguće preuzeti;  

**Naša/vaša referenca**: nakon što se postupak [Izvršenje iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders),završi, također se predlaže informacija koja se nalazi u istoimenom polju narudžbe;    

**Projekt**: koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom.   

**Specifični gumbi**

> [Očekivane isporuke](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): pokreće postupak stvaranja otpremnice iz narudžbe. Aktivira se unosom dobavljača i vrste otpremnice. Narudžba koja se mora izvršiti mora imati postavljenu oznaku *Ispisano* i popunjeno polje *Datum potvrde narudžbe*;    
> **Automatsko preuzimanje**: koristi se za automatsko preuzimanje skladišta odabranih artikala. Ovo polje će biti editabilno samo nakon što je polje *Ispisano* aktivirano.  

### Plaćanja

**Načini plaćanja** automatski se preuzimaju u *Šifarniku dobavljača > kartice Plaćanja* i mogu se izmijeniti/izbrisati od strane korisnika.

Ako je na **Način plaćanja** povezan financijski popust, iznos popusta se uzima u obzir samo za računovodstvene svrhe, odnosno za rokove plaćanja dokumenta, a ne za ukupne Otpremnice.

Ako dokument potječe iz narudžbe, vrste plaćanja mogu se preuzeti ili iz prvog dokumenta ili iz Šifarnika dobavljača.

*Specifični gumbi*

> **Dodaj/Ukloni plaćanja**: koriste se za dodavanje/brisanje odabranih redaka plaćanja.  

### Popusti  

Ponuđeni su samo predefinirani popusti preuzeti u *Šifarniku dobavljača >  kartica Popusti* i mogu ih korisnici mijenjati/brisati.  

Popusti navedeni u zaglavlju dokumenta prikazuju se u svakom novom retku stavke dodanom u dokument.

Ako nakon unosa stavki u dokumentu dodate novi popust u zaglavlju, on se ne kopira u već unesene retke stavki.

*Poseban gumb*  

**Izbriši popuste**: koristi se za brisanje odabranih redaka popusta.

### Agenti

Ovdje se navodi kod agenta i njegova provizija za svaku stavku artikla. Predloženi su kod i postotak koji su definirani u *Šifarnik dobavljača > kartica Agenti*.  

Ako provizija nije povezana s dobavljačem u njegovoj kartici, ipak se mora unijeti kod agenta ali s provizijom NULL. Ako bi provizija bila 0, to bi značilo da je agent povezan, ali ne prima proviziju.

Ovaj odjeljak bit će ponovno prikazan za svaki artikal u pripadajućoj kartici *Agenti*.  

**Specifični gumb**

**Obriši agente**: omogućuje brisanje odabranih redaka agenata.

