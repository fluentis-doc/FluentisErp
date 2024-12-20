---
title: Certificato di Analisi
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Controlli articolo > Certificati di analisi > Nuovo Certificato di analisi** oppure è possibile eseguirla dalla **Ricerca Certificati di analisi**.   


:::important A cosa serve
Il **Certificato di analisi** attesta che un determinato articolo è conforme alle caratteristiche specificate dalla Scheda tecnica o nelle specifiche del Cliente, attesta altresì le avvenute verifiche sul prodotto, il rispetto dei limiti indicati nei Piani di controllo e accompagnano la vendita del prodotto.   
I Certificati possono essere generici o personalizzati. Se personalizzati sarà necessario inserire il **Cliente**.   

A standard sono disponibili le reportistiche di:   
> **Certificato di analisi**: scheda che riporta l'elenco dei *Prodotti* con il dettaglio delle *Prove effettuate*, dei *Valori rilevati* e l'*Esito* ottenuto.   
> **Dichiarazione di conformità**: scheda che attesta e garantisce la conformità del *Prodotto*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Certificato di analisi* visualizzato.   


### ![](/img/neutral/common/import.png) Importazione controlli

Premendo questo pulsante si ricercano i *Controlli articolo Approvati* da associare al *Certificato di analisi* visualizzato.   
Viene visualizzata una gestione per la ricerca e la selezione dei *Controlli articolo* da importare nel *Certificato di analisi*.   
Vengono elencati i soli *Controlli articolo Approvati * che soddisfano il filtro dati richiesto.   
Premendo il pulsante *Seleziona* i *Controlli articolo* selezionati vengono duplicati e riportati nel Certificato di analisi* visualizzato.   


### ![](/img/neutral/common/update.png) Aggiorna

Premendo questo pulsante si effettua un aggiornamento di tutte le informazioni presenti nei *Certificato di analisi* visualizzato.   



## Gestione dati


### Dati di testata del documento
Le informazioni gestite sono:   
> **Tipo certificato**: è il tipo del documento (dato obbligatorio).   
> All'inserimento di un nuovo *Certificato di analisi* viene proposto il *Tipo certificato* indicato nell'expander *Certificati di analisi* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.   
>
> **Anno/Numero/Data**: sono l'*Anno*, *Numero* e *Data* del *Certificato di analisi* (dati obbligatori).   
> All'inserimento di un nuovo *Certificato di analisi*:   
> - la *Data* viene proposta pari alla data odierna;   
> - l'*Anno* e il *Numero* vengono proposti in base alla *Data* e alla *Numerazione* associata al *Tipo certificato*.   
>
> **Cliente**: è la ragione sociale del *Cliente* a cui verrà inviato il documento.   


### Testata 
Le informazioni gestite sono:   
> **Responsabile**: è il *Dipendente* responsabile del *Certificato di analisi*.   
> All'inserimento manuale di un nuovo *Certificato di analisi* viene proposto il *Responsabile* indicato nell'expander *Certificati di analisi* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.  
>
> **Referente esterno**: è la *Funzione aziendale* responsabile dell'*Azione correttiva*.   
> **Nota cliente**: annotazioni libere.   
> **Nostro riferimento**: annotazioni libere su riferimenti a documenti interni.   
> **Vostro riferimento**: annotazioni libere su riferimenti a documenti esterni del cliente.   
> **Descrizione**: annotazioni libere.   
>
> **Completato/In data**: expander dove è possibile inserire:   
>
>> **Completato**: indica che il *Certificato di analisi* è stato *Completato*.   
>> All'atto del completamento vengono automaticamente proposte: *In data* (data del completamento) proposta alla data odierna e può essere variata, *Completato da* collegato e al *Dipendente* collegato all'*Utente A.R.M.* che ha effettuato l'accesso.  
>> **Notificato/In data**: indica che il *Certificato di analisi* è stato *Notificato* al cliente nella data specificata.   
>> All'atto della notifica viene automaticamente proposta: *In data* (data della notifica) proposta alla data odierna e può essere variata.  
>
> **Audit Trail**: expander di sola lettura dove sono visibili le seguenti informazioni:   


#### Annotazioni
Le informazioni gestite sono:   
> **Note interne**: annotazioni libere.   
> **Stampabili**: indica se le *Note interne* sono stampabili o meno nei reports: *Certificato di analisi* e *Dichiarazione di conformità*.   
> **Note Piano di controllo**: annotazioni libere su riferimenti a Piani di controllo utilizzati.   
> **Stampabili**: indica se le *Note Piano di controllo* sono stampabili o meno nei reports: *Certificato di analisi* e *Dichiarazione di conformità*.   
> **Altre note**: annotazioni libere.   


#### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni *Certificato di analisi*.   


### Controlli e valori rilevati 
Le informazioni gestite sono:   
> **Articolo**   
>> **Numero**: è il numero di riga del documento.   
>> **Tipo riga**: è il tipo riga del documento. Nella versione è gestito solamente il *Tipo riga: 1 - Articolo codificato*.   
>> **Classe**: è la classe dell'*Articolo* della riga documento controllata.   
>> **Codice articolo**: è il codice dell'*Articolo* della riga documento controllata.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* della riga documento controllata.   
>> **Unità di carico**: .   
>> **Lotto**: .   
>> **Numero seriale**: .   
>> **Unità di misura**: è l'*Unità di misura* della *Quantità documento* della riga documento controllata.   
>> **Quantità**: è la *Quantità documento* della riga documento controllata.   
>> **Unità di misura alternativa**: è l'*Unità di misura alternativa* della *Quantità documento* della riga documento controllata.   
>> **Quantità alternativa**: è la *Quantità alternativa documento* della riga documento controllata.   
>
> **Controlli Articolo**   
>> **Tipo**: e il codice del *Tipo controllo articolo*.   
>> **Descrizione tipo**: è la descrizione del *Tipo controllo articolo*. L'informazione è di sola lettura.   
>> **Numero**: e il numero del *Controllo articolo*. L'informazione è di sola lettura.   
>> **Data**: e la data in cui è stato inserito il *Controllo articolo*. L'informazione è di sola lettura.   


#### Valori rilevati
Contiene l'elenco delle *Prove* per l'*Articolo*.   
Le informazioni vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della *Prove*.   
> **Tipo prova**: è il codice della *Prova*.   
> **Descrizione tipo prova**:  è la descrizione della *Prova*. L'informazione è di sola lettura.   
> **Unità di misura valori rilevati**: è l'*Unità di misura* con cui si esprimono il *Valore nominale*, i *Limiti minimo e massimo* se espressi in valore e non in percentuale e i *Valori rilevati*.   
> **Tipo valore**: è il *Tipo valore* con cui esprimere il *Valore nominale*; i *Tipi valore* possibili sono: *Numerico*, *Si/No* o *Testo*.   
> **Tipo limite**: abilitato se il *Tipo valore* è *Numerico*, è il *Tipo limite* che piloterà l'abilitazione dei *Limiti* e dei valori di *Tolleranza*.   
> **Valore nominale**: è il valore teorico atteso della *Prova*.   
> **Limite minimo**: limite minimo consentito rispetto al *Valore nominale*.   
> **L.min.(toll-)**: è il limite di tolleranza negativa sul limite minimo.   
> **L.min.(toll+)**: è il limite di tolleranza positiva sul limite minimo.   
> **Limite massimo**: limite massimo consentito rispetto  al *Valore nominale*.   
> **L.max.(toll-)**: è il limite di tolleranza negativa sul limite massimo.   
> **L.max.(toll+)**: è il limite di tolleranza positiva sul limite massimo.   
> **%**: indica se il *Limite minimo* e il *Limite massimo* sono espressi in percentuale.   
> **Valore rilevato**: è il valore puntuale rilevato della *Prova* che ne determinerà l'*Esito*.   
> All'inserimento del *Valore rilevato*:   
> - in *Rilevato da* viene proposto il *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato da utente* viene proposto l'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Esito* viene proposto il risultato della *Prova* e modificabile successivamente.   
> - in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
>
> **Media valori rilevati**: è la media dei valori rilevati nella *Rilevazione multipla valori* della *Prova*.   
> **Rilevato da**: è il *Dipendente* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari al *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato da utente**: è l'*Utente A.R.M.* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Esito**: è il risultato positivo o negativo della *Prova*.   
> All'inserimento dell'*Esito* in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
> All'inserimento del *Valore rilevato* o della *Media valori rilevati* questa informazione viene proposta sulla base del *Tipo valore*, *Tipo limite*, *Valore nominale*, *Limiti* e *Tolleranze* inserite.   
> **Stampabile**: indica che la *Prova* è stampabile.   
> **Approvato**: indica che i valori e l'*Esito* attribuito alla *Prova* sono stati *Approvati*.   
> All'atto dell'approvazione la *Data approvazione esito* viene automaticamente proposta pari alla data odierna e può essere variata, tutte le informazioni della *Prova* non possono essere più modificate.   


***Valori multipli rilevati***   

