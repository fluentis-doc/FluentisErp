---
title: Proizvodni resursi
description: Konfiguracija i upravljanje proizvodnim resursima u Fluentis MES modulu, uključujući opšta podešavanja, izgled, kontrolu kvaliteta i obustave rada.
keywords:
  - Fluentis MES
  - Proizvodni resursi
  - Konfiguracija MES-a
  - Radni centar
  - Uvoz resursa
  - Proizvodne prijave
  - Kontrola kvaliteta MES
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
Proizvodni resursi u Fluentis MES sistemu omogućavaju upravljanje svim parametrima potrebnim za planiranje i optimizaciju proizvodnih aktivnosti. Putem intuitivnog interfejsa korisnici mogu uvoziti različite vrste resursa, uključujući artikle, mašine, zaposlene, radne centre i merne instrumente.
Pored toga, moguće je prilagoditi izgled i ponašanje radnog centra i na taj način sistem jednostavno, brzo i potpuno samostalno prilagoditi specifičnim potrebama preduzeća.
Ova funkcionalnost ne samo da pojednostavljuje upravljanje proizvodnim resursima, već omogućava i jednostavno kopiranje postojećih podešavanja sa drugih resursa, čime se obezbeđuje doslednost i ažurnost podataka.
:::

U ovom prozoru upravlja se svim parametrima vezanim za proizvodne resurse koji se koriste unutar MES sistema.

#### Specifično dugme

- **Uvezi**: omogućava uvoz sledećih vrsta resursa u tabelu **Proizvodni resursi**: *Artikal*, *Mašina*, *Zaposleni*, *Radni centar* i *Merni instrument*. Takođe je moguće odjednom uvesti više resursa jednostavnim odabirom u iskačućem prozoru *Uvezi*.

Ako u tabeli već postoje zapisi i operater odabere zapis određene vrste resursa, prilikom klika na dugme **Uvezi** procedura će automatski filtrirati resurse prema istoj vrsti. Osim toga, sva podešavanja definisana na odabranom resursu (onom koji je već prisutan u tabeli) biće kopirana na nove resurse dodate postupkom uvoza.

### Proizvodni resursi

Forma se sastoji od glavne tabele koja sadrži podatke o unetim resursima, među kojima su:

- **Šifra**: označava šifru proizvodnog resursa;
- **Opis**: označava opis proizvodnog resursa;
- **Vrsta resursa**: određuje vrstu resursa između: *Zaposleni*, *Artikal*, *Mašina*, *Merni instrument* i *Radni centar*;
- **Mašina**: označava šifru mašine povezane sa resursom; dostupno samo ako je *Vrsta resursa* = *Mašina*;
- **Opis mašine**: označava opis mašine povezane sa resursom; dostupno samo ako je *Vrsta resursa* = *Mašina*;
- **Radni centar**: označava šifru radnog centra povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Radni centar*;
- **Opis radnog centra**: označava opis radnog centra povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Radni centar*;
- **Zaposleni**: označava šifru zaposlenog povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Zaposleni*;
- **Prezime**: označava prezime zaposlenog povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Zaposleni*;
- **Ime**: označava ime zaposlenog povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Zaposleni*;
- **Klasa**: označava klasu artikla povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Merni instrument*;
- **Šifra artikla**: označava šifru artikla povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Merni instrument*;
- **Opis artikla**: označava opis artikla povezanog sa resursom; dostupno samo ako je *Vrsta resursa* = *Merni instrument*;
- **Merni instrument**: označava šifru artikla-opreme povezane sa resursom; dostupno samo ako je *Vrsta resursa* = *Merni instrument*;
- **Sekunde osvežavanja**: označava broj sekundi između automatskih osvežavanja MES formi, na primer za osvežavanje podataka na kartici *Analiza* ili za automatsko ažuriranje vremena rada.

Svakom resursu unetom u gornju tabelu pridružene su sve informacije dostupne na karticama prikazanim ispod.

## Opšte

