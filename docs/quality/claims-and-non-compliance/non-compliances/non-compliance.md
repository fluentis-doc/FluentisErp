---
title: Non conformità
sidebar_position: 2
---

I dati che compongono una **Non conformità** sono:     
- **Tipo Non conformità**: contiene la tipologia; questa selezione determinerà la possibilità di inserire un cliente, un fornitore o una funzione aziendale a seconda della tipologia;               
- **Anno**, **Numero** e **Data**.

Analizziamo le tab sottostanti.

## Testata 
**Persona responsabile**: contiene il [Dipendente](/docs/project-management/registers/employee/new-employee) responsabile;      
**Funzione aziendale**: contiene una eventuale Funzione aziendale responsabile;       
**Sito produttivo**: contiene il sito produttivo aziendale in cui si è verificata la Non conformità;      
**Approvato/In data**: contiene i riferimenti di chi ha approvato la non conformità;
**Chiuso/In data**: contiene i riferimenti di chi ha chiuso la non conformità e le eventuali **Notifiche** effettuate.        

Le non conformità possono essere Approvate e Chiuse solo da:
- Persona responsabile: in questo campo è possibile inserire il Dipendente codificato, che deve avere un utente Arm associato;
- Funzione responsabile: è possibile abilitare alla modifica un'intera funzione aziendale; in questo caso deve fare Apri form nella Funzione aziendale ed inserire, nella griglia in basso, i Dipendenti da abilitare per ogni funzione aziendale selezionata.

Sono poi presenti diverse tab.

## Rif. documenti
Contiene i riferimenti dei documenti relativi alla merce che si è rivelata non conforme, quindi la fattura con la quale è stata venduta,il ricevimento merce, il reclamo da cui è nata, ecc. I campi non sono editabili, ma sono popolati automaticamente se la Non conformità proviene da altri documenti.

## Annotazioni     
Questa tab contiene Note libere, commerciali, tecniche o amministrative.

## Valori   
Questa tab contiene:    
**Divisa**: con la quale specificare i valori della Nn conformità;      
**Rif. Doc addebito**: contiene i documenti ricevuti per i quali è richiesto un addebito della non conformità;       
**Costo di gestione**: automatico se deciso nei Parametri, altrimenti imputabile manualmente; questo costo è il costo di gestione interno che spendo per la gestione della Non conformità; esso sarà imputabile: alla mia azienda se responsabile della fornitura; al fornitore altrimenti responsabile della fornitura;       
**Valore da addebitare**: è il valore che riconosciamo e da addebitare; la nota di addebito generata avrà il riferimento nel campo **Rif. Doc. Accredito** e apporrà il flag **Valorizzato**; questo valore può essere diverso dal **Totale non conformità** se viene deciso di non addebitare il totale all'eventuale fornitore;     
**Totale non conformità**: è la somma di Totale materiale non rilavorato, Totale materiale rilavorato e Costo di gestione.             

## Gestione difetti
E' possibile indicare uno o più difetti riscontrati, con i relativi dati:     
- **Difetto riscontrato**: contiene il Difetto con relativo **Codice** e **Descrizione** ed eventuali **Note**;     
- **Causa presunta**, che ha causato il difetto;    
- **Fase di rilevamento**, con i dettagli della fase nella quale è stato rilevato il difetto;   
- **Gravità**: contiene l'eventuale Gravità del difetto;    
- **Rif. Azione correttiva**: contiene i riferimenti dell'azione correttiva se creata.   

Questa tab è suddivisa in tab ulteriori.        

## Dati difetto     
I dati principali sono:      
- **Causa effettiva**: è possibile che la causa del difetto presunta, inserita in griglia, non coincida con la causa effettiva, che è possibile inserire in questo campo;      
- **Soluzione proposta**: contiene la soluzione che è stata proposta per risolvere il difetto, tra un elenco a discesa;     
- **Decisione intrapresa**: contiene la soluzione che, tra le possibili proposte, è stata intrapresa;
- ecc.     
E' possibile specificare i vari campi con le **Note** accanto.     

## Materiali utilizzati 
Questa tab contiene materiali eventualmente utilizzati per porre rimedio al difetto. I dati del materiali sono accompagnati dai relativi costi.

## Oggetti difettosi
Contiene tutti gli articoli nei quali è stato riscontrato il difetto della griglia principale. I dati inseriti in questa tab andranno a popolare i **Valori** della testata.

## Soggetti coinvolti
In questa tab è possibile indicare le Funzioni aziendali coinvolte e/o i [Dipendenti](/docs/project-management/registers/employee/new-employee).     
Nella sezione **Gestione coinvolgimento** è possibile indicare il Motivo del coinvolgimento, campo automatico se nella tabella delle Funzioni aziendali ne abbiamo inserito precedentemente uno.    

I pulsanti specifici della ribbon bar sono:
**Crea azione correttiva**: alla selezione di un difetto, è possibile creare una Azione correttiva. Si apre una maschera nella quale vengono richiesti una serie di dati da riportare nell'Azione.     