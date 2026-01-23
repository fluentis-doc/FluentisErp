---
title: Articoli
sidebar_position: 3
---

Le righe del progetto possono essere inserite in una struttura monolivello, oppure in una struttura multilivello-gerarchica, in funzione delle configurazioni nel [Tipo progetto](/docs/configurations/tables/project-management/project-type). 

I dati relativi alle righe di progetto sono suddivisi in diverse tab, anche queste abilitate in funzione alla configurazione presente nel Tipo Progetto. 

Le righe di progetto possono essere aggiunte e gestite tramite appositi pulsanti nella ribbon bar.
**Nuovo Articolo** permette di inserire una nuova riga articolo, in coda alle altre righe se presenti; 
**Cancella Articoli** permette di cancellare la riga selezionata. 
Nel caso la struttura del progetto sia gerarchica-ad albero, sono disponibili i pulsanti specifici:
**Nuovo figlio**: permette di inserire una nuova riga progetto figlia della riga selezionata; 
Se la riga selezionata è di tipo Note, la riga figlia potrà avere come Tipo Riga qualsiasi tipologia (Codificata, Non codificata, Note, Spese);
Se la riga selezionata è di tipo Codificato/Non Codificato, la riga figlia potrà avere come Tipo Riga soltanto Note;    
**Nuovo fratello**: permette di inserire una nuova riga progetto nello stesso livello della riga selezionata; come indicato per il pulsante Nuovo Figlio, la nuova riga inserita come "Fratello" di quella già esistente, potrà avere il Tipo Riga in funzione del Tipo Riga del livello superiore (se presente). 
**Sostituisci il numero WBS**: effettua una rinumerazione di tutte le righe presenti, ponendo il numero progetto come radice e per ogni livello successivo aggiungendo un progressivo. Es. se il numero progetto è 5, il primo livello sarà 5.1, il sottolivello sarà 5.1.1 e così a seguire;
Per espandere tutta la struttura ad albero oppure per compattarla, sono disponibili i pulsanti:
**Implodi**: mostra solo le righe di primo livello del progetto;
**Esplodi**: mostra tutte le righe di tutti i livelli del progetto.



La tab principale è la **tab Attività** che contiene le informazioni principali sulla riga, come il tipo riga, eventuale articolo, articolo, quantità, UM e prezzo, visibilità, etc. 
Nel dettaglio la **tab Attività** contiene: 

