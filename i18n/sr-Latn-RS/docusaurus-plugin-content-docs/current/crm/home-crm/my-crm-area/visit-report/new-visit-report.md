---
title: Novi izveštaj o poseti
description: Vodič korak po korak za kreiranje novog izveštaja o poseti (Visit Report) u Fluentis ERP-u, uz objašnjenje svih polja obrasca.
keywords: [Fluentis ERP, Visit Report, CRM, vodič, postupak]
sidebar_position: 2
schema_type: HowTo
---

# Kreiranje novog izveštaja o poseti

Procedura kreiranja novog **Izveštaja o poseti** omogućava definisanje karakteristika izveštaja o poseti koji će biti unet, uključujući kontakt i referentnog agenta.

## Struktura obrasca

Obrazac je podeljen na dva dela: gornji i donji.

### Gornji deo

U gornjem delu nalaze se sledeća polja:

**Vrsta izveštaja o poseti**: omogućava označavanje vrste izveštaja o poseti koja se unosi i odnosi se na osnovnu tabelu **Vrsta izveštaja o poseti**;

**Broj**: broj izveštaja o poseti koji automatski dodeljuje Fluentis;

**Datum**: datum koji se odnosi na posetu navedenu u izveštaju o poseti;

**Predmet**: u ovom polju treba navesti razlog posete klijentu;

**Napomene**: slobodno polje za unos dodatnih napomena o poseti;

**Kontakt/Klijent**: u ovom polju treba navesti CRM kontakt ili klijenta na kojeg se odnosi izveštaj o poseti. Oznaka polja i sadržaj polja menjaju se u zavisnosti od toga da li je postavljena oznaka na „CRM kontakt“ ili na „Fluentis konto“;

**Učesnici**: u ovom polju, koje se slobodno popunjava, treba navesti subjekte koji su učestvovali na sastanku;

**Predstavnik**: u ovom polju, koje se odnosi na Fluentis šifarnik agenata, potrebno je navesti agenta koji je prisustvovao sastanku.

**Status izveštaja o poseti**: označava trenutni status izveštaja o poseti u opisne svrhe.  
Stavke dostupne na listi mogu se konfigurisati u odgovarajućoj tabeli Statusi izveštaja o poseti.

### Donji deo

Donji deo obrasca ima dve kartice.

#### Dokument

Na ovoj kartici obično se popunjava izveštaj izrađen tokom posete. Dokument može sadržati različite informacije, u zavisnosti od vrste obavljene posete. Zbog toga su u tabeli dostupna sledeća polja:

- **[Šablon](/docs/crm/budget-marketing-automation/template/template-search)**: šablon koji se koristi kao osnova za izveštaj i popunjava informacijama o klijentu. Potrebno je unapred kreirati različite šablone kako bi bili dostupni tokom poseta i mogli da se koriste. Na padajućoj listi prikazuju se šabloni povezani sa objektima `CrmContact`, `FsLedgerAccount` i `CrmVisitReport`. Na desnoj strani prikazuje se izabrani šablon koji je moguće popuniti.
- **Naziv**: automatski se predlaže naziv preduzeća.
- **Predmet**: predmet e-poruke koja će biti poslata.
- **Primalac**: predlažu se adrese e-pošte CRM kontakta (opšta adresa e-pošte i adrese navedene na kartici Reference) ili ERP kontakta (adrese e-pošte navedene na kartici Reference).
- **CC**: dodatne adrese e-pošte na koje će biti poslata kopija poruke.
- **BCC**: dodatne adrese e-pošte na koje će biti poslata skrivena kopija poruke.
- **Korisnik**: korisnik koji je kreirao e-poruku u izveštaju o poseti.
- **Datum kreiranja**: datum dodavanja e-poruke u izveštaj o poseti.
- **Datum slanja**: datum slanja e-poruke.

U odeljku **Informacije o primaocu** moguće je uneti i podatke potrebne za slanje dokumenta e-poštom.

Za upravljanje šablonom dostupni su sledeći odeljci:

