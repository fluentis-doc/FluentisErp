---
title: Valorizzazione DDT di acquisto
sidebar_position: 3
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di acquisto**. 

Essa permette di eseguire/ripristinare la creazione della fattura di acquisto da una o più DDT di acquisto.

### Valorizzazione

In questo tab, l'utente ha la possibilità di inserire filtri per cercare i DDT da fatturare con l'ausilio dei filtri (tipo DDT, data, numero, fornitore). 

**Data creazione**: permette di specificare la data della fattura che sarà creata. 

*Pulsante specifico*: 

> **Valorizzazione DDT di acquisto**: permette di valorizzare i DDT selezionati nella griglia, in base ai parametri inseriti nel successivo tab *Parametri*.

### Parametri

*Inserimento in fattura*

Con l'aiuto di questi parametri si possono raggruppare i DDT dello stesso fornitore in una sola fattura:

**DDT di tipi diversi**: il flag attivo permette la creazione di una fattura da diversi tipi DDT.

**DDT di cambio diversi**: il flag attivo permette la creazione di una fattura da più DDT con tassi di cambio diversi.

**Ricalcola CdC/CdP**: utilizzato nella contabilità analitica, serve per ricalcolare i centri di costo o di profitto.

**Raggruppa DDT di anni/mesi diversi**: il flag attivo permette la creazione della fattura da DDT di anni e mesi diversi.

*Trattamento pagamenti in fattura*

Se ci sono DDT con soluzioni di pagamento diverse e se non è stato impostato il flag *Raggruppa DDT*:

**Ripristina quelli di anagrafica**: la fattura prenderà le soluzioni di pagamento dall'anagrafica (e non considera l'informazione inserita nei DDT). 

**Mantiene quelli dei DDT** la fattura prenderà le soluzioni di pagamento inserite nei DDT.

*Inserimento in fattura*

**Raggruppa scadenze in fattura**: il flag attivo permette di raggruppare in una soluzione unica le scadenze con la data uguale ma provenienti da DDT diversi.

*Riferimenti DDT*

**Metti riferimenti DDT**: se questo flag è impostato, nel tab [Articoli](/docs/purchase/purchase-invoices/insert-purchase-invoice/items) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del DDT dal quale è stata creata la fattura. Il contenuto di questa nota deve essere inserito nel campo *Descrizione*, secondo i parametri descritti nella label. 

*Esempio*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Se il DDT ha il numero 5 e la data 11.09.2018, l'articolo nota nella fattura sarà: 'DDT riferimento no 5 del 11.09.2018'.

*Pulsante specifico*: 

> **Salva parametri valorizzazione**: permette di salvare i parametri impostati per la valorizzazione.

Dopo aver selezionato i DDT (dal tab *Valorizzazione*) e impostato i parametri, la fattura può essere creata con l'aiuto del pulsante *Valorizzazione DDT di acquisto*.

### Precedenti

L'ultimo tab è quello di ripristino: è possibile utilizzarlo per filtrare, visualizzare e annullare le operazioni.

I dati nelle griglie in basso, **Fatture** e **DDT**, corrispondono alla valorizzazione selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e il DDT corrispondente con doppio click sulla riga desiderata.

*Pulsanti specifici*:
> **Ricerca valorizzazione DDT**: per cercare le fatture create e i DDT valorizzati. Il risultato di questa procedura viene visualizzato nella griglia di risultato.  
> **Rollback fattura**: per cancellare la fattura selezionata.  
> **Ripristino valorizzazione**: per cancellare l'intera operazione selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.