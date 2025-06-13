---
title: Non conformità
sidebar_position: 2
---


La gestione si trova sul percorso **Qualità > Non conformità > Nuova non conformità** oppure è possibile eseguirla dalla **Ricerca non conformità**.   


:::important A cosa serve
Le Non conformità servono a identificare e documentare deviazioni dagli standard o dai requisiti prestabiliti, produttivi o di servizio.   
Questo processo aiuta a garantire che i prodotti, i servizi o i processi siano corretti e migliorati per mantenere la qualità e la sicurezza. Inoltre, facilita l'adozione di azioni correttive per prevenire futuri problemi.   
Le *Non conformità* devono:   
- determinare le cause della non conformità;   
- determinare se esistono o possono verificarsi non conformità simili;   
- valutare l’esigenza di azioni per eliminare le cause della non conformità.    

A standard sono disponibili le reportistiche di:   
> **Non conformità**: scheda della *Non conformità*;   
> **Non conformità 8D**: scheda compilabile per la gestione 8D della *Non conformità*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva non conformità

Premendo questo pulsante si memorizzano tutte le informazioni modificate della *Non conformità* visualizzata.   


### ![](/img/neutral/common/new.png) Nuova non conformità

Premendo questo pulsante si memorizzano tutte le informazioni modificate della *Non conformità* visualizzata e apre una nuova form creandone una nuova.   


### ![](/img/neutral/common/execute.png) Valorizzazione non conformità

Pulsante contestuale alla visualizzazione del tabulatore *Testata*.   
E' possibile creare una *Nota di addebito* nei confronti del *Fornitore* o *Cliente* a cui è assegnata la *Non conformità*.   
Il pulsante è abilitato solamente se la *Non conformità* è stata salvata, approvata, è di *Tipo non conformità a Cliente* o *a fornitore* ed esiste un *Valore da addebitare*.   
Viene visualizzata una richiesta/conferma dati per:
> **Cliente** o **Fornitore**: è il destinatario della nuova *Nota di addebito* (dato obbligatorio), viene proposto il *Cliente* o *Fornitore* della *Non conformità* di origine.   
> **Tipo fattura**: è il *Tipo documento* della nuova *Nota di addebito* (dato obbligatorio); viene proposto il *Tipo fattura* inserito nel *Tipo non conformità* della *Non conformità* di origine.   
> **Descrizione**: è la descrizione che verrà utilizzata per la riga di *Articolo spesa* della nuova *Nota di addebito* (dato obbligatorio); viene proposta la descrizione che viene parametrizzata nei [Parametri di Valorizzazione non conformità](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), sessione *Riferimenti non conformità*.   
> **I.V.A.**: è il *Tipo I.V.A.* che verrà utilizzato per la riga di *Articolo spesa* della nuova *Nota di addebito*.   
> Viene proposto il *Tipo I.V.A.* con le seguenti priorità:   
> 1. se esiste una *Dichiarazione di intento', viene considerato il *Tipo I.V.A.* presente nel documento;   
> 2. se non esiste una *Dichiarazione di intento', viene considerato il *Tipo I.V.A.* associato al *Fornitore* della *Non conformità*;   
> 3. se non esiste una *Dichiarazione di intento' e non è stato indicato un *Tipo I.V.A.* associato al *Fornitore* della *Non conformità*, viene considerato il *Tipo I.V.A.* associato al *Tipo non conformità*.   
>
> Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
> Al termine dell'elaborazione la *Nota di addebito* appena creata viene visualizzata.   


### ![](/img/neutral/common/corrective.png) Crea azione correttiva

Pulsante contestuale alla visualizzazione del tabulatore *Gestione difetti*.   
Il pulsante è abilitato solamente se la *Non conformità* è stata salvata, approvata ed è stata selezionata una riga *Difetto* valida.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


## Gestione dati

## Dati di testata del documento

