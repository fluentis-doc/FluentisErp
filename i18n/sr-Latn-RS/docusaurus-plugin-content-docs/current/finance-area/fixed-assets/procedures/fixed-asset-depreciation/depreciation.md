---
title: Amortizacija
sidebar_position: 2
---

Pre svega, od ključnog je značaja pravilno upravljati opcijom **Inkrementalne operacije**. Budući da se postupak obračuna amortizacije razlikuje u zavisnosti od ove postavke, ako preduzeće koristi inkrementalne operacije za pojedine kategorije osnovnih sredstava, potrebno je aktivirati odgovarajući filter kako bi se prikazali ispravni podaci.

Ako postoje kategorije osnovnih sredstava koje koriste inkrementalne operacije i kategorije koje ih ne koriste, obračun amortizacije mora se izvršiti u dve odvojene faze – jednom za inkrementalne, a drugi put za neinkrementalne kategorije.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

U donjem delu obrasca potrebno je definisati **referentnu godinu** obračuna amortizacije. Uobičajeno je da se unese godina koja prethodi tekućoj poslovnoj godini.

Obračun amortizacije za godinu **X** nije moguće izvršiti ukoliko prethodno nije obračunata amortizacija za godinu **X − 1**.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

Nakon izvršenog pretraživanja moguće je, za svaki red pojedinačno, uneti broj dana obračuna i procenat amortizacije.

Međutim, preporučuje se da se ovakvi specifični slučajevi definišu direktno na kartici pojedinačnog osnovnog sredstva, kako bi se kasnije mogao izvršiti obračun nad svim odabranim stavkama odjednom.

Alternativno, ukoliko je potrebno koristiti različite stope amortizacije za različita sredstva, može se aktivirati parametar modula **[Parametri osnovnih sredstava](/docs/configurations/parameters/finance/fixed-assets-parameters)** pod nazivom **Procenat pojedinačnog sredstva**, koji omogućava definisanje posebne stope amortizacije za svako pojedinačno osnovno sredstvo.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)

| Funkcija | Značenje |
| --- | --- |
| Traži | Pretražuje listu osnovnih sredstava za obračun amortizacije. |
| Amortizacija | Izvršava obračun amortizacije za odabrane redove. |