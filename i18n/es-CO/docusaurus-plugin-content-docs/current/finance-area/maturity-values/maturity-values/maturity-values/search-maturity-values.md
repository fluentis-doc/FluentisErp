---
title: Ricerca Partite
sidebar_position: 2
---

Questa maschera permette di ricercare la partite tramite i campi presenti nella testata, che rappresenta l'area di filtro per i dati che saranno proposti, e di entrare in modifica di ogni singola partita con un doppio click del mouse.

Ulteriori campi utili per il filtro di ricerca sono disponibili aprendo gli **Expander** presenti nella testata.finance-area/maturity-values/maturity-values/image03.png

Per default vengono proposte le partite aperte (essendo all'apertura della maschera compilato il campo **Stato** del filtro con la voce Partita Aperta). E' possibile visualizzare tutte le partite semplicemente cancellando la voce dal campo del filtro in modo da non filtrare una tipologia in particolare.

Eseguendo la ricerca (comando **Ricerca** nella Ribbon Bar) saranno riportate le partite con tutte le informazioni relative.

**Per i campi di dettaglio visualizzati si rinvia al  [Glossario](/docs/guide/common/glossary/glossary-intro).**

**CAMPI SPECIFICI DI TESTATA:**

**Partite aperte al**: rappresenta la data di riferimento a lla quale considerare aperta la partita (esempio oggi potrebbe essere chiusa ma rappresentandola alla data di ieri potrebbe essere rappresentata come aperta inquanto non era ancora stata pagata). Per utilizzare questo campo togliere lo stato Aperta dal filtro principale **Stato**.

**Con effetti a scadere**: in maniera analoga alle stampe del modulo permette di includere anche quelle partite che sarebbero chiuse ma sono state trasformate in effetti attivi (es. RiBa) e dunque sono interessanti inquanto non ancora incassate definitivamente. Per utilizzare questo campo togliere lo stato Aperta dal filtro principale **Stato**.


**Mostra Cauzioni**: campo che rende visibili i depositi cauzionali incassati da clienti. Questi particolari incassi sono rappresentati da partite aventi al loro interno (form di gestione partite, il campo **Conto Cauzione** compilato) Quando vengono chiuse da una registrazione contabile di incasso, nella sezione Libro giornale, al posto di essere movimento come di consueto il conto del cliente, viene movimentato il *Conto Cauzione* presente dentro la partita che viene incassata.

In particolare per ogni riga corrispondente alla partita è presente un comando (+) che permette di visualizzare delle informazioni ulteriori e inizialmente nascoste: si tratta degli eventuali pagamenti collgati alla partita chiusa o parzialmente aperta.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**CAMPI SPECIFICI PER LA FORM IN OGGETTO**:

**In pagamento**: indica che la partita è già stata inserita in una distinta di pagamento fornitori, ma la distinta di pagamento  non è ancora contabilizzata e quindi la chiusura della partita non è ancora avvenuta.

**Contab.**: indica che la partita è legata ad una registrazione contabile.

**Non pagabile**: indica che la partita è stata bloccata dall'utente affinchè non sia pagabile. Il blocco può essere impostato direttamente all'atto della creazione oppure in un secondo tempo e sia dalla ** [tab Partite](/docs/finance-area/ledger-records/records/ledger-record) ** della registrazione contabile che genera la partita, sia entrando in modifica nella partita stessa dalla form in commento.

**Ribbon bar**:



| Funzione | Significato |
| --- | --- |
| Ricerca | Avvia la ricerca dele partite secondo i dati inseriti nel filtro |
| Nuova Partita | Permette di inserire una nuova partita manualmente |
| Modifica partita | Entra nella form di modifica della partita selezionata 'Gestione partite' (in alternativa al doppio click del mouse sulla riga da modificare) |
| Visualizza | Entra nella form 'Gestione partite' in modalità di sola visualizzazione, non sarà posssibile salvare modifiche |
| Cancella partite selezionate | Cancella la riga selezionata |
| Cancella pagamenti selezionati | Permette di cancellare i pagamenti collegati alle partite (visibili tramite il tasto + a sinistra delle partite) |
| Cambia la posizione partite | Fa comparire una form di ricerca della posizione partita permettendo di attribuire lostato selezionato alla partita senza dover entrare nella form di modifica 'Gestione partite' |
| Aggiorna lo stato delle partite | Esegue un refresh dello stato delle partite per una corretta visualizzazione. |
| Suddivisione partite | Apre una form pop-up che permette di suddividere la partita selezionata in più partite di importo e scadenza desiderati. **Chiaramente la somma delle partite risultanti deve coincidere con l'importo della partita di partenza.**L'importo della partita iniziale viene proposto nel campo **Suddividi,** a questo punto si devono inserire nelle righe della griglia gli **importi** e le **date di scadenza** delle partite risultanti (esempio da una si vogliono far diventare due o tre) ed il programma si occuperà di eseguire l'operazione in automatico. |
| Modifica registrazione | Permette di entrare direttamente in modifica della registrazione contabile collegata alla partita selezionata. Se la partita selezionata non è collegata ad una registrazione contabile il pulsante risulterà disabilitato. |


:::tip[NOTA: Aggiorna lo stato delle partite]
Dalle versioni Fluentis2021 e successive, non sono più presenti triggers e stored procedures che eseguono procedure di calcolo o ricalcolo. Una di queste procedure eseguite a livello di database era il ricalcolo automatico dello stato delle partite, in particolare tipicamente la partita **Scaduta** in luogo della generica partita Aperta. E' pertanto necessario servirsi del pulsante Aggiorna lo stato delle partite per eseguire il ricalcolo dello stato e la corretta visualizzazione di partite (non movimentate da alcun pagamento, anche parziale, il quale le aggiornerebbe nello stato) scadute.

Si ricorda che volendo ignorare lo stato *Scaduto* a scopo di filtro, è possibile utilizzare i filtri in testata form per data scadenza ottenendo lo stesso risultato.

Per gli utenti che dispongono del tool ***Supervisor***, è possibile abilitare il task codice FI_MaturitiesOverdueStatusFix
che setta lo stato *Scaduto* su partite con residuo != 0 e data scadenza < oggi
:::



