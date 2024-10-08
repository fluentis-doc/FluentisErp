---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno postavljenim podacima u [šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Dostava](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Način dostave](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

*Ostala opcionalna polja*:

**Status računa**: kada se račun stvori, nema aktivnih zastava. Ovaj odjeljak uključuje sljedeća polja:  
> **Kontrolirano**: aktivna zastava omogućuje knjiženje računa;  
> **Knjiženo**: zastava se automatski aktivira kada račun podržava  [postupak knjiženja](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
> **Utovareno**: zastava postaje aktivna kada račun podržava [postupak učitavanja](/docs/purchase/purchase-invoices/insert-purchase-invoice/header-procedures/automatic-loading-on-warehouse). U slučaju da je račun stvoren iz već učitanog prijevoznog dokumenta, prisutan je opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira zastavu Učitano i na računu.   
> **Otkazano**: aktivna zastava omogućuje poništenje računa.

:::NAPOMENA
Oznake se mogu ukloniti postupkom vraćanja operacije.  
:::

**Bilješke dobavljača**: predlaže se informacija unesena u kartoteku dobavljača, dok se u slučaju automatskog stvaranja iz drugog dokumenta preuzimaju isti podaci koji se nalaze u odgovarajućem polju izvornog dokumenta.

Također se može ručno unijeti. Desnim klikom miša moguće je otvoriti formu za specificiranje dugog teksta bilješke; ako polje sadrži vrijednost, boja pozadine polja mijenja se.

**Naša/Vaša referenca**: kada se dovrši postupak:
- [Izvršenje narudžbenice](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), također se nudi informacija iz odgovarajućeg polja narudžbenice. 
 
Ovaj prijenos vrijedi samo ako je faktura stvorena povlačenjem podataka iz samo jedne narudžbenice.

- [Valorizacija dostavnice kupnje](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), predlaže se informacija iz odgovarajućeg otpremnice.

Ovaj prijenos vrijedi samo ako je faktura izdana iz samo jedne otpremnice.  

**Početne bilješke**: ponovno će se predložiti informacije iz narudžbenice u slučaju [Izuzimanje iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Može se unijeti i ručno pomoću [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) kako bi se otvorile bilješke koje su već unesene u prethodnoj tablici koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje kodiranim bilješkama*. Korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *pomoćne kodirane napomene* i odabrao podatke ili desnim klikom miša otvoriti prozor kako bi naveo vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Projekt**: pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.

Ovo udruživanje funkcionira samo na razini zaglavlja članka.

**Status dokumenta**: odnosi se na tablicu stanja dokumenta; podatak mora unijeti korisnik i može se koristiti postupcima replikacije instaliranim u upravljanju poslovnicom s prodajnim mjestima.

**Referenca**: nakon što stvori [storno](/docs/purchase/purchase-invoices/search-purchase-invoices) fakture, korisnik mora povezati dvije fakture unoseći *broj*, *datum* i *vrstu* izvorne fakture;

**Račun potraživanja**: navodi broj, datum i protokol knjiženja koji proizlazi iz knjiženja fakture.

*Posebni gumbi*

> [Izuzimanje iz narudžbe](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): poziva postupak za stvaranje fakture iz narudžbenice dobavljača. Aktivira se unosom dobavljača i vrste fakture. Narudžbenica koja će se izvršiti mora imati postavljenu zastavu *Tiskano* i *Datum potvrde naloga*.  
> [Automatsko punjenje u skladištu](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse): koristi se za automatsko punjenje skladišta odabranim artiklima. Ovo polje bit će uređivano samo jednom kada se aktivira polje *Provjereno* i unese *broj* dokumenta.

### Plaćanja

**Rješenja za plaćanje** automatski se prenose iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je **Tip plaćanja** povezan sa financijskim popustom, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu računa.

Ako dokument potječe iz:

- *Narudžbenice dobavljača*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta ili iz Šifarnika dobavljača; sva plaćanja dokumenata koji se moraju obraditi mogu se prikazati na jednom obrascu, a korisnik može odabrati željeni tip plaćanja.

- *Otpremnice*, plaćanja dobavljača mogu se zadržati ili pojedinačna plaćanja prisutna u svakoj otpremnici; u ovom slučaju, u računu se prikazuje tip plaćanja s osnovicom i PDV-om istim kao i otpremnici; nadalje, za eventualne redove artikala dodane u račun, a koje ne proizlaze iz otpremnice, dodaje se novi red.

*Posebni gumb*

**Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

### Popusti

Predlažu se samo predefinirani popusti preuzeti iz *Šifarnik dobavljača > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta prenose se u svaki novi red artikla koji se unese u dokument.

Ako nakon unosa redaka artikala unesete novi popust u zaglavlje, on se ne replicira u već unesene redove artikala.

*Posebni gumb*

**Izbriši rabate**: koristi se za brisanje odabranih redova popusta.


### Pošiljka

Ovdje se predlaže informacija unesena u podaci dobavljača, kartica [Pošiljke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), samo ako postoje zadani podaci.

Padajući izbornik nudi sve *Primatelje* i *Odredišta* unesena u  Šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti samo kao opis bez prethodnog unosa među kontaktima.


### Dodatni podaci

Ovdje se predlaže informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.
