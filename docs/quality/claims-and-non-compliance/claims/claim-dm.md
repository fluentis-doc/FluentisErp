---
title: Reclami - Gestione difetti
sidebar_position: 4
---


## Gestione difetti

E' l'elenco delle difettosità riscontrate dal mittente del documento e si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione delle difettosità; viene proposto un progressivo con la possibilità di essere variato.   
>  
> **Difetto riscontrato**
>> **Codice**: è il codice del *Difetto riscontrato*; è possibile inserire solamente i *Difetti* attivi e previsti dalla tipologia del *Reclamo* del documento.   
>> **Descrizione**: informazione di sola lettura è la descrizione del *Difetto riscontrato*.   
>> **Note**: annotazioni libere sul *Difetto riscontrato*.   
>  
> **Causa presunta**
>> **Codice**: è il codice della *Causa presunta* che ha generato la difettosità; è possibile inserire solamente le *Cause*, presunte, attive e previste dalla tipologia del *Reclamo* del documento; la *Causa presunta*, successivamente ad una analisi sugli *Oggetti difettosi*, può venire confermata o meno nella *Causa effettiva*.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Causa presunta*.   
>> **Note**: annotazioni libere sulla *Causa presunta*.   
>  
> **Fase di rilevamento**
>> **Codice**: è il codice della *Fase di rilevamento* del processo dove si è riscontrata la difettosità; è possibile inserire solamente le *Fasi di rilevamento* attive.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Fase di rilevamento*.   
>> **Note**: annotazioni libere sulla *Fase di rilevamento*.   
>  
> **Quantità**
> Informazioni sintetiche da utilizzarsi esclusivamente se non si desidera dettagliare le *Quantità* nella sessione degli *Oggetti reclamati*. Queste *Quantità* non vengono considerate in alcun calcolo.   
>> **Venduta**: è la quantità di *Articoli* venduta al mittente del *Reclamo*.   
>> **Contestata**: è la quantità di *Articoli* contestata dal mittente del *Reclamo*.   
>> **Resa**: è la quantità di *Articoli* resa dal mittente del *Reclamo*.   
>   
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga del '*Difetto* e generata tramite il pulsante **Crea azione correttiva**.   
>   
> **In garanzia**: indicazione manuale se il *Difetto riscontrato* è coperto da garanzia. Questa informazione non viene considerata in alcun calcolo.   
> **Chiuso**: indica che la gestione del *Difetto* è stata completata; deve essere indicato manualmente dall'operatore.   
> All'atto della chiusura vengono automaticamente proposte: *Data chiusura*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.* (*Data chiusura*, *Nome* e *Persona* sono informazioni presenti nel tabulatore *Dati difetto*).   
> La chiusura di tutti i *Difetti* non comporta automaticamente la chiusura del *Reclamo*.   
> **Note**: annotazioni libere.   


### Dati difetto

Sono le informazioni aggiuntive alla riga *Difetto* selezionato. Le informazioni gestite sono:   
> **Gravità** è la *Gravità* attribuita alla difettosità; è possibile inserire solamente le *Gravità* attive.   
> **Causa effettiva**: è la causa effettiva che ha generato la difettosità; è possibile inserire solamente le *Cause*, effettive, attive e previste dalla tipologia del *Reclamo* del documento.   
> **Note causa effettiva**: annotazioni libere sulla *Causa effettiva*.   
> **Soluzione proposta**: è il suggerimento di soluzione tecnica/commerciale/amministrativa da adottare; è possibile inserire solamente le *Soluzioni* attive.   
> **Note soluzione proposta**: annotazioni libere sulla *Soluzione proposta*.   
> **Decisione intrapresa**: è la decisione tecnica/commerciale/amministrativa effettuata per la risoluzione del difetto; è possibile inserire solamente le *Decisioni* attive.   
> **Note decisione intrapresa**: annotazioni libere sulla *Decisione intrapresa*.   
> **Risoluzione commerciale**: è la decisione commerciale/amministrativa effettuata per la risoluzione del difetto; è possibile inserire solamente le *Decisioni* attive.   
> **Note risoluzione commerciale**: annotazioni libere sulla *Risoluzione commerciale*.   
> **Data chiusura**: è la data in cui la gestione del *Difetto* specifico è stata completata.   
> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso* presente nella riga del *Difetto* selezionato.   
> **Nome**: è l'*Utente A.R.M.* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Persona**: è il *Dipendente* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Funzione**: è la *Funzione aziendale* che ha chiuso il *Difetto*.   


### Oggetti reclamati

