---
title: Parametri za grupiranje računa  
sidebar_position: 9
---

:::tip[FAst Start]
Tablica je povezana s procedurom [**Fast Start**](/docs/guide/fast-start)

U slučaju da želite ručno konfigurirati, pogledajte kontrolni popis na povezanom linku.
:::

Parametri za grupiranje omogućuju definiranje načina na koji će se dokumenti dijeliti tijekom procesa izvršenja. Za to je moguće koristiti specifične oznake (flagove) za grupiranje dokumenata prema različitim svojstvima, poput kategorije, vrste dokumenta ili drugih relevantnih karakteristika.
Ovi opći parametri grupiranja konfiguriraju se jednom i automatski se primjenjuju na sve procedure, važeći za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drugačije ponašanje od onog definirano općim parametrima, parametri grupiranja moraju se prilagoditi u njihovoj specifičnoj kartoteci.
Na taj se način osigurava fleksibilno i prilagodljivo upravljanje izvršenjima, omogućujući zadovoljenje posebnih zahtjeva svakog kupca ili dobavljača, a istovremeno se održava centralizirana i konzistentna konfiguracija za većinu operacija.  

U ovom su prozoru definirana pravila grupiranja za sljedeće procedure:  
-  **Valorizacija otpremnice**;  
-  **Vrednovanje intervencija**;  
-  **Stvaranje izlaznog računa prema Picking listi**;  
-  **Stvaranje izlaznog računa prema picking listi utovarne jedinice**;  
-  **Stvaranje izlaznog računa prema POS-u**.       

U slučaju izvršenja više dokumenata, moguće ih je grupirati prema sljedećim svojstvima, označavanjem odgovarajućih flagova:  
- **Vrsta dokumenta**: izvorišni dokumenti iste vrste kreirat će jedan račun   
- **Godina**: izvorišni dokumenti iste godine kreirat će jedan račun   
- **Mjesec**: izvorišni dokumenti istog mjeseca kreirat će jedan račun  
- **Tečaj**: izvorišni dokumenti s istim tečajem kreirat će jedan račun   
- **Projekt**: izvorišni dokumenti s istim projektom u zaglavlju kreirat će jedan račun   
- **Grupiranje za tip i uvjet plaćanja**: izvorišni dokumenti s istim uvjetima plaćanja kreirat će jedan račun  
- **Odredište**: izvorišni dokumenti s istim odredištem i prijevoznikom kreirat će jedan račun     
- **Zajednički nositelj**: izvorišni dokumenti s istom vrstom operacije za upravljanje imovinom kreirat će jedan račun  

Potrebno je označiti stupce za grupiranja koja želite primijeniti za ove izvršenja.  
Flag **Sažetak** je ključan za kreiranje jednog dokumenta koji obuhvaća više početnih dokumenata. Ostali flagovi odnose se na posebne vrste grupiranja.     
Stupac **Prioritet** trenutno nije u upotrebi.  