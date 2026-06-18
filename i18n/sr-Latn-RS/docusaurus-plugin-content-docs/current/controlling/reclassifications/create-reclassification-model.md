---
title: Kreiranje modela reklasifikacije
sidebar_position: 2
---

:::note Putanja
**Kontroling > Reklasifikacije > Šeme reklasifikacije > Kreiranje modela reklasifikacije**

NAPOMENA:

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničko funkcionisanje obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).

:::

---

### UNOS NOVOG MODELA – ZAGLAVLJE

Modeli reklasifikacije predstavljaju zajedničke elemente za sva preduzeća učitana u istu bazu podataka: struktura reklasifikacije biće vidljiva u svim preduzećima, dok će za svako pojedinačno preduzeće biti definisana sopstvena dodela kontnog plana (CDC/CDP itd.) različitim modelima. Na taj način moguće je kreirati i konsolidovanu reklasifikaciju za grupu preduzeća.

:::tip NAPOMENA
Modeli su zajednički za sva preduzeća ili za sva preduzeća iste geografske lokacije dodeljene *tipu reklasifikacije* putem svojstva *Država*.
:::

Elementi potrebni za kreiranje novog modela su:

- **Tip reklasifikacije**

- **Šifra modela** (alfanumerička, do 10 karaktera)

- **Opis** modela

- **Obrtanje znaka izabranog čvora**, opcija dostupna samo za tipove reklasifikacija povezane sa *Kontrolingom*, koja omogućava prisilno invertovanje znaka (+/-) na svim čvorovima modela

- **Indeks u apsolutnoj vrednosti**, dostupan samo za tipove reklasifikacija povezane sa *Kontrolingom*, određuje da se procentualni indeksi obračunavaju u apsolutnoj vrednosti

Nakon unosa ovih vrednosti aktiviraju se različita dugmad za definisanje strukture reklasifikacije: pomoću dugmeta **Ubaci korenski čvor** kreiraju se prvi nivoi strukture, dok se pomoću dugmeta **Ubaci čvor** dodaju *podnivoi* trenutno izabranom čvoru.

Svaki nivo strukture definiše se pomoću šifre (alfanumerička, do 8 karaktera) i opisa. Jedinstvenost se u ovom slučaju određuje kombinacijom šifre i opisa zajedno (na primer, u EU reklasifikaciji mogu postojati različiti nivoi označeni slovom „A“ u različitim delovima modela, ali sa različitim opisima). U nastavku su detaljno opisani tipovi nivoa koje je moguće dodeliti, uz napomenu da je brisanje nivoa dozvoljeno samo ukoliko nisu korišćeni u formulama.

### ALATI NA TRAKI SA OPCIJAMA

1. Forma za **pretragu podkonta koji nedostaju** omogućava pretragu i ispis podkonta koji nisu uneti ni na jednom mestu u modelu reklasifikacije. U filterima pretrage dostupne su opcije:

   - *Prikaži konta sa isteklim rokom važenja*
   - *Prikaži konta koja nisu korišćena u pregledu centara troškova*
   - *Prikaži konta koja nisu korišćena u pregledu konta*

   Poslednje dve opcije omogućavaju definisanje pretrage u čvorovima tipa *Centri troškova* ili *Podkonta*.

   Ukoliko je uneto opšte konto, njegova podkonta neće biti prikazana, čak i ako nisu posebno unesena u model.

2. Forma za pretragu **višestruko unetih podkonta** omogućava pretragu i ispis liste podkonta koji su uneti na više mesta u modelu, uzimajući u obzir samo čvorove konta ili čvorove centara putem sledećih opcija:

   - *Prikaži duplirano konto u pregledu centara troškova*
   - *Prikaži duplirano konto u pregledu konta*

   Ukoliko su opšte konto i njegovo podkonto uneseni istovremeno, biće prikazani jer se smatraju i zbirnim iznosom i detaljem.

   ## POLJA ZAGLAVLJA

