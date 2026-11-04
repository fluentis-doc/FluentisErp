---
title: Kategorije agenata (trgovačkih predstavnika)
sidebar_position: 2
---

Tablica se otvara putem putanje **Tablice > Prodaja > Kategorije trgovačkih predstavnika (agenata)**.

Tablica je jedinstvena za sva poduzeća u bazi podataka i predstavlja osnovu za izračun doprinosa Enasarco i FIRR za agente.

### Kategorije agenata

Ovo je glavna tablica obrasca koja sadržava kategorije agenata. Za svaki redak ove tablice definiraju se detaljni podaci u dvije sljedeće tablice, kojima se specificiraju izračuni Enasarco i FIRR.

:::tip[Povezivanje]
Stavke iz glavne tablice (koja je povezana s detaljima izračuna) mogu se povezati u [**šifarniku agenata**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) ili se mogu postaviti kao zadane vrijednosti u detaljima tablice [**Vrste poreza po odbitku**](/docs/configurations/tables/finance/withholding-tax-types). Vrsta poreza po odbitku može se povezati i sa šifarnikom agenata. U tom slučaju, ako ima zadanu kategoriju agenta, nije potrebno svaki put zasebno povezivati kategoriju s agentom.
:::

**Šifra/Opis**: šifra i opis koji označavaju vrstu agenta. Šifra mora biti jedinstvena.

**Samostalni agent (jedna tvrtka):** oznaka koja identificira kategorije samostalnih agenata (ekskluzivni ugovor s jednim nalogodavcem).

**Višestruki agent (više tvrtki):** oznaka koja identificira kategorije agenata koji zastupaju više nalogodavaca (npr. agent koji surađuje s više poduzeća).

**Opći:** oznaka koja identificira opće kategorije (npr. agencije osnovane u obliku trgovačkog društva).

### Enasarco

**Datum početka valjanosti**: datum početka važenja detaljnih podataka. Ti se podaci primjenjuju sve dok se ne pronađu novi detaljni podaci s kasnijim datumom početka važenja.

**Minimalni Enasarco**: *vrijednost na tromjesečnoj osnovi*. Minimalni iznos doprinosa Enasarco (primjerice 250,50 za samostalnog agenta).

**Maksimalni Enasarco:** *vrijednost na godišnjoj osnovi*. Maksimalni iznos osnovice za obračun provizije za potrebe doprinosa Enasarco (najviša osnovica). Nakon njezina dosezanja više nije moguće uplaćivati mirovinske doprinose za agenta (primjerice 44.727,00 za samostalnog agenta).

**Enasarco postotak**: postotak doprinosa Enasarco na teret agenta.

**Enasarco postotak – poduzeće:** postotak doprinosa Enasarco na teret poduzeća.

**Iznos Enasarco**: postotak (100 %) primjene stopa Enasarco na ukupni iznos provizije.

### FIRR

Tablica se upotrebljava za izračun FIRR-a (Fondo indennità risoluzione rapporto – fond za naknadu pri prestanku ugovornog odnosa).

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Red**: označava broj retka. Mora biti jedinstven u svim kategorijama agenata.

**Postotak**: postotak davanja.

**OD provizije/DO provizije**: donja i gornja granica iznosa provizije na koju se primjenjuje davanje.

Ovu tablicu potrebno je popuniti prema pravilima predviđenima za ovaj način obračuna.

Stope za samostalne agente

![](/img/it-it/configurations/tables/sales/agent-category/image04.png)

Stope za agente koji zastupaju više nalogodavaca

![](/img/it-it/configurations/tables/sales/agent-category/image05.png)