---
title: Dnevnik knjiženja
sidebar_position: 3
---

Kada se prozor otvori, predložena je tekuća obračunska godina, a filtar za zapise postavljen je prema zadanim postavkama da pokriva odgovarajuću obračunsku godinu (datum obračuna računovodstva nije popunjen prema zadanim postavkama pod pretpostavkom da se želi raditi prema "formalnom" datumu); 

prijavljuju se početni podaci o broju stranice, saldu retka dugovne i potražne strane: program predlaže filtar snimaka također uzimajući u obzir datum posljednjeg definitivnog ispisa.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)

 

MOGUĆE OPCIJE: 

**Prikaži zaglavlje**: za upravljanje bilo kojim obrascima koji su već ispisani;

**Definitivno**: ktivira način konačnog ispisa koji, nakon što se izvrši, blokira naknadne promjene u računovodstvenim evidencijama razdoblja;  



Prilikom konačnog ispisa program provjerava prisutnost prethodnih neispisanih zapisa i prisutnost unutar raspona već ispisanih datuma. Nakon pokretanja procesa ispisa (dakle, jednostavni pregled ne provodi nikakvu operaciju, ali morat će se izvršiti fizički ispis, čak i u datoteci, bez obzira na uspjeh procesa) relevantna knjiženja bit će blokirana sve dok su zapisi pohranjeni u tablici **[Računovodstvenih parametara:](/docs/configurations/parameters/finance/accounting-parameters)**; unutar ove tablice nalazi se tipka za brisanje definitivnih ispisa (može se staviti pod određena korisnička prava): nakon pritiska mora se naznačiti raspon datuma koji će se otključati, potvrditi operacija i 
zatim ručno ažurirati sve relevantne brojače;


**Odjel**: omogućuje upravljanje ispisom određivanjem jednog od odjela prisutnih u poduzeću;

**Od broja knjiženja / Do broja knjiženja**: omogućuje filtriranje ispisa prema broj knjiženja (manje značajan u slučaju konačnog ispisa).


| Funkcija | Značenje |
| --- | --- |
| Prethodnih pregled | Gumb za pokretanje pregleda ispisa. |
| Ispiši | Gumb za fizički ispis dnevnika. |



:::important VIDI TAKOĐER
[**VIDEO TUTORIJALI O FISKALNIM ISPISIMA**](/docs/video/finance/intro.md)
:::