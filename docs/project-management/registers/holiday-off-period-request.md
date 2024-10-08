---
title: Richiesta Ferie/Permessi
sidebar_position: 4
---

La richiesta Ferie/Permessi permette all’utente di richiedere direttamente da Fluentis i giorni o le ore di ferie, permessi o malattia. 
Le informazioni richieste e da inserire da parte dell’utente sono:

**Da data/A data**: viene inserito il periodo di tempo, in giorni e in ore, per cui si vuole fare la richiesta; lasciando 00:00 come orario di inzio e fine, in fase di generazione dichiarazione attività, verrà utilizzato come orario di inizio e fine quelli configurati nel turno della risorsa; 

**Risorsa**: viene proposta la risorsa dell’utente di accesso a Fluentis; 

**Motivo**: contiene l'elenco delle causali di assenza configurate per la società. 

**Gestito**: flag che indica se la richiesta è già stata gestita. Si può abilitare manualmente oppure al termine della procedura effettuata con il bottone "Conferma Periodo"

**Data creazione**: è la data di creazione della richiesta; 

**Utente di creazione**: contiene l’utente che ha creato la richiesta e viene proposto l’utente stesso di accesso;

**Manager**: elenco utenti tra cui selezionare la figura manager per la risorsa; dato non obbligatorio;

**Team Leader**: elenco utenti tra cui selezionare la figura team leader per la risorsa; dato non obbligatorio;

**Email**: viene proposta la email dell’utente che fa la richiesta; 

**Email CC**: indirizzo email che verrà inserito in cc nella mail automatica di approvazione della richiesta; se selezionato team leader e/o manager, le rispettive email verranno inserite in cc; 

**Soggetto**: descrizione della richiesta; 

**Nota**: è possibile dettagliare eventualmente la richiesta;

**Risultati**: eventuali risultati se la richiesta viene gestita tramite workflow (ad es. confermata, cancellata, motivo cancellazione, etc)

Nella ribbon bar sono presenti i seguenti bottoni: 

**Conferma periodo**: cliccando sul bottone verrà aperta la videata per inserire il progetto di riferimento, la categoria attività ed il flag per Creare un periodo ferie nella dichiarazione attività con i dati appena inseriti.
Alla risorsa di riferimento è possibile inviare una notifica via email. 
Al termine della procedura abiliterà il flag "Gestito"

**Rollback del periodo**: permette di eliminare le attività generate dalla conferma periodo e di ripristinare il flag Gestito. 

**Apri il calendario delle risorse**: Apre la visualizzazione calendario che permette di selezionare diverse risorse e valutare gli appuntamenti presenti. 

Possibili scenari relativi alla Conferma periodo con sovrapposizioni: 

- la richiesta di ferie ha già il flag "Gestito" abilitato: verrà fatto richiesta "Richiesta già gestita, vuoi procedere nuovamente?" 
Rispondendo no, verrà bloccato tutto il processo. 
Rispondendo sì, verranno reinserite le dichiarazioni attività ferie e sovrascritte quelle generate in precedenza dalla richiesta ferie (se presenti). 

- la richiesta di ferie ha  il flag "Gestito" disabilitato ma esistono altre dichiarazioni attività nello stesso periodo: 
"Le attività si sovrappongono: *dettaglio attività* - *ferie* Vuoi continuare? "

Rispondendo Sì : verranno generate tutte le dichiarazioni attività per il periodo ferie richiesto

Rispondendo No : verranno generate solo le dichiarazioni attività per le giornate senza altre dichiarazioni attività presenti

Se nella giornata fosse presente anche solo una dichiarazione attività per un orario lavorativo parziale, la giornata verrà comunque saltata e non verranno inserite ferie. 