**Tip čvora** predstavlja vrstu retka unutar modela reklasifikacije. Dostupne su sljedeće vrste:

- ***Podkonta***, namijenjena valorizaciji podataka iz glavne knjige prema strukturi kontnog plana poduzeća.

- ***Centri troškova***, namijenjeni valorizaciji analitičkih podataka. Ako je model povezan s kontrolingom, bit će dostupne dodatne specifične funkcionalnosti.

- ***Centri profita*** (samo ako poduzeće nema aktiviran kontroling), namijenjeni valorizaciji knjigovodstvenih podataka po centrima profita i prihoda.

- ***Zbroj podređenih čvorova***, čvor koji se automatski valorizira zbrojem svih čvorova koji se nalaze na neposredno nižoj razini.

- ***Izraz***, kod kojeg je dostupna sekcija za unos formule. Podržane su zagrade, osnovni matematički operatori i unos numeričkih vrijednosti. Za umetanje čvora modela u formulu preporučuje se korištenje gumba **Formula**, koji otvara pomoćni alat za odabir čvorova modela.

- ***Nalozi*** (samo ako poduzeće nema aktiviran kontroling), namijenjeni valorizaciji knjigovodstvenih podataka po nalozima.

**Tip podataka** aktivan je samo za čvorove tipa *Izraz* te omogućuje odabir između opcija *Valuta* i *Broj*. Ako je odabrana opcija *Valuta*, razina će prikazivati novčani iznos sa simbolom valute i odgovarajućim brojem decimalnih mjesta prema postavkama valute poduzeća. Ako je odabrana opcija *Broj*, prikazivat će se numerička vrijednost zaokružena prema postavci definiranoj u sljedećem polju.

**Obrni predznak odabranog čvora** omogućuje zamjenu pozitivnih i negativnih vrijednosti. U reklasifikacijama FluentisERP-a svi iznosi na dugovnoj strani prikazuju se kao pozitivni, dok se potražni iznosi prikazuju kao negativni. Ova opcija omogućuje prikaz pozitivnih vrijednosti za razine koje po svojoj prirodi predstavljaju prihode ili obveze. Obrtanje predznaka primjenjuje se samo na rezultat razine, a ne i na detaljne podatke koji je valoriziraju (podkonta, centre troškova/prihoda ili naloge).

**Ispisati** određuje hoće li se razina prikazivati u ispisima.

:::tip NAPOMENA
Korištenje ove opcije ovisi o postavkama vidljivosti definiranima u izvještajima za ispis.
:::

**Prikaži detalje** omogućuje prikaz detalja čvora u usporedbama, odnosno popisa podkonta ili centara koji ga valoriziraju.

**Upravljanje valutama** dostupno je samo za čvorove tipa *Podkonto* i nalaže FluentisERP-u da obradi eventualna salda u stranim valutama za podkonta koja u kontnom planu imaju uključenu opciju *Upravljanje valutama* (najčešće kupci, dobavljači, agenti i bankovni računi). U tom slučaju reklasificirani podaci sadržavat će zaseban red za svaku valutu evidentiranu u korištenom privremenom zatvaranju.

Odjeljak **Priroda grupiranja** omogućuje definiranje tipova konta koji se mogu dodijeliti razini te je dostupan samo za čvorove tipa *Podkonto*. Prilikom unosa podkonta primjenjuje se filtriranje prema odabranoj prirodi grupiranja.

:::tip PRIMJER
Ako je odabrana priroda grupiranja *Imovina*, bit će moguće unositi samo tipove konta označene tom prirodom, primjerice konta imovine, kupaca i banaka. Ako se postavka promijeni na razini koja već sadrži podkonta, prilikom spremanja sustav će zatražiti potvrdu za brisanje podkonta koja više nisu usklađena s novom postavkom.
:::

