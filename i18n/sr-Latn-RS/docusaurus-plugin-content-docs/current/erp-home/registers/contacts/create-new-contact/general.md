---
title: Općenito
sidebar_position: 2
---

## Općenito

U ovoj kartici unose se sve opće informacije vezane uz šifarnik koji želite kreirati.

Prozor se sastoji od prvog odjeljka u koji se unose podaci koji se odnose isključivo na matične **Podatke** subjekta te drugog odjeljka koji sadrži dvije kartice: **Reference** i **Alternativne adrese**, u koje se unose kontakt osobe i sve sekundarne adrese u slučaju tvrtke s više poslovnih lokacija.

### Podaci šifarnika

**Naziv tvrtke**: polje u kojem se definira naziv subjekta. Taj će naziv biti dodijeljen svim računovodstvenim podkontima definiranim za predmetne matične podatke te će se putem njih prikazivati na svim računovodstvenim i dokumentacijskim ispisima.

Na temelju ovdje unesenog naziva, nakon izlaska iz polja sustav će automatski generirati **Kratki naziv**, odnosno kratku jedinstvenu oznaku za identifikaciju tih matičnih podataka. Korisnik ju može izmijeniti, ali mora biti jedinstvena unutar popisa svih matičnih podataka.
Budući da se pretraživanje subjekta (ako je riječ o računovodstvenom subjektu) u pravilu provodi prema nazivu tvrtke, ovo polje nema posebno veliku važnost.

**PDV identifikacijski broj**: polje koje se sastoji od međunarodne ISO oznake države (definirane u tablici država) i pripadajućeg PDV identifikacijskog broja. Za talijanske PDV brojeve sustav provodi provjeru kontrolnog znaka pri izlasku iz polja.
Nakon unosa PDV identifikacijskog broja, za subjekte iz Europske unije moguće je putem gumba **Predloži podatke** zatražiti provjeru i preuzimanje podataka iz europske baze VIES. Za pojedine države VIES vraća i podatke o adresi povezanoj s traženim PDV brojem, koji će se automatski prenijeti i popuniti odgovarajuća polja u Fluentisu.

**Porezni broj**: polje za unos poreznog broja subjekta.

**Fizička/pravna osoba**: označava radi li se o fizičkoj osobi (privatnoj osobi) ili o pravnoj osobi.

**Knjiženje**: opcija koja je prema zadanim postavkama uključena za nove zapise te omogućuje definiranje administrativnih i komercijalnih podataka upravljanja za konta povezana sa šifarnikom koji se koristi.

**Adresa**: adresa sjedišta.

**Poštanski broj**: poštanski broj. Može se unijeti ručno ili se automatski popunjava odabirom općine putem pretraživanja općina.

**Mjesto**: polje za unos općine sjedišta. Dostupno je pretraživanje iz tablice općina (*Konfiguracija > Tablice > Opće postavke*).

**Županija**: polje za unos oznake županije. Dostupno je pretraživanje iz tablice županija (*Konfiguracija > Tablice > Opće postavke*).

**Napomene**: slobodno polje u koje je moguće upisati puni tekst adrese za ispis na dokumentima, bez potrebe za kombiniranjem adrese, poštanskog broja, mjesta i županije.

**Država**: šifra države za predmetni šifarnik, definirana u tablici (*Konfiguracija > Tablice > Opće postavke*). Ovo polje važno je za identifikaciju subjekata koji pripadaju državama s povlaštenim poreznim režimom te za povezane porezne prijave.

**Regija**: šifra regije kojoj subjekt pripada (*Konfiguracija > Tablice > Opće postavke*).

**Jezik**: šifra jezika (*Konfiguracija > Tablice > Opće postavke*) koja se koristi za komunikaciju sa subjektom. Na temelju definiranih prijevoda u ARM-u (*Application Resource Manager*) moguće je automatski generirati izvještaje na odgovarajućem jeziku.

**Telefon/Mobitel**: polje za unos glavnog telefonskog ili mobilnog broja kontakta.

**Fax**: polje za unos broja faksa.

**Web stranica**: polje za unos web adrese.

**E-mail**: polje za unos zadane e-mail adrese kontakta.

**Datum zadnje promjene / Korisnik**: prikazuje korisnika i datum posljednjeg spremanja izvršenog nad trenutno otvorenim matičnim podacima.

**Datum kraja valjanosti**: polje koje služi za blokiranje korištenja trenutnih matičnih podataka. Nakon unosa ovog datuma sustav će zatražiti potvrdu želite li isti datum završetka valjanosti primijeniti i na sva računovodstvena podkonta povezana s tim matičnim podacima:
- ni na jedno podkonto,
- samo za trenutno poduzeće,
- za sva poduzeća,
- ili poništiti izmjenu.

