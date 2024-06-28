---
title: Libro giornale
sidebar_position: 3
---

All'apertura della finestra viene proposto l'esercizio contabile attuale ed il filtro per le registrazioni è settato di default per coprire l'esercizio contabile corrispondente (la data di competenza contabile non viene compilata per default supponendo di voler operare per data "formale"); 

vengono riportati i dati iniziali di numero pagina, riga e saldo dare e saldo avere: il programma propone il filtro delle registrazioni tenendo conto anche della data dell'ultima stampa in definitivo.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)

 

POSSIBILI OPZIONI: 

**Visualizza intestazione**: per gestire eventuali moduli DDTti già stampati;

**Definitiva**: attiva la modalità di stampa definitiva che, una volta eseguita, blocca successive modifiche nelle registrazioni contabili del periodo;



All'esecuzione della stampa in via definitiva il programma effettua un controllo sulla presenza di registrazioni antecedenti non stampate e sulla presenza all'interno del range di date già riportati in stampa. Una volta lanciato il processo di stampa (quindi la semplice anteprima non opera alcuna operazione, ma si dovrà eseguire la stampa fisica, anche su file, indipendentemente dal buon fine del processo) le registrazioni relative saranno bloccate in tutta la parte fiscale mentre saranno aggiornati i contatori memorizzati nella tabella  **[Parametri di contabilità:](/docs/configurations/parameters/finance/accounting-parameters)** all'interno di questa tabella è presente il pulsante per la cancellazione delle stampe definitive (può essere posto sotto specifici diritti utente): una volta premuto bisognerà indicare il range di date da sbloccare, dare conferma dell'operazione e poi aggiornare manualmente tutti i relativi contatori;

**Divisione**: permette di gestire la stampa specificando una delle divisioni presenti nel database;

**Da n. registrazione / A nr. registrazione**: permette di filtrare la stampa per numero di registrazione (meno significativo in caso di stampa definitiva).


| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa del libro giornale. |
| Stampa | Pulsante per eseguire la stampa fisica del libro giornale. |



:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE FISCALI**](/docs/video/finance/intro.md)
:::

