---
title: Gestione Distinte
sidebar_position: 1
---

Da questa maschera si procede alla creazione di una nuova distinta: la maschera è la stessa anche per l'apertura in modifica/visualizzazione di una distinta già salvata.

Nel primo campo si va a indicare la tipologia della distinta da generare: il programma andrà a numerare progressivamente la distinta secondo il numeratore collegato al tipo per l'anno di riferimento, assegnato secondo l'anno della data di sistema.

La divisa della distinta viene proposta sulla base della divisa della società attiva: nel caso in cui sia assegnata una divisa differente dall'euro questa andrà poi a vincolare l'inserimento in distinta degli effetti espressi nella stessa divisa.

La sezione dei sottoconti può essere valorizzata automaticamente  sulla base dell'impostazione del tipo distinta selezionato: si tratta del sottoconto collegato all'anagrafica banca sul quale avverrà l'accredito finale al buon fine dell'operazione e del transitorio di presentazione.

A destra si imposta la tipologia di distinta in creazione: normalmente l'incasso salvo buon fine predefinito è la tipologia standard di gestione. In caso di distinta allo sconto il programma procederà ad effettuare un calcolo dello sconto sulla base dei tassi di interesse passivi caricati in anagrafica della banca.

La situazione del castelletto bancario propone i dati del fido sbf memorizzato in anagrafica e il residuo disponibile sulla base dell'importo degli effetti presentati ma non ancora accreditati.

Una serie di flag va a memorizzare se la distinta è stata stampata (questa condizione è obbligatoria per poter procedere alla sua contabilizzazione), se ne è stato creato un file telematico, se è stata contabilizzata e se si tratta di una distinta RID relativa a utenze.

Una volta completata la distinta sarà possibile procedere alla stampa diretta della stessa. Lo stato di distinta stampata è necessaria per poter procedere alla sua contabilizzazione, che può essere eseguita direttamente da questa maschera: sarà necessario aver predefinito la causale contabile all'interno dei parametri del modulo.






