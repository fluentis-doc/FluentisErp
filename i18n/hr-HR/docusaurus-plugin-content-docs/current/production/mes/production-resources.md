---
title: Proizvodni resursi
description: Konfiguracija i upravljanje proizvodnim resursima u Fluentis MES modulu, uključujući opće postavke, izgled, kontrolu kvalitete i obustave rada.
keywords:
  - Fluentis MES
  - Proizvodni resursi
  - Konfiguracija MES-a
  - Radni centar
  - Uvoz resursa
  - Proizvodne prijave
  - Kontrola kvalitete MES
sidebar_position: 4
schema: TechArticle
tags:
  - MES
  - Proizvodnja
  - Konfiguracija
  - Fluentis
last_update:
  author: Fluentis Documentation Team
---

# Proizvodni resursi

:::important Čemu služi
Proizvodni resursi u Fluentis MES sustavu omogućuju upravljanje svim parametrima potrebnima za planiranje i optimizaciju proizvodnih aktivnosti. Putem intuitivnog sučelja korisnici mogu uvoziti različite vrste resursa, uključujući artikle, strojeve, zaposlenike, radne centre i mjerne instrumente.
Osim toga, moguće je prilagoditi izgled i ponašanje radnog centra te tako sustav jednostavno, brzo i potpuno samostalno prilagoditi specifičnim potrebama poduzeća.
Ova funkcionalnost ne samo da pojednostavljuje upravljanje proizvodnim resursima, već omogućuje i jednostavno kopiranje postojećih postavki s drugih resursa, čime se osigurava dosljednost i ažurnost podataka.
:::

U ovom se prozoru upravlja svim parametrima vezanima uz proizvodne resurse koji se koriste unutar MES sustava.

#### Specifični gumb

- **Uvezi**: omogućuje uvoz sljedećih vrsta resursa u tablicu **Proizvodni resursi**: *Artikl*, *Stroj*, *Zaposlenik*, *Radni centar* i *Mjerni instrument*. Također je moguće odjednom uvesti više resursa jednostavnim odabirom u skočnom prozoru *Uvezi*.  
Ako u tablici već postoje zapisi te operater odabere zapis određene vrste resursa, prilikom klika na gumb **Uvezi** procedura će automatski filtrirati resurse prema istoj vrsti. Osim toga, sve postavke definirane na odabranom resursu (onom koji je već prisutan u tablici) bit će kopirane na nove resurse dodane postupkom uvoza.

### Proizvodni resursi

Forma se sastoji od glavne tablice koja sadrži podatke o unesenim resursima, među kojima su:

- **Šifra**: označava šifru proizvodnog resursa;
- **Opis**: označava opis proizvodnog resursa;
- **Vrsta resursa**: određuje vrstu resursa između: *Zaposlenik*, *Artikl*, *Stroj*, *Mjerni instrument* i *Radni centar*;
- **Stroj**: označava šifru stroja povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Stroj*;
- **Opis stroja**: označava opis stroja povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Stroj*;
- **Radni centar**: označava šifru radnog centra povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Radni centar*;
- **Opis radnog centra**: označava opis radnog centra povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Radni centar*;
- **Zaposlenik**: označava šifru zaposlenika povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Zaposlenik*;
- **Prezime**: označava prezime zaposlenika povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Zaposlenik*;
- **Ime**: označava ime zaposlenika povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Zaposlenik*;
- **Klasa**: označava klasu artikla povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Mjerni instrument*;
- **Šifra artikla**: označava šifru artikla povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Mjerni instrument*;
- **Opis artikla**: označava opis artikla povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Mjerni instrument*;
- **Mjerni instrument**: označava šifru artikla-opreme povezanog s resursom; dostupno samo ako je *Vrsta resursa* = *Mjerni instrument*;
- **Sekunde osvježavanja**: označava broj sekundi između automatskih osvježavanja MES formi, primjerice za osvježavanje podataka na kartici *Analiza* ili za automatsko ažuriranje vremena rada.