- **Email**: ova kartica sadrži sledeće funkcije:
  - *Štampanje*: omogućava štampanje radnog lista.
  - *Pregled pre štampanja*: omogućava prikaz radnog lista pre štampanja.
  - *Sačuvaj*: omogućava čuvanje kopije dokumenta.
  - *Pošalji*: šalje e-poruku.
  - *Poništi (Undo)*: poništava poslednju izmenu šablona.
  - *Ponovi (Redo)*: vraća poslednju poništenu izmenu šablona.

- **Home**: ova kartica sadrži dugmad za osnovne funkcije uređivanja teksta šablona, kao što su veličina fonta, liste, poravnanje teksta i slično. Sadrži osnovne funkcije karakteristične za uobičajene uređivače teksta, poput Microsoft Worda.

- **Insert**: ova kartica sadrži dugmad za umetanje različitih elemenata u šablon:
  - *Umetni tabelu*: omogućava umetanje tabele u radni list.
  - *Poravnanje slike*: omogućava podešavanje poravnanja slike u telu dokumenta.
  - *Slika*: omogućava umetanje slike u telo dokumenta.
  - *Obeleživač (Bookmark)*: omogućava umetanje obeleživača u šablon.
  - *Hiperveza (Hyperlink)*: omogućava umetanje veze ka veb-stranici ili obeleživaču u šablonu.
  - *Zaglavlje (Header)*: omogućava umetanje zaglavlja šablona.
  - *Podnožje (Footer)*: omogućava umetanje podnožja šablona.
  - *Broj stranice (Page Number)*: služi za prikaz broja stranice u zaglavlju ili podnožju šablona.
  - *Broj stranica (Page Count)*: služi za prikaz ukupnog broja stranica šablona u zaglavlju ili podnožju.
  - *Tekstualni okvir (Text Box)*: omogućava umetanje tekstualnog okvira u šablon.
  - *Simbol (Symbol)*: služi za umetanje posebnog simbola u šablon.

- **Merge data**: ova kartica sadrži dugmad za upravljanje podacima za spajanje i njihovo umetanje, odnosno dinamičkim poljima preuzetim iz izvora podataka definisanog u šablonu, koji se po potrebi može filtrirati pomoću parametara.
  - *Insert Merge Field*: omogućava umetanje polja za spajanje izborom sa liste zasnovane na izvoru podataka povezanom sa šablonom.
  - *View Merged Data*: omogućava skrivanje ili prikaz umetnutih podataka za spajanje u šablonu.
  - *Show All Field Codes*: prikazuje kodove polja koja se koriste kao podaci za spajanje.
  - *Show All Field Results*: prikazuje rezultate preuzimanja podataka iz polja koja se koriste kao podaci za spajanje.
  - *First Record*: omogućava prelazak na prvi zapis dobijen pomoću podataka za spajanje.
  - *Previous Record*: omogućava prelazak na prethodni zapis u odnosu na trenutni.
  - *Next Record*: omogućava prelazak na sledeći zapis.
  - *Last Record*: omogućava prelazak na poslednji zapis dobijen pomoću podataka za spajanje.

#### Dodatni podaci

Na ovoj kartici moguće je upravljati dodatnim podacima.

#### Priloženi dokumenti

Na ovoj kartici moguće je pregledati priložene dokumente. Dokumenti se mogu priložiti na dva načina:

- Korišćenjem dugmeta **Dokumenti** na traci sa alatkama moguće je izabrati da li će se priložiti dokument koji je već evidentiran u Fluentisu ili će se kreirati novi dokument za prilaganje.
- Desnim klikom direktno u tabeli i izborom opcije **Priloži datoteku** pokreće se kreiranje novog dokumenta za prilaganje.

Na traci sa alatkama nalazi se dugme **Umetni sastanak u kalendar**.

Korišćenjem ove funkcionalnosti u Fluentisov kalendar trenutno prijavljenog korisnika umeće se sastanak povezan sa ovim izveštajem o poseti. Sastanak je moguće dodati i u kalendar drugog korisnika, izborom sa liste kalendara za koje korisnik ima ovlašćenja.

Otvoriće se prozor u kojem je moguće promeniti resurs kalendara i definisati datum, vreme, ostale podatke i napomene.

Ako sastanak već postoji, zatražiće se potvrda za kreiranje novog sastanka u kalendaru.

U Fluentisovom kalendaru moguće je kreirati novi izveštaj o poseti desnim klikom i izborom opcije **Kreiraj novi izveštaj o poseti**.