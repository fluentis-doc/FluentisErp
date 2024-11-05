---
title: Workflow Log
sidebar_position: 2
---

Questa è la prima tab della maschera dei **Contatti CRM**. Questa tab compare solo se per i Contatti CRM è stato attivato un workflow che preveda la visualizzazione del tab log. Per approfondimenti tecnici si rimanda alla documentazione sui workflow.     
L'utilizzo di un workflow per la gestione dei Contatti permette di gestire il rapporto con il potenziale cliente a stadi. I vari stadi del workflow possono prevedere diverse attività per la conquista del cliente, che dipenderanno dal tipo di rapporto raggiunto in quel determinato stadio: per esempio, nello stadio della Qualificazione sarà importante effettuare una call conoscitiva, invece nello stadio dell'Opportunità no perchè il cliente ci conosce già e sta valutando l'acquisto.       

Sono presenti due tab: Attività e Log.

## Attività 

I campi disponibili nel dettaglio delle attività sono divisi in 2 riquadri, **Attività** e **Attività in sospeso**. Il primo serve per dettagliare l’attività già svolta, mentre nel secondo possono già essere definite alcune informazioni riguardo l’attività che dovrà essere svolta successivamente a quella già inserita.

Nel primo riquadro sono presenti i seguenti campi:

**Tipo Attività**: è possibile specificare la tipologia di attività effettuata per il contatto; le tipologie vengono definite nella tabella Tipi Attività di Arm; in base alle impostazioni inserite nel workflow, le attività potranno cambiare in base allo stadio del workflow in cui si è;          

**Data**: questo campo viene compilato automaticamente dalla procedura nel momento in cui venga inserito il campo **Tipo Attività**; 

**Operatore**: contiene l'utente Fluentis che ha effettuato l'inserimento;    

**Descrizione attività**: è possibile specificare i dettagli dell'attività in questo campo.     

Nel secondo riquadro sono invece presenti i seguenti campi:

**Data attività in attesa**: questo campo viene compilato automaticamente dalla procedura nel momento in cui venga inserito il campo **Tipo Attività**;

**Tipo Attività**: è possibile specificare la tipologia di attività sospesa per il contatto; 

**Descrizione attività**: in questo campo è possibile definire nel dettaglio l’attività che dovrà essere svolta;

**Data chiusura**: è possibile impostare una data di scadenza per l’attività;

**Operatore**: deve essere definito l’utente di Fluentis che dovrà effettuare l’attività;

**Data inizio/fine promemoria**: in questo campo può essere indicata il range di date in cui dovrà essere visualizzato un promemoria per l’attività successiva;        

**Crea attività**: apponendo la spunta su questa voce verrà creata una nuova voce nella sezione **Attività** di Fluentis per l’utente indicato nel campo **Operatore**. Tale automatismo scatterà al momento del salvataggio del contatto.    

## Log 

In questo tab vengono visualizzati i cambiamenti di stato del workflow, con indicati: lo stato di partenza e di arrivo, l'operatore che ha effettuato l'operazione, la data.   