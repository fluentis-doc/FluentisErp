---
title: Bankovni računi
sidebar_position: 1
---

Modul **Bankovni računi** omogućava kontrolu i usklađivanje bankovnih transakcija evidentiranih u računovodstvu sa izvodima računa (ili listama transakcija) koje je moguće preuzeti kao elektronske datoteke iz internet bankarstva.

Modul se nalazi u području **Blagajne** i koristi podatke iz računovodstva.

## Uvoz izvoda

Ovaj obrazac omogućava uvoz izvoda po bankovnom računu iz elektronske datoteke preuzete iz internet bankarstva.

:::note Napomena
Trenutno su podržana dva formata datoteka koja se mogu preuzeti iz internet bankarstva:

- `.txt`
- `.xml` (noviji format koji omogućava prijenos većeg broja informacija)
:::

Prvo je potrebno u donjem dijelu obrasca odabrati bankovni konto za koji se želi izvršiti uvoz datoteke. Nakon toga, klikom na dugme **Novo** otvara se obrazac za uvoz datoteke u kojem se definiše lokacija datoteke za uvoz.

Nakon uspješno završenog uvoza, u pregledu će se pojaviti novi red. Dvostrukim klikom na red ili korištenjem dugmeta **Izmijeni** moguće je pregledati detalje uvezenih podataka.

Tako uvezene transakcije mogu se koristiti u postupku usklađivanja te za automatsko generisanje računovodstvenih knjiženja na osnovu podataka iz datoteke.

## Obrazac za pretragu / pregled uvezenih izvoda i transakcija

U glavnom obrascu za pretragu svih uvezenih transakcija moguće je pomoću odgovarajućih oznaka filtrirati:

- samo neusaglašene transakcije,
- samo usaglašene transakcije,
- ili obje vrste transakcija.

U rezultatima pretrage prikazane su dvije oznake koje pokazuju da li je transakcija:

- već **Usklađena** sa prethodno evidentiranim računovodstvenim knjiženjima,
- ili je iz uvezene transakcije automatski generisano računovodstveno knjiženje (**Knjiženo**).

Pored toga prikazuju se i ostali podaci preuzeti iz uvezene datoteke, među kojima su najvažniji:

- datum,
- početno i završno stanje,
- oznaka duguje/potražuje,
- broj transakcije.

## Detalji transakcije i postupak usklađivanja

Ulaskom u detalje transakcije putem dvostrukog klika ili dugmeta **Izmijeni**, prikazuju se sve transakcije sadržane u uvezenoj datoteci zajedno sa:

- iznosom,
- oznakom duguje/potražuje,
- datumom valute,
- podacima o odgovarajućem računovodstvenom knjiženju.

Prva kolona sadrži oznaku koja pokazuje da li je transakcija već usklađena.

Za pregled detaljnog opisa transakcije iz datoteke koristi se dugme **+** koje se nalazi lijevo od polja **Usklađenje**.

### Dostupne funkcije

#### Automatsko usklađivanje

Otvara se dijalog u kojem je moguće odabrati kriterije za automatsko povezivanje podataka pomoću oznaka, na primjer:

- isti datum,
- isti iznos,
- drugi kriteriji podudaranja.

Pretraga i usklađivanje pokreću se klikom na dugme **Pokreni**, a mogu se poništiti dugmetom **Poništi**.

Pronađene transakcije automatski će dobiti oznaku usklađenja, dok se one koje nisu pronađene mogu:

- ručno uskladiti,
- ili koristiti za automatsko kreiranje novih knjiženja.

#### Ručno usklađivanje

Klikom na ovu opciju automatski se otvara obrazac **Prikaz konta**, pri čemu se:

- automatski filtrira konto odgovarajuće banke,
- automatski popunjavaju datumi prema odabranoj transakciji.

Potrebno je:

1. kliknuti **Prikaži konta**,
2. pokrenuti pretragu,
3. pronaći odgovarajuće knjiženje,
4. označiti željeni red,
5. kliknuti **Uskladi** na alatnoj traci.

Na taj način transakcija se ručno povezuje sa računovodstvenim zapisom te se ažuriraju sve veze i oznake.

#### Poništi usklađenje

Omogućava poništavanje prethodno izvršenog usklađivanja brisanjem veza prema računovodstvenim evidencijama.

#### Knjiži

Klikom na dugme za automatsko kreiranje računovodstvenog knjiženja otvara se dijalog za odabir željenog tipa knjiženja.

Nakon potvrde automatski se otvara obrazac za unos knjiženja u kojem su već popunjeni svi podaci prepoznati iz uvezene datoteke.

Korisnik treba dopuniti eventualne dodatne podatke, kao što su:

- stavke za zatvaranje,
- podaci o naplatama,
- podaci o plaćanjima,

te zatim sačuvati knjiženje.

:::important[DETALJI AUTOMATSKOG ZATVARANJA OTVORENIH STAVKI]

U zavisnosti od banke koja izdaje elektronske izvode, dostupni podaci mogu biti detaljniji ili manje detaljni.

Fluentis automatski pokušava zatvoriti otvorene stavke prema sljedećoj logici:

1. Ako je u elektronskoj datoteci prisutno polje **Referenca povjerioca** i pripadajući referentni broj, sistem koristi te podatke za pronalaženje otvorene stavke.

   Podaci moraju odgovarati vrijednosti polja **Referentni broj** evidentiranog na otvorenoj stavci.

2. Ako prethodni uslov nije zadovoljen, sistem koristi **IBAN** iz elektronske datoteke.

   Fluentis provjerava postoji li kupac ili dobavljač sa istim IBAN-om unesenim u:

   **Kontakti > Plaćanja > IBAN**

   Ako se pronađe podudaranje, sistem traži otvorenu stavku istog iznosa.

   Ako postoji više stavki sa istim iznosom, odabire se ona sa najstarijim datumom dospijeća.

3. Ako nije pronađena odgovarajuća otvorena stavka, ali je pronađen kupac ili dobavljač sa odgovarajućim IBAN-om, Fluentis će kreirati računovodstveni red bez automatskog zatvaranja stavke.

4. Ako nije pronađen ni kupac ni dobavljač na osnovu IBAN-a, Fluentis će kreirati samo red banke u knjiženju, a korisnik će naknadno morati dopuniti preostale podatke.
:::

:::danger[PAŽNJA]

**Predložak knjiženja** koji se koristi za automatsko generisanje knjiženja naplata i plaćanja mora biti prilagođen za ovu proceduru.

Na primjer, red koji se odnosi na banku i koji je standardno povezan sa vrstom iznosa **Ukupan dokument / Iznos knjiženja** potrebno je promijeniti tako da koristi **Iznos podkonta**, kao i red kupca ili dobavljača.

Ako se to ne uradi, procedura će dva puta generisati bankovni red i knjiženje neće biti u ravnoteži.
:::