**Numero riga/Numero WBS**: indica i numeri della riga e della WBS e viene impostato automaticamente, anche se è liberamente modificabile;       
**Tipo Nodo**: indica se la riga è un **Root Node**(nodo principale), un **Activity Node**(relativo alle attività) o un **Work Package Node**(nodo finale di progetto);       
**Tipo riga**: indica la tipologia di articolo tra Codificato, Non codificato, Spese o Note;      
**Articolo**: riporta Classe, Codice e Descrizione dell’articolo se selezionato;        
**Descrizione**: contiene la descrizione dell’articolo se selezionato, ma può essere liberamente modificata (con doppio click si apre un popup esteso che permette di inserire più comodamente del testo lungo);           
**Tipo Lavoro**: identifica nell’ambito organizzativo un livello di progetto non ancora quotato (visibile nelle offerte, per separarlo dalle attività facenti parte del contratto), quindi indica un nuovo lavoro che ancora non è stato gestito dal project manager ma che proviene dalle varie operazioni del progetto;
**Articolo preventivo**: se la riga progetto è stata generata da offerta, mostra il riferimento descrittivo all'offerta. 
**Quantità/UM**: indica la quantità di riga e l'unità di misura dell’articolo selezionato;        
Nell'expander è presente **Quantità alternativa/UM alternativa**: contiene  dati sull'unità di misura alternativa e la relativa quantità alternativa dell’articolo selezionato;
**Prezzo**: indica il prezzo di riga; se è selezionato un codice articolo, il valore può essere proposto con le logiche business standard; 
Nell'expander del Prezzo sono presenti: 
**Prezzo Unità di misura alternativa**: flag che indica se il prezzo è riferito alla Unità di misura alternativa;
**Prezzo manuale**: in caso di modifica manuale del prezzo, si abilita in automatico questo flag; 
**Listino**: listino di riferimento proposto secondo le logiche business standard; 
**Tipo Scaglione**: nel caso di scontistiche, indica lo scaglione utilizzato;
**Griglia sconti**: permette di configurare la griglia relativa agli sconti; 
**Costo materiale/Costo totale**: campi calcolati in automatico in funzione dei dati inseriti all'interno della tab Materiali, se abilitata; Il campo Costo totale riporta invece la somma dei costi indicati nei campi Costo Materiale e Costo risorse. I valori proposti sono liberamente modificabili dall'utente. 
**Costo risorse**: campo calcolato in automatico in funzione dei dati inseriti all'interno della tab Risorse se abilitata; il valore proposto è modificabile liberamente;             
**IVA**: indica l’IVA da applicare;             
**Tipo fatturato vendite**: indica il fatturato vendite dell’articolo;            
**Livello non visibile**: con questo flag il livello non viene più mostrato nella struttura gerarchica. Per visualizzare tutti i livelli nascosti, utilizzare il pulsante nella Ribbon Bar "Mostra/Nascondi"; si utilizza generalmente per non rendere più visibile e quindi associabile ad altri documenti uno specifico ramo del progetto;
**Categoria di attività**: indica l’eventuale categoria di attività che verrà proposta nei documenti dell'area progetti collegati alla riga di progetto. Le categorie attività sono impostabili da [Categoria](/docs/configurations/tables/project-management/task-category)



**Tab Pianificazione servizio** contiene le seguenti informazioni: 

**Data inizio/Data fine**: indicano le date pianificate per l’attività;
Se la riga in questione è una root oppure un nodo intermedio, la data non sarà modificabile, ma verrà valorizzata in funzione della data minima e della data massima delle righe sottolivello. 
Lla data verrà utilizzata anche per la costruzione del Gannt di progetto. 
>Le date verranno aggiornate in automatico a condizione di:
- flag attivo "Ricalcolo data inizio-fine" nella tabella dei [Tipi progetto](/docs/configurations/tables/project-management/project-type). 
- se l'unità di misura utilizzata in riga corrisponde all'unità di misura "Giorni" nei parametri progetto: modificando la quantità di riga, la data fine verrà ricalcolata
- inserendo nuove risorse con data anteriore a quella di inizio o successiva a quella di fine: le date di inizio-fine verranno aggiornate in automatico in base alla data minima e massima presente nella Tab risorse.   

