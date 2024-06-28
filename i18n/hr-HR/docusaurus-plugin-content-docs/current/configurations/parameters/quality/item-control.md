---
title: Parametri controllo articoli
sidebar_position: 1
---

Questi parametri si suddividono in due tab.

### Generale       

In questa tab è possibile inserire alcuni dati da proporre di default nei documenti del modulo qualità.   
Nel gruppo **Scheda tecnica**, è possibile inserire:            
**Tipo scheda tecnica**: questa tipologia verrà proposta di default al momento della creazione di una Nuova scheda tecnica;        
**Responsabile**: è possibile collegare un [Dipendente](/docs/project-management/registers/employee/search-employee);     
**Tipo dichiarazione in articoli**: questa tipologia verrà proposta di default nel tab Articoli associati delle Schede Tecniche;    
**Tipo dichiarazione in stampa**: indica il Tipo dichiarazione proposto nella stampa Scheda tecnica, tra Definitiva o Preliminare.             
Nel gruppo **Piani di controllo** è possibile indicare:
**Tipo piano di controllo**: contiene la tipologia da proporre nel caso di creazione di un nuovo piano di controllo;          
**Responsabile**: contiene il responsabile da proporre.


### Controllo articoli

A seconda del tipo di documento da cui importiamo il materiale attraverso la procedura **Importa articoli da controllare**, è possibile specificare, nella prima griglia:        
**Default**: verrà proposto in automatico il documento contenente questo flag;         
**Dettaglio articolo**: contiene il dettaglio dell'articolo che vogliamo gestire, tra UDC, Serial Number/numeri di matricola, Lotti o Nessuno (nel caso di controlli generici);        
**Mult.**: questo flag abilita la possibilità di rilevare più valori per la stessa prova; deve essere abilitato il parametro generale **Abilita il rilevamento multipli valori**;                     
**Tipo controllo**: apre la tabella Tipi controllo articolo;       
**Tipo piano di controllo**: contiene la tipologia di piano di controllo da considerare prima delle altre.       

Nella griglia **Colori righe controllo articoli** è possibile definire dei diversi colori a seconda del contenuto delle informazioni dei controlli rilevati.       

Il flag **Abilita il rilevamento multipli valori** permette la rilevazione di più valori per ogni prova, in tutti i documenti. Quando questo flag è abilitato, è possibile selezionare la logica di **Proposta esito negativo**, che decide in base a quale calcolo proporre l'esito negativo della prova tra: al primo valore rilevato non conforme, oppure sulla media aritmetica dei valori rilevati.    
E' possibile in seguito specificare una tipologia di default per i casi di esito positivo e negativo. Questa proposta non viene considerata se le tipologie di esito sono state precedentemente specificate nei Tipi prova.                                  
Il flag **Approvazione automatica valori rilevati** suppone che la persona che rileva i valori sia anche quella che li approva; in caso contrario, sarà necessario disabilitare qiesto flag.

