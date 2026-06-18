---
title: Novi kontakt
sidebar_position: 2
---

Ekran CRM kontakta sastoji se od tri dela:
- prvi gornji deo prikazuje eventualne workflow procese povezane sa CRM kontaktom; workflow procesi obično prate korisničko putovanje koje pretvara potencijalnog kupca u klijenta, ali svaki korisnik može kreirati sopstveni workflow prema potrebama CRM poslovanja; za dodatne informacije pogledajte odgovarajući vodič o workflow procesima ([ovde](/docs/crm/home-crm/contacts/workflow-example) je primer).
- srednji deo sadrži zaglavlje kontakta sa opštim i anketnim informacijama, od kojih su neka polja obavezna, a neka opciona;
- ispod se nalazi nekoliko kartica koje prikazuju različite aktivnosti sprovedene nad klijentom, a koje će biti obrađene u nastavku ovog vodiča. Prikazane kartice zavise od onih koje su odabrane za svaki [tip kontakta](/docs/configurations/tables/crm/contacts/contact-type) u odgovarajućoj tabeli.

### Podaci zaglavlja

#### Obavezna polja

**Tip kontakta**: prethodno definisan u tabeli [Tip kontakta](/docs/configurations/tables/crm/contacts/contact-type); koristi se za razlikovanje različitih CRM kontakata (Kontakt, Potencijalni kupac, Lead itd.); **Tip kontakta** takođe sadrži kartice koje će biti prikazane na kartici kontakta.

**Naziv kontakta**: koristi se za navođenje naziva kompanije ili, uopšteno, imena kontakta.

#### Opciona polja

**PIB**: polje sastavljeno od ISO koda države (definisanog u tabeli **Države**) i odgovarajućeg poreskog identifikacionog broja. Polje podleže proveri ispravnosti kontrolnog broja za italijanske poreske brojeve; nakon unosa ovog polja, korišćenjem dugmeta na traci menija *Predloži podatke*, moguće je automatski popuniti podatke kartice.

**PDV**: PDV šifra koja se koristi u slučaju izdavanja dokumenata na ime kontakta.

**Valuta**: valuta koja se koristi u slučaju izdavanja dokumenata na ime kontakta.

**Šifra kancelarije**: IPA kod javne ustanove primaoca računa ili (ako je aktivirana opcija Elektronsko fakturisanje) SDI kod primaoca računa. Ovi podaci će biti preneti u karticu klijenta ukoliko se kontakt konvertuje.

**Overena elektronska pošta (PEC)**: prostor rezervisan za PEC adresu ukoliko je aktiviran režim PEC primaoca u polju Tip koda za izdavanje elektronskih računa. Ovaj podatak će biti prenet u karticu klijenta ukoliko se kontakt konvertuje.

**Podaci o adresi**: u ovom odeljku unose se različiti elementi koji čine adresu.

**Glavni agent**: služi kao informativni podatak, ali i za potrebe pristupa Fluentisu od strane agenata: oni će moći da pregledaju samo kontakte za koje imaju ovlašćenje.

**Geografska širina/dužina**: omogućava upravljanje lokacijom kontakata pomoću geografske širine i dužine umesto adrese; ovi podaci koriste se za pozicioniranje na mapi dostupnoj u [Pretrazi CRM kontakata](/docs/crm/home-crm/contacts/search-contacts), u slučaju da adresa nije uneta.

***Pipeline* kontakta**: ako je kontaktu dodeljen workflow i njegovo stanje odgovara jednom od stanja definisanih u „Pipeline kontakta“ za određeni tip kontakta, tada će polje „Pipeline kontakta“ na kartici kontakta biti automatski ažurirano.  
Dakle, pri svakoj promeni stanja workflow-a, ukoliko postoji podudaranje, polje „Pipeline kontakta“ biće automatski osveženo. Na taj način workflow i polje Pipeline na kartici kontakta uvek će biti usklađeni.

**Poreklo kontakta**: moguće je navesti na koji način je kontakt ostvaren i njegov [Izvor](/docs/configurations/tables/crm/contacts/contact-origin).

