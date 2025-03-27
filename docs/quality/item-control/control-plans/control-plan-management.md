---
title: Piano di controllo
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Controlli articolo > Piani di controllo > Nuovo piano di controllo** oppure è possibile eseguirla dalla **Ricerca Piani di controllo**.   


:::important A cosa serve
Nei Piani di controllo si catalogano tutte le prove pianificate, verifiche, misurazioni necessarie ed i valori da ottenere per garantire che materiali e prodotti associati rientrino nei limiti delle proprietà richieste.   
Tramite i Piani di controllo è possibile predefinire i controlli da effettuare durante il ciclo di vita di un articolo: dai controlli in accettazione materiali, rientri da conto lavoro, ai controlli durante il ciclo produttivo di un articolo: prima, durante e successivamente alla creazione del prodotto.
I Piani di controllo, così come le Schede tecniche, possono essere personalizzabili per Cliente e/o Fornitore. Anche in questo documento vengono gestite le revisioni e la rintracciabilità tra Piani di controllo desiderati.   
Ad ogni prova pianificata è possibile indicare: se la prova viene effettuata internamente o presso terzi, la categoria e lo strumento di misura da utilizzare, i tipi di valore richiesti (Si/No o Numerici), il valore nominale, i limiti inferiore e superiore specificabili in percentuale o in valore assoluto, il numero di misurazioni da effettuare e con quale frequenza.   

Elenchiamo alcuni esempi di tipologie di Piani di controllo possibili: Controlli in accettazione, Controlli in accettazione per fornitori critici, Controlli di produzione, Collaudi finali.   

A standard è disponibile la reportistica di: **Piano di controllo**.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Piano di controllo* visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica Piano di controllo

E' possibile duplicare il *Piano di controllo* visualizzato in un nuovo *Piano di controllo*. E' sufficiente premere il pulsante **Duplica**.   
Viene visualizzata una richiesta di:
> **Tipo piano di controllo**: è il *Tipo piano di controllo* del nuovo *Piano di controllo* (dato obbligatorio).   
> Viene proposto il *Tipo piano di controllo* del *Piano di controllo* di origine.   
> **Numero**: è il *Numero* progressivo del nuovo *Piano di controllo* (dato obbligatorio).   
> Viene proposto in base a quanto previsto dalla *Numerazione* associata al *Tipo piano di controllo* e alla data odierna.   
> **Duplica con rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, del *Piano di controllo* di destinazione, nel *Piano di controllo* di origine ed in particolare nel tabulatore *Piani di controllo correlati*.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
Al termine dell'elaborazione il nuovo *Piano di controllo* viene visualizzato.   


### ![](/img/neutral/common/execute.png) Crea nuova revisione

Per poter creare una nuova *Revisione* ad un *Piano di controllo* esistente è necessario premere il pulsante **Crea nuova edizione**.   
Viene creato nuovo *Piano di controllo*, con tutte le informazioni del *Piano di controllo* di origine ma con indice di *Revisione* incrementato e la *Data di inizio validità* pari alla data odierna.
Il *Piano di controllo* di origine finisce la sua validità impostando automaticamente la *Data fine validità* pari alla data odierna.   
Al termine dell'elaborazione la nuova *Revisione* del *Piano di controllo* viene visualizzata.


### Crea nuova Scheda tecnica

Dal *Piano di controllo* è possibile creare una *Scheda tecnica*; per fare ciò è necessario premere il pulsante **Crea nuova Scheda tecnica**.   
Viene creata nuova *Scheda tecnica*, con tutte le informazioni del *Piano di controllo* di origine ma con indice di *Revisione* pari a *zero* e con *Data di inizio validità* pari alla data odierna. Verrà visualizzata una richiesta di:   
> **Tipo scheda**: è il *Tipo scheda* della nuova *Scheda tecnica* (dato obbligatorio).   
> **Del cliente**: è il *Cliente* della nuova *Scheda tecnica*, viene proposto il conto *Cliente* del *Piano di controllo* di origine (solo se è di *Tipo conto cliente*).   
> **Nuovo codice**: è il *Codice* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto in base a quanto previsto dal *Metodo di Codifica* associata al *Tipo scheda tecnica*.   
> **Rev.**: è l'indice di *Revisione* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto a *zero*.   
> **Crea mantenendo la rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, nella *Scheda tecnica* di destinazione, nel *Piano di controllo* di origine ed in particolare nel tabulatore *Schede correlate*.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Al termine dell'elaborazione la nuova *Scheda tecnica* viene visualizzata.   


### ![](/img/neutral/common/duplicate.png) Duplica prova

Contestuale al tabulatore *Prove pianificate* il pulsante è abilitato solamente se, dall'elenco *Prove pianificate*, è stata selezionata una sola riga *Prova*.
Tutte la informazioni della *Prova pianificate* di origine vengono duplicate in una nuova *Prova pianificate* accodata in *Sequenza* alle *Prove pianificate* già esistenti.


## Gestione dati


### Dati di testata

