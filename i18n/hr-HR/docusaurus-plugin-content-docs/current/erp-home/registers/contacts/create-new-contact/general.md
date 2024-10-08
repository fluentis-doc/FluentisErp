---
title: Općenito
sidebar_position: 2
---

## Općenito

U ovoj kartici bit će unesene sve opće informacije vezane uz šifarnika koje želite unijeti.

Prozor se sastoji od prvog odjeljka u koji će se umetnuti podaci koji se odnose isključivo na matične **Podatke** tvrtke i drugog odjeljka koji se sastoji od dvije kartice **Reference** i **sekundarne Adrese** u kojima će se kontakt osobe i sve sekundarne adrese umetnuti u slučaju tvrtke s različitim uredima.

### Podaci šifarnika

**Naziv tvrtke**: polje unutar kojeg se definira naziv subjekta: bit će dodijeljen svim računovodstvenim podračunima definiranim za šifarnika koji se koristi i bit će prikazan u svakom računovodstvenom/dokumentarnom ispisu.

Na temelju ovdje unesenog teksta, izlaskom iz polja, sustav upravljanja automatski će generirati ‘Nadimak', odnosno jedinstveni kratki identifikacijski kod samih šifarnika: to korisnik može izmijeniti, ali mora biti jedinstven na popisu svih šifarnika. S obzirom na to da će se traženje predmeta (ako je računovodstvo) obično provoditi na temelju naziva poduzeća, ovo polje nije osobito relevantno.

**Računovodstvo**: oznaka koja se prema zadanim postavkama prikazuje u novim stavkama, omogućit će vam definiranje administrativnih/komercijalnih podataka upravljanja za podračune povezane s šifarnikom koji se koristi.

**Adresa**: je adresa sjedišta;

**Poštanski broj**: to je poštanski broj; može se napisati ručno ili proizaći iz odabira općine (sljedeće polje) putem općinske pomoći;

**Mjesto**: polje za uređivanje u koje se upisuje općina registriranog ureda. Postoji općinske pomoći kartica za pretraživanje popisa općina kako je definirano u tablici (Početna stranica>Tablice>Opće postavke);

**Županija**: polje koje se može uređivati u koje možete umetnuti šifru pokrajine. Postoji help Province za pretraživanje na popisu provincija kako je definirano u tablici (Početna stranica>Tablice>Opće postavke);

**Napomene**: slobodno polje unutar kojeg je moguće definirati potpuni tekst adrese koja se prijavljuje prilikom ispisa dokumenata, bez potrebe kombiniranja adresa+poštanski broj+općina+ županija;

**Država**: kod zemlje za šifarnika koji se koristi, kako je definirano u tablici (Početna stranica >Tablice>Opće postavke). Važno; ovo polje je osnova za identifikaciju subjekata prisutnih u zemljama s povlaštenim oporezivanjem (Početna stranica >Tablice>Opće postavke>Države black list), za povezanu poreznu prijavu administrativnog područja;

**Regija**: šifra regije kojoj pripada (Početna stranica >Tablice>Opće postavke);

**Jezik**: kod jezika (Početna stranica>Tablice>Opće postavke) reference za komunikaciju upućenu šifarniku koji se koristi. Moguće je automatski generirati izvješća na jeziku na temelju rječnika definiranog u ARM-u (Application Resource Manager);

**PDV BROJ**: polje sastavljeno od međunarodnog ISO koda države (definiranog u samoj tablici Država) i povezanog PDV-a. Polje podliježe testovima ispravnosti kontrolnog znaka za hrvatske PDV brojeve (test se izvodi na izlazu iz polja).

**OIB**: polje za unos OIB-a subjekta;

**Fizička/pravna osoba**: označava da li je subjekt fizička osoba ili ne;

**Telefon/Mobitel**: polje za unos glavnog telefona ili mobitela kontakta;

**Fax**: polje za unos glavnog faksa kontakta;