**Kvalitet kontakta**: dodeljuje zvezdice različitim kontaktima; [kvalitet](/docs/configurations/tables/crm/contacts/contact-quality) izražava se rastućim redosledom, od jedne do pet zvezdica. Ova funkcionalnost koristi se za različite analize i za definisanje kvaliteta kontakta na osnovu klasifikacije koju odredi korisnik.

**Telefon/Email**: sadrži glavni broj telefona i email adresu kontakta, navedene u istoimenim poljima: Telefon, Mobilni telefon, Faks, Email, Sekundarni email, Web sajt.

**Jezik**: jezik koji koristi kontakt.

**Vrsta pravnog lica**: pravni oblik kompanije, bira se sa ove liste.

**Statistički podaci**: tri polja koja čine ovu sekciju automatski će se popunjavati na osnovu vrednosti unetih u sledeća polja: **Godina statistike**, **Statistika prometa** i **Statistički broj zaposlenih**; promena bilo kog od ovih polja uticaće na odgovarajuće prikazano polje i obrnuto. Ova kombinovana lista obično sadrži podatke o prometu i broju zaposlenih za poslednju dostupnu godinu – informacije koje su veoma važne prilikom izrade komercijalne ponude.

**Email oblasti**: potrebno je označiti da li je za ovu šifru moguće slati Ponude i/ili *Newslettere*. Ova oznaka je važna jer, ukoliko nije aktivirana, slanje tih vrsta dokumenata neće biti moguće.

**Više informacija**: sadrži ostale informacije i PIB, unete u istoimena sledeća polja.

**Osoba**: služi za definisanje da li je kontakt fizičko ili pravno lice.

**Pravni status**: polje za slobodan unos u koje se može upisati pravni status kontakta.

**Osnovni kapital**: polje za slobodan unos u koje se može upisati osnovni kapital kompanije povezane sa kontaktom.

**Paritet**: polje u koje se unosi paritet isporuke (npr. „Franko fabrika“), koji će biti predložen na dokumentima povezanim sa kontaktom.

**Napomena o paritetu**: polje za eventualne napomene vezane za paritet isporuke, koje će takođe biti predložene na povezanim dokumentima.

**Šifarnik**: u ovo polje Fluentis automatski upisuje nadimak i puni naziv klijenta povezanog sa kontaktom, u trenutku kada se kontakt konvertuje u klijenta. Takođe, povezivanje je moguće uneti i ručno.

**Administrativna kategorija**: služi za označavanje administrativne kategorije kontakta, što može biti korisno u statističke svrhe.

**Komercijalna kategorija**: kao i administrativna, može se koristiti za potrebe statistike.

**Sektor upotrebe**: ovo je polje unutar CRM-a koje služi za označavanje [sektora](/docs/configurations/tables/crm/contacts/sector-use) u kojem kontakt posluje.

**Nadređeni kontakt**: moguće je označiti kontakt povezan sa onim koji je prikazan, na primer, u slučaju kada kontakt pripada holding kompaniji čija matična kompanija već spada među naše kontakte. Ili u trenutku kada kontakt promeni naziv kompanije, moguće je pratiti tu promenu povezivanjem sa novim kontaktom.

**Brend**: služi za označavanje eventualnog *brenda* koji kompanija prodaje.

**Popust**: vrsta popusta koja se primenjuje na dokumente izdate na ime kontakta.

**Procenat**: procenat popusta koji se primenjuje u odnosu na odabranu vrstu popusta.

**Datum zatvaranja**: moguće je navesti datum zatvaranja kontakta, nakon kojeg kontakt više neće biti prikazan među aktivnim kontaktima.

**Razlog zatvaranja**: moguće je navesti razlog zbog kojeg je kontakt zatvoren.

**Završni opis razloga**: moguće je detaljnije opisati razlog zatvaranja, dopunjujući ono što je uneseno u polje **Razlog zatvaranja**.

Na kraju obrasca nalaze se **specifične kartice**.

