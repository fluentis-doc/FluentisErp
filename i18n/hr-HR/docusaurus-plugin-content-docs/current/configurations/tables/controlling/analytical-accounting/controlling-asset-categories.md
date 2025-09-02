---
title: Kategorija osnovnih sredstava za kontrolu
sidebar_position: 2
---

Obrazac se nalazi u: **Tablice > Kontroling > Troškovno računovodstvo > Kategorije osnovnih sredstva za kontrolu**

:::tip Napomena
Ova je tablica namijenjena tvrtkama koje imaju aktiviranu funkcionalnost *Kontroling*, ali nije obavezna ako se žele primjenjivati računovodstvene logike za vrednovanje amortizacije unutar kontrolinga.
:::

U ovoj tablici definiramo različite tipologije izračuna koje želimo koristiti pri obračunu tehničke amortizacije za potrebe controllinga. Logike upravljačkog računovodstva, kada je riječ o dugotrajnoj imovini, razlikuju se od računovodstvenih logika s ciljem primjene metoda vezanih, primjerice, uz količine proizvedene određenim strojem, umjesto uz njegovu nabavnu vrijednost. Na ovaj način izbjegavaju se iskrivljenja koja proizlaze iz računovodstvenih kriterija amortizacije, koji su često snažno pod utjecajem poreznih pravila. 

#### POLJA TABLICE 

- **Šifra** kategorije

- **Opis** kategorije

- **PODRAČUN TROŠKA** i **PODRAČUN REZERVE** koji će se koristiti: mogu biti isti podračuni povezani s kategorijama dugotrajne imovine u računovodstvu, kako bi se na kraju godine mogle uskladiti dvije logike obračuna, ili pak posebni podračuni za controlling koji se ne koriste u financijskom računovodstvu.

:::tip Napomena
Ako se u kontrolingu, u određenim slučajevima, žele koristiti posebni podračuni odvojeni od onih iz glavnog računovodstva, preporučuje se definirati poseban *Tip konta* s uključenom oznakom *Kontroling*, jer se ti podračuni neće moći koristiti, čak ni greškom, u knjiženjima glavnog računovodstva.
:::

- **OSNOVICA ZA IZRAČUN** možemo izabrati između:  
    - *VRIJEDNOST KAPITALA*, odnosno isti kao u računovodstvu
    - *OBJEKTIVNA VRIJEDNOST*, izvanračunovodstveni podatak imovine
    - *PONOVNA VRIJEDNOST*, specifično polje za kontroling

- **VRSTA IZRAČUNA** može imati pet različitih tipova:  
    - *Postotak*: prema postotku za controlling postavljenom na pojedinom sredstvu
    - *Trajni postotak*: kao prethodni, ali bez provjere preostale vrijednosti za amortizaciju
    - *Količina*: za sredstva čiji je vijek trajanja vezan uz određenu teoretsku proizvedenu količinu (npr. kalup koji može izvesti određeni broj otkucaja)
    - *Trajna količina*: kao prethodni tip, ali bez provjere je li ukupna teoretska količina dosegnuta
    - *Potpuno u godini*: za potpuno amortiziranje sredstva u godini nabave.

- **POSTOTAK** ovdje se može unaprijed postaviti postotak za ovu kategoriju, koji će se automatski prenijeti na pojedino sredstvo, ili se polje može ostaviti praznim kako bi se postotak unosio pojedinačno po sredstvu.

- **KORIŠTENJE AŽURIRANJA POSTOTKA** ako je ova oznaka aktivirana (prisutna i na kartici *Amortizacija za kontroling* unutar kartice sredstva), vrijednost sredstva svake se godine povećava u skladu s vrijednošću zadanom u polju *Faktor* ažuriranja u odjeljku [*Parametri računovodstva*](/docs/configurations/parameters/finance/accounting-parameters).

- **OBNOVA KONTROLNIH VRIJEDNOSTI** koristi se u slučajevima kada nismo sigurni koje izvanknjižne kriterije primijeniti za izračun tehničke amortizacije. Budući da izračun amortizacije započinje od godine YYYY, **FluentisERP** mora prvo izračunati preostale vrijednosti na kraju godine YYYY-1. Ako se promijene postotci ili logike, može biti potrebno resetirati početne podatke kako bi se obračuni mogli ponovno ispravno pokrenuti.

:::danger UPOZORENJE
Budite oprezni pri izmjenama ovih kategorija: ako, primjerice, označite opciju i spremite redak kako biste potvrdili promjenu, **FluentisERP** će vas pitati želite li ažurirati sredstva (cespite) unutar te kategorije.
Ako potvrdite, a riječ je o kategoriji s postotnim izračunom, ali bez unaprijed postavljenog postotka, sustav će resetirati i postotke na pojedinačnim sredstvima.
:::

:::tip Napomena
Kategorije unesene u ovu tablicu, zajedno s pripadajućim postavkama, bit će kasnije dostupne unutar [**kartica sredstva**](/docs/finance-area/fixed-assets/fixed-assets-management) na kartici *Amortizacija za kontroling*, gdje se pojedino sredstvo može povezati s odgovarajućom kategorijom.

:::