---
title: Reclami
sidebar_position: 2
---


La gestione si trova sul percorso **Qualità > Reclami > Nuovo reclamo** oppure è possibile eseguirla dalla **Ricerca reclami**.   


:::important A cosa serve
I Reclami servono a registrare le insoddisfazione riguardo a un servizio o prodotto, permettendo all'azienda di riconoscere e correggere eventuali problemi. Sono uno strumento per migliorare la qualità e mantenere una buona relazione con i clienti e devono:      
- determinare le cause della non conformità;   
- determinare se esistono o possono verificarsi anomalie simili;   
- valutare l’esigenza di azioni per eliminare le cause che .    hanno generato le anomalie riscontrate

A standard sono disponibili le reportistiche di:   
> **Reclamo**: scheda del *Reclamo*;   
> **Reclamo 8D**: scheda, in formato 8D, del *Reclamo*;   
> **Autorizzazione al rientro**: scheda del *Reclamo* utilizzato per l'autorizzazione al rientro dei prodotti resi dal *Cliente*;   
> **Notifica di recesso**: scheda del *Reclamo* utilizzato per la notifica del recesso del *Reclamo* al *Cliente*;   
> **Elenco reclami per cliente**: elenco dei reclami selezionati dalla *Ricerca reclami* raggruppati per *Cliente*;   
> **Elenco reclami per tipo**: elenco dei reclami selezionati dalla *Ricerca reclami* raggruppati per *Tipo reclamo*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Reclamo* visualizzato.   


### ![](/img/neutral/common/execute.png) Valorizzazione reclamo

Pulsante contestuale alla visualizzazione del tabulatore *Testata*.   
E' possibile creare una *Nota di accredito* verso il mittente del *Reclamo*.   
Il pulsante è abilitato solamente se il *Reclamo* è stato salvato, approvato ed esiste un *Valore da accreditare*.   
Viene visualizzata una richiesta/conferma dati per:   
> **Tipo fattura**: è il *Tipo documento* della nuova *Nota di accredito* (dato obbligatorio); viene proposto il *Tipo fattura* inserito nel *Tipo reclamo* del *Reclamo* di origine.   
> **Descrizione**: è la descrizione che verrà utilizzata per la riga di *Articolo spesa* della nuova *Nota di accredito* (dato obbligatorio); viene proposta la descrizione che viene parametrizzata nei [Parametri di Valorizzazione reclami](/docs/quality/claims-and-non-compliance/claims/procedures/claim-valorisation), sessione *Riferimenti reclami*.   
> **I.V.A.**: è il *Tipo I.V.A.* che verrà utilizzato per la riga di *Articolo spesa* della nuova *Nota di accredito*.   
> Viene proposto il *Tipo I.V.A.* con le seguenti priorità:   
> 1. se esiste una *Dichiarazione di intento', viene considerato il *Tipo I.V.A.* presente nel documento;   
> 2. se non esiste una *Dichiarazione di intento', viene considerato il *Tipo I.V.A.* associato al mittente del *Reclamo*;   
> 3. se non esiste una *Dichiarazione di intento' e non è stato indicato un *Tipo I.V.A.* associato al mittente del *Reclamo*, viene considerato il *Tipo I.V.A.* associato al *Tipo reclamo*.   
>
> Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
> Al termine dell'elaborazione la *Nota di accredito* appena creata viene visualizzata.   


### ![](/img/neutral/common/corrective.png) Crea azione correttiva

Pulsante contestuale alla visualizzazione del tabulatore:   
> *Gestione difetti* - Se il *Modello* del *Tipo reclamo* è *Classic*;   
> *Azioni di contenimento*, *Azioni permanenti* e *Fasi* - Se il *Modello* del *Tipo reclamo* è *8D Problem Solving*.   
>
Il pulsante è abilitato solamente se il *Reclamo* è stato salvato, approvato ed è stata selezionata una riga valida dall'elenco contestuale.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


### Crea non conformità

