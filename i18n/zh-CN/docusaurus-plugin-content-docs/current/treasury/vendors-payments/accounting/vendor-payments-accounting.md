---
title: Contabilizzazione Pagamenti Fornitore
sidebar_position: 1
---

La form si trova in Tesoreria > Pagamenti Fornitori > Contabilizzazione > Contabilizzazione Pagamenti Fornitore

Da questa maschera è possibile contabilizzare i pagamenti inseriti nelle distinte precedentemente create.

In alternativa è possibile usare la procedura integrata [*Creazione Automatica Pagamenti Fornitori*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), che genera la distinta e contabilizza i pagamenti allo stesso tempo.

## Come contabilizzare i pagamenti

1. Utilizza la parte superiore della maschera con i filtri per ricercare i pagamenti creati ma non ancora contabilizzati:premi il bottone *Ricerca*, nella griglia saranno visualizzati tutte le righe di dettaglio dei pagamenti presenti nelle varie distinte, che potrebbero quindi essere contabilizzate parzialmente. La situazione normale, comunque, prevede di filtrare con i riferimenti della distinta e contabilizzarla in blocco.

2. Inserisci in basso i dati di gestione dell'operazione: la **Causale di contabilità** da utilizzare per la registrazione, le **Date di registrazione e competenza**. Se espandi la sezione puoi scegliere un **criterio di raggruppamento** per la scrittura contabile. 

L'opzione di default, *raggruppamento banca*, consente di rilevare una registrazione per ogni sottoconto banca di uscita, che è la gestione migliore al fine di semplificare la riconciliazione dei movimenti bancari dalle stampe degli estratti conto. In alternativa è disponibile un *raggruppamento per sottoconto fornitore* e un'opzione di registrazione dettagliata pagamento per pagamento (*Non raggruppare*).

Il **sottoconto** di rilevazione degli **abbuoni attivi e passivi** inseriti in distinta è proposto sulla base del sottoconto *sopravvenienze attive* presente nei parametri di contabilità. 

**Data e numero document**o sono opzionali da inserire come riferimenti della testata della registrazione (potrebbe essere il numero/data distinta).

Il flag **chiusura partita** (proposto di default, da non togliere) gestisce correttamente il pagamento nello scadenziario.


Se la causale contabile prevede la gestione della data valuta banca e all'interno dell'anagrafica banche è stato definito un numero di giorni per il suo calcolo in relazione alla causale contabile utilizzata, il campo sarà gestito in automatico nella registrazione risultante.

3. Premi il bottone **Contabilizza** per avviare la procedura


### La scheda di ripristino 

consente di visualizzare la registrazione contabile attraverso un doppio click nella sezione relativa alle registrazioni, così come l'annullamento parziale/totale delle operazioni di pagamento selezionate. L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite).

**Pulsanti specifici**

**Ricerca** Ricerca la lista delle registrazioni contabili eseguite.

**Rollback Contabilizzazione** Il pulsante esegue il ripristino dell'intera contabilizzazione selezionata.

**Rollback Registrazioni contabili** Il pulsante esegue il ripristino delle singole registrazioni contabili selezionate.


<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