**Web stranica**: polje za unos web stranice kontakta;

**E-mail**: polje za unos zadane email adrese kontakta;

**Datum/zadnja instanca korisničke aktivnosti**: polje koje prikazuje korisnika i datum zadnjeg spremanja za šifarnika koja se koristi;

**Datum kraja valjanosti**: polje za blokiranje upotrebe šifarnika u uporabi. Nakon postavljanja ovog datuma, sustav će pitati treba li ovaj kraj valjanosti pripisati svim računovodstvenim podračunima povezanim sa samim šifarnikom: nijednom, samo tvrtki u upotrebi, svim tvrtkama ili poništiti promjenu;

**Napomene**: polje u koje možete unijeti bilo koje bilješke koje se odnose na temu;

*Posebni gumbi*

> [Predloži podatke](/docs/guide/common/glossary/glossary-intro#v): upisivanjem **PDV-a** u odgovarajuće polje osobnih podataka i klikom na **Predloži podatke**, sustav će putem web-servisa postaviti upit IT sustavu V.I.E.S. kojim će se provjeriti valjanost i ispravnost PDV subjekta. Ukoliko su podaci ispravni, sustav će automatski predložiti ostale osnovne osobne podatke ispitanika, bez potrebe ručnog unosa. Za daljnje informacije vezane uz sustav V.I.E.S. pogledajte detaljno objašnjenje putem poveznice/linka nasuprot.


### Reference

U odjeljaku **Web Access** moguće je omogućiti pristup aplikaciji putem Internet Explorera, uključivanje šifarnika i dodjeljivanje korisničkog imena i lozinke;

U odjeljku **Kod EDI** možete unijeti kod za prijenos datoteke putem EDI procesa s relevantnim internim brojem dodijeljenim predmetu i mogućnošću da kažete da se kod odnosi na dobavljača.

U odjeljku **Ostali podaci** moguće je unijeti broj kupca, br. reg. vlastiti prijevoz. ili za šifarnike koji se odnose na autoprijevoznike, to je šifra subjekta u upisniku autoprijevoznika; a ako se radi o fizičkoj osobi, datum rođenja.

U odjeljku **Kontakt osobe** možete navesti, za kontakt koji se koristi, popis kontakt osoba prisutnih unutar njega s opisom zauzete uloge i povezanim telefonskim kontaktima i/ili adresama e-pošte. Osim ove funkcije, važno je naglasiti da će se za subjekte koji se prijavljuju u potvrdi o porezu po odbitku prvi redak umetnut u ovaj odjeljak odnositi na reference fizičke osobe koja se iskazuje u ispisu.

U odjeljak **Podkonta u svim tvrtkama** moći ćete vidjeti je li za šifarnik u upotrebi definirana računovodstvena uporaba u drugom poduzeću; u odjeljku ćete tada pronaći popis različitih podračuna dodijeljenih relevantnoj referentnoj tvrtki.


### Sekundarne adrese 

Ovdje je moguće unijeti neke sekundarne adrese koje ovise o pridruženoj *Vrsti adrese* (nisu adrese za dostavu robe za koju je napravljena kartica [Dostava](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) u *Računovodstvenim podacima* i gdje su umetnuti  *Primatelji/Odredišta* kako bi se omogućilo potpuno upravljanje u dokumentu.)

*Primjer*: ako u odjeljak odaberemo tip adrese 'Komercijalni Ured', bit će unesena jedna ili više kontakt osoba za prodajni ured na koji se potvrde narudžbe mogu slati e-poštom. E-pošta mora biti navedena u odjeljku pored odjeljka gdje možete unijeti i kontakt telefon i ostale osobne podatke. U tom slučaju, kada unesete narudžbu, u karticu *Sažetak*, kada odaberete slanje potvrde narudžbe kupcu, otvorit će se ekran s pregledom e-pošte s adresom primatelja koja je već popunjena podacima koji su umetnuti u ovom odjeljku i nećete ga morati svaki put dodavati ručno. Ovisno o vrsti adrese možete odabrati kome ćete slati račune, narudžbe dobavljača i slično.

Stoga obrazac za **sekundarne Adrese** ne dopušta upravljanje podacima u narednim dokumentima aktivnog/pasivnog ciklusa.

Njegova je funkcija, uz moguće jednostavno umetanje sekundarnih adresa (osobito e-maila), ograničena na dvije vrlo korisne **moguće automatizacije**.

- **Upravljanje e-mail adresama u masovnom slanju dokumenata** (prodajnih Faktura, ali i drugih vrsta nakon konfiguracije) putem reda čekanja za otpremu kojim upravlja Bizlink komponenta.

- Upravljanje [Suvlasnicima](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) prodajne fakture.


### Postupak unosa adrese 

Prije unosa detaljnih podataka na desnoj strani obrasca (unutar različitih specifičnih polja), potrebno je unijeti barem jedan redak u odjeljak s lijeve strane koji odgovara vrsti adrese.

**Vrsta adrese**: kod vrste adrese. Kombinirani okvir povezan je s tablicom [Vrste adresa](/docs/configurations/tables/general-settings/address-types) (nalazi se na Početna stranica > Tablice > Opće postavke).

**Adresa**: opis koji odgovara šifri sadržanoj u prethodnom polju.

**Opis**: obavezno polje za spremanje, to je samo dodatni opis za red koji umećete.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image01.png)


