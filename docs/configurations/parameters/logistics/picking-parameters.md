---
title: Parametri Picking
sidebar_position: 6
---

:::important A cosa serve
Attraverso questa funzionalità, gli utenti possono configurare e adattare il sistema in base alle diverse esigenze operative, assicurando un funzionamento fluido e coerente delle attività di logistica.

In questa sezione, è possibile assegnare magazzini e causali di scarico predefiniti, decidere se controllare la disponibilità di articoli e definire se l'inserimento delle informazioni come il codice operatore debba essere obbligatorio. Altre opzioni includono la gestione di articoli a lotti o serial number e il controllo delle quantità al momento della creazione del picking. Questo modulo di parametrizzazione non solo facilita l'operatività, ma garantisce anche che le procedure siano conformi alle politiche aziendali e alle normative vigenti, permettendo una gestione efficace e precisa del magazzino.
:::

La form si apre tramite il percorso **Parametri > Logistica > Parametri Picking** e permette di effettuare tutti le parametrizzazioni riguardanti il funzionamento dei picking o liste di prelievo. Soltanto dopo aver parametrizzato opportunamente questa maschera è possibile utilizzare il modulo di Picking.

#### Pulsante specifico  
> **Ripristina**: pulsante per ripristinare lo stato precedente dei parametri.

## Generale

In questo tab si possono parametrizzare le generalità della gestione Picking. E' possibile assegnare un magazzino e una causale da utilizzare di default per lo scarico dei Picking. Per fare ciò è sufficiente spuntare **Priorità parametri picking** e indicare un **Magazzino** e una **Causale**.  
E' inoltre possibile scegliere se, al momento dello scarico, **Controllare la disponibilità**, **Escludere gli ordini clienti** dalla disponibilità e/o essere bloccati nel caso la disponibilità non soddisfi la quantità da movimentare (**Disponibilità obbligatoria**).

Nel caso si scelga di controllare la disponibilità è possibile determinare come quest'ultima debba essere calcolata in base al **Conto lavoro**, alla **Produzione pianificata**, agli **Acquisti**, alla **Produzione rilasciata**, alle **Vendite** e/o al **Magazzino**.

Come impostazioni generali è possibile scegliere se al momento della creazione del picking è obbligatorio inserire il **Codice operatore**, se la **Numerazione deve essere progressiva per anno**, se il **Codice operatore che conferma il picking** è obbligatorio.

Nel caso ci siano gestioni particolari degli articoli è attivabile la **Gestione taglia e colore**.

Nella sezione **Gestione lotti e serial number** è possibile attivare i seguenti flag:

**Gestione Lotti / Serial number**: abilita la possibilità di gestire lotti e serial number tramite le relative griglie.

**Proposta Lotti / Serial number**: se attivo, al variare di una quantità della riga picking, se l'articolo è gestito a lotti con tipologia prelievo FIFO o per data scadenza, vengono proposti in automatico i lotti nella relativa griglia.

**Movimentazione spunta automatica**: se attivo, nelle form *Gestione Spunta* e *Conferma picking* fa lo scarico automatico della riga, ed in questo caso non servirà farlo da [Scarico da spunta](/docs/logistics/picking/unload-check-row-management); mentre se il flag non è attivo, allora verrà effettuata la spunta ma senza il movimento che dovrà essere effettuato tramite la procedura [Scarico da spunta](/docs/logistics/picking/unload-check-row-management).

**Visualizzazione griglia evasione**: se attivo, il flag abilita la modalità griglia nella form di evasione picking.

**Visualizzazione tree evasione**: se attivo, il flag abilita la modalità tree nella form di evasione picking.      

## WMS Mobile  

In questo tab si possono definire i parametri per il funzionamento dei Picking in WMS Mobile.

**Tipo conto vettore**: rappresenta il vettore che verrà inserito nei picking creati da WMS Mobile,  

Si possono scegliere anche diversi tipi di picking. 

E' inoltre opportuno specificare le causali che verranno usate per i seguenti movimenti:

- scarico UDC per conferma trasferimento;

- causale proposta per scarico Picking;

- scarico per magazzino partenza;

- carico per magazzino destinazione;

- causale scarico magazzino di contro lavoro.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).