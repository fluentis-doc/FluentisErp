---
title: Općenito
sidebar_position: 2
---

## Općenito

U ovoj kartici bit će unesene sve opće informacije vezane uz šifarnik koje želite unijeti.

Prozor se sastoji od prvog odjeljka u koji će se umetnuti podaci koji se odnose isključivo na matične **Podatke** tvrtke i drugog odjeljka koji se sastoji od dvije kartice **Reference** i **alternativne adrese** u kojima će se kontakt osobe i sve sekundarne adrese umetnuti u slučaju tvrtke s različitim uredima.

### Podaci šifarnika

**Naziv tvrtke**: polje u kojem se definira naziv subjekta. Taj će naziv biti dodijeljen svim računovodstvenim podkontima definiranim za predmetne matične podatke te će se putem njih prikazivati na svim računovodstvenim i dokumentacijskim ispisima.

Na temelju ovdje unesenog naziva, nakon izlaska iz polja sustav će automatski generirati 'Kratki naziv, odnosno kratku jedinstvenu oznaku za identifikaciju tih matičnih podataka. Korisnik ju može izmijeniti, ali mora biti jedinstvena unutar popisa svih matičnih podataka.
Budući da se pretraživanje subjekta (ako je riječ o računovodstvenom subjektu) u pravilu provodi prema nazivu tvrtke, ovo polje nema posebno veliku važnost.

**PDV identifikacijski broj**: polje koje se sastoji od međunarodne ISO oznake države (definirane u tablici država) i pripadajućeg PDV identifikacijskog broja. Za talijanske PDV brojeve sustav provodi provjeru kontrolnog znaka pri izlasku iz polja.

Nakon unosa PDV identifikacijskog broja, za subjekte iz Europske unije moguće je putem gumba „Predloži podatke” zatražiti provjeru i preuzimanje podataka iz europske baze VIES. Za pojedine države VIES vraća i podatke o adresi povezanoj s traženim PDV brojem, koji će se automatski prenijeti i popuniti odgovarajuća polja u Fluentisu.

**Porezni broj**: polje za unos poreznog broja subjekta.

**Fizička/pravna osoba**: označava radi li se o fizičkoj osobi (privatnoj osobi) ili o pravnoj osobi.

**Knjiženje**: opcija koja se prema zadanim postavkama prikazuje u novim stavkama, omogućit će definiranje administrativnih/komercijalnih podataka upravljanja za konta povezana s šifarnikom koji se koristi.

**Adresa**: je adresa sjedišta;

**Poštanski broj**: to je poštanski broj; može se napisati ručno ili proizaći iz odabira općine (sljedeće polje) putem općinske pomoći;

**Mjesto**: polje za uređivanje u koje se upisuje općina registriranog ureda. Postoji pretraživanje popisa općina, definirano u tablici (Konfiguriranje>Tablice>Opće postavke);

**Županija**: polje koje se može uređivati u koje se može umetnuti šifra pokrajine. Postoji pretraživanje popisa provincija (pokrajina), definirano u tablici (Konfiguriranje>Tablice>Opće postavke);

**Napomene**: slobodno polje unutar kojeg je moguće definirati potpuni tekst adrese koja se prijavljuje prilikom ispisa dokumenata, bez potrebe kombiniranja adresa+poštanski broj+općina+ županija;

**Država**: kod zemlje za šifarnik koji se koristi, definirano u tablici (Konfiguriranje>Tablice>Opće postavke). Važno; ovo polje je osnova za identifikaciju subjekata prisutnih u zemljama s povlaštenim oporezivanjem (Konfiguriranje>Tablice>Opće postavke), za povezanu poreznu prijavu administrativnog područja;

**Regija**: šifra regije kojoj pripada (Konfiguriranje>Tablice>Opće postavke);

**Jezik**: kod jezika (Konfiguriranje>Tablice>Opće postavke) reference za komunikaciju upućenu šifarniku koji se koristi. Moguće je automatski generirati izvješća na jeziku na temelju rječnika definiranog u ARM-u (Application Resource Manager);

**Telefon/Mobitel**: polje za unos glavnog telefona ili mobitela kontakta;

**Fax**: polje za unos glavnog faksa kontakta;

**Web stranica**: polje za unos web stranice kontakta;

**E-mail**: polje za unos zadane email adrese kontakta;

**Datum zadnje promjene/korisnik**: polje koje prikazuje korisnika i datum posljednjeg spremanja izvršenog za trenutno otvorene matične podatke.

**Datum kraja valjanosti**: polje koje služi za blokiranje korištenja trenutnih matičnih podataka. Nakon unosa ovog datuma, sustav će zatražiti potvrdu želite li isti datum završetka valjanosti primijeniti i na sva računovodstvena podkonta povezana s tim matičnim podacima: ni na jedan podkonto, samo za trenutno poduzeće, za sva poduzeća, ili poništiti izmjenu.

**Napomene**: polje u koje možete unijeti bilo koje bilješke koje se odnose na temu;

*Posebni gumbi*

