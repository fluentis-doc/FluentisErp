---
title: Esportazione Cedolini paga
sidebar_position: 3
---
 
Cliccando sul bottone esporta verrà esportato il singolo cedolino selezionato, oppure effettuando una selezione multipla dalla griglia di ricerca, si potrà effettuare una esportazione multipla in un unico file.

La configurazione dei tracciati è la seguente:

Configurazione > Parametri > Amministrazione > **Parametri Importazione paghe**
nella videata sono presenti due campi “Movimenti” e “Valori” che consentono di impostare quale flusso di bizlink chiamare per l’export:

- Payroll_Export è per Zucchetti
- Payroll_ExportExternalCompany è per TeamSystem
- PayrollExport_SistemiPresenze è per Sistemi e va inserito in questo campo dei ‘Movimenti’, mentre PayrollExport_SistemiVoci va messo nel campo successivo “Valori” (Sistemi richiede due file distinti, uno per le ore e uno per i rimborsi spese inseriti in busta paga; TeamSystem ha invece tutto insieme)

Strumenti > Bizlink > Configurazione > Flussi 
aprire la voce **Intercompany**
cercando per Payroll saranno visibili i tracciati già presenti a standard, e dalla stessa videata è possibile configurare eventuali altri nuovi tracciati.
