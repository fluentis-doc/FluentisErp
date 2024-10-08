---
title: Causali di Contabilità
sidebar_position: 2
---

Nelle causali di contabilità, tab *Dettaglio registrazione*, è importante andare ad attivare il flag ***Centri di costo*** e ***Progetti***, se il cliente prevede di utilizzare una dimensione legata ai progetti/commesse. Questi flag saranno da attivare in tutte le causali che possono inserire dati economici d'interesse per il Controllo di gestione, non hanno interesse per le causali di apertura/chiusura conti come per quelle di giroconto iva del reverse charge o simili, che per loro natura movimentano sempre e solo conti patrimoniali.

Ulteriore flag d'interesse è quello presente di quadratura dei movimenti dei centri, presente nell'ultimo tab *Parametri* come ***Blocca registrazione se il valore dei centri non è uguale al movimento contabile***.

Infine, sempre nella scheda *Parametri*, abbiamo a disposizione il parametro *Ricalcolo automatico centri di costo, centri di ricavo e progetti*. Questo flag definisce come si deve comportare ***FluentisERP*** quando un utente entra in modifica in una registrazione contabile già salvata:
- se è impostato, ***FluentisERP*** ricalcolerà la sezione analitica ad ogni modifica della sezione dei movimenti di generale, riapplicando le logiche di calcolo predefinite e quindi resettando eventuali modifiche manuali operate dall'utente
- se non è impostato, ***FluentisERP*** non modificherà più l'analitica, che sarà lasciata in gestione all'utente per l'allineamento manuale. Al salvataggio, anche se non sono previsti blocchi di quadratura, l'utente riceverà comunque un messaggio di avviso su eventuali squadrature non solo a livello di importi, ma anche a livello di incoerenze tra i range di date competenza economica.

:::tip Nota
*In una società con il flag Controlling attivo*, il parametro di test della quadratura va di pari passo con il flag di quadratura obbligatoria che si può impostare a livello di singola *Dimensione* dei Centri aziendali; diventa irrilevante, invece, il flag di *Blocca registrazione se il valore delle commesse non è uguale al movimento contabile*, in quanto anche i progetti/commesse saranno valorizzati nella contabilità analitica in una specifica *Dimensione* dedicata alla valorizzazione dei costi/ricavi diretti di progetto.
Al contrario, *se la società non ha il flag Controlling attivo*, non avremo la gestione per dimensione nè l'integrazione dei progetti nell'analitica, per cui l'attivazione del flag di quadratura dei centri richiederà l'assegnazione dei movimenti economici al 100% sui centri di costo, mentre la quadratura nella sezione separata dei progetti/commesse sarà gestita in quadratura con l'apposito flag della causale.
:::
