---
title: Richiesta Ferie/Permessi
sidebar_position: 4
---

La richiesta Ferie/Permessi permette all’utente di richiedere direttamente da Fluentis i giorni o le ore di ferie, permessi o malattia. 
Le informazioni richieste e da inserire da parte dell’utente sono:

**Da data/A data**: viene inserito il periodo di tempo, in giorni e in ore, per cui si vuole fare la richiesta;

**Risorsa**: viene proposta la risorsa dell’utente di accesso a Fluentis; 

**Motivo**: contiene il motivo della richiesta tra Holidays, Illness e Day Off;

**Data creazione**: è la data di creazione dell’evento; 

**Utente di creazione**: contiene l’utente che ha creato l’evento e viene proposto l’utente stesso di accesso;

**Manager**: non obbligatorio;

**Team Leader**: obbligatorio, è il responsabile della risorsarichiedente;

**Email**: viene proposta la mail dell’utente che fa la richiesta;

**Email CC**: indirizzo mail che verrà inserito in cc nella mail automatica di approvazione della richiesta;

**Soggetto**: viene inserita la descrizione del tipo di richiesta che si vuole fare (Day off, Holiday o Illness); 

**Nota**: è possibile dettagliare eventualmente la richiesta;

Le richieste sono gestitetramite workflow: al momento dell’inserimento la richiesta si trova in stato **Inserito**; successivamente, per inviare la richiesta in approvazione, il richiedente deve cambiare lo stato della richiesta in **Da approvare**. In questo modo viene inviata una mail: se il motivo è Holiday, la mail arriverà al Team Leader indicato dall’utente, come destinatario, e ad Activities di default in cc (senza che debba essere indicato anche il Manager); se il motivo è Day-Off o Illness, la mail arriva di default ad Activites di default, come destinatario, e il Team Leader in cc (se indicato).
Il manager o il team leader, se la richiesta viene approvata, cambiano lo stato della stessa in **Approvata**. Chi conferma la richiesta procede inoltre con la creazione automatica del periodo di ferie/permesso/malattia nella dichiarazione delle attività, utilizzando la funzione **Conferma periodo**. Per farlo è necessario indicare la WBS di progetto e la relativa Categoria di attività da utilizzare. 
