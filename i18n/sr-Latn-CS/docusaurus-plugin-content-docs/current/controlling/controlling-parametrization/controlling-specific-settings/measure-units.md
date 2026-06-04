---
title: Jedinice mjere
sidebar_position: 13
---

U tablici ***Jedinice mjere*** potrebno je šifrirati sve jedinice mjere koje su neophodne za upravljanje *kontrolingom*. Tipično će to biti radni sati ljudi i radni sati strojeva, kako bi se podaci mogli preuzeti iz proizvodnje, ali i druge jedinice koje su potrebne za ručne unose u ***Zapisu fizičkih kretanja*** (kWh, m², broj radnih mjesta, broj telefonskih priključaka itd.).

Za svaku od ovih jedinica mjere posebno je važno definirati svojstvo **Vrsta procjene vremena**, koje može imati dvije opcije:

- ***Stanje***: kada su evidentirane količine u osnovi fiksne i ponavljaju se u svakom razdoblju.
- ***Tijek***: kada su specifične za pojedino razdoblje.

:::tip Napomena
Ova postavka je ključna za način na koji će ***FluentisERP*** zahtijevati unos količina u ***Zapisu fizičkih kretanja***: Ako se unosi ***jedinica mjere tipa Stanje***, nije potrebno obavezno unositi razdoblje distribucije, jer će se unesena količina replicirati za svaki period unutar zadanog raspona. Ako se unosi ***jedinica mjere tipa Tijek***, obavezno je definirati razdoblje distribucije kako bi se količina rasporedila na sve periode unutar unesenog raspona.
:::

Kod preuzimanja podataka o vremenu iz proizvodnje, treba uzeti u obzir da se *deklaracije proizvodnje* uvijek evidentiraju u *minutama*. Stoga je potrebno konfigurirati način na koji će ***FluentisERP*** izvršiti konverziju u jedinice mjere koje se koriste za evidentiranje vremena u kontrolingu. 

Prvi korak je definiranje konverzije između minuta iz proizvodnje i jedinice mjere vremena koja će se koristiti u *kontrolingu*. Ako, primjerice, postoji jedinica mjere "radni sat čovjeka", tada će se u tabeli  ***Jedinica mjere***, unutar taba/kartice **Konverzije među ostalim jedinicama mjere**, definirati sljedeće postavke
- *Alternativna jedinica mjere*: 'Min' (jedinica koja ima označene opcije ***Jedinica vremena*** i ***Minute***).
- *Faktor konverzije*: 60
- *Za umnožiti*: flag/opcija označena

Drugi korak je povezivanje ovih jedinica mjere kontrolinga s proizvodnim poslovnim centrima. To se podešava u tabeli ***Mjerne jedinice poslovnih centara za kontroling***. Ovdje se konfiguriraju sljedeći parametri:

- Referentno [***područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) konfiguracije
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) kojem se dodjeljuju podaci o vremenu iz proizvodnje
- Jedinica mjere za evidentiranje  ***vremena ponovnog opremanja***
- Jedinica mjere za evidentiranje ***vremena ljudske radne snage***
- Jedinica mjere za evidentiranje ***vremena stroja***
- Raspon datuma važenja konfiguracije ***(Od datuma – Do datuma)*** 
- Flagovi za uključivanje ili isključivanje različitih vremenskih podataka u izračun produktivnosti centra

