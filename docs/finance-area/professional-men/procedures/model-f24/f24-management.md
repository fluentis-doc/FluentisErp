---
title: Gestione F24
sidebar_position: 2
---

## Compilazione automatica

La creazione del modello F24 prevede il caricamento di un nuovo modello all'interno del quale i dati di testata sono compilati sulla base dei riferimenti inseriti all'interno della tabella [**Società**](/docs/configurations/tables/general-settings/company). 
 

Il periodo IVA e il periodo ritenuta (composti dai due campi mese / anno) sono proposti come il mese attuale: possono essere variati per richiamare il mese di riferimento (sia per i dati dell'iva da versare che per le ritenute d'acconto da versare). 

In particolare, per quanto riguarda le  liquidazioni IVA, sarà ricercato il periodo memorizzato nella maschera ** [Versamenti IVA](/docs/finance-area/declarations/declarations/vat-payment) ** presente in contabilità generale (dove sono memorizzati automaticamente i valori della liquidazione al momento della sua stampa in definitivo: è consentito un caricamento manuale del valore).

E' possibile scegliere di elaborare solo i dati iva o solo i dati delle ritenute cancellando i dati dai campi (periodo e anno di riferimento) del dato che non interessa.

Una volta memorizzati i dati di testata si attiverà il pulsante **Proponi valori** che andrà a compilare le varie righe della prima **scheda erario**. 

Una volta compilate **manualmente** anche tutte **le altre sezioni** della dichiarazione, a seconda delle necessità, impostato il versante/firmatario e il percorso di creazione del file sarà possibile eseguire la creazione del file con l'apposito pulsante che andrà a creare un file con il nome strutturato come 'Partita IVA società' + '_' + 'Numero dichiarazione' + '_' + 'Data dichiarazione' con estensione F24. In caso di dati obbligatori mancanti sarà restituito un messaggio di errore esplicativo e il file non sarà creato.

È possibile annullare la creazione del file con l'apposito pulsante di gestione.

Tramite il pulsante **Crea File telematico** è possibile creare il file che sarà inviato all'Agenzia delle Entrate tramite i canali appositi (es. Entratel).
Il file viene automaticamente archiviato nl Documentale e può essere visualizzato e scaricato localmente attraverso il pulsante e drop down list **Documenti**, presente nella ribbon bar.

:::note[Nota]
Per la creazione del file è richiesta la presenza (potrebbe essere restituito un messaggio di avviso) di due connettori Bizlink denominati F24 (Gestito dal servizio con autenticazione) ed F24Errors, di tipo Folder Output e con aggancio al partner AgeEnt, Flusso AgeEnt, Operazione di Flusso e documento di flusso F24 (F24Errors per il secondo)
:::

## Contabilizzazione

Nella testata del modello è possibile compilare i campi per le eventuali **Spese bancarie** e per il conto della **Banca di pagamento**.
A questo punto è possibile premere il bottone **Contabilizzazione** per generare automaticamente la scrittura che rileva l'uscita di banca e lo storno dei conti (alimentati automaticamente) dove è stato caricato il debito per ritenute d'acconto da versare e per iva da versare (esempio conti solitamente denominati Erario c/ritenute d'acconto ed Erario C/Iva).

:::tip[Nota]
I conti utilizzati automaticamente per caricare il debito IVA e il debito per le ritenute d'acconto sono impostati, rispettivamente, nei [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters#conti) per quanto riguarda l'iva, e nella tabella [**Tipi Ritenuta**](/docs/configurations/tables/finance/withholding-tax-types.md) per le ritenute d'acconto, conto di default che può essere stato sovrascritto in fase di [**contabilizzazione pagamento compensi**](/docs/finance-area/professional-men/accounting/payments-accounting/parameters)
:::



| Funzione | Significato |
| --- | --- |
| Salva | Salva il modello in uso. |
| Proponi valori | Esegue la ripresa dei dati dai versamenti iva e dalle ritenute dei compensi pagati. |
| Nuovo dettaglio | Imposta il cursore nella griglia di inserimento dei dettagli. |
| Cancella dettaglio | Cancella la riga di dettaglio selezionata. |






