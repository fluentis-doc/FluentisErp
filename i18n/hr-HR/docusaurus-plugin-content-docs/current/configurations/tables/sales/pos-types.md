---
title: Vrste prodajnog mjesta (POS-a)
sidebar_position: 25
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako je namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica se otvara putem putanje **Tablice > Prodaja > Vrste prodajnog mjesta**.

### Pretraživanje prodajnog mjesta (POS-a)

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za izmjenu ili pregled vrste POS-a dovoljno je dvaput kliknuti željeni redak ili pritisnuti gumb **Izmijeni**.

Za unos novih zapisa potrebno je pritisnuti gumb **Novo**, koji će otvoriti novi obrazac za unos.

### Unos/Izmjena POS-a

U ovom obrascu unose se svi podaci o novoj vrsti POS-a koju želite definirati:

**Tip i opis**: u ova polja potrebno je unijeti vrstu i opis POS-a.

**Numeracija**: u ovo polje potrebno je unijeti odgovarajuću šifru numeracije. Za više informacija o numeracijama u ERP sustavu pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Zadano**: ako je ova oznaka aktivirana, određuje zadanu vrstu POS-a koja se predlaže prilikom izrade novog POS-a.

**Bilješke**: slobodno tekstualno polje u koje je moguće unijeti opisne napomene koje će se zatim prikazivati na odgovarajućim ispisima.

**Cijena s PDV-om**: ako je ova oznaka aktivirana, cijene u ponudi prikazivat će se s uključenim PDV-om.

**Zaduženje**: ako je ova oznaka aktivirana, označava da je POS vrste predujma te se može stornirati transakcijom s običnom vrstom POS-a.

**POS server/Baza podataka/Tablica**: u ovim poljima odabiru se poslužitelj, baza podataka i tablica iz kojih se dohvaćaju i/ili u koje se upisuju podaci POS-a.

**Tablica povezanih dokumenata**: tablica iz koje se dohvaćaju i/ili u koju se upisuju podaci o dokumentima povezanima s POS-om.

**JM zaokruživanja (dolaska)**: mjerna jedinica koja se upotrebljava prilikom izrade otpremnica i računa iz POS-a.

**PDV zaokruživanja (dolazni)/Opis PDV-a**: šifra PDV-a koja se upotrebljava prilikom izrade otpremnica i računa iz POS-a.

**Prodajno mjesto**: prodajno mjesto na kojem se izrađuju POS dokumenti.

**Glavna blagajna**: u ovo polje potrebno je unijeti šifru blagajne koju je potrebno povezati s POS-om.

**Kategorija proizvoda**: u ovo polje prenosi se robna kategorija navedena na narudžbi.

**PDV**: šifra PDV-a koja se upotrebljava u POS dokumentima.

**Skladište**: u ovo polje potrebno je unijeti skladište u kojem se rezervira roba sadržana u POS dokumentima ove vrste.

**Predložak**: u ovo polje potrebno je unijeti predložak za evidentiranje skladišnih kretanja robe rezervirane u POS dokumentima ove vrste.

**Način plaćanja**: u ovo polje unosi se vrsta plaćanja koja će se predlagati u POS dokumentima ove vrste.

**Uvjeti plaćanja**: u ovo polje potrebno je unijeti način plaćanja koji će se predlagati u POS dokumentima ove vrste.

**Cjenik**: u ovo polje unosi se šifra općeg cjenika iz kojeg se preuzimaju cijene artikala za unos u POS.

**Datum valjanosti**: ovdje se prikazuje datum valjanosti općeg cjenika.

**Automatsko razduživanje pri zatvaranju računa**: ako je ova oznaka aktivirana, prilikom ispisa POS-a automatski se evidentira i izlaz robe iz skladišta. U suprotnom je potrebno ručno provesti izlaz.

**Potreban je fiskalni uređaj (blagajna)**: ako je ova oznaka aktivirana, za upotrebu POS-a potrebna je veza s fiskalnom blagajnom radi ispisa fiskalnog računa.

**Prikaži varijante**: ako je ova oznaka aktivirana, moguće je upotrebljavati i varijante artikala.

**Prikaži atribute**: ako je ova oznaka aktivirana, moguće je upotrebljavati i atribute artikala.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).