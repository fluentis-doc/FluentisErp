---
title: Controlli articolo
sidebar_position: 3
---

La gestione è possibile eseguirla dalla **Ricerca Controlli articolo**.   


:::important A cosa serve
I Controlli articolo permettono la registrazione delle misurazioni effettuate, dei valori rilevati e la conseguente indicazione della conformità o meno del materiale, semilavorato o prodotto controllato.   
Elenchiamo i documenti dai quali è possibile effettuare dei controlli sugli articolo: Ricevimenti merce, D.D.T. e Fatture di acquisto, Dichiarazioni di produzione, Fasi ordini di produzione, Rientri da Conto lavoro e Movimentazioni di carico.   
I controlli possono essere specifici per: Lotto articolo, Serial number o per Unità di carico.   
Tramite la soluzione M.E.S., integrata in Fluentis, è possibile inserire le suddette informazioni richieste in modo diretto e semplificato.   

A standard sono disponibili le reportistiche di:   
> **Elenco Controlli articolo per Articolo**:  elenco dei *Controlli articolo* raggruppati per: *Articolo*.   
> **Elenco Controlli articolo per Cliente/Fornitore**:  elenco dei *Controlli articolo* raggruppati per: *Cliente/Fornitore*.   
> **Elenco Controlli articolo per Tipo documento**:  elenco dei *Controlli articolo* raggruppati per: *Tipo documento*.   
> **Etichetta Articolo C e NC**: etichetta che riporta i riferimenti *Articolo* e dettaglio *Lotto* o *Serial number* controllato.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate dei *Controlli articolo* visualizzati.   

### ![](/img/neutral/common/tick.png) Ricerca Piano di controllo

Premendo questo pulsante si ricerca il *Piano di controllo* da associare ai *Controlli articolo* selezionati. Se, per il *Controllo articolo* esaminato:
- sono presenti delle *Prove* con dei valori già rilevati per quei *Controlli* non verrà fatta alcuna ricerca;   
- tutte le *Prove* non sono state ancora rilevate, le *Prove* verranno sostituite con quelle associate al *Piano di controllo* trovato nella ricerca.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />   


### ![](/img/neutral/common/update.png) Aggiorna

Premendo questo pulsante si effettua un aggiornamento di tutte le informazioni presenti nei *Controlli articolo* visualizzati.   


### ![](/img/neutral/common/delete.png) Cancella

Premendo questo pulsante si eliminano tutte le righe selezionate dall'elenco principale dei *Controlli articolo*.   


### Registra magazzino

Il pulsante è abilitato solamente se, dall'elenco *Prove*, è stata selezionata almeno una *Prova*, non ancora *Registrata*, con valori rilevati e con almeno *Quantità confermata* o *Quantità non conforme* dichiarate.   
Premendo questo pulsante si effettuano le registrazioni di magazzino, in data odierna, per l'*Articolo* associato al *Controllo* per la *Quantità confermata* e/o *Quantità non conforme* dichiarata, per il *Magazzino* e *Causali* specificate.   


### Ripristina registrazione

Il pulsante è abilitato solamente se, dall'elenco *Prove*, è stata selezionata almeno una *Prova* già *Registrata*.   
Premendo questo pulsante si ripristinano le registrazioni di magazzino associate alla riga *Prova*.   


### ![](/img/neutral/common/duplicate.png) Duplica prova

Il pulsante è abilitato solamente se, dall'elenco *Prove*, è stata selezionata una sola riga *Prova*.   
Tutte la informazioni della *Prova* di origine vengono duplicate in una nuova *Prova* accodata in *Sequenza* alle *Prove* già esistenti.   


## Gestione dati


### Dati di testata
I dati di testata si dividono in due diverse aree:   
- a sinistra l'elenco dei *Controlli articolo* richiesti dalla *Ricerca Controlli articolo*;   
- a destra i riferimenti del documento di origine dei controlli.   

