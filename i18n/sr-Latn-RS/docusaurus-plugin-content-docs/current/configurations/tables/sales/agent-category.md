---
title: Kategorije agenata (trgovačkih predstavnika)
sidebar_position: 2
---

Tabela se otvara putem putanje **Tablice > Kategorije trgovačkih predstavnika (agenata)**.

Tabela je jedinstvena za sva preduzeća u bazi podataka i predstavlja osnovu za izračunavanje doprinosa Enasarco i FIRR za agente.

## Kategorije agenata

Ovo je glavna tabela obrasca koja sadrži kategorije agenata. Za svaki red u ovoj tabeli definišu se detaljni podaci u dve naredne tabele, kojima se određuju izračunavanja Enasarco i FIRR.

:::tip[Povezivanje]
Stavke iz glavne tabele (koja je povezana sa detaljima izračunavanja) mogu se povezati u [**šifarniku agenata**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) ili se mogu postaviti kao podrazumevane vrednosti u detaljima tabele [**Tipovi poreza po odbitku**](/docs/configurations/tables/finance/withholding-tax-types). Tip poreza po odbitku može se povezati i sa šifarnikom agenata. U tom slučaju, ako ima podrazumevanu kategoriju agenta, nije potrebno svaki put zasebno povezivati kategoriju sa agentom.
:::

**Šifra/Opis**: šifra i opis koji označavaju tip agenta. Šifra mora biti jedinstvena.

**Samostalni agent (jedno preduzeće):** oznaka koja identifikuje kategorije samostalnih agenata (ekskluzivni ugovor sa jednim nalogodavcem).

**Višestruki agent (više preduzeća):** oznaka koja identifikuje kategorije agenata koji zastupaju više nalogodavaca (npr. agent koji sarađuje sa više preduzeća).

**Opšti:** oznaka koja identifikuje opšte kategorije (npr. agencije osnovane u obliku privrednog društva).

## Enasarco

**Datum početka važenja**: datum početka važenja detaljnih podataka. Ti podaci se primenjuju sve dok se ne pronađu novi detaljni podaci sa kasnijim datumom početka važenja.

**Minimalni Enasarco**: *vrednost na tromesečnom nivou*. Minimalni iznos doprinosa Enasarco (na primer, 250,50 za samostalnog agenta).

**Maksimalni Enasarco:** *vrednost na godišnjem nivou*. Maksimalni iznos osnovice za obračun provizije za potrebe doprinosa Enasarco (najviša osnovica). Nakon njenog dostizanja više nije moguće uplaćivati penzijske doprinose za agenta (na primer, 44.727,00 za samostalnog agenta).

**Enasarco procenat**: procenat doprinosa Enasarco na teret agenta.

**Enasarco procenat – preduzeće:** procenat doprinosa Enasarco na teret preduzeća.

**Iznos Enasarco**: procenat (100 %) primene stopa Enasarco na ukupan iznos provizije.

## FIRR

Tabela se koristi za izračunavanje FIRR-a (Fondo indennità risoluzione rapporto – fond za naknadu pri prestanku ugovornog odnosa).

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Red**: označava broj reda. Mora biti jedinstven u svim kategorijama agenata.

**Procenat**: procenat davanja.

**OD provizije/DO provizije**: donja i gornja granica iznosa provizije na koju se primenjuje davanje.

Ovu tabelu potrebno je popuniti prema pravilima predviđenim za ovaj način obračuna.

Stope za samostalne agente

![](/img/it-it/configurations/tables/sales/agent-category/image04.png)

Stope za agente koji zastupaju više nalogodavaca

![](/img/it-it/configurations/tables/sales/agent-category/image05.png)