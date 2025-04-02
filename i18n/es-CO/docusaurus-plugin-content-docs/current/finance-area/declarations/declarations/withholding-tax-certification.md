---
title: Certificazione ritenuta telematica
sidebar_position: 2
---

Da questa form è possibile gestire la Certificazione Unica delle ritenute d'acconto operate nei confronti dei percipienti generando il file per l'invio telematico.

:::danger **ATTENZIONE**:
 Per la corretta elaborazione dei dati da parte dell'applicativo è fondamentale che sia i compensi dei percipienti, **sia il relativo pagamento**, siano stati registrati tramite le funzionalità del modulo percipienti, affinchè possa essere calcolato correttamente il debito per ritenute d'acconto.
:::


La struttura della form, leggermente diversa del resto dell'applicativo, prevede l'esposizione delle comunicazioni esistenti e del relativo dettaglio tutto in un' unica videata.

Il pulsante **Ricerca**, presente nella ribbon bar, permette di ricercare le comunicazioni già inserite che saranno riportate nella griglia superiore Risultato.

Selezionando una comunicazione sarà visibile un'anteprima del relativo dettaglio nella griglia centrale Dettaglio (senza bisogno di entrare in modifica).

Con il doppio click sulla dichiarazione è possibile entrare in modifica della stessa.

Il pulsante **Nuovo** andrà ad inserire una nuova dichiarazione.

### GESTIONE DELLE ANAGRAFICHE:

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image01.png)

All'interno della sezione relativa a i dati di contatto sono presenti (aprire l'expander) i campi per i dati del percipiente (data e luogo di nascita). Tali dati saranno inseriti nella certificazione unica. Devono essere compilati anche i due campi relativi al **Nome** e **Cognome** poichè il campo unico Ragione sociale non rileva ai fini del modello fiscale.

### INSERIMENTO DATI DI TESTATA:

**Anno**: proposto automaticamente pari all'anno in corso;

**Cod. Fiscale Sogg. Obbl.**: inserire il codice fiscale dell'azienda (sostituto d'imposta). Il dato sarà riportato nel tracciato telematico e nella testata della stampa del modello fiscale.

**Cod. Fiscale intermediario**:se ci si avvale di un intermediario abilitato per l'invio della dichiarazione (Caf, Commercialista ecc...) indicare qui il relativo codice fiscale.

**Nr. iscrizione Caf**: il campo permette di inserire il nr di iscrizione all'albo dei caf dell'intermediario abilitato all'invio telematico;

**Data impegno invio**:campo per indicare la data dell'impegno alla presentazione telematica da parte dell'intermediario abilitato;

**Nome file**: è necessario specificare il nome del file telematico che sarà generato;

**Percorso file**: è necessario specificare un percorso locale per il salvataggio del file da inviare telematicamente, il documento sarà inoltre memorizzato nella gestione documentale di Fluentis ed accessibile dalla form in commento tramite il tasto ![](/img/neutral/common/document-manager.png);

**Tipo invio**: specificare in questo campo, tramite la combo box, se si tratta di invio ordinario oppure sostitutivo o di annullamento (vedere istruzioni ministeriali). Questo campo dovrà essere gestito in abbinamento ai flag **Annullamento** e **Sostituzione** che aggiornano i rispettivi campi all'interno del modello fiscale.

**Aggregata / Dettagliata**: questo campo specifica se la certificazione unica che sarà elaborata sarà di tipo dettagliato (riporterà i dati distinti per ogni singolo compenso intestato ad ogni percipiente) oppure di tipo aggregato (riporterà i dati aggregati e totalizzati per ogni singolo percipiente). Vedere le istruzioni ministeriali.

**Soggetto che effettua la dichiarazione, pers. fis.**: la combo box, collegata alla tabella Dipendente, permette di inserire il soggetto che firma la dichiarazione (il dato è obbligatorio).

**Codice carica**: inserire tramite la combo box il codice carica del soggetto che firma la dichiarazione (es. rappresentante legale) vedere le istruzioni ministeriali;

**Soggetto che effettua la dichiaraz. pers. giuridica**: in questo campo è possibile inserire i dati anagrafici (ripresi dalle anagrafiche già presenti nel sistema) di una società che presenta la dichiarazione per conto dell'azienda in uso (vedere istruzioni ministeriali);

**Data firma sostituto d'imposta**: è necessario indicare la data della firma della dichiarazione;

**Firma**: attivare sempre il flag che indica che la dichiarazione è firmata e riporta in stampa il nome del soggetto firmatario (vedere campo Soggetto che effettua la dich...)

### GRIGLIA DETTAGLIO

I campi ricalcano i dati presenti nel modello ministeriale e pertanto si rinvia alle istruzioni fiscali l'illustrazione del contenuto.

E' possibile intervenire manualmente modificando i dati che vengono generati automaticamente con la procedura di calcolo, attivabile dalla ribbon bar.![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Per generare il file da trasmettere telematicamente utilizzare il pulsante **Esporta**. Il file verrà memorizzato nel documentale di Fluentis e sarà possibile scaricarne una copia sul proprio pc locale.

![](/img/neutral/common/document-manager.png)

### GRIGLIA INFERIORE 

**Codici AU....** è riservata all'inserimento, per ogni riga della griglia Dettaglio, di informazioni ulteriori richieste in particolari situazioni per le quali si rinvia alle istruzioni ministeriali.

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)