L'elenco dei *Controlli articolo*, di sola lettura se non diversamente specificato, si compone delle seguenti informazioni:   
> **Classe**: è la classe dell'*Articolo* della riga documento controllata.   
> **Codice articolo**: è il codice dell'*Articolo* della riga documento controllata.   
> **Dettaglio articolo**: è il tipo di dettaglio da controllare dell'*Articolo* e può assumere i seguenti valori: *Nessuno*, *Lotto*, *S.N.* o *UDC*.   
> **Riferimento dettaglio articolo**: è il dettaglio articolo richiesto: *Nessuno*, *Codice lotto*, *Codice Serial Number* o *Codice Unità di carico*.   
> **Tipo controllo**: e il codice del *Tipo controllo articolo*.   
> **Numero**: e il numero del *Controllo articolo*.   
> **Data inserita**: e la data in cui è stato inserito il *Controllo articolo*.   
> **Piano di controllo utilizzato**: è il riferimento del *Piano di controllo* associato.   
> Il dato può essere variato se la ricerca ha trovato più *Piani di controllo* associabili.   
> **Descrizione piano di controllo**: è la descrizione del *Piano di controllo*.   
> **Data analisi**: è la data in cui si effettua l'analisi. Il dato può essere variato.   
> **Esito**: è l'esito complessivo delle prove. Viene attribuito manualmente dall'operatore. Il dato può essere variato.   
> **Data esito**: e la data in cui è stato attribuito l'*Esito* complessivo delle *Prove*. Il dato può essere variato.   
> **Approvato**: indica l'*Approvazione* sui controlli effettuati.   
> All'atto dell'approvazione la *Data approvazione* viene automaticamente proposta pari alla data odierna e può essere variata, tutte le informazioni delle *Prove* non possono essere più modificate.   
> **Data approvazione**: è la data in cui è stata effettuata l'*Approvazione* complessiva delle *Prove*.   
> All'atto dell'inserimento della data viene automaticamente impostato il flag *Approvata*.   
> **Unità di misura**: è l'*Unità di misura* della *Quantità documento* della riga documento controllata.   
> **Quantità documento**: è la *Quantità documento* della riga documento controllata.   
> **Descrizione articolo**: è la descrizione dell'*Articolo* della riga documento controllata.   
> **Descrizione tipo controllo**: è la descrizione del *Tipo controllo articolo*.   
> **Note**: annotazioni libere. Il dato può essere variato.   

L'area dove sono presenti i riferimenti del documento di origine dei controlli varia a seconda del *Tipo documento*.   
I riferimenti per ogni *Tipo documento* sono:   
> **Ricevimento merci**: *Fornitore*, *Tipo ricevimento*, *Numero ricevuta*, *Data ricevimento* e *Riga*.   
> **DDT di acquisto**: *Fornitore*, *Tipo bolla consegna*, *Numero documento*, *Numero interno*, *Data* e *Riga*.   
> **Fatture di acquisto**: *Fornitore*, *Tipo fattura acquisto*, *Numero documento*, *Numero interno*, *Data* e *Riga*.   
> **Dichiarazioni di produzione**: *Cliente*, *Tipo ordine*, *Anno/Ordine/Lotto*, *Fase/Sottofase*, *Numero* e *Data segnalazione*.   
> **Fasi ordine di produzione**: *Cliente*, *Tipo ordine*, *Anno/Ordine/Lotto*, *Fase/Sottofase* e *Centro di lavoro*.   
> **Rientri di conto lavoro**: *Fornitore*, *Tipo rientro*, *Numero documento*, *Data* e *Riga*.   
> **Movimentazioni di carico**: *Cliente/Fornitore*, *Magazzino*, *Causale*, *Numero*, *Data* e *Numero movimento*.   


