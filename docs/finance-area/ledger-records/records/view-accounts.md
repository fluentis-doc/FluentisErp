---
title: Visualizzazione conti
sidebar_position: 2
---

La form consente di visualizzare i movimenti contabili di qualsiasi conto o sottoconto contabile, di qualsivoglia tipologia (attivo, passivo, costi, ricavi o anagrafico): tutti i movimenti di tutti gli esercizi contabili sono sempre in linea, ma chiaramente potranno essere modificati o meno a seconda della chiusura del periodo a seguito di stampe fiscali obbligatorie eseguite in definitivo o per operazioni di chiusura conti.

## Testata:

Nella parte superiore è obbligatorio inserire un codice di conto o direttamente un sottoconto di dettaglio: i campi di filtro successivi, invece, sono opzionali.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)

 

## La griglia dati: 

Risulta ordinata di default per data registrazione discendente**, (il criterio di ordinamento può essere comunque variato) e visualizza la lista dei movimenti secondo i filtri impostati: 

Con questa impostazione i dati vanno dunque letti tenendo presente che:

-  supponendo di filtrare con ‘da data registrazione' 01/01/yyyy, avremo nei campi (in alto) **Saldo precedente** i totali dare avere delle registrazioni antecedenti al 01/01/yyyy,

- nella griglia dei movimenti i dati saranno presentati dal più recente al più vecchio (temporalmente) procedendo a leggere dall'altro verso il basso 

- il campo **Progressivo** visualizzerà nell' ultima riga l'importo del campo **Saldo precedente** aggiornato del valore della riga stessa per poi essere aggiornato riga per riga dal basso verso l'alto.


:::note[Nota]
Il campo **Progressivo** è visibile solo nel caso in cui sia mantenuto l' ordinamento di default previsto per la form; negli altri casi il campo scompare e per farlo riapparire sarà necessario chiudere e riaprire la form e dunque rieseguire la ricerca. 
:::


 

## Totali alla base della maschera:

**Saldo selezione**: somma dare/avere delle righe che sono selezionate nella griglia con il mouse; selezionando tutto in griglia (con ctrl+a) questo campo visualizzerà lo stesso risultato del campo *Saldo corrente*

**Saldo corrente**: somma dare/avere delle righe visualizzate nella griglia (sempre tutte indipendentemente dalla selezione effettuata con il mouse);  

**Totale**: somma dare/avere del saldo precedente e del saldo corrente;  

**Saldo**: saldo finale, o in dare o in avere (che corrisponderà sempre al progressivo visualizzato nella prima riga).


:::tip[Come leggere e interpretare i totali]
**Dare/Avere precedente** (al range filtrato e dall'ultima apertura conti) **+ Saldo corrente = Totale** (entrambe le colonne dare / avere sono valorizzate sempre in questi 3 blocchi).

**Saldo precedente +  Saldo corrente** (come differenza dare-avere) **= Saldo** (attuale)

Il *Saldo Corrente* è rappresentato su entrambe le sezioni al fine di evidenziare analiticamente la formazione del *Totale* (inquanto per calcolarlo vengono sommate al Saldo corrente le due distinte sezioni *Dare / Avere precedente*)

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::


Nella griglia sono visibili due serie di sottoconti visualizzati, il sottoconto intestazione (che viene ripreso dal sottoconto intestatario della registrazione dal quale è ripreso il movimento stesso) e il sottoconto di dettaglio che è effettivamente il sottoconto di cui si stanno ricercando i movimenti. Ad esempio, nel caso in cui si stiano visualizzando i movimenti di un conto generico di costo, avremo nel sottoconto intestazione i codici dei fornitori che ci hanno inviato fatture registrate a quel conto di costo e nel sottoconto di dettaglio dei singoli sottoconto di costo specifici rilevati.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)

 

Inoltre è possibile "espandere" la riga tramite il comando + a sinistra per visualizzare l'intera scrittura contabile.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)

 

Ulteriori operazioni che si possono effettuare con riferimento alla griglia dei risultati:

- Doppio click sulla singola riga visualizzata: in questo caso, se l'utente ha i diritti relativi, si aprirà in modifica la registrazione di appartenenza del movimento;

- Premere il pulsante **Modifica** situato nella ribbon bar avrà lo stesso effetto del doppio click appena descritto;

- Premere il pulsante **Doc. Origine**, quando è attivo, andrà ad aprire in Visualizzazione (se l'utente ne ha il diritto) la fattura di acquisto o di vendita che con la contabilizzazione ha creato il movimento di contabilità selezionato;

AREA DI FILTRO: l'area di filtro è quella dedicata ad ospitare l'elenco dei possibili tipi di dati grazie ai quali è possibile effettuare una selezione. I Filtri sono tipicamente sempre in condizione 'AND' ed è possibile specificare più criteri di filtro contemporanei.

GRIGLIA DI RISULTATO: la griglia di risultato rappresenta l'elenco delle registrazioni che corrispondono ai dati di filtro sopra specificati. L'utente, dopo aver specificato i valori attraverso i quali desidera ottenere una ricerca delle registrazioni, se preme il pulsante [Ricerca ] presente nella relativa Ribbon, otterrà nella griglia di risultato l'elenco delle registrazioni desiderate.

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE REGISTRAZIONI CONTABILI**](/docs/video/finance/intro)
:::





