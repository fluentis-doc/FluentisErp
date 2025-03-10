---
title: Pretraga 
sidebar_position: 1
---

Ovaj obrazac omogućuje pretraživanje prethodno izračunatih i prisutnih zatvaranja računa u bazi podataka. 

**S ove pozicije moguće je izraditi novi završetak računa putem naredbe [Novo](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing).**

U zaglavlju su prisutna polja za filtriranje, posebno **verzija broja** koji predstavlja progresivni broj koji identificira sam završetak za svako poduzeće prisutno u bazi podataka.  Stoga mora biti jedinstveni broj.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/search/image01.png)

 

 POLJA U REŠETKI PRETRAŽIVANJA:

**Opis**: slobodno dodijeljeno prilikom stvaranja novog zatvaranja; 



**Datum**: datum obrade zatvaranja; 



**Verzija**: broj verzije zatvaranja (pažnja, mora biti jedinstveni broj za svako poduzeće i zapravo predstavlja progresivni broj različitih prisutnih zatvaranja); 



**Knjižen**: označava je li zatvaranje knjiženo (aktivna oznaka) ili samo izračunato (neaktivna oznaka); 



**Napomena**: polje slobodno popunjava prilikom stvaranja zatvaranja.





| Funckija | Značenje |
| --- | --- |
| Pretraga | Gumb za pretraživanje prethodno izvršenog zatvaranja računa. |
| Novo | Gumb za stvaranje novog zatvaranja računa. |
| Uredi | Gumb koji se aktivira nakon odabira zatvaranja računa i omogućuje uređivanje zatvaranja. |
| Pregled | Gumb koji se aktivira nakon odabira zatvaranja računa i omogućuje pregled zatvaranja. |
| Izbriši | Gumb koji se aktivira nakon odabira zatvaranja računa i omogućuje brisanje zatvaranja. |


## Upute za zatvaranje knjigovodstvene godine u Fluentisu 2021 

Zatvaranje knjigovodstvene godine se u Fluentisu izvršava u dva glavna koraka. Potrebno je napraviti jednu proceduru sa zatvaranjima konta troškova i prihoda (cjelina 1.1.), te drugu proceduru sa zatvaranjima aktive i pasive (cjelina 1.2.). 

## 1.1 **Zatvaranje konta troškova i prihoda** 

U modulu **Administracije** potrebno je otvoriti proceduru automatskog zatvaranja konta. Prvi korak je klik na modul **Administracija**, zatim drugi klik na **Procedure** i treći klik na **Automatsko  zatvaranje konta**. 

Otvara se pregled u kojem su nakon klika na **Traži** (4) prikazana dosadašnja (ako ih ima) zatvaranja konta.  

Za novo zatvaranje potrebno je kliknuti na **Novo** (5). 

Zatim se otvara obrazac u kojem je potrebno popuniti određena polja: 

(6) **Opis**: ovdje je potrebno upisat želji naziv zatvaranja, pošto se radi o zatvaranju konta vezanih uz troškove i prihode, preporuka je postaviti jednostavan naziv poput *2023_profit_and_loss*, godina se naravno mijenja. 

(7) **Bilješke**: preporuka je da se prepiše naziv iz *Opisa*.  

(8) **Godina knjiženja**: odabire se *godina* za koju se radi zatvaranje. 

(9) **Od/do datuma knjiženja/obračuna**: potrebno je odabrati *period* za koji se radi zatvaranje. Dakle, od *1.1. do 31.12.* prethodne godine ili nekog drugog željenog intervala ako se žele pogledati podaci. 

(10) **Datum unosa**: potrebno je odabrati odgovarajući *predložak knjiženja* zatvaranja godine. 

(11) **Spremi**: nakon popunjavanja obrasca potrebno je kliknuti na **Spremi**, a u meniju se pojavljuju dvije procedure za zatvaranje godine. 

Klikom na **Povrati vrijednost podkonta** (12), automatski se otvara kartica **Dobit i Gubitak** u kojoj se može vidjeti pregled konta s iznosima. Nakon toga se potrebno vratiti na karticu **Parametri** (13)  i kliknuti **Kreiraj zapis za zatvaranje konta** (14) kako bi se knjiženje izvršilo i u administraciju. To je ujedno i završni korak zatvaranja godine vezano uz konta troškova i prihoda.


## 1.2 **Zatvaranje aktive i pasive**

Nastavno na obrazac prikazan na 3. stranici ovih uputa, za zatvaranje aktive i pasive, polja je potrebno popuniti na sljedeći način:

(6)	**Opis**: ovdje je potrebno upisat želji naziv zatvaranja, pošto se radi o zatvaranju aktive i pasive, preporuka je postaviti jednostavan naziv poput *2023_patrimonial*, godina se naravno mijenja.

(7)	**Bilješke**: preporuka je da se prepiše naziv iz *Opis*.

(8)	**Godina**: odabire se *godina* za koju se radi zatvaranje.

(9)	**Od/do datuma knjiženja/obračuna**: potrebno je odabrati *period* za koji se radi zatvaranje. Dakle, od *1.1. do 31.12.* prethodne godine ili nekog drugog željenog intervala ako se žele pogledati podaci.

(10) **Datum unosa**: potrebno je odabrati odgovarajući *predložak knjiženja* zatvaranja godine.

(11) **Zatvaranje godine**: potrebno označiti *flag*.

(12) **Ponovno otvaranje konta**:potrebno označiti *flag*.

(13) **Predložak otvaranja**: potrebno otvoriti odgovarajući *predložak knjiženja* otvaranja godine.

(14) **Upravljanje saldom za knjiženje valute**: potrebno označiti *flag*.

(15) **Spremi**: nakon popunjavanja obrasca potrebno je kliknuti na **Spremi**, a u meniju pojavljuju dvije procedure za zatvaranje godine.

Klikom na **Povrati vrijednost podkonta** (16), automatski se otvara kartica **Imovinski** u kojoj se može vidjeti pregled konta s iznosima. Nakon toga se potrebno vratiti na karticu **Parametri** (17) i kliknuti **Kreiraj zapis za zatvaranje konta** (18) kako bi se knjiženje izvršilo i u administraciju. To je ujedno i završni korak zatvaranja godine vezano uz aktivu i pasivu.