---
title: Gestione Progetti
sidebar_position: 1
---

In **Fluentis ERP**  un progetto è un insieme complesso di attività, soggette a vincoli temporali e di risorsa, finalizzate ad un obiettivo predefinito. Il monitoraggio dei risultati avviene tramite gli opportuni strumenti come dashboard, stampe e diagramma di Gannt, workflow, supervisor e sprint per chi utilizza il metodo Agile.

I progetti devono essere definiti in modo analitico con la specifica di tutte le attività necessarie al conseguimento degli obiettivi, che sono rappresentati all’interno di un progetto come nodi WBS.
L'organizzazione del laovoro in elementi più facilmente gestibili, rendono meno complessa la comprensione del progetto, in modo da comunicare a tutti i soggetti coinvolti (stakeholder) le fasi e le attività da svolgere; le attività sono rappresentate dai livelli di WBS di maggior dettaglio e sono definiti Work Package/Task.
La gestione dei progetti inoltre permette una maggiore flessibilità in termini strategici in quanto ha la capacità di adattarsi ai continui cambiamenti esterni ed interni.

Quest'area risponde alle esigenze di realtà aziendali "Product Centric" e "Service Centric", in quanto tramite apposite funzionalità si collega in modo trasversale a tutte le aree presenti in Fluentis ERP. 

Le principali tipologie di progetto si possono riassumere in: 

**Progetti WBS** - Costruire progetti con la modalità Work Break Down Structure. in modo da permettere la gestione di tipo WaterFall nell’ambito delle singole WBS e Work Packages.

**Progetti di tipo Commessa** - Permettere la gestione di progetti semplici dove l’elemento essenziale è il numero del progetto o commessa finalizzato ad aggregare documenti di diversa natura.

**Progetti di tipo Ripetitivo** - Creare progetti che abbiamo la finalità di contratti ripetitivi, caratterizzati principalmente da una sequenzialità temporale nella fatturazione. Tipicamente progetti a fatturazione ripetitiva come i contratti di noleggio o di assistenza.

**Progetti di Manutenzione** - Poter realizzare progetti che gestiscono la manutenzione programmata degli impianti interni o esterni all’azienda. Impianti che possono anche non essere di proprietà.

**Progetti di tipo SAL** - Gestire i contratti di tipo Stato Avanzamento Lavori. Sono progetti che prevedono la realizzazione di servizi o prodotti che si riferiscono ad attività in corso di realizzazione. Caratterizzate dall’emissioni di fatturazioni acconto e a saldo finale

**Progetti di tipo Manufacturing** - Collegare la gestione del progetto al flusso produttivo e logistico con lo scopo di aggregare costi relativi alla produzione nella modalità tipicamente MTO (Make to Order)


In seguito mostrati alcuni esempi di business process in base alla realtà che si vuole gestire: 

L'immagine sottostante illustra come viene organizzato il flusso di un'azienda di servizi.

Partendo dalla definizione delle esigenze del cliente, definendo il team di lavoro e svolgendo un'attività di analisi dello stato di fatto, si arriva a costruire un progetto di tipo WBS all'interno di Fluentis con gli specifici obiettivi da raggiungere. 
Si effettua la pianificazione delle risorse, si gestisce la parte amministrativa con eventuali fatture di anticipo, e si tengono monitorati gli Sprint. 
Periodicamente si procede alla rendicontazione del progetto ed alla sua fatturazione. 

![Servizi](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

L'immagine sottostante illustra come viene organizzato il flusso di un'azienda di produttiva.

Il primo passo avviene nell'area vendite, con la formulazione di un'offerta ed eventuali prototipi. Già a livello dell'offerta è possibile definire dei budget relativi a costi di materiali e servizi.
Nel momento in cui l'offerta viene confermata, non è necessario reinserire tutti i dati da capo, ma sarà sufficiente convertire l'offerta in progetto. Il progetto al suo interno potrà anche integrare un template.
Dal progetto potranno quindi essere creati degli interventi pianificati, monitorati tramite sprint, per concludersi poi con la realizzazione degli interventi e la relativa fatturazione.

![Produzione](/img/it-it/project-management/projects/BPM_PROD.jpg)

Riassumento i principali flussi nell'area progetti: 

un progetto può nascere da:
1. inserimento manuale
2. da template di progetto
3. da offerta di vendita (diverse opzioni presenti: da offerta, da offerta e template, accodando l'offerta ad un progetto già esistente)

Un progetto può essere monolivello, oppure multivello gestendo una struttura gerarchica. 

All'interno del progetto si possono inserire dei periodi temporali, il prezzo di vendita, costi vari, di materiali e risorse. 
Si stabiliscono i criteri di fatturazione e si pianificano le risorse. 

I dati essenziali di un progetto sono le righe, che se di tipo 1-codificato / 2-non codificato, devono avere articolo e/o descrizione, UM e prezzo. Altrimenti resteranno righe di tipo descrittivo, che potranno sempre essere utilizzate nei documenti a seguire. Non potranno invece determinare un valore in fatturazione, se non in seguito ad interventi manuali da parte dell'operatore. 

Se nel progetto sono state pianificate delle risorse, dal progetto si potranno generare in automatico delle richieste di intervento o interventi pianificati. 

- Risorse pianificate nel progetto > richiesta intervento > intervento pianificato > intervento effettivo > fattura di vendita
- Risorse pianificate nel progetto > intervento pianificato > intervento effettivo > fattura di vendita
- Dichiarazione attività > intervento > fattura di vendita

L'utilizzo o meno della richiesta di intervento dipende dalle varie esigenze: 
- gestione di portali esterni, dove clienti/utenti inseriscono le richieste intervento, che in seguito dovranno essere verificate ed approvate.
- introdurre uno step intermedio di verifica di quanto programmato, prima dell'effettiva pianifica con interventi pianificati che incrementano i contatori all'interno del progetto.

La fatturazione nell'area progetti può avvenire in 2 modi: 
- direttamente da progetto (comune per la fatturazione ricorsiva nei casi di progetti per la gestione di canoni, licenze, etc. ) e per le fatture di anticipo
- dagli interventi. 

Di conseguenza tutti i documenti da fatturare dovranno confluire negli interventi. Infatti un'attività marcata come fatturabile può essere convertita in automatico in intervento. 

Invece per la gestione paghe/dipendenti devono essere presenti tutte le dichiarazioni attività. Se l'operatore inserisce un intervento, nel momento in cui lo stato intervento sarà "Approvato" si potrà generare automaticamente l'attività per il conteggio ore del dipendente. 

Ne consegue quindi che gli interventi ed attività sono documenti tra loro legati: 
da intervento > in attività
da attività (se fatturabile) > in intervento

Per maggiori dettagli consultare le specifiche pagine per ogni documento, dove oltre alle spiegazioni ed indicazioni sulle configurazioni da effettuare, verranno anche illustrate le priorità con cui vengono lette le configurazioni ed il collegamento con gli altri documenti. 





