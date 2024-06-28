---
title: Generazione automatica CashFlow
sidebar_position: 4
---

Normalmente la simulazione di cash flow viene creata attraverso questa maschera, che consente di definire i parametri di gestione per ogni tipo flusso. 

Ogni nuova elaborazione andrà a salvare il calcolo associato al campo **Numero**, assegnato automaticamente. E' possibile inoltre associare una **Descrizione** di dettaglio.

---

### Campi della griglia

**Tipo / Descrizione flusso:** ripresi dalla tabella Tipi flusso

**Da Data / A Data:** Range di date di filtro che agiscono secondo la logica specifica di ogni tipo flusso (vedere qui sotto)

**Abilitato:** flag che gestisce l'effettivo utilizzo del tipo flusso corrispondente nel calcolo che si sta per lanciare

**Registrazioni provvisorie:** considera o meno anche i dati collegati a registrazioni contabili in stato *Provvisorio*

**Non pagabili:** considera i meno anche le partite aperte nello stato *Non pagabile*

**Usa q.ta residua:** permette di considerare gli ordini secondo la quantità residua da evadere

**Usa nella disp. attuale:** legge gli effetti in portafoglio PRESENTATI e non insoluti con scadenze superiori ad oggi e li espone alla data di oggi nel conto ORDINARIO presente nella distinta di presentazione (anche se contabilmente l’accredito sarà solo al dopo incasso)

**Usa in scad. nel castelletto:** permette di considerare anche gli effetti presentati al salvo buon fine. In particolare usa il conto bancario di appoggio per il s.b.f. (salvo buon fine) inserito nella distinta di presentazione (anzichè il conto del cliente così come fa quando l'effetto è soltanto *Emesso*) e lo movimenta in dare in base a quanto presentato nelle varie date di scadenza degli effetti inseriti in distinta.

:::danger ATTENZIONE
Gli effetti inseriti in distinta saranno visibili solo se hanno il flag **Contabilizzato** attivo al loro interno (inquanto è stata effettuata la contabilizzazione dell'emissione). Poichè è comunque possibile inserirli in distinta per la presentazione in banca anche se non stati contabilizzati si consiglia di fare attenzione.

Altra condizione importante è il filtro che esclude (indipendentemente dalla data di filtro impostata prima del lancio del calcolo) gli effetti con data scadenza precedente ad "oggi" ovvero la data di elaborazione del cashflow in questione
:::

Se abilitato in relazione al tipo flusso **Anticipi**, va a rilevare gli importi delle distinte di anticipo fatture non contabilizzate per l'importo anticipato sul conto bancario, con data uguale alla data scadenza anticipata.

**ATTENZIONE:**
Se viene scelta questa opzione NON devono essere inseriti anche i conti d'appoggio utilizzati per il s.b.f. nella consistenza finanziaria iniziale (tramite la gestione dei *tipi conto finanziario*,) altrimenti il dato (in termini di flusso di cassa positivo) verrà duplicato e dunque il risultato sarà falsato e non attendibile.


---

### Dettaglio delle logiche applicate ai tipi flusso:

**Saldo contabile**: il range di date viene utilizzato per calcolare il saldo contabile secondo la data registrazione contabile;

**Partite**: il range di date viene utilizzato per filtrare sulle date scadenza delle partite. Sono presenti poi flag per considerare le partite collegate a registrazioni provvisorie così come le partite non pagabili;

**Ordini clienti/fornitori**: il range di date filtra sulla data ordine. Sono considerati solo le tipologie con flag *cash flow* impostato, stampate e confermate. Si consiglia di impostare il flag *usa Qta residue* in modo da simulare un ordine secondo la quantità residua da consegnare/ricevere. Vengono calcolate le scadenze ipotetiche sulla base delle impostazioni di tipo/soluzione pagamento impostate in testata, prendendo come data di partenza la data di consegna della riga (se mancante la data consegna di testata dell'ordine) o la data odierna se questa è antecedente a oggi;

**Bolle di acquisto/vendita**: il range di date filtra sulla data DDT. Sono considerati solo le tipologie impostate di ‘cash flow', stampate o controllate, non già valorizzate in fattura. Vengono calcolate le scadenze ipotetiche sulla base delle impostazioni di tipo/soluzione pagamento impostate in testata, a partire dalla data DDT;

**Fatture di acquisto/vendita**: il range di date filtra sulla data scadenza in fattura. Sono considerati i documenti non proforma, stampate o controllate, non già contabilizzate;

**Ordini di conto lavoro**: il range di date filtra sulla data ordine, solo ordini stampati non evasi. Vengono create scadenze ipotetiche sulla base del residuo non rientrato e il costo della lavorazione;

**Rientri di conto lavoro**: il range di date filtra sulla data rientro, solo rientri stampati non fatturati.

I rientri devono essere generati evadendo l'ordine di conto lavoro e non inseriti manualmente altrimenti non saranno visibili;

**Extracontabile**: il range di date filtra sulla data scadenza extracontabile.

I parametri di esecuzione sono memorizzati: solo la data finale del tipo flusso saldo contabile viene sempre riproposto come data odierna all'apertura. Una volta impostata la descrizione del cash flow sarà possibile premere il pulsante di calcolo. In considerazione dei movimenti degli ordini, per i quali il sistema deve fare una simulazione riga ordine per riga ordine, l'elaborazione può essere particolarmente lunga a seconda della numerosità dei dati presenti nel filtro impostato. Una volta completata l'elaborazione sarà possibile aprire il cash flow attraverso il pulsante di gestione relativo.

**Portafoglio attivo**: ATTENZIONE: in merito al flusso delle distinte SBF bisogna fare attenzione agli effetti presentati ma non contabilizzati (contabilizzazione dell'emissione), la situazione può generarsi ad esempio emettendoli dalle scadenze fatture e poi inserendoli in distinta senza contabilizzare l'emissione. In tale situazione gli effetti non saranno inseriti nel cashflow. Altra condizione di cui tenere conto è il fatto che indipendentemente dal filtro, la data scadenza effetto deve essere maggiore o uguale a "oggi" (data elaborazione cashflow)

| Funzione | Significato |
| --- | --- |
| Creazione | Esegue la procedura di generazione del cash flow secondo le impostazioni inserite nella maschera. |
| Modifica | Apre in modifica il cash flow creato. |






