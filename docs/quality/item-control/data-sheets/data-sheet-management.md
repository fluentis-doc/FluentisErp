---
title: Scheda tecnica
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Controlli articolo > Schede tecniche > Nuova scheda tecnica** oppure è possibile eseguirla dalla **Ricerca Schede tecniche**.   


:::important A cosa serve
Le Schede tecniche catalogano tutte quelle informazioni che descrivono le caratteristiche dei prodotti associati come idonee ad un contratto, ad una specifica funzionale o ad un determinato impiego.   
Le schede tecniche possono essere personalizzabili per Cliente.   
Vengono gestite le revisioni e la rintracciabilità tra Schede tecniche desiderate.   

A standard sono disponibili le reportistiche di:   
> **Scheda tecnica**: scheda con l'elenco delle *Proprietà* e delle *Norme e Leggi* associate (per uso interno).   
> **Scheda Prodotto**: scheda riportante i dati del *Prodotto* e delle *Proprietà* (per uso commerciale).   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate della *Scheda tecnica* visualizzata.   


### ![](/img/neutral/common/duplicate.png) Duplica Scheda

E' possibile duplicare la *Scheda tecnica* visualizzata in una nuova *Scheda tecnica*. E' sufficiente premere il pulsante **Duplica**.   
Viene visualizzata una richiesta di:
> **Tipo scheda**: è il *Tipo scheda* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto il *Tipo scheda* della *Scheda tecnica* di origine.   
> **Del cliente**: è il *Cliente* della nuova *Scheda tecnica*, viene proposto il conto *Cliente* della *Scheda tecnica* di origine.   
> **Extra data**: elenco degli extra data previsti dal *Tipo scheda* indicato.   
> **Nuovo codice**: è il *Codice* della nuova *Scheda tecnica* (dato obbligatorio), viene proposto in base a quanto previsto dal *Metodo di Codifica* associata al *Tipo scheda tecnica*.   
> **Duplica con rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, nella *Scheda tecnica* di origine (tabulatore *Schede correlate* della *Scheda tecnica* di origine) e nella *Scheda tecnica* di destinazione (nell'expander *Origine dati scheda* presente nei *dati di testata*).   

*Tipo scheda* e *Del cliente* sono proposti dal documento di origine; il *Codice* viene proposto se, al *Tipo scheda*, è associato un *Metodo di codifica*.   
Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
La nuova *Scheda tecnica* creata avrà la *Revisione* pari a *Zero*.   
Al termine dell'elaborazione la nuova *Scheda tecnica* viene visualizzata.   


### ![](/img/neutral/common/execute.png) Crea nuova revisione

Per poter creare una nuova *Revisione* della *Scheda tecnica* visualizzata è necessario premere il pulsante **Crea nuova revisione**.   
Viene creata una nuova *Scheda tecnica*, con tutte le informazioni della *Scheda tecnica* di origine ma con indice di *Revisione* incrementato e la *Data di inizio validità* pari alla data odierna.   
La *Scheda tecnica* di origine finisce la sua validità, la *Data fine validità* viene impostata pari alla data odierna.   
Al termine dell'elaborazione la nuova *Revisione* della *Scheda tecnica* viene visualizzata.   


### ![](/img/neutral/common/item-web.png) Crea Piano di controllo

Dalla *Scheda tecnica* è possibile creare un *Piano di controllo*; per fare ciò è necessario premere il pulsante **Crea Piano di controllo**.   
Viene creato un nuovo *Piano di controllo*, vengono copiate solamente le *Proprietà* di origine con l'indicatore *Prove da rilevare*, tutte le altre informazioni della *Scheda tecnica* ma con indice di *Revisione* pari a *zero* e con *Data di inizio validità* pari alla data odierna. Verrà visualizzata una richiesta di:   
> **Tipo piano di controllo**: è il *Tipo piano di controllo* del nuovo *Piano di controllo* (dato obbligatorio).   
> **Numero**: è il *Numero* progressivo del nuovo *Piano di controllo* (dato obbligatorio), viene proposto in base a quanto previsto dalla *Numerazione* associata al *Tipo piano di controllo* e alla data odierna.   
> **Crea mantenendo la rintracciabilità**: indica se si desidera mantenere relazione/rintracciabilità, della *Scheda tecnica* di origine, nel *Piano di controllo* di destinazione (nell'expander *Origine Piano di controllo* presente nei *dati di testata*).   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Al termine dell'elaborazione il nuovo *Piano di controllo* viene visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica prova

Contestuale al tabulatore *Proprietà* il pulsante è abilitato solamente se, dall'elenco *Proprietà*, è stata selezionata una sola riga *Proprietà*.
Tutte la informazioni della *Proprietà* di origine vengono duplicate in una nuova *Proprietà* accodata in *Sequenza* alle *Proprietà* già esistenti.


## Gestione dati


### Dati di testata

Le informazioni gestibili sono:   
> **Tipo scheda**: è il *Tipo scheda tecnica* (dato obbligatorio).   
> All'inserimento manuale di una nuova *Scheda tecnica* viene proposto il *Tipo scheda tecnica* indicato nell'expander *Schede tecniche* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.   
>
> **Codice**: è il *Codice* della *Scheda tecnica* (dato obbligatorio).   
> Viene proposto in base a quanto previsto dal *Metodo di Codifica* associata al *Tipo scheda tecnica*.   
>
> **Revisione**: è la Revisione della *Scheda tecnica* (dato obbligatorio).   
L'informazione è modificabile se si stà creando una nuova *Scheda tecnica* altrimenti è di sola lettura; si può variare in modo pilotato dal sistema usando il pulsante *Crea nuova revisione* che incrementano il precedente valore di *Revisione* di una unità.   
>
> **Descrizione**: è la descrizione della *Scheda tecnica*.   
> **Nome commerciale**: è la descrizione commerciale della *Scheda tecnica*.   
> **Del cliente**: è la ragione sociale del *Cliente*. Le *Proprietà* sono personalizzate per il *Cliente*/*Articoli associati*.    
> **Data richiesta/Richiesta da**: solo i riferimenti in quale data e qual'è la persona che ha richiesto la creazione della *Scheda tecnica*.    
>
> **Validità: Inizio/Fine**: sono le date di inizio e di fine validità della *Scheda tecnica*.    
> Le date sono gestite automaticamente alla creazione di una nuova *Revisione* della *Scheda tecnica*.
>
> **Responsabile**: è il *Dipendente* responsabile della *Scheda tecnica*.   
> All'inserimento manuale di una nuova *Scheda tecnica* viene proposto il *Responsabile* indicato nell'expander *Schede tecniche* del tabulatore *Generale* presente nei *Parametri Controllo articoli*.   
>
> **Origine dati scheda**: expander dove è possibile inserire:   
>
>> **Tipo/Scheda origine/Rev.**: contiene i riferimenti della *Scheda tecnica di origine* (*Tipo scheda*, *Codice* e *Revisione*).   
>> **Motivo della revisione**: una breve descrizione del motivo che ha condotto alla revisione.   
>> L'informazione può essere variata se la *Scheda tecnica* è ancora in corso di validità.   
>
> **Note**: annotazioni libere.   


### Attributi scheda
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Scheda tecnica*.   
Vengono ereditati dagli *Attributi Scheda tecnica* associati al *Tipo scheda tecnica*.   


### Proprietà
Contiene le *Proprietà* degli *Articoli* o *Attributi articolo* della *Scheda tecnica*.
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di visualizzazione/importanza della *Proprietà*.   
> **Tipo prova**: è il codice della *Proprietà*.   
> **Descrizione tipo prova**:  è la descrizione della *Proprietà*. L'informazione è di sola lettura.   
> **Descrizione**: è la descrizione della *Proprietà* compilabile.   
> **Riferimento piano di controllo standard**: è un campo descrittivo che contiene i riferimenti a codifiche di prove riconosciute globalmente.   
> **Strumento di misura**: è la *Categoria dello strumento di misura* da utilizzare per poter rilevare i *Valori* espressi nella *Proprietà*.   
> **Prova da rilevare**: indica se la *Proprietà* è una *Prova da rilevare*.   
Alla creazione di un *Piano di controllo* dalla *Scheda tecnica* la *Proprietà* verrà copiata nelle *Prove da rilevare*.   
> **Unità di misura**: è l'*Unità di misura* con cui si esprimono il *Valore nominale* e i *Limiti minimo e massimo* se espressi in valore e non in percentuale.   
> **Tipo valore**: è il *Tipo valore* con cui esprimere il *Valore nominale*; i *Tipi valore* possibili sono: *Numerico*, *Si/No* o *Testo*.   
> **Tipo limite**: abilitato se il *Tipo valore* è *Numerico*, è il *Tipo limite* che piloterà l'abilitazione dei *Limiti* e dei valori di *Tolleranza*.   
> **Valore nominale**: è il valore teorico atteso della *Proprietà*.   
> **Limite minimo**: limite minimo consentito rispetto al *Valore nominale*.   
> **L.min.(toll-)**: è il limite di tolleranza negativa sul limite minimo.   
> **L.min.(toll+)**: è il limite di tolleranza positiva sul limite minimo.   
> **Limite massimo**: limite massimo consentito rispetto  al *Valore nominale*.   
> **L.max.(toll-)**: è il limite di tolleranza negativa sul limite massimo.   
> **L.max.(toll+)**: è il limite di tolleranza positiva sul limite massimo.   
> **%**: indica se il *Limite minimo* e il *Limite massimo* sono espressi in percentuale.   
> **Data inizio validità**: è la data di inizio validità della *Proprietà*.   
> **Data fine validità**: è la data di fine validità della *Proprietà*.   
> **Stampabili**: indica se le informazioni sono stampabili o meno nei reports: *Scheda tecnica* e *Scheda Prodotto*.   
> **Note**: annotazioni libere.   

I Limiti di tolleranza positiva e negativa sui limiti minimi e massimi sono informazioni abitualmente dati dall'errore dello *Strumento di misura* utilizzato per rilevare i valori. In questa versione sono inseribili solo manualmente dall'operatore.   


### Norme e Leggi
Contiene i riferimenti a *Normative* e/o *legislazioni* applicabili alle *Proprietà* della *Scheda tecnica*.
L'elenco si compone delle seguenti informazioni:   
> **Tipo**: è il *Tipo norma e legge* associata alla *Norma e Legge* indicata. L'informazione è di sola lettura.   
> **Codice**: è la *Norma e Legge*.   
> **Descrizione**: è la descrizione della *Norma e Legge* indicata. L'informazione è di sola lettura.   
> **Note**: annotazioni libere.   


### Clienti
Contiene i *Clienti* interessati agli *Articoli* con *Proprietà* simili ed elencati nei due rispettivi elenchi.   
L'elenco si compone delle seguenti informazioni:   
> **Cliente**: è la ragione sociale del *Cliente*. Le *Proprietà* sono personalizzate per i *Clienti*/*Articoli associati*.   
> **Note**: annotazioni libere.   


### Articoli associati
Contiene gli *Articoli* con caratteristiche simili ed elencate nell'elenco delle *Proprietà*.
L'elenco si compone delle seguenti informazioni:   
> **Classe**: è la classe dell'*Articolo*.   
> **Codice articolo**: è il codice dell'*Articolo*.   
> **Descrizione articolo**: è la descrizione dell'*Articolo*.   
> **Variante**: è il codice della *Variante articolo*.   
> **Descrizione variante**: è la descrizione della *Variante articolo*. L'informazione è di sola lettura.   
> **Tipo dichiarazione**: è il *Tipo di dichiarazione* (di non responsabilità) che verrà proposta nel report *Scheda Prodotto*.   
> **Note**: annotazioni libere.   


### Attributi articolo
In alternativa all'elenco degli *Articoli associati* è possibile inserire caratteristiche (in formato [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata)) per cui le *Proprietà* della *Scheda tecnica* sono valide.   


### Schede correlate
In questo elenco è possibile visualizzare le *Schede tecniche* duplicate con rintracciabilità dalla *Scheda* visualizzata.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Scheda tecnica* selezionata.   


### Revisioni
In questo elenco è possibile visualizzare lo storico delle *Revisioni* antecedenti alla *Schede tecniche* visualizzata.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Scheda tecnica* selezionata.   


### Documenti collegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   