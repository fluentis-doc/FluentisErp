---
title: Uvod
sidebar_position: 1
---

Modul Intrastat služi za izradu statističkih izvještaja Intrastat: predviđeno je kako ručno upravljanje podacima tako i automatski unos podataka temeljenih na podacima prisutnim u ulaznim i izlaznim računima iz odgovarajućih područja nabave i prodaje, kao i preuzimanje podataka iz računovodstvenih evidencija. 
Knjiženjem relevantnih faktura s odgovarajućim postavkama (konkretno aktiviranjem **flag** *Intrastat* unutar **predložaka** knjiženja) moguće je upravljati automatskim stvaranjem putem računovodstvenih evidencija, kako za robu tako i za usluge.

Osnovne postavke vezane su uz **matične podatke** i **vrste dokumenata** u nabavi i prodaji: 

**potrebno je, naime, da dokumenti budu pravilno podešeni i da je partner označen u šifrarniku kao subjekt Intrastata.**

Da bi se postigla maksimalna automatizacija, potrebno je definirati u matičnim podacima artikala, šifre i nomenklature svakog od njih, kao i eventualne faktore konverzije kako bi se automatski izračunala vrijednost alternativne jedinice mjere. Potrebno je, koliko je to moguće, unutar različitih dokumenata u potpunosti definirati podatke o vrsti prijevoza i uvjetima isporuke.  

Korištenje modula provodi se stvaranjem nove Intrastat1 izjave (za prodaju) i Intrastat2 (za nabavu) podaci se popunjavaju preuzimanjem iz ulaznih ili izlaznih računa, iz računovodstvenih zapisa ili ručnim unosom u odgovarajuće odjeljke.  

Nakon popunjavanja podataka, bit će moguće nastaviti s ispisom obrasca ili elektroničkim slanjem uz stvaranje predviđene datoteke. 

**Popis obaveznih tablica za korištenje modula**: 

[Početna stranica>Tablice>Administracija] i [Početna stranica>Tablice>Opće postavke] za identifikaciju ispravnih postavki Intra obračuna. 

[Vrsta Intrastat transakcije](/docs/configurations/tables/finance/nature-of-intrastat-transaction), 

[Numeriranje Intrastat](/docs/configurations/tables/fluentis-numerations), 

[Šifre nomenklature](/docs/configurations/tables/finance/nomenclature-codes), 

[Paritet](/docs/configurations/tables/general-settings/carriages), 

[Dostave](/docs/configurations/tables/general-settings/shipments).






