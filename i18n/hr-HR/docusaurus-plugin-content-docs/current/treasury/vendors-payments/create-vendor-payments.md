---
title: Crea pagamenti fornitore
sidebar_position: 2
---

Da questa maschera si procede alla creazione di una nuova distinta di pagamento: la maschera è la stessa anche per l'apertura in modifica/visualizzazione di una distinta già salvata.

Nel primo combo si seleziona il tipo di pagamento di riferimento della distinta. Nei campi successivi la procedura propone l'anno attuale del sistema e la numerazione progressiva della distinta: come data di emissione viene proposta la data attuale.

**Banca:** all'interno di questo campo va inserito normalmente il codice di sottoconto dell'anagrafica banca sulla quale emettere la distinta: l'obbligatorietà del collegamento ad un'anagrafica banche è legata alla necessità di avere i riferimenti cin/abi/cab/conto corrente necessari per l'invio telematico del tracciato dei bonifici Italia. Dal punto di vista della contabilizzazione dei pagamenti, invece, non c'è alcuna necessità particolare: questo sottoconto potrebbe essere un qualsiasi sottoconto del piano dei conti;

**Conto corrente**: viene compilato automaticamente sulla base dell'anagrafica banca collegata al sottoconto inserito: eventualmente può essere inserito e/o modificato manualmente;

**Note iniziali;** è un campo libero di note del pagamento, non utilizzato nello standard;

**Note finali**: viene utilizzato nella contabilizzazione pagamenti per valorizzare la descrizione di dettaglio del movimento contabile del sottoconto banca.

Il flag **Imponi questa data valuta beneficiario** consente di definire, nel tracciato telematico, quale sia la data valuta da attribuire al beneficiario del pagamento: in caso la data non sia specificata sarà utilizzata la data odierna. Se il flag non è impostato la data valuta sarà uguale alla data scadenza.

Sulla destra sono presenti due flag di stato della distinta: il flag Stampato non viene gestito automaticamente dal programma, mentre il flag File emesso viene aggiornato sulla base della creazione del file telematico. E' possibile ricreare il file anche senza resettare questo flag in distinta.

La gestione dei dettagli dei pagamenti si effettua normalmente attraverso il pulsante di 'Pagamenti da partite': si tratta di selezionare quindi la lista delle partite contabili da chiudere con il pagamento in distinta. In questa maschera di selezione dalle partite, fra i vari filtri e flag disponibili, è utile segnalare che: è sconsigliato l'uso del flag di visualizzazione partite percipienti, questo perché la gestione del pagamento si deve effettuare dal modulo percipienti per poter poi ottenere la certificazione delle ritenute; il flag ‘Imponi banca d'appoggio dall'anagrafica del fornitore' significa andare a utilizzare come banca beneficiaria del pagamento la banca di default inserita nell'anagrafica fornitore nella sezione pagamenti, griglia delle banche d'appoggio, questo indipendentemente dalla banca d'appoggio collegata alla partita nella sua registrazione contabile di creazione. Questo secondo flag può essere predefinito di default nei parametri del modulo.

Viene consentita la modifica dei valori di pagamento inserito in griglia, al fine di ottenere ad esempio pagamenti parziali, così come l'aggiunta di righe pagamento manuale: in questo secondo caso si tratta di una forzatura che può andare a creare una differenza tra saldo contabile del sottoconto inserito e saldo del partitario, in quanto la procedura di contabilizzazione pagamenti non va a gestire un'eventuale apertura partita di segno opposto di bilanciamento delle sezioni se non è impostato il flag ‘apertura partite' nella causale. Il campo abbuono consente di rilevare unicamente abbuoni attivi.

Un ultimo dettaglio nella gestione della griglia riguarda il campo **Note**: questo viene compilato automaticamente sulla base delle partite pagate secondo i riferimenti del documento che viene chiuso. Queste note saranno riportate nelle righe di pagamento inserite in contabilità generale, in corrispondenza del sottoconto relativo.

:::tip ATTENZIONE
Sulla testata distinta è presente un flag Autorizzato per rilasciare l'autorizzazione alla creazione del tracciato xml e quindi dare esecuzione al pagamento (viene memorizzato anche l'utente e la data di autorizzazione, visibili aprendo l'expander). Tale flag può essere attivato di default (per comodità laddove non si intenda gestire un processo autorizzativo) accedendo alla form **Parametri pagamenti fornitori** e attivando il flag *Autorizzato di default*.
:::

| Funzione | Significato |
| --- | --- |
| Nuovo pagamento  | Pulsante per inserire, manualmente, una riga di pagamento fornitore. |
| Salva | Pulsante per salvare la testata del nuovo pagamento fornitore, attivabile dopo aver inserito, il tipo pagamento e  il sottoconto di Banca. |
| Cancella pagamenti selezionati | Pulsante per cancellare i pagamenti fornitori creati manualmente o da creazione pagamento da partite. |
| Crea un pagamento dalle partite  | Pulsante, attivabile dopo aver salvato la testata, per creare un pagamento, acquisendo i dati dall'archivio partite. |
| Numerazione da |  |
|  [Documenti](/docs/guide/operations-with-data/document-manager)  | Pulsante per il collegamento alla gestione documentale. |

---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>