Na ovoj kartici nalaze se informacije koje utiču na ponašanje pojedinačnog proizvodnog resursa tokom *Prijava proizvodnje*.

- **Operater obavezan**: ako je aktivno, operater mora u polje *Resurs* na glavnoj formi *Prijava proizvodnje* uneti resurs tipa *Zaposleni* pre nego što može da nastavi sa ostalim aktivnostima. Taj zaposleni biće evidentiran kao operater koji izvršava prijavu;
- **Lozinka obavezna**: ako je aktivno, operater mora uneti lozinku pre nastavka rada. Lozinke se proveravaju sledećim redosledom: najpre lozinka definisana na formi [Zaposleni](/docs/project-management/registers/employee/new-employee/), a ako ona nije definisana, traži se sistemska lozinka. Ako nijedna od njih nije postavljena, od korisnika će biti zatraženo da unese lozinku.

:::note Napomena
Ako su aktivne obe oznake **Operater obavezan** i **Lozinka obavezna**, operater najpre mora odabrati zaposlenog, a zatim, na zahtev procedure, uneti lozinku.
:::

- **Tim obavezan**: ako je aktivno, omogućava kontrolu koja zahteva da operater pre nastavka rada u prijavi doda barem jednog člana tima;
- **Dozvoli preklopljene prijave**: ako je aktivno, moguće je prijavljivati faze proizvodnog naloga bez poštovanja predviđenog redosleda definisanog u tehnološkom postupku. Ako nije aktivno, nije dozvoljeno preklapanje faza niti prijavljivanje faza van redosleda definisanog u ciklusu rada;
- **Omogući više faza**: ako je aktivno, omogućava istovremenu prijavu više faza.
  U tom slučaju vreme se raspodeljuje između faza na sledeći način:

  Ako je prijavljena količina (proizvedena ili škartirana), vreme za svaku fazu računa se prema formuli:
  **(Prijavljeno vreme / ukupna količina (proizvedena + škartirana)) × prijavljena količina (proizvedena + škartirana) pojedinačne faze = Vreme faze**

  Ako nije prijavljena količina, već samo vreme, tada se koristi formula:

**Prijavljeno vreme / broj faza = Vreme faze**

- **Maksimalan broj faza**: određuje najveći broj faza koje je moguće prijaviti istovremeno;
- **Ručni unos vremena**: ako je aktivno, omogućava operateru ručni unos radnog vremena;
- **Predloženo vreme**: ako je aktivno, radno vreme se automatski predlaže;
- **Metoda raspodele količine**: određuje način raspodele količine kod istovremene prijave više faza rada. Dostupne metode su:
  - **Sekvenca**: količina se raspodeljuje među fazama prema planiranom redosledu ili redosledu unosa;
  - **Proporcionalno**: količina se raspodeljuje proporcionalno prema prijavljenoj proizvedenoj količini i planiranim količinama pojedinačnih faza;
  - **Ručno**: omogućava ručni unos proizvedene količine za svaku pojedinačnu fazu;

