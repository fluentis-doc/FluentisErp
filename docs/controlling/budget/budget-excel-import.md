---
title: Importazione excel delle registrazioni extracontabili di Budget
sidebar_position: 3
---

Nel menù degli strumenti, all'interno del gruppo **Bizlink**, troviamo le ***Importazioni on demand*** e quindi le ***Importazioni excel***: fra queste abbiamo a disposizione l'import con codice **OffBalanceRecordsForArea**, che consente di importare facilmente le registrazioni Extracontabili di Area, quindi sia registrazioni dell'area gestionale che saranno utilizzati in integrazione all'area dei consuntivi di periodo (ad esempio, registrazioni dei compensi collegio sindacale che si caricano ad inizio anno, piuttosto che valorizzazioni extracontabili delle paghe del singolo mese) che registrazioni da utilizzare per elaborare il dettaglio del Budget di periodo.

I campi disponibili sono i seguenti:
- Data registrazione: obbligatorio, è la data registrazione da assegnare
- Data competenza: obbligatorio, è la data competenza della registrazione, sarà sempre uguale alla data precedente
- Numero registrazione: obbligatorio, si consiglia di impostare un numero registrazione alto, in modo da non rischiare di sovrapporsi con eventuali registrazioni già presenti alla data, create magari automaticamente da procedure di contabilizzazione (es. l'elaborazione degli ammortamenti del controlling, piuttosto che la Contabilizzazione rimanenze delle Chiusure infrannuali)
- Causale: la causale del movimento, obbligatoria, che deve gestire i centri di costo
- Conto e SottoConto: obbligatorio, il conto/sottoconto da assegnare al movimento
- Centro aziendale: obbligatorio, il centro aziendale da assegnare 
- Tipo-Numero interno-Anno-Numero WBS: opzionalmente l'eventuale aggancio ad un progetto
- Importo dare: da valorizzare (magari a zero) obbligatoriamente
- Importo avere: da valorizzare (magari a zero) obbligatoriamente
- Da data competenza: la data iniziale di competenza economica della riga, non obbligatoria ma da valorizzare sempre quando si tratta di movimenti economici
- A data competenza: la data finale di competenza economica della riga, non obbligatoria ma da valorizzare sempre quando si tratta di movimenti economici
- Divisione: non obbligatoria, se non indicata sarà utilizzata quella dei parametri d'importazione, di default quella attiva

Una volta inseriti tutti i campi necessari, si potrà validare il range dei dati inseriti al fine di verificare eventuali codici mancanti o errati (pulsante ***Valida range di dati***), piuttosto che lanciare direttamente l'import con il pulsante ***Importa foglio excel***: verrà richiesta la valorizzazione dell'**Area** da utilizzare e della divisa di riferimento dell'operazione.