Le informazioni gestite sono:   
> **Tipo non conformità**: è il *Tipo* del documento (dato obbligatorio).   
> All'inserimento di una nuova *Non conformità* viene proposto il *Tipo non conformità* indicato nei *Parametri Reclami e Non conformità*, sessione *Non conformità*.   
>
> **Anno/Numero/Data**: sono l'*Anno*, *Numero* e *Data* della *Non conformità* (dati obbligatori).   
> All'inserimento di una nuova *Non conformità*:   
> - la *Data* viene proposta pari alla data odierna;   
> - l'*Anno* e il *Numero* vengono proposti in base alla *Data* e alla *Numerazione* associata al *Tipo non conformità*.   
>
> **Cliente** o **Fornitore**: è il riferimento del *Cliente* o del *Fornitore* destinatario della *Non conformità*  (dato obbligatorio se il *Tipo non conformità* è *A fornitore* o *A cliente*).   
> *Cliente* o del *Fornitore* si abilitano sulla base del *Tipo non conformità* indicato.   
>
> **Funzione/Area/Reparto**: è il riferimento della *Funzione/Area/Reparto* (dato obbligatorio se il *Tipo non conformità* è *Interna*).   
> Si abilita sulla base del *Tipo non conformità* indicato.   


## Testata

Le informazioni gestite sono:   
> **Persona responsabile**: è il *Dipendente* responsabile della *Non conformità*.   
> All'inserimento di una nuova *Non conformità* viene proposta la *Persona responsabile* indicata nei *Parametri Reclami e Non conformità*, sessione *Non conformità*.   
>
> **Funzione responsabile**: è la *Funzione aziendale* responsabile della *Non conformità*.   
> All'inserimento di una nuova *Non conformità* viene proposta la *Funzione responsabile* indicata nei *Parametri Reclami e Non conformità*, sessione *Non conformità*.   
>
> **Referente esterno**: annotazioni libere sulla persona di riferimento del *Cliente*, *Fornitore* o *Funzione/Area/Reparto* destinatario della *Non conformità*.   
>
> **Sito produttivo**: è il riferimento del *Sito produttivo* di dove è stata riscontrata la *Non conformità*.   
>
> **Motivo**: annotazioni libere sul motivo dell'inserimento della *Non conformità* (dato obbligatorio).   
>
> **Proposta di soluzione**: annotazioni libere sull'argomento.   
> Solitamente utilizzato per indicare una proposta di soluzione al destinatario della della *Non conformità*.   
>
> **Notificata/In data**: Sono le indicazioni manuali se la *Non conformità* è stata notificata e in quale data al destinatario della stessa.   
>
> **Risposta Fornitore/Interna**: annotazioni libere sull'argomento.   
> Solitamente utilizzato per registrare un'eventuale risposta data dal destinatario della *Non conformità* alla notifica della stessa.   
>
> **Audit Trail**: expander di sola lettura dove sono visibili le seguenti informazioni:   
>> **Data creazione/Nome**: è la data e l'*Utente A.R.M.* che ha inserito la *Non conformità*.   
>> **Data ultima modifica/Nome**: è la data e l'*Utente A.R.M.* che ha apportato l'ultima modifica alla *Non conformità*.   
>
> **Approvata/In data**: expander dove è possibile inserire le informazioni di approvazione della *Non conformità:   
>> Solamente la **Persona responsabile** o la **Funzione responsabile** possono approvare la *Non conformità*.  
>> **Approvata**: indica che la *Non conformità* è *Approvata*.   
>> All'atto dell'approvazione vengono automaticamente proposte: *In data*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.*   
>> **In data**: è la data in cui la *Non conformità* è stata *Approvata*.   
>> All'atto dell'inserimento della data vengono automaticamente proposte: *Nome* e *Persona* proposte come *Utente A.R.M.* collegato, *Dipendente* collegato all'*Utente A.R.M.* e impostato il flag *Approvata*.   
>> **Nome**: è l'*Utente A.R.M.* che ha approvato la *Non conformità*. L'informazione è di sola lettura.   
>> **Persona**: è il *Dipendente* che ha approvato la *Non conformità*. L'informazione è di sola lettura.   
>> **Funzione**: è la *Funzione aziendale* che ha approvato la *Non conformità*.   
>> Abilitata solamente se la *Non conformità* è *Approvata*.   
>
> **Chiusa/In data**: expander dove è possibile inserire le informazioni di chiusura della *Non conformità*:   
>> Solamente la **Persona responsabile** o la **Funzione responsabile** possono chiudere la *Non conformità*.  
>> **Chiusa**: indica che la *Non conformità* è *Chiusa*.   
>> All'atto della chiusura vengono automaticamente proposte: *In data*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.*   
>> **In data**: è la data in cui la *Non conformità* è stata *Chiusa*.   
>> All'atto dell'inserimento della data vengono automaticamente proposte: *Nome* e *Persona* proposte come *Utente A.R.M.* collegato, *Dipendente* collegato all'*Utente A.R.M.* e impostato il flag *Chiusa*.   
>> **Nome**: è l'*Utente A.R.M.* che ha chiuso la *Non conformità*. L'informazione è di sola lettura.   
>> **Persona**: è il *Dipendente* che ha chiuso la *Non conformità*. L'informazione è di sola lettura.   
>> **Funzione**: è la *Funzione aziendale* che ha chiuso la *Non conformità*.   
>> Abilitata solamente se la *Non conformità* è *Chiusa*.   
>> **Notifica chiusura/In data**: Sono le indicazioni manuali se la chiusura della *Non conformità* è stata notificata e in quale data al destinatario della stessa.   


