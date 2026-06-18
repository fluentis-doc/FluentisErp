---
title: Nova prilika
sidebar_position: 2
---

U ovom obrascu unose se sve opšte informacije vezane za **Priliku** koja se želi uneti. Ekran prilike sastoji se od tri dela:

- gornji deo prikazuje eventualne povezane radne tokove; svako može kreirati sopstveni radni tok prema potrebama CRM-a kompanije; za više informacija pogledajte odgovarajući vodič o radnim tokovima;
- srednji deo prikazuje zaglavlje prilike sa opštim informacijama, od kojih su neka polja obavezna, a neka nisu;
- ispod se nalaze različite kartice koje prikazuju izvršene operacije, o kojima će biti reči kasnije u ovom vodiču.

## Upravljanje prilikama

*Posebna dugmad* na traci sa alatkama:

> **Sačuvaj**: dugme za čuvanje prilike i pripadajućih izmena;
>
> **Izračunaj vrednosti**: dugme za ponovno izračunavanje vrednosti prilike na osnovu ponude sa kojom je prilika povezana.

### Zaglavlje

**Tip prilike**: koristi se za definisanje [Tipa prilike](/docs/configurations/tables/crm/opportunities/opportunity-type) koji se unosi. Na tipu prilike moguće je navesti i podrazumevani tok (*pipeline*);

**Broj**: vrednost koju Fluentis automatski dodeljuje i koja omogućava jedinstvenu identifikaciju prilike;

**Naslov**: obavezno polje koje omogućava definisanje naziva prilike radi lakšeg prepoznavanja;

**Datum kreiranja**: ovaj datum označava datum unosa prilike u Fluentis;

**Datum zatvaranja**: ovo polje omogućava navođenje datuma zatvaranja prilike i može se koristiti kao filter u prozoru za pretragu prilika;

**Kontakt**: ovo polje koristi se za označavanje kontakta na kojeg se prilika odnosi. Odnosi se na [kontakt podatke](/docs/crm/home-crm/contacts/new-contact) u CRM-u.

**Glavni agent**: ova informacija se automatski preuzima na osnovu podataka navedenih u CRM kontaktu koji je vlasnik prilike;

**Valuta**: označava valutu u kojoj će biti iskazane vrednosti poslovne prilike;

**Vreme proteklo od poslednje aktivnosti**: označava vreme proteklo od unosa poslednje aktivnosti za određenu priliku;

**Verovatnoća uspeha**: koristi se za označavanje procenta [verovatnoće](/docs/configurations/tables/crm/opportunities/probability-progress) uspeha povezane sa prilikom;

**Kvalitet kontakta**: koristi se za označavanje [kvaliteta](/docs/configurations/tables/crm/contacts/contact-quality) kontakt osobe koja je vlasnik prilike;

**Razlozi dobijene/izgubljene prilike**: koristi se za označavanje da li je prilika dobijena ili izgubljena;

**Razlozi**: u ovom polju mogu se odabrati [razlozi](/docs/configurations/tables/crm/opportunities/closing-reason) dobijene ili izgubljene prilike;

**Opis**: koristi se za dodatno detaljno opisivanje razloga koji su doveli do dobijanja ili gubitka prilike;

**Neto vrednost**: ovo polje prikazuje ukupnu neto vrednost prilike nakon popusta; automatski se popunjava unosom podataka u odgovarajuću karticu *Detalji* u nastavku;

**Bruto iznos**: ovo polje prikazuje ukupnu vrednost prilike uključujući popuste; automatski se popunjava unosom podataka u odgovarajuću karticu *Detalji* u nastavku;

**Popusti**: ovo polje prikazuje ukupne popuste za priliku; automatski se popunjava unosom podataka u odgovarajuću karticu *Detalji* u nastavku;

**Očekivana bruto marža**: ovo polje, koje se popunjava ručno, koristi se za označavanje očekivane bruto marže prilike;

**Očekivani datum narudžbine kupca**: u ovom polju može se navesti očekivani datum izdavanja prve narudžbine povezane sa prilikom;

**Očekivani datum izdavanja prodajnih naloga**: u ovom polju može se navesti očekivani datum izdavanja prvog prodajnog naloga povezanog sa prilikom;

**Očekivani datum izdavanja prodajnih faktura**: u ovom polju može se navesti očekivani datum izdavanja prve prodajne fakture povezane sa prilikom.

U trećem i poslednjem delu Upravljanja prilikama nalaze se 4 kartice:

### Zapisnik radnog toka

Na ovoj kartici prikazuju se aktivnosti povezane sa radnim tokom koji je povezan sa ovom prilikom. Ova kartica se pojavljuje ako je za ovaj objekat predviđen povezani radni tok.

### Detalji

Na ovoj kartici prikazani su ekonomski detalji ponude. Za svaki red detalja moguće je navesti:

**Porodica proizvoda**: odnosi se na tabelu Porodica proizvoda;  
**Opis**: opis izabrane porodice proizvoda;  
**Bruto iznos**: omogućava unos iznosa prilike za prethodno izabranu porodicu proizvoda, umanjenog za popuste;  
**Popust**: omogućava unos iznosa primenjenog popusta za prethodno izabranu porodicu proizvoda;  
**Neto vrednost**: izračunava se kao razlika između polja **Bruto iznos** i **Popust**;  
**Očekivani prihod**: omogućava unos stvarno predviđene vrednosti reda prilike;  
**Očekivani datum izdavanja prodajne fakture**: odgovara datumu kada se očekuje izdavanje fakture za predmetnu priliku;  
**Očekivani datum izdavanja prodajnog biltena**: odgovara datumu kada se očekuje izdavanje biltena za predmetnu priliku;  
**Očekivani datum narudžbine**: odgovara datumu kada se očekuje izdavanje narudžbine za predmetnu priliku;  
**Datum zatvaranja**: datum kada je red zatvoren;  
**Napomena**: u ovom polju mogu se navesti eventualne napomene za predmetni red.

### Ponude

Na ovoj kartici prikazane su ponude povezane sa prilikom. Dvostruki klik na red ponude omogućava pristup režimu pregleda/izmene same ponude.

**Napomena**: u ovom polju mogu se navesti dodatne napomene.

### Povezani dokumenti

Na ovoj kartici moguće je pregledati datoteke koje su pridružene prilici ili dodati nove datoteke pomoću postupka prevlačenja i ispuštanja (*drag & drop*).