---
title: Nuovo strumento di misura
sidebar_position: 2
---

Elenchiamo i campi principali presenti nella creazione di un **Nuovo strumento di misura**.   

**Categoria**: contiene la categoria dello strumento;     
**Codice/Matricola/Modello**: contiene Codice, Numero seriale e Modello; sono codici descrittivi manuali;     
**Fornitore**: anagrafica dal quale è stato acquistato lo strumento;       
**Produttore**: chi ha prodotto lo strumento;       
**Data acqusito/Scadenza garanzia**: campi compilabili manualmente;     
**Fornitore manutenzione/assistenza**: viene indicato il fornitore a cui inviare lo strumento in caso di guasto;    
**Funzione responsabile o persona responsabile**: responsabile dello strumento di misura;    
     
Nel gruppo **Proprietà di taratura** vengono indicate le caratteristiche di taratura; ci sono tre possibilità:     
> selezionare il flag **Non soggetto a taratura**: lo strumento non potrà essere sottoposto a taratura; i campi sottostanti saranno disabilitati;   C    
> selezionare il flag **Taratura interna**: lo strumento sarà sottoposto a taratura interna; il campo sottostante **Fornitore taratura** sarà disabilitato;     
> non selezionare questi flag: lo strumento sarà sottoposto a taratura da parte di un soggetto esterno; sarà necessario inserire il campo sottostante **Fornitore taratura**.    
Gli ulteriori campi di taratura sono i seguenti:     
**Periodo di calibrazione/Unità di misura**: contiene la periodicità della taratura con la relativa unità di misura degli strumenti; questa unità di misura è una tabella separata dalle altre unità di misura;    
**Ultima taratura/Esito**: contiene la data dell'ultima taratura e il relativo esito; viene proposta in automatico quando viene effettuata una taratura ma può essere modificata manualmente;    
**Data prossima taratura**: viene calcolata la data prevista per la prossima taratura sommando alla Ultima taratura il Periodo di calibrazione previsto.     

**Classificazione**: è possibile classificare uno strumento in questa tabella formata da Codice e Descrizioe;     
**Articolo attrezzatura associato**: è possibile associare un'anagrafica articolo; l'articolo per poter essere selezionato deve avere in anagrafica articolo la **Natura articolo** Attrezzatura oppure Utensile; se un articolo verrà selezionato come un articolo attrezzatura associato, non potrà essere modificata la sua Natura articolo in anagrafica (uscirà un messaggio di errore);      

Nel gruppo **Proprietà dello strumento** è possibile inserire dei dati informativi manuali.     
**Unità di misura/Intervallo di misura**: contiene l'unità di misura e il range misurabile dallo strumento; per esempio se inserisco millimetri e un intervallo 0/100, allora lo strumento potrà misurare dagli 0 ai 100 millimetri;   
**Precisione/Limiti**: viene indicata la precisione minima dello strumento ed eventuali limiti di precisione dello strumento per esempio alcuni ambienti dove non utilizzarlo;       
**Ubicazione**: è possibile che lo strumento di misura sia ubicato ad un fornitore che è possibile indicare;     
**Strumento campione**: questo flag indica se questo strumento viene utilizzato per tarare altri strumenti, che si possono indicare a lato;     

**Funzione utilizzatrice o persona**: indicare chi abitualmente utilizza lo strumento;    
**Classe strumento**: contiene una classe generica eventuale;     
**Ubicato in:Magazzino/Ubicazione**: posso indicare un magazzino aziendale in cui è situato lo strumento;     
**Cliente proprietario**: indica il cliente proprietario eventuale;     
**Attivo**: questo flag indica l'attivazione o meno dello strumento; la disattivazione impedisce la taratura e riporta la data di disattivazione nel campo successivo.

Analizziamo le tab sottostanti.    
Nella tab **Valori da rilevare** vengono indicate le regole di rilevazione da utilizzare nella Taratura dello strumento. Le righe della griglia corrispondono ai diversi valori da rilevare, ognuno con il proprio **Intervallo di lettura**, **Dato richiesto** e **Incertezza** accettata.    
Nella tab **Articoli associati** possono essere inseriti manualmente gli articoli che utilizzano lo strumento di misura, come promemoria.     
Nella tab **Storico Rapporti e Certificati di taratura** viene visualizzato lo storico delle Tarature effettuate per lo strumento; è possibile aprire i dettagli con il doppio click sulle righe.     
Nella tab **Extra Data** sono contenuti gli extra data.    
Nella tab **Documenti collegati** è possibile allegare qualsiasi documento, mentre nella tab **Immagine** solo l'immagine dello strumento.    

*Pulsanti specifici*     
**Duplica strumento**: questo bottone duplica lo strumento;    
**Nuova taratura**: viene creata una [nuova taratura](/docs/quality/calibration-tools/calibration-tool/new-calibration-tools) per questo strumento;     
**Pianifica nuove tarature**: cliccando questo bottone, per un anno solare partendo dalla data odierna pianifica le tarature future e le identifica come Schedulate; la pianificazione viene riportata nella tab Storico Rapporti e Certificati di taratura. 