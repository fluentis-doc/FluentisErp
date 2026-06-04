---
title: Kategorije agenata
sidebar_position: 2
---

Tablica se otvara putem izbornika **Tablice > Prodaja > Kategorije agenata**.

Ova je tablica jedinstvena za sve tvrtke unutar baze podataka i predstavlja osnovu za izračune Enasarco/FIRR doprinosa za agente.

### Kategorije agenata

Ovo je glavna mreža forme i sadrži popis kategorija agenata.  
Za svaki redak definiraju se detaljni podaci u dvije mreže — za specifikaciju Enasarco i FIRR parametara.

:::tip[Povezivanje]
Stavke glavne mreže (povezane s detaljima izračuna) mogu se povezati u [**Podaci agent**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) oppure (a titolo di default)ili kao zadana vrijednost u tablici [**Vrste poreznog odbitka**](/docs/configurations/tables/finance/withholding-tax-types). Vrsta poreznog odbitka može biti povezana s registrom agenta: ako uključuje zadanu kategoriju, kategorija se ne mora ručno dodjeljivati za svakog agenta.  
:::

**Šifra/Opis**: jedinstvena šifra i opis kategorije agenta;

**Jedna trvtka:** oznaka za monomandatne agente (isključivi ugovor s jednom tvrtkom);

**Više tvrtki:** oznaka koja identificira plurimandatne kategorije (npr. agent koji surađuje s više tvrtki nalogodavaca);

**Opći:** oznaka koja identificira generičke kategorije (npr. agencije koje posluju kao pravne osobe);


### Enasarco

**Datum početka valjanosti:**: datum od kojeg detalj postaje važeći; vrijedi sve dok se ne učita novi detalj s kasnijim datumom početka valjanosti.

**Min Enasarco**: ***vrijednost na tromjesečnoj osnovi***. Minimalni iznos Enasarco doprinosa (npr. 250,50 za monomandatnog agenta);  

**Max Enasarco:** ***vrijednost na godišnjoj osnovi***. Maksimalna osnovica provizija za obračun Enasarco doprinosa; nakon što se dostigne ovaj iznos, više nije moguće uplaćivati socijalne doprinose u korist agenta (npr. 44.727,00 za monomandatnog agenta).

**Postotak Enasarco**: postotak doprinosa na teret agenta.

**Postotak Enasarco – tvrtka** postotak doprinosa na teret tvrtke.

**Primjena Enasarco**: postotak (100%) na koji se primjenjuju Enasarco stope na ukupne provizije.



### Firr

Mreža se koristi za izračun FIRR-a (Fonda za naknadu pri raskidu ugovora):  

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Redak**: identifikacijski broj retka. Mora biti jedinstven za sve kategorije agenata;  

**Postotak**: stopa doprinosa;  

**Od provizija / Do provizija**: donja i gornja granica primjene doprinosa;

Ova mreža mora biti popunjena u skladu s propisanim pravilima za ovu vrstu obračuna.

Stope za agente s jednim mandatom

![](/img/it-it/configurations/tables/sales/agent-category/image04.png) 

Stope za agente s više mandata

![](/img/it-it/configurations/tables/sales/agent-category/image05.png)