U traci menija nalaze se sledeća dugmad:

**Predloži podatke**: korišćenjem ove funkcionalnosti, unosom PIB-a automatski će se popuniti matični podaci.

**Konverzija u klijenta**: ovim dugmetom moguće je konvertovati CRM kontakt u [Klijenta](/docs/erp-home/registers/contacts/create-new-contact/general); podaci uneti u kontakt biće kopirani u novu karticu klijenta; dugme je aktivno za [Tipove kontakta](/docs/configurations/tables/crm/contacts/contact-type) koji nemaju označenu opciju *Klijent*.

Unutar kontakta takođe postoje polja koja se koriste u statističke svrhe, koja nisu direktno prikazana korisniku i automatski se postavljaju:

- datum kreiranja kontakta
- datum početka lead-a i datum završetka lead-a
- datum početka klijenta i datum završetka klijenta

U trenutku kada se kontakt kreira, dodeljuje se datum kreiranja kontakta. Kada se tip kontakta promeni u tip sa aktiviranom opcijom „lead“, dodeliće se datum prelaska u tip lead. U trenutku prelaska na drugi tip kontakta koji ima onemogućen indikator „lead“, dodeliće se datum završetka lead-a.

Ista logika koristiće se i u slučaju prelaska tipa kontakta u tip kontakta sa aktiviranom opcijom „klijent“.

### 1. Workflow Log

Ovo je prva kartica u obrascu **CRM Kontakti**. Ova kartica se prikazuje samo ako je za CRM kontakte aktiviran workflow koji uključuje prikaz kartice dnevnika. Za tehničke detalje pogledajte dokumentaciju o workflow procesu.

Korišćenje workflow procesa za upravljanje odnosima sa potencijalnim klijentima omogućava upravljanje tim odnosima kroz faze. Različite faze workflow procesa mogu uključivati različite aktivnosti za pridobijanje klijenta, koje će zavisiti od vrste odnosa postignutog u određenoj fazi: na primer, u fazi kvalifikacije biće važno obaviti informativni poziv, dok u fazi prilike to nije potrebno jer nas klijent već poznaje i razmatra kupovinu.

Prisutne su dve kartice: **Aktivnosti** i **Dnevnik**.

#### Aktivnosti

Dostupna polja u detaljima aktivnosti podeljena su u 2 okvira, **Aktivnosti** i **Aktivnosti na čekanju**. Prvi služi za detalje o već obavljenim aktivnostima, dok se u drugom mogu unapred definisati podaci o aktivnosti koja će biti izvršena nakon već unete aktivnosti.

U prvom okviru nalaze se sledeća polja:

**Tip aktivnosti**: moguće je definisati vrstu aktivnosti koja je sprovedena za kontakt; tipovi se definišu u tabeli Tipovi aktivnosti u CRM-u; u zavisnosti od podešavanja unetih u workflow, aktivnosti se mogu menjati u skladu sa fazom workflow procesa u kojoj se nalazimo;

**Datum**: ovo polje procedura automatski popunjava kada se unese **Tip aktivnosti**;

**Operater**: sadrži Fluentis korisnika koji je uneo podatke;

**Opis aktivnosti**: u ovom polju moguće je navesti detalje aktivnosti.

U drugom okviru nalaze se sledeća polja:

**Datum aktivnosti na čekanju**: ovo polje procedura automatski popunjava kada se unese **Tip aktivnosti**;

**Tip aktivnosti**: moguće je definisati vrstu aktivnosti na čekanju za kontakt;

**Opis aktivnosti**: u ovom polju moguće je detaljnije definisati aktivnost koja će biti izvršena;

**Datum zatvaranja**: moguće je postaviti datum isteka aktivnosti;

**Operater**: potrebno je definisati Fluentis korisnika koji će izvršiti aktivnost;

**Datum početka/završetka podsetnika**: u ovom polju može se navesti vremenski period u kojem će biti prikazan podsetnik za narednu aktivnost;

