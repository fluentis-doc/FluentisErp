---
title: Novi kontakt
sidebar_position: 2
---

Zaslon za CRM Kontakt sastoji se od tri dijela:        
- prvi gornji dio prikazuje eventualne radne tokove povezane s CRM kontaktom; radni tokovi obično slijede korisničko putovanje koje pretvara potencijalnog kupca u klijenta, ali svaki korisnik može stvoriti vlastiti radni tok prema potrebama CRM poslovanja; za dodatne informacije pogledajte odgovarajući vodič o Workflowima([ovdje](/docs/crm/home-crm/contacts/workflow-example) je primjer).               
- središnji dio sadrži zaglavlje kontakta s općim i anketnim informacijama, neke obavezne, a neke neobavezne;   
- ispod se nalazi nekoliko kartica koje prikazuju različite radnje provedene na klijentu, a koje će biti obrađene u nastavku ovog vodiča. Prikazane kartice ovisit će o onima odabranima za svaki [Tipo contatto](/docs/configurations/tables/crm/contacts/contact-type) u odgovarajućoj tablici.  

### Podaci zaglavlja

#### Obavezna polja

**Vrsta kontakta**: prethodno definiran u tablici [Vrsta kontakta](/docs/configurations/tables/crm/contacts/contact-type); koristi se za razlikovanje različitih CRM kontakata (Kontakt, Potencijalni kupac, Lead itd.); **Vrsta kontakta** također sadrži kartice koje će se prikazivati u kartici kontakta.          

**Ime kontakta**: koristi se za navođenje naziva tvrtke ili, općenito, imena kontakta;     

#### Neobavezna polja 

**PDV broj**: polje sastavljeno od ISO koda zemlje (definirano u tablici **Države**)  i odgovarajućeg PDV ID-a. Polje je podložno testiranju ispravnosti kontrolnog broja za talijanske porezne brojeve; nakon unosa ovog polja, koristeći tipku na traci izbornika *Predloži podatke*, moguće je automatski popuniti podatke kartona.   

**PDV**: kod PDV koji se koristi u slučaju izdavanja dokumenata na ime kontakta.

**Valuta**: valuta koja se koristi u slučaju izdavanja dokumenata na ime kontakta.

**Šifra ureda**: IPA kod javnog ureda primatelja računa ili (ako je aktivirana opcija Elektroničko fakturiranje) SDI kod primatelja računa. Ovi podaci bit će uneseni u karticu klijenta ako se kontakt konvertira.

**Ovjerena pošta**: Prostor rezerviran za PEC adresu u slučaju da je aktiviran način rada PEC primatelja u polju Tip koda za izdavanje elektroničkih računa. Ovaj podatak bit će unesen u karticu klijenta ako se kontakt konvertira.

**Pojedinosti o adresi**: u ovom odjeljku unose se različiti dijelovi koji čine adresu.   

**Glavni agent**: služi kao informativni naslov, ali i za potrebe pristupa Fluentisu od strane agenata: oni će moći pregledavati samo kontakte za koje imaju dopuštenje.

**Zemljopisna širina/duljina**: omogućuje se upravljanje lokacijom kontakata pomoću zemljopisne širine i duljine umjesto adrese; ti se podaci koriste za lociranje unutar karte dostupne u [Pretraživanju CRM kontakata](/docs/crm/home-crm/contacts/search-contacts), u slučaju da adresa nije unesena.   

**Pipeline kontakt**: Ako je kontaktu dodijeljen workflow i njegovo stanje odgovara jednom od stanja definiranih u "Pipeline kontakta" za određeni tip kontakta, tada će se polje "Pipeline kontakta" u kartici kontakta automatski ažurirati.
Dakle, pri svakoj promjeni stanja workflowa, ako postoji podudaranje, polje "Pipeline kontakta" bit će automatski osvježeno. Na taj način workflow i polje Pipeline u kontaktnoj kartici uvijek će biti usklađeni. 

**Podrijetlo kontakta**: è possibile indicare come è stato reperito il contatto e quindi la sua [Origine](/docs/configurations/tables/crm/contacts/contact-origin).    

