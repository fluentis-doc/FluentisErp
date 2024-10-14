---
title: Unità di misura
sidebar_position: 13
---

All'interno della tabella delle ***Unità di misura*** dovremo innanzi tutto andare a codificare tutte quelle unità di misura che si dovessero rendere necessarie per la gestione del *Controlling*: andremo a codificare, tipicamente, le ore uomo e le ore macchina per riprendere i dati da produzione, piuttosto che le unità che servono alle registrazioni manuali della ***Prima nota movimenti fisici*** (kww, mq, nr teste, nr postazioni telefoniche, ecc. ecc.). Per ognuna di queste UM dovremo in particolare andare a definire la proprietà ***Tipo valutazione del tempo***, che prevede due opzioni:

- ***Stato***: quando le quantità rilevate sono sostanzialmente fisse, cioè si replicano ad ogni periodo
- ***Flusso***: quando sono specifiche del singolo periodo

:::tip nota
L'impostazione è determinante per la gestione che ***FluentisERP*** richiederà nell'inserimento delle quantità nella maschera della ***Prima nota movimenti fisici***: l'inserimento di una UM di *Stato* ***non richiederà***  l'indicazione obbligatoria di un ***Periodo di distribuzione***, in quanto la quantità indicata sarà replicata per ogni periodo del range inserito, mentre al contrario una UM di *Flusso* ***richiederà*** obbligatoriamente un ***Periodo di distribuzione*** per spalmare la quantità su ogni periodo del range inserito
:::

Per la ripresa da produzione dei tempi, inoltre, è necessario tener conto che le *dichiarazioni di produzione* rilevano sempre i tempi in *minuti*, e quindi abbiamo necessità di configuare come ***FluentisERP*** deve gestire la conversione nelle Unità di misura utilizzate per rilevare i tempi dei centri.
Dovremo innanzi tutto definire la conversione tra i minuti della produzione e la UM dei tempi che utilizzeremo nel *Controlling*: se abbiamo ad esempio una UM 'ore uomo', allora all'interno della tabella ***Unità di misura***, quindi, indicheremo nel tab ***Conversioni tra altre UM***
- *UM alternativa*: 'Min' (cioè la UM che ha i flag ***UM tempo***  e ***Minuti*** settati)
- *Fatt. Conv.*: 60
- *Da moltiplicare*: flag settato

In secondo luogo, dovremo agganciare queste UM del Controlling ai nostri *Centri aziendali produttivi*, cosa che si esegue nella tabella ***Unità di misura dei centri aziendali per il controlling***. In questa maschera andremo a configurare:

- l'[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) di riferimento della configurazione
- il [***Centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) produttivo che avrà una valorizzazione dei tempi da produzione
- l'unità di misura da utilizzare se per questo Centro si vuole rilevare il ***Tempo attrezzaggio***
- l'unità di misura da utilizzare se per questo Centro si vuole rilevare il ***Tempo uomo***
- l'unità di misura da utilizzare se per questo Centro si vuole rilevare il ***Tempo macchina***
- il range ***Da data*** e ***A data*** di validità della configurazione
- i flag che indicano se considerare o meno i vari tempi nel calcolo della produttività del centro

