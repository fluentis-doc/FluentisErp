---
title: Valorizzazione magazzino
description: Procedura per la chiusura, valorizzazione e allineamento contabile del magazzino in Fluentis ERP.
keywords:
  - valorizzazione magazzino
  - chiusura magazzino
  - rimanenze
  - FIFO
  - allineamento contabile
sidebar_position: 6
schema: TechArticle
tags:
  - magazzino
  - valorizzazione
  - logistica
  - contabilità
last_update:
  author: Fluentis Documentation Team
---

# Valorizzazione magazzino

## Introduzione

:::important
La valorizzazione di magazzino in Fluentis è un elemento fondamentale per la gestione delle scorte e la determinazione del valore dei beni stoccati. La procedura consente di eseguire la chiusura del magazzino a una data specificata, registrando le rimanenze e allineando le informazioni logistiche con quelle contabili, garantendo così una gestione accurata delle risorse e dei costi associati.

La procedura di valorizzazione permette di configurare diversi parametri, come la causale di movimentazione per le rimanenze, e offre la flessibilità di selezionare i criteri di valorizzazione adeguati, come il costo ultimo o il costo medio. In questo modo, è possibile tenere conto delle movimentazioni effettuate nel corso dell'anno per ciascun magazzino, ottenendo così una panoramica dettagliata e aggiornata del valore delle scorte.

Inoltre, la procedura non solo esegue la chiusura di magazzino, ma crea automaticamente una registrazione di apertura per il giorno successivo, garantendo la continuità delle operazioni logistiche. Gli utenti possono anche monitorare le chiusure effettuate attraverso uno storico, che riporta i dati relativi ai costi e alle quantità valorizzate, facilitando così analisi e decisioni strategiche per il miglioramento delle performance aziendali.
:::

## Procedura di chiusura

La procedura consente di effettuare la chiusura del magazzino alla data inserita dall’utente nel campo **Data chiusura**.  
Di default viene proposta la data odierna.

In automatico viene creato un movimento di apertura con tutte le rimanenze, datato **Data chiusura + 1 giorno**, utilizzando la causale presente nelle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates) con il flag **Rimanenze** attivo.

### Pulsanti specifici

- **Chiusura**: permette di lanciare la procedura di chiusura che effettua una serie di controlli sulla congruenza dei dati di magazzino segnalando eventuali errori che dovranno poi essere corretti manualmente dall'operatore prima di procedere nuovamente; nel caso in cui non vi sia nessun errore la procedura effettuerà la chiusura di magazzino alla **Data chiusura** e l'apertura il giorno successivo con le rimanenze.

- **Crea valorizzazione**: utilizzato nelle localizzazioni estere (es. Romania, Croazia) per ricalcolare i valori dei movimenti di magazzino, integrandoli anche con la contabilità.

- **Ripristina chiusura**: permette di ripristinare l'ultima chiusura effettuata.

- **Allineamento con la contabilità**: utilizzato nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità (vedasi documentazione sottostante).

:::important Raccomandazione
La chiusura del magazzino è consigliata in particolare nel caso in cui vi sia un elevato numero di movimenti, perchè questa permette di mantenere nell’archivio i movimenti per una consultazione, ma allo stesso tempo le elaborazioni di calcolo giacenza, disponibilità e costi vengono snellite in quanto i calcoli partiranno dal giorno successivo all’ultima chiusura effettuata.
:::

<u>Le procedure seguenti sono specifiche per localizzazioni estere come Romania e Croazia.</u>

## Crea valorizzazione

La procedura **Crea valorizzazione** calcola i prezzi e modifica i valori nei movimenti di magazzino.  
È utilizzata quando i documenti risultano incompleti, non finalizzati o non conciliati per motivi quali:

- dati insufficienti (prezzi o quantità mancanti),
- errori del fornitore o dell’utente,
- ritardi nella consegna dei documenti,
- modifiche successive ai documenti esistenti.

Avviando questa procedura, l'applicazione ricalcola nuovamente i nuovi valori degli articoli (FIFO) e li inserisce direttamente nel documento esistente.      
Quindi, ricapitolando, la procedura modifica i valori nei documenti esistenti, non crea nuovi documenti che rimuovono/aumentano il valore. Di conseguenza, la procedura è **irreversibile** e non è possibile ripristinare i dati esistenti prima dell'esecuzione della procedura.      
Questa funzionalità si applica principalmente al periodo durante il quale viene eseguita la valorizzazione.      
Il ricalcolo (FIFO) e la modifica dei valori nei documenti iniziano dalla data di chiusura del magazzino.

L’elaborazione si applica al periodo valorizzato, iniziando dalla data di chiusura del magazzino.

:::danger Attenzione  
Controllare attentamente i valori nei [Parametri iniziali magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), soprattutto se la data di chiusura del magazzino appartiene all’anno precedente.
:::

*Esempio*:  
Se la data inizio è il 01.10.2023, mentre la data odierna potrebbe essere, ad esempio, il 28.3.2024.       
Avviando la procedura **Crea valorizzazione**, i valori nei documenti di magazzino sarebbero modificati dal 01.10.2023 fino alla data odierna. Quindi, poiché il 2023 è passato ed è probabilmente già chiuso finanziariamente, i valori nei documenti di magazzino dal 1.10.2023 al 31.12.2023 verrebbero modificati, alterando notevolmente i report già conclusi per il 2023.

## Allineamento con la contabilità

La procedura di **Allineamento con la contabilità** viene eseguita dopo **Crea valorizzazione**.

Dopo che la procedura di **Crea valorizzazione** è stata completata e i valori nei documenti di magazzino sono stati modificati, è necessario apportare modifiche anche ai documenti contabili correlati.        
In questa fase, la procedura di **Allineamento con la contabilità** allinea le modifiche apportate dalla valorizzazione del magazzino e modifica i valori nei registri contabili per garantire l'allineamento finanziario con i valori nei documenti di magazzino.

:::danger Attenzione
Anche questa procedura è irreversibile e modifica gli importi nei documenti esistenti.
:::


## Riepilogo e approfondimenti

La valorizzazione di magazzino consente di gestire la chiusura, la registrazione delle rimanenze e l’allineamento dei valori logistici e contabili. Le procedure dedicate alle localizzazioni estere permettono inoltre il ricalcolo dei valori (FIFO) e l’aggiornamento automatico dei documenti contabili.

*Approfondimenti utili*:

- [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates)  
- [Parametri iniziali magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- [Funzionalità, pulsanti e campi comuni](/docs/guide/common)
