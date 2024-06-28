---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručni](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)ili, prema odabranim postupcima, aplikacija *automatski* popunjava polja..

:::note NAPOMENA 
Ako se dokument stvara *automatski*, ovi podaci preuzimaju se iz izvornog dokumenta iz kojeg je generiran.
:::

Unoseći **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje** prema prethodno postavljenim podacima u  [šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i *odjeljcima*: 

- **Valuta**: [Valuta](/docs/guide/glossary/glossary-intro#currency), [Tečaj](/docs/guide/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/glossary/glossary-intro#country), [Jezik](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Dostava**: [Način dostave](/docs/guide/glossary/glossary-intro#shipment), [Luka](/docs/guide/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/glossary/glossary-intro#packing), [Cjenik](/docs/guide/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval važenja](/docs/guide/glossary/glossary-intro#validity-date)

*Ostala opcionalna polja*:

**Status otpremnice**: kad se otpremnica kreira, nema aktivnih oznaka. Ovaj odjeljak uključuje polja:  
> **Provjereno**: aktivna oznaka omogućava knjiženje/vrednovanje otpremnice;   
> **Vrednovano**: automatski je označeno kada se otpremnica vrednuje;  
> **Knjiženo**: automatski je označeno kada se otpremnica knjiži;    
> **Utovareno**: postaje aktivno kada otpremnica podržava postupak  [utovara u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).    
> **Opozvano**: aktivna oznaka omogućuje poništavanje otpremnice. 

:::note NAPOMENE
Oznake se mogu ukloniti postupkom vraćanja operacije.
:::

**Bilješke dobavljača**: ovo polje preuzima se iz evidencije dobavljača, dok će u slučaju stvaranja iz narudžbenice biti preuzeti isti podaci sadržani u odgovarajućem polju narudžbenice dobavljača. 

Može se unijeti i ručno. Desnim klikom miša moguće je otvoriti obrazac kako biste naveli vrlo dugu napomenu; ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Naša/Vaša referenca**: kada se dovrši postupak [Izvršenje narudžbenice](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), također se nudi informacija iz odgovarajućeg polja narudžbenice. 

Ovaj prijenos vrijedi samo u slučaju otpremnice stvorene prema podacima preuzetim iz jedne narudžbenice.

**Početne napomene**: bit će ponuđene informacije iz narudžbenice u slučaju [Izvršenje otpremnica iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Mogu se unijeti i ručno koristeći [pomoćno polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) kako biste otvorili napomene koje su prethodno unesene u odgovarajuću tablicu koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje kodiranim napomenama*. Korisnik mora dvaput kliknuti na polje **Početne napomene** kako bi otvorio *pomoćne kodirane napomene* napomene i odabrao podatke ili desnim klikom miša otvoriti prozor kako bi naveo vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Projekt**: pomoću [pomoćnog polja](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.  
Ovo povezivanje funkcionira samo na razini zaglavlja članka.

**Status dokumenta**: odnosi se na tablicu **Status dokumenta**; podatak mora unijeti korisnik i može se koristiti postupcima replikacije instaliranima za upravljanje jednim mjestom s prodajnim mjestima.

**Specifični gumbi**

> [Izuzimanje iz narudžbe](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): poziva postupak za stvaranje otpremnice iz narudžbenice dobavljača. Aktivira se unosom dobavljača i vrste otpremnice. Narudžbenica koja se izvršava mora imati postavljenu zastavu *Ispisano* i *Datum potvrde narudžbe*.    
> [Automatski zaduživanje skladišta](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/automatic-loading-on-warehouse): koristi se za automatsko unošenje artikala u skladište. Ovo polje bit će uredno nakon što se aktivira polje *Provjereno* i unese *Broj* dokumenta.

### Plaćanja

**Rješenja plaćanja** automatski su preuzeta *Šifarnika dobavljača > kartica Plaćanja* i mogu ih korisnik mijenjati/brisati.

Ako je s **Tipom plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u knjigovodstvene svrhe, tj. U rokovima plaćanja dokumenta, a ne u ukupnom iznosu dostavnice.

Ako dokument potječe iz *Narudžbenice dobavljača*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta, iz obrasca dobavljača ili se mogu vidjeti u obrascu dokumenata koje treba izvršiti, a korisnik odabire željeni tip plaćanja.

*Poseban gumb*

**Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.

### Popusti 

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnika dobavljača > kartica Popusti* i korisnik ih može mijenjati/brisati.

Popusti koji su ponuđeni u zaglavlju dokumenta prenose se u svaki novi redak članka unesen u dokument.

Ako nakon unosa redaka članka unesete novi popust u zaglavlje, to se ne replicira u već unesene retke članka.

*Poseban gumb*

**Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.


### Primatelj 

Ovdje se nudi informacija unesena u Obrasca dobavljača, kartica **Dostave**, samo ako postoje zadani podaci.

Padajući izbornik nudi sve primatelje i destinacije unesene u Obrasca dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti čak i samo opisno, bez prethodnog unosa među kontaktima.

### Dodatni podaci 

Ovdje se nudi informacija unesena u *Šifarnika subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.
