---
title: Gestione partite di anticipo
sidebar_position: 7
---

:::note Percorso
**Amministrazione>Partite>Procedure>Gestione partite d'Anticipo**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---
Questa procedura consente di creare delle partite di anticipo da pagarsi o incassarsi all'emissione della conferma d'ordine (o alla consegna) e poi fatturare e contabilizzare l'anticipo incassato.
Si tratta chiaramente di partite extra-contabili inquanto esistenti prima dell'emissione della fattura.

I comandi per la gestione di questa funzionalità sono dislocati nella presente form oltre che nella tab dei ***Riepiloghi*** dell'ordine.

:::note Nota
Gli esempi nelle immagini si riferiscono all’ area vendite con una partita all’ ordine, ma la gestione è speculare per gli acquisti e concettualmente simile per le partite alla consegna.

Non è previsto alcun automatismo standard per creare la partita di anticipo in contabilità all’ atto della conferma dell’ ordine o di un qualche evento collegato ad esso o ai DDT. Qualsiasi scadenza dell’ ordine può essere passata alla contabilità perché questa abbia visibilità che c’è una partita all’ ordine da incassare. 

Allo stesso modo, non c’è nulla che fermi l’ avviamento della produzione dell’ ordine fino all’ incasso della partita d’ anticipo. 

Entrambi questi passaggi potrebbero essere gestiti tramite workflow customizzati da configurare appositamente.

:::

### Creazione partita all'ordine

import FileName from './../../../import/sections/advance-maturities-creation-order.md'

<FileName />

---

### Gestione delle partite di anticipo all'interno della form.

In questa form, nel primo tab del lato vendite, è possibile creare partite di anticipo anche per altri ordini clienti ed indipendentemente dalla creazione eseguita da dentro l'ordine cliente, oppure partite su consegne presenti nel secondo tab.

Nella ***tab Gestione anticipo*** è possibile eseguire il rollback della partita di anticipo appena creata.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

Nell’ ordine di vendita di origine, se un utente entra a modificare un qualche valore che causa il ricalcolo scadenze, sarà restituito un messaggio di avviso che richiede se annullare la partita di anticipo (se questa non è incassata, altrimenti questo non è possibile).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)


### Incasso partita di anticipo
Quando viene incassata la partita di anticipo (acconto) all'ordine (o alla consegna) e dunque viene salvata una registrazione contabile di prima nota con l’ incasso di una partita d’ anticipo (chiusura partita) apparirà un messaggio che avvisa l'utente della necessità di fatturare questo anticipo.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

Confermando la creazione si aprirà la maschera della Gestione partite di anticipo, dove l’ utente potrà andare nuovamente nella scheda di gestione anticipi per fatturare l’ operazione; se, invece, l’ operazione non viene confermata, sarà l’ utente a doversi ricordare di andare nella procedura in seguito per fatturare l’ operazione.

Selezionando la riga si attiverà il pulsante di creazione della fattura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Premendolo apparirà una nuova maschera di richiesta dati per la fattura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

I dati già proposti sono quelli della data odierna e della descrizione che sarà riportata nella riga articolo, mentre il tipo fattura, aliquota iva e codice contabile di fatturato vendite saranno da gestire di volta in volta da parte dell’ utente.

### Fatturazione anticipo incassato e contabilizzazione
Una volta confermata la creazione si aprirà la fattura:
il tipo riga articolo è impostato automaticamente come tipo 6, cioè fattura d’ acconto, in modo che questa sia poi disponibile in storno nella fatturazione di chiusura dell’ ordine.

:::tip **NOTA:**

Una volta contabilizzata questa fattura, la particolarità è che questa non creerà una nuova partita, ma sarà la partita di anticipo extra-contabile a venir recuperata (anche se è già nello stato di "Chiusa") ed associata alla registrazione contabile di questa fattura:
:::