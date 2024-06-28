---
title: Tabs dell'Evento
sidebar_label: Tabs dell'Evento
sidebar_position: 1
---

:::info Info
Una volta aperta la form di dettaglio dell'*Evento*, nella parte superiore sono presenti alcuni parametri standard come *Codice, Nome, Descrizione, Data di creazione, Data ultima modifica*, *Abilitato*. I parametri più rilevanti sono  *Gruppi, Consenti sovrapposizione pianificazione, Attività, Durata massima* e *Risultato dell'ultima esecuzione*.
:::

### Parametri
Nella tab **Parametri** (in base al *Task* selezionato nel selettore posto nella parte superiore dell'interfaccia), possono essere specificati i parametri del *Task* con i relativi valori, che verranno poi utilizzati al momento dell'esecuzione dell'*Evento*.

### Logs
Nella tab **Logs** verranno visualizzati tutti i logs che si riferiscono all'esecuzione dell'*Evento*. E' importante sottolineare che il log non contiene solo informazioni generiche sull'esecuzione dell'*Evento*, ma anche eventuali messaggi di errore che si sono verificati su di esso.

### Schedulazioni
Nella tab **Schedulazioni** è possibile inserire una schedulazione, tramite i pulsanti posti sulla ribbon, da una finestra dedicata.

Con il pulsante *Aggiungi* o *Modifica Schedulazione*, l'app aprirà una finestra di configurazione della schedulazione, contenente i parametri necessari. Al suo interno si potranno scegliere quattro tipi di schedulazione:

:::info Info
Tutte le date sono comprensive di *data* e *ora*, tutti i tipi di schedulazione hanno un parametro *Data Inizio*.
:::

**Una volta**
> Questa opzione è utilizzata per operazioni non durature/ripetitive.

**Giornaliero**
> Questa opzione ha i parametri *Ripeti ogni (n) giorno/i*, *Ripeti ogni (n) (ore/minuti/secondi)* e *Da/A Ora*.

**Settimanale**
> Questa opzione ha il parametro *Ripeti ogni (n) settimana/e* e tutti i giorni della settimana disponibili come flag (la schedulazione eseguirà il task dei flag selezionati).

**Mensile**
> Questa opzione ha quattro selettori da cui si può scegliere: *Mesi*, *Giorni(n)*, *Giorni della settimana* e *Serie di giorni della settimana*.   

E alcune *impostazioni avanzate* che includono i parametri di schedulazione *data fine* e *abilitato* (quest'ultimo è un flag).