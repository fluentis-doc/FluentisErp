---
title: Valorizzazione Interventi
sidebar_position: 1
---

Questa procedura permette di fatturare gli Interventi che si trovano in uno stato di **Controllato**. Nell’area di **Filtro** è possibile andare ad impostare una serie di filtri per poter ricercare in modo più mirato gli interventi presenti a sistema.

Una volta inseriti i filtri, basterà cliccare Ricerca nella ribbon bar per far comparire i risultati nella griglia sottostante. Per valorizzare un Intervento, basterà selezionarlo e cliccare Valorizza nella ribbon bar.
È possibile impostare dei **Parametri** per la valorizzazione nella relativa tab: è possibile scegliere l’Inserimento di fattura di interventi di anno, tipo e/o cambi diversi (ricordiamo che l’anagrafica deve avere il flag **Raggruppa per progetto** per permettere che interventi e fatture vengano separati in funzione del progetto); è possibile scegliere se mantenere i pagamenti degli interventi oppure ripristinare quelli di anagrafica; è possibile scegliere se raggruppare le scadenze; è possibile inserire dei riferimenti, ecc. 
Ricordiamo che nella tabella [Tipi intervento](/docs/configurations/tables/project-management/intervention-type/) è necessario indicare un Tipo fattura corrispondente affinchè la procedura possa andare a buon fine.

Le condizioni affinchè un intervento venga visualizzato sono le seguenti: 
    nel tipo intervento dev'essere indicato il Tipo Fattura
    lo stato dell'intervento dev'essere "controllato" oppure "parzialmente fatturato"
    le righe nell'invoice plan dell'intervento devono avere indicato il codice iva
    
Nella tab **Riepiloghi** è possibile consultare i risultati della valorizzazione, premendo **Ricerca** nella ribbon bar. Selezionano una riga di risultato, sarà possibile visualizzare l’**Intervento** e la **Fattura di vendita** generata. I pulsanti specifici della ribbon bar sono:

![](/img/neutral/common/preview.png) Anteprima esito: permette di visualizzare un’anteprima della fattura generata;

![](/img/neutral/common/execute-restore.png) Ripristino valorizzazione: esegue il Rollback della valorizzazione;

![](/img/neutral/common/rollback.png) Ripristino fattura: esegue il Rollback della singola fattura selezionata.
