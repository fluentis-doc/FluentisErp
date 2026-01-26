---
title: Tipo Contatto
sidebar_position: 1
---

È una tabella che permette di definire i **Tipi Contatto** per quanto riguarda i contatti del CRM, in modo tale da poterli categorizzare.
E' composta da una parte di filtro in cui si può ricercare attraverso il codice o la descrizione del tipo, e da una griglia in cui appunto verranno elencati tutti i tipi contatto inseriti.
Sempre all'interno di questa form è possibile aggiungere nuovi tipi contatto all'interno della griglia, cliccando sul pulsante ![](/img/neutral/common/new.png) Nuovo: in questo modo verrà aggiunta una nuova riga all'interno della griglia dove si andrà ad inserire il codice e la descrizione del nuovo tipo.
Per ogni contatto è inoltre possibile definire:
-	La tipologia, selezionando dalla griglia una voce tra Opportunità, Fornitore, Partner; Le altre tipologie quali Contatto, Prospect, Lead possonon essere indicate nella griglia sottostante "Pipeline Contatto"
-	Le tab che dovranno essere visualizzate per quel tipo di contatto tra: Attività, Riferimenti, Indirizzi, Note, Gestione Documentale, Visit reports, Categoria Commerciale, Zona, Agenti, Newsletter, Pagamento, Offerte, Ordini Cliente, DDT di vendita, Interventi, Extra data, Orario Apertura, Concorrenti, Telefonata, Campagne Marketing, Listini, Informazioni commerciali, Punteggio, Contatti Collegati, Tipo attività per le attività inserite nel workflow relativel punteggio.

Per ogni tipologia di contatto è inoltre possibile definire 

## Pipeline Contatto

Elenco degli stati disponibili per il tipo contatto, configurati dall'utente.
Ogni riga può essere utilizzata per identificare fase in cui si trova il contatto, in base ad un specifico percorso strutturato.
Se la prima fase configurata corrisponde a "Contatto" / "Contact", allora verrà proposto in automatico questo valore nella pipeline di un nuovo contatto. L'avanzamento agli stati successivi, può essere fatto manualmente, oppure tramite appositi script negli stati del workflow associato. 
Ogni fase potrà avere un flag abilitato, tra Contatto, Prospect, Lead, Opportunità, Cliente, Fornitore, Partner. 
in funzione del flag abiliato, verranno gestiti i contatori delle Tiles ed le funzionalità abilitate, come ad es. conversione a Cliente. 
I vantaggi dell'uso della pipeline sono: 
- facilità di ricerca dei contatti che si trovano in una specifica fase; 
- Il tipo contatto assegnato può rimanere "fisso", e l'evoluzione del contatto come "lead/prospect/opportunity/customer/supplier/partner" può avvenire tramite la pipeline. 

## Tipo di contatto Ruolo

Tabella in cui vengono gestite le tab visualizzate per Utente o per ruolo. 
Utente e ruolo sono informazioni **alternative**, va quindi compilato un solo dato tra i due. 
**Data Creazione**: è la data di inserimento della riga;
**Ruolo**: fa riferimento alla tabella dei ruoli degli utenti di Fluentis;
**Operatore**: fa riferimento alla tabella degli utenti di Fluentis.
**Tab abilitate per Ruolo/Operatore**: quali tab può visualizzare e gestire tra quelle presenti, come: Attività, Indirizzi, Gestione Documentale, Visit reports, Categoria Commerciale, Zona, Agenti, Newsletter, Pagamento, Offerte, Ordini Cliente, DDT di vendita, Interventi, Extra data, Orario Apertura, Concorrenti, Telefonata, Campagne Marketing, Listini, Informazioni commerciali, Punteggio, Contatti Collegati.

## Punteggio

Permette di configurare dei criteri di valutazione del contatto, sulla base di un punteggio di specifici valori.
Ogni voce del punteggio avrà un valore minimo ed un valore massimo con cui potrà incidere sul totale, un valore del passo di avanzamento e dei colori dedicati. A seconda dei valori assegnati, questi verranno sommati e mostrati in testata nel campo Punteggio Totale ed in ricerca contatto. Se assegnata una attività nella configurazione del punteggio, verrà inserita in automatico nella sezione Attività del workflow, al fine di tenere traccia di tutte le variazioni. 

## Extra data

È inoltre possibile definire per ogni tipo contatto anche degli [Extra data](/docs/configurations/utility/extra-data/extradata/search-extradata/), che dovranno essere proposti per i contatti che presentano tale tipologia (per ulteriori informazioni riguardo gli Extra data fare riferimento all’apposita sezione della presente guida).



