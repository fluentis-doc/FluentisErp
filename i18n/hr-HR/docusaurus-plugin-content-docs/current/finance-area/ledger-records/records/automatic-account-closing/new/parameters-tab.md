---
title: Tab Parametri
sidebar_position: 2
---

Nel tab ‘parametri' è necessario inserire: 

- dati per filtrare i movimenti contabili che saranno oggetto di chiusura dei conti; le **date registrazione e competenza** individuano quali registrazioni riportare nel saldo contabile: in particolare le date di competenza saranno relative al periodo di bilancio (1/1/….-31/12/….), mentre il campo ‘a data registrazione' potrebbe slittare nell'esercizio successivo per ricomprendere le scritture di rettifica:** si consiglia più semplicemente di non impostare il filtro per date registrazione**.



- i codici di sottoconto, causale da utilizzare e data di registrazione e di competenza contabile delle scritture di chiusura del libro giornale; tali dati (tranne le date di registrazione) vengono riportati automaticamente se inseriti all'interno dei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)** (tab ‘Conti');

- (opzionale) la scelta di gestire contestualmente anche la riapertura dei conti anziché gestirla separatamente con **[l'apposito comando](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**.

 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)



**Anno contabile**: richiama il corrispondente anno dei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, serve per la gestione della riapertura delle scritture di assestamento, da attivare alla base della maschera con il flag **Giroconto scritture di assestamento**: si tratta di gestire, in coda alla riapertura conti, i movimenti di riattribuzione dei risconti e dei ratei (a patto che questi siano già stati elaborati con la procedura **[Scritture di assestamento](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**) ai costi/ricavi relativi (i risconti saranno registrati alla stessa data dell'apertura conti, i ratei invece alla data della registrazione del documento d'origine).

 

Flag **Gestione saldo** (di chiusura e riapertura) **per divisa di movimentazione**: se attivato il programma inserisce una riga per ogni divisa di movimentazione del sottoconto specifico, mantenendo chiaramente il totale in divisa della società corretto. Tale possibilità si rende necessaria per garantire la correttezza dei saldi iniziali della stampa ‘Estratto conto in valuta'.

 

ATTENZIONE: Prima di avviare il calcolo è bene verificare le impostazioni della tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)**: 

in particolare i tipi conto di anagrafica cliente-fornitore-agente-banche oltre ad avere un flag sulle relative colonne debbono averne un secondo in una delle prime due colonne, relative all'attivo e al passivo patrimoniale. 

E' quindi possibile dare il via alla **Ripresa valori sottoconti** con il pulsante relativo, in modo da far calcolare al programma il saldo di ogni sottoconto e di presentare nelle tab Profitti e perdite e Patrimoniale i dati relativi. Una volta sicuri dei risultati è possibile passare all'ultima fase della procedura: rientrando nella scheda parametri, infatti, possiamo cliccare il pulsante Crea registrazione per la chiusura conti, che creerà le registrazioni contabili relative e inserirà il flag su **Contabilizzata**.

 

NOTA: se il flag **Giroconto scritture di assestamento** è stato attivato, quando si lancia il comando **Ripresa valori sottoconti**, diventerà visibile una ulteriore tab **[Riapertura scritture di assestamento](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)**.

 



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la testata della chiusura conti, attivabile dopo aver inserito la descrizione. |
| Ripresa valori sottoconti | Pulsante per far calcolare al programma il saldo di ogni sottoconto e di presentare nelle schede ‘profitti e perdite' e ‘patrimoniale' i dati relativi. |
| Crea registrazione per la chiusura conti | Pulsante per creare la registrazione di chiusura conti. |
| Ripristina contabilizzazione | Pulsante per annullare  ripristinando la contabilizzazione della chiusura conti. |






