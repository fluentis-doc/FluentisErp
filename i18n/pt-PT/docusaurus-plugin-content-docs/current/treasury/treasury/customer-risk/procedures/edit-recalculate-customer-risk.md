---
title: Modifica - Ricalcola rischio cliente
sidebar_position: 1
---

Le due maschere sostanzialmente gestiscono la visualizzazione dello stato complessivo del rischio nei confronti di un determinato cliente: il ‘Ricalcola rischio cliente' è una semplice richiesta spot della situazione attuale del cliente, mentre la maschera di modifica della procedura ‘Utilizzo fidi' consente di memorizzare ogni calcolo effettuato e visualizzarne quindi una serie storica.

Vediamo in dettaglio la lista dei campi visualizzata, che è sostanzialmente la stessa presente anche nella maschera dell'esposizione clienti.

In testata sono presenti i parametri di calcolo: il codice del cliente, la data di inizio calcolo (impostata di default dai parametri del modulo rischio cliente), la data finale di riferimento (impostata ad oggi), il numero di giorni di ritardo per gli effetti sbf e effetti al dopo incasso (impostati dai parametri del modulo, cui si rimanda), il flag di considerazione delle partite collegate a registrazioni provvisorie. Premendo il pulsante di calcolo appariranno i seguenti valori:

**Fatt. 12M**: è il fatturato (dall'area vendita, fatture di vendita) dei 12 mesi precedenti alla data di riferimento;

**Fatturato anno**: è il fatturato (dall'area vendita, fatture di vendita) dall'inizio dell'anno;

Nella sezione **Situazione partite aperte** saranno visibili i totali dare/avere e il saldo relativo alle partite aperte;

Nella sezione **Pagam da reg. provv.** saranno visualizzati gli eventuali importi di pagamento inseriti in registrazioni provvisorie;

Nella sezione **Situazione saldo contabile** saranno visibili i totali dare/avere e il saldo del mastrino di contabilità generale;

**Saldo partite/contabile**: ripropone i totali dare/avere calcolati dalle partite o dal saldo così come visualizzato nelle sezioni precedenti;

**Fatture da contabilizzare**: sono gli importi delle fatture (dei Tipi fattura collegati al fido) stampate ma non ancora contabilizzate;

**Ddt da fatturare**: sono gli importi dei  DDT (dei Tipi DDT collegati al fido) stampate ma non ancora fatturate;

**Ordini da evadere**: sono gli importi degli ordini (dei Tipi ordine collegati al fido) stampate, confermati ma non ancora evasi;

**Effetti emessi**: sono gli importi degli effetti (del modulo portafoglio effetti) emessi e contabilizzati, ma non ancora presentati

**Effetti presentati allo sconto-al sbf-all'incasso**: sono gli importi degli effetti presentati ma che hanno data scadenza (più i giorni dei parametri inseriti in testata del calcolo) superiore alla data di riferimento;

Sezione** insoluti**: sono qui visualizzati gli insoluti non contabilizzati, oppure (se il flag è inserito) anche quelli già contabilizzati, sia come importo che relativo numero;

Dalla somma dei valori precedenti viene calcolato il ‘Rischio cliente', che comparato al fido concesso, darà lo sconfinamento del fido.

Il campo **Scaduto** visualizza l'importo delle partite aperte ma già scadute, quale ulteriore elemento di analisi della situazione del cliente.



| Funzione | Significato |
| --- | --- |
| Salva | Il pulsante, presente in modifica di un fido già calcolato, consente di memorizzare il risultato ottenuto. |
| Calcola | Richiama la procedura per calcolare la situazione complessiva di rischio per il cliente. |