Svakom resursu unesenom u gornju tablicu pridružene su sve informacije dostupne na karticama prikazanim ispod.

## Općenito

Na ovoj kartici nalaze se informacije koje utječu na ponašanje pojedinog proizvodnog resursa tijekom *Prijava proizvodnje*.

- **Operater obavezan**: ako je aktivno, operater mora u polje *Resurs* na glavnoj formi *Prijava proizvodnje* unijeti resurs tipa *Zaposlenik* prije nego što može nastaviti s ostalim aktivnostima. Taj zaposlenik bit će evidentiran kao operater koji izvršava prijavu;
- **Lozinka obavezna**: ako je aktivno, operater mora unijeti lozinku prije nastavka rada. Lozinke se provjeravaju sljedećim redoslijedom: najprije lozinka definirana na formi [Zaposlenik](/docs/project-management/registers/employee/new-employee/), a ako ona nije definirana, traži se sistemska lozinka. Ako nijedna od njih nije postavljena, korisnik će biti zatražen da unese lozinku.

:::note Napomena
Ako su aktivne obje oznake **Operater obavezan** i **Lozinka obavezna**, operater najprije mora odabrati zaposlenika, a zatim, na zahtjev procedure, unijeti lozinku.
:::

- **Tim obavezan**: ako je aktivno, omogućuje kontrolu koja zahtijeva da operater prije nastavka rada u prijavi doda barem jednog člana tima;
- **Dopusti preklopljene prijave**: ako je aktivno, moguće je prijavljivati faze proizvodnog naloga bez poštivanja predviđenog redoslijeda definiranog u tehnološkom postupku. Ako nije aktivno, nije dopušteno preklapanje faza niti prijavljivanje faza izvan redoslijeda definiranog u ciklusu rada;
- **Omogući više faza**: ako je aktivno, omogućuje istovremenu prijavu više faza.

  U tom slučaju vrijeme se raspodjeljuje između faza na sljedeći način:
  Ako je prijavljena količina (proizvedena ili škartirana), vrijeme za svaku fazu računa se prema formuli:

  **(Prijavljeno vrijeme / ukupna količina (proizvedena + škartirana)) × prijavljena količina (proizvedena + škartirana) pojedine faze = Vrijeme faze**

  Ako nije prijavljena količina, već samo vrijeme, tada se koristi formula:

  **Prijavljeno vrijeme / broj faza = Vrijeme faze**

- **Maksimalan broj faza**: određuje najveći broj faza koje je moguće prijaviti istovremeno;
- **Ručni unos vremena**: ako je aktivno, omogućuje operateru ručni unos radnog vremena;
- **Predloženo vrijeme**: ako je aktivno, radno vrijeme se automatski predlaže;
- **Metoda raspodjele količine**: određuje način raspodjele količine kod istovremene prijave više faza rada. Dostupne metode su:
  - **Sekvenca**: količina se raspodjeljuje među fazama prema planiranom redoslijedu ili redoslijedu unosa;
  - **Proporcionalno**: količina se raspodjeljuje proporcionalno prema prijavljenoj proizvedenoj količini i planiranim količinama pojedinih faza;
  - **Ručno**: omogućuje ručni unos proizvedene količine za svaku pojedinu fazu;

