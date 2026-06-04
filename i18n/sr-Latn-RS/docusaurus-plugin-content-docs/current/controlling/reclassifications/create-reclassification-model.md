---
title: Kreiranje modela reklasifikacije
sidebar_position: 2
---

:::note Put
**Kontroling > Reklasifikacije > Sheme reklasifikacije > Kreiraj model reklasifikacije**

NAPOMENA:
Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

:::

---

### UNOS NOVOG MODELA – NASLOV

Modeli reklasifikacije su zajednički elementi za sva poduzeća učitana u isti bazu podataka: struktura reklasifikacije će biti vidljiva u svim poduzećima, dok će specifično za svako od njih biti dodjela vlastite strukture kontnog plana (cdc/cdp itd.) različitim modelima. Na ovaj način bit će moguće stvoriti i konsolidiranu reklasifikaciju za grupu.

:::tip NAPOMENA
Modeli su zajednički za sva poduzeća, ili za sva poduzeća iste geografske lokacije dodijeljene *tipu reklasifikacije* putem svojstva *Države*.
:::

Elementi potrebni za kreiranje novog modela su: 

- **Tip reklasifikacije**,

- **Šifra modela** (alfanumerički od 10 znakova), 

- **Opis** modela.

- **Povratni znak odabranog čvora**, flag dostupno samo za tipove reklasifikacija povezane s *Kontrolingom*, omogućava prisilno
obrtanje +- na svim čvorovima modela.

- **Indeks u apsolutnoj vrijednosti**, dostupan samo za tipove reklasifikacija povezane s *Kontrolingom*, postavlja izračun postotnih indeksa u apsolutnoj vrijednosti.

Nakon dodijele ovih vrijednosti, aktivirat će se različiti gumbi za definiranje strukture reklasifikacije: pomoću
gumba **Umetni čvor korijena** kreirat će se prvi nivoi strukture, dok će se pomoću sljedećeg gumba **Umetni čvora** dodati podnivoi odabranom čvoru u strukturi.

