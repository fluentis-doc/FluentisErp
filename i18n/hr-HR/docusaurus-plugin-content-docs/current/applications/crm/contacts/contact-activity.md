---
title: Attività Contatto
sidebar_position: 3
---

![](/img/it-it/applications/crm/contacts/contact-activity.png)

Questa è la prima tab della maschera dei **Contatti CRM**.
All’interno di questa tab è possibile trascinare, mediante una semplice operazione di drag and drop, le attività presenti nella pipeline flux o, in alternativa, inserire manualmente una nuova attività.
I campi disponibili nel dettaglio delle attività sono divisi in 2 riquadri, **Attività** e **Attività successiva**. Il primo serve per dettagliare l’attività già svolta, mentre nel secondo possono già essere definite alcune informazioni riguardo l’attività che dovrà essere svolta successivamente a quella già inserita.

Nel primo riquadro sono presenti i seguenti campi:

**Attività dettagliata**: è possibile specificare nel dettaglio la descrizione dell’attività svolta sul contatto;

**Data Ultima modifica**: questo campo viene aggiornato automaticamente dalla procedura nel momento in cui venga variato il contenuto del campo **Attività dettagliata**.

Nel secondo riquadro sono invece presenti i seguenti campi:

**Tipo attività successiva**: deve essere definita la tipologia di attività;

**Prossimo utente**: deve essere definito l’utente di Fluentis che dovrà effettuare l’attività successiva;

**Descrizione attività successiva**: in questo campo è possibile definire nel dettaglio l’attività che dovrà essere svolta;

**Scade il**: è possibile impostare una data di scadenza per l’attività;

**Data promemoria**: in questo campo può essere indicata la data in cui dovrà essere visualizzato un promemoria per l’attività successiva;

**Obbligatorio**: la spunta è semplicemente indicativa e non ha alcuna funzionalità effettiva;

**Crea attività**: apponendo la spunta su questa voce verrà creata una nuova voce nella sezione **Attività** di Fluentis per l’utente indicato nel campo **Prossimo utente**. Tale automatismo scatterà al momento del salvataggio del contatto;

**Invia Email**: mettendo la spunta su questa voce verrà inviata una mail di reminder all’utente indicato nel campo prossimo utente con le indicazioni relative all’attività successiva inserita. Tale automatismo scatterà al momento del salvataggio del contatto;

**Trasformazione**: in questo campo deve essere selezionata la Trasformazione di Arm che verrà utilizzata da Fluentis per la creazione della mail nel caso in cui sia stata spuntata la voce **Invia Email**. Dalla trasformazione dipendono diverse caratteristiche della mail, tra le quali l’oggetto, il corpo ed eventuali allegati.

