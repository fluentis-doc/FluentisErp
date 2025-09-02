---
title: Dnevnik knjiženja
sidebar_position: 3
---

Kada se prozor otvori, predložena je tekuća obračunska godina, a filtar za zapise postavljen je prema zadanim postavkama da pokriva odgovarajuću obračunsku godinu (datum obračuna računovodstva nije popunjen prema zadanim postavkama pod pretpostavkom da se želi raditi prema "formalnom" datumu);

Prijavljuju se početni podaci o broju stranice, saldu retka dugovne i potražne strane: program predlaže filtar snimaka također uzimajući u obzir datum posljednjeg definitivnog ispisa.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)


MOGUĆE OPCIJE: 

**Prikaži zaglavlje**: za upravljanje bilo kojim obrascima koji su već ispisani;  

**Definitivno**: aktivira način konačnog ispisa koji, nakon što se izvrši, blokira naknadne promjene u računovodstvenim evidencijama razdoblja;  

**Ponovno ispisivanje**: flag je osmišljena kako bi omogućila **ponovni ispis već konačno ispisanog dnevnika**. Aktiviranjem ove opcije, polja vezana uz posljednje stanje potraživanja/dugovanja, posljednju stranicu i posljednji red, koja su popunjena i pohranjena tijekom konačnog ispisa, postat će dostupna za uređivanje s ciljem upravljanja ponovnim ispisom knjige dnevnika,bez potrebe za poništavanjem prethodnog konačnog ispisa, niti izmjenom i spremanjem prethodnih vrijednosti unutar maske *parametara glavne knjige* (kako bi se zadržali isti završni iznosi nakon ponovnog ispisa). 

Tijekom izvršavanja konačnog ispisa, program provodi provjeru o postojanju ranijih, još neispisanih knjiženja te o postojanju datuma koji su već obuhvaćeni prethodnim ispisom. Nakon što se pokrene proces ispisa (sama pretpregled ne izvodi nikakve operacije, već je potrebno izvršiti fizički ispis, čak i u datoteku, neovisno o ishodu procesa), relevantne će se evidencije zaključati u svom fiskalnom dijelu, dok će se brojači ažurirati u tablici **[Parametri knjigovodstva](/docs/configurations/parameters/finance/accounting-parameters)**, unutar ove tablice nalazi se i gumb za brisanje konačnih ispisa (mogućnost dostupna korisnicima sa specifičnim pravima): nakon pritiska potrebno je unijeti raspon datuma koji se želi otključati, potvrditi operaciju i ručno ažurirati sve relevantne brojače.

**Podjela**: omogućuje izvođenje ispisa za jednu od podjela prisutnih u bazi podataka;  

**Od br. knjiženja / Do br. knjiženja**: omogućuje filtriranje ispisa po broju knjiženja (manje značajno u slučaju konačnog ispisa).  


| Funkcija | Značenje |
| --- | --- |
| Pretpregled | Tipka za prikaz pretpregleda ispisa knjige dnevnika. |
| Ispis | Tipka za izvršenje fizičkog ispisa knjige dnevnika. |



:::important Pogledaj također  
[**VIDEO TUTORIJALI O FISKALNIM ISPISIMA**](/docs/video/finance/intro)
:::

