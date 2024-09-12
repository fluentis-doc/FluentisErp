---
title: Provvigioni maturate
sidebar_position: 2
---

La form si apre tramite il percorso *Vendite > Agenti > Liquidazioni agenti > Stampe*.

La stampa delle è una simulazione del calcolo della provvigione maturata dall'agente, secondo l'impostazione della sua anagrafica e i filtri applicati al report. 

**In modo particolare, nel caso di provvigioni sull'incassato, questo report visualizzerà i dati maturati escludendo i valori delle liquidazioni automatiche create nel gestionale, che diventano quindi obbligatorie al fine di ottenere un report allineato;** nel caso di provvigioni sul fatturato/consegnato/ordinato, invece, di per se già l'uso corretto del range di filtro per date consente di ottenere un risultato corretto indipendentemente dall'uso della procedura automatica di liquidazione provvigioni.



**Stampa provvigioni maturate al** indica la data di riferimento per il calcolo delle provvigioni sull'*incassato* 

flag **Stampa debito vs/agente alla data** con il quale si attiva la data relativa: con questa opzione è possibile simulare la stampa delle provvigioni maturate a quella data, includendo anche quelle liquidate in data successiva (che normalmente sono escluse). 

flag **Considera provvigioni zero in imponibile provvigionale** consente di considerare tra gli imponibili provvigionali anche quelli che hanno un valore di provvigione uguale a zero.

:::tip PROVVIGIONI SULL'INCASSATO E COMPENSAZIONE PARTITE
Nel caso in cui le provvigioni siano calcolate sull'incassato ed avvenga una compensazione di partite (ad esempio per acconti pregressi ricevuti) occorre prestare attenzione al fatto che la compensazione assegna le righe di chiusura partite ai fini del calcolo provvigioni maturate in base alla **data registrazione** più recente tra le due che hanno creato le partite che vengono compensate tra loro.

In una situazione di acconti e storni frequente dove magari sono presenti importi uguali occorre pertanto fare particolare attenzione di compensare tra loro gli acconti e gli storni riferiti al medesimo periodo, altrimenti la provvigione risulterà maturata in data errata.
:::

:::tip PROVVIGIONI SULL'INCASSATO E SCRITTURE CONTABILI PROVVISORIE
Per il calcolo delle provvigioni maturate vengono considerate SOLO le registrazioni nello stato **definitivo**, quindi eventuali incassi (anche anticipati) registrati in modalità provvisoria verranno ignorati
:::

:::tip PROVVIGIONI SULL'INCASSATO E RICEVUTE BANCARIE
La maturazione delle provvigioni tiene conto in ogni caso della data scadenza effetto, anche se la partita cliente viene chiusa per effetto della contabilizzazione dell'emissione Ri.Ba. e l'effetto è presentato al salvo buon fine o accreditato.
:::

:::danger ATTENZIONE
Prestare particolare attenzione nel caso di Ricevute bancarie anche alla gestione dei **PARAMETRI RISCHIO CLIENTE**

dove sono presenti due campi **N. giorni oltre la scadenza per effetti presentati al salvo buon fine** / **N. giorni oltre la scadenza per effetti presentati al dopo incasso** i quali, se valorizzati aggiungono un ritardo anche nella maturazione delle provvigioni.

Inoltre porre attenzione in fase di inizializzazione di un nuovo ambiente che sia stato salvato almeno una volta all'interno della form Parametro rischio cliente in modo che siano presenti i parametri di default (in particolare riferiti ai campi di cui sopra) altrimenti la data scadenza effetto non sarà letta e la provvigione sarà sempre maturata alla chiusura della partita per emissione Ri.Ba.
:::