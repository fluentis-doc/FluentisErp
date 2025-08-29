---
title: Dnevnik knjiženja
sidebar_position: 3
---

Kada se prozor otvori, predložena je tekuća obračunska godina, a filtar za zapise postavljen je prema zadanim postavkama da pokriva odgovarajuću obračunsku godinu (datum obračuna računovodstva nije popunjen prema zadanim postavkama pod pretpostavkom da se želi raditi prema "formalnom" datumu);

Prijavljuju se početni podaci o broju stranice, saldu retka dugovne i potražne strane: program predlaže filtar snimaka također uzimajući u obzir datum posljednjeg definitivnog ispisa.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)


MOGUĆE OPCIJE: 

**Prikaži zaglavlje**: za upravljanje bilo kojim obrascima koji su već ispisani;  

**Definitivno**: aktivira način konačnog ispisa koji, nakon što se izvrši, blokira naknadne promjene u računovodstvenim evidencijama razdoblja;  

**Preštampati**: flag è pensato per permettere di **ristampare il giornale già stampato in definitivo**, attivandolo, i campi relativi agli ultimi saldi Dre / Avere, ultima pagina ed ultima riga, che sono stati popolati e memorizzati dalla stampa in definitivo, diventeranno editabili al fine di gestire una ristampa del libro giornale, senza dover procedere all'annullamento della precedente stampa definitiva, nè alla modifica e salvataggio dei valori precedenti all'interno della maschera dei *parametri di contabilità generale* (per ottenere gli stessi progressivi finali dopo la ristampa).

All'esecuzione della stampa in via definitiva il programma effettua un controllo sulla presenza di registrazioni antecedenti non stampate e sulla presenza all'interno del range di date già riportati in stampa. Una volta lanciato il processo di stampa (quindi la semplice anteprima non opera alcuna operazione, ma si dovrà eseguire la stampa fisica, anche su file, indipendentemente dal buon fine del processo) le registrazioni relative saranno bloccate in tutta la parte fiscale mentre saranno aggiornati i contatori memorizzati nella tabella  **[Parametri di contabilità:](/docs/configurations/parameters/finance/accounting-parameters)** all'interno di questa tabella è presente il pulsante per la cancellazione delle stampe definitive (può essere posto sotto specifici diritti utente): una volta premuto bisognerà indicare il range di date da sbloccare, dare conferma dell'operazione e poi aggiornare manualmente tutti i relativi contatori;

**Divisione**: permette di gestire la stampa specificando una delle divisioni presenti nel database;

**Da n. registrazione / A nr. registrazione**: permette di filtrare la stampa per numero di registrazione (meno significativo in caso di stampa definitiva).


| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa del libro giornale. |
| Stampa | Pulsante per eseguire la stampa fisica del libro giornale. |



:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE FISCALI**](/docs/video/finance/intro)
:::