**Kreiraj zadatak**: postavljanjem oznake na ovu stavku kreiraće se nova stavka u odeljku **Aktivnosti** u Fluentisu za korisnika navedenog u polju **Operater**. Ova automatizacija će se aktivirati prilikom snimanja kontakta.

#### Dnevnik

Na ovoj kartici prikazane su promene statusa workflow procesa, sa naznačenim:

- početnim statusom,
- završnim statusom,
- operaterom koji je izvršio operaciju,
- datumom izvršenja.

### 2. Kontakt osobe

Ovo je druga kartica unutar **CRM Kontakti**.

Da biste dodali novu kontakt osobu, potrebno je kliknuti na dugme u traci sa akcijama *Nova kontakt osoba*, koje se prikazuje kada se nalazite unutar ove kartice.

U prozoru za unos nove kontakt osobe dostupna su sledeća polja:

**Prezime**: prezime kontakt osobe;

**Ime**: ime kontakt osobe;

**Operater**: prikazuje eventualnog operatera povezanog u referentnom šifarniku;

**Uloga**: polje za navođenje uloge kontakt osobe unutar kompanije kontakta;

**Telefon**: glavni fiksni telefon kontakt osobe;

**Faks**: broj faksa kontakt osobe;

**Email**: poslovna email adresa kontakt osobe;

### 3. Adrese kontakta

Ovo je treća kartica unutar **CRM Kontakti**.

Na ovoj kartici moguće je dodavati i pregledati eventualne sekundarne adrese u odnosu na glavnu adresu navedenu na kontaktu. Svaka adresa sastoji se od sledećih polja:

**Opis**: polje za slobodan unos;

**Telefon**: broj telefona povezan sa navedenom adresom;

**Faks**: broj faksa povezan sa navedenom adresom;

**Email**: email adresa povezana sa navedenom adresom;

**Web stranica**: web stranica povezana sa navedenom adresom;

**Tip adrese**: tip adrese na koju se odnosi, prema [tabeli](/docs/configurations/tables/general-settings/address-types);

**Adresa**: stvarna adresa;

**Poštanski broj**: poštanski broj povezan sa navedenom adresom;

**Grad**: grad povezan sa navedenom adresom;

**Okrug**: okrug povezan sa navedenom adresom;

**Država**: država na koju se odnosi navedena adresa;

**Region**: region na koji se odnosi navedena adresa.

### 4. Beleške o kontaktu

Ovo je četvrta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je pregledati beleške koje se odnose na kontakt. Unutar kartice postoje filteri pomoću kojih možete pretraživati beleške. Za unos nove beleške dovoljno je pritisnuti dugme ![](/img/neutral/common/new.png) na traci sa opcijama.

U prozoru za unos nalaze se sledeća polja:

**Naslov**: naslov beleške koji će olakšati pretragu beleške;

**Datum**: datum unosa beleške;

**Napomena**: u ovom polju mogu se unositi detaljne beleške;

**Tip beleške kontakta**: može se navesti [tip beleške](/docs/configurations/tables/crm/contacts/contact-note-type) koji se unosi.

### 5. Upravljanje dokumentima

U ovoj kartici moguće je pregledati priložene dokumente. Za prilaganje dokumenata moguće je postupiti na dva načina:

- korišćenjem dugmeta Dokumenti na traci menija moguće je odabrati da li želite da priložite već registrovani dokument u Fluentisu ili da kreirate novi dokument za prilaganje;
- korišćenjem desnog klika direktno u mreži i izborom opcije Priloži datoteku, prelazi se na kreiranje novog dokumenta koji će biti priložen.

### 6. Komercijalna kategorija

Ovo je šesta kartica u **CRM Kontakti**.

Na ovoj kartici možete unositi i pregledati komercijalne kategorije kojima kompanija pripada. Dovoljno je odabrati [Komercijalnu kategoriju](/docs/configurations/tables/crm/contacts/commercial-category) iz odgovarajuće tabele.

### 7. Zona kontakta

Ovo je sedma kartica u **CRM Kontakti**.

