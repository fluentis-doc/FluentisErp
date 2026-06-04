---
title: Upravljanje glavnom i alternativnom jedinicom mjere
sidebar_position: 5
---

Ova funkcionalnost omogućava definiranje i korištenje različitih jedinica mjere za isti proizvod u različitim kontekstima, kao što su prodaja, nabava ili upravljanje skladištem.  

:::note
Za omogućavanje upravljanja alternativnim jedinicama mjere, potrebno je aktivirati opciju Upravljanje dvostrukom jedinicom mjere u [Parametrima](/docs/configurations/parameters/sales/dn-parameters).
:::

Glavna jedinica mjere, obavezna, definira se za svaki artikl u njegovom kartonu i ne može se mijenjati nakon što je artikl korišten u dokumentima ili skladišnim transakcijama. Alternativna jedinica mjere, s druge strane, omogućava upravljanje artiklom u jedinici različitoj od glavne i može se postaviti u tabu Alternativne jedinice mjere unutar kartona artikla.  

U dokumentima, glavna jedinica mjere prikazuje se u mreži [Artikli](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn), dok je widget za alternativnu jedinicu mjere vidljiv u tabu Podaci o artiklu, koji sadrži polja Alternativna količina i Cijena po alternativnoj jedinici mjere, ali samo ako je opcija Upravljanje dvostrukom jedinicom mjere aktivirana u parametrima modula.

Ako je opcija "Automatski prijedlog alternativne jedinice mjere" omogućena, sustav će automatski predložiti alternativnu jedinicu mjere koja ima aktiviran Zadano flag u kartonu artikla, izračunavajući i automatski unoseći alternativnu količinu pomoću faktora konverzije.  

Flagovi prisutni u tabu Alternativne jedinice mjere kartona artikla utječu na prijedlog i izračun količina u dokumentima. Ako je aktiviran flag Zadano, ta jedinica mjere će se koristiti za automatski prijedlog. Ako je aktiviran flag Obavezno, svaka promjena glavne ili alternativne količine rezultirat će automatskim preračunom odgovarajuće količine, zadržavajući vezu preko faktora konverzije. S aktiviranim flagom Prioritetna, alternativna količina ima prednost, a glavna količina se izračunava bez ponovnog preračuna alternative.  

Izračun alternativne količine temelji se na faktoru konverzije, koji se može množiti ili dijeliti s glavnom količinom; taj izbor se konfigurira u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) putem odgovarajućih opcija.  

U dokumentima, u stupcu Jedinica mjere, predlaže se glavna jedinica mjere artikla, ali korisnik je može zamijeniti jednom od dostupnih alternativnih jedinica mjere. Ako se u ovom stupcu odabere alternativna jedinica mjere, neće biti moguće postaviti drugu u istom widgetu, jer se u skladišnoj transakciji mogu koristiti samo dvije jedinice mjere: upravljačka (uvijek glavna jedinica artikla) i alternativna, definirana u stupcu Jedinica mjere ili u widgetu Alternativna jedinica mjere.  
