---
title: Ricerca Piani di controllo
sidebar_position: 1
---

Il filtro si trova sul percorso **Qualità > Controlli articolo > Piani di controllo**.   


Nei **Piani di controllo** si definiscono sequenze di *Prove pianificate* da effettuare in: accettazione materiali, durante il flusso produttivo o durante il collaudo finale per verificare l'idoneità dei materiali ricevuti o degli articoli prodotti.   
Si posso definire dei *Piani di controllo* per singolo articolo o per gruppi o da associare a *Fasi* dei *Cicli di lavorazione* e differenziarli per *Cliente* e *Fornitore*.   
E' prevista la gestione delle *Revisioni* del *Piano di controllo*.


Il filtro dati consente di inserire nuovi *Piani di controllo* o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.   


### ![](/img/neutral/common/search.png) Ricerca Piani di controllo

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.   


### ![](/img/neutral/common/new.png) Inserimento Piani di controllo

Per poter inserire nuovi *Piani di controllo* è necessario premere il pulsante **Nuovo**.   


### ![](/img/neutral/common/edit.png) Modifica o ![](/img/neutral/common/view.png) Visualizzazione Piani di controllo

Per aprire la gestione, della griglia di risultato, è necessario fare doppio click sulla riga di nostro interesse oppure, selezionando una o più righe, premere i pulsanti **Modifica** o **Visualizza**.   


*Pulsanti specifici*: 


### ![](/img/neutral/common/duplicate.png) Duplica Piano di controllo

Per poter duplicare un *Piano di controllo* esistente in un nuovo *Piano di controllo* è necessario cliccare nella griglia sul *Piano di controllo* da cui si desidera duplicare e premere il pulsante **Duplica Piano di controllo**. Si può duplicare un solo *Piano di controllo* alla volta. Verrà visualizzata una richiesta di:   
> **Tipo piano di controllo**: è il *Tipo piano di controllo* del nuovo *Piano di controllo* (dato obbligatorio), viene proposto il *Tipo piano di controllo* del *Piano di controllo* di origine.   
> **Numero**: è il *Numero* progressivo del nuovo *Piano di controllo* (dato obbligatorio), viene proposto in base a quanto previsto dalla *Numerazione* associata al *Tipo piano di controllo* e alla data odierna.   
> **Duplica con rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, del *Piano di controllo* di destinazione, nel *Piano di controllo* di origine ed in particolare nel tabulatore *Piani di controllo correlati*.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
Al termine dell'elaborazione il nuovo *Piano di controllo* viene visualizzato.


### ![](/img/neutral/common/execute.png) Crea nuova revisione

Per poter creare una nuova *Revisione* ad un *Piano di controllo* esistente è necessario cliccare nella griglia sul *Piano di controllo* da cui si desidera creare una nuova *Revisione* e premere il pulsante **Crea nuova edizione**. Si può creare una nuova *Revisione* per un solo *Piano di controllo* alla volta.   
Viene creato nuovo *Piano di controllo*, con tutte le informazioni del *Piano di controllo* di origine ma con indice di *Revisione* incrementato e la *Data di inizio validità* pari alla data odierna.
Il *Piano di controllo* di origine finisce la sua validità impostando automaticamente la *Data fine validità* pari alla data odierna.   
Al termine dell'elaborazione la nuova *Revisione* del *Piano di controllo* viene visualizzata.


### Crea nuova Scheda tecnica

Dal *Piano di controllo* è possibile creare una *Scheda tecnica*; per fare ciò è necessario cliccare nella griglia sul *Piano di controllo* da cui si desidera duplicare e premere il pulsante **Crea nuova Scheda tecnica**. Si può creare una nuova *Scheda tecnica* per un solo *Piano di controllo* alla volta.   
Viene creata nuova *Scheda tecnica*, con tutte le informazioni del *Piano di controllo* di origine ma con indice di *Revisione* pari a *zero* e con *Data di inizio validità* pari alla data odierna. Verrà visualizzata una richiesta di:   
> **Tipo scheda**: è il *Tipo scheda* della nuova *Scheda tecnica* (dato obbligatorio).   
> **Del cliente**: è il *Cliente* della nuova *Scheda tecnica*, viene proposto il conto *Cliente* del *Piano di controllo* di origine (solo se è di *Tipo conto cliente*).   
> **Nuovo codice**: è il *Codice* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto in base a quanto previsto dal *Metodo di Codifica* associata al *Tipo scheda tecnica*.   
> **Rev.**: è l'indice di *Revisione* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto a *zero*.   
> **Crea mantenendo la rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, nella *Scheda tecnica* di destinazione, nel *Piano di controllo* di origine ed in particolare nel tabulatore *Schede correlate*.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Al termine dell'elaborazione la nuova *Scheda tecnica* viene visualizzata.   


### Richieste Piani di controllo
Da questo pulsante è possibile eseguire la gestione di *Richieste Piani di controllo*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).