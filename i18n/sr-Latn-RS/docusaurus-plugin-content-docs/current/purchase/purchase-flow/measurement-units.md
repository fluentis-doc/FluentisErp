---
title: Upravljanje glavnom i alternativnom jedinicom mjere
sidebar_position: 4
---

Ova funkcionalnost omogućuje definiranje i korištenje različitih **jedinica mjere** za isti proizvod u različitim kontekstima, poput prodaje, nabave ili upravljanja skladištem.

:::note
Za aktiviranje upravljanja **alternativnim jedinicama mjere**, potrebno je uključiti opciju **Upravljanje dvostrukom jedinicom mjere** u [Parametrima](/docs/configurations/parameters/sales/dn-parameters).
:::

**Glavna jedinica mjere**, koja je obavezna, definira se za svaki artikl u njegovoj osnovnoj kartici i ne može se mijenjati nakon što je artikl već korišten u dokumentima ili skladišnim zapisima. L'**Alternativna jedinica mjere**, omogućuje upravljanje proizvodom u jedinici različitoj od glavne i može se postaviti u kartici [Alternativne jedinice mjere](/docs/erp-home/registers/items/create-new-item) u šifrarniku artikala.  

U dokumentima, glavna jedinica mjere prikazuje se u tablici **Artikli**, dok je widget za alternativnu jedinicu mjere vidljiv u kartici **Podaci o artiklu**, koja sadrži polja **Alternativna količina** i **Cijena po alternativnoj jedinici mjere**,ali samo ako je u parametrima modula aktivirana opcija **Upravljanje dvostrukom jedinicom mjere**.

Ako je uključena opcija **Automatska prijedlog alternativne jedinice mjere** sustav će automatski predložiti alternativnu jedinicu mjere koja ima aktiviran tipku **Zadano** u šifrarniku artikla, izračunavajući i unoseći automatski alternativnu količinu koristeći faktor konverzije.  

Tipke prisutne u kartici **Alternativne jedinice mjere** u šifrarniku artikla utječu na prijedlog i izračun količina u dokumentima. Ako je aktivirana tipka **Zadano** ta jedinica mjere će se koristiti za automatski prijedlog. Ako je uključena tipka **Obavezno** svaka promjena glavne ili alternativne količine automatski preračunava drugu količinu, održavajući vezu putem faktora konverzije. S aktivnom tipkom **Prioritet** pak, alternativna količina ima prednost, a glavna se količina preračunava bez ponovnog izračuna alternative.

Izračun alternativne količine temelji se na **faktoru konverzije**, koji se može množiti ili dijeliti s glavnom količinom; izbor se postavlja u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) putem odgovarajućih tipki.

U dokumentima, u koloni **Jedinica mjere**, predlaže se glavna jedinica mjere artikla, ali korisnik je može zamijeniti jednom od dostupnih alternativnih jedinica mjere. Ako se odabere alternativna jedinica mjere u ovoj koloni, neće biti moguće odrediti drugu u istoimenom widgetu, jer se u pokretu skladišta mogu koristiti samo dvije jedinice mjere: upravljačka (uvijek glavna jedinica mjere artikla) i alternativna, specificirana u koloni **Jedinica mjere** ili u widgetu Alternativna jedinica mjere.