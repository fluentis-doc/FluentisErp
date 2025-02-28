---
title: Ricerca Schede tecniche
sidebar_position: 1
---

Il filtro si trova sul percorso **Qualità > Controlli articolo > Schede tecniche**.   

Le **Schede tecniche** catalogano tutte quelle informazioni che descrivono le caratteristiche dei prodotti associati come idonee ad un contratto, ad una specifica funzionale o ad un determinato impiego, possono essere personalizzabili per *Cliente*.   
Vengono gestite le *revisioni* e la rintracciabilità tra *Schede tecniche* diverse*.   
A standard sono disponibili le reportistiche di: *Scheda tecnica* (per uso interno) e *Scheda Prodotto* (ad uso commerciale).   


Il filtro dati consente di inserire nuove *Schede tecniche* o di ricercare quelle già esistenti per visualizzarle, modificarle oppure cancellarle.   

### ![](/img/neutral/common/search.png) Ricerca Schede tecniche

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.   

### ![](/img/neutral/common/new.png) Inserimento Schede tecniche

Per poter inserire nuove *Schede tecniche* è necessario premere il pulsante **Nuovo**.   

### ![](/img/neutral/common/edit.png) Modifica o ![](/img/neutral/common/view.png) Visualizzazione Schede tecniche

Per aprire la gestione, della griglia di risultato, è necessario fare doppio click sulla riga di nostro interesse oppure, selezionando una o più righe, premere i pulsanti **Modifica** o **Visualizza**.   

*Pulsanti specifici*:   

### ![](/img/neutral/common/duplicate.png) Duplica Scheda

Per poter duplicare una *Scheda tecnica* esistente in una nuova *Scheda tecnica* è necessario cliccare nella griglia sulla *Scheda tecnica* da cui si desidera duplicare e premere il pulsante **Duplica scheda**. Si può duplicare una sola *Scheda tecnica* alla volta. Viene visualizzata una richiesta di:   
> **Tipo scheda**: è il *Tipo scheda* della nuova *Scheda tecnica* (dato obbligatorio).   
> **Del cliente**: è il *Cliente* della nuova *Scheda tecnica*, viene proposto il conto *Cliente* della *Scheda tecnica* di origine.   
> **Nuovo codice**: è il *Codice* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto in base a quanto previsto dal *Metodo di Codifica* associata al *Tipo scheda tecnica*.   
> **Duplica con rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, nella *Scheda tecnica* di origine (tabulatore *Schede correlate* della *Scheda tecnica* di origine) e nella *Scheda tecnica* di destinazione (nell'expander *Origine dati scheda* presente nei *dati di testata*).   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
La nuova *Scheda tecnica* creata avrà la *Revisione* pari a *Zero*.   
Al termine dell'elaborazione la nuova *Scheda tecnica* viene visualizzata.   

### ![](/img/neutral/common/execute.png) Crea nuova revisione

Per poter creare una nuova *Revisione* ad una *Scheda tecnica* esistente è necessario cliccare nella griglia sulla *Scheda tecnica* da cui si desidera creare una nuova *Revisione* e premere il pulsante **Crea nuova revisione**. Si può creare una nuova *Revisione* per una sola *Scheda tecnica* alla volta.   
Viene creata una nuova *Scheda tecnica*, con tutte le informazioni della *Scheda tecnica* di origine ma con indice di *Revisione* incrementato e la *Data di inizio validità* pari alla data odierna.   
La *Scheda tecnica* di origine finisce la sua validità, la *Data fine validità* viene impostata pari alla data odierna.   
Al termine dell'elaborazione la nuova *Revisione* della *Scheda tecnica* viene visualizzata.   

### ![](/img/neutral/common/item-web.png) Crea Piano di controllo

Dalla *Scheda tecnica* è possibile creare un *Piano di controllo*; per fare ciò è necessario cliccare nella griglia sulla *Scheda tecnica* da cui si desidera duplicare e premere il pulsante **Crea nuovo Piano di controllo**. Si può creare un nuovo *Piano di controllo* per una sola *Scheda tecnica* alla volta.   
Viene creato un nuovo *Piano di controllo*, vengono copiate solamente le *Proprietà* di origine con l'indicatore *Prove da rilevare*, tutte le altre informazioni della *Scheda tecnica* ma con indice di *Revisione* pari a *zero* e con *Data di inizio validità* pari alla data odierna. Verrà visualizzata una richiesta di:   
> **Tipo piano di controllo**: è il *Tipo piano di controllo* del nuovo *Piano di controllo* (dato obbligatorio).   
> **Numero**: è il *Numero* progressivo del nuovo *Piano di controllo* (dato obbligatorio), viene proposto in base a quanto previsto dalla *Numerazione* associata al *Tipo piano di controllo* e alla data odierna.   
> **Crea mantenendo la rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, della *Scheda tecnica* di origine, nel *Piano di controllo* di destinazione (nell'expander *Origine Piano di controllo* presente nei *dati di testata*).   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Al termine dell'elaborazione il nuovo *Piano di controllo* viene visualizzato.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).