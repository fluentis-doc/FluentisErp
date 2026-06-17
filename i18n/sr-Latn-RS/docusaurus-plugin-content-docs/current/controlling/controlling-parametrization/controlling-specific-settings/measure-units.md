---
title: Merne jedinice
sidebar_position: 13
---

U tabeli ***Merne jedinice*** potrebno je definisati sve merne jedinice koje su neophodne za upravljanje *kontrolingom*. To su najčešće radni sati zaposlenih i radni sati mašina, kako bi podaci mogli da se preuzimaju iz proizvodnje, ali i druge jedinice potrebne za ručne unose u ***Evidenciju fizičkih kretanja*** (kWh, m², broj radnih mesta, broj telefonskih priključaka i slično).

Za svaku od ovih mernih jedinica posebno je važno definisati svojstvo **Tip procene vremena**, koje može imati dve vrednosti:

- ***Stanje***: kada su evidentirane količine u osnovi fiksne i ponavljaju se u svakom periodu.
- ***Tok***: kada su specifične za određeni period.

:::tip Napomena
Ova postavka je ključna za način na koji će ***FluentisERP*** zahtevati unos količina u ***Evidenciji fizičkih kretanja***. Ako se unosi ***merna jedinica tipa Stanje***, nije obavezno unositi period raspodele, jer će se uneta količina automatski preneti na svaki period unutar zadatog raspona. Ako se unosi ***merna jedinica tipa Tok***, obavezno je definisati period raspodele kako bi se količina rasporedila na sve periode unutar unetog raspona.
:::

Prilikom preuzimanja podataka o vremenu iz proizvodnje, treba imati u vidu da se *proizvodne prijave* uvek evidentiraju u *minutima*. Zbog toga je potrebno definisati način na koji će ***FluentisERP*** izvršiti konverziju u merne jedinice koje se koriste za evidentiranje vremena u kontrolingu.

Prvi korak je definisanje konverzije između minuta iz proizvodnje i merne jedinice vremena koja će se koristiti u *kontrolingu*. Na primer, ako postoji merna jedinica „radni sat zaposlenog“, u tabeli ***Merne jedinice***, na kartici **Konverzije sa drugim mernim jedinicama**, potrebno je definisati sledeće:

- *Alternativna merna jedinica*: „Min“ (jedinica kod koje su označene opcije ***Jedinica vremena*** i ***Minuti***)
- *Faktor konverzije*: 60
- *Pomnoži*: opcija uključena

Drugi korak je povezivanje ovih mernih jedinica kontrolinga sa proizvodnim poslovnim centrima. Ovo se podešava u tabeli ***Merne jedinice poslovnih centara za kontroling***. U njoj se definišu sledeći parametri:

- Referentno [***područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) konfiguracije
- [***Centar troška***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) kojem se dodeljuju podaci o vremenu iz proizvodnje
- Merna jedinica za evidentiranje ***vremena pripreme***
- Merna jedinica za evidentiranje ***vremena rada zaposlenih***
- Merna jedinica za evidentiranje ***vremena rada mašine***
- Period važenja konfiguracije ***(Od datuma – Do datuma)***
- Opcije za uključivanje ili isključivanje različitih vremenskih podataka u obračun produktivnosti centra