Na ovoj kartici možete unositi i pregledati zonu kojoj kompanija pripada. Dovoljno je odabrati odgovarajuću zonu.

### 8. Trgovački predstavnici

Ovo je osma kartica u **CRM Kontakti**.

Na ovoj kartici mogu se definisati **Agenti** povezani sa ovim kontaktom.

Polja koja možete popuniti su sledeća:

**Konto - Podkonto - Opis računa**: pomoću ovih polja možete odabrati agenta, pozivajući se na odgovarajuće podatke;

**Zona**: možete odrediti područje nadležnosti agenta, kako je definisano u tabeli;

**Procenat**: procenat provizije koji pripada agentu u vezi sa kontaktom;

**Koristi procenat**: označavanjem ove stavke upućujete proceduru da prilikom unosa prodajnih ponuda uzme u obzir vrednost navedenu u polju **Procenat** radi obračuna pripadajućih provizija.

### 9. Izveštaji o poseti

Ovo je deveta kartica u **CRM Kontakti**.

Na ovoj kartici prikazan je spisak unetih **Izveštaja o poseti** za kontakt.

U gornjem delu kartice nalaze se polja za **filtriranje** koja omogućavaju precizniju pretragu željenih izveštaja o poseti.

Dvostrukim klikom na red izveštaja o poseti, isti će se otvoriti za pregled/izmenu. Za unos novog izveštaja o poseti za određeni kontakt dovoljno je pritisnuti dugme ![](/img/neutral/common/new-visit-report.png), koje se nalazi na traci sa alatkama.

### 10. Ponude za kontakt

Ovo je deseta kartica u **CRM Kontakti**.

Na ovoj kartici prikazan je spisak unetih ponuda za kontakt. U gornjem delu kartice nalaze se polja za filtriranje koja omogućavaju precizniju pretragu željenih ponuda. Dvostrukim klikom na red ponude, ista će se otvoriti za pregled/izmenu. Takođe je moguće kreirati nove ponude.

### 11. Ostali podaci o kontaktu

Ovo je jedanaesta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je pregledati i unositi [Ostale podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) o kontaktu, koji će zatim biti prikazani na povezanim dokumentima.

### 12. Konkurenti kontakta

Ovo je dvanaesta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je navesti eventualne **Konkurente** koje naša kompanija ima u pregovorima sa ovim kontaktom.

Kontakt se može odabrati putem odgovarajuće padajuće liste, izborom vrednosti iz pripadajuće [tabele](/docs/configurations/tables/crm/contacts/competitors).

U polju **Napomena** možete navesti dodatne korisne informacije o konkurentu.

### 13. Prodajni cenovnici kontakta

Ovo je jedna od kartica **CRM Kontakti**.

Na ovoj kartici prikazani su važeći prodajni cenovnici za kontakt, koji će se primenjivati u dokumentima izdatim na ime kontakta. Prilikom konverzije kontakta u klijenta, ovi podaci će biti preneti u karticu klijenta.

### 14. Prodajni nalozi kontakta

Ovo je jedna od kartica **CRM Kontakti**.

Na ovoj kartici prikazan je spisak naloga koji su uneti za kontakt. U gornjem delu kartice nalaze se polja za filtriranje koja omogućavaju precizniju pretragu naloga.

Dvostrukim klikom na red naloga, isti se otvara za pregled/izmenu. Takođe je moguće kreirati nove naloge.

### 15. Newsletter kontakta

Ovo je jedna od kartica **CRM Kontakti**.

Na ovoj kartici prikazan je spisak *newslettera* povezanih sa kontaktom. U gornjem delu kartice nalaze se polja za filtriranje koja omogućavaju preciznu pretragu željenog *newslettera*. Dvostrukim klikom na red *newslettera*, isti se otvara za pregled/izmenu.

### 16. Plaćanja kontakta

Ovo je jedna od kartica **CRM Kontakti**.

Na ovoj kartici konfigurišu se uslovi plaćanja koje treba predlagati u dokumentima povezanim sa kontaktom.

#### Tipovi plaćanja