**Napomene**: polje u koje možete unijeti bilo kakve dodatne bilješke vezane uz predmetni subjekt.

*Posebni gumbi*

:::tip[Prijedlog]
Unosom **PDV identifikacijskog broja (PDV ID-a)** u odgovarajuće polje poslovnog partnera te klikom na gumb **Predloži podatke**, sustav putem web-servisa automatski provjerava valjanost i ispravnost PDV ID-a u sustavu **VIES**. Ako je uneseni broj valjan, Fluentis automatski predlaže osnovne podatke poslovnog partnera, čime se izbjegava ručni unos i ubrzava kreiranje matičnih podataka.

Za dodatne informacije o sustavu **VIES (VAT Information Exchange System)** pogledati službenu dokumentaciju Europske komisije.
:::

### Reference

U odjeljku **Pristupi Web-u** moguće je omogućiti pristup aplikaciji putem internetskog preglednika, aktivirati šifarnik te dodijeliti korisničko ime i lozinku.
U odjeljku **EDI šifra** može se unijeti šifra za prijenos datoteka putem EDI procesa, zajedno s pripadajućim internim brojem dodijeljenim subjektu i mogućnošću označavanja da se šifra odnosi na dobavljača.
U odjeljku **Dodatni podaci** moguće je unijeti dodatne informacije o poslovnom partneru.
- **Broj kupca**: interni identifikacijski broj kupca koji se koristi za potrebe evidencije i povezivanja s vanjskim sustavima.
- **Broj registra transporta**: za poslovne partnere koji obavljaju djelatnost prijevoza predstavlja identifikacijski broj subjekta u registru cestovnih prijevoznika.
- **Rođendan**: podatak koji se unosi kada je poslovni partner fizička osoba.

U odjeljku **Kontakt osobe** možete evidentirati popis kontakt osoba povezanih sa subjektom, zajedno s opisom njihove uloge te pripadajućim telefonskim brojevima i/ili e-mail adresama.
Osim ove funkcije, važno je naglasiti da će se za subjekte koji se prijavljuju u potvrdi o porezu po odbitku prvi redak unesen u ovaj odjeljak koristiti kao referenca fizičke osobe koja će biti prikazana na ispisu.
U odjeljku **Podkonta u svim tvrtkama** moguće je provjeriti postoji li za šifarnik u upotrebi računovodstvena primjena u drugim poduzećima. U tom slučaju prikazuje se popis konta dodijeljenih odgovarajućim poduzećima.

### Alternativne adrese

Ovdje je moguće unijeti alternativne adrese koje ovise o pridruženoj **Vrsti adrese**.

:::warning[Pažnja]
Ne radi se o adresama za isporuku robe. Za tu je svrhu predviđena kartica [Dostava](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) unutar **Računovodstvenih podataka**, gdje se unose **Primatelji/Odredišta** radi potpunog upravljanja isporukama u dokumentima.
:::

Najčešća namjena ove sekcije jest upravljanje e-mail adresama radi automatizacije slanja dokumenata, najčešće izvještaja i ispisa, putem tijekova rada (*workflowa*), osobito kod masovnog slanja elektroničke pošte.

*Primjer*: ako se u tablici odabere vrsta adrese **Komercijalno sjedište**, moguće je unijeti jednu ili više kontakt osoba iz prodajnog odjela kojima će se, primjerice, slati potvrde narudžbi putem e-maila. E-mail adresa unosi se u sekciju pored mreže, gdje je moguće evidentirati i telefonski broj kontakta te ostale matične podatke.

U tom slučaju, prilikom unosa narudžbe, u kartici **Sažeci**, kada se odabere slanje potvrde narudžbe kupcu, otvorit će se pregled e-mail poruke u kojem će polje primatelja već biti automatski popunjeno podacima unesenima u ovoj sekciji, bez potrebe za ručnim unosom svaki put.
Ovisno o vrsti adrese, moguće je definirati kome će se slati računi, narudžbe dobavljačima i drugi dokumenti.
Stoga obrazac **Alternativne adrese** ne služi za upravljanje adresnim podacima koji će se koristiti u dokumentima prodajnog ili nabavnog procesa.
Njegova funkcija, osim jednostavnog evidentiranja alternativnih adresa (posebno e-mail adresa), ograničena je na dvije vrlo korisne automatizacije:

- **Upravljanje e-mail adresama u masovnom slanju dokumenata** (prodajnih računa, ali i drugih vrsta dokumenata nakon odgovarajuće konfiguracije) putem reda čekanja za otpremu kojim upravlja Bizlink komponenta.
- Upravljanje [Suvlasnicima](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) na prodajnom računu.

### Postupak unosa adrese

