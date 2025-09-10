---
title: Contabilizzazione ammortamenti
sidebar_position: 1
---

LINK:

** [Ammortamento](/docs/finance-area/fixed-assets/accounting/depreciation) **

** [Ripristina](/docs/finance-area/fixed-assets/accounting/restore) **

 

 

La procedura di contabilizzazione andrà ad aggiornare le schede cespiti ( aggiungendo il flag Contabilizzato ed aggiornando pertanto il valore del fondo ammortamento e del valore netto contabile) ed a rilevare in contabilità i relativi movimenti d'ammortamento.

Affinché la procedura possa andare a buon fine è necessario che:

- Siano stati creati i ** [Parametri contabilità generale](/docs/configurations/parameters/finance/accounting-parameters) ** per l'anno di riferimento;

- Siano stati creati i ** [Parametri cespiti](/docs/configurations/parameters/finance/fixed-assets-parameters) **;

- All'interno della tabella ** [Categorie Cespiti](/docs/configurations/tables/finance/fixed-asset-category) ** siano stati definiti (per ogni categoria) i conti relativi alla quota di ammortamento e del fondo ammortamento;

- Sia definita la causale contabile che si desidera utilizzare per la contabilizzazione ammortamenti.

 
### Ammortamento indeducibile
E' presente, in basso nella maschera, il flag **Usa conto non deducibile**.
Il valore (ON / OFF) del flag può essere predefinito nei [**parametri cespiti**](/docs/configurations/parameters/finance/fixed-assets-parameters).

Se attivo, la parte non deducibile fiscalmente dell'ammortamento sarà contabilizzata automaticamente sul conto specifico che è stato definito all'interno della tabella delle [**categorie cespite**](/docs/configurations/tables/finance/fixed-asset-category).

La percentuale di indeducibilità dell'ammortamento è definita attraverso il campo ***Tipo deducibilità*** sempre all'interno delle categorie cespiti.