- **Sekunde osvježavanja**: određuju interval automatskog osvježavanja forme. Ako vrijednost nije definirana, forma će se osvježavati isključivo ručno od strane operatera;
- **Obavezna prijava količine materijala**: ako je aktivno, zajedno s oznakom **Obavezna ručna prijava materijala** definiranoj u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla, uzrokuje da se na kartici *Materijali* u *Prijavama proizvodnje* artikl predlaže s količinom nula. Korisnik tada mora ručno unijeti količinu prije nego što može nastaviti;
- **Obavezan radni list**: ako je aktivno, omogućuje kontrolu koja sprječava operatera da doda fazu za koju nije aktivirana oznaka *Konačni ispis*. Oznaka *Konačni ispis* može se aktivirati kroz proceduru ispisa [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet);
- **Obavezan ispis etiketa**: ako je aktivno, omogućuje kontrolu koja prisiljava operatera da ispiše sve etikete prije nastavka prijave;
- **Obavezan unos greške kod škarta**: ako je aktivno, omogućuje kontrolu koja zahtijeva unos vrste greške kada se prijavljuje škartirana količina;
- **Automatsko knjiženje**: ako je aktivno, automatski kreira skladišno knjiženje nakon potvrde prijave;
- **Uvezi sve faze zadatka (task)**: ako je aktivno, istoimena oznaka u *pregledu faza* na kartici *Proizvodnja* unutar MES-a bit će uključena prema zadanim postavkama. Na taj način, kada korisnik odabere i doda jednu fazu koja pripada određenom *tasku*, automatski se dodaju i sve ostale faze tog *taska*;
- **Radni centar s više resursa**: ako je aktivno, fazu rada koju prijavi resurs tipa *Zaposlenik* može završiti isključivo isti taj zaposlenik. Ako je potrebno promijeniti zaposlenika, fazu je potrebno *Suspendirati* koristeći razlog s oznakom [Blokada prijedloga faze u M.E.S.-u](/docs/configurations/tables/production/interruption-reasons), zatim je ponovno odabrati putem gumba **Odaberi nove faze** i izvršiti prijavu nastavka rada s drugim zaposlenikom.

### Upravljanje dokumentima

- **Vrsta izvora dokumenta za isključenje**: ova tablica povezana je s karticom *Dokumenti i radne upute* u Fluentis MES-u te omogućuje definiranje vrsta dokumenata koje treba isključiti iz prikaza. Dokumenti povezani s odabranim vrstama neće biti prikazani na kartici *Dokumenti i radne upute*.

Vrste dokumenata koje je moguće isključiti:

- **Nijedna**: nijedna vrsta dokumenta nije isključena;
- **Artikl**: svi dokumenti (datoteke, slike i sl.) povezani s artiklom neće biti prikazani na kartici *Dokumenti i radne upute*;
- **Narudžba kupca**: svi dokumenti povezani s narudžbom kupca neće biti prikazani;
- **Proizvodni nalog (komesa)**: svi dokumenti povezani s proizvodnim nalogom neće biti prikazani;
- **Proizvodni nalog**: svi dokumenti povezani s proizvodnim nalogom neće biti prikazani;
- **Faza proizvodnog naloga**: svi dokumenti povezani s pojedinom fazom proizvodnog naloga (na kartici *Priloženi dokumenti* faze) neće biti prikazani na kartici *Dokumenti i radne upute*.

### Kontrola kvalitete

Sadrži skup postavki povezanih s karticom *Kontrola kvalitete* u Fluentis MES-u.
- **Vrsta kontrole koja se koristi**: definira vrstu dokumenta kontrole artikala u koju će se spremati izmjerene vrijednosti;
- **Razina detalja artikla za kontrolu**: određuje najveću razinu detalja artikla koja se uzima u obzir tijekom ispitivanja (*Nema*, *Lot*, *Serijski broj*, *Jedinica pakiranja (UDC)*);
- **Fazu je moguće blokirati**: kod prve nesukladne vrijednosti ili nesukladnog prosjeka izmjerenih vrijednosti, trenutna faza i sve sljedeće faze bit će blokirane sve dok ih ovlašteni operater ne odblokira. U tom slučaju koristi se **Razlog suspenzije zbog blokade faze** definiran u odgovarajućoj sekciji razloga suspenzije.

### Razlozi suspenzije

- **Razlozi suspenzije za isključenje**: u ovoj tablici moguće je definirati sve razloge suspenzije koji se neće prikazivati unutar Fluentis MES-a;
- **Predloženi razlog suspenzije**: određuje razlog suspenzije koji će se koristiti prema zadanim postavkama kada operater kreira suspenziju bez odabira razloga u odgovarajućem polju na kartici *Proizvodnja* u Fluentis MES-u;
- **Automatski prekid**: ako je aktivirano, omogućuje automatsko kreiranje prekida prijava prema radnom vremenu definiranom za radni centar;
- **Razlog suspenzije za noćnu pauzu**: određuje razlog suspenzije koji se koristi za automatsko kreiranje suspenzije tijekom noćne stanke;
- **Razlog suspenzije za pauzu za ručak**: određuje razlog suspenzije koji se koristi za automatsko kreiranje suspenzije tijekom pauze za ručak;
- **Razlog suspenzije za blokadu faze**: određuje razlog suspenzije koji se koristi za blokiranje faza u slučaju nesukladnosti tijekom kontrola kvalitete.