- **Sekunde osvežavanja**: određuju interval automatskog osvežavanja forme. Ako vrednost nije definisana, forma će se osvežavati isključivo ručno od strane operatera;
- **Obavezna prijava količine materijala**: ako je aktivno, zajedno sa oznakom **Obavezna ručna prijava materijala** definisanom u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla, uzrokuje da se na kartici *Materijali* u *Prijavama proizvodnje* artikal predlaže sa količinom nula. Korisnik tada mora ručno uneti količinu pre nego što može da nastavi;
- **Obavezan radni list**: ako je aktivno, omogućava kontrolu koja sprečava operatera da doda fazu za koju nije aktivirana oznaka *Konačna štampa*. Oznaka *Konačna štampa* može se aktivirati kroz proceduru štampe [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet);
- **Obavezna štampa etiketa**: ako je aktivno, omogućava kontrolu koja primorava operatera da odštampa sve etikete pre nastavka prijave;
- **Obavezan unos greške kod škarta**: ako je aktivno, omogućava kontrolu koja zahteva unos vrste greške kada se prijavljuje škartirana količina;
- **Automatsko knjiženje**: ako je aktivno, automatski kreira skladišno knjiženje nakon potvrde prijave;
- **Uvezi sve faze zadatka (task)**: ako je aktivno, istoimena oznaka u *pregledu faza* na kartici *Proizvodnja* unutar MES-a biće uključena prema podrazumevanim podešavanjima. Na taj način, kada korisnik odabere i doda jednu fazu koja pripada određenom *tasku*, automatski se dodaju i sve ostale faze tog *taska*;
- **Radni centar sa više resursa**: ako je aktivno, fazu rada koju prijavi resurs tipa *Zaposleni* može završiti isključivo isti taj zaposleni. Ako je potrebno promeniti zaposlenog, fazu je potrebno *Suspendovati* koristeći razlog sa oznakom [Blokada predloga faze u M.E.S.-u](/docs/configurations/tables/production/interruption-reasons), zatim je ponovo odabrati putem dugmeta **Odaberi nove faze** i izvršiti prijavu nastavka rada sa drugim zaposlenim.

### Upravljanje dokumentima

- **Vrsta izvora dokumenta za isključenje**: ova tabela povezana je sa karticom *Dokumenti i radna uputstva* u Fluentis MES-u i omogućava definisanje vrsta dokumenata koje treba isključiti iz prikaza. Dokumenti povezani sa odabranim vrstama neće biti prikazani na kartici *Dokumenti i radna uputstva*.

Vrste dokumenata koje je moguće isključiti:

- **Nijedna**: nijedna vrsta dokumenta nije isključena;
- **Artikal**: svi dokumenti (datoteke, slike i sl.) povezani sa artiklom neće biti prikazani na kartici *Dokumenti i radna uputstva*;
- **Narudžba kupca**: svi dokumenti povezani sa narudžbom kupca neće biti prikazani;
- **Proizvodni nalog (komesa)**: svi dokumenti povezani sa proizvodnim nalogom neće biti prikazani;
- **Proizvodni nalog**: svi dokumenti povezani sa proizvodnim nalogom neće biti prikazani;
- **Faza proizvodnog naloga**: svi dokumenti povezani sa pojedinačnom fazom proizvodnog naloga (na kartici *Priloženi dokumenti* faze) neće biti prikazani na kartici *Dokumenti i radna uputstva*.

### Kontrola kvaliteta

Sadrži skup podešavanja povezanih sa karticom *Kontrola kvaliteta* u Fluentis MES-u.

- **Vrsta kontrole koja se koristi**: definiše vrstu dokumenta kontrole artikala u koju će se čuvati izmerene vrednosti;
- **Nivo detalja artikla za kontrolu**: određuje najveći nivo detalja artikla koji se uzima u obzir tokom ispitivanja (*Nema*, *Lot*, *Serijski broj*, *Jedinica pakovanja (UDC)*);
- **Fazu je moguće blokirati**: kod prve neusaglašene vrednosti ili neusaglašenog proseka izmerenih vrednosti, trenutna faza i sve naredne faze biće blokirane sve dok ih ovlašćeni operater ne odblokira. U tom slučaju koristi se **Razlog suspenzije zbog blokade faze** definisan u odgovarajućoj sekciji razloga suspenzije.

### Razlozi suspenzije

- **Razlozi suspenzije za isključenje**: u ovoj tabeli moguće je definisati sve razloge suspenzije koji se neće prikazivati unutar Fluentis MES-a;
- **Predloženi razlog suspenzije**: određuje razlog suspenzije koji će se koristiti prema podrazumevanim podešavanjima kada operater kreira suspenziju bez odabira razloga u odgovarajućem polju na kartici *Proizvodnja* u Fluentis MES-u;
- **Automatski prekid**: ako je aktivirano, omogućava automatsko kreiranje prekida prijava prema radnom vremenu definisanom za radni centar;
- **Razlog suspenzije za noćnu pauzu**: određuje razlog suspenzije koji se koristi za automatsko kreiranje suspenzije tokom noćne pauze;
- **Razlog suspenzije za pauzu za ručak**: određuje razlog suspenzije koji se koristi za automatsko kreiranje suspenzije tokom pauze za ručak;
- **Razlog suspenzije za blokadu faze**: određuje razlog suspenzije koji se koristi za blokiranje faza u slučaju neusaglašenosti tokom kontrola kvaliteta.

