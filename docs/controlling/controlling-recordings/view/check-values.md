---
title: Valori di controllo
sidebar_position: 3
---

Questa form è destinata ad ospitare la riconciliazione tra i valori contabili ed i valori del controlling e risulta utilissima per tenere traccia delle attribuzioni e ribaltamenti avvenuti e dei conguagli calcolati dal sistema in relazione alle modalità previste per questa operazione.

Prima di lanciare la ricerca dei dati sarà necessario impostate, in testata della maschera, i seguenti campi:
- l'***Area*** dei dati da ricercare, obbligatoria
- la ***Dimensione*** dei dati da ricercare, campo opzionale
- l'***Anno***, obbligatorio
- il range del ***Periodo da*** e ***Periodo a***, opzionale


I dati sono organizzati su cinque tab distinti:

***Valori sorgenti da attribuire:*** rappresenta i movimenti contabili associati al centro aziendale contraddistinto dal flag *Conti da riassegnare* (specifico per costi che la contabilità generale non è in grado di attribuire direttamente). L'ultima colonna *Importo* consente di verificare che tutte la attribuzioni si siano chiuse correttamente, senza lasciate dati aperti.

***Valori sorgenti attribuiti:*** simile nella struttura al precedente, evidenzia i dati effettivamente attribuiti dal centro aziendale destinato ai costi da riassegnare e i centri riceventi. Anche qui l'ultima colonna *Importo* consente di verificare che tutte la attribuzioni si siano chiuse correttamente, senza lasciate dati aperti.

**Valori revertiti:** evidenzia i ribaltamenti tra centri gestita dai cost driver. Il dato è rappresentato raggruppando per ogni Cost driver il quale ha gestito i centri aziendali e per ogni centro il movimento connesso al conto contabile che è stato ribaltato. Anche qui l'ultima colonna *Differenza* consente di verificare che tutti i ribaltamenti si siano chiuse correttamente, senza lasciate dati aperti a livello di *Cost driver*.

**Valori commessa:** In questo tab si evidenziano i ribaltamenti della dimensione Progetti/Commesse, avvenute sempre tramite cost driver

**Valori di conguaglio:** nell'ultimo tab si evidenziano le differenze tra il dato contabile e il dato del controlling, raggruppando i conti secondo l’impostazione del *Gruppo di conguaglio* di appartenenza inserito nel piano dei conti. La presenza di valori nella colonna *Differenza* su gruppi di conti che non prevedono una gestione extracontabile separata anticipata rispetto al dato contabile, sarà indice di una qualche assegnazione di valori a livello di registrazioni extracontabili di area, che richiederà un approfondimento per capirne l'origine ed eventualmente adattare il modello di analisi.

:::tip Esempio
Quest'ultimo tab è importante per verificare, in particolare, quei conti (es. gli emolumenti del collegio sindacale) che la contabilità rileva posticipatamente e che quindi sono soggetti a rilevazione previsionale extracontabile nel controlling, al fine di controllarne il conguaglio infrannuale/annuale nella procedura di **Elaborazione periodi** dove è presente, nella sezione *Elaborazione dati contabili*, il campo **Tempi di bilanciamento** il quale permette di selezionare la logica *Infrannuale* piuttosto che *Annuale*.
:::
