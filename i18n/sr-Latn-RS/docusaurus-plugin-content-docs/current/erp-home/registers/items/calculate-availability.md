---
title: Obračun raspoloživosti
sidebar_position: 5
---

:::important Čemu služi
Obračun raspoloživosti u Fluentisu predstavlja ključni alat koji omogućava precizno određivanje raspoloživosti artikala unutar skladišta. Funkcionalnost je dostupna putem jednostavnog korisničkog interfejsa u kojem je moguće odabrati skladišta za koja se želi izvršiti obračun. Korisnik može definisati šifru i naziv skladišta te na taj način odrediti osnovu za obračun.

U delu namenjenom obračunu moguće je postaviti kriterijume za fizičku i logičku raspoloživost, kao i odrediti da li treba uzeti u obzir dokumente vezane za nabavku, prodaju, planiranu proizvodnju i oslobođenu proizvodnju. Takođe je moguće definisati vremenski period za koji se obračun vrši, čime se povećava preciznost dobijenih podataka.

Ova funkcionalnost ne služi samo za praćenje zaliha, već i za donošenje operativnih i strateških odluka u realnom vremenu, omogućavajući pravovremeno reagovanje na potrebe nabavke i prodaje. Zahvaljujući obračunu raspoloživosti, Fluentis optimizuje upravljanje zalihama i povećava operativnu efikasnost.
:::

Prozor za obračun raspoloživosti otvara se putem menija **Početna > Artikli > Obračun raspoloživosti**.

Putem ove forme definišu se skladišta za koja se želi obračunavati raspoloživost, a koja će se zatim koristiti u formi [Analiza raspoloživosti](/docs/erp-home/registers/items/availability-analysis).

Forma se sastoji od mreže u koju se unose **Skladište** i njegov **Naziv** za sva skladišta koja treba uključiti u obračun raspoloživosti. Dodavanjem ili uklanjanjem skladišta iz ove mreže, ono će automatski biti dodato ili uklonjeno i iz mreže skladišta u formi *Analiza raspoloživosti*.

U desnom delu moguće je definisati način obračuna **Fizičke raspoloživosti** i **Logičke raspoloživosti** za: kooperaciju, nabavku, prodaju, planiranu proizvodnju, oslobođenu proizvodnju i skladište. Moguće je odabrati jednu, više ili sve ponuđene opcije, pri čemu izbori za fizičku i logičku raspoloživost mogu biti različiti.

Takođe je moguće definisati period koji sistem treba da uzme u obzir za obračun raspoloživosti unosom **Broja dana** od današnjeg datuma (odnosno datuma pokretanja analize raspoloživosti) do kojeg sistem treba da proverava raspoloživost u dokumentima.

Trenutno se ovi parametri više ne koriste jer su njihove funkcionalnosti premeštene u formu **Analiza raspoloživosti**. Jedini deo koji je i dalje aktivan jeste mreža **Skladišta**.

Nakon definisanja parametara moguće je pokrenuti [Analizu raspoloživosti](/docs/erp-home/registers/items/availability-analysis) putem izveštaja **Analiza raspoloživosti**.