Contiene l'elenco delle rilevazioni fatte per una singola *Prova*.   
Anch'esse vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della rilevazione.   
> **Posizione**: annotazioni libere relative alla posizione della rilevazione.   
> **Valore rilevato**: è il valore rilevato dall'operatore.   
> Se il *Valore rilevato* è di tipo *Numerico*, la media dei *Valori rilevati*, inseriti in questo elenco per la *Prova* selezionata, verrà inserita nella colonna *Media valori rilevati* della *Prova* selezionata che ne determinerà l'*Esito*.   
> All'inserimento del *Valore rilevato*:   
> - in *Rilevato da* viene proposto il *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato da utente* viene proposto l'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato il* viene proposta la data odierna.   
>
> **Strumento di misura utilizzato**: è il rifermento allo *Strumento di misura* utilizzato dall'operatore per acquisire il *Valore rilevato*.   
> **Rilevato da**: è il *Dipendente* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari al *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato da utente**: è l'*Utente A.R.M.* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato il**: è la data in cui l'operatore ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari alla data odierna.   
> **Note**: annotazioni libere.   
> **Descrizione Strumento di misura**: è la descrizione dello *Strumento di misura* utilizzato.   


***Dati di dettaglio valori rilevati***   

Contiene altre informazioni associate alla *Prova* selezionata.   
Le informazioni vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).   
Le informazioni gestite sono:   
> **Prova interna**: indica se la *Prova* viene rilevata internamente o presso un laboratorio esterno.   
> **Data invio**: è la data in cui si è inviato il materiale necessario ad effettuare la *Prova* presso il *Laboratorio esterno*. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettuerà la prova. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Tipo prova**: è il codice e la descrizione della *Prova*.   
> **Categoria frequenza**: annotazioni libere relative alla frequenza di campionatura.   
> **Numero rilevazioni**: è il numero di rilevazioni valori minime suggerite da effettuare.   
> **Strumento di misura utilizzato**: è lo *Strumento di misura* utilizzato per rilevare il valore puntuale della *Prova*.   
> **Data inizio/Data fine**: sono le date di inizio e di fine della *Prova*.  
> **Data esito prova**: è la data di attribuzione dell'*Esito*.   
> All'inserimento dell'*Esito* questa informazione viene proposta pari alla data odierna e modificabile successivamente.   
> **Descrizione su risultato**: annotazioni libere sull'argomento.   
> **Data approvazione**: è la data in cui è stata effettuata l'*Approvazione* della *Prova*.   
> All'atto dell'inserimento della data viene automaticamente impostato il flag *Approvato*.   
> **Descrizione approvazione**: annotazioni libere sull'argomento.   
> **Note prova**: annotazioni libere sull'argomento.   
> **Altre note**: annotazioni libere.   


***Altri dati prove effettuate***   

E' possibile visualizzare degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   
Vengono ereditati dagli *Attributi prove effettuate* associati alle *Prove* dei *Controlli articolo*.   


***Attributi articolo***   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   


***Documenti allegati***   

In questo elenco è possibile inserire e consultare eventuali allegati associati alla riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   


#### Dati di dettaglio controlli
Le informazioni gestite sono:   
> **Riferimento Piano di controllo**: è il riferimento al *Piano di controllo* utilizzato per le prove ed i valori rilevati. L'informazione è di sola lettura.   
> **Descrizione controllo**: è la descrizione del *Controllo articoli* collegato. L'informazione è di sola lettura   
> **Note controllo**: annotazioni libere sull'argomento.   
> **Note articolo-cliente**: annotazioni libere sull'argomento.   
> **Riferimento Scheda tecnica**: è il riferimento alla *Scheda tecnica* collegata al *Piano di controllo* utilizzato. L'informazione è di sola lettura   
> **Documento di origine**: è il riferimento del *Tipo documento di origine* sul quale si sono effettuati i *Controlli articoli*. L'informazione è di sola lettura   
> **Riferimento documento di origine**: è il riferimento del *Documento di origine* sul quale si sono effettuati i *Controlli articoli*. L'informazione è di sola lettura.   
> **Note**: annotazioni libere.   


#### Altri dati controllo
E' possibile visualizzare degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni riga *Articolo/Controlli articolo*.   
Vengono ereditati dagli *Attributi controlli* associati ai *Controlli articolo*.   


#### Attributi articolo
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni riga *Articolo/Controlli articolo*.   


#### Documenti allegati
In questo elenco è possibile inserire e consultare eventuali allegati associati alla riga *Articolo/Controlli articolo*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   