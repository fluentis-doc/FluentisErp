---
title: Distinta base DDMRP
description: Visualizzazione della distinta base in ambiente DDMRP con analisi di DLT, ADU, zone buffer e capitale circolante.
keywords:
  - distinta base DDMRP
  - DLT disaccoppiato
  - ADU
  - buffer DDMRP
  - capitale circolante
sidebar_position: 8
schema: TechArticle
sidebar_label: Distinta base DDMRP
tags:
  - DDMRP
  - Produzione
  - Pianificazione
  - Distinte base
last_update:
  author: Fluentis Documentation Team
---

# Distinta base DDMRP

Questa form consente la visualizzazione della distinta base di un prodotto in ambiente **DDMRP**.  
Si differenzia dalla form di gestione distinte Fluentis in quanto mostra informazioni rilevanti esclusivamente nel contesto DDMRP e **non consente la modifica della distinta base**.

## Articoli a scorta DDMRP e informazioni visualizzate

Gli articoli gestiti a scorta DDMRP sono evidenziati tramite il simbolo del **cestino a tre colori**.  
Per tali articoli vengono mostrate le seguenti informazioni specifiche:

- ADU (Average Daily Usage)
- DLT (Decoupled Lead Time)
- Zona rossa
- Zona gialla
- Zona verde
- Capitale circolante

I valori visualizzati sono quelli **attualmente validi**, coerenti con quanto presente nella form dei **Parametri DDMRP**.

:::important
Il capitale circolante mostrato si riferisce all’articolo stesso e non alla scorta necessaria per realizzare il prodotto di cui si sta visualizzando la distinta base.
:::

Il valore è determinato dal fabbisogno complessivo di tutti gli articoli che richiedono il prodotto a scorta ed è relativo **all’ultimo calcolo eseguito**.  
Per garantire l’aggiornamento dei dati è sufficiente rilanciare la procedura di calcolo dedicata.

## Procedure avviabili dalla form

Dalla form di visualizzazione della distinta base DDMRP è possibile avviare direttamente le seguenti procedure operative:

1. [**Calcolo DLT (lead time disaccoppiato)**](/docs/ddmrp/procedures/dlt-calculation)
2. [**Calcolo delle zone**](/docs/ddmrp/procedures/zones-calculation)
3. [**Aggiornamento consumo medio giornaliero (ADU)**](/docs/ddmrp/procedures/adu-update)
4. [**Calcolo valori scorte**](/docs/ddmrp/procedures/inventory-value)

## Utilizzo per simulazioni e analisi

La visualizzazione DDMRP della distinta base risulta particolarmente utile durante le simulazioni per verificare le variazioni di DLT e di capitale circolante (utilizzare la stampa **capitale circolante**).

## Articoli sul percorso critico e visualizzazione del DLT

Per alcuni articoli che non sono delle scorte Ddmrp risulta comunque visualizzato il relativo DLT. Ciò accade per gli articoli evidenziati in **rosso**, ovvero quelli appartenenti al *percorso critico* di di qualche prodotto finito.

Le principali motivazioni sono:  
- Articoli stoccati nei centri di distribuzione, quindi per calcolare il DLT nei centri distribuzione bisogna sommare al tempo di trasporto dalla fabbrica il tempo necessario alla realizzazione dei prodotti.
- Articoli intermedi non finiti, per i quali il calcolo del DLT del buffer DDMRP, la procedura deve necessariamente calcolare tale valore anche per gli articoli che si trovano sul "percorso critico" del buffer.

*Procedura di calcolo DLT*:

La procedura di calcolo DLT individua tutti gli articoli che si trovano sui perorsi critici di tutte le distinte base presenti nel sistema (quindi non solo quelle di articoli a buffer Ddmrp).

## Evidenziazione dei percorsi critici

Nella visualizzazione delle distinte base DDMRP, tutti gli articoli presenti su qualunque **percorso critico** vengono evidenziati in rosso, pertanto nella visualizzazione di una distinta base ci possono essere più rami di distinta evidenziati in rosso, sia perchè il prodotto di cui si visualizza la distinta può avere più percorsi critici (i cui valori DLT sono quindi uguali), sia perchè alcuni rami sono pezzi di percorsi critici di altri prodotti.

## Diminuzione tempo di consegna disaccoppiato (DLT)

La riduzione del **DLT del prodotto** di cui si sta visualizzando la distinta base è possibile esclusivamente creando una scorta Ddmrp per uno degli articoli evidenziati in rosso che si trova sul percorso critico dello stesso (questa precisazione è necessaria poichè in alcuni casi ci possono essere più rami di distinta rossi, alcuni dei quali evidenziano percorsi critici di altri prodotti)

Questo tipo di visualizzazione consente quindi di individuare rapidamente quali articoli messi a scorta possono portare ad una diminuizione del tempo di consegna del prodotto finito.

## Capitale circolante e criteri di calcolo

La visualizzazione del *capitale circolante* consente poi di capire quali scelte di posizionamento di scorte consente contemporanemente di ridurre il tempo di consegna e di minimizzare il capitale circolante impegnato per ottenere tale risultato (vedere stampa del capitale circolante).

Il *costo unitario* visualizzato per tutti gli articoli è quello utilizzato nell'ultimo calcolo del *Capitale circolante* mediamente investito nelle scorte Ddmrp (medio,ultimo,standard) e tiene conto solo dei costi dei materiali e delle lavorazioni esterne per il conto lavoro, cioè costi attribuibili solo a fornitori esterni (vedere la sezione relativa a tale calcolo).

Per gli articoli di **conto lavoro**, il costo unitario della lavorazione è determinato sottraendo dal costo dell’articolo il costo dei relativi figli di distinta base.

Moltiplicando questo per la giacenza media (zona rossa + zona verde/2) si ottiene il valore del capitale circolante mediamente investito nella scorta

:::important
Il capitale circolante visualizzato nella distinta potrebbe non essere aggiornato se, dopo l’ultimo calcolo, sono variati:
- I valori delle zone buffer
- Il costo unitario degli articoli
:::

Per garantire dati corretti e aggiornati è necessario lanciare la procedura di calcolo costo capitale circolante (*calcolo valori scorte*).

## Riepilogo e approfondimenti

La form di visualizzazione della distinta base DDMRP consente di:

- Analizzare DLT, ADU e zone buffer in modo integrato
- Identificare i percorsi critici e gli articoli strategici
- Valutare l’impatto delle scorte sul capitale circolante
- Supportare decisioni di pianificazione e simulazione DDMRP

Per ulteriori approfondimenti operativi consultare:

- [Calcolo DLT (lead time disaccoppiato)](/docs/ddmrp/procedures/dlt-calculation)
- [Calcolo delle zone](/docs/ddmrp/procedures/zones-calculation)
- [Aggiornamento ADU](/docs/ddmrp/procedures/adu-update)
- [Calcolo valori scorte](/docs/ddmrp/procedures/inventory-value)