Aktiviranjem opcije **Razmotri podređene centre troška/prihoda** moguće je unijeti nadređeni centar troška, a FluentisERP će automatski prikazati sve njegove podređene centre koji imaju evidentirane vrijednosti. Time se izbjegava potreba za pojedinačnim unosom i održavanjem svih podređenih centara, jer je dovoljno definirati samo nadređeni centar koji ih grupira.

### PREGLED DODJELJIVANJA KONTA

Pregled **konta** omogućuje definiranje popisa konta i/ili podkonta koji će valorizirati ovu razinu modela. Nije dopušten unos istog konta ili podkonta s istim tipom salda unutar iste razine, dok se isti konto ili podkonto može koristiti na drugim mjestima u reklasifikaciji bez ograničenja. Dopušten je i unos samo glavnog konta bez pojedinačnih podkonta. To je uobičajen slučaj kod konta koja sadrže podkonta iz evidencija kupaca ili dobavljača, kada nije potrebno održavati detaljan popis svih analitika unutar modela.

**Tip salda** za pojedini red konta ili podkonta može biti:

- **Općenito**, pri čemu se preuzima saldo podkonta neovisno o njegovom predznaku. Ako je uneseno glavno konto, preuzima se zbroj salda svih pripadajućih podkonta.

- **Duguje**, pri čemu se preuzima saldo samo ako je dugovne prirode. Za glavno konto uzima se zbroj svih dugovnih salda pripadajućih podkonta.

- **Potražuje**, pri čemu se preuzima saldo samo ako je potražne prirode. Za glavno konto uzima se zbroj svih potražnih salda pripadajućih podkonta.

- **Povećanje**, pri čemu se za konto ili podkonto izračunava razlika između privremenog zatvaranja korištenog u reklasifikaciji i drugog referentnog zatvaranja. Ova opcija posebno je korisna za analize temeljene na promjenama odnosno tokovima.

Posljednja opcija u pregledu je **Inverzija kolona**, koja omogućuje obrtanje predznaka salda za odabrano konto ili podkonto.

:::tip NAPOMENA
Ova opcija može biti korisna kada je potrebno iz ukupnog salda određenog konta isključiti vrijednost pojedinog podkonta. Primjerice, intercompany kupac može se izdvojiti iz glavnog konta kupaca kako bi se prikazao u zasebnom čvoru bez dvostrukog uključivanja iste vrijednosti.
:::

Unos podataka u ovaj pregled može se izvršiti ručnim unosom šifre konta, odabirom iz pomoći za konta ili korištenjem gumba **Višestruko umetanje podkonta**, koji omogućuje istovremeni odabir više zapisa.

### PREGLED DODJELJIVANJA CENTARA PODUZEĆA

U pregledu centara troškova definiraju se centri koji će valorizirati pojedinu razinu modela. Dostupna su sljedeća polja:

- **Tip retka**, koji je povezan s upravljanjem nositeljima troškova u kontrolingu te se koristi samo u modelima povezanima s kontrolingom. Moguće vrijednosti su:
  - *Izvor* – analitički retci izravno dodijeljeni centru ili dodijeljeni u prvom ciklusu nositelja troškova.
  - *Predano* – vrijednosti prenesene drugim centrima troškova koji su navedeni u pregledu.
  - *Primljeno* – vrijednosti zaprimljene od drugih centara troškova navedenih u pregledu.

- **Konto / Podkonto / Opis**, kojim se definira konto ili konto-podkonto prema kojem će se filtrirati podaci analitike ili upravljačkog računovodstva.

- [**Centar troška**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), koji je obavezan u modelima koji nisu povezani s kontrolingom, dok je u modelima kontrolinga opcionalan. Koristi se za filtriranje podataka analitike ili upravljačkog računovodstva.

- **Inverzija kolona**, kojom se za odabrani redak obrće predznak salda.

