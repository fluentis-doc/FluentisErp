---
title: Tipovi prodajnog mesta (POS-a)
sidebar_position: 25
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate da je konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela se otvara putem putanje **Tablice > Prodaja > Tipovi prodajnog mesta**.

### Pretraživanje prodajnog mesta (POS-a)

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za izmenu ili pregled tipa POS-a dovoljno je dvaput kliknuti na željeni red ili pritisnuti dugme **Izmeni**.

Za unos novih zapisa potrebno je pritisnuti dugme **Novo**, koje će otvoriti novi obrazac za unos.

### Unos/Izmena POS-a

U ovom obrascu unose se svi podaci o novom tipu POS-a koji želite da definišete:

**Tip i opis**: u ova polja potrebno je uneti tip i opis POS-a.

**Numeracija**: u ovo polje potrebno je uneti odgovarajuću šifru numeracije. Za više informacija o numeracijama u ERP sistemu pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Podrazumevano**: ako je ova oznaka aktivirana, određuje podrazumevani tip POS-a koji se predlaže prilikom izrade novog POS-a.

**Napomene**: slobodno tekstualno polje u koje je moguće uneti opisne napomene koje će se zatim prikazivati na odgovarajućim ispisima.

**Cena sa PDV-om**: ako je ova oznaka aktivirana, cene u ponudi prikazivaće se sa uključenim PDV-om.

**Zaduženje**: ako je ova oznaka aktivirana, označava da je POS tipa avansa i može se stornirati transakcijom sa običnim tipom POS-a.

**POS server/Baza podataka/Tabela**: u ovim poljima biraju se server, baza podataka i tabela iz kojih se preuzimaju i/ili u koje se upisuju podaci POS-a.

**Tabela povezanih dokumenata**: tabela iz koje se preuzimaju i/ili u koju se upisuju podaci o dokumentima povezanim sa POS-om.

**JM zaokruživanja (dolaska)**: merna jedinica koja se koristi prilikom izrade otpremnica i faktura iz POS-a.

**PDV zaokruživanja (dolazni)/Opis PDV-a**: šifra PDV-a koja se koristi prilikom izrade otpremnica i faktura iz POS-a.

**Prodajno mesto**: prodajno mesto na kojem se izrađuju POS dokumenti.

**Glavna blagajna**: u ovo polje potrebno je uneti šifru blagajne koju je potrebno povezati sa POS-om.

**Kategorija proizvoda**: u ovo polje prenosi se robna kategorija navedena na narudžbini.

**PDV**: šifra PDV-a koja se koristi u POS dokumentima.

**Skladište**: u ovo polje potrebno je uneti skladište u kojem se rezerviše roba sadržana u POS dokumentima ovog tipa.

**Šablon**: u ovo polje potrebno je uneti šablon za evidentiranje skladišnih kretanja robe rezervisane u POS dokumentima ovog tipa.

**Način plaćanja**: u ovo polje unosi se tip plaćanja koji će se predlagati u POS dokumentima ovog tipa.

**Uslovi plaćanja**: u ovo polje potrebno je uneti način plaćanja koji će se predlagati u POS dokumentima ovog tipa.

**Cenovnik**: u ovo polje unosi se šifra opšteg cenovnika iz kojeg se preuzimaju cene artikala za unos u POS.

**Datum važenja**: ovde se prikazuje datum važenja opšteg cenovnika.

**Automatsko razduživanje pri zatvaranju fakture**: ako je ova oznaka aktivirana, prilikom štampanja POS-a automatski se evidentira i izlaz robe iz skladišta. U suprotnom je potrebno ručno sprovesti izlaz.

**Potreban je fiskalni uređaj (blagajna)**: ako je ova oznaka aktivirana, za upotrebu POS-a potrebna je veza sa fiskalnom blagajnom radi štampanja fiskalnog računa.

**Prikaži varijante**: ako je ova oznaka aktivirana, moguće je koristiti i varijante artikala.

**Prikaži atribute**: ako je ova oznaka aktivirana, moguće je koristiti i atribute artikala.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).