Pulsante contestuale alla visualizzazione del tabulatore:   
> *Gestione difetti* - Se il *Modello* del *Tipo reclamo* è *Classic*;   
> *Cause* - Se il *Modello* del *Tipo reclamo* è *8D Problem Solving*.   
Il pulsante è abilitato solamente se il *Reclamo* è stato salvato, approvato ed è stata selezionata una riga valida dall'elenco contestuale.   
Viene visualizzata una richiesta/conferma dati per:   
>
> ** sessione da implementare **
>
> Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
> Al termine dell'elaborazione la *Non conformità* appena creata viene visualizzata per dare modo di completare le informazioni mancanti.   


## Gestione dati

## Dati di testata del documento

Le informazioni gestite sono:   
> **Tipo non conformità**: è il *Tipo* del documento (dato obbligatorio).   
> All'inserimento di una nuova *Non conformità* viene proposto il *Tipo reclamo* indicato nei *Parametri Reclami e Non conformità*, sessione *Reclami*.   
> Sulla base del *Modello reclamo* specificato nel *Tipo reclamo*, verrà abilitata la gestione del *Reclamo* in modalità *Gestione difetti* oppure *8D - problem solving*.   
> Sulla base dell'indicazione di *Utilizzo in* specificato nel *Tipo reclamo*, verrà abilitata la possibilità di inserire un *Reclamo da cliente* oppure un *Reclamo da fornitore*.   
>
> **Anno/Numero/Data**: sono l'*Anno*, *Numero* e *Data* del *Reclamo* (dati obbligatori).   
> All'inserimento di un nuovo *Reclamo*:   
> - la *Data* viene proposta pari alla data odierna;   
> - l'*Anno* e il *Numero* vengono proposti in base alla *Data* e alla *Numerazione* associata al *Tipo reclamo*.   
>
> **Cliente**, **Cliente contatto** o **Rivenditore**: sono i riferimenti dei mittenti (almeno uno dei tre è un dato obbligatorio).
> Il *Cliente* viene rinominato in *Fornitore* se il documento è un *Reclamo da fornitore*.    
> Il *Cliente contatto* è un cliente non diretto, codificato nell'anagrafica dei *Contatti*, il cui bene o servizio è stato venduto da un soggetto terzo; disabilitato se il documento  è un *Reclamo da fornitore*.   
> Il *Rivenditore* è posizionato tra le informazioni dell tabulatore *Testata*; disabilitato se il documento  è un *Reclamo da fornitore*.   
> 


## Testata

