---
title: Scritture di integrazione
sidebar_position: 5
---

Siamo all'interno del modulo Chiusure Infrannuali e selezioniamo la procedura ‘Scritture di integrazione'. La maschera consente di gestire separatamente le operazioni di integrazione che si possono eseguire contestualmente alla creazione di una nuova chiusura infrannuale.

Per gestire la procedura è sufficiente impostare la chiusura di riferimento, la data di inizio competenza di riferimento, il tipo di calendario da utilizzare (si consiglia di lasciare il calendario solare) e la causale da utilizzare (che deve avere il flag cdc/cdp per gestire l'integrazione dei centri di costo/profitto).

Con questa procedura il sistema verificherà, a partire dalla 'Data di inizio competenza per le scritture di integrazione', le righe di costo/ricavo presenti in contabilità e non inserite nella chiusura (cioè registrazioni al di fuori dei range di date registrazione/competenza impostate al momento della ripresa dalla contabilità), per creare i ratei dei giorni all'interno del range di date competenza economica. I sottoconti di rateo da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa. È presente un pulsante di ripristino/cancellazione dei movimenti già rilevati da questa procedura.

Merita un'attenzione particolare la data di inizio da impostare, in quanto normalmente questa data sarà da impostare uguale alla data dell'ultima apertura conti rilevata in contabilità. Esemplifichiamo: se stiamo creando la chiusura del primo trimestre dell'esercizio, il range di date per la sezione economica sarà tipicamente 01/01/anno – 31/03/anno e se è presente la riapertura conti dell'esercizio precedente allora all'interno di questo range ci sarà direttamente il giroconto a costo/ricavo dei ratei rilevati nel bilancio 'anno-1' e quindi la data inizio per le integrazioni sarà da impostare come 01/01/anno in modo che  il gestionale verifichi se dopo del 31/03 ci sono righe con competenza nel trimestre precedente. Se la riapertura non è presente, invece, sarà necessario impostare la data inizio come 01/01/anno-1 per far si che **FluentisERP** verifichi se anche in tutto l'esercizio precedente vi sono costi/ricavi che cadono nel trimestre iniziale di questo esercizio.

:::tip Nota
Attenzione alla gestione manuale in contabilità dei ratei/risconti nelle registrazioni di chiusura e poi riapertura dei conti, in quanto l'assegnazione delle date competenza di riga è fondamentale per la correttezza della ripresa nel controlling delle Scritture di integrazione o nell'elaborazione periodi del controlling.
La gestione automatizzata che si effettua tramite le **Scritture di Assestamento** consente di evitare errori su questo delicato tema, errori che potrebbero causare doppie o errate rilevazioni nell'area Controlling.
:::