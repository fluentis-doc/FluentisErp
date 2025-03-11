---
title: Creazione e Gestione effetti
sidebar_position: 5
---

La form si trova sul percorso  **Tesoreria > Effetti > Crea Effetto** e permette la creazione *manuale* e la gestione, modifica/visualizzazione dell'effetto.

## Come creare un Nuovo effetto

:::tip[Attenzione]
Stiamo per illustrare i passaggi per la creazione ***manuale*** di un effetto. Tuttavia **questa modalità è scarsamente utilizzata. Si consiglia di utilizzare le procedure automatiche:**

[**Acquisizione effetti dalle partite**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)

[**Acquisizione effetti dalle fatture**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)
:::

Da questa maschera:

1. Seleziona il **tipo effetto**: il programma procederà ad assegnare un **numero** secondo il numeratore collegato al tipo effetto e all'**anno** di riferimento, che propone come l'anno della data di sistema.
 
2. Compila i campi **Debitore** (con il conto contabile del soggetto intestatario delle effetto) e **Scadenza** (con la data scadenza dell'effetto).

3. Salva la testata dell'effetto.

4. Compila i campi **importo valuta** e **importo effetto** manualmente o gestisci automaticamente sulla base delle partite/scadenze selezionate dalle tab dei **riferimenti scadenze/partite**. Importo bollo è in campo non utilizzato. Nelle tab dei riferimenti partite o scadenze puoi utilizzare i comandi **Inserimento partite o Inserimento scadenze** per ricercare e inserire partite / scadenze nell'effetto.

La **data valuta** è la data per il cambio nel caso di effetti in valuta. Viene proposta pari alla data effetto.

Gli elementi obbligatori da indicare sono la data scadenza, divisa e cambio, il cliente debitore e la piazza (compilata sulla base dell'anagrafica collegata al cliente).

L'**agente** è un semplice campo di riferimento dell'agente principale della fattura d'origine.

Lo **stato effetto** viene proposto come *emesso* e sarà aggiornato automaticamente sulla base delle operazioni che saranno eseguite per l'effetto.

Il flag **Stampato** non è gestito, mentre il *contabilizzato* e *accreditato* dipendono dalle procedure di contabilizzazione effetti e accrediti eseguite.

Il campo **riferimenti** è un campo note libero, che viene riportato nel file come riferimento dell'operazione.

### La Tab Presentazione

Presenta due sezioni: 

**Appoggio bancario**, dove sono riportati gli estremi della banca d'appoggio quali **abi/cab** (obbligatori per poter inserire l'effetto in una distinta di presentazione) oltre a *conto corrente* (IBAN e SWIFT) e *CIN* che sono necessari solo in caso di effetti RID. 

**Estremi Presentazione**
riporta gli estremi della distinta con la quale è stato presentato in banca (ad esempio al salvo buon fine o all'incasso).

### La Tab Riferimenti scadenze

In questa sezione si possono visualizzare i riferimenti della fattura d'origine (in caso di utilizzo della procedura *acquisizione effetti dalle scadenze*) oppure aggiungere manualmente scadenze attraverso il pulsante *inserimento scadenze*. In questo caso è possibile inserire anche scadenze non collegate a tipi pagamento da gestire con effetti (esempio *ricevute bancarie*), così come scadenze collegate a note di credito.

### La Tab Riferimento partite

In questa sezione si possono visualizzare i riferimenti delle partite d'origine (in caso di acquisizione effetti dalle partite) oppure aggiungere manualmente partite attraverso il pulsante *inserimento partite*.

In questo caso è possibile inserire anche partite non collegate a tipi pagamento da gestire con effetti (esempio *ricevute bancarie*), così come partite collegate a note di credito.

### La Tab Altro
In questa sezione si possono memorizzare i riferimenti dei giranti e degli avallanti.