:::note Napomena
Ako se aktivnost suspendira korištenjem [Razloga suspenzije](/docs/production/mes/production-resources/) koji ima uključenu oznaku *Blokiraj prijedlog faze u M.E.S.-u*, prilikom sljedećeg automatskog predlaganja faza za radni centar suspendirana faza neće biti prikazana. Za nastavak rada na toj fazi potrebno ju je ponovno odabrati putem gumba **Odaberi nove faze** te izvršiti prijavu nastavka rada.
:::

---

## Izgled

#### Specifični gumbi
- **Potpuni izgled**: jednim klikom aktivira potpuni prikaz MES sučelja;
- **Minimalni izgled**: jednim klikom aktivira minimalni prikaz MES sučelja.

Na ovoj kartici nalaze se postavke koje utječu na izgled proizvodnog resursa tijekom *Prijava proizvodnje*.
- **Redoslijed kartica**  
  Ova sekcija omogućuje definiranje vidljivosti pojedinih kartica te promjenu njihovog redoslijeda.
- **Ne prikazuj**  
  Ova sekcija omogućuje skrivanje različitih informacija koje nisu potrebne unutar Fluentis MES-a.

### Općenito

- **Task/Grupa**: ako je aktivno, skrivaju se informacije vezane uz task/grupu;
- **Sekvenca**: ako je aktivno, skrivaju se informacije vezane uz sekvencu;
- **Podfaza**: ako je aktivno, skrivaju se informacije vezane uz podfazu;
- **Radni centar**: ako je aktivno, skrivaju se informacije vezane uz radni centar;
- **Stroj**: ako je aktivno, skrivaju se informacije vezane uz stroj;
- **Grupa radne snage**: ako je aktivno, skrivaju se informacije vezane uz grupu radne snage;
- **Planirani datumi**: ako je aktivno, skrivaju se informacije vezane uz planirane datume;
- **Varijanta**: ako je aktivno, skrivaju se informacije vezane uz varijantu;
- **Proizvodni nalog**: ako je aktivno, skrivaju se informacije vezane uz proizvodni nalog;
- **Proizvodni nalog (komesa)**: ako je aktivno, skrivaju se informacije vezane uz proizvodni nalog;
- **Projekt**: ako je aktivno, skrivaju se informacije vezane uz projekt;
- **Lotovi**: ako je aktivno, skrivaju se informacije vezane uz upravljanje lotovima;
- **Serijski brojevi**: ako je aktivno, skrivaju se informacije vezane uz upravljanje serijskim brojevima;
- **Jedinice pakiranja (UDC)**: ako je aktivno, skrivaju se informacije vezane uz upravljanje jedinicama pakiranja.

### Proizvedeni artikli

- **Skladište zaprimanja**: ako je aktivno, skrivaju se informacije vezane uz skladište zaprimanja proizvedenih artikala na kartici *Proizvodnja*;
- **Predložak zaprimanja**: ako je aktivno, skrivaju se informacije vezane uz predložak zaprimanja proizvedenih artikala na kartici *Proizvodnja*;
- **Lokacija zaprimanja**: ako je aktivno, skrivaju se informacije vezane uz lokaciju zaprimanja proizvedenih artikala na kartici *Proizvodnja*;
- **Skladište zaprimanja škarta**: ako je aktivno, skrivaju se informacije vezane uz skladište zaprimanja škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Predložak zaprimanja škarta**: ako je aktivno, skrivaju se informacije vezane uz predložak zaprimanja škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Lokacija zaprimanja škarta**: ako je aktivno, skrivaju se informacije vezane uz lokaciju zaprimanja škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Alternativna količina**: ako je aktivno, skrivaju se informacije vezane uz upravljanje alternativnom količinom.