Le informazioni gestibili sono:   
> **Tipo**: è il *Tipo piano di controllo* (dato obbligatorio).   
> All'inserimento manuale di un nuovo *Piano di controllo* viene proposto il *Tipo piano di controllo* indicato nell'expander *Piani di controllo* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.   
>
> **Anno/Numero**: sono l'*Anno* e *Numero* del *Piano di controllo* (dati obbligatori).   
> All'inserimento di un nuovo *Piano di controllo* l'*Anno* e il *Numero* vengono proposti in base alla data odierna e alla *Numerazione* associata al *Tipo piano di controllo*.   
>
> **Rev.**: è la Revisione del *Piano di controllo* (dato obbligatorio).   
L'informazione è modificabile se si stà creando un nuovo *Piano di controllo* altrimenti è di sola lettura; si può variare in modo pilotato dal sistema usando il pulsante *Crea nuova revisione* che incrementano il precedente valore di *Revisione* di una unità.   
>
> **Descrizione**: è la descrizione del *Piano di controllo*.   
> **Per il cliente/fornitore**: è la ragione sociale del *Cliente* o *Fornitore*. Le *Prove pianificate* sono personalizzate per il *Cliente* o *Fornitore* e *Articoli associati*.    
> **Note del cliente/fornitore**: annotazioni libere per il cliente/fornitore.   
>
> **Specifica del cliente**: expander dove è possibile inserire:   
>
>> **Data specifica**: e la data della specifica ricevuta dal cliente.    
>> **Riferimento**: annotazioni libere sul riferimento alla specifica ricevuta dal cliente che richiede controlli specifici da effettuare per gli *Articoli associati*.   
>> **Data scadenza**: e la data di fine validità della specifica ricevuta dal cliente.    
>> **Note**: annotazioni libere relative alla specifica ricevuta dal cliente.   
>
> **Data richiesta/Richiesta da**: solo i riferimenti in quale data e qual'è la persona che ha richiesto la creazione del *Piano di controllo*.    
>
> **Validità: Inizio/Fine**: sono le date di inizio e di fine validità del *Piano di controllo*.    
> Le date sono gestite automaticamente alla creazione di una nuova *Revisione* del *Piano di controllo*.
>
> **Responsabile**: è il *Dipendente* responsabile del *Piano di controllo*.   
> All'inserimento manuale di un nuovo *Piano di controllo* viene proposto il *Responsabile* indicato nell'expander *Piani di controllo* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.   
>
> **Note**: annotazioni libere.   
>
> **Origine piano di controllo**: expander dove è possibile inserire:   
>
>> **Scheda origine**: contiene i riferimenti della *Scheda tecnica di origine* (*Tipo scheda*, *Codice* e *Revisione*).   
>> **Piano di controllo**: contiene i riferimenti del *Piano di controllo di origine* (*Tipo piano*, *Anno*, *Numero* e *Revisione*).   
>> **Motivo della revisione**: una breve descrizione del motivo che ha condotto alla revisione.   
>> L'informazione può essere variata se il *Piano di controllo* è ancora in corso di validità.   


### Attributi piano di controllo
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Piano di controllo*.   
Vengono ereditati dagli *Extra data* associati al *Tipo piano di controllo*.   


### Prove pianificate
Contiene le *Prove pianificate* degli *Articoli* o *Attributi articolo* del *Piano di controllo*.
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della *Prove pianificate*.   
> **Tipo prova**: è il codice della *Prova pianificata*.   
> **Descrizione tipo prova**:  è la descrizione della *Prova pianificata*. L'informazione è di sola lettura.   
> **Descrizione**: è la descrizione della *Prova pianificata* compilabile.   
> **Riferimento piano di controllo standard**: è un campo descrittivo che contiene i riferimenti a codifiche di prove riconosciute globalmente.   
> **Prova interna**: indica se la *Prova* viene rilevata internamente o presso un laboratorio esterno.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettuerà la prova. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Categoria Strumento di misura**: è la *Categoria dello strumento di misura* da utilizzare per poter rilevare i *Valori* espressi nella *Prova*.   
> **Strumento di misura**: è lo *Strumento di misura* da utilizzare per poter rilevare i *Valori* espressi nella *Prova*.   
> **Unità di misura**: è l'*Unità di misura* con cui si esprimono il *Valore nominale* e i *Limiti minimo e massimo* se espressi in valore e non in percentuale.   
> **Tipo valore**: è il *Tipo valore* con cui esprimere il *Valore nominale*; i *Tipi valore* possibili sono: *Numerico*, *Si/No* o *Testo*.   
> **Tipo limite**: abilitato se il *Tipo valore* è *Numerico*, è il *Tipo limite* che piloterà l'abilitazione dei *Limiti* e dei valori di *Tolleranza*.   
> **Valore nominale**: è il valore teorico atteso della *Prova pianificata*.   
> **Limite minimo**: limite minimo consentito rispetto al *Valore nominale*.   
> **L.min.(toll-)**: è il limite di tolleranza negativa sul limite minimo.   
> **L.min.(toll+)**: è il limite di tolleranza positiva sul limite minimo.   
> **Limite massimo**: limite massimo consentito rispetto  al *Valore nominale*.   
> **L.max.(toll-)**: è il limite di tolleranza negativa sul limite massimo.   
> **L.max.(toll+)**: è il limite di tolleranza positiva sul limite massimo.   
> **%**: indica se il *Limite minimo* e il *Limite massimo* sono espressi in percentuale.   
> **Tipo controllo prova**: è il *Tipo controllo* da effettuare sulla *Prova pianificata*.   
> **Frequenza**: annotazioni libere relative alla frequenza di campionatura.   
> **Numero rilevazioni**: è il numero di rilevazioni valori minime suggerite da effettuare.   
> **Data inizio validità**: è la data di inizio validità della *Prova pianificata*.   
> **Data fine validità**: è la data di fine validità della *Prova pianificata*.   
> **Stampato**: indica se le informazioni sono stampabili o meno nel report: *Piano di controllo*.   
> **Note**: annotazioni libere.   
> **Descrizione Categoria Strumento di misura**: è la *Descrizione Categoria dello strumento di misura* da utilizzare. L'informazione è di sola lettura.   
> **Descrizione Strumento di misura**: è lo *Descrizione Strumento di misura* da utilizzare. L'informazione è di sola lettura.   