:::tip[Prijedlog]
Unosom **PDV identifikacijskog broja (PDV ID-a)** u odgovarajuće polje poslovnog partnera te klikom na gumb **Predloži podatke**, sustav putem web-servisa automatski provjerava valjanost i ispravnost PDV ID-a u sustavu **VIES**. Ako je uneseni broj valjan, Fluentis automatski predlaže osnovne podatke poslovnog partnera, čime se izbjegava ručni unos i ubrzava kreiranje matičnih podataka. Za dodatne informacije o sustavu **VIES (VAT Information Exchange System)** pogledati službenu dokumentaciju Europske komisije.
:::

### Reference

U odjeljku **Pristupi Web-u** moguće je omogućiti pristup aplikaciji putem internetskog preglednika, uključivanje šifarnika i dodjeljivanje korisničkog imena i lozinke;

U odjeljku **EDI šifra** može se unijeti šifra za prijenos datoteke putem EDI procesa s relevantnim internim brojem dodijeljenim predmetu i mogućnošću da kažete da se kod odnosi na dobavljača.

U odjeljku **Dodatni podaci** moguće je unijeti dodatne informacije o poslovnom partneru. Broj kupca kao interni identifikacijski broj kupca koji se koristi za potrebe evidencije i povezivanja s vanjskim sustavima. Broj registra transporta: za poslovne partnere koji obavljaju djelatnost prijevoza predstavlja identifikacijski broj subjekta u registru cestovnih prijevoznika. Rođendan: podatak koji se unosi kada je poslovni partner fizička osoba.

U odjeljku **Kontakt osobe** možete navesti, za kontakt koji se koristi, popis kontakt osoba prisutnih unutar njega s opisom uloge i povezanim telefonskim kontaktima i/ili adresama e-pošte. Osim ove funkcije, važno je naglasiti da će se za subjekte koji se prijavljuju u potvrdi o porezu po odbitku prvi redak umetnut u ovaj odjeljak odnositi na reference fizičke osobe koja se iskazuje u ispisu.

U odjeljak **Podkonta u svim tvrtkama** može se vidjeti je li za šifarnik u upotrebi definirana računovodstvena uporaba u drugom poduzeću; u odjeljku se tada može pronaći popis različitih konta dodijeljenih relevantnoj referentnoj tvrtki.


### Alternativne adrese 

Ovdje je moguće unijeti alternativne adrese koje ovise o pridruženoj *Vrsti adrese* (Pažnja: ne radi se o adresama za isporuku robe. Za tu je svrhu razvijena kartica [Dostava](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) u *Računovodstvenim podacima* i gdje su umetnuti  *Primatelji/Odredišta* kako bi se omogućilo potpuno upravljanje u dokumentu.)

Najčešća namjena ove sekcije jest upravljanje e-mail adresama radi automatizacije slanja dokumenata, najčešće izvještaja i ispisa, putem tijekova (poslovnih procesa sa statusnim prijelazima unutar obrazaca), osobito kod masovnog slanja elektroničke pošte.

*Primjer*: ako se u tablici odabere vrstu adrese „Komercijalno sjedište”, moguće je unijeti jednu ili više kontakt osoba iz prodajnog odjela kojima će se, primjerice, slati potvrde narudžbi putem e-maila. E-mail adresa unosi se u sekciju pored mreže, gdje je moguće evidentirati i telefonski broj kontakta te ostale matične podatke.

U tom slučaju, prilikom unosa narudžbe, u kartici Sažeci, kada se odabere slanje potvrde narudžbe kupcu, otvorit će se pregled e-mail poruke u kojem će polje primatelja već biti automatski popunjeno podacima unesenima u ovoj sekciji, bez potrebe za ručnim unosom svaki put. Ovisno o vrsti adrese, moguće je definirati kome će se slati računi, narudžbe dobavljačima i drugi dokumenti.

Stoga, obrazac Alternativne adrese ne služi za upravljanje adresnim podacima koji će se koristiti u dokumentima prodajnog ili nabavnog procesa.

Njegova funkcija, osim jednostavnog evidentiranja alternativnih adresa (posebno e-mail adresa), ograničena je na dvije vrlo korisne automatizacije:

- **Upravljanje e-mail adresama u masovnom slanju dokumenata** (prodajnih faktura, ali i drugih vrsta nakon konfiguracije) putem reda čekanja za otpremu kojim upravlja Bizlink komponenta.

- Upravljanje [Suvlasnicima](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) na prodajnom računu.


### Postupak unosa adrese 

Prije unosa detaljnih podataka na desnoj strani obrasca (unutar različitih specifičnih polja), potrebno je unijeti barem jedan redak u odjeljak s lijeve strane koji odgovara vrsti adrese.

**Vrsta adrese**: šifra vrste adrese. Kombinirani okvir povezan je s tablicom [Vrste adresa](/docs/configurations/tables/general-settings/address-types) (nalazi se na Konfiguracija > Tablice > Opće postavke).

**Adresa**: opis koji odgovara šifri sadržanoj u prethodnom polju.

**Opis**: obavezno polje za spremanje, to je samo dodatni opis retka koji se unosi.

Nakon što je umetnut redak s odabranom vrstom adrese, moguće je ispuniti odgovarajuće detaljne podatke.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image02.png)