### Riferimento documento

Nel tabulatore sono contenute le indicazioni sui documenti che ha dato origine alla *Non conformità* in gestione. Le informazioni presenti sono:   
> **Fattura di acquisto**, **Bolla di consegna di acquisto**, **Ricevimento merce**, **Rientro da conto lavoro**, **Reclamo**, **Anno/Ordine/Lotto** e **Fase/Sottofase/Dichiarazione n.**:   
> sono tutti riferimenti in sola lettura al documento di origine che ha creato la *Non conformità*.   
> Nello standard, l'unico documento che può creare una *Non conformità* e che imposta automaticamente il riferimento e il *Reclamo*.


### Annotazioni

Nel tabulatore sono contenute annotazioni generali al documento e specifiche per area. Le informazioni presenti sono:   
> **Note commerciali**: annotazioni libere sull'argomento riservate al personale dell'area commerciale.   
> **Note tecniche**: annotazioni libere sull'argomento riservate al personale dell'area tecnica.   
> **Note amministrative**: annotazioni libere sull'argomento riservate al personale dell'area amministrativa.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) generali per la *Non conformità*.   


### Altri costi

Nel tabulatore è possibile inserire altri costi aggiuntivi a quelli derivanti dal Costo degli articoli contestati e da quello di Gestione del documento.   
> **Costi diretti**   
> Un elenco di costi attribuibili in modo diretto al costo degli articoli contestati, al servizio dato e al costo delle lavorazioni sostenute per la gestione della *Non conformità*. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo diretto (Direct cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Applicazione su ...**: informazione di sola lettura che riporta su quale componente di costo viene applicato il *Valore* (se espresso in percentuale); le possibili attribuzioni sono su:   
>>> *Costo materiali*: somma della sola componente dei costi articolo degli *Oggetti difettosi* e dei *Materiali utilizzati*;   
>>> *Costo macchina*, *Costo manodopera* e *Costo lavorazioni*: somma della sola componente dei costi di lavorazione degli *Oggetti difettosi*;   
>>> *Costo industriale*: somma del *Totale materiale rilavorato* e *Totale materiale non rilavorato*.   
>>>   
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, alla componente di costo specificata in *Applicazione su ...* .   
>> **Nota**: annotazioni libere.   
>>   
> **Costi generali**   
> Un elenco di costi generali, non direttamente imputabili alla *Non conformità* e che supportano l'intero processo aziendale. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo generale (General cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, alla somma del *Totale materiale rilavorato* e *Totale materiale non rilavorato*.   
>> **Nota**: annotazioni libere.   
>>   
> **Altri costi**   
> Un elenco di altri costi. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Altro costo (Other cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Unità di misura**: è l'*Unità di misura* con la quale si desidera esprimere l'informazione della *Quantità*.   
>> **Quantità**: è la *Quantità* della *Voce di costo*.   
>> **Costo unitario**: è il *Costo unitario* della *Voce di costo*.   
>> **Costo totale**: informazione di sola lettura che riporta il prodotto tra *Quantità* e *Costo unitario*.   
>> **Nota**: annotazioni libere.   


### Valori

Nel tabulatore è possibile inserire informazioni relative a documenti di addebito e accredito della *Non conformità*, i costi sostenuti, quelli da addebitare e i costi riconosciuti dal *Fornitore/Cliente*. Le informazioni presenti sono:   
> **Divisa**, **Diretto** e **Data valuta**: è la *Divisa* del *Fornitore* o del *Cliente* con la quale vengono specificati tutti i valori del documento, il relativo coefficiente di cambio alla *Divisa* della *Società* e la *Data valuta*.   
> **Valorizzata** e **Riferimento documento di debito**: informazioni di sola lettura che riportano se la *Non conformità* è stata valorizzata e il riferimento alla *Nota di debito* generata.   
> **Riferimento documento accredito**: è il riferimento alla *Nota di accredito* ricevuta dal *Fornitore* o del *Cliente*.   
> **Note documento di accredito**: annotazioni libere sull'argomento.   
>   
> **Totale materiale non rilavorato**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; viene proposta la sommatoria della sola componente dei costi articolo degli *Oggetti difettosi* non rilavorati e dei *Materiali utilizzati*.   
>   
> **Totale materiale rilavorato**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; viene proposta la sommatoria della sola componente dei costi lavorazione degli *Oggetti difettosi* rilavorati.   
>   
> **Totale costi diretti**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi diretti* presenti nel tabulatore *Altri costi*.   
>   
> **Totale costi generali**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi generali* presenti nel tabulatore *Altri costi*.   
>   
> **Totale altri costi**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco degli *Altri costi* presenti nel tabulatore *Altri costi*.   
>   
> **Costo di gestione**: è il *Costo di gestione* ripreso dal *Costo di gestione* presente nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità*; il valore può essere variato.   
>   
> **Totale non conformità**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; in questo caso il totale viene ricalcolato come somma di: *Totale materiale non rilavorato*, *Totale materiale rilavorato*, *Totale costi diretti*, *Totale costi generali*, *Totale altri costi* e *Costo di gestione*; se non è stato richiesto il *Ricalcolo automatico totali* il valore deve essere inserito manualmente.   
>   
> **Valore da addebitare**: è il *Valore da addebitare* al *Cliente* o *Fornitore*; se nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali* il valore viene proposto pari al *Totale non conformità* e successivamente può essere modificato.    
>   
> **Valore riconosciuto**: è il valore che ci viene riconosciuto dal *Cliente* o *Fornitore*; il valore può essere inserito manualmente.   


## Gestione difetti

E' l'elenco delle difettosità riscontrate da notificare al destinatario del documento e si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione delle difettosità; viene proposto un progressivo con la possibilità di essere variato.   
>  
> **Difetto riscontrato**
>> **Codice**: è il codice del *Difetto riscontrato*; è possibile inserire solamente i *Difetti* attivi e previsti dalla tipologia di *Non conformità* del documento.   
>> **Descrizione**: informazione di sola lettura è la descrizione del *Difetto riscontrato*.   
>> **Note**: annotazioni libere sul *Difetto riscontrato*.   
>  
> **Causa presunta**
>> **Codice**: è il codice della *Causa presunta* che ha generato la difettosità; è possibile inserire solamente le *Cause*, presunte, attive e previste dalla tipologia di *Non conformità* del documento; la *Causa presunta*, successivamente ad una analisi sugli *Oggetti difettosi*, può venire confermata o meno nella *Causa effettiva*.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Causa presunta*.   
>> **Note**: annotazioni libere sulla *Causa presunta*.   
>  
> **Fase di rilevamento**
>> **Codice**: è il codice della *Fase di rilevamento* del processo dove si è riscontrata la difettosità; è possibile inserire solamente le *Fasi di rilevamento* attive.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Fase di rilevamento*.   
>> **Note**: annotazioni libere sulla *Fase di rilevamento*.   
>  
> **Gravità**
>> **Codice**: è il codice della *Gravità* attribuita alla difettosità; è possibile inserire solamente le *Gravità* attive.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Gravità*. 
>  
> **Chiusura difetto**   
> Solamente la **Persona responsabile** o la **Funzione responsabile** possono chiudere la gestione del *Difetto* specifico.   
> La chiusura di tutti i *Difetti* non comporta automaticamente la chiusura della *Non conformità*.   
>> **Chiuso**: indica che la gestione del *Difetto* specifico è stata completata; deve essere indicato manualmente dall'operatore.   
>> All'atto della chiusura vengono automaticamente proposte: *Data chiusura*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.* (*Nome* e *Persona* sono informazioni presenti nell'expander *Dati chiusura difetto* presente nel tabulatore *Dati difetto*).   
>> **Data chiusura**: è la data in cui la gestione del *Difetto* specifico è stata completata.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>  
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga *Difetto* e generata tramite il pulsante **Crea azione correttiva**.    
>   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   


### Dati difetto

Sono le informazioni aggiuntive alla riga *Difetto* selezionato. Le informazioni gestite sono:   
> **Causa effettiva**: è la causa effettiva che ha generato la difettosità; è possibile inserire solamente le *Cause*, effettive, attive e previste dalla tipologia di *Non conformità* del documento.   
> **Note causa effettiva**: annotazioni libere sulla *Causa effettiva*.   
> **Soluzione proposta**: è il suggerimento di soluzione tecnica/commerciale/amministrativa da adottare; è possibile inserire solamente le *Soluzioni* attive.   
> **Note soluzione proposta**: annotazioni libere sulla *Soluzione proposta*.   
> **Decisione intrapresa**: è la decisione tecnica/commerciale/amministrativa effettuata per la risoluzione del difetto; è possibile inserire solamente le *Decisioni* attive.   
> **Note decisione intrapresa**: annotazioni libere sulla *Decisione intrapresa*.   
> **Risposta Fornitore/Interna**: annotazioni libere sull'argomento. Solitamente utilizzato per registrare un'eventuale risposta data dal destinatario della *Non conformità* relativa al *Difetto*.   
> **Dati chiusura difetto**: expander dove è possibile inserire le informazioni di chiusura del *Difetto*:   
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
>> Se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Raggruppamento dati U.D.C.*, le righe con *Articoli* uguali verranno riportate in un'unica riga con le quantità sommate.   
>> **Numero seriale**:  è il *Numero seriale* dell'*Articolo* reclamato.   
>> **Unità di carico da rendere**: è l'*Unità di carico* che contiene l'Articolo* reclamato da rendere.   
>  
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo* reclamato.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata.   
>> **Resa**: è la quantità di *Articolo* resa.   
>  
> **Quantità alternativa**   
>> Le colonne di questo gruppo sono visualizzate solamente se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stata richiesta la *Proposta U.M. alternativa*.   
>> **Unità di misura**: è l'*Unità di misura alternativa* dell'*Articolo* reclamato.   
>> **Unità di misura prezzo**: indica se il *Costo unitario del materiale* è riferito all'*Unità di misura alternativa*.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta espressa nell'*Unità di misura alternativa*.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare espressa nell'*Unità di misura alternativa*.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata espressa nell'*Unità di misura alternativa*.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata espressa nell'*Unità di misura alternativa*.   
>> **Resa**: è la quantità di *Articolo* resa espressa nell'*Unità di misura alternativa*.   
>
> **Costo unitario**   
>> **Materiale**: è il *Costo unitario* dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Lavorazione**: è il *Costo unitario* della *Lavorazione*; viene proposto pari alla tariffa associata ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*; il valore può essere variato.   
>  
> **Ore**   
>> **Lavorate**: sono le ore e i minuti lavorati per la riparazione dell'*Oggetto* non conforme; il valore deve essere inserito manualmente.   

#### Dati oggetto

Sono le informazioni aggiuntive alla riga dell'*Oggetto reclamato* selezionato. Le informazioni gestite sono:   
> **Progetto**: è il riferimento al *Progetto* del *Difetto* specifico*.   
> **Note articolo**: annotazioni libere sull'*Articolo* del *Difetto* specifico*.   
> **Note lotto**: annotazioni libere sul *Lotto* del *Difetto* specifico*.   
> **Note unità di carico**: annotazioni libere sulla *Unità di carico* riga del *Difetto* specifico*.   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   
> **Centro di lavoro**: è il *Centro di lavoro* con il quale vengono effettuate le lavorazioni di riparazione dell'*Oggetto* non conforme.   
> La scelta del *Centro di lavoro* proporrà, nel *Costo unitario lavorazione*, la tariffa da applicare al tempo dedicato alla lavorazione.   
> La tariffa proposta è la somma delle tariffe dei *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale materiale non rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità non rilavorata" e il *Costo unitario materiale* dell'*Oggetto difettoso* selezionato.   
> **Totale materiale rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità rilavorata" e il *Costo unitario lavorazione* sommato al prodotto tra le *Ore lavorate* e la somme delle tariffe associate ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale difetto**: informazione di sola lettura, è la somma di *Totale materiale non rilavorato* e *Totale materiale rilavorato*.   


#### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Oggetto reclamato* selezionato.   


#### Documenti allegati   

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
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono chiudere il coinvolgimento.   
>> All'atto della chiusura viene automaticamente proposta la *Data chiusura*, proposta alla data odierna e può essere variata.   
>> **Data chiusura**: è la data in cui il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono inserire o variare questa data.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>
> **Nota**: annotazioni libere.   


### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Difetto* selezionato.   


### Documenti allegati   

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Difetto* selezionato.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   