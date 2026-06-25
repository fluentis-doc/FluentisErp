---
title: Šifarnici
sidebar_position: 1
---

U ERP sistemu kao što je **Fluentis**, u kojem postoji povezanost i sinergija između različitih poslovnih oblasti i modula, kao i zajednički izvor podataka za više preduzeća i funkcionalnosti, efikasno upravljanje **šifarnicima – matičnim podacima** ima ključnu ulogu.

:::tip Informacije
Za opšti uvod i detaljnije informacije o **strukturi ERP sistema** kliknite [ovdje](/docs/guide/fluentis-erp-structure).
:::

Ovi osnovni podaci omogućavaju visok stepen automatizacije poslovnih procesa jer sistem tokom rada automatski koristi informacije sačuvane u matičnim podacima.

:::note Primjer
Prilikom unosa novog izlaznog računa sistem će automatski preuzeti podrazumijevane uslove plaćanja definisane u matičnim podacima kupca, stopu PDV-a iz matičnih podataka artikla, a eventualne rabate iz matičnih podataka kupca ili iz cjenovnika artikla koji je povezan sa tim kupcem.
:::

U ovoj sekciji upravlja se sljedećim vrstama matičnih podataka:

- [**Matični podaci kupaca, dobavljača, banaka i agenata**](/docs/erp-home/registers/contacts/registers-management): sastoje se od opšteg dijela **Kontakt**, koji sadrži osnovne podatke (naziv, poreske podatke, adresu i sl.), i detaljnog dijela **Računovodstveni podaci**, koji je povezan sa odgovarajućim kontom u kontnom planu. Ova sekcija obuhvata:
  - administrativne podatke (konta, PDV stope i sl.);
  - poreske podatke (posebni poreski režimi i podaci za e-račune);
  - podatke o plaćanju (podrazumijevani uslovi plaćanja i bankovni računi);
  - podatke o isporuci (primaoci i adrese isporuke);
  - troškove i rabate (stalni rabati i dodatni troškovi);
  - cjenovnike (povezivanje prodajnih i nabavnih cjenovnika);
  - agente (povezivanje agenata sa kupcima);
  - ostale podatke.

- [**Matični podaci artikala**](/docs/erp-home/registers/items/master-item-intro): organizovani su u više kartica prema vrsti i namjeni podataka (npr. administrativni podaci, mjerne jedinice itd.).

- [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): iako se nalazi unutar područja matičnih podataka zbog povezanosti sa kupcima i dobavljačima, organizovan je kao tabela za definisanje konta i njihovih grupisanja.

- **[Radni ciklusi](/docs/erp-home/registers/production/routes/cycle-management-and-production-phases), [sastavnice](/docs/erp-home/registers/production/bill-of-materials/bom) i [prototipovi](/docs/erp-home/registers/production/standardization/new-prototype)**: matični podaci povezani sa proizvodnim procesima.