**Da data Milestone/A Data Milestone**: indicano le date di milestone.               
**Lavoro completato(perc.)/Stima**: è possibile indicare una percentuale di avanzamento lavori o una relativa stima; se la riga di progetto viene richiamata in documenti che prevedono l'indicazione di questa percentuale (es. le righe di Servizi di un Intervento), la percentuale nel progetto verrà aggiornata in automatico dal documento con la percentuale più alta. 
**Tipo richiesta intervento**: è possibile indicare una tipologia di richiesta intervento collegata che verrà usata nella generazione di nuove richieste intervento legate alla riga progetto;              
**Tipo intervento pianificato**: è possibile indicare una tipologia di intervento pianificato collegato, che verrà usato nella generazione di nuovi interventi pianificati legati alla riga progetto;    
**Anagrafica impianti**: è possibile collegare un impianto, il quale conterrà per esempio una serie di informazioni legate al progetto di manutenzione dello stesso;            
**Manager**: è possibile indicare una risorsa progetto;          
**Chiuso forzatamente**: è possibile indicare un’eventuale data di chiusura forzata della riga di progetto;               
**Evase forzatamente**:  flag che indica la chiusura forzata della riga di progetto;                        
**Criteri di fatturazione**: è possibile scegliere il criterio di fatturazione del progetto scegliendo di non fatturare alcune attività, effettuando quindi un controllo a valle; le opzioni sono: 
- Tutte le attività 
- Attività contrattuali: verranno considerate fatturabili solo la Quantità di attività prevista nel tab Attività, mentre le attività necessarie eccedenti non verranno fatturate;               
**Attività fatturabile**: flag che indica se l’attività è fatturabile; viene proposto dalla Categoria di attività se inserita nella tab Attività; può essere impostato manualmente. Il flag viene propagato poi nei documenti dell'area progetti che lo prevedono.     
**Attività a valore aggiunto**: flag che indica se l’attività è a valore aggiunto. Il flag viene propagato poi nei documenti dell'area progetti che lo prevedono (come Interventi e dichiarazioni Attività) ed è utilizzato a scopo statistico.
**Connetti WBS**: permette di collegare una riga di progetto ad un'altra dello stesso progetto, in modo da gestire l'inizio delle attività relative alla riga di progetto, con delle regole precise stabilite nel campo successivo; 
**Tipi di connessione WBS**: fine-inizio / inizio-inizio / fine-fine / inizio-fine . A seconda della scelta, sarà possibile collegare documenti ad una riga di progetto, solo se la precedente rispetta la condizione stabilita: es. se la riga 1.1 e 1.2 sono collegate tra loro con fine-inizio, per poter collegare documenti alla riga 1.2 sarà necessario che la riga 1.1 abbia la Percentuale di Lavoro completato = 100% , altrimenti si verrà bloccati da un messaggio. 

Nella **tab Risorse** è possibile allocare le risorse per la riga articolo selezionata:

**Data inserimento**: viene copilata con la data di inserimento della risorsa nel progetto;           
**Risorsa**: contiene la risorsa, precedentemente codificata nell'apposita area [Risorse](/docs/project-management/registers/resources-management/new-resource.md).  ;              
**Centro aziendale**: viene assegnato il centro aziendale collegato alla risorsa, ma è possibile modificarlo;               
**Unità di misura**: contiene l’unità di misura per la quantificazione del tempo giornaliero della risorsa;                
**Quantità**: indica le ore giornaliere;             
**Costo unitario**: indica il costo della risorsa per singola unità di misura;    
:::note[Nota]
Assegnando la risorsa nella riga di progetto, viene proposto il costo orario della risorsa nell’apposito campo. 
Il costo dipenderà anche dall’unità di misura: 
-	se l’UM è ora, il valore rimane invariato.
-	Se l’UM corrisponde ai giorni (impostazione nei Parametri Progetti), verrà fatta la conversione sulla base dell’Orario di lavoro impostato in anagrafica risorse. 
-	Se l’UM è diversa dai due casi precedenti, si cercherà il fattore di conversione, che se non presente darà messaggio di errore all’utente “Impossibile effettuare conversione del costo orario unitario risorsa con l’unità di misura della risorsa nel progetto. Costo della risorsa nel progetto non calcolato”
:::