Prije unosa detaljnih podataka na desnoj strani obrasca (unutar pojedinih specifičnih polja), potrebno je unijeti barem jedan redak u odjeljak s lijeve strane koji odgovara vrsti adrese.

**Vrsta adrese**: šifra vrste adrese. Padajući izbornik povezan je s tablicom [Vrste adresa](/docs/configurations/tables/general-settings/address-types) (*Konfiguracija > Tablice > Opće postavke*).

**Adresa**: opis koji odgovara šifri sadržanoj u prethodnom polju.

**Opis**: obavezno polje za spremanje. Predstavlja dodatni opis retka koji se unosi.

Nakon što je unesen redak s odabranom vrstom adrese, moguće je ispuniti pripadajuće detaljne podatke.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image02.png)

Moguće je istovremeno unijeti i upravljati s više e-mail adresa (primjerice radi slanja većem broju primatelja) upisivanjem svih adresa u isto polje te njihovim odvajanjem točka-zarezom (**;**).

### Masovno slanje dokumenata putem e-maila

Za automatsko upravljanje e-mail adresom kod masovnog slanja prodajnih računa (pogledajte i prilog na početku ovog članka) potrebno je koristiti određenu vrstu adrese (koja se može kodirati po želji, sve dok ima, u tablici [Tipovi adrese](/docs/configurations/tables/general-settings/address-types), aktiviranu oznaku **Račun e-pošte = e-pošta računa kupca**).
Također će biti moguće, nakon *konfiguracije*, upravljati masovnim slanjem i drugih vrsta dokumenata (primjerice opomena za plaćanje), povezivanjem unesene e-mail adrese s određenom vrstom adrese koja će se konfigurirati pomoću jedne od drugih oznaka dostupnih u tablici **Vrste adresa**.
U tom slučaju bit će potrebno definirati i transformaciju (*Transformation*) specifičnog dokumenta te odgovarajući tijek rada (*Workflow*).
Upravljanje unesenom e-mail adresom, označenom oznakom **Email Fatt. C.**, povezano je i s automatskim sastavljanjem popratne e-mail poruke (za što je potrebno imati instaliran Outlook na računalu).
Ovu funkcionalnost moguće je koristiti nakon ulaska u **Prodajni račun** i pokretanja pregleda ispisa putem naredbe **Send** (PDF, Word i sl.).

### Upravljanje zajedničkim računima

U ovom slučaju relevantan podatak je ime suvlasnika. Stoga je za svakog suvlasnika potrebno unijeti poseban redak kako bi se evidentirali njegovi osobni podaci.
Ispravna vrsta adrese za povezivanje definira se u tablici [Tipovi adrese](/docs/configurations/tables/general-settings/address-types) putem oznake **Suvlasnici**.
Za upravljanje računima pogledati [ovdje](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).
Nakon što se unesu podaci u kartici **Općenito**, specifične informacije unose se u sljedeću karticu **Podaci knjiženja**.

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
Glavni gumb za pokretanje postupka arhiviranja podataka. Nakon pokretanja otvara se prozor u kojem je potrebno unijeti datum promjene (*Datum početka važenja*).
Datum će se prikazati u lijevoj mreži, dok će se postojeći podaci kopirati na desnu stranu kako bi se mogli evidentirati i zatim ažurirati.

**Izbriši arhivirano**  
Briše datum završetka važenja i podatke unesene u desnom dijelu forme.

### Postupak arhiviranja podataka

:::tip Procedura
1. Kliknite gumb **Arhiviraj podatke partnera**.
2. U prozoru koji se otvori unesite **datum promjene**, odnosno datum od kojeg nova vrijednost postaje važeća (primjerice datum promjene naziva tvrtke). Nakon potvrde, postojeći podaci automatski se spremaju kao povijesni zapis.
3. Izmijenite podatke u kartici **Podaci partnera** te kliknite **Spremi**.
:::

Nakon toga prethodni (povijesni) podaci dostupni su u različitim standardnim ispisima, kao što su registri, izlazni računi i drugi izvještaji.
Sustav će automatski prikazivati odgovarajuće povijesne podatke kada se dokument odnosi na razdoblje prije isteka njihove valjanosti.

:::warning[Pažnja]
U korisničkim ekranima Fluentis ERP-a uvijek se prikazuju aktualni, važeći podaci.
Prikaz povijesnih podataka nije dostupan unutar standardnih formi aplikacije.
Ova funkcionalnost služi isključivo za upravljanje povijesnim podacima u ispisima i izvještajima.
Kod prilagođenih izvještaja moguće je koristiti povijesna polja i pripadajuće formule za prikaz podataka prema referentnom datumu, po uzoru na standardne Fluentis izvještaje.
:::