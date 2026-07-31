---
title: Upravljanje glavnom i alternativnom jedinicom mere
sidebar_position: 4
---

Ova funkcionalnost omogućava definisanje i korišćenje različitih **jedinica mere** za isti proizvod u različitim kontekstima, kao što su prodaja, nabavka ili upravljanje skladištem.

:::note
Za aktiviranje upravljanja **alternativnim jedinicama mere**, potrebno je uključiti opciju **Upravljanje dvostrukom jedinicom mere** u [Parametrima](/docs/configurations/parameters/sales/dn-parameters).
:::

**Glavna jedinica mere**, koja je obavezna, definiše se za svaki artikal u njegovoj osnovnoj kartici i ne može se menjati nakon što je artikal već korišćen u dokumentima ili skladišnim zapisima. **Alternativna jedinica mere** omogućava upravljanje proizvodom u jedinici različitoj od glavne i može se podesiti na kartici [Alternativne jedinice mere](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala.

U dokumentima se glavna jedinica mere prikazuje u tabeli **Artikli**, dok je *widget* za alternativnu jedinicu mere vidljiv na kartici **Podaci o artiklu**, koja sadrži polja **Alternativna količina** i **Cena po alternativnoj jedinici mere**, ali samo ako je u parametrima modula aktivirana opcija **Upravljanje dvostrukom jedinicom mere**.

Ako je uključena opcija **Automatski predlog alternativne jedinice mere**, sistem će automatski predložiti alternativnu jedinicu mere koja ima aktivirano dugme **Podrazumevano** u šifarniku artikla, obračunavajući i automatski unoseći alternativnu količinu koristeći faktor konverzije.

Dugmad prisutna na kartici **Alternativne jedinice mere** u šifarniku artikla utiču na predlog i obračun količina u dokumentima. Ako je aktivirano dugme **Podrazumevano**, ta jedinica mere će se koristiti za automatski predlog. Ako je uključeno dugme **Obavezno**, svaka promena glavne ili alternativne količine automatski preračunava drugu količinu, održavajući vezu putem faktora konverzije. Sa aktivnim dugmetom **Prioritet**, alternativna količina ima prednost, a glavna količina se preračunava bez ponovnog obračuna alternative.

Obračun alternativne količine zasniva se na **faktoru konverzije**, koji se može množiti ili deliti sa glavnom količinom; izbor se podešava u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters/) putem odgovarajućih dugmadi.

U dokumentima se u koloni **Jedinica mere** predlaže glavna jedinica mere artikla, ali korisnik je može zameniti jednom od dostupnih alternativnih jedinica mere. Ako se u ovoj koloni izabere alternativna jedinica mere, neće biti moguće odrediti drugu u istoimenom *widgetu*, jer se u kretanju skladišta mogu koristiti samo dve jedinice mere: upravljačka (uvek glavna jedinica mere artikla) i alternativna, navedena u koloni **Jedinica mere** ili u *widgetu* Alternativna jedinica mere.