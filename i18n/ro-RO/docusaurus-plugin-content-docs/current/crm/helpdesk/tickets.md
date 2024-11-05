---
title: Gestione ticket
sidebar_position: 1
---

Dalla maschera di ricerca Ticket è possibile visualizzare i ticket già inseriti. Generalmente la Gestione ticket viene utilizzata dal servizio aziendale di helpdesk.
Da questa maschera è possibile aprire in modifica o visualizzazione i ticket e crearne di nuovi.     
Inoltre, il pulsante della ribbon bar **Creazione offerte da Ticket** permette di creare delle [Offerte](/docs/sales/offers/new-offer/header) direttamente dai ticket selezionati. L'articolo/servizio inserito nel ticket diventerà una riga articolo dell'offerta e verranno riportati nell'Offerta anche gli altri dati inseriti nel ticket: Progetto, Cliente, Importi di riga (fare attenzione in questo caso se esistono listini validi per il cliente: l'offerta modificherà gli importi in base al listino associato al cliente). Questa procedura è presente anche all'interno dei singoli ticket.         

Cliccando *Nuovo* è possibile inserire un nuovo Ticket. La Gestione ticket si compone di due parti: la Testata e le tab Sottostanti, che andremo ad elencare.     

## Testata  

La testata contiene i seguenti campi.     
**Tipo/Anno/Numero**: questi dati vengono compilati automaticamente se all'Operatore è stato assegnato un Tipo ticket di default nei [Parametri per operatore del CRM](/docs/configurations/parameters/crm/ticket-parameters); il numero è progressivo.     
**Data creazione/Scadenza**: la data di creazione viene inserita in automatico con la data odierna; la data scadenza è un campo da inserire manualmente.     
**Data chiusura/Chiuso**: inserendo il flag Chiuso, viene riportata in automatico la Data chiusura.     
**Cliente**: questo campo viene compilato automaticamente se all'Operatore è stato assegnato un Cliente di default nei [Parametri per operatore del CRM](/docs/configurations/parameters/crm/ticket-parameters); altrimenti è possibile inserirlo manualmente.     
**Contatto**: è possibile inserire in alternativa un [Contatto](/docs/crm/home-crm/contacts/new-contact/header).        
**Progetto**: è possibile indicare un progetto a cui fare riferimento;      
**Operazioni ticket**: in questo campo vengono visualizzate le possibili [Operazioni](/docs/configurations/tables/crm/tickets/operations) per questo Tipo ticket;      
**Referente**: in questo campo viene riportata la *Persona di riferimento* del cliente inserito, presa dall'anagrafica; il campo è comunque modificabile;      
**Severità ticket**: è un campo contenente la [Severità](/docs/configurations/tables/crm/tickets/severity);   
**Oggetto**: è un campo compilabile manualmente;     
**Stato**: è possibile assegnare uno stato al ticket; gli stati visualizzati sono quelli inseriti nel [Tipo ticket](/docs/configurations/tables/crm/tickets/ticket-type) corrispondente;              
**Fatturato/Fatturabile**: questi flag indicano se il ticket è già stato fatturato oppure se dovrà esserlo;      
**Criteri di fatturazione**: indicare se il criterio di fatturazione sono le re previste dall'offerta o quelle effettivamente svolte;      
**Periodo di fatturazione**: indicare se la fatturazione deve andare a consuntivo oppure alla consegna.      

Analizziamo le tab sottostanti.     

## Dettaglio ticket

Questa tab è composta da due campi: **Lingua** (compilato automaticamente) e **Descrizione** (obbligatoria).    

## Utenti 

In questa tab vengono riportati gli operatori che che effettuano le attività sul ticket; alla creazione di un nuovo ticket vengono compilati in automatico i campi **Operatore** e **Prima data assegnata**.     

## Stima/Sforzo

