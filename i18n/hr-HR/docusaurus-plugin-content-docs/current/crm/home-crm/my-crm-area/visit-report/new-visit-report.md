---
title: Novo izvješće o posjetima
description: Vodič korak po korak za izradu novog izvješća o posjetu (Visit Report) u Fluentis ERP-u, s objašnjenjem svih polja obrasca.
keywords: [Fluentis ERP, Visit Report, CRM, vodič, postupak]
sidebar_position: 2
schema_type: HowTo
---

# Izrada novog izvješća o posjetu

Postupak stvaranja novog **Izvješća o posjetima** omogućuje definiranje karakteristika izvješća o posjetima koje će se unijeti, uključujući kontakt i referentnog agenta.

## Struktura obrasca

Obrazac je podijeljen u dva djela: gornji i donji.

### Gornji dio

U gornjem dijelu nalaze se sljedeća polja:  

**Vrsta izvješća o posjetima**: omogućuje označavanje vrste izvješća o posjetima koje se unosi i odnosi se na osnovnu tablicu **Vrsta izvješća o posjetima**;

**Broj**: broj izvješća o posjetima koji automatski dodjeljuje Fluentis;

**Datum**: datum koji se odnosi na posjetu navedenu u izvješću o posjetima;

**Predmet**: u ovom polju treba navesti razlog posjete klijentu;

**Bilješke**: slobodno polje za unos dodatnih napomena o posjeti;

**Kontakt/Klijent**: u ovom polju treba navesti CRM kontakt ili klijenta na kojeg se odnosi izvješće o posjetima. Oznaka polja i predmet polja mijenjaju se ovisno o tome je li zastava postavljena na "CRM kontakt" ili na "Fluentis konto";

**Sudionici**: u ovom polju, slobodno se ispunjava, trebaju se navesti subjekti koji su sudjelovali na sastanku;

**Predstavnik**: u ovom polju, koje se odnosi na Fluentisov šifarnik agenata, potrebno je navesti agenta koji je prisustvovao sastanku.

**Status izvješća o posjetu**: označava trenutačni status izvješća o posjetu u opisne svrhe. 
Stavke dostupne na popisu mogu se konfigurirati u odgovarajućoj tablici Statusi izvješća o posjetu.

### Donji dio

Donji dio obrasca ima dvije kartice.

#### Dokument

Na ovoj kartici obično se ispunjava izvješće izrađeno tijekom posjeta. Dokument može sadržavati različite informacije, ovisno o vrsti obavljenog posjeta. Zbog toga su u tablici dostupna sljedeća polja:

- **[Predložak](/docs/crm/budget-marketing-automation/template/template-search)**: predložak koji se koristi kao osnova za izvješće i ispunjava informacijama o klijentu. Potrebno je unaprijed izraditi različite predloške kako bi bili dostupni tijekom posjeta i mogli se koristiti. Na padajućem popisu prikazuju se predlošci povezani s objektima `CrmContact`, `FsLedgerAccount` i `CrmVisitReport`. Na desnoj strani prikazuje se odabrani predložak koji je moguće ispuniti.
- **Naziv**: automatski se predlaže naziv tvrtke.
- **Predmet**: predmet poruke e-pošte koja će se poslati.
- **Primatelj**: predlažu se adrese e-pošte CRM kontakta (opća adresa e-pošte i adrese navedene na kartici Reference) ili ERP kontakta (adrese e-pošte navedene na kartici Reference).
- **CC**: dodatne adrese e-pošte kojima će se poslati kopija poruke.
- **BCC**: dodatne adrese e-pošte kojima će se poslati skrivena kopija poruke.
- **Korisnik**: korisnik koji je izradio poruku e-pošte u izvješću o posjetu.
- **Datum izrade**: datum dodavanja poruke e-pošte u izvješće o posjetu.
- **Datum slanja**: datum slanja poruke e-pošte.

U odjeljku **Informacije o primatelju** moguće je unijeti i podatke potrebne za slanje dokumenta e-poštom.

Za upravljanje predloškom dostupni su sljedeći odjeljci:

