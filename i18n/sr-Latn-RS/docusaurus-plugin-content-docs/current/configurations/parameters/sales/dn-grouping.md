---
title: Parametri grupiranja otpremnice 
sidebar_position: 8
---

:::tip[Fast Start]
Tablica je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start)

U slučaju da se želi izvršiti ručna konfiguracija, potrebno je pogledati kontrolni popis na povezanoj stranici.
:::

Parametri grupiranja omogućuju definiranje načina na koji će se dokumenti razdvajati tijekom postupaka obrade. U tu svrhu mogu se koristiti određene oznake (flagovi) za grupiranje dokumenata prema različitim svojstvima, poput kategorije, vrste dokumenta ili drugih relevantnih karakteristika.
Ovi opći parametri grupiranja konfiguriraju se samo jednom i automatski će se primjenjivati na sve postupke, te će vrijediti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva ponašanje različito od onoga postavljenog u općim parametrima, tada je potrebno prilagoditi parametre grupiranja unutar njihove specifične evidencije.
Na taj se način osigurava fleksibilno i prilagodljivo upravljanje obradama, omogućujući ispunjavanje specifičnih potreba svakog kupca ili dobavljača, uz održavanje centralizirane i dosljedne konfiguracije za većinu operacija.

Pomoću ovih parametara odlučuju se pravila grupiranja za postupke:   
- **Stvaranje otpremnice prema Picking listi**;  
- **Stvaranje otpremnice iz Picking liste utovarnih jedinica**;   
- **Stvaranje otpremnice iz liste prijenosa utovarnih jedinica**;   
- **Stvaranje otpremnice prema POS-u**;  
- **Izrada otpremnice za prodaju iz narudžbe kupca**.      

U slučaju obrade (evidencije) više dokumenata, moguće ih je grupirati prema sljedećim svojstvima dodavanjem odgovarajućih oznaka (flagova):  
- **vrsta dokumenta**: izvorni dokumenti s istom [Vrstom](/docs/configurations/tables/sales/sales-order-types) kreirat će jedinstvenu otpremnicu  
- **godina**: izvorni dokumenti iz iste godine kreirat će jedinstvenu otpremnicu 
- **mjesec**: izvorni dokumenti iz istog mjeseca kreirat će jedinstvenu otpremnicu 
- **tečaj**: izvorni dokumenti s istim tečajem kreirat će jedinstvenu otpremnicu  
- **projekt**: izvorni dokumenti s istim projektom u [Zaglavlje](/docs/sales/sales-orders/create-new-sales-orders/sales-order) kreirat će jedinstvenu otpremnicu 
- **vrsta i uvjeti plaćanja**: izvorni dokumenti s istim uvjetima plaćanja kreirat će jedinstvenu otpremnicu  
- **odredište**: izvorni dokumenti s istim odredištem i prijevoznikom kreirat će jedinstvenu otpremnicu   
- **suvlasnici**: izvorni dokumenti s istom vrstom operacije za upravljanje osnovnim sredstvima kreirat će jedinstvenu otpremnicu

Potrebno je označiti stupce (flagirati) koji odgovaraju grupiranjima koja želite primijeniti za te obrade.     
Oznaka **Sažetak** ključna je za izradu jedinstvene otpremnice na temelju više početnih dokumenata. Ostale oznake odnose se na posebna grupiranja.     
Stupac **Prioritet** trenutno se ne koristi.