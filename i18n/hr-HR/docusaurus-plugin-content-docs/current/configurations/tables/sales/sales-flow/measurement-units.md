---
title: Upravljanje glavnom i alternativnom jedinicom mjere
sidebar_position: 5
---

Ova funkcionalnost omogućuje definiranje i korištenje različitih jedinica mjere za isti proizvod u različitim kontekstima, poput prodaje, nabave ili upravljanja skladištem.

:::note
Kako bi se omogućilo upravljanje alternativnim jedinicama mjere, potrebno je aktivirati oznaku Upravljanje dvostrukom jedinicom mjere u [Parametrima](/docs/configurations/parameters/sales/dn-parameters) .
:::

Glavna jedinica mjere, obavezna za svaki artikl, definira se u njegovoj kartici i ne može se mijenjati nakon što je artikl upotrijebljen u dokumentima ili skladišnim prometima.
Alternativna jedinica mjere omogućuje upravljanje proizvodom u jedinici različitoj od glavne i postavlja se u kartici Alternativne jedinice mjere unutar kartice artikla.  

U dokumentima se glavna jedinica mjere prikazuje u mreži [Artikli](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn), dok je widget za alternativnu jedinicu mjere vidljiv u kartici Podaci o artiklu, koja sadrži polja Alternativna količina i Cijena po alternativnoj jedinici mjere – ali samo ako je u parametrima modula aktivna oznaka Upravljanje dvostrukom jedinicom mjere.

Ako je aktivna oznaka Automatski prijedlog alternativne jedinice mjere, sustav će automatski predložiti alternativnu jedinicu mjere koja ima aktivan status Zadano u kartici artikla te automatski izračunati i unijeti alternativnu količinu koristeći faktor konverzije.

Flagovi prisutni na kartici "Alternativne jedinice mjere" kartona artikla utječu na prijedlog i izračun količina u dokumentima. Ako je flag "Zadano" aktivan, to će biti jedinica mjere koja se koristi za automatski prijedlog. Ako je flag "Obavezn" aktiviran, svaka promjena glavne ili alternativne količine rezultirat će automatskim ponovnim izračunom odgovarajuće količine, održavajući vezu putem faktora konverzije. Kada je flag "Prioritetno" aktivan, alternativna količina ima prednost, izračunavajući glavnu količinu bez ponovnog izračuna alternative.

Izračun alternativne količine temelji se na faktoru konverzije, koji se može množiti ili dijeliti s glavnom količinom; ovaj odabir konfigurira se u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) pomoću odgovarajućih flagova.  

U dokumentima, u koloni "Jedinica mjere", predložena je glavna jedinica mjere artikla, ali korisnik je može zamijeniti jednom od dostupnih alternativnih jedinica mjere. Ako se odabere alternativna jedinica mjere u ovoj koloni, neće biti moguće odrediti drugu u istoimenom widgetu, jer se u jednom pokretu skladišta mogu koristiti samo dvije jedinice mjere: upravljačka (uvijek glavna jedinica mjere artikla) i alternativna, navedena u koloni "Jedinica mjere" ili u widgetu Alternativne jedinice mjere.