:::note Napomena
Ako se aktivnost suspenduje korišćenjem [Razloga suspenzije](/docs/production/mes/production-resources/) koji ima uključenu oznaku *Blokiraj predlog faze u M.E.S.-u*, prilikom sledećeg automatskog predlaganja faza za radni centar suspendovana faza neće biti prikazana. Za nastavak rada na toj fazi potrebno ju je ponovo odabrati putem dugmeta **Odaberi nove faze** i izvršiti prijavu nastavka rada.
:::

---

## Izgled

#### Specifična dugmad

- **Potpuni izgled**: jednim klikom aktivira potpuni prikaz MES interfejsa;
- **Minimalni izgled**: jednim klikom aktivira minimalni prikaz MES interfejsa.

Na ovoj kartici nalaze se podešavanja koja utiču na izgled proizvodnog resursa tokom *Prijava proizvodnje*.

- **Redosled kartica**  
  Ova sekcija omogućava definisanje vidljivosti pojedinačnih kartica i promenu njihovog redosleda.
- **Ne prikazuj**  
  Ova sekcija omogućava skrivanje različitih informacija koje nisu potrebne unutar Fluentis MES-a.

### Opšte

- **Task/Grupa**: ako je aktivno, skrivaju se informacije vezane za task/grupu;
- **Sekvenca**: ako je aktivno, skrivaju se informacije vezane za sekvencu;
- **Podfaza**: ako je aktivno, skrivaju se informacije vezane za podfazu;
- **Radni centar**: ako je aktivno, skrivaju se informacije vezane za radni centar;
- **Mašina**: ako je aktivno, skrivaju se informacije vezane za mašinu;
- **Grupa radne snage**: ako je aktivno, skrivaju se informacije vezane za grupu radne snage;
- **Planirani datumi**: ako je aktivno, skrivaju se informacije vezane za planirane datume;
- **Varijanta**: ako je aktivno, skrivaju se informacije vezane za varijantu;
- **Proizvodni nalog**: ako je aktivno, skrivaju se informacije vezane za proizvodni nalog;
- **Proizvodni nalog (komesa)**: ako je aktivno, skrivaju se informacije vezane za proizvodni nalog;
- **Projekat**: ako je aktivno, skrivaju se informacije vezane za projekat;
- **Lotovi**: ako je aktivno, skrivaju se informacije vezane za upravljanje lotovima;
- **Serijski brojevi**: ako je aktivno, skrivaju se informacije vezane za upravljanje serijskim brojevima;
- **Jedinice pakovanja (UDC)**: ako je aktivno, skrivaju se informacije vezane za upravljanje jedinicama pakovanja.

### Proizvedeni artikli

- **Skladište prijema**: ako je aktivno, skrivaju se informacije vezane za skladište prijema proizvedenih artikala na kartici *Proizvodnja*;
- **Predložak prijema**: ako je aktivno, skrivaju se informacije vezane za predložak prijema proizvedenih artikala na kartici *Proizvodnja*;
- **Lokacija prijema**: ako je aktivno, skrivaju se informacije vezane za lokaciju prijema proizvedenih artikala na kartici *Proizvodnja*;
- **Skladište prijema škarta**: ako je aktivno, skrivaju se informacije vezane za skladište prijema škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Predložak prijema škarta**: ako je aktivno, skrivaju se informacije vezane za predložak prijema škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Lokacija prijema škarta**: ako je aktivno, skrivaju se informacije vezane za lokaciju prijema škartiranih proizvedenih artikala na kartici *Proizvodnja*;
- **Alternativna količina**: ako je aktivno, skrivaju se informacije vezane za upravljanje alternativnom količinom.

