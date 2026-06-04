---
title: Parametri grupiranja narudžbi  
sidebar_position: 7
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako želite ručno konfigurirati, pogledajte kontrolni popis na povezanoj stranici.  
:::

Parametri grupiranja omogućuju definiranje načina na koji se dokumenti dijele tijekom postupaka izvršenja narudžbi. Za to je moguće koristiti posebne flagove za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne značajke.  
Ovi opći parametri grupiranja potrebno je postaviti samo jednom, a zatim se automatski primjenjuju na sve postupke, vrijedeći za sve kupce i dobavljače. Međutim, ukoliko neki kupac ili dobavljač zahtijeva drugačiji način rada od onog postavljenog u općim parametrima, moguće je prilagoditi parametre grupiranja unutar njihove specifične kartice.  
Na taj način osigurava se fleksibilno i prilagodljivo upravljanje izvršenjima, koje zadovoljava posebne potrebe svakog kupca ili dobavljača, a istovremeno održava centraliziranu i usklađenu konfiguraciju za većinu operacija.

U ovom se prozoru definiraju pravila grupiranja za postupak:   
**Kreiranje prodajnog naloga iz ponuda**: prilikom izvršavanja više ponuda u nalogu, moguće je grupirati ponude prema sljedećim svojstvima:  
- **Vrsta dokumenta**: ponude s istom [Tipom](/docs/configurations/tables/sales/sales-offer-type) kreirat će jedan nalog  
- **Godina**: ponude iz iste godine kreirat će jedan nalog  
- **Mjesec**: ponude iz istog mjeseca kreirat će jedan nalog  
- **Tečaj**: ponude s istim tečajem kreirat će jedan nalog  
- **Projekt**: ponude s istim projektom u [Zaglavlju](/docs/sales/offers/insert-offer) kreirat će jedan nalog
- **Grupiranje za tip i uvjet plaćanja**: ponude s istim uvjetima plaćanja kreirat će jedan nalog  
- **Odredište**: ponude s istim odredištem i prijevoznikom kreirat će jedan nalog  
 
Potrebno je označiti stupce koji se odnose na grupiranja koja želite primijeniti za ovu obradu.  
Flag **Sažetak** je ključno za kreiranje jednog dokumenta iz više izvorišnih dokumenata. Ostali flagovi odnose se na specifična grupiranja.            
Stupac **Prioritet** trenutno se ne koristi.  