:::note[Criteri ottenimento costi specifici in riga progetto]
Se la risorsa prevede un costo differenziato per le giornate di straordinario/festività etc, la ricerca del costo corrispondente verrà fatta con la seguente logica: 
1. La data di inizio inserita nella riga di progetto rientra in una delle giornate segnate nel Calendario dei giorni non lavorativi? 
>Se sì, verrà assegnato il valore impostato nel “Tipo costo: Festività” - Verrà comunque richiesta una notifica di conferma all’utente
2.	Se la data di inizio non dovesse rientrate nel Calendario dei giorni non lavorativi, si prosegue il controllo nella griglia di Giorni lavorativi previsti per la risorsa
>Se la data di inizio non rientra né nei festivi né nei giorni lavorativi per la risorsa, verrà chiesto di aggiornare con il costo marcato come “Default giorno non lavorativo” se presente. Nel caso non ci fosse un costo così marcato, verrà preso in alternativa il costo “Straordinario”. 
3. Se la data di inizio rientra in una di quelle lavorative ordinarie, viene verificato se: 
>rientra nel turno principale. 
>>Se il turno principale è marcato come “notturno”, viene chiesto di aggiornare con il costo notturno; nel caso non fosse notturno, viene considerato il costo di testata risorsa;
4. Se non rientra nel turno principale, viene verificato se rientra nel turno alternativo.
>se il turno alternativo ha un costo dedicato, viene considerato questo valore
>>se il turno alternativo è marcato come “notturno”, viene chiesto di aggiornare con il costo notturno; nel caso non fosse notturno, viene considerato il costo di testata risorsa;
:::

La data viene proposta in funzione alla Data Inizio se inserita nella tab "Pianificazione Servizio"; se già presente una riga Risorse con quella data, viene proposta la data subito successiva. Gli orari invece sono proposti in base al Turno principale impostato in anagrafica risorsa.
**Data inizio**: contiene la data nella quale verrà allocata la risorsa, con l’orario di inizio lavorativo;                 
**Ora inizio pausa**: contiene l’eventuali data e ora di inizio della pausa;             
**Ora fine pausa**: contiene l’eventuali data e ora di fine della pausa;                 
**Data fine**: contiene la data nella quale verrà allocata la risorsa, con l’orario di termine lavorativo;                               
**Tempo effettivo**: è un campo calcolato in base agli orari delle colonne precedenti;
**Note**: è possibile inserire eventuali note;             
**Tipo Richiesta intervento**: è possibile inserire un’eventuale [richiesta d’intervento] collegata, con le sue caratteristiche, come la Descrizione e il Numero.         

Ogni riga di questa griglia entrerà nel conteggio dei "Giorni Previsti" della riga del progetto, visibili nella griglia delle righe progetto. 

Il pulsante specifico della ribbon bar ![](/img/it-it/project-management/projects/resources-navigator.png)
 Navigatore risorse permette di andare a verificare la disponibilità delle varie risorse e prenotare le giornate. Si aprirà una finestra; le eventuali date che si prenotano vengono riportate nella tab Risorse e vanno a incidere sui costi del progetto. 

Con il pulsante ![](/img/neutral/common/new-visit-report.png) Creazione Richiesta di intervento è possibile, selezionando una Risorsa, creare direttamente la Richiesta di intervento collegata al progetto o effettuarne il rollback con il pulsante   Rollback Richiesta di intervento.

Nel **tab Materiali** vengono indicati i materiali necessari per l’avanzamento del progetto, con le relative caratteristiche degli articoli codificati. Il costo di questi materiali inciderà nella riga articolo Costo materiali. Il costo è proposto in base all'impostazione prevista nel campo "Tipo costo", il cui valore predefinito è impostabile nei parametri per progetto. Nel caso di "costo ultimo" o "costo medio" la data di riferimento è la data progetto. 
Da questa schermata è possibile creare per i Materiali direttamente una Richiesta di acquisto, tramite il pulsante nella ribbon bar **Creazione RDA**.

 Se il progetto è generato da un template, tutti i dati presenti verranno ereditati dal template. 

