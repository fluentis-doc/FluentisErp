---
title: Nova Prilika
sidebar_position: 2
---

U ovom obrascu unose se sve opće informacije vezane uz **Priliku** koja se želi unijeti. Zaslon prilike sastoji se od tri dijela:

- gornji dio prikazuje eventualne povezane radne tokove; svatko može stvoriti vlastiti radni tok prema potrebama CRM-a tvrtke; za više informacija pogledajte odgovarajući vodič o radnim tokovima;     
- srednji dio prikazuje zaglavlje prilike s općim informacijama, neki su obvezni, a neki nisu;    
- ispod se nalaze različite kartice koje prikazuju različite izvršene operacije, a o kojima će se raspravljati kasnije u ovom vodiču.   


## Upravljanje prilikama

*Posebni gumbi* u vrpci alatne trake:   
> **Spremi**: gumb za spremanje prilike i pripadajućih promjena;      
> **Izračunaj vrijednosti**: gumb za ponovno izračunavanje vrijednosti prilike na temelju ponude s kojom je prilika povezana.  

### Zaglavlje    

**Tip prilike**: koristi se za definiranje [Vrste Prilike ](/docs/configurations/tables/crm/opportunities/opportunity-type) koja se unosi. Na tipu prilike također možete navesti zadani tok pipelina;

**Broj**: vrijednost koja se dodjeljuje automatski od strane Fluentisa koja omogućuje jedinstvenu identifikaciju prilike;

**Naslov**: obavezno polje koje omogućuje definiranje naslova prilike kako biste je lakše prepoznali;

**Datum stvaranja**: ovaj datum označava datum unosa prilike u Fluentis;

**Datum zatvaranja**: ovo polje omogućuje navođenje datuma zatvaranja prilike i može poslužiti kao filtar u prozoru pretrage prilika;

**Kontakt**: ovo polje koristi se za označavanje kontakta na koji je prilika upućena. Odnosi se na [kontaktne podatke](/docs/crm/home-crm/contacts/new-contact) u CRM-u.

**Glavni Agent**: ova se informacija automatski preuzima na temelju podataka navedenih u kontaktu CRM-a koji je vlasnik prilike;   

**Valuta**: indica la divisa in cui dovranno essere espressi i valori dell’opportunità;

**Vrijeme proteklo od posljednje aktivnosti**: označava vrijeme proteklo od unosa posljednje aktivnosti za određenu priliku;

**Vjerojatnost uspjeha**: koristi se za označavanje % [vjerojatnosti](/docs/configurations/tables/crm/opportunities/probability-progress) uspjeha povezanog s prilikom;

**Kvaliteta kontakta**: koristi se za označavanje [kvalitete](/docs/configurations/tables/crm/contacts/contact-quality) kontaktne osobe koja je vlasnik prilike;

**Osvojeno/Izgubljeno Razlozi**: koristi se za označavanje je li prilika osvojena ili izgubljena;

**Razlozi**: u ovom se polju mogu odabrati [razlozi](/docs/configurations/tables/crm/opportunities/closing-reason) osvojene ili izgubljene prilike;

**Opis**: koristi se za dodatno detaljno opisivanje razloga koji su doveli do pobjede ili gubitka prilike;

**Neto vrijednost**: ovo polje prikazuje ukupnu neto vrijednost prilike nakon popusta; ovo se polje automatski popunjava popunjavajući odgovarajuću karticu *Detalj* u nastavku;     

**Bruto iznos**: ovo polje prikazuje ukupnu vrijednost prilike, uključujući popuste; ovo se polje automatski popunjava popunjavajući odgovarajuću karticu *Detalj* u nastavku;     

**Popusti**: ovo polje prikazuje ukupne popuste za priliku; ovo se polje automatski popunjava popunjavajući odgovarajuću karticu *Detalj* u nastavku;     

**Očekivana bruto marža**: ovo polje, koje se ručno popunjava, koristi se za označavanje očekivane bruto marže prilike;

**Očekivani datum narudžbe od klijenta**: : u ovom polju možete navesti očekivani datum izdavanja prve narudžbe povezane s prilikom;

**Očekivani datum izdavanja prodajnih naloga**: u ovom polju možete navesti očekivani datum izdavanja prvog prodajnog naloga povezanog s prilikom;

**Očekivani datum izdavanja prodajnih faktura**: u ovom polju možete navesti očekivani datum izdavanja prve prodajne fakture povezane s prilikom.

U trećem i posljednjem dijelu Upravljanje prilikama nalaze se 4 kartice:

### Zapisnik radnog tijeka

U ovoj kartici prikazuju se aktivnosti povezane s radnim tokom koji je povezan s ovom prilikom. Ova kartica pojavljuje se ako je za ovaj objekt predviđen povezani radni tok.       

### Detalji

Ova kartica prikazuje ekonomske pojedinosti ponude. Za svaki red detalja moguće je navesti:    
**Obitelj proizvoda**: odnosi se na tablicu Obitelj proizvoda;   
**Opis**: opis odabrane obitelji proizvoda;  
**Bruto iznos**: omogućuje navođenje iznosa prilike za prethodno odabranu obitelj proizvoda, umanjeno za popuste;  
**Popust**: omogućuje navođenje iznosa primijenjenog popusta za prethodno odabranu obitelj proizvoda;  
**Neto vrijednost**: izračunava se kao razlika između polja **Bruto iznos** i **Popust**;    
**Očekivani prihod**: omogućuje navođenje stvarne predviđene vrijednosti reda prilike;    
**Očekivani datum izdavanja prodajne fakture**: odgovara datumu kada se očekuje da će se izdati faktura za predmetnu priliku;    
**Očekivani datum izdavanja prodajne biltene**: odgovara datumu kada se očekuje da će se izdati bilten za predmetnu priliku;    
**Očekivani datum narudžbe**: odgovara datumu kada se očekuje da će se izdati narudžba za predmetnu priliku;        
**Datum zatvaranja**: datum kada je red zatvoren;   
**Bilješka**: u ovom polju mogu se navesti eventualne bilješke za predmetni red.  

### Ponude

U ovoj kartici prikazuju se ponude povezane s prilikom. Dvostruki klik na red ponude omogućuje pristup načinu pregleda/uređivanja same ponude.   
**Bilješka**: u ovom polju mogu se navesti dodatne napomene.

### Povezani dokumenti

Na ovoj kartici moguće je pregledati datoteke koje su pridružene prilici ili dodati nove datoteke pomoću postupka povlačenja i ispuštanja.