E' l'elenco degli *Oggetti reclamati* associabili al *Difetto riscontrato* selezionato e si compone delle seguenti informazioni:   
> **Oggetto**   
>> **Bar code**: può essere utilizzato per aggiungere o sostituire l'Articolo, Lotto, Numero seriale e Unità di carico.   
>> Per tutte le informazioni su come codificare i barcode consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Classe**: è la *Classe articolo* reclamato.   
>> **Codice articolo**: è il codice dell'*Articolo* reclamato.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* reclamato.   
>> **Variante**: è la codice variante dell'*Articolo* reclamato.   
>> **Lotto**: è il codice del *Lotto* interno dell'*Articolo* reclamato.   
>> **Unità di carico**: è l'*Unità di carico* di origine che conteneva l'Articolo* reclamato.   
>> L'inserimento di una *Unità di carico* comporta l'automatico inserimento di tutte le righe di dettaglio *Articolo* presenti in essa.   
>> Se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Reclami* è stato richiesto il *Raggruppamento dati U.D.C.*, le righe con *Articoli* uguali verranno riportate in un'unica riga con le quantità sommate.   
>> **Numero seriale**:  è il *Numero seriale* dell'*Articolo* reclamato.   
>  
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* principale dell'*Articolo* reclamato.   
>> **Venduta**: è la quantità di *Articolo* venduta al mittente del *Reclamo*; il valore deve essere inserito manualmente.   
>> **Contestata**: è la quantità di *Articolo* contestata dal mittente del *Reclamo*; il valore deve essere inserito manualmente.   
>> **Resa**: è la quantità di *Articolo* resa dal mittente del *Reclamo*; il valore deve essere inserito manualmente.   
>> **Rilavorata**: è la quantità di *Articolo* rilavorata dal mittente del *Reclamo*; il valore deve essere inserito manualmente.   
>> **Accettata**: è la quantità di *Articolo* accettata; il valore deve essere inserito manualmente.   
>
> **Valore**   
>> **Reclamato**: è il valore reclamato dal mittente del *Reclamo*; il valore deve essere inserito manualmente.   
>> **Accettato**: è il valore accettato; il valore deve essere inserito manualmente.   
>
> **Dati reso**   
>> **Autorizzazione al rientro**: indica che si autorizza il rientro dell'*Articolo* reso per la *Quantità accettata*.   
>> **Data rientro prevista**: è la data prevista di rientro dell'*Articolo* reso.   
>> **Lotto**: è il *lotto* di rientro dell'*Articolo* reso.   
>> **Numero seriale**:  è il *Numero seriale* di rientro dell'*Articolo* reso.   
>> **Unità di carico**: è l'*Unità di carico* di rientro dell'*Articolo* reso.   


#### Dati oggetto

Sono le informazioni aggiuntive alla riga dell'*Oggetto reclamato* selezionato. Le informazioni gestite sono:   
> **Progetto**: è il riferimento al *Progetto* del *Difetto* specifico*.   
> **Note articolo**: annotazioni libere sull'*Articolo* del *Difetto* specifico*.   
> **Note lotto**: annotazioni libere sul *Lotto* del *Difetto* specifico*.   
> **Note unità di carico**: annotazioni libere sulla *Unità di carico* riga del *Difetto* specifico*.   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   

> **D.D.T. cliente**: è il riferimento alla *Bolla di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia venduto il bene o il servizio contestato.   
> **Fattura di vendita**: è il riferimento alla *Fattura di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia fatturato il bene o il servizio contestato.   
> **Ricevimento merce**: è il riferimento al *Ricevimento merce* (*Tipo*, *Anno* e *Numero*), con il quale il mittente rende il bene contestato.   
> **D.D.T. di acquisto**: è il riferimento alla *Bolla di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia venduto il bene o il servizio contestato.   


#### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Oggetto reclamato* selezionato.   


### Documenti allegati

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Oggetto reclamato* selezionato.   


### Materiali utilizzati

In questo elenco è possibile indicare i materiali che sono stati utilizzati per porre rimedio al *Difetto* selezionato.   
L'elenco si compone delle seguenti informazioni:   
>   
> **Articolo**   
>> **Classe**: è la *Classe articolo*.   
>> **Codice**: è il codice dell'*Articolo*.   
>> **Descrizione**: è la descrizione dell'*Articolo*.   
>> **Variante**: è la codice variante dell'*Articolo*.   
>> **Lotto**: è il codice del lotto interno utilizzato.   
>> **Numero seriale**:  è il numero seriale utilizzato.   
>   
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo*.   
>> **Quantità consumata**: è la quantità di *Articolo* utilizzata per porre rimedio al *Difetto* selezionato.   
>   
> **Valore**   
>> **Costo unitario**: è il costo unitario dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Costo totale**:  viene proposto come rapporto tra *Quantità consumata* e *Costo unitario*; il costo può essere variato.   
>
> **Note**: annotazioni libere.   


### Soggetti coinvolti

Nel tabulatore sono contenute le indicazioni sulle *Funzioni aziendali* e/o *Dipendenti* che prenderanno parte alla gestione del *Difetto" selezionato.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione dei "Soggetti coinvolti*; viene proposto un progressivo con la possibilità di essere variato.   
>
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* coinvolta.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* coinvolta.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* coinvolto.   
>> **Descrizione**: è il cognome e nome del *Dipendente* coinvolto.   
>   
> **Gestione coinvolgimento**   
>> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto coinvolto, non sia *Funziona aziendale* o *Dipendente*.   
>> **Motivo del coinvolgimento**: annotazioni libere sull'argomento   
>> **Data scadenza**: è la data entro la quale il soggetto coinvolto deve completare le attività inerenti al motivo del suo coinvolgimento.   
>> **Risposta**: annotazioni libere sull'argomento.   
>> **Chiuso**: indica che il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* del *Reclamo* o la *Funzione aziendale* o il *Dipendente* coinvolto possono chiudere il coinvolgimento.   
>> All'atto della chiusura viene automaticamente proposta la *Data chiusura*, proposta alla data odierna e può essere variata.   
>> **Data chiusura**: è la data in cui il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* del *Reclamo* o la *Funzione aziendale* o il *Dipendente* coinvolto possono inserire o variare questa data.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>
> **Nota**: annotazioni libere.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Difetto* selezionato.   


### Documenti allegati

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Difetto* selezionato.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   