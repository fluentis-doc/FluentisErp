---
title: Esempio Workflow Contatti CRM
sidebar_position: 3
---

Qui di seguito viene illustrato un esempio di Workflow creato per gestire il customer journey.
Ricordiamo che per essere visualizzato, il Workflow deve essere inserito tra i Workflow Attivi di Fluentis:    

![](/img/it-it/crm/workflows.png)

Proponiamo un workflow che preveda i seguenti stadi: Start > Qualification > Prospect > Lead > Opportunity > Not qualified customer > Customer > Closed.     
Lo stadio Start è lo Stato iniziale, lo stato Closed quello finale.    
Nell'immagine che segue è selezionato lo stadio Start. Nella griglia destra, per questo stadio, sono visibili diversi dati, come il Codice (che deve essere unico per ogni stadio), eventuali diritti di visualizzazione, eventuali colorazioni valide solo per quello stadio. Per esso sono state anche inserite due attività obbligatorie (a causa del flag *Obbligatorio*: senza l'esecuzione di questa attività non sarà possibile passare allo stadio successivo): l'inserimento dell'anagrafica nel CRM aziendale e la prima call conoscitiva. Sarà possibile inserire altre attività all'interno del contatto CRM, se disponibili, il non inserimento in questa griglia non ne preclude l'utilizzo.   

![](/img/it-it/crm/contactworkflow.png)