- **Varijable**, vidljive samo u modelima povezanima s kontrolingom. Omogućuju određivanje hoće li se koristiti:
  - *Varijabilna kvota*
  - *Fiksna kvota*
  - *Općenito* (dugovno ili potražno), što je zadana vrijednost kada nije odabrana nijedna posebna opcija.

**Tip salda** standardno se vodi kao *Općenito*, dok su u modelima povezanima s kontrolingom dodatno dostupne opcije:

- *Početni*
- *Završni*

Ove se opcije koriste za retke podkonta koji predstavljaju početne i završne zalihe.

### PREGLED DODELJIVANJA KONTA

Pregled **konta** omogućava definisanje liste konta i/ili podkonta koji će vrednovati ovaj nivo modela. Nije dozvoljen unos istog konta ili podkonta sa istim tipom salda u okviru istog nivoa, dok se isto konto ili podkonto može koristiti na drugim mestima u reklasifikaciji bez ograničenja. Dozvoljen je i unos samo glavnog konta bez pojedinačnih podkonta. Ovo je tipičan slučaj kod konta koja sadrže podkonta iz evidencija kupaca ili dobavljača, kada nije potrebno održavati detaljnu listu svih analitika unutar modela.

**Tip salda** za pojedini red konta ili podkonta može biti:

- **Opšti**, pri čemu se preuzima saldo podkonta bez obzira na njegov predznak. Ako je uneseno glavno konto, preuzima se zbir salda svih pripadajućih podkonta.

- **Duguje**, pri čemu se preuzima saldo samo ako je dugovne prirode. Za glavno konto uzima se zbir svih dugovnih salda pripadajućih podkonta.

- **Potražuje**, pri čemu se preuzima saldo samo ako je potražne prirode. Za glavno konto uzima se zbir svih potražnih salda pripadajućih podkonta.

- **Povećanje**, pri čemu se za konto ili podkonto izračunava razlika između privremenog zatvaranja korišćenog u reklasifikaciji i drugog referentnog zatvaranja. Ova opcija je posebno korisna za analize zasnovane na promenama odnosno tokovima.

Poslednja opcija u pregledu je **Inverzija kolona**, koja omogućava obrtanje predznaka salda za odabrano konto ili podkonto.

:::tip NAPOMENA
Ova opcija može biti korisna kada je potrebno iz ukupnog salda određenog konta isključiti vrednost pojedinog podkonta. Na primer, intercompany kupac može biti izdvojen iz glavnog konta kupaca kako bi se prikazao u zasebnom čvoru bez dvostrukog uključivanja iste vrednosti.
:::

Unos podataka u ovaj pregled može se izvršiti ručnim unosom šifre konta, odabirom iz pomoći za konta ili korišćenjem dugmeta **Višestruko umetanje podkonta**, koje omogućava istovremeni odabir više zapisa.

### PREGLED DODELJIVANJA CENTARA PREDUZEĆA

U pregledu centara troškova definišu se centri koji će vrednovati pojedini nivo modela. Dostupna su sledeća polja:

- **Tip reda**, koji je povezan sa upravljanjem nosiocima troškova u kontrolingu i koristi se samo u modelima povezanim sa kontrolingom. Moguće vrednosti su:
  - *Izvor* – analitički redovi direktno dodeljeni centru ili dodeljeni u prvom ciklusu nosilaca troškova.
  - *Preneto* – vrednosti prenete drugim centrima troškova koji su navedeni u pregledu.
  - *Primljeno* – vrednosti primljene od drugih centara troškova navedenih u pregledu.

- **Konto / Podkonto / Opis**, kojim se definiše konto ili konto-podkonto prema kojem će se filtrirati podaci analitike ili upravljačkog računovodstva.

- [**Centar troška**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), koji je obavezan u modelima koji nisu povezani sa kontrolingom, dok je u modelima kontrolinga opcion. Koristi se za filtriranje podataka analitike ili upravljačkog računovodstva.