Questa tab si attiva dopo aver cliccato il pulsante *Stima tecnica* sulla ribbon bar. In base al Tipo ticket che si sta creando, verrà proposto il [Template](/docs/configurations/tables/crm/tickets/template-ticket) associato, con i relativi dati già inseriti nella relativa tabella. L'utente può modificare tutti i campi. I campi che non vengono ripresi dalle tabelle del Tipo ticket o Template, e che quindi devono essere compilati manualmente, sono i seguenti:        
**Effettiva data inizio**: in questo campo è possibile inserire una Data di effettivo inizio lavori, che può essere diversa dalla **Data previsto inizio**, accanto e compilata automaticamente con la data di creazione ticket;     
**Commerciale/Tecnico**: in questi campi vengono inseriti i rispettivi operatori, che verranno proposti anche nella successiva tab *Stima commerciale*.       
Nella griglia sottostante è importante indicare nella colonna **Quantità prevista** il tempo previsto per lo svolgimento delle attività e la relativa **Unità di misura**. La compilazione di questa colonna farà compilare in automatico anche i campi **Minuti stimato sforzo** e **Ore lavorative** e servirà per la successiva creazione della stima commerciale.      
**Risorse Commesse** permette di associare una risorsa dell'area progetti, indicando quale sarà la risorsa che svolgerà questa fase di Stima Tecnica. 
Quando la risorsa dichiarerà l' attività nell'area progetti, selezionando il ticket corrispondente, avrà proposto in automatico il progetto di riferimento inserito nella corrispondente stima tecnica del ticket.


**Progetto** permette di indicare una riga di progetto dell'area Progetti, che verrà proposto in automatico quando la risorsa effettuerà la dichiarazione attività nell'area progetti, selezionando il ticket corrispondente.

**Data Inizio** e **Data Fine** : indica con precisione la data inizio e fine di ogni step della stima tecnica. 

Una volta completata la Stima tecnica, cliccare il pulsante della ribbon bar *Fine stima tecnica*: questo bloccherà nuovamente la modifica della tab Stima/Sforzo. Per poterla nuovamente modificare, cliccare il pulsante *Annulla stima tecnica*.       

## Informazioni chiusura

Questa tab è composta dai campi **Data chiusura** e **Note**; entrambi i campi sono di libera digitazione e non obbligatori.     

## Ticket collegati 

In questa tab è possibile inserire eventuali ticket collegati. Per farlo è possibile sfruttare l'Help di campo, facendo doppio click sulla colonna **Numero**.     

## Nota

In questa tab è possibile inserire/cancellare delle note. Per farlo, utilizzare i pulsanti della ribbon bar *Nuova nota* ed *Elimina nota*. Le colonne **Operatore** e **Data inserimento** vengono compilate in automatico. Il flag **info riservata** indica che la Nota deve essere disponibile solo per l'Operatore che la ha inserita.        

## Stima commerciale

Questa tab si attiva dopo aver cliccato il pulsante *Stima commerciale* sulla ribbon bar. In base al [Tipo ticket](/docs/configurations/tables/crm/tickets/ticket-type) che si sta creando ed al relativo [Template](/docs/configurations/tables/crm/tickets/template-ticket) associato, verranno proposti una serie di campi, per esempio le Descrizioni. L'utente può modificare tutti i campi.       
Il campo **Tecnico/Commerciale** viene ripreso dalla tab *Stima tecnica*.     
Nella griglia è importante controllare/modificare la colonna **Quantità commerciale**. Questa colonna riporta la Quantità prevista dalla stima tecnica, ma può essere incrementata/decrementata dal commerciale, che creerà la stima definitiva. Questa colonna popolerà anche il campo sottostante alla griglia: **Quantità totale commerciale**.       
Una volta completata la Stima tecnica, cliccare il pulsante della ribbon bar *Fine stima commerciale*: questo bloccherà nuovamente la modifica della tab Stima/Sforzo. Per poterla nuovamente modificare, cliccare il pulsante *Annulla stima commerciale*.       
Una volta completata anche la stima commerciale, si potrà creare l'offerta attraverso la procedura di *Creazione Offerte da ticket*.    

## Offerte

In questa tab vengono riportate eventuali Offerte collegate al ticket e create con la procedura di *Creazione Offerte da ticket*.      