Le informazioni gestite sono:   
> **Mezzo di notifica**: è la modalità con cui è stato ricevuto o notificato il *Reclamo*.   
>
> **Orario notifica**: è l'orario (ore e minuti) di ricevimento del *Reclamo*.   
>
> **Persona responsabile**: è il *Dipendente* responsabile della *Non conformità*.   
> All'inserimento di una nuova *Non conformità* viene proposta la *Persona responsabile* indicata nei *Parametri Reclami e Non conformità*, sessione *Non conformità*.   
>
> **Funzione responsabile**: è la *Funzione aziendale* responsabile della *Non conformità*.   
> All'inserimento di una nuova *Non conformità* viene proposta la *Funzione responsabile* indicata nei *Parametri Reclami e Non conformità*, sessione *Non conformità*.   
>
> **Riferimento documenti**: expander dove sono inseribili i riferimenti a documenti di interesse per la gestione del *Reclamo**:   
>> **Fattura**: è il riferimento alla *Fattura di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia fatturato il bene o il servizio contestato.   
>> **D.D.T.**: è il riferimento alla *Bolla di vendita* (*Tipo*, *Anno* e *Numero*), con la quale si presume si sia venduto il bene o il servizio contestato.   
>> **Ricevimento merce**: è il riferimento al *Ricevimento merce* (*Tipo*, *Anno* e *Numero*), con il quale il mittente rende il bene contestato.   
>> **Progetto**: è il riferimento al *Progetto* del bene o del servizio contestato.   
>> **Nostro riferimento**: annotazioni libere su altri riferimenti a documenti interni.   
>> **Vostro riferimento**: annotazioni libere su altri riferimenti a documenti del mittente del *Reclamo*.   
>
> **Approvato/In data**: expander dove è possibile inserire le informazioni di approvazione del *Reclamo:   
>> Solamente la **Persona responsabile** o la **Funzione responsabile** possono approvare il *Reclamo*.  
>> **Approvato**: indica che il *Reclamo* è *Approvato*.   
>> All'atto dell'approvazione vengono automaticamente proposte: *In data*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.*   
>> **In data**: è la data in cui il *Reclamo* è stata *Approvato*.   
>> All'atto dell'inserimento della data vengono automaticamente proposte: *Nome* e *Persona* proposte come *Utente A.R.M.* collegato, *Dipendente* collegato all'*Utente A.R.M.* e impostato il flag *Approvato*.   
>> **Nome**: è l'*Utente A.R.M.* che ha approvato il *Reclamo*. L'informazione è di sola lettura.   
>> **Persona**: è il *Dipendente* che ha approvato il *Reclamo*. L'informazione è di sola lettura.   
>> **Funzione**: è la *Funzione aziendale* che ha approvato il *Reclamo*.   
>> Abilitata solamente se il *Reclamo* è *Approvato*.   
>  
> **Rivenditore**: informazione già descritta precedentemente tra i mittenti del *Reclamo*.   
>
> **Riferimento sito del cliente**: annotazioni libere sull'argomento; viene rinominato in *Riferimento sito del fornitore* se il documento è un *Reclamo da fornitore*.   
>
> **Referente esterno**: annotazioni libere sulla persona di riferimento del mittente del *Reclamo*.   
>
> **Audit Trail**: expander di sola lettura dove sono visibili le seguenti informazioni:   
>> **Data creazione/Nome**: è la data e l'*Utente A.R.M.* che ha inserito il *Reclamo*.   
>> **Data ultima modifica/Nome**: è la data e l'*Utente A.R.M.* che ha apportato l'ultima modifica al *Reclamo*.   
>
> **Chiuso/In data**: expander dove è possibile inserire le informazioni di chiusura del *Reclamo*:   
>> Solamente la **Persona responsabile** o la **Funzione responsabile** possono chiudere il *Reclamo*.  
>> **Chiuso**: indica che il *Reclamo* è *Chiuso*.   
>> All'atto della chiusura vengono automaticamente proposte: *In data*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.*.   
>> **In data**: è la data in cui il *Reclamo* è stato *Chiuso*.   
>> All'atto dell'inserimento della data vengono automaticamente proposte: *Nome* e *Persona* proposte come *Utente A.R.M.* collegato, *Dipendente* collegato all'*Utente A.R.M.* e impostato il flag *Chiuso*.   
>> **Nome**: è l'*Utente A.R.M.* che ha chiuso il *Reclamo*. L'informazione è di sola lettura.   
>> **Persona**: è il *Dipendente* che ha chiuso il *Reclamo*. L'informazione è di sola lettura.   
>> **Funzione**: è la *Funzione aziendale* che ha chiuso il *Reclamo*.   
>> Abilitata solamente se il *Reclamo* è *Chiuso*.   
>> **Notifica chiusura/In data**: Sono le indicazioni manuali se la chiusura del *Reclamo* è stato notificato e in quale data al mittente dello stesso.   


### Notifiche

Nel tabulatore sono contenute le indicazioni di:   
> **Motivo contestazione**: annotazioni libere sul motivo dell'inserimento del *Reclamo* (dato obbligatorio).   
>
> **Sito produttivo**: è il riferimento del *Sito produttivo* di dove è stato riscontrato o si suppone sia l'origine del *Reclamo*.   
>
> **Il motivo della contestazione e difetto riscontrato è stato accettato**: indica che il *Reclamo* è stato accettato.   
>
> **Motivo del recesso**: annotazioni libere sulla motivazione della non accettabilità del *Reclamo*; informazione abilitata solamente se il *Reclamo* non è stato accettato.   
>
>> **Notifico/In data**: Sono le indicazioni di notifica al mittente del *Reclamo* se lo stesso è stato accettato o meno e in quale data.   