**Kvaliteta kontakta**: dodjeljuje zvjezdice različitim kontaktima: [kvaliteta](/docs/configurations/tables/crm/contacts/contact-quality) e izražava rastućim redoslijedom, od jedne do pet zvjezdica.
Ova se značajka koristi za razne analize i za definiranje kvalitete kontakta na temelju klasifikacije koju je odredio korisnik.      

**Telefon/Email**: sadrži glavni telefonski broj i email adresu kontakta, navedene u istoimenim sljedećim poljima: Telefon, Mobilni telefon, Faks, Email, Sekundarni email, Web stranica.

**Jezik**: jezik koji koristi kontakt. 

**Vrsta prava poduzeća**: pravni oblik društva, odabire se s ovog popisa.

**Statistički podaci**: tri polja koja čine ovu sekciju automatski će se popuniti na temelju vrijednosti unesenih u sljedeća polja: **Godina statistike**, **Statistika prometa** i **Statistički broj zaposlenih**; promjena bilo kojeg od tih polja utjecat će na pripadajuće prikazano polje i obrnuto. Ova kombinirana lista obično sadrži podatke o prometu i broju zaposlenih za posljednju dostupnu godinu – informacije koje su vrlo važne prilikom izrade komercijalne ponude.

**Email područja**: potrebno je označiti je li za ovu šifru moguće slati Ponude i/ili Newslettere. Ova je oznaka važna jer, ako nije aktivirana, slanje tih vrsta dokumenata neće biti moguće.

**Više informacija**: sadrži ostale informacije i OIB, unesene u istoimena sljedeća polja.

**Osoba**: služi za definiranje je li kontakt fizička ili pravna osoba.   

**Pravni status**: polje za slobodan unos u koje se može upisati pravni status kontakta. 

**Temeljni kapital**: polje za slobodan unos u koje se može upisati temeljni kapital tvrtke povezane s kontaktom.  

**Paritet**: polje u koje se upisuje paritet isporuke (npr. „Franko tvornica“), koji će se predložiti na dokumentima vezanim uz kontakt.

**Napomena paritet**: polje za eventualne napomene vezane uz paritet isporuke, koje će se također predložiti na povezanim dokumentima.

**Šifarnik**: u ovo polje Fluentis automatski upisuje nadimak i puni naziv klijenta povezanog s kontaktom, u trenutku kada se kontakt konvertira u klijenta. Također, povezivanje je moguće unijeti i ručno.     

**Administrativna kategorija**: služi za označavanje administrativne kategorije kontakta, što može biti korisno u statističke svrhe.      

**Komercijalna kategorija**: kao i administrativna, može se koristiti za potrebe statistike.  

**Sektor uporabe**: ovo je polje unutar CRM-a koje služi za označavanje [sektora](/docs/configurations/tables/crm/contacts/sector-use) u kojem kontakt posluje.     

**Nadređeni kontakt**: moguće je označiti kontakt povezan s onim koji je u prikazu, na primjer, u slučaju kada kontakt pripada holding kompaniji čija matična tvrtka već spada među naše kontakte. Ili u trenutku kada kontakt promijeni naziv tvrtke, moguće je pratiti to povezivanjem s novim kontaktom. 

**Marca**: služi za označavanje eventualnog brenda koji tvrtka prodaje.        

**Popust**: vrsta popusta koja se primjenjuje na dokumente izdane na ime kontakta.  

**Postotak**: postotak popusta koji se primjenjuje u odnosu na odabranu vrstu popusta.

**Datum zatvaranja**: moguće je specificirati datum zatvaranja kontakta, nakon kojeg kontakt više neće biti prikazan među aktivnim kontaktima.           

**Motivo di chiusura**: moguće je navesti razlog zbog kojeg je kontakt zatvoren.

**Završni opis razloga**: moguće je detaljnije opisati razlog zatvaranja, nadopunjujući ono što je uneseno u polje **Razlog zatvaranja**.

Na kraju obrasca nalaze se **specifične kartice**.     