- **Inverzija kolona**, kojom se za odabrani red obrće predznak salda.

- **Varijable**, vidljive samo u modelima povezanim sa kontrolingom. Omogućavaju određivanje da li će se koristiti:
  - *Varijabilna kvota*
  - *Fiksna kvota*
  - *Opšte* (dugovno ili potražno), što je podrazumevana vrednost kada nije odabrana nijedna posebna opcija.

**Tip salda** standardno se vodi kao *Opšti*, dok su u modelima povezanim sa kontrolingom dodatno dostupne opcije:

- *Početni*
- *Završni*

Ove opcije koriste se za redove podkonta koji predstavljaju početne i završne zalihe.

### POSEBNOSTI VRSTE ČVORA ZA CENTRE TROŠKOVA U MODELIMA KONTROLINGA

U modelima povezanim sa kontrolingom dostupne su određene specifične opcije za čvorove centara troškova. Konkretno:

- **Procentualna referenca** služi za određivanje referentnog čvora na osnovu kojeg se u poređenjima izračunava „vertikalni“ procenat u modelu.

:::tip NAPOMENA
Na primer, ova opcija se postavlja na ukupne prihode kako bi se moglo utvrditi koliki je procentualni udeo svakog troškovnog čvora u odnosu na ukupne prihode.
:::

- **Brojilac za izračunavanje indeksa** koristi se u modelu ukupnog troška centara i označava čvor koji sabira troškove kako bi se njegova vrednost koristila kao brojilac za izračunavanje tarifa centara.

- **Varijable** omogućavaju definisanje da li će se koristiti:
  - *varijabilna kvota*
  - *fiksna kvota*
  - *opšte* (dugovno ili potražno), što predstavlja podrazumevanu opciju kada nije izabrana nijedna od prethodnih.

Postavka definisana na nivou čvora primenjuje se samo ukoliko nije drugačije definisana na nivou pojedinačnog reda u mreži.

- **Indeks čvora** se ne koristi.

### POSEBNOSTI VRSTE ČVORA ZA CENTRE TROŠKOVA U MODELIMA KONSOLIDACIJE PROJEKTA/NALOGA

- **Brojilac za izračun profitabilnosti** označava čvor koji sabira maržu projekta ili naloga.

- **Vrsta izvora** određuje koju vrstu izvora podataka će koristiti čvor za svoju valorizaciju. Dostupne su sledeće opcije:

  - *Knjiženje* – najčešće se koristi za čvorove koji sabiraju direktne prihode; podaci potiču iz računovodstva.
  - *Ručno knjiženje* – koristi se za podatke koji dolaze iz vanbilansnih unosa.
  - *Formula* – koristi se za podatke generisane formulama za obračun.
  - *Amortizacija* – koristi podatke dobijene tehničkim obračunom amortizacije u kontrolingu.
  - *Korekcije* – koristi se za usklađenja na kraju obračunskog perioda i uglavnom se ne koristi.
  - *Raspodela po tarifi* – uglavnom se ne koristi.
  - *Zalihe* – koristi podatke koji potiču iz obračuna zaliha u kontrolingu.
  - *Materijali* – prikazuje troškove utrošenog materijala u proizvodnji.
  - *Spoljne usluge* – prikazuje troškove eksternih radova i usluga.
  - *Transformacija* – prikazuje troškove internih proizvodnih obrada.
  - *Vreme mašine* – prikazuje vreme korišćenja mašina u proizvodnji.
  - *Vreme ljudskih resursa* – prikazuje vreme rada zaposlenih u proizvodnji.
  - *Vreme pripreme mašine* – prikazuje vreme potrebno za pripremu mašina.
  - *Vreme pripreme zaposlenih* – prikazuje vreme potrebno za pripremu zaposlenih.
  - *Konsolidacija* – koristi se za unos konsolidacionih podataka između povezanih kompanija i uglavnom se ne koristi.