### Materijali

- **Skladište izdavanja**: ako je aktivno, skrivaju se informacije vezane za skladište izdavanja materijala na kartici *Materijali*;
- **Predložak izdavanja**: ako je aktivno, skrivaju se informacije vezane za predložak izdavanja materijala na kartici *Materijali*;
- **Skladište škarta**: ako je aktivno, skrivaju se informacije vezane za skladište škarta materijala na kartici *Materijali*;
- **Predložak škarta**: ako je aktivno, skrivaju se informacije vezane za predložak škarta materijala na kartici *Materijali*.

### Kontrola kvaliteta

- **Sekvenca**: ako je aktivno, skrivaju se informacije vezane za sekvencu na kartici *Kontrola kvaliteta*;
- **Vrsta ispitivanja**: ako je aktivno, skrivaju se informacije vezane za vrstu ispitivanja na kartici *Kontrola kvaliteta*;
- **Mjerni instrumenti**: ako je aktivno, skrivaju se informacije vezane za kategoriju mjernog instrumenta i mjerne instrumente na kartici *Kontrola kvaliteta*;
- **Granice tolerancije**: ako je aktivno, skrivaju se informacije vezane za granice tolerancije (*Min. granica (tol-)*, *Min. granica (tol+)*, *Maks. granica (tol-)* i *Maks. granica (tol+)*) na kartici *Kontrola kvaliteta*;
- **Vrsta kontrole i učestalost**: ako je aktivno, skrivaju se informacije vezane za vrstu kontrole ispitivanja i učestalost na kartici *Kontrola kvaliteta*;
- **Skladište**: ako je aktivno, skrivaju se informacije vezane za skladište na kartici *Kontrola kvaliteta*;
- **Predložak**: ako je aktivno, skrivaju se informacije vezane za skladišni predložak za neusaglašene artikle na kartici *Kontrola kvaliteta*.

### Ostalo

#### Proizvodnja

- **Widget mašina**: ako je aktivno, skrivaju se informacije vezane za mašinu na kartici *Proizvodnja*;
- **Greška**: ako je aktivno, skrivaju se informacije vezane za grešku na kartici *Proizvodnja*;
- **Razlog suspenzije**: ako je aktivno, skrivaju se informacije vezane za razlog suspenzije na kartici *Proizvodnja*.

#### Tim

- **Neaktivni operateri**: ako je aktivno, skriva se tabela *Popis neaktivnih operatera* na kartici *Tim*.

#### Beleške

- **Popis beleški**: ako je aktivno, skriva se tabela *Dokumenti priloženi prijavi odabrane faze* na kartici *Dokumenti i radne upute*, odnosno na kartici *Beleške*.

#### Analiza

- **OEE**: ako je aktivno, skrivaju se OEE grafikoni na kartici *Analiza*;
- **Grafikoni**: ako je aktivno, skrivaju se stubičasti grafikoni (*Analiza količina* i *Analiza vremena*) na kartici *Analiza*;
- **Tabele**: ako je aktivno, skrivaju se tabele (*Vrijednosti količina* i *Vrijednosti vremena*) na kartici *Analiza*.

#### Extra Data

- **Popis dodatnih podataka**: ako je aktivno, skriva se tabela *Popis dodatnih podataka (odaberite fazu)* na kartici *Dodatni podaci*.

# Sažetak i dodatne informacije

Ova stranica opisuje kompletnu konfiguraciju *Proizvodnih resursa* u Fluentis MES-u, uključujući:

- uvoz resursa;
- opšte parametre i rad sa više faza;
- upravljanje dokumentima;
- kontrolu kvaliteta;
- razloge suspenzije;
- prilagodljiv izgled korisničkog interfejsa.

Za dodatne informacije pogledajte:

- [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common)
- [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Zaposleni](/docs/project-management/registers/employee/new-employee/)
- [Radni list](/docs/production/pp-production-in-progress/reports/worksheet)