U traci izbornika nalaze se sljedeće tipke:         
**Predloži podatke**: utilizzando questa funzionalità a partire dalla partita iva, verranno precompilati i dati anagrafici.      
**Pretvorbe na kupca**: ovom tipkom moguće je pretvoriti CRM kontakt u [Klijenta](/docs/erp-home/registers/contacts/create-new-contact/general); podaci uneseni u kontakt bit će kopirani u novi karton klijenta; gumb je aktivan za [Tipove kontakta](/docs/configurations/tables/crm/contacts/contact-type) koji nemaju označen *Klijent*.

Unutar kontakta također se nalaze polja koja se koriste u statističke svrhe, koja nisu izravno prikazana korisniku i automatski se postavljaju:

- datum kreiranja kontakta
- datum početka lead-a i datum završetka lead-a
- datum početka klijenta i datum završetka klijenta  

U trenutku kada se kontakt kreira, dodjeljuje se datum kreiranja kontakta. Kada se tip kontakta promijeni u tip s aktiviranim flagom "lead", dodijelit će se datum prijelaza u tip lead. U trenutku prijelaza na drugi tip kontakta koji ima onemogućen flag "lead", dodijelit će se datum završetka lead-a.  
Ista logika će se koristiti u slučaju prijelaza tipa kontakta u tip kontakta s aktiviranim flagom "kupac".

### 1. Workflow Log

Ovo je prva kartica u obrascu  **CRM Kontakti**. Ova kartica se pojavljuje samo ako je za CRM kontakte aktiviran workflow koji uključuje prikaz kartice loga. Za tehničke pojedinosti, molimo konzultirajte dokumentaciju o radnom toku.  
Upotreba radnog toka za upravljanje odnosom s potencijalnim klijentima omogućuje upravljanje odnosom s potencijalnim klijentima u fazama. Različite faze radnog toka mogu uključivati različite aktivnosti za privlačenje klijenta, koje će ovisiti o vrsti odnosa postignutog u određenoj fazi: na primjer, u fazi kvalifikacije bit će važno obaviti informativni poziv, dok u fazi prilike nije jer klijent već poznaje nas i razmatra kupnju.     

Prisutne su dvije kartice: Aktivnosti i Zapisnik.

#### Aktivnosti 

Raspoloživa polja u pojedinostima o aktivnostima podijeljena su u 2 okvira, **Aktivnosti** i **Aktivnosti na čekanju**. Prvi služi za pojedinosti o već obavljenim aktivnostima, dok se u drugom već mogu definirati neki podaci o aktivnosti koja će biti obavljena nakon već unesene aktivnosti.  

U prvom okviru prisutna su sljedeća polja:

**Vrsta aktivnosti**: moguće je specificirati vrstu aktivnosti provedene za kontakt; vrste se definiraju u tablici Tipovi aktivnosti u Arm-u; ovisno o postavkama unesenim u radnom toku, aktivnosti se mogu mijenjati ovisno o fazi radnog toka u kojoj se nalazimo;           

**Datum**: ovo polje automatski popunjava procedura kada se unese **Vrsta aktivnosti**; 

**Operater**: sadrži Fluentis korisnika koji je upisao podatke;    

**Opis aktivnosti**: moguće je specificirati detalje aktivnosti u ovom polju.     

 drugom okviru prisutna su sljedeća polja:

**Datum aktivnosti na čekanju**: ovo polje automatski popunjava procedura kada se unese **Vrsta aktivnosti**;

**Vrsta aktivnosti**: moguće je specificirati vrstu aktivnosti na čekanju za kontakt;

**Opis aktivnosti**: u ovom polju moguće je detaljnije definirati aktivnost koja će biti obavljena;  

**Datum zatvaranja**: moguće je postaviti datum isteka aktivnosti;

**Operater**: mora se definirati Fluentis korisnik koji će obaviti aktivnost;

**Datum početka/završetka podsjetnika**: u ovom polju može se naznačiti raspon datuma u kojem će se prikazati podsjetnik za sljedeću aktivnost;      

