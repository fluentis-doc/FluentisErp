---
title: Ricerca Strumenti di misura
sidebar_position: 1
---

Il filtro si trova sul percorso **Qualità > Taratura strumenti > Strumenti di misura**.   

Il filtro dati consente di inserire nuovi *Strumenti di misura* o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.   

### ![](/img/neutral/common/search.png) Ricerca Strumenti di misura

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.   

### ![](/img/neutral/common/new.png) Inserimento Strumenti di misura

Per poter inserire nuovi *Strumenti di misura* è necessario premere il pulsante **Nuovo**.   

### ![](/img/neutral/common/edit.png) Modifica o ![](/img/neutral/common/view.png) Visualizzazione Strumenti di misura

Per aprire la gestione, della griglia di risultato, è necessario fare doppio click sulla riga di nostro interesse oppure, selezionando una o più righe, premere i pulsanti **Modifica** o **Visualizza**.   

*Pulsanti specifici*: 

### Pianifica nuove tarature

Il pulsante è abilitato solamente se, dalla griglia di risultato, si seleziona un solo *Strumento di misura* e lo *Strumento* deve essere:   
> *Attivo*;   
> *Soggetto a taratura*;   
> a taratura periodica e di tipo temporale (expander *Proprietà di taratura* con *Periodo di taratura* diverso da *zero* e *Unità di misura* di tipo *Giorno* o *Mese*).   

Per poter pianificare nuove *Tarature strumento pianificate* da uno *Strumento di misura* è necessario cliccare nella griglia sullo *Strumento di misura* da cui si desidera pianificare le *Tarature* e premere il pulsante **Pianifica nuove tarature**. Si può pianificare un solo *Strumento di misura* alla volta.   
Verrà visualizzata una richiesta di:   
> **Pianificare fino al**: è la data di fine periodo di pianificazione (dato obbligatorio), viene proposto un anno di pianificazione a partire dalla data odierna.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di pianifica o meno.   

*Metodo utilizzato per la pianificazione*:   
Come prima cosa si eliminano tutte le precedenti *Tarature* pianificate e non ancora attuate per lo *Strumento*.  
Successivamente, a partire dalla data di ultima *Taratura*, si creano tante *Tarature* quante sono possibili creare nell'intervallo richiesto a partire dalla data odierna e cadenziate per il *Periodo di taratura*. Se la data proposta ricade in una giornate non lavorativa specificata nel *Calendario di fabbrica* la data proposta verrà posticipata alla prima data lavorativa utile.   
Se per lo strumento non è mai stata pianificata o effettuata una *Taratura* o l'ultima data di *Taratura* risale a un periodo antecedente alla data odierna detratta dal
*Periodo di taratura*, la prima *Taratura* sarà proposta in data odierna e successivamente le altre.

### Nuova taratura

Il pulsante è abilitato solamente se, dalla griglia di risultato, si seleziona un solo *Strumento di misura* e lo *Strumento* deve essere *Attivo*.   
Per poter creare una nuova *Taratura strumento* da uno *Strumento di misura* è necessario cliccare nella griglia sullo *Strumento di misura* da cui si desidera creare le *Taratura* e premere il pulsante **Nuova taratura**. Si può creare una *Taratura strumento* da un solo *Strumento di misura* alla volta.   
Al termine dell'elaborazione la nuova *Taratura strumento pianificata* viene visualizzata.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).