Moguće je istovremeno unijeti i upravljati s više adresa e-pošte (primjerice, za slanje većem broju primatelja) umetanjem samih adresa u isto polje i odvajanjem točka-zarezom ( ; ).


### Masovno slanje dokumenata putem e-maila 

Za automatsko upravljanje e-mail adresom kod masovnog slanja prodajnih računa (pogledajte i prilog na početku ovog članka) potrebno je koristiti određenu vrstu adrese (koja se može kodirati po želji, sve dok ima, u tablici [Tipovi adrese](/docs/configurations/tables/general-settings/address-types) aktiviranu oznaku **Račun e-pošte = e-pošta računa kupca**).

Također će biti moguće, nakon *konfiguracije*, upravljati masovnim slanjem i na drugim vrstama dokumenata (na primjer opomene za plaćanje itd.), možda povezujući unesenu adresu e-pošte s određenom vrstom adrese koja će se konfigurirati pomoću jedne od drugih oznaka dostupnih u tablici Vrste adresa. U ovom slučaju bit će potrebno definirati i transformaciju/(Transformation) specifičnog dokumenta i namjenski tijek rada (Workflow).

Upravljanje unesenom e-mail adresom, koja je označena oznakom „Email Fatt. C.”, povezano je i s automatskim sastavljanjem popratne e-mail poruke (za što je potrebno imati instaliran Outlook na računalu). Ovu funkcionalnost moguće je koristiti nakon ulaska u Prodajni račun i pokretanja pregleda ispisa, putem naredbe Send (PDF, Word i sl.).

### Upravljanje zajedničkim računima

U ovom slučaju relevantan podatak je ime suvlasnika. Stoga će za svakog od suvlasnika biti potrebno unijeti redak kako bi se unijeli osobni podaci svakog pojedinog. Ispravna vrsta adrese za pridruživanje u tablici [Tipovi adrese](/docs/configurations/tables/general-settings/address-types) i [Suvlasnici](/docs/configurations/tables/general-settings/address-types).

Za upravljanje fakturama pogledati [ovdje](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

Nakon što se unesu **Opće** informacije, specifične informacije bit će unesene u sljedeću karticu  **Podaci knjiženja**.

### Povijesni podaci

Ova sekcija služi za vođenje povijesti podataka, odnosno za pohranu promjena općih podataka poslovnog partnera, kao što su promjena naziva tvrtke, adrese i drugih osnovnih podataka kupca ili dobavljača.

:::note[Napomena]
Promjena naziva poslovnog partnera automatski će ažurirati opis povezanih konta i podkonta u kontnom planu koja su dodijeljena toj kontaktnoj kartici, nakon potvrde korisnika.
Zbog toga je vođenje povijesti podataka posebno važno kako bi se osigurala sljedivost dokumenata i ostalih zapisa koji se referiraju na prethodne podatke poslovnog partnera.
:::

Na lijevoj strani forme nalazi se mreža zapisa u kojoj se evidentira datum promjene. Taj datum koristi se kao referenca za prikaz prethodnih ili novih podataka.
Na desnoj strani prikazuju se podaci kontakta koji će se automatski popuniti tijekom postupka arhiviranja povijesti. Nakon toga moguće je izmijeniti aktualne podatke u sekciji **Općenito**.

#### Specifični gumbi

**Arhiviraj podatke šifarnika**  
Glavni gumb za pokretanje postupka arhiviranja (pohrane) podataka. Nakon pokretanja otvara se prozor u kojem je potrebno unijeti datum promjene (*Datum početka važenja*). Datum će se prikazati u lijevoj mreži, dok će se postojeći podaci kopirati na desnu stranu kako bi se mogli evidentirati i zatim ažurirati.

**Izbriši arhivirano**  
Briše datum završetka važenja i podatke unesene u desnom dijelu forme.

### Postupak arhiviranja podataka
:::tip Procedura
1. Kliknite gumb **Arhiviraj podatke partnera**.
2. U prozoru koji se otvori unesite **datum promjene**, odnosno datum od kojeg nova vrijednost postaje važeća (primjerice datum promjene naziva tvrtke). Nakon potvrde, postojeći podaci automatski se spremaju kao povijesni zapis.
3. Izmijenite podatke u kartici **Podaci partnera** te kliknite **Spremi**.
:::

Nakon toga prethodni (povijesni) podaci dostupni su u različitim standardnim ispisima, kao što su registri, izlazni računi i drugi izvještaji. Sustav će automatski prikazivati odgovarajuće povijesne podatke kada se dokument odnosi na razdoblje prije isteka njihove valjanosti.

:::warning[Pažnja]
U korisničkim ekranima Fluentis ERP-a uvijek se prikazuju aktualni, važeći podaci. Prikaz povijesnih podataka nije dostupan unutar standardnih formi aplikacije.
Ova funkcionalnost služi isključivo za upravljanje povijesnim podacima u ispisima i izvještajima.
Kod prilagođenih izvještaja moguće je koristiti povijesna polja i pripadajuće formule za prikaz podataka prema referentnom datumu, po uzoru na standardne Fluentis izvještaje.
:::