**Izradite zadatak**: postavljanjem oznake na ovu stavku stvorit će se nova stavka u odjeljku  **Aktivnosti** u Fluentisu za korisnika naznačenog u polju **Operater**. Ovaj automatizam će se aktivirati prilikom spremanja kontakta. 

#### Zapis 


Na ovoj kartici prikazane su promjene stanja radnog toka, s naznačenim: početnim i završnim stanjem, operaterom koji je obavio operaciju i datumom.    

### 2. Referenca Kontakta

Ovo je druga kartica unutar **CRM Kontakti**.

Da biste dodali novi kontakt, potrebno je pritisnuti gumb na traci za radnje *Novi kontakt*, koji se pojavljuje kada se nalazite unutar ove kartice.

U prozoru za unos novog kontakta dostupna su sljedeća polja:

**Prezime**: prezime kontakta; 

**Ime**: ime kontakta; 

**Operater**: prikazuje se eventualni operater povezan u referentnom šifarniku.    

**Uloga**: polje za naznačavanje uloge kontakta unutar tvrtke kontakta; 

**Telefon**: glavni fiksni telefon kontakta; .

**Faks**: broj faksa kontakta; 

**Email**: poslovna email adresa kontakta;

### 3. Adrese Kontakta

Ovo je treća kartica unutar **CRM Kontakti**.

Na ovoj kartici moguće je dodavati i pregledavati eventualne sekundarne adrese u odnosu na glavnu adresu navedenu na kontaktu. Svaka adresa sastoji se od sljedećih polja:

**Opis**: polje za slobodan unos;

**Telefon**: broj telefona povezan s navedenom adresom;

**Fax**: broj faksa povezan s navedenom adresom;

**Email**: email adresa povezana s navedenom adresom;

**Web stranica**: web stranica povezana s navedenom adresom;

**Vrsta adrese**: vrsta adrese kojoj se odnosi, prema [tablici](/docs/configurations/tables/general-settings/address-types) ;

**Adresa**: stvarna adresa;

**Poštanski broj**: poštanski broj povezan s navedenom adresom;

**Grad**: grad povezan s navedenom adresom;

**Županija**: županija povezana s navedenom adresom;

**Država**: država koja se odnosi na navedenu adresu;

**Regija**: regija koja se odnosi na navedenu adresu.


### 4. Bilješke o Kontaktu

Ovo je četvrta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je pregledavati bilješke koje se odnose na kontakt. Unutar kartice postoje filtri pomoću kojih možete pretraživati bilješke. Za unos nove bilješke dovoljno je pritisnuti tipku ![](/img/neutral/common/new.png) na traci s opcijama.

U prozoru za unos nalaze se sljedeća polja:

**Naslov**: naslov bilješke koji će olakšati pretraživanje bilješke;

**Datum**: datum unosa bilješke;

**Napomena**: u ovom polju varchar (variable character) možete napisati detalje bilješke;

**Tip note kontakta**: možete naznačiti [vrstu bilješke](/docs/configurations/tables/crm/contacts/contact-note-type) koju unosite.

### 5. Upravljanje dokumentima

U ovoj kartici moguće je konzultirati priložene dokumente. Za priložiti dokumente moguće je postupiti na dva načina:

- korištenjem tipke Dokumenti na traci izbornika moguće je odabrati želite li priložiti već registrirani dokument u Fluentisu ili stvoriti novi dokument za priložiti.  
- korištenjem desnog klika izravno u rešetki i odabirom opcije Priloži datoteku, prelazi se na izradu novog dokumenta koji će se priložiti.  

### 6. Komercijalna kategorija

Ovo je šesta kartica u **CRM Kontakti**.

Na ovoj kartici možete unijeti i pregledati poslovne kategorije kojima tvrtka pripada. Dovoljno je odabrati [Komercijalnu Kategoriju](/docs/configurations/tables/crm/contacts/commercial-category) iz tablice.
  

### 7. Zona Kontakta 

Ovo je sedma kartica u **CRM Kontakti**.

