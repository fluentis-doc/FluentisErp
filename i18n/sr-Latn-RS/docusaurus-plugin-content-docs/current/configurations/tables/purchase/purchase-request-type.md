---
title: Vrste zahtjeva za nabavu
sidebar_position: 1
---

Ova tablica je ključna za definiranje različitih vrsta RZN-a (zahtjeva za nabavu), svaka sa svojim specifičnostima. Dostupna je putem *Konfiguracija > Tablice > Nabava > Vrste zahtjeva za nabavu*.

Polja koja su prisutna su:  

**Šifra/Opis**: obavezna polja za identifikaciju vrste zahtjeva.

**Numeracija**: potrebno je odabrati [Numeraciju](/docs/configurations/tables/fluentis-numerations) koja će biti povezana s vrstom zahtjeva.  

**Centar troška**: centar troška koji će se predložiti pri kreiranju zahtjeva za nabavu. Može ostati prazan ako se ne koristi modul kontrolinga.

**Skladište/Opis skladišta**: zadano skladište koje će se koristiti prilikom kreiranja zahtjeva za nabavu.

**Provjera dostupnosti**: ako je uključeno, zahtjevi za nabavu kreirani s ovom vrstom koriste se u izračunu dostupnosti i vidljivi su u formi [Analiza dostupnosti](/docs/erp-home/registers/items/availability-analysis).         

**Ispis**: u ovom polju moguće je odabrati zadani obrazac za ispis (napomena: za ispis zadane forme potrebno je u fazi ispisa odabrati opciju *Višestruki ispisi*); nu sljedećem polju može se unijeti **Broj kopija** za ispis.   

**Cash flow**: ako je ovaj flag aktivan, ova vrsta RZN-a uključuje se u izračun novčanog toka.   

**Vrsta upita za ponudu**: u ovom polju potrebno je odabrati koju će [vrstu upita za ponudu (RDO)](/docs/configurations/tables/purchase/purchase-offer-type) sustav kreirati iz ove vrste zahtjeva za nabavu.  