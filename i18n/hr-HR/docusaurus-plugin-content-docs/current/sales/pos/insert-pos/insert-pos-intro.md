---
title: Stvori POS – gornji dio
sidebar_position: 1
---

Obrazac **Stvori POS** otvara se putem putanje **Prodaja > POS > Stvori POS** ili putem gumba **Novo** koji se nalazi u obrascu pretraživanja *POS-a*.

U obrascu za unos automatski se nude trenutačni **Datum** i **Godina**, ali ih korisnik može promijeniti.

Za nastavak stvaranja računa prodaje, korisnik mora unijeti **obavezna** polja:

- **Tip POS-a** predefiniran u *Postavke > Tablice > Prodaja > Tipovi POS-a*.

- **Broj** svakom dokumentu dodjeljuje se broj prema numeraciji koju je odredio korisnik u tablici [Numeracija POS-a](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta koja sadrži numeraciju.

- **Račun**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili[izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) upisujući podatke.


**Ukupni iznosi**

U desnom dijelu obrasca nalaze se ukupni iznosi dokumenta:

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;  

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos poklonjenih artikala unesenih u kartici Artikli;    

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta.

**Neto iznos artikala**: Iznos stavki bez popusta – Ukupni primjenjeni rabati;   

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Neto iznos konačnih rabata**: Neto iznos artikala - Ukupno konačnih rabata;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli Tipa troškovi;  

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mrežu Troškovi;    

**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u mrežu Troškovi;  

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u mrežu Troškovi;  

**Osnovica**: Neto iznos artikala - Konačni popusti + Ukupni nepodmireni troškovi + Ukupni dokumentirani troškovi;  

**Porez**: predstavlja zbroj vrijednosti u sažecima PDV-a;

**Ukupno**: Osnovica + PDV.


*Posebni gumbi*:

> **Fiskalizacija**: dozvoljena  
> **Razduženje prodajnog mjesta**: omogućuje pražnjenje POS-a, ako je za svaki artikl unesen skladište i uzrok.  

Obrazac sadrži niz kartica:

- [Zaglavlje](/docs/sales/pos/insert-pos/header) i njegove Procedure;

- [Artikli](/docs/sales/pos/insert-pos/items);

- [Sažeci](/docs/sales/pos/insert-pos/summaries).