### Annotazioni

Nel tabulatore sono contenute annotazioni generali al documento e specifiche per area. Le informazioni presenti sono:   
> **Note commerciali**: annotazioni libere sull'argomento riservate al personale dell'area commerciale.   
> **Note tecniche**: annotazioni libere sull'argomento riservate al personale dell'area tecnica.   
> **Note amministrative**: annotazioni libere sull'argomento riservate al personale dell'area amministrativa.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) generali per il *Reclamo*.   


### Altri costi

Nel tabulatore è possibile inserire altri costi aggiuntivi a quelli derivanti dal Costo degli articoli contestati e da quello di Gestione del documento.   
> **Costi diretti**   
> Un elenco di costi attribuibili in modo diretto al costo degli articoli contestati, al servizio dato e al costo delle lavorazioni sostenute per la gestione del *Reclamo*. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo diretto (Direct cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Applicazione su ...**: informazione di sola lettura che riporta su quale componente di costo viene applicato il *Valore* (se espresso in percentuale); nel caso della gestione *Reclami* non c'è distinzione tra : *Costo materiali*, *Costo macchina*, *Costo manodopera*, *Costo lavorazioni* e *Costo industriale*, tutte le voci vengono applicate sul *Totale reclamo*.      
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, alla componente di costo specificata in *Applicazione su ...* .   
>> **Nota**: annotazioni libere.   
>>   
> **Costi generali**   
> Un elenco di costi generali, non direttamente imputabili al *Reclamo* e che supportano l'intero processo aziendale. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo generale (General cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, al *Totale Reclamo*.   
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

Nel tabulatore è possibile inserire informazioni relative a documenti di addebito e accredito al *Reclamo*, i costi sostenuti e quelli da accreditare al mittente del *Reclamo*. Le informazioni presenti sono:   
> **Divisa**, **Diretto** e **Data valuta**: è la *Divisa* del mittente del *Reclamo* con la quale vengono specificati tutti i valori del documento, il relativo coefficiente di cambio alla *Divisa* della *Società* e la *Data valuta*.   
> **Riferimento documento addebito**: è il riferimento alla *Nota di addebito* ricevuta dal *Cliente*.   
> **Note documento di addebito**: annotazioni libere sull'argomento.   
>   
> **Totale reclamo**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Reclami* è stato richiesto il *Ricalcolo automatico totali*; viene proposta la sommatoria della sola componente dei costi lavorazione degli *Oggetti difettosi* rilavorati.   
>   
> **Totale costi diretti**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi diretti* presenti nel tabulatore *Altri costi*.   
>   
> **Totale costi generali**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi generali* presenti nel tabulatore *Altri costi*.   
>   
> **Totale altri costi**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco degli *Altri costi* presenti nel tabulatore *Altri costi*.   
>   
> **Costo di gestione**: è il *Costo di gestione* ripreso dal *Costo di gestione* presente nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Reclami*; il valore può essere variato.   
>   
> **Valore da accreditare**: è il *Valore da accreditare* al mittente del *Reclamo*; se nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali* il valore viene proposto pari alla sommatoria del *Valore accettato* degli *Oggetti difettosi* e successivamente può essere modificato.    
>
> **Valorizzato** e **Riferimento documento di accredito**: informazioni di sola lettura che riportano se il *Reclamo* è stata valorizzato e il riferimento alla *Nota di accredito* generata.   
   
   
Le successive sessioni della gestione variano sulla base del *Modello* specificato nel *Tipo reclamo*: *Gestione difetti* oppure *8D - problem solving*:
> ### [Gestione difetti](/docs/quality/claims-and-non-compliance/claims/claim-dm)   
>   
> ### [8D Problem Solving](/docs/quality/claims-and-non-compliance/claims/claim-8d)


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   