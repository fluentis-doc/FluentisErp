---
title: Jedinice mjere 
sidebar_position: 9
---


Putanja forme: **Tablice > Opće postavke > Jedinice mjere**

Ova tablica omogućuje definiranje različitih jedinica mjere prisutnih u sustavu, kao i njihovih detaljnih atributa.  
 
### Jedinice mjere

Ovdje se kodira nova jedinica mjere i dodjeljuju joj se osnovne karakteristike.  

#### Specifična polja  

**J.M. / Opis:** Šifra i opis jedinice mjere kako bi se mogla pozivati unutar sustava.

**Predstavlja Kg:** označava koja šifra predstavlja kilogram kao mjernu jedinicu mase (najčešće se odnosi na jedinicu označenu kao „Kg / Kilogrami“).

**Decimalna mjesta:** omogućuje definiranje broja decimalnih mjesta nakon zareza za prikaz vrijednosti. Na primjer, unosom broja 2 za jedinicu „Kilovat“ vrijednosti će biti prikazane kao X,00; unosom broja 3 kao X,000.

**Dodatna jedinica za Intrastat:** dodatna jedinica mjere (stupac 8 – isporuke; stupac 9 – nabave): koristi se kada carinska tarifa propisuje jedinicu mjere drugačiju od kilograma kao neto mase. Ako je postavljena za J.M. „kg“, automatski će se koristiti u Intrastat izvještavanju.

**Jedinica mase:** označava jedinicu mjere kao mjeru mase (primjenjuje se na odgovarajuće jedinice).  

**Jedinica volumena:** označava jedinicu mjere kao mjeru volumena. 

**Jedinica dimenzije:** označava jedinicu mjere kao mjeru dimenzije.  

**Zadana jedinica:** označava jedinicu mjere koja će se automatski predlagati kao zadana.  

**Jedinica vremena:** označava jedinicu mjere kao mjeru vremena.  

**Minute:** označava jedinicu mjere kao mjernu jedinicu izraženu u minutama.  

:::important IMPORTANTE
**Vrsta vrednovanja vremena:** polje koje se koristi u controlling modulu za definiranje je li jedinica mjere tipa „tok“ ili „stanje“.  
Primjer: „strojni sati“ predstavljaju tok (jer se troše), dok su kvadratni metri zgrade tipično stanje (jer vrijede kontinuirano iz mjeseca u mjesec).
:::

### Konverzije između jedinica mjere  

Ovdje se upravlja konverzijskim faktorima između različitih jedinica mjere radi podrške korištenju dvostrukih jedinica mjere u dokumentima.  

**Alternativna J.M:** unosi se jedinica u koju se konvertira primarna jedinica mjere.  

**Faktor konverzije:** unosi se faktor kojim se množi ili dijeli (npr. 0,5).  

**Za umnožiti:** ako flag nije aktivan, vrijednost se dijeli; ako je flag aktivan, vrijednost se množi s definiranim faktorom.

### Vrsta vrednovanja tarife

Trenutno nije u upotrebi.