#### Attributi prova pianificata
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generali per la *Prova pianificata*.   
Vengono ereditati dagli *Attributi tipo prova* presenti nei *Tipi prova*.   


#### Configurazione della prova
Contiene gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necessari agli operatori per preparare tutti gli strumenti necessari per poter iniziare una determinata prova. Possono essere considerate delle configurazioni necessarie, informazioni operative propedeutiche all'esecuzione della prova.   
Vengono ereditati dai *Parametri di configurazione prova e strumento di misura* presenti nei *Tipi prova*.   


#### Funzioni di rilevamento ed approvazione
E' un'attribuzione di diritti che elenca chi può rilevare e/o approvare i valori della prova.   
Vengono ereditati dalle *Funzioni di rilevamento ed approvazione* presenti nei *Tipi prova*.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Tipo attività**: è il diritto dato alla *Funzione aziendale* durante le attività di rilevamento e/o approvazione di una prova. I valori possibili sono:   
> - *Può rilevare* - la *Funziona aziendale* ha i permessi di sola rilevazione dei valori;   
> - *Può approvare* - la *Funziona aziendale* ha i permessi di sola approvazione della prova;   
> - *Può rilevare e approvare* - la *Funziona aziendale* ha i permessi di rilevazione dei valori e approvazione della prova.   
>
> Le altre *Funzioni aziendali* non elencate non hanno alcun diritto di rilevazione valori e approvazione della prova.   
> Se non vengono specificate *Funzioni aziendali* tutti gli operatori potranno rilevare valori e approvare la prova.
>
> **Note**: annotazioni libere.


#### Documenti allegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


### Clienti/Fornitori
Contiene i *Clienti*/*Fornitori* per i quali effettuare le *Prove pianificate* agli *Articoli associati*.   
L'elenco si compone delle seguenti informazioni:   
> **Cliente/Fornitore**: è la ragione sociale del *Cliente* o "Fornitore". Le *Proprietà* sono personalizzate per i *Clienti*/*Fornitori*/*Articoli associati*.   
> **Data specifica**: e la data della specifica ricevuta dal cliente.    
> **Riferimenti specifica**: annotazioni libere sul riferimento alla specifica ricevuta dal cliente che richiede controlli specifici da effettuare per gli *Articoli associati*.   
> **Nota specifica**: annotazioni libere relative alla specifica ricevuta dal cliente.   
> **Note**: annotazioni libere.   


### Articoli associati
Contiene gli *Articoli* con caratteristiche simili ed elencate nell'elenco delle *Prove pianificate*.
L'elenco si compone delle seguenti informazioni:   
> **Classe**: è la classe dell'*Articolo*.   
> **Codice articolo**: è il codice dell'*Articolo*.   
> **Descrizione articolo**: è la descrizione dell'*Articolo*.   
> **Variante**: è il codice della *Variante articolo*.   
> **Descrizione variante**: è la descrizione della *Variante articolo*. L'informazione è di sola lettura.   
> **Fornitore**: è la ragione sociale del *Fornitore* che consegna l'*Articolo* per il quale verranno attivate le *Prove pianificate*.   
> **Note**: annotazioni libere.   


### Attributi articolo
In alternativa all'elenco degli *Articoli associati* è possibile inserire caratteristiche (in formato [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata)) per cui le *Prove pianificate* del *Piano di controllo* sono valide.   


### Schede correlate
In questo elenco è possibile visualizzare le *Schede tecniche* create con rintracciabilità dal *Piano di controllo* visualizzato.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Scheda tecnica* selezionata.   


### Piani di controllo correlati
In questo elenco è possibile visualizzare i *Piani di controllo* duplicati con rintracciabilità dal *Piano di controllo* visualizzato.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione del *Piano di controllo* selezionato.   


### Revisioni
In questo elenco è possibile visualizzare lo storico delle *Revisioni* antecedenti al *Piano di controllo* visualizzato.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Piano di controllo* selezionato.   


### Documenti collegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   