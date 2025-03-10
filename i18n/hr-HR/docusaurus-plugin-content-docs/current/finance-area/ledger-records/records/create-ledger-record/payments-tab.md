---
title: Tab Pagamenti
sidebar_position: 4
---

 

**La scheda ‘Pagamenti' è presente solo se la causale ha il flag ‘Chiusura partite' impostato.**

La scheda ‘Pagamenti' consente di visualizzare le partite aperte per procedere ai pagamenti/incassi con chiusura delle partite aperte o alle compensazioni. 

 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image01.png)

CORRETTA CONFIGURAZIONE DELL'INTERAZIONE TRA APERTURA, CHIUSURA E COMPENSAZIONE PARTITE

- Tipicamente tutte le registrazioni di tipo IVA hanno il flag di 'apertura partite' e possono avere anche il flag di chiusura + compensazione partite; 

- Le causali di **pagamento/incasso**, invece, prevedono sempre la chiusura partite **senza mai il flag di compensazione**, eventualmente possono avere il flag di apertura partite per gestire i casi di pagamento anticipato (in questo caso, mancando la chiusura di una partita, verrà aperta una partita di segno opposto mantenendo la quadratura con il movimento contabile - quadratura che può essere resa obbligatoria tramite i **[parametri](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** della causale contabile). 

Differenza tra pagamenti partite e compensazione partite: la compensazione, nella terminologia contabile, può essere intesa sia come compensazione partite (dare/avere) dello stesso sottoconto (ad es. fattura con nota di credito) ma anche come compensazione cliente/fornitore (ad es. compenso il debito nei confronti del sottoconto fornitore con il credito del sottoconto cliente facente capo alla stessa anagrafica). Nella logica dell'applicativo, invece, la compensazione è strettamente collegata alla situazione di partite facenti capo allo stesso sottoconto, questa situazione può essere gestita, in alternativa  semplicemente effettuando un pagamento partite "incrociato" (sia dare che avere - ad esempio tramite un giroconto -  andando a "compensarsi" a saldo in contabilità).

Se in testata della registrazione è stato inserito un sottoconto intestatario, questo sarà riportato come filtro di ricerca nei campi relativi iniziali della scheda pagamenti: 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image02.png)

 

per tutte le registrazioni IVA, quindi, l'applicativo proporrà qui le partite del solo cliente/fornitore inserito in testata, per procedere alla compensazione fattura/nota di credito; nel caso di registrazioni di pagamento/incasso 8soprattutto di più clienti o fornitori), invece, normalmente il campo in testata sarà vuoto e sarà l'utente a compilare il filtro secondo le esigenze. 

Da segnalare, in particolare, il campo del sottoconto ‘**Banca**': non si tratta di un filtro, ma viene compilato automaticamente con il sottoconto di pagamento inserito in **[anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** del cliente/fornitore intestatario della registrazione e da qui va ad aggiornare la registrazione contabile nel campo che prevede il tipo importo ‘Tot. Doc./registrazione' 



![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

(se i **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, nella lista dei conti clienti/fornitori, autorizzano la sostituzione, ovvero deve essere presente una associazione tra il tipo conto banche ed il relativo mastro nel piano dei conti affinché possa avvenire la sostituzione).

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

 

**Una volta individuata, nella prima griglia, la partita (o le partite) da pagare è possibile selezionarle e pagarle mediante doppio click nella singola riga,**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image05.png)

 

oppure utilizzando il pulsante ‘**Crea pagamenti**'. ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image06.png)

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image07.png)

 

Nel caso in cui la causale preveda la compensazione partita sarà attivo il pulsante di ‘**Compensazione partite'** (e il doppio click avrà lo stesso significato). 

Un altro pulsante utile in questa sezione è il ‘**Crea pagamenti estesi**': ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

si aprirà una maschera intermedia di impostazione dell'importo del pagamento con un eventuale importo di abbuono, con relativo sottoconto per la rilevazione contabile. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image09.png)

 

NOTA

In questa maschera (solo qui) è possibile impostare lo stato ‘**Forzatamente chiusa**' ad una partita (tramite l'apposito flag): l'uso di questo stato è sconsigliato in quanto non viene determinato dalla normale creazione di un pagamento che chiude la partita ma ne forza lo stato, può essere utile per riallineare differenze ed errori non più individuabili per la normale correzione. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image10.png)

 

Un risultato simile può essere ottenuto creando manualmente un pagamento e forzandone l'importo. 

Non è consentito di forzare il pagamento con un importo superiore al residuo della partita.

Nella lista dei pagamenti possono essere inserite note degli stessi: queste note possono essere collegate automaticamente, in causale, con la descrizione generica della registrazione contabile (flag ‘descrizione in giornale e pagamenti', sconsigliato).

Se il pagamento sarà gestito, secondo le **[impostazioni della causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, al cambio storico della partita, non sarà rilevata nessuna differenza cambio in automatico e sarà gestirla manualmente in contabilità: l'opzione facilita inoltre, e la cosa è particolarmente utile, la gestione dell'uguaglianza tra partite aperte e saldo contabile. 

Diversamente, se l'opzione non è attiva, il controvalore euro sarà calcolato al cambio della data registrazione (e in questo caso, se impostato correttamente **[in causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - vedere tipo importo Utile/Perd. diff. cambi - e **[nelle divise](/docs/configurations/tables/general-settings/currencies)**, la procedura valorizzerà automaticamente i sottoconti di utile/perdita cambi divisa per divisa). 

Attraverso il pulsante **Espandi/riduci** si può visualizzare una sola delle due griglie (ricerca partite o pagamenti). 

In basso saranno visualizzati campi di totalizzazione degli importi selezionati. 

Sulla base dei pagamenti effettivamente inseriti e delle impostazioni della causale, l'applicativo aggiornerà la riga con il tipo importo ‘Tot. Doc./registrazione' (ad esempio attribuito al sottoconto della banca di pagamento) con il totale dei pagamenti rilevati, mentre inserirà una riga per ogni pagamento o raggrupperà i pagamenti dare e avere, divisa per divisa, di ogni sottoconto cliente/fornitore pagato/incassato.

RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni. La lista delle funzionalità possibili nel tab corrente è di seguito rappresentata:



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la registrazione. |
| Nuova registrazione | Pulsante per creare una nuova registrazione. |
| Parametri di inserimento | Richiama i parametri di inserimento della prima nota. |
| Apri anagrafica | Pulsante per richiamare la gestione anagrafica del sottoconto selezionato, o in assenza, la ricerca di un'altra anagrafica. |
| Ricerca partite | Pulsante per ricercare le partite da pagare/incassare. |
| Cancella pagamenti | Pulsante per cancellare i pagamenti precedentemente selezionati. |
| Crea pagamenti | Pulsante per creare il pagamento della partita selezionata. |
| Compensazione | Pulsante per operare la compensazione partite se previsto nella causale contabile. |
| Crea pagamenti estesi | Pulsante per gestire il pagamento/incasso con eventuali importi di abbuono e relativo sottoconto di rilevazione contabile. |
| Espandi/riduci | Pulsante per ridurre la visualizzazione alla sola parte delle partite o pagamenti e viceversa o espanderla ad entrambe. |
| Stampa | Pulsante per stampare il pagamento/incasso selezionato. |



| Funzione | Significato |
| --- | --- |
|  [Document Manager](/docs/guide/common/operations-with-data/document-manager)  | Pulsante per il collegamento alla gestione documentale. |