Nel **Tab Dati** sono presenti: 
**Origine Calcolo Costo o Ricavo**: nella griglia verranno proposti dal Tipo Progetto i codici di Costo o Ricavo da utilizzare per il calcolo Stato Avanzamento Lavori; è possibile impostare i valori manualmente. 
**Data Prevista consegna**: data di prevista consegna, attualmente valorizzata se la riga è stata generata da offerta/ordini cliente.
**Nomenclatura**: relativo alla nomenclatura dei codici intrastat, attualmente valorizzata se la riga è stata generata da offerta/ordini cliente.
**Note**: campo note generico;
**Marca**: è possibile associare una Marca se la gestione è prevista nella tabella [Marche](/docs/configurations/tables/logistics/brands).
**Commessa/Anno**: è possibile collegare la riga progetto ad un'altra riga progetto.
**Contatto CRM**: è possibile collegare la riga progetto ad un [Contatto CRM](/docs/crm/home-crm/contacts/new-contact.md).
**Tickets**: è possibile collegare la riga progetto ad un Ticket.
**Livello di servizio**: è possibile indicare un livello di servizio*
**Escludi WBS dal calcolo SAL**: se abilitato, la riga di progetto e TUTTI i documenti collegati a questa riga di progetto , verranno esclusi dalla procedura di calcolo Stato Avanzamento Lavori del progetto, indipendentemente dai codici di Costo o Ricavo configurati. 
**Centro Aziendale**: è possibile collegare la riga progetto ad un centro aziendale, che verrà propagato dove previsto nei documenti a cui la riga di progetto è collegata. 

Nel **Tab Agenti** è possibile indicare l'Agente Principale e gli Agenti collegati alla riga di progetto;

Nel **Tab Fatturazione** è possibile inserire le rate da fatturare relative al progetto, tramite la procedura [Creazione Fatture di vendita](/docs/project-management/projects/procedures/invoice-creation.md). 
Se compilata la Data "Chiuso Forzatamente" nella tab Pianificazione Servizio, le rate non verranno visualizzate nella procedura di creazione fatture. 
**Priorità**: viene assegnata la sequenza delle rate;
**Giorno**: indica il giorno a cui si riferisce la rata e che verrà utilizzato per i filtri di ricerca nella procedura [Creazione Fatture di vendita](/docs/project-management/projects/procedures/invoice-creation.md);
**Mese**: indica il mese a cui si riferisce la rata e che verrà utilizzato per i filtri di ricerca nella procedura [Creazione Fatture di vendita](/docs/project-management/projects/procedures/invoice-creation.md);
**Anno**: indica l'anno a cui si riferisce la rata e che verrà utilizzato per i filtri di ricerca nella procedura [Creazione Fatture di vendita](/docs/project-management/projects/procedures/invoice-creation.md);
**Percentuale**: è la percentuale utilizzata per il calcolo del prezzo da inserire in fattura. Se ad es. il prezzo della riga di progetto è 100, e percentuale è impostata a 30, in fattura troveremo il prezzo impostato a 30.
**Valore**: in alternativa alla percentuale, è possibile indicare un valore del prezzo da inserire i fattura. Se ad es. il prezzo della riga di progetto è 100, si possono inserire 2 righe con ciascuna il valore 50. In fattura troveremo il prezzo impostato a 50.
Si può compilare un solo campo tra Percentuale e Valore, mai insieme. Inoltre non viene effettuato nessun controllo sull'effettiva quadratura tra importo impostato in riga progetto e singole rate. 

Nel **Tab Extradata** è possibile inserire gli extradata per la riga di progetto. 

Nel **Tab Documenti Allegati** è possibile inserire allegati per la riga di progetto. 


Cliccando su una riga **tasto destro - Copia Elemento** è possibile copiare i dati di una riga di progetto con tutto il suo contenuto. 
Cliccando su un'altra riga in un'altra posizione **tasto destro - Incolla Elemento** è possibile incollare la riga copiata e tutto il suo contenuto. Verrà richiesto se incollare allo stesso livello, oppure come sottolivello. 

Selezionando una riga e utilizzando il bottone **Sposta WBS**, è possibile selezionare una riga e spostarla in un'altra posizione. Si aprirà un popup, con le opzioni "Inserisci come Nodo Fratello" o "Inserisci come Nodo Figlio" e la possibilità di selezionare la riga progetto di destinazione. 
La scelta ovviamente dovrà essere coerente con le regole sopra indicate sul Tipo Nodo.