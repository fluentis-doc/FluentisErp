---
title: Tip šifre serijskog broja
sidebar_position: 27
---

Tabela se nalazi na putanji **Tabele > Logistika > Tip šifre serijskog broja**.

U ovoj tabeli moguće je šifrirati *tipove šifara serijskog broja* koji će se zatim koristiti u bazi podataka.

**Pretraživanje tipova šifara serijskog broja**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera, dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u području sa rezultatima.

**Unos tipova šifara serijskog broja**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novi**. Potrebno je uneti **Šifru** i **Opis** tipa šifre serijskog broja, sačuvati red i odabrati parametre koji će se koristiti za sastavljanje upravo kreiranog tipa šifre.

Za svaki korišćeni parametar moguće je definisati broj znakova koji će ga činiti, kao i znak za popunjavanje, ako je potrebno.

Na primer, za parametar Progresivni broj, ako se kao znak za popunjavanje postavi „0“, a dužina na 5 znakova, generisaće se šifre kao što su 00000, zatim 00001, 00002 itd.

**Tip šifre serijskog broja** zatim je potrebno povezati sa *Identifikacijom artikla* u istoimenom polju na kartici [Serije i serijski brojevi](/docs/erp-home/registers/items/create-new-item), kako bi se u procedurama koje automatski generišu serijski broj za određeni artikal broj generisao prema ovde definisanim pravilima.

#### Detalji tipa šifre serijskog broja

- *Klasa*: prikazuje klasu artikla.
- *Serijski broj*: prikazuje šifru artikla.
- *Karakteristika*: prikazuje karakteristiku iz identifikacije artikla.
- *Robna kategorija*: prikazuje robnu kategoriju iz identifikacije artikla.
- *Tip artikla*: prikazuje tip artikla iz identifikacije artikla.
- *Varijanta*: prikazuje varijantu artikla.
- *Abecedni znakovi*: omogućava unos abecednih znakova.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na uobičajeno funkcionisanje obrazaca, pogledajte sledeću poveznicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).