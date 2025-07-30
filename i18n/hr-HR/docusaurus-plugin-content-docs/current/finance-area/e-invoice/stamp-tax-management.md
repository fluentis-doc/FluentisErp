---
title: Upravljanje biljevinama
sidebar_position: 2
---

Upravljanje ispravnim umetanjem virtualne porezne marke u xml putanju elektroničke fakture od strane Fluentisa odvija se automatski, stoga će biti dovoljno kodirati i ispravno umetnuti ovaj trošak na fakturu (kao što je sažeto u nastavku). 

- u tablicu troškova upišite trošak tipa "marka" u vrijednosti od 2 eura  

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- trošak tipa "markica" mora se dodati u registar kupaca odabirom koda koji je prethodno kreiran u tablici Vrste troškova 

   n.b. kako se biljegovina ne bi zaračunala kupcu u trošku biljegine u registru, vrijednost mora biti postavljena na "0" 

 ![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- u tablici poduzeća ispunite polje "Troškovi marke"=2 i "Minimalni troškovi krova"=77,47

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Nakon što postavite sljedeće postavke, predloženi trošak će se automatski pojaviti na prodajnom računu, stoga ćete u svakom pojedinačnom računu moći odabrati želite li ili ne naplatiti virtualnu bilježninu (kako biste izbjegli naplatu bilježine, unesite trošak s iznosom = 0).

Prilikom izrade XML datoteke, ako se trošak kao što je biljegovina pojavi u sažetku fakture, relevantni odjeljak automatski se dodaje u izgled. 