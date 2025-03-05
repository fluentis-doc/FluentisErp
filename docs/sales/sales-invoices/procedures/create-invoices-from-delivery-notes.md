---
title: Creazione fatture da DDT
sidebar_position: 1
---

La procedura si apre tramite il percorso **Vendite > Fatture di vendita > Procedure > Creazione da DDT**. 

Questa procedura permette di eseguire/ripristinare le operazioni di creazione delle fatture da una o più DDT.

### Valorizzazione

In questo tab, l'utente ha la possibilità di inserire filtri per cercare i DDT, con lo stato *Stampata*, da fatturare con l'ausilio dei filtri (tipo DDT, data, numero, cliente). 

**Data creazione**: permette di specificare la data della fattura che sarà creata. 

*Pulsanti specifici*: 
> **Creazione fatture da DDT**: permette di valorizzare i DDT selezionati nella griglia, in base ai parametri inseriti nel successivo tab *Parametri*.
> **Apertura DDT**: permette di visualizzare e modificare il DDT selezionato.

:::note
Non è possibile creare un'autofattura da DDT.
:::

### Parametri

*Inserimento in fattura*

Con l'aiuto di questi parametri si possono raggruppare i DDT dello stesso cliente in una sola fattura:

**DDT di anni e periodi IVA diversi**: il flag attivo permette la creazione della fattura da DDT di anni e periodi IVA diversi.

**DDT di tipi diversi**: il flag attivo permette la creazione di una fattura da diversi tipi DDT.

**DDT di cambio diversi**: il flag attivo permette la creazione di una fattura da più DDT con tassi di cambio diversi.

**Raggruppamento DDT per tipo e soluzione di pagamento**: i tipi pagamento possono essere ripresi da anagrafica del cliente o mantenuti quelli dei DDT. Nel caso non ci sia il raggruppamento per tipo pagamento, la fattura potrà contenere anche più righe di pagamento diverse. 

*Trattamento pagamenti in fattura*

Se ci sono DDT con soluzioni di pagamento diverse e se non è stato impostato il flag *Raggruppa DDT*:

**Ripristina quelli di anagrafica**: la fattura prenderà le soluzioni di pagamento dall'anagrafica (e non considera l'informazione inserita nei DDT). 

**Mantiene quelli dei DDT** la fattura prenderà le soluzioni di pagamento inserite nei DDT.

*Inserimento in fattura*

**Raggruppa scadenze in fattura**: il flag attivo permette di raggruppare in una soluzione unica le scadenze con la data uguale ma provenienti da DDT diversi.

**Ricalcola CdC/CdP**: utilizzato nella contabilità analitica, serve per ricalcolare i centri di costo o di profitto.

*Riferimenti DDT*

**Metti riferimenti DDT**: se questo flag viene impostato, nel tab [Articoli](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) della fattura verrà visualizzato un *Articolo nota* che riprenderà i riferimenti del DDT dal quale è stata creata la fattura. La composizione di questa nota deve essere inserita nel campo 'Descrizione' secondo i parametri descritti nella label.

*Pulsante specifico*: 

> **Salva parametri**: permette di salvare i parametri impostati per la valorizzazione.

Dopo aver selezionato i DDT (dal tab *Valorizzazione*) e impostato i parametri, la fattura può essere creata con l'aiuto del pulsante *Creazione fattura da DDT*.

### Precedenti

Come ultima scheda è presente una scheda di ripristino: è possibile utilizzarla per filtrare, visualizzare e annullare le operazioni.

I dati nelle griglie in basso, **Fatture** e **DDT**, corrispondono alla valorizzazione selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e il DDT corrispondente con doppio click sulla riga desiderata.

*Pulsanti specifici*:
> **Ricerca fatture**: permette di cercare i DDT valorizzate.  
> **Ripristina creazione**: permette di ripristinare l'intera operazione, cioè nel caso della creazione di più fatture contemporaneamente, cancella tutte le fatture e ripristina i DDT.  
> **Ripristina fattura**: permette di ripristinare la fattura selezionata nel tab *Fatture*.