### Prove
Contiene l'elenco delle *Prove* per l'*Articolo*.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della *Prove*.   
> **Registrato**: indica che, per la *Prova*sono state effettuate le registrazioni di magazzino, in data odierna, per l'*Articolo* associato al *Controllo* per la *Quantità confermata* e/o *Quantità non conforme* dichiarata, per il *Magazzino* e *Causali* specificate. L'informazione è di sola lettura.   
> **Tipo prova**: è il codice della *Prova*.   
> **Descrizione tipo prova**:  è la descrizione della *Prova*. L'informazione è di sola lettura.   
> **Prova distruttiva**: indica se la prova è di tipo distruttiva. L'informazione è di sola lettura.   
> **Prova interna**: indica se la *Prova* viene rilevata internamente o presso un laboratorio esterno.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettuerà la prova. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Data invio**: è la data in cui si è inviato il materiale necessario ad effettuare la *Prova* presso il *Laboratorio esterno*. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Unità di misura della quantità**: è l'*Unità di misura* della *Quantità documento* della riga documento controllata. L'informazione è di sola lettura.   
> **Quantità documento**: è la *Quantità documento* della riga documento controllata. L'informazione è di sola lettura.   
> **Categoria Strumento di misura**: è la *Categoria dello strumento di misura* da utilizzare per poter rilevare i *Valori* espressi nella *Prova*.   
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
> **Tipo controllo prova**: è il *Tipo controllo* da effettuare sulla *Prova*.   
> **Frequenza**: annotazioni libere relative alla frequenza di campionatura.   
> **Numero rilevazioni**: è il numero di rilevazioni valori minime suggerite da effettuare.   
>
> **Data inizio**: e la data di inizio della *Prova*.  
> **Data fine**: e la data di fine della *Prova*.  
> **Valore rilevato**: è il valore puntuale rilevato della *Prova* che ne determinerà l'*Esito*.   
> All'inserimento del *Valore rilevato*:   
> - in *Rilevato da* viene proposto il *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato da utente* viene proposto l'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Esito* viene proposto il risultato della *Prova* e modificabile successivamente.   
> - in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
>
> **Media valori rilevati**: è la media dei valori rilevati nella *Rilevazione multipla valori* della *Prova*.   
> **Strumento di misura**: è lo *Strumento di misura* utilizzato per rilevare il valore puntuale della *Prova*.   
> **Rilevato da**: è il *Dipendente* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari al *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato da utente**: è l'*Utente A.R.M.* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Valore rilevato manualmente**: indica se il *Valore rilevato* è stato inserito manualmente. L'informazione è di sola lettura.   
> **Esito**: è il risultato positivo o negativo della *Prova*.   
> All'inserimento dell'*Esito* in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
> All'inserimento del *Valore rilevato* o della *Media valori rilevati* questa informazione viene proposta sulla base del *Tipo valore*, *Tipo limite*, *Valore nominale*, *Limiti* e *Tolleranze* inserite.   
> **Data esito prova**: è la data di attribuzione dell'*Esito*.   
> All'inserimento dell'*Esito* questa informazione viene proposta pari alla data odierna e modificabile successivamente.   
> **Descrizione sul risultato**: annotazioni libere sull'argomento.   
> **Esito rilevato manualmente**: indica se l'*Esito* è stato inserito manualmente. L'informazione è di sola lettura.   
>
> **Quantità conforme**: .   
> **Quantità non conforme**: .   
> **Magazzino**: è il *Magazzino* dal quale si prelevano gli *Articoli* controllati.   
> **Causale scarico articoli conformi**: è la *Causale di scarico* utilizzata per movimentare gli *Articoli* controllati risultati *Conformi*.   
> **Causale scarico articoli non conformi**: è la *Causale di scarico* utilizzata per movimentare gli *Articoli* controllati risultati *Non conformi*.   
> **Ubicazione**: è l'*Ubicazione* dal quale si prelevano gli *Articoli* controllati.   
>
> **Stampabile**: indica che la *Prova* è stampabile.   
> **Approvato**: indica che i valori e l'*Esito* attribuito alla *Prova* sono stati *Approvati*.   
> All'atto dell'approvazione la *Data approvazione esito* viene automaticamente proposta pari alla data odierna e può essere variata, tutte le informazioni della *Prova* non possono essere più modificate.   
> **Data approvazione esito**: è la data in cui è stata effettuata l'*Approvazione* della *Prova*.   
> All'atto dell'inserimento della data viene automaticamente impostato il flag *Approvato*.   
> **Operatore**: è l'*Utente A.R.M.* che ha *Approvato* la *Prova*. L'informazione è di sola lettura.   
> **Descrizione approvazione**: annotazioni libere sull'argomento.   
> **Note**: annotazioni libere.   
>
> **Descrizione categoria Strumento di misura**: è la descrizione della *Categoria strumento di misura* da utilizzare. L'informazione è di sola lettura.   
> **Descrizione Strumento di misura**: è la descrizione dello *Strumento di misura* utilizzato. L'informazione è di sola lettura.   
> **Descrizione Magazzino**: è la descrizione del *Magazzino* dal quale si prelevano gli *Articoli* controllati. L'informazione è di sola lettura.   
> **Descrizione causale scarico articoli conformi**: è la descrizione della *Causale di scarico* utilizzata per movimentare gli *Articoli* controllati risultati *Conformi*. L'informazione è di sola lettura.   
> **Descrizione causale scarico articoli non conformi**: è la descrizione della *Causale di scarico* utilizzata per movimentare gli *Articoli* controllati risultati *Non conformi*. L'informazione è di sola lettura.   

Le informazioni di: *Tipo prova*, *Prova interna*, *Laboratorio esterno*, *Categoria Strumento di misura*, *Unità di misura valori rilevati*, *Tipo valore*, *Tipo limite*, *Valore nominale*, *Limiti ...*, *Tolleranze ...*, *%*, *Tipo controllo prova*, *Frequenza* e *Numero rilevazioni*, sono di sola lettura se la *Prova* proviene dal *Piano di controllo* altrimenti possono essere modificabili per dare la possibilità di aggiungere maualmente ulteriori *Prove* non previste del *Piano di controllo*.


#### Rilevazione multipla valori
Contiene l'elenco delle rilevazioni fatte per una singola *Prova*.   
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


#### Attributi prove effettuate
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per la singola *Prova*.   


#### Configurazione della prova
Contiene gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necessari agli operatori per preparare tutti gli strumenti necessari per poter iniziare una determinata prova. Possono essere considerate delle configurazioni necessarie, informazioni operative propedeutiche all'esecuzione della prova.   
Vengono ereditati dalle *Configurazioni prove pianificate* presenti nelle *Prove pianificate* del *Piano di controllo* o dai *Parametri di configurazione prova e strumento di misura* presenti nei *Tipi prova*.   


#### Documenti allegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


### Attributi controlli
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Controllo*.   
Vengono ereditati dagli *Extra data* associati al *Tipo controllo articoli*.   


### Attributi articolo
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per l'*Articolo* controllato.   
Vengono ereditati dagli *Extra data* associati all'*Articolo*.   


### Documenti collegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   
