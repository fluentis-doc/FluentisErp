---
title: Izračun raspoloživosti
sidebar_position: 5
---

:::important Čemu služi
Izračun raspoloživosti u Fluentisu ključan je alat koji omogućuje precizno određivanje raspoloživosti artikala unutar skladišta. Funkcionalnost je dostupna putem jednostavnog korisničkog sučelja u kojem je moguće odabrati skladišta za koja se želi izvršiti izračun. Korisnik može definirati šifru i opis skladišta te tako odrediti osnovu za izračun.

U dijelu namijenjenom izračunu moguće je postaviti kriterije za fizičku i logičku raspoloživost te odrediti treba li uzeti u obzir dokumente vezane uz nabavu, prodaju, planiranu proizvodnju i oslobođenu proizvodnju. Također je moguće definirati vremensko razdoblje za koje se izračun provodi, čime se povećava preciznost dobivenih podataka.

Ova funkcionalnost ne služi samo za praćenje zaliha, već i za donošenje operativnih i strateških odluka u stvarnom vremenu, omogućujući pravovremeno reagiranje na potrebe nabave i prodaje. Zahvaljujući izračunu raspoloživosti, Fluentis optimizira upravljanje zalihama i povećava operativnu učinkovitost.
:::

Prozor za izračun raspoloživosti otvara se putem izbornika **Početna > Artikli > Izračun raspoloživosti**.

Putem ove forme definiraju se skladišta za koja se želi izračunavati raspoloživost, a koja će se zatim koristiti u formi [Analiza raspoloživosti](/docs/erp-home/registers/items/availability-analysis).

Forma se sastoji od mreže u koju se unose **Skladište** i njegov **Opis** za sva skladišta koja trebaju biti uključena u izračun raspoloživosti. Dodavanjem ili uklanjanjem skladišta iz ove mreže ono će automatski biti dodano ili uklonjeno i iz mreže skladišta u formi *Analiza raspoloživosti*.

U desnom dijelu moguće je definirati način izračuna **Fizičke raspoloživosti** i **Logičke raspoloživosti** za: kooperaciju, nabavu, prodaju, planiranu proizvodnju, oslobođenu proizvodnju i skladište. Moguće je odabrati jednu, više ili sve ponuđene opcije, pri čemu odabiri za fizičku i logičku raspoloživost mogu biti različiti.

Također je moguće definirati razdoblje koje sustav treba uzeti u obzir za izračun raspoloživosti unosom **Broja dana** od današnjeg datuma (odnosno datuma pokretanja analize raspoloživosti) do kojeg sustav treba provjeravati raspoloživost u dokumentima.

Trenutno se ovi parametri više ne koriste jer su njihove funkcionalnosti premještene u formu **Analiza raspoloživosti**. Jedini dio koji je i dalje aktivan jest mreža **Skladišta**.

Nakon definiranja parametara moguće je pokrenuti [Analizu raspoloživosti](/docs/erp-home/registers/items/availability-analysis) putem izvještaja **Analiza raspoloživosti**.