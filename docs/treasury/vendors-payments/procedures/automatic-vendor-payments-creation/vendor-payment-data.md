---
title: Dati pagamento Fornitore
sidebar_position: 2
---

All'interno della seconda scheda **parametri** vanno impostati i vari elementi di gestione della procedura: innanzi tutto va inserita la banca di riferimento, che sarà la banca intestataria della distinta. Normalmente si tratta di un codice collegato ad un'anagrafica banche, al fine di riprendere da questa il campo del conto corrente ed avere tutti i dati da inserire nell'invio telematico dei bonifici Italia.

Il flag **Utilizza la banca di pagamento dalla partita del fornitore, in assenza dall'anagrafica** imporrà alla procedura di creare tante distinte quante sono le banche di pagamento assegnate alle varie partite selezionate nella procedura di gestione appoggio pagamento, oppure inserite in anagrafica del fornitore. In assenza di entrambe il pagamento sarà inserito nella distinta per il codice banca impostato nel campo iniziale.

Il flag **Utilizza la banca d'appoggio presente in anagrafica del fornitore **forza l'assegnazione dei codici bancari del beneficiario leggendoli dalla riga banca di default inserita nella sezione banche d'appoggio della scheda pagamenti dell'anagrafica fornitore. Questo flag può essere predefinito all'interno dei parametri del modulo.

Il tipo pagamento consente di definire la tipologia di pagamento da assegnare alla distinta: il campo diventa obbligatorio solo quando le partite da pagare prevedono tipologie di pagamento non uniforme.

L'anno e la data di emissione sono definiti di default sulla base della data di sistema.

Il flag di **Imposizione data valuta beneficiario** consente di assegnare, all'interno del tracciato telematico, una data valuta per il beneficiario del pagamento, che se non è impostata viene assegnata come data odierna. Se il flag non è impostato la data valuta sarà uguale alla data scadenza.

Il campo **Note iniziali** è un campo libero di note del pagamento, non utilizzato nello standard.

Il campo **Note finali** viene utilizzato nella contabilizzazione pagamenti per valorizzare la descrizione di dettaglio del movimento contabile del sottoconto banca.

Il flag di **Contabilizzazione dell'operazione** consente di rilevare direttamente la chiusura delle partite e i relativi movimenti di partita doppia dei pagamenti in creazione: se non utilizzata sarà possibile utilizzare in seguito la procedura separata di contabilizzazione.

La causale di contabilità da utilizzare per la registrazione, delle date di registrazione e pagamento, del sottoconto di rilevazione degli abbuoni attivi inseriti in distinta (questo sottoconto viene proposto sulla base del sottoconto ‘sopravvenienze attive' inserite nei parametri di contabilità), una data e numero documento opzionale da inserire come riferimenti della testata della registrazione (potrebbe essere il numero/data distinta).

Sulla destra è presente un flag di default di **Rilevazione della chiusura partite** (proposto di default, da non togliere) e il criterio di gestione del raggruppamento in contabilità: l'opzione di default, raggruppamento banca, consente di rilevare una registrazione per ogni sottoconto banca di uscita, che è la gestione migliore al fine di semplificare la riconciliazione dei movimenti bancari dalle stampe degli estratti conto. In alternativa è disponibile un raggruppamento per sottoconto fornitore e un'opzione di registrazione dettagliata pagamento per pagamento.

Se la causale contabile prevede la gestione della data valuta banca e all'interno dell'anagrafica banche è stato definito un numero di giorni per il suo calcolo in relazione alla causale contabile utilizzata, il campo sarà gestito in automatico nella registrazione risultante.


| Funzione | Significato |
| --- | --- |
| Inizia la creazione del pagamento da partite | Pulsante attraverso il quale procedere alla creazione del pagamento/distinta e se previsto anche della contabilizzazione del pagamento stesso. Il pulsante è attivo dopo aver selezionato almeno una partita nel primo Tab e dopo aver indicato la banca di pagamento del presente Tab. |


**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Si rinvia al Tutorial - Link YouTube </a>**



