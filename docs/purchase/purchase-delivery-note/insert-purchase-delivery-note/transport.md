---
title: Trasporto
sidebar_position: 6
---

Il tab contiene informazioni riguardanti il trasporto degli articoli.

I combo box propongono tutti i *Destinatari*, le *Destinazioni* e i *Vettori* inseriti nell'*Anagrafica del contatto > tab [Spedizioni](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* ma possono essere inseriti manualmente. 

I dati presenti sono: 

- **Mittente**: in questo campo è possibile insrire il conto/sottoconto del mittente.
- **Destinatario**: viene proposto il destinatario di default inserito in anagrafica cliente; se non presente, viene preso l'indirizzo del cliente.    
- **Destinazione**: viene proposta la destinazione di default del destinatario, see inserita in anagrafica cliente.        
- **Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. 
- **Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. 
- **Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura.     
- **Aspetto esteriore bene**: combo box che rimanda all'omonima tabella in cui codificare i dati.     
- **Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.     
- **Valori modificati manualmente**: con questo flag rendiamo possibile la modifica dei campi Volume, Peso netto, Peso lordo e Colli, che altrimenti riportano i dati da anagrafica articolo senza possibilità di modifica.     
- **Ingresso/Uscita dell'ufficio doganale**: campi utilizzati per l'eTrasport per la versione romena, che rimandano alla tabella *Ufficio doganale*.     
- **Ingresso/Uscita valico di frontiera**: campi utilizzati per l'eTrasport per la versione romena, che rimandanno alla tabella *Valico di frontiera*.      
- **Trasporto**: è necessario selezionare la figura che si occuperà del trasporto, mettendo il flag in *Mittente*, *Destinatario* o *Vettore*; in base alla selezione, la sezione sottostante cambierà; se il trasporto è a carico del *Mittente* sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del *Destinatario* sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del *Vettore* invece i campi disponibili saranno Anagrafica contabile del Vettore, Targa, Rimorchio, Data e Ora trasporto, eventuale Committente, Caricatore, Proprietario, Luogo carico. 