Na ovoj kartici možete unijeti i pregledati područje koje pripada tvrtki. Dovoljno je odabrati odgovarajuće područje.  

### 8. Trgovački predstavnici 

Ovo je osma kartica u **CRM Kontakti**.

Na ovoj kartici možete definirati **Agente** povezan s ovim kontaktom.

Polja koja možete popuniti su sljedeća:

**Konto - Podkonto - Opis računa**: pomoću ovih polja možete odabrati agenta, pozivajući se na odgovarajuće podatke;

**Zona**: možete odrediti područje nadležnosti agenta, kako je definirano u tablici;

**Postotak**: postotak provizije koji pripada agentu u vezi s kontaktom;

**Koristite postotak**: označavanjem ove stavke upućujete postupku da prilikom unosa ponuda za prodaju uzme u obzir vrijednost navedenu u polju **Postotak** kako bi izračunao pripadajuće provizije.    

### 9. Izvještaji Posjeta

Ovo je deveta kartica u **CRM Kontakti**.

Na ovoj kartici prikazan je popis unesenih **Izvješća o Posjeti** inseriti per il contatto.

U gornjem dijelu kartice nalaze se polja za **filtriranje** koja omogućuju preciznije pretraživanje željenih izvješća o posjetu.

Duplim klikom na redak izvješća o posjetu, isto će se otvoriti u prikazu/promjeni. Za unos novog izvješća o posjetu za određeni kontakt dovoljno je pritisnuti tipku ![](/img/neutral/common/new-visit-report.png), koja se nalazi na vrpci s alatkama.

### 10. Ponude za Kontakt 

Ovo je deseta kartica u **CRM Kontakti**.

Na ovoj kartici prikazan je popis unesenih ponuda za kontakt. U gornjem dijelu kartice nalaze se polja za filtriranje koja omogućuju preciznije pretraživanje željenih ponuda. Dvoklikom na redak ponude, ista će se otvoriti u prikazu/promjeni. Također je moguće stvoriti nove ponude.

### 11. Drugi podaci o Kontaktu

Ovo je jedanaesta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je pregledati i unijeti [Drugi Podaci](/docs/configurations/utility/extra-data/extradata/search-extradata) o kontaktu koji će zatim biti prikazani na povezanim dokumentima.

### 12. Konkurenti Kontakta

Ovo je dvanaesta kartica u **CRM Kontakti**.

Na ovoj kartici moguće je naznačiti eventualne **Konkurente** koje naša tvrtka ima u pregovorima s ovim kontaktom.   
Kontakt se može odabrati putem odgovarajućeg padajućeg izbornika, odabirom vrijednosti iz pripadajuće [tablice](/docs/configurations/tables/crm/contacts/competitors).
U polju **Napomena** možete navesti dodatne korisne informacije o konkurentu.

### 13. Cjenici prodaje kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuju se važeći prodajni cjenici za kontakt, koji će se primijeniti u dokumentima izdanim na ime kontakta. Prilikom pretvorbe kontakta u klijenta, ti će se podaci prijeliti u karticu klijenta.   

### 14. Prodajni nalozi kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se popis narudžbi koje su unesene za kontakt. U gornjem dijelu kartice nalaze se polja za filtriranje koja omogućuju preciznije traženje narudžbi.
Dvaput klikom na red narudžbe, ista se otvara za pregled/izmjenu. Također je moguće kreirati nove narudžbe.  

### 15. Newsletter kontakta 

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se popis newsletter-a povezanih s kontaktom. U gornjem dijelu kartice nalaze se polja za filtriranje koja omogućuju precizno traženje željenog newsletter-a. Dvaput klikom na red newsletter-a, otvara se za pregled/izmjenu.

### 16. Plaćanja kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici konfiguriraju se uvjeti plaćanja koje treba predložiti u dokumentima vezanim uz kontakt.

#### Tipovi plaćanja

Ključni dio kartice **Plaćanja** služi za definiranje logike izračuna dospijeća. Odabiru se **Tip plaćanja** i **Rješenje plaćanja** (oba su definirana u *Konfiguracija > Tablice > Opće postavke*).

