---
title: Articoli
sidebar_position: 3
---

In questa tab è possibile inserire gli articoli del progetto. Il pulsante nella ribbon bar ![](/img/neutral/common/new.png) permette di inserire una nuova riga articolo, mentre il pulsante ![](/img/neutral/common/delete.png) permette di cancellarne. Per costruire lo scheletro del pogetto, sono disponibili i pulsanti specifici:
![](/img/neutral/common/new-child.png)  Nuovo figlio: permette di inserire una riga progetto figlia della riga selezionata;    
![](/img/neutral/common/new-brother.png) Nuovo fratello: permette di inserire una riga progetto nello stesso livello della riga selezionata;
![](/img/neutral/common/wbs.png)  Sostituisci il numero WBS: permette di incorporare al Numero WBS delle righe anche il Numero del progetto;
per visualizzare lo scheletro del progetto, sono disponibili i pulsanti:
![](/img/neutral/common/implode.png)  Implodi: consente di nascondere le righe dello scheletro;
![](/img/neutral/common/implode.png)  Esplodi: consente di visualizzare le righe.

Le caratteristiche dell’articolo vanno inserite nella **tab Attività** in basso:

**Numero riga/Numero WBS**: contiene i numeri della riga e della WBS e viene impostato automaticamente, anche se è liberamente modificabile;       
**Tipo Nodo**: indica se la riga è un **Root Node**(nodo principale), un **Activity Node**(relativo alle attività) o un **Work Package Node**(nodo finale di progetto, l’unico che può contenere dei codici articolo specifici);       
**Tipo riga**: indica la tipologia di articolo tra Codificato, Non codificato, Spese o Note (quest’ultimo di default);      
**Articolo**: riporta Classe, Codice e Descrizione dell’articolo eventualmente selezionato;        
**Descrizione**: contiene la descrizione dell’articolo di default se selezionato, ma può essere liberamente modificata;           
**Tipo Lavoro**: identifica nell’ambito organizzativo un livello di progetto non ancora quotato (visibile nelle offerte, per separarlo dalle attività facenti parte del contratto), quindi indica un nuovo lavoro che ancora non è stato gestito dal project manager ma che proviene dalle varie operazioni del progetto;
**Articolo preventivo**:           
**Quantità/UM/Prezzo**: contiene eventuali dati dell’articolo selezionato;        
**Costo materiale/Costo totale**: è possibile indicare eventuali costi;          
**Costo risorse**: è possibile indicare un eventuale costo per le risorse;              
**IVA**: indica l’IVA da applicare;             
**Tipo fatturato vendite**: indica il fatturato vendite dell’articolo;            
**Livello non visibile**: con questo flag il livello viene considerato concluso, quindi a valle il ramo del progetto non potrà essere utilizzato per associare ulteriori attività;                       
**Categoria di attività**: indica l’eventuale categoria di attività, impostata in **Tabelle > Gestione Progetti > Categoria di Attività**.

I dati riportati inseriti verranno inseriti nelle righe del progetto e si aggiorneranno man mano che verranno compilate anche le altre tab.
Le informazioni si aggregano a livello superiore, quindi il Root Node conterrà la sistesi dei suoi rami figli.

Nella tab Articolo troviamo poi la **tab Pianificazione servizio**, i cui dati da riportare per la riga articolo selezionata sono:

**Data inizio/Data fine**: indicano le date pianificate per l’attività;          
**Da data Milestone/A Data Milestone**:               
**Lavoro completato(perc.)/Stima**: è possibile indicare una percentuale di avanzamento lavori o una relativa stima;              
**Tipo richiesta intervento**: è possibile indicare una tipologia di richiesta intervento collegata che verrà usata nella generazione di nuove richieste intervento legate alla riga progetto;              
**Tipo intervento pianificato**: è possibile indicare una tipologia di intervento pianificato collegato, che verrà usato nella generazione di nuovi interventi pianificati legati alla riga progetto;    
**Anagrafica impianti**: è possibile collegare un impianto, il quale conterrà per esempio una serie di informazioni legate al progetto di manutenzione dello stesso;            
**Manager**: è possibile indicare una risorsa progetto;          
**Chiuso forzatamente**: è possibile indicare un’eventuale data di chiusura forzata del progetto;               
**Evase forzatamente**:                         
**Criteri di fatturazione**: è possibile scegliere il criterio di fatturazione del progetto scegliendo di non fatturare alcune attività, effettuando quindi un controllo a vale; la scelta è tra Tutte le attività o Attività contrattuali; scegliendo quest’ultima opzione, verranno considerate fatturabili solo la Quantità di attività prevista nel tab Attività, mentre le attività necessarie eccedenti non verranno fatturate;               
**Attività fatturabile**: se il flag è presente, indica che l’attività è fatturabile; l’attivazione di questo flag in automatico dipende dal Template inserito, oppure dall’anagrafica della Categoria di attività inserita nella tab Attività.                           

Nella **tab Risorse** è possibile allocare le risorse per la riga articolo selezionata:

**Data inserimento**: viene copilata con la data di inserimento della risorsa nel progetto;           
**Risorsa**: contiene la risorsa, precedentemente codificata;              
**Centro aziendale**: viene assegnato il centro aziendale collegato alla risorsa, ma è possibile modificarlo;               
**Unità di misura**: contiene l’unità di misura per la quantificazione del tempo giornaliero della risorsa;                
**Quantità**: indica le ore giornaliere;             
**Costo unitario**: indica il costo della risorsa per singola unità di misura;              
**Data inizio**: contiene la data nella quale verrà stanziata la risorsa, con l’orario di inizio lavorativo;                 
**Ora inizio pausa**: contiene l’eventuali data e ora di inizio della pausa;             
**Ora fine pausa**: contiene l’eventuali data e ora di fine della pausa;                 
**Data fine**: contiene la data nella quale verrà stanziata la risorsa, con l’orario di termine lavorativo;                               
**Tempo effettiva**: è un campo calcolato in base agli orari delle colonne precedenti, che modifica anche il campo Quantità dello stesso valore;       
**Note**: è possibile inserire eventuali note;             
**Tipo Richiesta intervento**: è possibile inserire un’eventuale [richiesta d’intervento] collegata, con le sue caratteristiche, come la Descrizione e il Numero.         

Ogni riga di questa griglia conterrà una giornata lavorativa della risorsa: il numero delle giornate lavorative è stato indicato nella tab Attività degli articoli. 

Il pulsante specifico della ribbon bar ![](/img/it-it/project-management/projects/resources-navigator.png)
 Navigatore risorse permette di andare a verificare la disponibilità delle varie risorse e prenotare le giornate. Si aprirà una finestra; le eventuali date che si prenotano vengono riportate nella tab Risorse e vanno a incidere sui costi del progetto. 

Con il pulsante ![](/img/neutral/common/new-visit-report.png) Creazione Richiesta di intervento è possibile, selezionando una Risorsa, creare direttamente la Richiesta di intervento collegata al progetto o effettuarne il rollback con il pulsante   Rollback Richiesta di intervento.

Nel **tab Materiali** vengono indicati i materiali necessari per l’avanzamento del progetto, con le relative caratteristiche degli articoli codificati. Il costo di questi materiali inciderà nella riga articolo Costo materiali. Il costo è proposto in base all'impostazione prevista nel campo "Tipo costo", il cui valore predefinito è impostabile nei parametri per progetto. Nel caso di "costo ultimo" o "costo medio" la data di riferimento è la data progetto. 
Da questa schermata è possibile creare per i Materiali direttamente una Richiesta di acquisto, tramite il pulsante nella ribbon bar **Creazione RDA**.









