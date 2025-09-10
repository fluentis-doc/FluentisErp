---
title: Ripresa ammortamento cespiti
sidebar_position: 3
---

All'interno del modulo chiusure infrannuali, dopo aver creato una chiusura infrannuale è possibile valorizzare automaticamente gli ammortamenti di competenza del periodo economico impostato in essa.

## Ammortamento

All'apertura della maschera, in basso saranno da impostare obbligatoriamente:

- la **Chiusura di riferimento** (dalla quale viene letto il range di date competenza economica);

- la **Data di registrazione** del movimento nelle registrazioni extracontabili;

- la **Causale** da utilizzare (anche qui è necessario che la causale preveda la gestione dei cdc/job-orders per valorizzarli nella registrazione).

Il flag **Singola registrazione** per creare un'unica registrazione extracontabile con all'interno i vari sottoconti di ammortamento/fondo.

Nella sezione dei filtri di ricerca è presente il flag **Operazioni incrementali**. L'ammortamento va eseguito infatti in due tempi, estrapolando i cespiti appartenenti a categorie CON il flag attivo e SENZA. Valore definito all'interno della tabella delle [**categorie cespiti**](/docs/configurations/tables/finance/fixed-asset-category)

Lanciando la ricerca dei dati, il programma valorizzerà la griglia della maschera con i dati degli ammortamenti da calcolare, proporzionati sul numero di giorni di competenza della chiusura. In particolare, per ogni cespite sarà verificato se l'ammortamento dell'anno (dall'anno impostato come parametro della chiusura) è già presente nella sua scheda e questo valore sarà riproporzionato sul numero di giorni: se questo non è presente, sarà simulato un calcolo (sulla base dei parametri della categoria di appartenenza e dei residui a disposizione) e poi questo valore sarà proporzionato sul numero di giorni di competenza.

Si ricorda di selezionare tutte le righe presenti nella griglia per valorizzarle nella chiusura.

### Ammortamento indeducibile
E' presente, in basso nella maschera, il flag **Usa conto non deducibile**.
Il valore (ON / OFF) del flag può essere predefinito nei [**parametri cespiti**](/docs/configurations/parameters/finance/fixed-assets-parameters).

Se attivo, la parte non deducibile fiscalmente dell'ammortamento sarà contabilizzata automaticamente sul conto specifico che è stato definito all'interno della tabella delle [**categorie cespite**](/docs/configurations/tables/finance/fixed-asset-category).

La percentuale di indeducibilità dell'ammortamento è definita attraverso il campo ***Tipo deducibilità*** sempre all'interno delle categorie cespiti.


## Precedenti

In questa è possibile annullare l'operazione eseguita nella tab precedente, *Ammortamento*.