- **Email**: ova kartica sadrži sljedeće funkcije:
  - *Ispis*: omogućuje ispis radnog lista.
  - *Pretpregled ispisa*: omogućuje prikaz radnog lista u pretpregledu prije ispisa.
  - *Spremi*: omogućuje spremanje kopije dokumenta.
  - *Pošalji*: šalje poruku e-pošte.
  - *Poništi (Undo)*: poništava posljednju izmjenu predloška.
  - *Ponovi (Redo)*: vraća posljednju poništenu izmjenu predloška.

- **Home**: ova kartica sadrži gumbe za osnovne funkcije uređivanja teksta predloška, kao što su veličina fonta, popisi, poravnanje teksta i slično. Sadrži osnovne funkcije karakteristične za uobičajene uređivače teksta, poput Microsoft Worda.

- **Insert**: ova kartica sadrži gumbe za umetanje različitih elemenata u predložak:
  - *Umetni tablicu*: omogućuje umetanje tablice u radni list.
  - *Poravnanje slike*: omogućuje umetanje slike u tijelo dokumenta.
  - *Slika*: omogućuje umetanje slike u tijelo dokumenta.
  - *Knjižna oznaka (Bookmark)*: omogućuje umetanje knjižne oznake u predložak.
  - *Hiperveza (Hyperlink)*: omogućuje umetanje poveznice na web-stranicu ili knjižnu oznaku u predlošku.
  - *Zaglavlje (Header)*: omogućuje umetanje zaglavlja predloška.
  - *Podnožje (Footer)*: omogućuje umetanje podnožja predloška.
  - *Broj stranice (Page Number)*: služi za prikaz broja stranice u zaglavlju ili podnožju predloška.
  - *Broj stranica (Page Count)*: služi za prikaz ukupnog broja stranica predloška u zaglavlju ili podnožju.
  - *Tekstni okvir (Text Box)*: omogućuje umetanje tekstnog okvira u predložak.
  - *Simbol (Symbol)*: služi za umetanje posebnog simbola u predložak.

- **Merge data**: ova kartica sadrži gumbe za upravljanje i umetanje podataka za spajanje, odnosno dinamičkih polja preuzetih iz izvora podataka postavljenog u predlošku, koji se prema potrebi može filtrirati parametrima.
  - *Insert Merge Field*: omogućuje umetanje polja za spajanje odabirom s popisa koji se temelji na izvoru podataka povezanom s predloškom.
  - *View Merged Data*: omogućuje skrivanje ili prikaz umetnutih podataka za spajanje u predlošku.
  - *Show All Field Codes*: prikazuje kodove polja koja se koriste kao podaci za spajanje.
  - *Show All Field Results*: prikazuje rezultate dohvaćanja podataka iz polja koja se koriste kao podaci za spajanje.
  - *First Record*: omogućuje prelazak na prvi zapis dohvaćen podacima za spajanje.
  - *Previous Record*: omogućuje prelazak na prethodni zapis u odnosu na trenutačni.
  - *Next Record*: omogućuje prelazak na sljedeći zapis.
  - *Last Record*: omogućuje prelazak na posljednji zapis dohvaćen podacima za spajanje.

#### Dodatni podaci

Na ovoj kartici moguće je upravljati dodatnim podacima.

#### Priloženi dokumenti

Na ovoj kartici moguće je pregledavati priložene dokumente. Dokumente je moguće priložiti na dva načina:

- Korištenjem gumba **Dokumenti** na alatnoj traci moguće je odabrati hoće li se priložiti dokument koji je već evidentiran u Fluentisu ili će se izraditi novi dokument za prilaganje.
- Desnim klikom izravno u tablici i odabirom opcije **Priloži datoteku** pokreće se izrada novog dokumenta za prilaganje.

Na vrpci s alatima nalazi se gumb **Umetni sastanak u kalendar**.

Korištenjem ove funkcionalnosti u Fluentisov kalendar trenutačno prijavljenog korisnika umeće se sastanak povezan s ovim izvješćem o posjetu. Sastanak je moguće dodati i u kalendar drugog korisnika, odabirom s popisa kalendara za koje korisnik ima ovlasti.

Otvorit će se prozor u kojem je moguće promijeniti resurs kalendara te definirati datum, vrijeme i ostale podatke i napomene.

Ako sastanak već postoji, zatražit će se potvrda za stvaranje novog sastanka u kalendaru.

U Fluentisovu kalendaru moguće je izraditi novo izvješće o posjetu desnim klikom i odabirom opcije **Izradi novo izvješće o posjetu**.