Svaki nivo strukture bit će definiran putem šifre (alfanumerički od 8 znakova) i opisa: jedinstvenost u ovom posebnom slučaju osigurava kombinacija obje vrijednosti, šifre i opisa zajedno (to je zato što u reklasifikaciji EU, na primjer, postoje različiti nivoi ‘A' u različitim sekcijama modela, s različitim opisima). Sljedeći će koraci detaljno opisati tipove razina koje je
moguće dodijeliti, uzimajući u obzir da je brisanje razina dopušteno samo ako nisu korištene u formuli.


### ALATI U IZBORNOJ TRACI


 1. Obrazac za **pretraživanje podkonta koji nedostaju** omogućava pretraživanje i ispis podkonta koji nisu uneseni ni na jednom mjestu modela reklasifikacije: u filtrima pretrage dostupne su opcije za *prikaz konta s istekom roka valjanosti*, *prikaz konta koji nije korišten u pregledu centara troškova*, te *prikaz konta koji nije korišten u pregledu konta*, pri čemu posljednja dva
omogućuju definiranje pretrage u čvorovima tipa *Centri troškova* ili *Podkonta*. 
Konkretno, ako je unesen opći konto, njegova podkonta neće biti prikazana, čak iako nisu specifično uneseni u sam model.
 2. Obrazac za pretraživanje **višestruko umetnutih podkonta** omogućava pretraživanje i ispis popisa podkonta koji su uneseni na više mjesta modela, uzimajući u obzir samo čvorove konta ili čvorove centara putem dvaju flagova: *Prikaz dupliciranog konta u
pregledu centara troškova* i *Prikaz dupliciranog konta u pregledu konta*, koji su dostupni u filtrima. Ako je opći konto unesen zajedno s njegovim podkontom, bit će prikazan jer se smatra i ukupnim iznosom i kao detalj.



### POLJA ZAGLAVLJA

**Tip čvora** - Predstavlja vrstu retka u modelu reklasifikacije. Dostupne su sljedeće vrste:

- ***Podkonta*** posvećeni valorizaciji podataka iz glavne knjige, prema detaljima strukture kontnog plana poduzeća

- ***Centri troškova***  - posvećeni valorizaciji analitičkih podataka. Ako je model vezan uz kontroling, bit će dostupne specifične karakteristike.

- ***Centri profita*** (samo ako poduzeće nema flag Kontroling) - posvećen valorizaciji podataka iz knjigovodstva za centre profita/prihoda.

- ***Zbroj ‘djece’***:čvor koji se automatski valorizira zbrojem čvorova koji se nalaze na prvom nižem nivou.

- ***Izraz***: u ovom slučaju, sekcija za unos izraza je slobodno konfigurabilna. Dozvoljeni su zagrade, osnovni matematički znakovi i unos brojeva. Za unos čvora modela u formulu preporučuje se korištenje gumba ‘Formula’, koji će otvoriti pomoć za selekciju čvorova modela.

- ***Nalozi*** (samo ako poduzeće nema flag Kontroling) - posvećen valorizaciji podataka iz knjigovodstva za poslove, prema detaljima posla.

- **Tip podataka**, polje je aktivno samo u čvorovima tipa Izraz i ima opcije: *Valuta* ili *Broj*. Ako je odabrana valuta, nivo će prikazivati novčani iznos s simbolom i pripadajućim decimama prema valuti poduzeća. Ako je odabran broj, nivo će prikazivati opći broj sa zaokruženim decimalama prema postavci u sljedećem polju.

- **Povratni znaka odabranog čvora** omogućava obrtanje negativnih u pozitivne i obratno: u reklasifikacijama FluentisERP-a, svi podaci s iznosom “dugovno” bit će prikazani s pozitivnim znakom, a “potražni” s negativnim. Pomoću ovog flagova moguće je prikazivati ukupne pozitivne iznose za razine koje po  svojoj prirodi imaju iznos “primanja” (obveze, prihodi). Obrtanje se primjenjuje na rezultat razine, ali ne i na detalje (podračune, cdc, cdp, poslove) koji ga valoriziraju. 

- **Ispisati**: označava hoće li nivo biti prikazan na ispisu ili ne.

:::tip NAPOMENA
Korištenje ovog flaga ovisi o upravljanju vidljivošću unutar izvještaja za ispis.
:::

- **Pokaži detalje**: omogućava je mogućnost označavanja, u usporedbama, unutarnjih detalja čvora (tj. popisa podkonta ili centara)

- **Upravljanje valutom**: opcija je važeća za čvorove tipa *Podkonto*, označava ***FluentisERP-u*** da procijeni eventualne salde u valuti za podkonta koji imaju oznaku Upravljanje valutom u kontnom planu (tipično svi podaci o kupcima/dobavljačima/agencijama/bankovnim računima). U tom slučaju, dakle, u reklasificiranim podacima ovog modela bit će N redaka za svaki podkonto, jedan za svaku valutu kretanja u privremenom zatvaranju korištenoj u privremenom zatvaranju.

- Odjeljak **Priroda grupiranja** omogućava postavljanje tipova konta koji se mogu dodijeliti ovom nivou, a vidljiv je samo u čvoru
tipa *Podkonto*: zapravo, prilikom unosa podkonta primijenit će se filtriranje prema tipu konta već ograničeno na ona koja imaju
oznaku usklađenu s postavkom.

:::tip PRIMJERI
Na primjer, ako je priroda "Imovina", bit će moguće unijeti tipove konta koji imaju ovu oznaku u tablici: tipično imovina, kupci i banke. U slučaju da se ova postavka mijenja s već postojećim podkontima na razini, prilikom spremanja promjena bit će zatraženo hoće li se izbrisati podkonta koji nisu usklađena.
:::

S oznakom **Razmotri podređeni centar troška/prihoda**, bit će moguće unijeti centar troška X, a ***FluentisERP*** će
prikazati sve njegove interne centre troškova u reklasifikaciji koji imaju neku vrijednost. Ova oznaka omogućava izbjegavanje unosa i održavanje svih mogućih detalja centara troškova, već samo onog višeg centra troška koji ih grupira.


### PREGLED DODIJELJIVANJE KONTA

Pregled **konta** omogućava definiranje popisa konta i/ili podkonta koji će valorizirati ovaj nivo modela. Nije
dopušten unos istog konta ili podkonta s istim tipom salda u istom nivou, dok se isti može unositi u druge dijelove reklasifikacije bez ikakvih ograničenja. Dopušten je unos samo općeg konta (glavnog): tipičan slučaj je opći konto koji sadrži podkonta iz evidencije, bez detaljnog popisa kupaca/dobavljača u modelu koji bi zahtijevao stalnu usklađenost raznih modela.

**Tip salda** pojedinog retka konta ili podkonta uključuje sljedeće mogućnosti: 

**Općenito**  (bit će unesen saldo podkontoa neovisno o njegovom znaku; u slučaju općeg konta, bit će unesen zbroj salda podkonta koji pripadaju tom kontu),

**Duguje** (bit će unesen saldo podkonta samo ako ima znak dugovanja; u slučaju općeg konta, bit će unesen
zbroj salda dugovanja podkonta koji pripadaju tom kontu),

**Potražuje** (bit će unesen saldo podkonta samo ako ima znak potraživanja; u slučaju općeg konta, bit će unesen
zbroj salda potraživanja podkonta koji pripadaju tom kontu),

**Povećanje** (za podkonto ili konto izračunat će se vrijednost kao razlika između privremenog zatvaranja reklasifikacije i drugog referentnog zatvaranja: ovaj tip je koristan za analizu prema tijekovima).

PosljednjI flag u mreži naziva se **Inverzija kolona**: znači da će se, za odabrani podkonto, znak salda invertirati

:::tip Napomena
Može biti korisno, na primjer, za oduzimanje od salda jednog konta vrijednosti njegovog podkonta: primjerice, ukloniti interkompanijskog kupca koji je šifriran unutar glavnog konta kupaca, kako bi ga obradili u odvojenom čvoru bez dupliciranja vrijednosti.
:::

Unos u ovaj pregled može se izvršiti s dvije metode: izravnim unosom, unosom šifre ili putem pomoći za konta koja omogućuje odabir jednog zapisa ili korištenjem gumba "Višestruko umetanje podkonta" za aktivaciju višestrukog odabira u pomoći za konta.

### PREGLED ZA DODIJELJIVANJE CENTARA PODUZEĆA

U mreži centara troškova unose se centri troškova koji će valorizirati razinu. Dostupna polja su:

- **Tip linije**: ovo polje je povezano s upravljanjem nositelja troškova u kontrolingu i stoga se koristi samo u modelima tipova povezanih s računovodstvom kontrole, mogući odabir je između:
    - *Izvor* analitičkih redaka dodijeljenih izravno centru ili dodijeljenih prvom ciklusu nositelja troškova
    - *Prodan* Primljeno od drugih centara troškova, koji će biti navedeni u pregledu
    - *Primka* Primljeno od drugih centara troškova, koji će biti navedeni u pregledu

- **Konto-Podkonto-Opis**: služi za označavanje s kojim kontom (ili konto-podkonto) se filtriraju podaci analitike ili računovodstvenog upravljanja

- [**Centri troška**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): polje je opcionalno u modelima povezanima s kontrolingom, dok je obavezno u ostalim slučajevima. To je centar koji će se koristiti
za filtriranje podataka analitike ili računovodstvenog upravljanja.

- **Inverzija kolona**: znači da će, za odabrani redak, znak salda biti invertiran

- **Varijable**: polje je vidljivo samo u modelima povezanima s kontrolingom, omogućuje definiranje hoće li se koristiti 
    - *promjenjiva* kvota
    - *fiksna* kvota
    - *opći* (dugovanje ili potraživanje), koji je zadani tip kada nije označeno

**Tip salda**: uvijek se upravlja saldom tipa Općenito, dok se u modelima povezanima s Kontrolingom koristi tip salda
    - *Početni*
    - *Završni* 
    
za retke podkonta početnih/završnih zaliha


### POSEBNOSTI VRSTE ČVORA U CENTRIMA TROŠKOVA ZA MODELE KONTROLINGA
U modelima povezanima s kontrolingom, dostupne su neke specifične opcije u čvorovima centara troškova. Posebno:

- **Postotna referenca**: služi za razumijevanje, u usporedbama, koji je čvor referenca za izračunavanje postotka "vertikalno" u modelu.

:::tip NAPOMENA
Na primjer, ovo se postavi na ukupne prihode kako bi se moglorazumjeti koliko svaki troškovni čvor doprinosi postotno prema tom čvoru.
:::

- **Brojnik za izračunavanje indeksa**: u modelu ukupnog troška centara, označava čvor koji zbraja troškove kako bi ga koristio kao brojnik za izračun tarifa centara.

- **Varijable**: omogućuje definiranje hoće li se koristiti
    - *promjenjiva* kvota
    - *fiksna* kvota
    - *općenito* (dugovanje ili potraživanje), koji je zadani tip kada nije označeno

Oznaka na razini čvora primjenjuje se ako nije označena na razini pojedinog retka u mreži

- **Indeks čvora**: ne koristi se

### POSEBNOSTI VRSTE ČVORA ZA CENTRE TROŠKOVA ZA MODELE KONSOLIDACIJE PROJEKTA/NALOGA

- **Brojnik za izračun profitabilnosti**: označava čvor koji zbraja maržu projekta/naloga

- **Vrsta izvora**: označava koja vrsta izvora podataka će valorizirati čvor. Mogući izvori uključuju sljedeće:
    - *Knjiženje*: tipično korišten za čvor koji zbraja direktne prihode, podaci dolaze iz računovodstva
    - *Ručni obračun*: za podatke koji dolaze iz izvanknjigovodstvenih unosa
    - *Formula*: za podatke koji dolaze iz formula za izračun
    - *Amortizacije*: za podatke koji dolaze iz tehničkog izračuna amortizacija u kontrolingu
    - *Ostatci*: za usklađenja na kraju razdoblja, obično se ne koristi
    - *Preokret po tarifi:*: obično se ne koristi
    - *Zalihe*: za podatke koji dolaze iz računovodstvenih zaliha u kontrolingu
    - *Materijali*:za prikaz troškova potrošnjen materijala u proizvodnjo
    - *Vanjsko djelovanje*: za prikaz troškova vanjskih radova (s računa za rad)
    - *Transformacija*: za prikaz troškova unutrašnje obrade (iz proizvodnje)
    - *Vrijeme stroja*: za prikaz vremena korištenja strojeva u proizvodnji
    - *Vrijeme ljudskih resursa*: za prikaz vremena rada ljudi u proizvodnji
    - *Vrijeme pripreme stroja*: za prikaz vremena za pripremu stroja
    - *Vrijeme pripreme ljudi*: za prikaz vremena za pripremu ljudi
    - *Konsolidacija*: za unos konsolidacijskih podataka između tvrtki, obično se ne koristi.
