---
title: Tip šifre serijskog broja
sidebar_position: 27
---

Tablica se nalazi na putanji **Tablice > Logistika > Tip šifre serijskog broja**.

U ovoj tablici moguće je šifrirati *Tipove šifri serijskog broja* koji će se zatim koristiti u bazi podataka. 

**Pretraga tipova šifri serijskog broja**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što se postave željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u području s rezultatima.

**Unos tipova šifri serijskog broja**  
Za unos novih šifri potrebno je kliknuti na prvi prazan red u tablici ili pritisnuti tipku **Novi**. Potrebno je unijeti **Šifru** i **Opis** tipa šifre serijskog broja, spremiti red i odabrati parametre koji će se koristiti za sastavljanje upravo kreiranog tipa šifre.  

Za svaki korišteni parametar moguće je definirati broj znakova koji će ga činiti te, ako je potrebno, i znak za popunjavanje.
Na primjer, za parametar Progresivni broj, ako se kao znak za popunjavanje postavi "0", a duljina na 5 znakova, generirat će se šifre kao što su 00000, zatim 00001, 00002 itd.  

**Tip šifre serijskog broja** mora se zatim povezati s *Identifikacijom artikla* u istoimenom polju unutar kartice [Serije i serijski brojevi](/docs/erp-home/registers/items/create-new-item), kako bi se u procedurama koje automatski generiraju serijski broj za određeni artikl, broj generirao prema ovdje definiranim pravilima.  

#### Detalji tipa šifre serijskog broja  

> *Klasa*: prikazuje klasu artikla;      
> *Serijski broj*: prikazuje šifru artikla;       
> *Karakteristika*: prikazuje karakteristiku iz identifikacije artikla;     
> *Robna kategorija*: prikazuje robnu kategoriju iz identifikacije artikla;     
> *Tip artikla*: prikazuje tip artikla iz identifikacije artikla;     
> *Varijanta*: prikazuje varijantu artikla;     
> *Abecedni znakovi*: omogućuje unos abecednih znakova.         

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).