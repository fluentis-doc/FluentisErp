---
title: Reclami
sidebar_position: 2
---

I dati che compongono un **Reclamo** sono:     
**Tipo Reclamo**: contiene la tipologia; questa selezione determinerà le tab visibili;            
**Cliente**: contiene la provenienza del reclamo, la quale può essere anche un **Contatto**.

Analizziamo la sezione ***Testata***, comune ad entrambe le possibili tipologie di Reclamo.         
**Persona responsabile**: contiene il [Dipendente](/docs/project-management/registers/employee/new-employee) responsabile del reclamo;      
**Funzione aziendale**: contiene una eventuale Funzione aziendaleresponsabile;       
**Rif. documenti**: contiene i riferimenti dei documenti relativi alla merce che si è rivelata non conforme, quindi la fattura con la quale è stata venduta,il ricevimento merce, ecc.;     
**Approvato/In data**: contiene i riferimenti di chi ha approvato il Reclamo;
**Chiuso/In data**: contiene i riferimenti di chi ha chiuso il Reclamo e le eventuali **Notifiche** effettuate.        

I Reclami possono essere Approvati e Chiusi solo da:
- Persona responsabile: in questo campo è possibile inserire il Dipendente codificato, che deve avere un utente Arm associato;
- Funzione responsabile: è possibile abilitare alla modifica un'intera funzione aziendale; in questo caso deve fare Apri form nella Funzione aziendale ed inserire, nella griglia in basso, i Dipendenti da abilitare per ogni funzione aziendale selezionata.

Sono poi presenti diverse tab.

## Notifiche
Questa tab contiene il **Motivo della contestazione** ricevuto e nel caso il **Sito produttivo** aziendale destinatario.
Se il reclamo non dovesse venire accettato dall'azienda, il **Motivo del recesso** sarà liberamente compilabile accanto. 

## Annotazioni     
Questa tab contiene Note libere, commerciali, tecniche o amministrative.

## Valori   
Questa tab contiene:    
**Divisa**: con la quale specificare i valori del Reclamo;      
**Rif. Doc addebito**: contiene i documenti ricevuti per i quali è richiesto un addebito della non conformità;       
**Totale reclamo**: questo campo è automatico se nei Parametri è settato il flag **Ricalcolo automatico totali**, oppure è calcolato automaticamente dalla somma della gestione dei difetti; questo reclamo è la somma che ci contesta il cliente e, se tutta da accreditare, coinciderà con il Valore da accreditare;         
**Costo di gestione**: automatico se deciso nei Parametri, altrimenti imputabile manualmente; questo costo è il costo di gestione interno che spendo per la gestione del reclamo; esso sarà imputabile: alla mia azienda se responsabile della fornitura; al fornitore altrimenti responsabile della fornitura;       
**Valore da accreditare**: è il valore che riconosciamo e da accreditare; la nota di accredito generata avrà il riferimento nel campo **Rif. Doc. Accredito** e apporrà il flag **Valorizzato**; il totale da accreditare è ciò che paghiamo al cliente, il costo di gestione è ciò che pago internamente.            

Analizziamo la tab ***Gestione difetti***, presente solo nel caso la tipologia di Reclamo sia **Reclamo cliente**.    
E' possibile indicare uno o più difetti riscontrati nel Reclamo, con i relativi dati:     
- **Difetto riscontrato**: contiene il Difetto con relativo **Codice** e **Descrizione** ed eventuali **Note**;     
- **Causa presunta**, che ha causato il difetto;    
- **Fase di rilevamento**, con i dettagli della fase nella quale è stato rilevato il difetto;    
- **Quantità**: contiene la quantità venduta, contestata e resa della merce;     
- **Rif. Azione correttiva**: contiene i riferimenti dell'azione correttiva se creata.   
Questa tab è suddivisa in tab ulteriori.        

## Dati difetto     
I dati principali sono:      
- **Gravità**: contiene l'eventuale Gravità del difetto;    
- **Causa effettiva**: è possibile che la causa del difetto presunta, inserita in griglia, non coincida con la causa effettiva, che è possibile inserire in questo campo;      
- **Soluzione proposta**: contiene la soluzione che è stata proposta per risolvere il difetto, tra un elenco a discesa;     
- **Decisione intrapresa**: contiene la soluzione che, tra le possibili proposte, è stata intrapresa;
- ecc.     
E' possibile specificare i vari campi con le **Note** accanto.     

## Materiali utilizzati 
Questa tab contiene materiali eventualmente utilizzati per porre rimedio al difetto. I dati del materiali sono accompagnati dai relativi costi.

## Oggetti reclamati
Contiene tutti gli articoli nei quali è stato riscontrato il difetto della griglia principale.

## Soggetti coinvolti
In questa tab è possibile indicare le Funzioni aziendali coinvolte e/o i [Dipendenti](/docs/project-management/registers/employee/new-employee).     
Nella sezione **Gestione coinvolgimento** è possibile indicare il Motivo del coinvolgimento, campo automatico se nella tabella delle Funzioni aziendali ne abbiamo inserito precedentemente uno.   

Analizziamo la tab ***Gestione 8D***, presente solo nel caso la tipologia Reclamo sia **Reclamo cliente 8D**.    
Questa tab è suddivisa in due tab ulteriori.      

## Oggetti reclamati    
Questa tab contiene un elenco di tutti i materiali che ci stanno contestando.     

## Gestione 8D         
Questa tab contiene la gestione del modello 8D Problem Solving, che richiede la definizione di:     
- un **Team**, nel quale indicare la Funzione e/o il Dipendente;     
- delle **Azioni di contenimento** per evitare il ripetersi nell'immediato dei difetti riscontrati;     
- un'analisi delle **Cause** che hanno permesso il verificarsi dell'evento;     
- l'elenco delle **Azioni** che verranno intraprese e diverranno Permanenti nel tempo per evitare che il difetto si ripresenti;   
- nel momento in cui viene inserito il flag **Attuata** nell'Azione, si abilita la **Convalida azioni**;    
- eventuali **Fasi** da attuare a fronte delle attività per le azioni correttive.    


I pulsanti specifici della ribbon bar sono:
**Crea azione correttiva**: alla selezione di un difetto, è possibile creare una Azione correttiva. Si apre una maschera nella quale vengono richiesti una serie di dati da riportare nell'Azione.     
**Crea non conformità**: alla selezione di un difetto, è possibile creare una Non conformità relativa. 