Ključni deo kartice **Plaćanja** služi za definisanje logike obračuna dospeća. Biraju se **Tip plaćanja** i **Način plaćanja** (oba su definisana u *Konfiguracija > Tabele > Opšta podešavanja*).

**Procenat**: omogućava definisanje udela (u procentima) ukupne vrednosti plaćanja (ili naplate) koji će biti obrađen prema uslovu plaćanja (kombinacija tipa plaćanja i načina plaćanja) postavljenom u tom redu.

Ako je procenat manji od 100, potrebno je kreirati više redova čiji zbir procenata iznosi 100.

*Primer*:<br />
- 50 % gotovina odmah + 50 % bankovni transfer za 30 dana.<br />
- 50 % gotovina odmah; 25 % bankovni transfer za 30 dana; 25 % bankovni transfer za 60 dana.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png) ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Pažnja</u>: ako način plaćanja predviđa više od jednog dospeća, unosi se na sledeći način: na primer 50 % gotovina odmah, 50 % bankovni transfer na 30 – 60 dana.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banka (podrška)**: predstavlja referentnu banku za stavke.

- Za karticu kupca:
> - ako je tip plaćanja bankovna menica, potrebno je navesti banku kupca;
> - ako je tip plaćanja bankovni transfer, navodi se banka kompanije koja se koristi (kako bi se na dokumentima prikazali ispravni podaci za plaćanje).

Ovo polje se popunjava putem kombinovanog izbora (**Banka**) koji je povezan sa tabelom *Banka prezentacije*. U okviru te tabele moguće je uneti banke kompanije i banke kupca ili dobavljača. Takođe je moguće uneti redove sa kompletnim IBAN i/ili SWIFT kodovima (preporučeno za banke kompanije) ili samo ABI i CAB kodovima (preporučeno za banke kupca), koji se kasnije mogu dopuniti u kartici.

Ako je red u tabeli banke kompletan (IBAN i/ili SWIFT + ABI i CAB), izborom tog reda iz kombinovane liste podaci će biti preneti u karticu. Ako nije, biće preneti samo ABI i CAB, ali korisnik može naknadno dopuniti podatke. Ovo je praktično za banke kupca kako ne bi bilo potrebno unositi veliki broj redova u karticu banke. Bolje je navesti samo podatke poslovnice (ABI i CAB) za više kupaca.

Dodavanje banke može se izvršiti i dvostrukim klikom u polja ABI/CAB kako bi se otvorila pomoć za pretragu među nacionalnim bankarskim filijalama, odabrala odgovarajuća i kreirao zapis u kartici uz dopunu podataka: račun, CIN, IBAN, SWIFT.

**Opis banke**: polje povezano sa prethodnim poljem.

**Kod banke**: ovo polje se NE koristi u Italiji. Za strane lokalizacije može sadržati alternativni kod banke izvan sistema ABI/CAB.

#### Banke podrške

U tabelu je moguće uneti banke za plaćanja poslovnom partneru.

To omogućava unos alternativnih banaka kupca. Na primer: kupac plaća bankovnim transferom (i u tabeli Tip plaćanja navodi se banka kompanije), ali želite da unesete i banku kupca za situacije povraćaja sredstava ili vansudskih plaćanja.

Banka se može dodati dvostrukim klikom u polja ABI/CAB radi pretrage nacionalnih banaka, izborom odgovarajuće banke i unosom podataka računa, IBAN-a i SWIFT-a.

### 17. Prilike kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se lista prilika unetih za kontakt.

U gornjem delu kartice nalaze se polja za filtriranje koja omogućavaju precizniju pretragu postojećih prilika.

Dvostrukim klikom na red sa određenom prilikom, ista će se otvoriti za pregled ili izmenu.

### 18. Radno vreme kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuju se dani i sati kada je kontakt dostupan, odnosno njegovo radno vreme.

### 19. Telefonski pozivi kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se lista telefonskih poziva obavljenih prema kontaktu.

### 20. Marketinške kampanje kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se lista marketinških kampanja u kojima se kontakt nalazi.