Nakon što je umetnut redak s odabranom vrstom adrese, moguće je ispuniti odgovarajuće detaljne podatke.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image02.png)

Moguće je istovremeno unijeti i upravljati s više adresa e-pošte (primjerice, za slanje većem broju primatelja) umetanjem samih adresa u isto polje i odvajanjem točka-zarezom ( ; ).


### Masovno slanje dokumenata putem e-maila 

Za automatsko upravljanje e-mail adresom kod masovnog slanja prodajnih računa (pogledajte i prilog na početku ovog članka) potrebno je koristiti određenu vrstu adrese (koja se može kodirati po želji, sve dok ima, u tablici [Tipovi adrese](/docs/configurations/tables/general-settings/address-types) aktiviranu oznaku **Račun e-pošte = e-pošta računa kupca**).

Također će biti moguće, nakon *konfiguracije*, upravljati masovnim slanjem i na drugim vrstama dokumenata (na primjer opomene za plaćanje itd.), možda povezujući unesenu adresu e-pošte s određenom vrstom adrese koja će se konfigurirati pomoću jedne od drugih oznaka dostupnih u tablici Vrste adresa. U ovom slučaju bit će potrebno definirati i transformaciju/Transformation specifičnog dokumenta i namjenski tijek rada (promjena stanja).

Upravljanje unesenom i kodiranom adresom e-pošte povezivanjem s oznakom *Računa E-pošte. C.* povezan je i s automatskim sastavljanjem pratećeg e-maila (potrebna je instalacija Outlook-a na vašem PC-u) koje se nakon unosa prodajnog računa i pregledavanja ispisa može izvršiti naredbom **Send** (Pdf, Word, itd.)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image03.png)


### Upravljanje zajedničkim računima

U ovom slučaju relevantan podatak je ime suvlasnika. Stoga će za svakog od suvlasnika biti potrebno unijeti redak kako bi se unijeli osobni podaci svakog pojedinog. Ispravna vrsta adrese za pridruživanje u tablici  [Tipovi adrese](/docs/configurations/tables/general-settings/address-types) e [Suvlasnici](/docs/configurations/tables/general-settings/address-types).

Za upravljanje fakturama pogledajte [ovdje](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

Nakon što se unesu **Opće** informacije, specifične informacije bit će unesene u sljedeću karticu  **Podaci knjiženja**.