**Postotak**: omogućuje definiranje udjela (u postotku) ukupne vrijednosti plaćanja (ili primitka) koji će biti upravljan prema uvjetu plaćanja (kombinacija tipa plaćanja i rješenja plaćanja) postavljenom u tom retku.

Ako je postotak manji od 100, potrebno je napraviti više redova čiji zbroj postotaka bude 100.  

*Primjer*:<br />
- 50 % gotovinsko odmah + 50 % bankovni transfer za 30 dana.<br />
- 50 % gotovinsko odmah; 25 % bankovni transfer za 30 dana; 25 % bankovni transfer za 60 dana.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Pažnja</u>: ako rješenje plaćanja predviđa više od jednog dospijeća, unosi se na sljedeći način: na primjer 50 % gotovina odmah, 50 % bankovni transfer na 30 – 60 dana.  

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banka (podrška)**: predstavlja banku referentnu za partije.  
- Za karticu klijenta: 
> - ako je tip plaćanja bankovna mjenica, treba navesti banku klijenta;  
> - ako je tip plaćanja bankovni transfer, navodi se banka tvrtke u upotrebi (da se na dokumentima prikažu ispravni referentni podaci za plaćanje).  

To polje se popunjava putem kombiniranog izbora (**Banka**) koji je povezan s tablicom *Banka prezentacije*. Unutar te tablice moguće je unijeti banke tvrtke i banke protustrane (klijenta ili dobavljača). Također, moguće je unijeti redove s kompletnim IBAN i/ili SWIFT kodovima (preporučeno za banke tvrtke) ili samo ABI i CAB kodove (preporučeno za banke klijenta), koje se mogu naknadno nadopuniti u kartici.  

Ako je red u tablici Banka d’appoggio potpun (IBAN i/ili SWIFT + ABI i CAB), pri izboru tog reda kombinacijskom listom podaci će se prenijeti u karticu. Ako nije, prenijet će se samo ABI i CAB, ali korisnik može naknadno dopuniti podatke. Ovo je praktično za banke klijenta kako ne bi bilo potrebno unositi prevelik broj redova u karticu banke. Bolje je navesti samo podatke poslovnice (ABI i CAB) za više klijenata.

Dodavanje banke može se napraviti i dvostrukim klikom u polja ABI/CAB da se otvori pomoć za pretragu među nacionalnim bankovnim agencijama, odabrati primarnu i kreirati kod u kartici uz dopunu podataka: račun, CIN, IBAN, SWIFT 

**Opis banke**: polje povezano s prethodnim poljem.  

**Kod banke**: polje NE koristi se u Italiji. Za inozemne lokalizacije može primiti alternativni kod banke izvan sustava ABI/CAB.

#### Banke podrške

U tablici se mogu unijeti banke podrške protostrane.

To omogućuje unos alternativnih banaka klijenta. Na primjer: klijent plaća bankovnim transferom (i u tablici Tip plaćanja se navodi banka tvrtke), ali želite unijeti i banku klijenta za situacije povrata ili izvansudska plaćanja.

Banka se može dodati dvostrukim klikom u polja ABI/CAB za pomoć pri pretraživanju nacionalnih banaka, odabirom relevantne banke i unošenjem podataka računa, IBAN, SWIFT.

### 17. Prilika za kontakt

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se popis prilika (opportunità) unesenih za kontakt.
U gornjem dijelu kartice nalaze se polja za filtriranje koja omogućuju preciznije pretraživanje postojećih prilika.
Dvostrukim klikom na redak s određenom prilikom, ista će se otvoriti za pregled ili uređivanje.  

### 18. Radno vrijeme kontakta 

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuju se dani i sati kada je kontakt dostupan, odnosno njegovo radno vrijeme. 

### 19. Telefonski pozivi kontakta

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se popis telefonskih poziva obavljenih prema kontaktu.  

### 20. Marketinške kampanje kontakta  

Ovo je jedna od kartica **CRM kontakata**.

Na ovoj kartici prikazuje se popis marketinških kampanja u kojima se kontakt nalazi.   