### Materijali

- **Skladište izdavanja**: ako je aktivno, skrivaju se informacije vezane uz skladište izdavanja materijala na kartici *Materijali*;
- **Predložak izdavanja**: ako je aktivno, skrivaju se informacije vezane uz predložak izdavanja materijala na kartici *Materijali*;
- **Skladište škarta**: ako je aktivno, skrivaju se informacije vezane uz skladište škarta materijala na kartici *Materijali*;
- **Predložak škarta**: ako je aktivno, skrivaju se informacije vezane uz predložak škarta materijala na kartici *Materijali*.

### Kontrola kvalitete

- **Sekvenca**: ako je aktivno, skrivaju se informacije vezane uz sekvencu na kartici *Kontrola kvalitete*;
- **Vrsta ispitivanja**: ako je aktivno, skrivaju se informacije vezane uz vrstu ispitivanja na kartici *Kontrola kvalitete*;
- **Mjerni instrumenti**: ako je aktivno, skrivaju se informacije vezane uz kategoriju mjernog instrumenta i mjerne instrumente na kartici *Kontrola kvalitete*;
- **Granice tolerancije**: ako je aktivno, skrivaju se informacije vezane uz granice tolerancije (*Min. granica (tol-)*, *Min. granica (tol+)*, *Max. granica (tol-)* i *Max. granica (tol+)*) na kartici *Kontrola kvalitete*;
- **Vrsta kontrole i učestalost**: ako je aktivno, skrivaju se informacije vezane uz vrstu kontrole ispitivanja i učestalost na kartici *Kontrola kvalitete*;
- **Skladište**: ako je aktivno, skrivaju se informacije vezane uz skladište na kartici *Kontrola kvalitete*;
- **Predložak**: ako je aktivno, skrivaju se informacije vezane uz skladišni predložak za nesukladne artikle na kartici *Kontrola kvalitete*.

### Ostalo

#### Proizvodnja

- **Widget stroj**: ako je aktivno, skrivaju se informacije vezane uz stroj na kartici *Proizvodnja*;
- **Greška**: ako je aktivno, skrivaju se informacije vezane uz grešku na kartici *Proizvodnja*;
- **Razlog suspenzije**: ako je aktivno, skrivaju se informacije vezane uz razlog suspenzije na kartici *Proizvodnja*.

#### Tim

- **Neaktivni operateri**: ako je aktivno, skriva se tablica *Popis neaktivnih operatera* na kartici *Tim*.

#### Bilješke

- **Popis bilješki**: ako je aktivno, skriva se tablica *Dokumenti priloženi prijavi odabrane faze* na kartici *Dokumenti i radne upute*, odnosno na kartici *Bilješke*.

#### Analiza

- **OEE**: ako je aktivno, skrivaju se OEE grafovi na kartici *Analiza*;
- **Grafovi**: ako je aktivno, skrivaju se stupčasti grafovi (*Analiza količina* i *Analiza vremena*) na kartici *Analiza*;
- **Tablice**: ako je aktivno, skrivaju se tablice (*Vrijednosti količina* i *Vrijednosti vremena*) na kartici *Analiza*.

#### Extra Data

- **Popis dodatnih podataka**: ako je aktivno, skriva se tablica *Popis dodatnih podataka (odaberite fazu)* na kartici *Dodatni podaci*.

# Sažetak i dodatne informacije

Ova stranica opisuje potpunu konfiguraciju *Proizvodnih resursa* u Fluentis MES-u, uključujući:

- uvoz resursa;
- opće parametre i rad s više faza;
- upravljanje dokumentima;
- kontrolu kvalitete;
- razloge suspenzije;
- prilagodljiv izgled korisničkog sučelja.

Za dodatne informacije pogledajte:

- [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common)
- [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Zaposlenik](/docs/project-management/registers/employee/new-employee/)
- [Radni list](/docs/production/pp-production-in-progress/reports/worksheet)

