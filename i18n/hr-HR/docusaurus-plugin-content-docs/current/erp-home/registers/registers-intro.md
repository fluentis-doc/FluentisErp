---
title: Šifarnici  
sidebar_position: 1
---

U ERP sustavu kao što je **Fluentis**, u kojem postoji povezanost i sinergija između različitih poslovnih područja i modula te zajednički izvor podataka za više poduzeća i funkcionalnosti, učinkovito upravljanje **šifarnicima - matičnim podacima** ima ključnu ulogu.

:::tip Informacije
Za opći uvod i detaljnije informacije o **strukturi ERP sustava** kliknite [ovdje](/docs/guide/fluentis-erp-structure).
:::

Ovi osnovni podaci omogućuju visok stupanj automatizacije poslovnih procesa jer sustav tijekom rada automatski koristi informacije pohranjene u matičnim podacima.

:::note Primjer
Prilikom unosa novog izlaznog računa sustav će automatski preuzeti zadane uvjete plaćanja definirane u matičnim podacima kupca, stopu PDV-a iz matičnih podataka artikla, a eventualne popuste iz matičnih podataka kupca ili iz cjenika artikla koji je povezan s tim kupcem.
:::

U ovoj se sekciji upravlja sljedećim vrstama matičnih podataka:

- [**Matični podaci kupaca, dobavljača, banaka i agenata**](/docs/erp-home/registers/contacts/registers-management): sastoje se od općeg dijela **Kontakt**, koji sadrži osnovne podatke (naziv, porezne podatke, adresu i sl.), te detaljnog dijela **Računovodstveni podaci**, koji je povezan s odgovarajućim kontom u kontnom planu. Ova sekcija obuhvaća:
  - administrativne podatke (konta, PDV stope i sl.);
  - porezne podatke (posebni porezni režimi i podaci za e-račune);
  - podatke o plaćanju (zadani uvjeti plaćanja i bankovni računi);
  - podatke o isporuci (primatelji i adrese isporuke);
  - troškove i popuste (stalni popusti i dodatni troškovi);
  - cjenike (povezivanje prodajnih i nabavnih cjenika);
  - agente (povezivanje agenata s kupcima);
  - ostale podatke.

- [**Matični podaci artikala**](/docs/erp-home/registers/items/master-item-intro): organizirani su u više kartica prema vrsti i namjeni podataka (npr. administrativni podaci, mjerne jedinice itd.).

- [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): iako se nalazi unutar područja matičnih podataka zbog povezanosti s kupcima i dobavljačima, organiziran je kao tablica za definiranje konta i njihovih grupiranja.

- **[Radni ciklusi](/docs/erp-home/registers/production/routes/cycle-management-and-production-phases), [sastavnice](/docs/erp-home/registers/production/bill-of-materials/bom) i [prototipovi](/docs/erp-home/registers/production/standardization/new-prototype)**: matični podaci vezani uz proizvodne procese.