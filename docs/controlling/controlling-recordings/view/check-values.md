---
title: Valori di controllo
sidebar_position: 3
---

Questa form è destinata ad ospitare la riconciliazione tra i valori contabili ed i valori del controlling e risulta utilissima per tenere traccia delle attribuzioni e reversioni avvenute e dei conguagli calcolati dal sistema in relazione alle modalità previste per questa operazione.

I dati sono organizzati su cinque tab distinti:

**Valori sorgenti da attribuire:** rappresenta i movimenti contabili associati tipicamente al centro aziendale contraddistinto dal flag *Conti da riassegnare* (specifico per costi che la contabilità generale non è in grado di attribuire direttamente).

**Valori sorgenti attribuiti:** simile nella struttura al precedente evidenzia i dati effettivamente attribuiti dal centro aziendale destinato ai costi da riassegnare e i centri riceventi

**Valori revertiti:** evidenzia le reversioni (ribaltamenti) tra centri gestita dai cost driver. Il dato è rappresentato raggruppando per ogni cost driver il quale ha gestito i centri aziendali e per ogni centro il movimento connesso al conto contabile che è stato revertito.

**Valori commessa:** In questo tab si evidenziano le attribuzioni alle commesse avvenute sempre tramite cost driver

**Valori di conguaglio:** nell'ultimo tab si evidenziano le differenze tra il dato contabile e il dato del controlling, raggruppando i conti secondo l’impostazione del *Gruppo di conguaglio* di appartenenza inserito nel piano dei conti. 

:::tip Esempio
Quest'ultimo tab è importante per verificare, in particolare, quei conti (es. gli emolumenti del collegio sindacale) che la contabilità rileva posticipatamente e che quindi sono soggetti a rilevazione previsionale extracontabile nel controlling, al fine di controllarne il conguaglio infrannuale/annuale nella procedura di **Elaborazione periodi** dove è presente, nella sezione *Elaborazione dati contabili*, il campo **Tempi di bilanciamento** il quale permette di selezionare la logica *Infrannuale* piuttosto che *Annuale*.

Le logiche disponibili per il conguaglio sono quelle del campo **Tipo di Bilanciamento** ( [cfr. pagina sul Piano dei conti](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) ): *Riproporziona Gestionale* oppure *Differenze analitica*
:::
